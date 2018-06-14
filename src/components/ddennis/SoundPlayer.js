/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 17-04-2018.
 */


import * as createPlayer from 'web-audio-player'
import * as createAudioContext from 'ios-safe-audio-context'

export default class SoundPlayer {

	constructor(props){

		this.sounds = []
		this.soundPath = []

		this.audioContext = createAudioContext()
		

		this.basePath = "./canvas_assets/mp3/"
	}


	play(mp3){

		const p = this.basePath + mp3;

		console.log (" SoundPlayer.js > p = " , p);

		let audio = null
		const index = this.soundPath.indexOf(p);

		if(index == -1 ){

			audio = createPlayer(p, {
			    context: this.audioContext			    
			 })
			//audio = createPlayer(p);
			this.soundPath.push(p);

			this.sounds.push(audio);

			audio.on('load', () => {
				console.log('Audio loaded...')

				// start playing audio file
				//audio.play()

				this.playLoadedsound(audio)

				// and connect your node somewhere, such as
				// the AudioContext output so the user can hear it!
				//audio.node.connect(audio.context.destination)
			})

			audio.on('ended', () => {
				console.log('Audio ended...')


			})

		}else{


			const audio = this.sounds[index];
			this.playLoadedsound(audio)


		}
	}




	playLoadedsound(audio){

		if(this.currentAudio ){
			this.currentAudio.stop()
		}

		this.currentAudio = audio

		audio.play();

		// and connect your node somewhere, such as
		// the AudioContext output so the user can hear it!
		audio.node.connect(audio.context.destination)

	}

}



