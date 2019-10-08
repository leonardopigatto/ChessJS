class Peao extends Peca 
{
	constructor(tipo, posI, posJ, id) 
	{
		super(tipo, posI, posJ, id);
		this._jogada = 0;
	}
	
	mover(tabuleiro, i, j) 
	{
		if(super.Tipo == "BRANCO") // Se a peça for branca
		{
			if(i == (super.PosI - 1) && j == super.PosJ) // Pode andar uma casa para frente
			{
				if(tabuleiro[i][j] == 0) // Verifica se não tem nenhuma peça nessa posição do tabuleiro
				{
					this._jogada++;
					return true;
				}
				else 
					return false;
			}
			else if(i == (super.PosI - 2) && j == super.PosJ) // Pode andar duas casas para frente
			{
				if(this._jogada === 0) // Se for a primeira jogada, ele pode andar duas casas
				{
					if(tabuleiro[i][j] == 0 && tabuleiro[i + 1][j] == 0) // Verifica se não tem nenhuma peça nessa posição do tabuleiro e no caminho
					{
						this._jogada++;
						return true;
					}
					else 
						return false;
				}
			}
			
			if(((super.PosI - 1) >= 0 && (super.PosI - 1) <= 7) && ((super.PosJ - 1) >= 0 && (super.PosJ - 1) <= 7)) // Se puder acessar essa posição na matriz
			{
				if(tabuleiro[super.PosI - 1][super.PosJ - 1] != 0) // Se possui alguma peça que ele pode comer
				{
					if(tabuleiro[super.PosI - 1][super.PosJ - 1].Tipo != super.Tipo) // Verifica se a peça é do oponente
					{
						this._jogada++;
						return true;
					}
					else 
						return false;
				}
			}
			
			if(((super.PosI - 1) >= 0 && (super.PosI - 1) <= 7) && ((super.PosJ + 1) >= 0 && (super.PosJ + 1) <= 7)) // Se puder acessar essa posição na matriz
			{
				if(tabuleiro[super.PosI - 1][super.PosJ + 1] != 0) // Se possui alguma peça que ele pode comer
				{
					if(tabuleiro[super.PosI - 1][super.PosJ + 1].Tipo != super.Tipo) // Verifica se a peça é do oponente
					{
						this._jogada++;
						return true;
					}
					else 
						return false;
				}
			}
			
		}
		else if(super.Tipo == "PRETO") // Se a peça for preta
		{
			if(i == (super.PosI + 1) && j == super.PosJ) // Pode andar uma casa para frente
			{
				if(tabuleiro[i][j] == 0) // Verifica se não tem nenhuma peça nessa posição do tabuleiro
				{
					this._jogada++;
					return true;
				}
				else 
					return false;
			}
			else if(i == (super.PosI + 2) && j == super.PosJ) // Pode andar duas casas para frente
			{
				if(this._jogada === 0) // Se for a primeira jogada, ele pode andar duas casas
				{
					if(tabuleiro[i][j] == 0 && tabuleiro[i - 1][j] == 0) // Verifica se não tem nenhuma peça nessa posição do tabuleiro e no caminho
					{
						this._jogada++;
						return true;
					}
					else 
						return false;
				}
			}
			
			if(((super.PosI + 1) >= 0 && (super.PosI + 1) <= 7) && ((super.PosJ + 1) >= 0 && (super.PosJ + 1) <= 7)) // Se puder acessar essa posição na matriz
			{
				if(tabuleiro[super.PosI + 1][super.PosJ + 1] != 0) // Se possui alguma peça que ele pode comer
				{
					if(tabuleiro[super.PosI + 1][super.PosJ + 1].Tipo != super.Tipo)
					{
						this._jogada++;
						return true;
					}
					else 
						return false;
				}
			}
			
			if(((super.PosI + 1) >= 0 && (super.PosI + 1) <= 7) && ((super.PosJ - 1) >= 0 && (super.PosJ - 1) <= 7)) // Se puder acessar essa posição na matriz
			{
				if(tabuleiro[super.PosI + 1][super.PosJ - 1] != 0) // Se possui alguma peça que ele pode comer
				{
					if(tabuleiro[super.PosI + 1][super.PosJ - 1].Tipo != super.Tipo) // Verifica se a peça é do oponente
					{
						this._jogada++;
						return true;
					}
					else 
						return false;
				}
			}
		}
	}
}