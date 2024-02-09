import React from 'react';
import { MainLayout } from './layout/Mainlayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frontpage } from './pages/Frontpage/Frontpage';
import { HotelsandDest } from './pages/HotelsandDest/HotelsandDest';
import { Rooms } from './pages/Roompage/Rooms';
import { Reservation } from './pages/Reservationpage/Reservation';
import { Loginpage } from './pages/Loginpage/Loginpage';
// import { HotelCheckoutpage } from "./pages/HotelCheckOutpage/HotelCheckOutpage";
import { ErrorPage } from './pages/Errorpage/ErrorPage';
import { MyPage } from './pages/myPage';
// import { Signup } from './pages/Loginpage/SignUppage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route path="/forside" element={<Frontpage />} />
            <Route path="/hotelsDest" element={<HotelsandDest />} />
            <Route path=":id" element={<HotelsandDest />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path='/*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
