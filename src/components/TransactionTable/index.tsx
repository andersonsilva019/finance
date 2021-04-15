import { useContext } from 'react'
import { TransactionContext } from '../../providers/Transaction'
import { TransactionRow } from '../TransactionRow'
import * as S from './styles'


export function TransactionTable(){
  const {transactions} = useContext(TransactionContext)
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
          {transactions.map(transaction => {
            const newDate = transaction.createdAt
            return (
              <TransactionRow 
                key={transaction.id}
                title={transaction.title}
                value={transaction.value}
                type={transaction.type}
                category={transaction.category}
                date={newDate.toString()}
              />
            )
          })}
        </tbody>
      </table>
    </S.Container>
  )
}