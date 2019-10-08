class Rainha extends Peca 
{
	constructor(tipo, posI, posJ, id) 
	{
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j) 
	{
		// Para andar na diagonal
		if(Math.abs(super.PosI - i) == Math.abs(super.PosJ - j)) // Verifica se é na diagonal a posição escolhida
		{
			var dirI = super.PosI - i;
			var dirJ = super.PosJ - j;
			
			// Verifica se tem alguma peça no caminho
			if(dirI > 0 && dirJ > 0) // Movimento para cima e esquerda da peca
			{
				for(var a = 1; a <= Math.abs(super.PosI - i); a++)
				{
					for(var b = 1; b <= Math.abs(super.PosJ - j); b++)
					{
						if(a == b) // Se for diagonal
						{
							if(tabuleiro[super.PosI - a][super.PosJ - b] != 0) // Se possue alguma peça no meio do caminho
							{
								if(super.PosI - a == i && super.PosJ - b == j) // É a posiçao final da peça
								{
									if(tabuleiro[super.PosI - a][super.PosJ - b].Tipo != super.Tipo) // É peça do jogador oponente
										return true;
									else
										return false;
								}
								else 
									return false;
							}
						}
					}
				}
			}
			else if(dirI > 0 && dirJ < 0) // Movimento para cima e direita da peca
			{
				for(var a = 1; a <= Math.abs(super.PosI - i); a++)
				{
					for(var b = 1; b <= Math.abs(super.PosJ - j); b++)
					{
						if(a == b) // Se for diagonal
						{
							if(tabuleiro[super.PosI - a][super.PosJ + b] != 0) // Se possue alguma peça no meio do caminho
							{
								if(super.PosI - a == i && super.PosJ + b == j) // É a posiçao final da peça
								{
									if(tabuleiro[super.PosI - a][super.PosJ + b].Tipo != super.Tipo) // É peça do jogador oponente
										return true;
									else
										return false;
								}
								else 
									return false;
							}
						}
					}
				}
			}
			else if(dirI < 0 && dirJ > 0) // Movimento para baixo e esquerda da peca
			{
				for(var a = 1; a <= Math.abs(super.PosI - i); a++)
				{
					for(var b = 1; b <= Math.abs(super.PosJ - j); b++)
					{
						if(a == b) // Se for diagonal
						{
							if(tabuleiro[super.PosI + a][super.PosJ - b] != 0) // Se possue alguma peça no meio do caminho
							{
								if(super.PosI + a == i && super.PosJ - b == j) // É a posiçao final da peça
								{
									if(tabuleiro[super.PosI + a][super.PosJ - b].Tipo != super.Tipo) // É peça do jogador oponente
										return true;
									else
										return false;
								}
								else 
									return false;
							}
						}
						
					}
				}
			}
			else if(dirI < 0 && dirJ < 0) // Movimento para baixo e direita da peca
			{
				for(var a = 1; a <= Math.abs(super.PosI - i); a++)
				{
					for(var b = 1; b <= Math.abs(super.PosJ - j); b++)
					{
						if(a == b) // Se for diagonal
						{
							if(tabuleiro[super.PosI + a][super.PosJ + b] != 0) // Se possue alguma peça no meio do caminho
							{
								if(super.PosI + a == i && super.PosJ + b == j) // É a posiçao final da peça
								{
									if(tabuleiro[super.PosI + a][super.PosJ + b].Tipo != super.Tipo) // É peça do jogador oponente
										return true;
									else
										return false;
								}
								else 
									return false;
							}
						}
					}
				}
			}
			
			return true;
		}
		// --------------------------------------------
		
		// Para andar para cima/baixo ou para os lados
		var dirI = super.PosI - i;
		var dirJ = super.PosJ - j;
		
		if(i == super.PosI)
		{
			if(dirJ > 0) // Para esquerda
			{
				for(var a = 1; a <= Math.abs(super.PosJ - j); a++)
				{
					if(tabuleiro[i][super.PosJ - a] != 0) // Se possue alguma peça no meio do caminho
					{
						if(super.PosI == i && super.PosJ - a == j) // É a posiçao final da peça
						{
							if(tabuleiro[i][super.PosJ - a].Tipo != super.Tipo) // É peça do jogador oponente
								return true;
							else
								return false;
						}
						else 
							return false;
					}
				}
			}
			else if(dirJ < 0) // Para direita
			{
				for(var a = 1; a <= Math.abs(super.PosJ - j); a++)
				{
					if(tabuleiro[i][super.PosJ + a] != 0) // Se possue alguma peça no meio do caminho
					{
						if(super.PosI == i && super.PosJ + a == j) // É a posiçao final da peça
						{
							if(tabuleiro[i][super.PosJ + a].Tipo != super.Tipo) // É peça do jogador oponente
								return true;
							else
								return false;
						}
						else 
							return false;
					}
				}
			}
			return true;
		}
		else if(j == super.PosJ)
		{
			if(dirI < 0) // Para baixo
			{
				for(var a = 1; a <= Math.abs(super.PosI - i); a++)
				{
					if(tabuleiro[super.PosI + a][j] != 0) // Se possue alguma peça no meio do caminho
					{
						if(super.PosI + a == i && super.PosJ == j) // É a posiçao final da peça
						{
							if(tabuleiro[super.PosI + a][j].Tipo != super.Tipo) // É peça do jogador oponente
								return true;
							else
								return false;
						}
						else 
							return false;
					}
				}
			}
			else if(dirI > 0) // Para cima
			{
				for(var a = 1; a <= Math.abs(super.PosI - i); a++)
				{
					if(tabuleiro[super.PosI - a][j] != 0) // Se possue alguma peça no meio do caminho
					{
						if(super.PosI - a == i && super.PosJ == j) // É a posiçao final da peça
						{
							if(tabuleiro[super.PosI - a][j].Tipo != super.Tipo) // É peça do jogador oponente
								return true;
							else
								return false;
						}
						else 
							return false;
					}
				}
			}
			return true;
		}
		// --------------------------------------------
		
		return false;
	}
}