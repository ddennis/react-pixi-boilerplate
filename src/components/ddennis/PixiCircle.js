
import * as PIXI from 'pixi.js'

export class PixiCircle extends PIXI.Graphics {

	    constructor(radius, _color ,_fillAlpha,_lineThickness, _outlineColor){
			super()

			this.radius = radius	|| 50;

			this.fillAlpha =  _fillAlpha;
			if(_fillAlpha === undefined || _fillAlpha === null ){
				this.fillAlpha =  1;
			}

			this.lineThickness = _lineThickness || 2

			this.outlineColor = _outlineColor

			// set color
			this.color = _color;
			if(_color == undefined ){
				this.color  = 0xFF0000
			}


			if(this.fillAlpha != undefined  ){
				//    this.beginFill(this.color, 1);
			}

			//this.drawCircle(0,0, this.radius)
			this.redraw(this.radius, this.color)

		}


        redraw (radius, color) {
            this.clear ();

            if(this.fillAlpha != undefined  ){
                this.beginFill(this.color, this.fillAlpha);
            }

            if(this.outlineColor  ){
                this.lineStyle(this.lineThickness , this.outlineColor , 1)
            }

            this.drawCircle(0,0, this.radius)

            if(this.fillAlpha != undefined  ){
                this.endFill();
            }
        }

}

