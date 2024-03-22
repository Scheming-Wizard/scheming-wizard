import {useRoutes, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import MyOrder from './Pages/MyOrder';
import MyOrders from './Pages/MyOrders';
import NotFound from './Pages/NotFound';
import SignIn from './Pages/SignIn';
import Navbar from './Components/Navbar/Index';

const AppRoutes = () => {
  let routes = useRoutes( [
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sign-in', element: <NotFound/>}
    ]);
  return routes;
};

function App() {
  return (
    <Router>
      <Navbar/>
      <AppRoutes/>
    <Router/>
      );
      }
      {/*    <>
      <div className='bg-gray-500'>Hello, World!</div>
      <div className ='flex flex-col'>
      <Home/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <NotFound/>
      <SignIn/>
      </div>
    </>
  );
}
*/}
      
export default App;
