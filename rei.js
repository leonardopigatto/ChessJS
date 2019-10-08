class Rei extends Peca 
{
	constructor(tipo, posI, posJ, id) 
	{
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j) 
	{
		if((super.PosI > 0 && super.PosI < 7) && (super.PosJ > 0 && super.PosJ < 7)) // Se a peça não estiver na borda da matriz
		{
			if((i == super.PosI || i == super.PosI + 1 || i == super.PosI - 1) && (j == super.PosJ || j == super.PosJ + 1 || j == super.PosJ - 1)) // Escopo do movimento
			{
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
		else if(super.PosI == 0 && (super.PosJ != 0 || super.PosJ != 7)) // Se a peça estiver na borda de cima e nao for as da ponta
		{
			if(((i == super.PosI || i == super.PosI + 1) && (j == super.PosJ || j == super.PosJ + 1 || j == super.PosJ - 1)) && (tabuleiro[i][j].Tipo != super.Tipo || tabuleiro[i][j] == 0))
				return true;
			else 
				return false;
		}
		else if (super.PosI == 7 && (super.PosJ != 0 || super.PosJ != 7)) // Se a peça estiver na borda de baixo e nao for as da ponta
		{
			if(((i == super.PosI || i == super.PosI - 1) && (j == super.PosJ || j == super.PosJ + 1 || j == super.PosJ - 1)) && (tabuleiro[i][j].Tipo != super.Tipo || tabuleiro[i][j] == 0))
				return true;
			else 
				return false;
		}
		else if(super.PosJ == 0 && (super.PosI != 0 || super.PosI != 7)) // Se a peça estiver na borda lateral esquerda e nao for as da ponta
		{
			if(((i == super.PosI || i == super.PosI + 1 || i == super.PosI - 1) && (j == super.PosJ || j == super.PosJ + 1)) && (tabuleiro[i][j].Tipo != super.Tipo || tabuleiro[i][j] == 0))
				return true;
			else 
				return false;
		}
		else if (super.PosJ == 7 && (super.PosI != 0 || super.PosI != 7)) // Se a peça estiver na borda lateral direita e nao for as da ponta
		{
			if(((i == super.PosI || i == super.PosI + 1 || i == super.PosI - 1) && (j == super.PosJ || j == super.PosJ - 1)) && (tabuleiro[i][j].Tipo != super.Tipo || tabuleiro[i][j] == 0))
				return true;
			else 
				return false;
		}
		else if(super.PosI == 0 && super.PosJ == 0) // Se a peça estiver no canto superior esquerdo
		{
			if((i == 0 && j == 1) || (i == 1 && j == 0) || (i == 1 && j == 1))
				return true;
			else
				return false;
		}
		else if(super.PosI == 0 && super.PosJ == 7) // Se a peça estiver no canto superior direito
		{
			if((i == 0 && j == 6) || (i == 1 && j == 7) || (i == 1 && j == 6))
				return true;
			else
				return false;
		}
		else if(super.PosI == 7 && super.PosJ == 0) // Se a peça estiver no canto inferior esquerdo
		{
			if((i == 7 && j == 1) || (i == 6 && j == 0) || (i == 6 && j == 1))
				return true;
			else
				return false;
		}
		else if(super.PosI == 7 && super.PosJ == 7) // Se a peça estiver no canto inferior direito
		{
			if((i == 7 && j == 6) || (i == 6 && j == 7) || (i == 6 && j == 6))
				return true;
			else
				return false;
		}
	}
}