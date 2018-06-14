/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-03-2018.
 */
import * as PIXI from 'pixi.js'

export class ErrorView extends PIXI.Container {


		constructor(){
			super()
			this.content   = new PIXI.Sprite.fromImage("sorry");
			this.addChild(this.content)

		}

}
