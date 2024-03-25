import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Intro from '../pages/Intro';
import UserMain from '../pages/user/UserMain';
import Footer from '../components/layout/Footer';
import MypageMain from '../pages/mypage/MypageMain';
import Notipage from '../pages/Notipage';
import Home from '../pages/Home';
import Community from '../pages/Community';
import CommunityCreate from '../pages/community/CommunityCreate';
import CommunityDetail from '../pages/community/CommunityDetail';
import SellPage from '../pages/Sellpage';
import DetailPage from '../pages/SellDetailPage';
import CommunityUpdate from '../pages/community/CommunityUpdate';
import Nothing from '../pages/Nothing';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/auth"
          element={<UserMain />}
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/noti"
          element={<Notipage />}
        />
        <Route
          path="/community"
          element={<Community />}
        />
        <Route
          path="/communityCreate"
          element={<CommunityCreate />}
        />
        <Route
          path="/communityDetail/:id"
          element={<CommunityDetail />}
        />
        <Route
          path="/communityUpdate/:id"
          element={<CommunityUpdate />}
        />
        <Route
          path="/mypage"
          element={<MypageMain />}
        />
        <Route
          path="/Sellpage"
          element={<SellPage />}
        />
        <Route
          path="/detail/:id"
          element={<DetailPage />}
        />
        <Route
          path="/nothing"
          element={<Nothing />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
