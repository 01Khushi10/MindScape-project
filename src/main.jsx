import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import { router } from './Routes/index.jsx';
import './index.css'
import { app, auth, firestore } from './FirebaseConfig.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer/>
    </React.StrictMode>
)
