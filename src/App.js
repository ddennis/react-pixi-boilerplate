import React, { Component } from 'react';
import CanvasContainer from "./components/CanvasContainer";
import './App.css'

class App extends Component {

	render(){
		return (
			<div className="canvas-container">
				<CanvasContainer/>
			</div>
		)

	}
}

export default App;
