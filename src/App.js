import './App.css';
import { Dropdown } from './components/Content/Dropdown';
import { News } from './components/Content/News';
import { Options } from './components/Content/Options';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <>
      <div className='contenedor'>
        <Navbar></Navbar>
        <Options></Options>
        <Dropdown></Dropdown>
        <News></News>
      </div>
    </>
  );
}

export default App;
