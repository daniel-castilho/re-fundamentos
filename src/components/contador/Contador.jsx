import React, { Component } from "react";

import './Contador.css';

class Contador extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numero: props.numeroInicial || 0,
			passo: props.passoInicial || 5,
		};

		//this.inc = this.inc.bind(this);
	}

	inc = () => {
		this.setState({
			numero: this.state.numero + this.state.passo,
		});
	};

	dec = () => {
		this.setState({
			numero: this.state.numero - this.state.passo,
		});
	};

	setPasso = (e) => {
		this.setState({
			passo: +e.target.value,
		});
	};

	render() {
		return (
			<div className="Contador">
				<h2>Contador</h2>
				<h3>{this.state.numero}</h3>
				<div>
					<label htmlFor="passoInput">Passo: </label>
					<input
						type="passoInput"
						type="number"
						value={this.state.passo}
						onChange={this.setPasso}
					/>
				</div>
				<button onClick={this.inc}> + </button>
				<button onClick={this.dec}> - </button>
			</div>
		);
	}
}

export default Contador;
