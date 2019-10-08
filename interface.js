var jogo = new JogoXadrez();

function init()
{
	gerar_tabuleiro();
	atualizar_jogo();
}

function select(i,j) {
	var tabuleiro = document.getElementById('tabuleiro');
	var obj = tabuleiro.rows[i].cells[j]; //AQUI NAO TINHA ; E NA FUNCAO ATUALIZAR JOGO TBM NAO

	if (select.obj_clicado === undefined || select.obj_clicado === null) 
	{	
		var peca = jogo.getTabuleiro().getPeca(i, j);

		console.log("Vez do jogador: " + jogo.JogadorAtual);

		if (peca == null)
			return;
		
		if(peca.Tipo == jogo.JogadorAtual) //Se a peça selecionada for do jogador que deve realizar a jogada
		{
			select.obj_clicado = obj;
			select.obj_bgcolor = obj.style.backgroundColor;
			select.peca = peca;
			obj.style.backgroundColor = "green";
		}
	}
	else if(select.obj_clicado == obj) 
	{
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
	}
	else if(jogo.moverPeca(select.peca, i, j)) 
	{
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
		atualizar_jogo();
		varificaSeAcabou();
		jogo.atualizaJogadorAtual();
	} 
	else 
	{
		alert("Movimento invalido!");
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
	}
}

function atualizar_jogo() 
{
	const pecas = ["", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];
	let tabuleiro = document.getElementById('tabuleiro');
	let tabData = jogo.getTabuleiro().getRepresentacao();

	for (var i = 0, n = tabuleiro.rows.length; i < n; i++) 
	{
		for (var j = 0, m = tabuleiro.rows[i].cells.length; j < m; j++) 
		{
			obj = tabuleiro.rows[i].cells[j];
			if(tabData[i][j] == 0) //Se nao tiver peça naquela posição do tabuleiro				
				obj.innerHTML = pecas[0];
			else
				obj.innerHTML = pecas[tabData[i][j].Id];			
		}
	}
}

function varificaSeAcabou()
{
	if(jogo.verificaSeAcabou() == "BRANCO")
	{
		reiniciar_jogo();
		alert("O JOGADOR BRANCO GANHOU O JOGO!");
	}
	else if(jogo.verificaSeAcabou() == "PRETO")
	{
		reiniciar_jogo();
		alert("O JOGADOR PRETO GANHOU O JOGO!");
	}
}

function reiniciar_jogo() 
{
	jogo.reiniciar();
	atualizar_jogo();
}

function gerar_tabuleiro()
{
	var table = "<table id=\"tabuleiro\">";
	var color = false;

	for (var i = 0; i < 8; i++) 
	{
		table += "<tr>";
		for (var j = 0; j < 8; j++) 
		{
			if (color)
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"silver\" onclick=\"select(" + i + "," + j + ");\"></td>";
			else
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"white\" onclick=\"select(" + i + "," + j + ");\"></td>";

			color = !color;
		}
		table += "</tr>";
		color = !color;
	}
	table += "</table>";
	document.write(table);
}

init();
