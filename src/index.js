import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import App from './App';
import Deposit from './pages/Deposit';
import Hosting from './pages/Hosting';
import Tickets from './pages/Tickets';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Ticket from './pages/Ticket';
import Competitions from './pages/Competitions'
import Competition from './pages/Competition';
import Winners from './pages/Winners';
import ResetPassword from './pages/ResetPassword';
import Affiliate from './pages/Affiliate';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ColorModeScript />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/enter' element={<Login />} />
        <Route path='/forgotpassword/:token' element={<ResetPassword />} />
        <Route path='/app' element={<App />} >
          <Route path='deposit' element={<Deposit />} />
          <Route path='host' element={<Hosting />} />
          <Route path='tickets' element={<Tickets />} />
          <Route path='tickets/:ticketId' element={<Ticket />} />
          <Route path='profile' element={<Profile />} />
          <Route index element={<Competitions type="all"/>} />
          <Route path='competitions/:competitionId' element={<Competition />} />
          <Route path='mylive' element={<Competitions type="mylive"/>}/>
          <Route path='myended' element={<Competitions type="myended"/>}/>
          <Route path='affiliates' element={<Affiliate />} />

        </Route>
        <Route path='winners' element={<Winners />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);