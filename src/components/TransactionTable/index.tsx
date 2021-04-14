import { useEffect, useState } from 'react'
import { callApi } from '../../services/api'
import { TransactionRow } from '../TransactionRow'
import * as S from './styles'

export type Transaction = {
  id: number
  title: string
  value: number
  category: string
  createdAt: Date;
}

export function TransactionTable(){

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const getAllTransactions = async () => {
      const data = await callApi.getAllTransactions()
      setTransactions(data)
    }
    getAllTransactions()
  },[])

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