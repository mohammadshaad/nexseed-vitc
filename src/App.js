import Main from './components/Main'
import About from './components/About'
import Contact from "./components/Contact"
import Events from './components/Events'
import ErrorPage from "./components/404"
import React, { useState } from "react";
import preloader from './assets/preloader.gif'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { inject } from '@vercel/analytics';
 
inject();

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 6000);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center w-screen bg-slate-100">

        <div className="">
          {loading ? (
            <div className="flex items-center justify-center bg-white w-full h-screen">
              <img className="" src={preloader} alt="Loading..." />
            </div>
          ) : (
            <div>
              <BrowserRouter>
                <Routes>
                  <Route index element={<Main />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </BrowserRouter>


            </div>
          )}
        </div>


      </div>
    </>

  );
}

export default App;
