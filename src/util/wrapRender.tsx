import { Provider } from 'react-redux';
import { BrowserRouter, Routes } from 'react-router-dom';
import { ReactElement } from 'react';
import { store } from '../redux';
import { RenderOptions, render } from '@testing-library/react';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider >)
};

const wrapRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { wrapRender as render }