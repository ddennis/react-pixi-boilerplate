
import * as PIXI from 'pixi.js'


export class PixiRoundRect extends PIXI.Graphics {

		constructor(_w, _h, _c, _a, radius = 25){
			super()

			this.clear();
			var color = _c || this._c;
			var al = _a || this._a;
			this.beginFill(_c, al);

			this.drawRoundedRect(0,0, _w ,_h, radius);
			this.endFill();

		}

}




/*

function PixiRoundRect(_w, _h, _c, _a){
	// call super constructor
	PIXI.Graphics.call (this );

	this._w = _w    || 50;
	this._h = _h    || 50;
	this._c = _c    || 0xCC0000;
	this._a = _a    || 1;

	this.redraw(this._w, this._h, this._c, this._a)
}


//Copy over prototype --------------------------------------------------------------------------------------
PixiRoundRect.prototype = Object.create( PIXI.Graphics.prototype );
PixiRoundRect.prototype.constructor = PixiRoundRect;

//---------------------------------------------------------------------------------------

PixiRoundRect.prototype.redraw = function (_w, _h, _c, _a) {

	this.clear();
    var color = _c || this._c;
    var al = _a || this._a;
	this.beginFill(_c, al);

	this.drawRoundedRect(0,0, _w ,_h, 25);
    this.endFill();
};


module.exports = PixiRoundRect;
*/
