import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import BookApp from './BookApp';
// import BookIndex from './BookIndex';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BookApp />, document.getElementById('root'));
registerServiceWorker();
