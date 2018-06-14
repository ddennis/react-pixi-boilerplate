import * as PIXI from 'pixi.js'
import { TweenMax } from "gsap";

export class Spinner extends PIXI.Container {

	  
		constructor(){
			super()

			this.ring = new PIXI.Sprite.fromImage("spinnerring")
			this.ring.anchor.set(.5, .5)
			this.ring.scale.set(.5, .5)
			this.ring.alpha = .5
			/*this.ring.x = this.numContainer.x
			this.ring.y = this.numContainer.y + 20*/
			this.addChild(this.ring)


			var style = new PIXI.TextStyle({
				fontFamily: 'Arial',
				fontSize: 22,
				fontWeight: 'bold',
				//fill: ['#ffffff', '#00ff99'], // gradient
				fill: ['#e9e9e9', '#d9d9d9'], // gradient
				//stroke: '#4a1850',
				//strokeThickness: 5,
				dropShadow: true,
				dropShadowBlur: 4,
				dropShadowAngle: Math.PI / 6,
				//dropShadowColor: '#000000',
				dropShadowAlpha:.2
				/*dropShadowBlur: 4,
				dropShadowAngle: Math.PI / 6,
				dropShadowDistance: 6,
				wordWrap: true,
				wordWrapWidth: 440*/
			});

			this.txt = new PIXI.Text('Saving image', style);

			this.txt.x = -this.txt.width*.5;
			this.txt.y = -this.txt.height*.5;

			this.addChild(this.txt)


		}


		show(){

			TweenMax.to(this , 8, {alpha:1, ease:"Ease.Linear"});
			this.txt.alpha = 1
			this.ring.rotation = 0
			TweenMax.to(this.ring, 8, {rotation:80, ease:"Ease.Linear"});
			TweenMax.to(this.txt, .5, {alpha:.5, yoyo:true, repeat:-1, ease:"Ease.Linear"});

		}

		hide(){

			TweenMax.killTweensOf(this.ring);
			TweenMax.killTweensOf(this.txt);
			TweenMax.to(this , .5 , {alpha:0, ease:"Ease.Linear"});

		}


}
