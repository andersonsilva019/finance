import axios from 'axios'
import { Transaction } from '../providers/Transaction'

const apiUrl = axios.create({
  baseURL: 'http://localhost:3000',
})


export const api = {
  async getAllTransactions(){
    const response = await apiUrl.get('api/transactions')
    return response.data.transactions
  },
  async newTransaction(data: Omit<Transaction, 'id' | 'createdAt'>){
    await apiUrl.post('api/transactions', data)
  }
}