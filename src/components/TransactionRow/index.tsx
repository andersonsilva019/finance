import { useTheme } from 'styled-components'
import * as S from './styles'

type TransactionRowProps = {
  title: string
  value: number
  category: string
  date: string
}

export function TransactionRow({title, category, value, date}: TransactionRowProps){
  const theme = useTheme()
  const colorValue = value < 0 ? theme.colors.red : theme.colors.green

  return(
    <S.Row>
      <td style={{ color: theme.colors.title}}>{title}</td>
      <td style={{ color: colorValue}}>{`R$ ${value},00`}</td>
      <td>{category}</td>
      <td>{date}</td>
    </S.Row>
  )
}