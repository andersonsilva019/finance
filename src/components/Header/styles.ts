import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1128px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      font-size: 1rem; // 16px
      color: ${theme.colors.white};
      background: ${theme.colors.blueLight};
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
      
    }
  `}
`