import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home/Home";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Signup from "../Pages/Signup/Signup";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AllCollege from "../Pages/AllCollege/AllCollege";
import CollegeSearch from "../Pages/CollegeSearch/CollegeSearch";

import AdmitionPage from "../Pages/AdmintionPage/AdmitionPage";
import AdmitionForm from "../Pages/AdmitionFormPage/AdmitionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";
import PrivetRouts from "./PrivetRouts";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/college_details/:id",
          element:<PrivetRouts><CollegeDetails></CollegeDetails></PrivetRouts>,
          loader:({params})=>fetch(`https://college-booking-server-ten.vercel.app/allcollege/${params.id}`)
        },
        {
          path:"/login",
          element:<LoginPage/>
        },
        {
          path:"/signup",
          element:<Signup/>
        }
        ,
        {
          path:"/profile",
          element:<UserProfile/>
        } ,
        {
          path:"/all_college",
          element:<AllCollege/>
        }
        ,
        {
          path:"/colleges/:data",
          element:<CollegeSearch/>
        } ,
        {
          path:"/admission",
          element:<AdmitionPage/>
        }
        ,
        {
          path:"/admition_form/:id",
          element:<AdmitionForm/>
        },
        {
          path:"/mycollege",
          element:<MyCollege/>
        },
        {
          path:'*',
          element:<NotFoundPage></NotFoundPage>
        }
      ],
    },
  ]);


export default router