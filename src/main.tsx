import reduxStore from '@/redux';
import { NextUIProvider } from '@nextui-org/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={reduxStore}>
            <NextUIProvider>
                <App />
            </NextUIProvider>
        </Provider>
    </BrowserRouter>
);
