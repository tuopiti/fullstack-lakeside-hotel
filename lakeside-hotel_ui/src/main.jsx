import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { Provider } from 'react-redux';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
// import Store from './redux/room/Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={Store}> */}
        <App />
    {/* </Provider> */}
    
  </React.StrictMode>,
)
