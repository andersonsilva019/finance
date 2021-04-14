import styled, { css } from 'styled-components'

export const Row = styled.tr`
  ${({ theme }) => css`
    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${theme.colors.white};
      color: ${theme.colors.text};
      border-radius: 0.25rem;
    }
  `}
`