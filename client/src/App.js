import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 페이지
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Account from "./pages/Account/Accounts";
import NotFound from "./pages/NotFound";

// 컴포넌트
import Write from "./components/Content/Write";
import List from './components/Content/List';
import ErrorModal from "./components/common/ErrorModal";


import './App.css';

export default function App() {

  const [localStrData, setLocalStrData] = useState("");

  

  const WrittenData = (writeData) => {
    
    // const DummyData = JSON.parse(localStorage.getItem('writeData'));
    // console.log(DummyData)
    
    // let data = DummyData ? JSON.parse(localStorage.getItem('writeData')) : [];
    // console.log(data);
    // data.push(localStrData);
    // localStorage.setItem('writeData', JSON.stringify(writeData))
    // setLocalStrData("")
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Write />}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/modal" element={<ErrorModal />} />
          
          <Route path="/*" element={<NotFound />} /> 
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
};
