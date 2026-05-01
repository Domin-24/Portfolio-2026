import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import BookCommuPage from './page/bookcommu.jsx'
import VRInteriorPage from './page/vrinterior.jsx'

// Extract path from query string redirect (from 404.html)
// Format: /?/bookcommu becomes /bookcommu
const getPath = () => {
  const search = window.location.search
  if (search.startsWith('?/')) {
    return search.slice(2) // Remove '?/'
  }
  return ''
}

const path = getPath()
const isBookCommuPage = path.includes('bookcommu')
const isVRInteriorPage = path.includes('vr-interior')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isBookCommuPage ? <BookCommuPage /> : isVRInteriorPage ? <VRInteriorPage /> : <App />}
  </StrictMode>,
)
