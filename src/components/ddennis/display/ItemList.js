/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 24-03-2017.
 */
import * as PIXI from 'pixi.js'
import { TweenMax } from 'gsap'

export default class ItemList extends PIXI.Container {


	constructor( ){
		super();
	}


	draw(arr, ItemClass, callback){
		this.itemArr = [];
		var len = arr.length;
		for (var i=0;i<len;i++){
			var item = new ItemClass();
			item.indexNum = i;
			var data = arr[i];
			item.setData(data);
			this.itemArr.push(item);
			callback(item, i)
		}

	}




	drawGrid(ItemClass, arr, padX= 10, padY = 10, maxWidth = 500, fadeIn = false){

		var xpos = 0;
		var ypos = 0;

		this.draw(arr, ItemClass,  (item, index) => {
			item.x = xpos;
			item.y = ypos;
			xpos = xpos + item.width + padX;

			if (xpos > maxWidth) {
				ypos = ypos +item.height + padY;
				xpos = 0;
			}

			this.addChild(item);


			if(fadeIn ){
				item.alpha = 0;
				TweenMax.to(item, 1, {alpha:1, delay:index/20, ease:"Expo.easeOut"});
			}

		})
	}


	hide(){

		if(this.itemArr.length === 0 ){
			console.log (" ItemList.js > NO ITEM TO HIDE = " );
		}

		var len = this.itemArr.length;
		for (var i=0;i<len;i++){
			var item = this.itemArr[i];
			item.alpha = 0;

		}
	}


	//---------------------------------------------------------------------------------------
	drawLine(arr,ItemClass,  padX= 10 , doRepos = true){

		var xpos = 0;
		this.draw(arr, ItemClass,  (item, index) => {
			item.x = xpos;
			if(doRepos ){
				xpos = xpos + item.width + padX;
			}

			this.addChild(item);
		})
	}


	drawVerticalLine(arr, ItemClass, padY = 10 , doRepos = true){
		var ypos = 0;
		this.draw(arr, ItemClass, (item, index) =>{
			item.orgYpos = ypos;
			item.orgXpos = item.x;
			item.y = ypos;

			if(doRepos ){
				ypos   = ypos + item.height + padY;
			}

			this.addChild(item);

			item.alpha = 0;
			item.y = item.orgYpos + 50;
			TweenMax.to(item , .4, {y:item.orgYpos, alpha:1, delay:index/20, ease:"Expo.easeOut"});


		});
	}



	cleanUp(){

		if(!this.itemArr || this.itemArr.length === 0){
			console.log (" ItemList.js > could not clean up ");
			return
		}

		var len = this.itemArr.length;

		for (var i=0;i<len;i++){
			var item = this.itemArr[i];
			this.removeChild(item);

			if(item.cleanUp ){
				item.cleanUp();
			}

			item = null;

		}


	}









//
// Static methods for drawing different kinds of list
//---------------------------------------------------------------------------------------

	static get DRAW_GRID(){
		return "DRAW_GRID"
	}

	static get DRAW_VERTICAL(){
		return "DRAW_VERTICAL"
	}

	static get DRAW_HORIZONTAL(){
		return "DRAW_HORIZONTAL"
	}

}
