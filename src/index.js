import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/system';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './RTK/Store';
import { useDispatch } from 'react-redux';
import { fetchEnglish } from './RTK/Slices/Languages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <NextUIProvider>
      <HashRouter>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </HashRouter>
    </NextUIProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
