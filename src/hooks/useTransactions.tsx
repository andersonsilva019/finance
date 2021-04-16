import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export type Transaction = {
  id: number
  type: string
  title: string
  value: number
  category: string
  createdAt: string;
}

type TransactionProviderProps = {
  children: ReactNode
}

type TransactionContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: Omit<Transaction, "id" | "createdAt">) => Promise<void>
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

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
    const transactionsResponse = await api.newTransaction(transaction)
    setTransactions([...transactions, transactionsResponse])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction}} >
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionContext)
  return context
}