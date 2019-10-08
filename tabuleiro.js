class Tabuleiro 
{
	constructor() 
	{
		this._tabuleiro = new Array(8);
		for(var i = 0; i < 8; i++) 
		{
			this._tabuleiro[i] = new Array(8);
			for(var j = 0; j < 8; j++)
				this._tabuleiro[i][j] = 0;
		}
	}
	
	moverPeca(peca, i, j) 
	{
		if(peca.mover(this._tabuleiro, i, j))
			return true;
		
		return false;
	}

	addPeca(peca) 
	{
		this._tabuleiro[peca.PosI][peca.PosJ] = peca;
	}
	
	rmPeca(i, j) 
	{
		this._tabuleiro[i][j] = 0;
	}
	
	// Esse método retorna uma referência para o objeto peça que está na posição i,j do tabuleiro.
	// Se a posição não tiver uma peça pertencente ao jogador atual, esse método deve retornar null;
	getPeca(i, j) 
	{
		if(this._tabuleiro[i][j] === 0)
			return null;
		
		return this._tabuleiro[i][j];
	}
	
	// Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	getRepresentacao() 
	{
		return this._tabuleiro;
	}
}