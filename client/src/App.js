import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from "./pages/home/Home.jsx";
import FollowPage from "./pages/follow/Follow.jsx";
import ChatPage from "./pages/chat/Chat.jsx";
import NotificationPage from "./pages/notification/Notification.jsx";
import ProfilePage from "./pages/profile/Profile.jsx";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path='/follow' element={
          <MainLayout>
            <FollowPage />
          </MainLayout>} />
        <Route path='/chat' element={
          <MainLayout>
            <ChatPage />
          </MainLayout>} />
        <Route path='/notification' element={
          <MainLayout>
            <NotificationPage />
          </MainLayout>} />
        <Route path='/profile' element={
          <MainLayout>
            <ProfilePage />
          </MainLayout>} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
