import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Profil from './components/Profil'
import { fetchAllLoggData } from './sanity/loggServices'

function App() {
  const [count, setCount] = useState(0)
  const [loggData, setLoggData] = useState([]);

  const getAllLogData = async () => {
    const data = await fetchAllLoggData();
    setLoggData(data);
  };

  useEffect(() => {
    getAllLogData();
  }, []);

  return (
    <>
      <Layout >
        <Routes>

          <Route path="/" element={<Home loggData={loggData} />}/>
            <Route path="profile/:profile" element={<Profil />}/>
          </Routes>
      </Layout>
    </>
  )
}

export default App
