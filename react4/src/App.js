import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home'
// import AdminProfile from './Module/Admin/AdminProfile'
// import UserProfile from './Module/User/UserProfile'
// import AdminDashboard from './Module/Admin/AdminDashboard'
// import User from './Module/User/User'
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorBoundry';

const Home = React.lazy(() => import("./Home"));
const AdminProfile = React.lazy(() => import("./Module/Admin/AdminProfile"));
const UserProfile = React.lazy(() => import("./Module/User/UserProfile"));
const AdminDashboard = React.lazy(() => import("./Module/Admin/AdminDashboard"));
const User = React.lazy(() => import("./Module/User/User"));


function App() {
  return (
    <Router>
      {/* if there is any error comes when loading the component than this ErrorBoundary components loads with reset component buttton */}
      <ErrorBoundary fallback={ErrorFallback} onReset={() => { }}>

        {/*suspens tag can help when component takes time to loading...at that place what we have to show for waiting */}
        <Suspense fallback={<div>Loading...</div>}>

          <Routes>
            {/* this is level 1 routing where Home, AdminProfile, UserProfile component comes */}
            <Route path='/' element={<Home />} />

            <Route path='admin' element={<AdminProfile />}>
              {/* this is level 2 (nested) routing where AdminDashboard components comes */}
              <Route path='dashboard' element={<AdminDashboard />} />
            </Route>

            <Route path='user' element={<UserProfile />}>
              {/* this is level 2 (nested) routing where User components comes */}
              <Route path='userid' element={<User />} />

            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
