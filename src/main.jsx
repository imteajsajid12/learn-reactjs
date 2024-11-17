import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';


import {createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { createBrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import {Layouts} from "./components/Layout/Layouts.jsx";
import About from "./components/Abouts/About.jsx";
import {Contact} from "./components/Contacts/Contact.jsx";


const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts/:id" element={<Contact />} />
        </Route>
    )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}`
    <RouterProvider router={router} />

  </StrictMode>,
)
