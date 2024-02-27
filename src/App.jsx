import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navegacion } from './componentes/Nav';
import { Jumbo } from './componentes/Jumbo';
import { Footer } from './componentes/Footer';
import { Card } from './componentes/Card';
function App() { 
  return(
    <div>
     <Navegacion />
     <Jumbo />
     <Card />
     <Footer />
  </div>
  )
}

export default App
