import axios from 'axios'
import { Transaction } from '../components/TransactionTable'

type NewTransaction = Omit<Transaction, 'id'>;

const api = axios.create({
  baseURL: 'http://localhost:3000',
})


export const callApi = {
  async getAllTransactions(){
    const response = await api.get('api/transactions')
    return response.data.transactions
  },
  async NewTransaction(data: NewTransaction){
    await api.post('api/transactions', data)
  }
}