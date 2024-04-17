import {useRoutes, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import MyOrder from './pages/MyOrder';
import MyOrders from './pages/MyOrders';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import Navbar from './Components/Navbar/index';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
/*    <>
      <div className='flex flex-col'>
        <Home/>
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SignIn/>
      </div>
    </> */
    <Router>
      <Navbar/>
      <AppRoutes/>
    </Router>
  );
}

export default App;