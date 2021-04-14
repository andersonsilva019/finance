import { TransactionRow } from '../TransactionRow'
import * as S from './styles'

export function TransactionTable(){
  return(
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <TransactionRow 
            title="Desenvolvimento de web site"
            value={12000}
            category="Desenvolvimento"
            date="20/04/2021"
          />
          <TransactionRow 
            title="Desenvolvimento de web site"
            value={-1000}
            category="Desenvolvimento"
            date="20/04/2021"
          />
        </tbody>
      </table>
    </S.Container>
  )
}