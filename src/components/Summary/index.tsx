import { useTheme } from 'styled-components'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'
import * as S from './styles'

export function Summary(){
  const theme = useTheme()

  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposit += transaction.value
      acc.total += transaction.value
    }else {
      acc.withdraw += transaction.value
      acc.total -= transaction.value
    }
    return acc
  },{
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return(
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saidas"/>
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div style={{ background: theme.colors.green, color: theme.colors.white }}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </S.Container>
  )
}