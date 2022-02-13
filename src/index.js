import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  //Here we add BrowserRouter for routing
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
