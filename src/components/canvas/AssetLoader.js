/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 17-08-2016.
 */
var CONFIG = require('./CONFIG');
var PixiLoader = require('../ddennis/load/Loader');
var EventEmitter = require('eventemitter3');
// create loaders


function AssetLoader(ToasterService){
    'use strict';
    EventEmitter.call(this);
    var vm = this;

    vm.localAssetsloader = new PixiLoader();
    vm.logoLoader = new PixiLoader();

    //this.setUpLocalAssetLoader();

}


AssetLoader.prototype = Object.create(EventEmitter.prototype);
AssetLoader.prototype.constructor = AssetLoader;

// LOCAL ASSETS
//---------------------------------------------------------------------------------------
    AssetLoader.prototype.setUpLocalAssetLoader = function(){
        var vm = this;

        vm.localAssetsloader = new PixiLoader();
        vm.localAssetsloader.setupTextures(CONFIG.TEX);

        vm.localAssetsloader.getLoader().on('progress', function (loader, loadedResource) {
            //console.log('localAssets', loader.progress + '%')
        });

        vm.localAssetsloader.getLoader().on('complete', function (loader, loadedResource) {
            console.log (" AssetLoader.js > #### LOCAL ASSETS LOADED = ");
            vm.emit("LOCAL_ASSETS_COMPLETE" )
        });

        vm.localAssetsloader.load()

    };



AssetLoader.prototype.switchTiles = function (updatedTileArr, logoBasepath, logoColorBasepath){
    var vm = this;

    //Add the assets to the loader
    var queue = vm.logoLoader.addAsArray(updatedTileArr, logoBasepath, logoColorBasepath);

    if (queue == 0){

        console.log(" AssetLoader.js > NOTHING TO LOADE = ");
        console.log(" AssetLoader.js > ############# = ");

        // Notthing to load
        vm.emit("SWITCH_COMPLETE")

    } else {

        vm.logoLoader.getLoader().once('complete', function (loader, loadedResource){
            vm.emit("SWITCH_COMPLETE")
        });

        vm.logoLoader.load()
    }
};


AssetLoader.prototype.resetSwitchLoader = function (){
    this.logoLoader.reset();
};


// EXPORT
//---------------------------------------------------------------------------------------
module.exports = AssetLoader;

