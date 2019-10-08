class Bispo extends Peca 
{
	constructor(tipo, posI, posJ, id) 
	{
		super(tipo, posI, posJ, id);
	}
	
	mover(tabuleiro, i, j) 
	{
		console.log("aa");
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
		
		return false;
	}
}