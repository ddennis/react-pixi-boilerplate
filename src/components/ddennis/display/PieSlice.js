/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 14-04-2018.
 */
import * as PIXI from 'pixi.js'
import { TweenMax } from 'gsap'
import { PixiBox } from "../PixiBox";


export class PieSlice extends PIXI.Container {

		constructor(startAngle, endAngle, radius, color ){

			super();
			this._color =  color || 0xffffff;
			this._radius = radius || 100 ;

			this.graphics = new PIXI.Graphics();
			this._startAngle = startAngle || 0;

			this._endAngle =  endAngle || 60;
			this.animateTo = this._endAngle;

			this.tweenObj = {v:0}
			this.addChild(this.graphics )
			
			const bg = new PixiBox(10, 10, 0xCC00CC)
			this.addChild(bg)




		}


		move(delay, to){

			TweenMax.to(this.graphics ,1, { x:-100, yoyo:true, repeat:-1, ease:"Expo.easeOut"});


		}


		paint(){


			let STEP_SIZE = 3; 			// Drawing steps, in degrees.
			let BASE_ANGLE= 0;			// Where is the actual starting 0°, in degrees
			let A_TO_R = Math.PI / 180;

			//let a = 0
			//this.graphics.clear();

			var i=  0;
			var a = 0;							// Temp angle

			this.graphics.beginFill(this._color );
			//this.graphics.lineStyle(2, 0xCC00CC);
			//this.graphics.moveTo(0,0)

			// Outer arc
			console.log (" PieSlice.js > this._startAngle = " , this._startAngle);
			a = ( this._startAngle + BASE_ANGLE) * A_TO_R;

			this.graphics.moveTo(Math.cos(a) * this._radius, Math.sin(a) * this._radius);

			for (i = this._startAngle + STEP_SIZE; i < this._endAngle; i += STEP_SIZE) {
				a = (i + BASE_ANGLE) * A_TO_R;
				this.graphics.lineTo(Math.cos(a) * this._radius, Math.sin(a) * this._radius);
			}

			a = (this._endAngle + BASE_ANGLE) * A_TO_R;
			this.graphics.lineTo(Math.cos(a) * this._radius, Math.sin(a) * this._radius);

			this._startAngle = a
			this.graphics.lineTo(0, 0);
			this.graphics.endFill();

			// Inner arc, inverse
			/*if (this._innerRadius > 0) {
				for (i = this._endAngle; i > this._startAngle; i -= STEP_SIZE) {
					a = (i + BASE_ANGLE) * A_TO_R;
					this.graphics.lineTo(Math.cos(a) * this._innerRadius, Math.sin(a) * this._innerRadius);
				}

				a = (this._startAngle + BASE_ANGLE) * A_TO_R;
				this.graphics.lineTo(Math.cos(a) * this._innerRadius, Math.sin(a) * this._innerRadius);
			} else {
				this.graphics.lineTo(0, 0);
			}*/

			/*this.graphics.lineTo(0, 0);
			this.graphics.endFill();*/


		}

}
