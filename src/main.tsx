import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Tasks } from './components/Tasks/index.tsx'

const enableMocking = async () => {
  const { worker } = await import('./mocks/browser.ts')
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Tasks />
    </React.StrictMode>,
  )
})
