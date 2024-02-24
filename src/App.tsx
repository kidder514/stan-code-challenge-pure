import Header from './component/header/Header';
import { Outlet } from 'react-router-dom';

import './App.css'

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Outlet />
        </div>
    )
}
export default App;