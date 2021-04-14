import { useTheme } from 'styled-components'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import * as S from './styles'

export function Summary(){

  const theme = useTheme()

  return(
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saidas"/>
        </header>
        <strong>-R$ 500,00</strong>
      </div>
      <div style={{ background: theme.colors.green, color: theme.colors.white }}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </S.Container>
  )
}