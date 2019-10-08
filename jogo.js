// Identificador de cada peça!
const W_KING   = 1;  // "&#9812" ♔
const W_QUEEN  = 2;  // "&#9813" ♕
const W_ROOK   = 3;  // "&#9814" ♖
const W_BISHOP = 4;  // "&#9815" ♗
const W_KNIGHT = 5;  // "&#9816" ♘
const W_PAWN   = 6;  // "&#9817" ♙
const B_KING   = 7;  // "&#9818" ♚
const B_QUEEN  = 8;  // "&#9819" ♛
const B_ROOK   = 9;  // "&#9820" ♜
const B_BISHOP = 10; // "&#9821" ♝
const B_KNIGHT = 11; // "&#9822" ♞
const B_PAWN   = 12; // "&#9823" ♟

class JogoXadrez 
{
	constructor() 
	{
		this._tabuleiro = new Tabuleiro;
		this._jogador_atual = "BRANCO"; // A jogada inicial é do jogador da peça branca
		this.inicioJogo();
	}
	
	inicioJogo() 
	{
		for(var i = 0; i < 8; i++) 
		{
			for(var j = 0; j < 8; j++)
			{
				if (i === 1) //Coloca os PEÕES PRETOS
					this._tabuleiro.addPeca(new Peao('PRETO', i, j, B_PAWN));
				else if (i === 0 && j === 0 || i === 0 && j === 7) //Coloca as TORRES PRETAS	
					this._tabuleiro.addPeca(new Torre('PRETO', i, j, B_ROOK));
				else if (i === 0 && j === 1 || i === 0 && j === 6) //Coloca os CAVALOS PRETOS	
					this._tabuleiro.addPeca(new Cavalo('PRETO', i, j, B_KNIGHT));
				else if (i === 0 && j === 2 || i === 0 && j === 5) //Coloca os BISPOS PRETOS	
					this._tabuleiro.addPeca(new Bispo('PRETO', i, j, B_BISHOP));
				else if (i === 0 && j === 3) //Coloca a RAINHA PRETA	
					this._tabuleiro.addPeca(new Rainha('PRETO', i, j, B_QUEEN));	
				else if (i === 0 && j === 4) //Coloca o REI PRETO	
					this._tabuleiro.addPeca(new Rei('PRETO', i, j, B_KING));
					
				if (i === 6) //Coloca os PEÕES BRANCOS
					this._tabuleiro.addPeca(new Peao('BRANCO', i, j, W_PAWN));
				else if (i === 7 && j === 0 || i === 7 && j === 7) //Coloca as TORRES BRANCOS	
					this._tabuleiro.addPeca(new Torre('BRANCO', i, j, W_ROOK));
				else if (i === 7 && j === 1 || i === 7 && j === 6) //Coloca os CAVALOS BRANCOS	
					this._tabuleiro.addPeca(new Cavalo('BRANCO', i, j, W_KNIGHT));
				else if (i === 7 && j === 2 || i === 7 && j === 5) //Coloca os BISPOS BRANCOS	
					this._tabuleiro.addPeca(new Bispo('BRANCO', i, j, W_BISHOP));
				else if (i === 7 && j === 3) //Coloca a RAINHA BRANCO	
					this._tabuleiro.addPeca(new Rainha('BRANCO', i, j, W_QUEEN));	
				else if (i === 7 && j === 4) //Coloca o REI BRANCO	
					this._tabuleiro.addPeca(new Rei('BRANCO', i, j, W_KING));
			}
		}
	}
	
	get JogadorAtual()
	{
		return this._jogador_atual;
	}
	
	atualizaJogadorAtual()
	{
		if(this.JogadorAtual == "BRANCO")
			this._jogador_atual = "PRETO";
		else if(this.JogadorAtual == "PRETO")
			this._jogador_atual = "BRANCO";
	}
	
	verificaSeAcabou()
	{
		var flagBranco = 0;
		var flagPreto = 0;
		for(var i = 0; i < 8; i++) 
		{
			for(var j = 0; j < 8; j++)
			{
				if(this._tabuleiro.getPeca(i, j) != null)
				{					
					if(this._tabuleiro.getPeca(i, j).Id == W_KING)
						flagBranco = 1;
					if(this._tabuleiro.getPeca(i, j).Id == B_KING)
						flagPreto = 1;
				}
			}
		}
		
		if(flagBranco == 0)
			return "PRETO";
		if(flagPreto == 0)
			return "BRANCO";
	}
	
	getTabuleiro() 
	{
		return this._tabuleiro;
	}

	// Esse método reinicia o jogo.
	reiniciar() 
	{
		this._tabuleiro = new Tabuleiro;		
		this._jogador_atual = "BRANCO"; // A jogada inicial é do jogador da peça branca
		this.inicioJogo();
	}

	// Esse método move a peça para a posição i, j do tabuleiro.
	// Se o movimento não for possível, esse método deve retornar false. Caso contrário, deve retornar true;
	// Não é necessário se preocupar com a existência de outra peça. Caso a posição final da peça esteja ocupada por outra, a peça deverá ser substituída pela nova.
	// Sempre que esse método for executado com sucesso (retornando true) o turno deve ser atualizado, passando o controle para o outro jogador. Obs: não é permitido que o usuário mova uma peça de outro jogador.
	moverPeca(peca, i, j) 
	{
		// Não pode mover uma peça para fora do tabuleiro.
		if (i > 7 || i < 0 || j > 7 || j < 0)
			return false;

		// Não pode mover uma peça para o mesmo lugar.
		if (peca.i == i && peca.j == j)
			return false;

		if(this._tabuleiro.moverPeca(peca, i, j)) 
		{
			this._tabuleiro.rmPeca(peca.PosI, peca.PosJ);
			peca.PosI = i;
			peca.PosJ = j;
			this._tabuleiro.addPeca(peca);			
			return true;
		}
	}
}
