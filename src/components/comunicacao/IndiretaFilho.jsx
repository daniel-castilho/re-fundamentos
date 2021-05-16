import React from "react";

export default (props) => {
    const min = 20;
    const max = 50;
    const gerarIdade = () => parseInt(Math.random() * (min)) + max;
    const gerarNerd = () => Math.random() > 0.5
	return (
		<div>
			<div>Filho</div>
			<button
				onClick={(e) => {
					props.quandoClicar("João", gerarIdade(), gerarNerd());
				}}
			>
				Fornecer Informações
			</button>
		</div>
	);
};
