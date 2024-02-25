import Header from './component/header/Header';
import { Outlet } from 'react-router-dom';

import './App.css'

const App = () =>
    <div className='app-wrapper'>
        <Header />
        <div className='content-wrapper'>
            <Outlet />
        </div>
    </div>

export default App;