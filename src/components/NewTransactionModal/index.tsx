import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { TransactionContext } from '../../providers/Transaction'
import * as S from './styles'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

type TransactionData = {
  title: string
  category: string
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

  const {createTransaction} = useContext(TransactionContext)

  const [type, setType] = useState('deposit')

  const [transactionData, setTransactionData] = useState<TransactionData>({
   title: '',
   category: ''
  })

  const [value, setValue] = useState(0)

  const changeTransactionData = (key: keyof typeof transactionData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setTransactionData({ ...transactionData, [key]: e.target.value })

  const handleCreateNewTransaction = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      await createTransaction({
        title: transactionData.title, 
        category: transactionData.category, 
        type, 
        value
      })

      onRequestClose()

      setType('deposit')
      setValue(0)

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.ButtonClose type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal"/>
      </S.ButtonClose>

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Título"
          value={transactionData.title}
          onChange={changeTransactionData('title')}
        />
        
        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <S.TransactionTypeContainer>
          <S.ButtonTypeTransaction
            activeColor="green"
            isActive={type === 'deposit'}
            type="button"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </S.ButtonTypeTransaction>
          <S.ButtonTypeTransaction
            activeColor="red"
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </S.ButtonTypeTransaction>
        </S.TransactionTypeContainer>
        
        <input 
          type="text" 
          placeholder="Categoria"
          value={transactionData.category}
          onChange={changeTransactionData('category')}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  )
}