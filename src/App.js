import { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import './App.css';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
// AiOutlineMenuUnfold

function App() {
  const [showNav, setShowNav] = useState(true)

  return (
    <div className="App relative sm:block grid app-grid">
      <div onClick={() => setShowNav(true)} className=' hidden cursor-pointer absolute z-10 top-[2px] left-[15px] sm:flex space-x-[7px] p-2'>
        <div className='w-[12px] h-[12px] rounded-[50%] bg-[#8a50fd] '></div>
        <div className='w-[12px] h-[12px] rounded-[50%] bg-[#8a50fd] '></div>
        <div className='w-[12px] h-[12px] rounded-[50%] bg-[#8a50fd] '></div>
      </div>
      <Sidebar setShowNav={setShowNav} showNav={showNav}/>
      <div className='sm:hidden'></div>
      <Settings setShowNav={setShowNav}/>
    </div>
  );
}

export default App;
