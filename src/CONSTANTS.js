import * as PIXI from "pixi.js";

/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 15-12-2017.
 */

export const DEBUG = process.env.REACT_APP_DEBUG === "true" ? true : false
export const facebookId = process.env.REACT_APP_FB_ID

export const stage = {
	height:0,
	width:0
};


export const getTxt = ( label = "test", size = 26, color = 'black',  _style ) =>{

	const style = _style || new PIXI.TextStyle({
		align: 'left',
		breakWords: false,
		dropShadow: false,
		dropShadowAlpha: 1,
		dropShadowAngle: Math.PI / 6,
		dropShadowBlur: 0,
		dropShadowColor: 'black',
		dropShadowDistance: 5,
		fill: color,
		//fillGradientType: _const.TEXT_GRADIENT.LINEAR_VERTICAL,
		//fillGradientStops: [],
		fontFamily: 'ProximaNova-Semibold',
		fontSize: size,
		fontStyle: 'normal',
		fontVariant: 'normal',
		fontWeight: 'normal',
		letterSpacing: 0,
		lineHeight: 0,
		lineJoin: 'miter',
		miterLimit: 10,
		padding: 0,
		stroke: 'black',
		strokeThickness: 0,
		textBaseline: 'alphabetic',
		trim: false,
		wordWrap: false,
		wordWrapWidth: 100,
		leading: 0
	});
	return new PIXI.Text(label, style);
}


export const assets = {
	spinnerring:"spinnerring.png"
};


