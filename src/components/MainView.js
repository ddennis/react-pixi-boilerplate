/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 14-03-2018.
 */
import * as PIXI from 'pixi.js'
import { TweenMax, Elastic, Expo } from 'gsap'
import * as CONSTANTS from '../CONSTANTS'

import { PixiBox } from "./ddennis/PixiBox";
import { Arc } from "./ddennis/display/Arc";


// This is a PIXI container - and you are now i pixi-land
//---------------------------------------------------------------------------------------

export class MainView extends PIXI.Container {

	constructor(_app, ){
		super();

		this.app = _app;			
		this.stageWidth  = this.app.screen.width;
		this.stageHeight = this.app.screen.height;

		
		CONSTANTS.stage.width  = this.stageWidth;
		CONSTANTS.stage.height = this.stageHeight;
	
		this.addBox()
		
	}

	addBox(){

		this.back = new PixiBox(10, this.stageHeight);
		this.addChild(this.back);
		TweenMax.to(this.back ,2, {width:this.stageWidth , yoyo:true, repeat:-1, ease:Expo.easeOut});

		this.box = new PixiBox(50, 50, 0xFFCC00)
		this.addChild(this.box);
		TweenMax.to(this.box ,2, {x:this.stageWidth - this.box.width, repeat:-1, ease: Elastic.easeOut.config(1, 0.3)});

		this.arc = new Arc(100, 90, 0XFFCC00);
		this.arc.x = 100;
		this.arc.y = 100;
		this.addChild(this.arc);
		
		
	}
}


