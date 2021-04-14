import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import Modal from 'react-modal'
import { createServer } from 'miragejs'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';


createServer({
  routes(){
    this.namespace = "api"

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          value: 12000,
          category: 'Desenvolvimento',
          createdAt: new Date(),
        }
      ]
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
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar</h2>
      </Modal>
      <GlobalStyles/>
    </ThemeProvider>
  );
}
