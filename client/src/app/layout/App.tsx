import './App.css';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch } from 'react-router-dom';
import { ContactPage } from '@material-ui/icons';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import HomePage from '../../features/home/HomePage';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';




function App() {
  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <CssBaseline />
      <Header />

      <Container>
        <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/catalog" component={Catalog} />
         <Route exact path="/catalog/:id" component={ProductDetails}/>
         <Route exact path="/contact" component={ContactPage}/>
         <Route exact path="/server-error" component={ServerError}/>
         <Route component={NotFound}/>
         </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
