import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Profil from './components/Profil'

function App() {
import { fetchAllLoggData } from './sanity/loggServices'

function App() {
  const [count, setCount] = useState(0)
  const [allLogData, setAllLoggData] = useState([]);

  const getAllLogData = async () => {
    const data = await fetchAllLoggData();
    setAllLoggData(data);
  };

  useEffect(() => {
    getAllLogData();
  }, []);

  console.log(allLogData);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path=":profile" element={<Profil/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
