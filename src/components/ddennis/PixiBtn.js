/**
 * @author ddennis.dk - aka fantastisk.dk/works aka meresukker.dk
 */
//REQUIRE -------------------------------------------------------------

var PIXI = require ("pixi.js");
var PixiBox = require('./PixiBox');

// VARS ------------------------------------------------------------

function PixiBtn (label, color, padWidth, padHeight) {
    "use strict";
    PIXI.Container.call(this);
    //PIXI.EventTarget.call(this);

    var vm = this;

    vm.interactive = true;

    vm.padWidth = padWidth || 5;
    vm.padHeight = padHeight || 0;

    vm.text = new PIXI.Text(label.toUpperCase() , { fontSize: 15, fontFamily: 'TV2', fill: 'white', align: 'left' });
    vm.text.resolution = 2
    vm.text.x = vm.padWidth ;
    vm.text.y = vm.padHeight ;
    this.addChild (vm.text)

    var w = vm.padWidth + vm.text.width + vm.padWidth
    var h = vm.text.height + 8 + ( vm.padHeight * 2)

    vm.background = new PixiBox(w, h, color)
    vm.addChildAt(vm.background, 0)

    vm.tap = function (e) {

        //item.onTouch()
        vm.emit("CLICKED")
    };

};



//---------------------------------------------------------------------------------------
PixiBtn.prototype = Object.create(PIXI.Container.prototype);
PixiBtn.prototype.constructor = PixiBtn;
//---------------------------------------------------------------------------------------


// EXPORT
//---------------------------------------------------------------------------------------
module.exports = PixiBtn;
