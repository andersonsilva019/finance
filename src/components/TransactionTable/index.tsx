import { useTransactions } from '../../hooks/useTransactions'
import { TransactionRow } from '../TransactionRow'
import * as S from './styles'


export function TransactionTable(){
  const { transactions } = useTransactions()
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
            return (
              <TransactionRow 
                key={transaction.id}
                title={transaction.title}
                value={transaction.value}
                type={transaction.type}
                category={transaction.category}
                date={transaction.createdAt}
              />
            )
          })}
        </tbody>
      </table>
    </S.Container>
  )
}