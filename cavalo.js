class Cavalo extends Peca 
{
	constructor(tipo, posI, posJ, id) 
	{
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j) 
	{
		// Verifica o escopo da movimentação
		if (Math.abs(super.PosI - i) > 2) 
			return false;
		if (Math.abs(super.PosJ - j) > 2) 
			return false;
		if (Math.abs(super.PosI - i) + Math.abs(super.PosJ - j) != 3) 
			return false;
		
		if (super.PosI == i || super.PosJ == j) // Verifica se está na diagonal
			return false;
		
		if(tabuleiro[i][j] != 0) // Se possue alguma peça no lugar
		{
			if(tabuleiro[i][j].Tipo != super.Tipo) // É peça do jogador oponente
				return true;
			else
				return false;
		}
		else // Se nao tem peça no lugar e está no escopo
			return true;
	}
}