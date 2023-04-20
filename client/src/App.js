import { BrowserRouter, Route, Routes } from "react-router-dom";

// 페이지
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Account from "./pages/Account/Accounts";

// 컴포넌트
import Write from "./components/Content/Write";



import './App.css';

export default function App() {

  const submitChange = (writeData) => {
      console.log(writeData)
  }

  return (
    <div>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Write/>}/>
            <Route path="/Account" element={<Account/>}/>
          </Routes>
          </BrowserRouter>  
      <Footer />
    </div>
  )
};
