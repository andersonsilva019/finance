import axios from 'axios'
import { Transaction } from '../hooks/useTransactions'

const apiUrl = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const api = {
  async getAllTransactions(){
    const response = await apiUrl.get('transactions')
    return response.data.transactions
  },
  async newTransaction(data: Omit<Transaction, 'id' | 'createdAt'>){
    const response = await apiUrl.post<{transaction:Transaction}>('transactions', {
      ...data,
      createdAt: new Date()
    })
    const { transaction } = response.data
    return transaction
  }
}