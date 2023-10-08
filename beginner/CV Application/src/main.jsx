import React from 'react'
import ReactDOM from 'react-dom/client'
import {Generalinfo} from './components/Generalinfo.jsx'
import { Education } from './components/Education.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>CV Application</h1>
  <Generalinfo/>
  <Education/>
  </React.StrictMode>,
)
