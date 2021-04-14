import logoImg from '../../assets/logo.svg'
import * as S from './styles'

export function Header(){
  return (
    <S.Container>
      <S.Wrapper>
        <img src={logoImg} alt="Logo"/>
        <button type="button">Nova transação</button>
      </S.Wrapper>
    </S.Container>
  )
}