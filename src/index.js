import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './assets/css/normalize.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
registerServiceWorker()
