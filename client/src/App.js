import { BrowserRouter, Route, Routes } from "react-router-dom";

// 페이지
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Account from "./pages/Account/Accounts";
import NotFound from "./pages/NotFound";

// 컴포넌트
import Write from "./components/Content/Write";

import ErrorModal from "./components/common/ErrorModal";


import './App.css';

export default function App() {

  const submitChange = (writeData) => {
      console.log(writeData)
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Write/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/modal" element={<ErrorModal />} />
          
          <Route path="/*" element={<NotFound />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>  
    </div>
  )
};
