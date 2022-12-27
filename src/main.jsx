import React from 'react'
import ReactDOM from 'react-dom/client'
import { DogApi } from './DogApi'
import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DogApi />
  </React.StrictMode>
)
