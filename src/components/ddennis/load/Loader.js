/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 02-02-2016.
 */

import * as PIXI from 'pixi.js'

export class Loader extends PIXI.Container {

	constructor(){
		super();
		this.loader    = new PIXI.loaders.Loader();
		this.loadCount = 0

	}

	setupTextures(textureHashMap, url){

		for (var prop in textureHashMap) {
			var p = textureHashMap[prop];
			//this.add(p, textureOptions1);

			this.loader.add(key, url, cb)
			//this.add(p, );
		}
	};


	add(key, url, cb){

		var keyExist = this.loader.resources[key];
		if (keyExist){
			console.warn(" Loader.js > KEY EXIST I LOADER = ", key, keyExist);
			return keyExist
		}

		this.loadCount++;
		this.loader.add(key, url, cb)
		return false
	};

	load(){
		this.loader.load();
	};

	reset(){
		//this.finishedLoading = false
		this.loader.reset();
	};

	getLoader(){
		return this.loader
	};

}

/*
var PIXI = require ("pixi.js");



function PixiLoader () {
    "use strict";
    var vm = this;
    vm.finishedLoading = false;

    vm.textureOptions1 = { metadata: {choice: ["@2x.png"]} };
    vm.loadCount = 0;

    // create loader
    vm.loader = new PIXI.loaders.Loader();


    vm.loader.on('complete', function (){
        vm.finishedLoading = true
    });


    vm.setupTextures = function (textureHashMap) {

        for (var prop in textureHashMap) {
            var p = textureHashMap[prop];
            //this.add(p, textureOptions1);
            vm.add(p, vm.textureOptions1);
        }
    };

    vm.addAsArray = function (arr, urlPrefix, urlPrefixColor){
        var _urlPrefix      = urlPrefix || "";
        var _urlPrefixColor = urlPrefixColor || "";
        var len             = arr.length;
        vm.loadCount = 0;

        for (var i = 0; i < len; i++) {

            // Very important !!!
            // we are adding back the URL prefix, for easy loading
            var advertiserId = arr[i].advertiser;

            var imgUrl      = _urlPrefix + advertiserId + '.png';
            var colorImgUrl = _urlPrefixColor + arr[i].advertiser + '.png';

            arr[i].img      = imgUrl;
            arr[i].colorImg = colorImgUrl;

            vm.add(advertiserId, imgUrl);
            vm.add(advertiserId + '_color', colorImgUrl)
        }

        return vm.loadCount
    };



    vm.add = function (key, url, cb){

        var keyExist = vm.loader.resources[key];
        if(keyExist  ){
            console.warn (" Loader.js > KEY EXIST I LOADER = " , key, keyExist);
            return keyExist
        }

        vm.loadCount++;
        vm.loader.add(key , url, cb)
		return false
    };


    vm.load = function (){
        vm.loader.load();
    };

    vm.reset = function (){
        vm.finishedLoading = false
        vm.loader.reset();
    };

    vm.getLoader = function (){
        return vm.loader
    };


};


// EXPORT
//---------------------------------------------------------------------------------------
module.exports = PixiLoader;



*/
