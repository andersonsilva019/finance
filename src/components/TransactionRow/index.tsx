import { useTheme } from 'styled-components'
import * as S from './styles'

type TransactionRowProps = {
  title: string
  type: string
  value: number
  category: string
  date: string
}

export function TransactionRow({title, category, type , value, date}: TransactionRowProps){
  const theme = useTheme()
  const colorValue = type !== 'deposit' ? theme.colors.red : theme.colors.green

  return(
    <S.Row>
      <td style={{ color: theme.colors.title}}>{title}</td>
      <td style={{ color: colorValue}}>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(value)}
      </td>
      <td>{category}</td>
      <td>
        {new Intl.DateTimeFormat('pt-BR').format(new Date(date))}
      </td>
    </S.Row>
  )
}