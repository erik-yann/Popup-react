
import { useState } from 'react';
import './App.css';
import Popup from './components/popup';

function App() {

  const [show, setShow]=useState(false)
  return (
    <div className='flex flex-col items-center space-y-4'>
      <h1 className='text-2xl'>Démo Popup</h1>
      <button className='p-2 border border-blue-500 bg-blue-500 text-white hover:bg-gray-100 hover:text-blue-500 cursor-pointer'
        onClick={()=>{
          setShow(true)}
      }>Ouvrir la popup !</button>
      <Popup trigger={show} setTrigger={setShow}>
      <p>Personnalisez votre popup en y ajoutant ce que vous souhaitez!</p>
      </Popup>
    </div>
  );
}

export default App;
