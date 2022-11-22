import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { AuthContexProvider } from './pages/Manager/context/authContext';
import { Provider } from 'react-redux';
import { SkeletonTheme } from 'react-loading-skeleton';
import { store } from '~/pages/SingleProduct/redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthContexProvider>
                <GlobalStyles>
                    <SkeletonTheme baseColor="#e9e9e9" highlightColor="#fff">
                        <App />
                    </SkeletonTheme>
                </GlobalStyles>
            </AuthContexProvider>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
