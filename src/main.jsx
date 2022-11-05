import React from 'react'
import ReactDOM from 'react-dom/client'
import WordsThroughTime from './components/WordsThroughTime/WordsThroughTime'
import { data, data2, data3 } from "./components/WordsThroughTime/js/request"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WordsThroughTime data={data}/>
  </React.StrictMode>
)
