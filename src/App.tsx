import { useState } from 'react';
import Modal from 'react-modal'
import { ThemeProvider } from 'styled-components'
import { createServer, Model } from 'miragejs'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './providers/Transaction';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Site',
          type: 'deposit',
          category: 'Desenvolvimento',
          value: 7000,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Compras no mercado',
          type: 'withdraw',
          category: 'Alimentação',
          value: 200,
          createdAt: new Date()
        },
      ]
    })
  },

  routes(){
    this.namespace = "api"

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }
  
  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard />
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyles/>
      </TransactionProvider>
    </ThemeProvider>
  );
}
