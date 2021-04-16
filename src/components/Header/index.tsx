import logoImg from '../../assets/logo.svg'
import * as S from './styles'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps){
  return (
    <S.Container>
      <S.Wrapper>
        <img src={logoImg} alt="Logo"/>
        <button 
          type="button"
          onClick={onOpenNewTransactionModal} 
        >Nova transação</button>
      </S.Wrapper>
    </S.Container>
  )
}