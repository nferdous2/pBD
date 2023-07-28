import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Pages/HomePages/Home';
import Login from './Components/Pages/Authentication/Login';
import UserReg from './Components/Pages/Authentication/UserReg';
import RegOptions from './Components/Pages/Authentication/RegOptions';
import ProfessionalReg from './Components/Pages/Authentication/ProfessionalReg';
import ProfessionalReg2 from './Components/Pages/Authentication/ProfessionalReg2';
import ForgetPass from './Components/Pages/Authentication/ForgetPass';
import SetNewPass from './Components/Pages/Authentication/SetNewPass';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Profile from './Components/Pages/Dashboard/Profile';
import Terms from './Components/Pages/HomePages/Terms';
import { UserProvider } from './Components/Pages/Authentication/UserContext';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main/>,
    
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "login",
        element:<Login/>,
      },
      {
        path: "userreg",
        element:<UserReg/>,
      },
      {
        path: "profreg",
        element:<ProfessionalReg/>,
      },
      {
        path: "fpas",
        element:<ForgetPass/>,
      },
      {
        path: "proinfo",
        element:<ProfessionalReg2/>,
      },
      {
        path: "newpass",
        element:<SetNewPass/>,
      },
      {
        path: "optn",
        element:<RegOptions/>,
      },
      {
        path: "dashboard",
        element:<Dashboard/>,
      },
      {
        path: "profile",
        element:<Profile/>,
      },
      {
        path: "terms",
        element:<Terms/>,
      },
    ]

  }
    ]);
  return (
    <UserProvider>
 <div className="App" style={{overflow:"hidden"}}>

<RouterProvider router={router}/>

</div>
    </UserProvider>
   
  );
}

export default App;
