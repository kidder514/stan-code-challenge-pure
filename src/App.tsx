import { Outlet } from 'react-router-dom';
import Header from './component/header/Header';

import './App.css'
const App = () =>
    <div className='app-wrapper'>
        <Header />
        <Outlet />
    </div>

export default App;