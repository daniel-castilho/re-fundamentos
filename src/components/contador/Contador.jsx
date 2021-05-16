import React, { Component } from "react";

import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

import "./Contador.css";

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
			passo: e,
		});
	};

	render() {
		return (
			<div className="Contador">
				<h2>Contador</h2>
                <Display numero={this.state.numero} />
				<PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec}/>
			</div>
		);
	}
}

export default Contador;
