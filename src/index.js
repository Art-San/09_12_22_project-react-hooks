import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import App from './app/App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
)

reportWebVitals()
// Во избежание ошибок React 18 & React Router 5 в index.js
// компонент <React.StrictMode> также необходимо переместить внутрь
// компонента <BrowserRouter> таким образом:

// {/* <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// </BrowserRouter> */}
