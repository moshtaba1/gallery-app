import React, {useState} from 'react';
import './App.css';
import MainSection from './Components/MainSection/MainSection';
import Navbar from './Components/NavBar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [subject, setSubject] = useState("nature");

  return (
    <>
      <Navbar setSubject={setSubject}/>
      <Sidebar setSubject={setSubject}/>
      <MainSection subject={subject}/>
    </>
  );
}

export default App;
