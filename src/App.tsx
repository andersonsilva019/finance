import { ThemeProvider } from 'styled-components'
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

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Dashboard />
      <GlobalStyles/>
    </ThemeProvider>
  );
}
