import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
    let nome = '?';
    let idade = 0;
    let nerd = false;

	function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
		nome = nomeParam;
        idade = idadeParam;
        nerd = nerdParam;
	}

	return (
		<div>
			<div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
			<IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
		</div>
	);
};
