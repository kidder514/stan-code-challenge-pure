import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux';
import PageRoute from './PageRoute';

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <PageRoute />
        </BrowserRouter>
    </Provider >
);