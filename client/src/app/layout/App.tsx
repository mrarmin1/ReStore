import './App.css';
import Catalog from '../../features/catalog/Catalog';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './Header';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
         <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
