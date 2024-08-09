// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
// import Login from './authentication/Login';
// import Signup from './authentication/Signup';
// import HomePage from './authentication/HomePage';
// import Dashboard from './pages/Dashboard'
// import Ads_Template from './pages/Ads_Template'
// import Wallet from './pages/Wallet'
// import Profile from './pages/Profile'
// import Services from './pages/Services'

// import Sidebar from './components/sidebar/Sidebar';
// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [user, setUser] = useState(null);

// 	const getUser = async () => {
// 		try {
// 			const url = 'http://localhost:4000/api/auth/userdashboard';
// 			const { data } = await axios.get(url, { withCredentials: true });
// 			setUser(data.user._json);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	useEffect(() => {
// 		getUser();
// 	}, []);
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/signin" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/admindashboard" element={<Dashboard />} />
//         <Route path='/adstemplate' element={<Ads_Template/> }/>
//         <Route path="/userdashboard/wallet" element={<Wallet />} />
//         {/* <Route
//           path="/userdashboard"
//           element={user ? <UserDashboard user={user} /> : <Navigate to="/" />}
//         /> */}
//         <Route path='/userdashboard' element={<Sidebar />}/>
//         {/* <Route path='/userdashboard/*' 
//         element={user ? <Navigate to="/" /> : <Sidebar />}/> */}
//         <Route path='/userdashboard/profile' element={<Profile/> }/>
//         <Route path='/userdashboard/services' element={<Services /> }/>
      
//         {/* <Route path='/userdashboard/wallet' element={<WalletPage/> }/> */}
//         {/* Use Outlet to render nested routes in AppLayout */}
//         {/* <Route path='/userdashboard/*' element={<AppLayout />}>
//           <Route index element={<Blank />} />
//           <Route path='started' element={<UserDashboard />} />
//           <Route path='calendar' element={<Blank />} />
//           <Route path='user' element={<Blank />} />
//           <Route path='order' element={<Blank />} />
        
//         </Route> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import HomePage from './authentication/HomePage';
import Dashboard from './pages/Dashboard'
import Ads_Template from './pages/Ads_Template'
import Wallet from './pages/Wallet'
import Profile from './pages/Profile'
import Services from './pages/Services'

import Sidebar from './components/sidebar/Sidebar';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
