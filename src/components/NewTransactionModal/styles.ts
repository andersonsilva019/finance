import styled, { css, DefaultTheme } from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.title};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      background: ${theme.colors.inputBackground};
      border: 1px solid #d7d7d7;
      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: ${theme.colors.text};
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type=submit]{
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: ${theme.colors.green};
      color: #FFF;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9)
      }
    }
  
  `}
`

export const ButtonClose = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;

  transition: filter 0.2s;
  
  &:hover {
    filter: brightness(0.8);
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

const colors = {
  green: (theme: DefaultTheme) => theme.colors.green,
  red: (theme: DefaultTheme) => theme.colors.red,
}

export const ButtonTypeTransaction = styled.button<{ isActive: boolean, activeColor: 'green' | 'red' }>`
  ${({ theme, isActive, activeColor }) => css`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${
      isActive 
      ? transparentize(0.9,colors[activeColor](theme)) 
      : 'transparent'};

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${theme.colors.title};
    }
  `}
`