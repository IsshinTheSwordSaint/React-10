import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InteractiveCard from './components/InteractiveCard.jsx'
import SimpleButton from './components/SimpleButton.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InteractiveCard />
    <SimpleButton label="Zaakceptuj" onClick={() => alert('Zaakceptuj clicked!')} color="green" />
    <SimpleButton label="Odrzuć" onClick={() => alert('Odrzuć clicked!')} color="red" />
  </StrictMode>
)
