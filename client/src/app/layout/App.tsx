import './App.css';
import HomePage from '../../features/home/HomePage';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './Header';
import { Route } from 'react-router-dom';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';



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
        
         <Route exact path="/" component={HomePage} />
         <Route exact path="/catalog" component={Catalog} />
         <Route exact path="/catalog/:id" component={ProductDetails}/>
         <Route exact path="/contact" component={ContactPage}/>
         
      </Container>
    </ThemeProvider>
  );
}

export default App;
