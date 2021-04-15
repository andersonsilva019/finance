import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

export type Transaction = {
  id: number
  type: string
  title: string
  value: number
  category: string
  createdAt: Date;
}

type TransactionProviderProps = {
  children: ReactNode
}

type TransactionContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: Omit<Transaction, "id" | "createdAt">) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider({children}: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const getAllTransactions = async () => {
      const data = await api.getAllTransactions()
      setTransactions(data)
    }
    getAllTransactions()
  },[])

  const createTransaction = async (transaction: Omit<Transaction, "id" | "createdAt">) => {
    await api.newTransaction(transaction)
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction}} >
      {children}
    </TransactionContext.Provider>
  )
}