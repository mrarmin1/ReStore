import './App.css';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch } from 'react-router-dom';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import HomePage from '../../features/home/HomePage';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';
import BasketPage from '../../features/basket/BasketPage';
import { useCallback, useEffect, useState } from 'react';
import LoadingComponent from './LoadingComponent';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import { useAppDispatch } from '../store/configureStore';
import { fetchBasketAsync } from '../../features/basket/basketSlice';
import Login from '../../features/account/Login';
import Register from '../../features/account/Register';
import { fetchCurrentUser } from '../../features/account/accountSlice';
import PrivateRoute from './PrivateRoute';
import Orders from '../../features/orders/Orders';
import Inventory from '../../features/admin/Inventory';


function App() {
   const dispatch = useAppDispatch();
   const [loading, setLoading] = useState(true);

   const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

   useEffect(() => {
    initApp().then(() => setLoading(false));
   }, [initApp])

  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  if(loading) return <LoadingComponent message='Initialising app ...' />
  
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <CssBaseline />
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <Container sx={{mt : 4}}>
          <Switch>
             <Route exact path="/catalog" component={Catalog} />
             <Route exact path="/catalog/:id" component={ProductDetails}/>
             <Route exact path="/server-error" component={ServerError}/>
             <Route exact path="/basket" component={BasketPage}/>
             <PrivateRoute exact path="/checkout" component={CheckoutPage}/>
             <PrivateRoute exact path="/orders" component={Orders}/>
             <PrivateRoute roles={['Admin']} path='/inventory' component={Inventory} />
             <Route exact path="/login" component={Login}/>
             <Route exact path="/register" component={Register}/>
             <Route component={NotFound}/>
          </Switch>
        </Container>
         )}/>     
    </ThemeProvider>
  );
} 

export default App;
