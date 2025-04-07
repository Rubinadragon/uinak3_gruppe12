import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Profil from './components/Profil'
import { fetchAllLoggData } from './sanity/loggServices'
import { fetchAllPerson } from './sanity/personServices'

function App() {
  const [count, setCount] = useState(0)
  const [loggData, setLoggData] = useState([]);
  const [personer, setPersoner] = useState([]);


  const getAllLogData = async () => {
    const data = await fetchAllLoggData();
    setLoggData(data);
  };

  const getAllPersonData = async () => {
    const data = await fetchAllPerson();
    setPersoner(data);
  };

  useEffect(() => {
    getAllLogData();
    getAllPersonData();
  }, []);

  useEffect(() => {
    getAllPeople()
  }, [])

  return (
    <>
      <Layout >
        <Routes>        
        <Route path="/" element={<Home loggData={loggData} personer={personer} />} />
            <Route path="profle/:profile" element={<Profil />}/>
          </Routes>
      </Layout>
    </>
  )
}

export default App
