import { createRoot } from 'react-dom/client'
import App from './App'           // ✅ remove the `.tsx` extension
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
