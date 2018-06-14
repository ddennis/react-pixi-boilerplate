var PIXI = require("pixi.js");

export class PixiBox extends PIXI.Graphics {

	constructor(_w, _h, _c, _a){
		super();
		this._w = _w || 50;
		this._h = _h || 50;
		this._c = _c || 0xCC0000;
		this._a = _a || 1;

		this.redraw(this._w, this._h, this._c, this._a)

	}

	redraw(_w, _h, _c, _a){

		this.clear();
		let al    = _a || this._a;
		this.beginFill(_c, al);
		this.drawRect(0, 0, _w, _h);
		this.endFill();
	};

}




