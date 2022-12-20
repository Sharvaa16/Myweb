import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Home } from "./Pages/Homepage";

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Navcon } from "./Comps/Cont/Navcon";
import { Steam } from "./Pages/Steam";
import {PS} from "./Pages/PS" 
import { Ubisoft } from "./Pages/Ubisoft";

export const App=()=> {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navcon/>}>
          <Route path='' element={<Navigate to='/home'/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='steam' element={<Steam/>}/>
          <Route path='ps' element={<PS/>}/>
          <Route path='ubi' element={<Ubisoft/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

