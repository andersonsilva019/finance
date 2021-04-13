import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <h1>Olá</h1>
    </ThemeProvider>
  );
}
