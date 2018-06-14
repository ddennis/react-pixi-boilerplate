/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 13-03-2018.
 */
import React, { Component } from 'react'
import * as PIXI from 'pixi.js';
import { MainView } from "./MainView";

import * as CONSTANTS  from '../CONSTANTS'

export default class CanvasContainer extends Component {

	constructor(props){
		super(props);
		this.state = {users:[],isActive:false}
	}


	componentDidMount() {
		this.app = new PIXI.Application(window.innerWidth, window.innerHeight, {transparent:true});
		this.pixiElement.appendChild(this.app.view);
		this.app.interactive = true;
		this.startLoading ();
	};


	componentWillUnmount() {
		this.app.stop();
	}


// Lets load some assets upfront
//---------------------------------------------------------------------------------------

	startLoading(){

		this.loader = new PIXI.loaders.Loader();
		const urlPrefix = '../canvas_assets/';
		for (var item in CONSTANTS.assets) {
			const url = urlPrefix + item;
			this.loader.add(item, url)
		}


		this.loader.on('error', this.onLoadError.bind(this));
		this.loader.on('complete', this.assetsLoadComplete.bind(this));

		this.loader.load()
	}


// WHEN ASSETS HAS LOADED
//---------------------------------------------------------------------------------------
	assetsLoadComplete(loader, resoureArr){
		this.startApp()
	}

// IF A ASSET FAILES
//---------------------------------------------------------------------------------------
	onLoadError(loader, k){
		console.log ("ERROR -  CanvasContainer.js > load ERROR = " , loader);
	}

// KICK OFF THE APP
//---------------------------------------------------------------------------------------
	startApp(){
		this.mainView = new MainView(this.app);
		this.app.stage.addChild(this.mainView);
		this.app.start();
	}


	render(){
		return (
			<div style={{position:"absolute", top:0, left:0}} >
				<div ref={(thisDiv) => {this.pixiElement= thisDiv}} />
			</div>
		);
	}


}



