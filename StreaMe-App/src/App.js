import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import ChatApp from "./ChatApp";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from './Home';
// import Signup from './Signup';
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Adminpanel from "./components/AdminPanel"
import Profile from "./components/Profile"

import "./style.scss"
import ForgotPassword from "./components/ForgotPassword";

function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  };

  return (
    // <BrowserRouter>
    // <Routes>
    //   <div className="App">
    //     <div className="content">
         
    //         <Route path="/" element={<Home/>}/>
    //         <Route index element={
    //         <ProtectedRoute>
    //         <Route path="/app" element={<ChatApp/>}/>
    //         <Route path="/get-streaming" element={<GetStream/>}/>
    //         <Route path="/start-streaming" element={<StartStreaming/>}/>
    //         </ProtectedRoute>
    //         }
    //       />
    //         <Route path="/register" element={<Register/>}/>
    //         <Route path="/login" element={<Login/>}/>
    //     </div>
    //   </div>
    // </Routes>
    // </BrowserRouter>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="app" element={<ChatApp />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<Adminpanel />} />
        <Route path="myprofile" element={<Profile />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;