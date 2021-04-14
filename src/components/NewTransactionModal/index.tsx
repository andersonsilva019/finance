import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import * as S from './styles'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

  const [type, setType] = useState('deposit')

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

      <S.Container>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Título"
        />
        
        <input 
          type="number" 
          placeholder="Valor"
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
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  )
}