/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 14-04-2018.
 */
import * as PIXI from 'pixi.js'

export class Arc extends PIXI.Graphics {


		constructor(r = 100, degrees = 90, color = 0xD02D2D){

			super();
			const radians = degrees * (3.1459 / 180);
			this.beginFill(color);
			this.moveTo(0, 0);
			this.arc(0, 0, r, 0, radians);
			this.endFill();
		}

}
