class Peca 
{
	constructor(tipo, posI, posJ, id) 
	{
		this._tipo = tipo; //determina se a peça é branca ou preta
		this._posI = posI; //determina a posição i da peça no tabuleiro
		this._posJ = posJ; //determina a posição j da peça no tabuleiro
		this._id = id; //determina o identificador da peça
	}
	
	mover(tabuleiro, i, j) 
	{
		
	}
	
	get Tipo() 
	{
		return this._tipo;
	}
	
	set Tipo(tipo) 
	{
		this._tipo = tipo;
	}
	
	get PosI() 
	{
		return this._posI;
	}
	
	set PosI(posI) 
	{
		this._posI = posI;
	}
	
	get PosJ() 
	{
		return this._posJ;
	}
	
	set PosJ(posJ) 
	{
		this._posJ = posJ;
	}
	
	get Id() 
	{
		return this._id;
	}
	
	set Id(id) 
	{
		this._id = id;
	}
}