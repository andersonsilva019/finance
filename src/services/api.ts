import axios from 'axios'
import { Transaction } from '../components/TransactionTable'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const callApi = {
  async getAllTransactions(){
    const response = await api.get<Transaction[]>('api/transactions')
    return response.data
  }
}