// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddUser } from "./pages/user/addUser"
import { Home } from "./pages/user/home"
import { EditUser } from "./pages/user/editUser"

// import './App.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
