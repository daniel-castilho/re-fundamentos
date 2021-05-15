import React from "react";
import produtos from "../../data/produtos";

import './TabelaProdutos.css'

export default (props) => {

    const produtosTr = produtos.map((produto, index) => {
        return (
            <tr key={produto.id} className={index % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>CAD$ {produto.preco}</td>
            </tr>
        )
    })

    return (
		<div className="TabelaProdutos">
			<table border="0">
                <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                {produtosTr}
            </table>
		</div>
	);
}