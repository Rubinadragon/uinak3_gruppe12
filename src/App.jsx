import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Profil from './components/Profil'
import { fetchAllLogs } from './sanity/loggServices'
import { fetchAllPersons } from './sanity/personServices'

function App() {
  const [count, setCount] = useState(0)
  const [logs, setLoggs] = useState([]);
  const [persons, setPersons] = useState([]);


  const getLogs = async () => {
    const data = await fetchAllLogs();
    setLoggs(data);
  };

  const getPersons = async () => {
    const data = await fetchAllPersons();
    setPersons(data);
  };

  useEffect(() => {
    getLogs();
    getPersons();
  }, []);

  return (
    <>
      <Layout persons={persons}>
        <Routes>        
        <Route path="/" element={<Home logs={logs} persons={persons} />} />
          <Route path="profile/:profile" element={<Profil />}/>
          </Routes>
      </Layout>
    </>
  )
}

export default App
