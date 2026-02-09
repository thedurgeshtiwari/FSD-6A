import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Component/Card'
import Header from './Component/Header'
import Footer from './Component/Footer'
import UserList from './Component/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Card name={"Durgesh"} desc={"I am a student"} img={"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"}/>
     <UserList></UserList>
     <Footer/>
    </>
  )
}

export default App
