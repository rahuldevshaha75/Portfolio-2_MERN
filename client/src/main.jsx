import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import '../src/assets/css/style.css'
import 'bootstrap'
import 'react-icons'
import '../src/assets/css/layout.css'
import '../src/assets/css/Menu.css'
import '../src/assets/css/about.css'
import '../src/assets/css/TechStackPage.css'
import './assets/css/ProjectsPage.css'
import './assets/css/EducationPage.css'
import './assets/css/ExperiencePge.css'
import './assets/css/ContactPage.css'
import {ThemeProvider} from './components/StateManage/LightDark.jsx'
import './assets/css/MobileNav.css'

createRoot(document.getElementById('root')).render(

    <ThemeProvider>
            <StrictMode>
                <App/>
            </StrictMode>
    </ThemeProvider>

)
