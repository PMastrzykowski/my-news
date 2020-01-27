import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));