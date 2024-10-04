import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sidebar from './Sidebar';
import Basic from './Basic';
import Topbar from './Topbar';
import Perfil from './Perfil';
import Compra from './Compra';
import Forum from './Forum';
import Calendario from './Calendario';
import Login from './Login';
import ForumCriar from './ForumCriar';
import ForumVer from './ForumVer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Topbar />
    <Sidebar />
    <Basic />
    <Perfil />
    <Compra />
    <Forum />
    <Calendario />
    <Login />
    <ForumCriar />
    <ForumVer />
  </React.StrictMode>
);
