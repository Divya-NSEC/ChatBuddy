import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/home/nav.jsx';
import Main from './components/home/Section.jsx';
import 'boxicons/css/boxicons.min.css';
import Last from './components/home/Footer.jsx';





function App() {
 

  return (
    <div>
        <Nav></Nav>
        <Main></Main>
        <Last></Last>
    </div>
  );
}
export default App
