
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ContactUs from './pages/contact-us'
import Collection from './pages/collection'
import LandingPage from './pages/landing'
import RootLayout from './layouts/rootLayout'
import AboutFurnish from './pages/about/components/about-furnish'

function App() {
  const router = createBrowserRouter([
    

    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          index: true,
          
          element: <LandingPage/>,
        },
    
        {
          path: "about",
          element: <AboutFurnish/>,
        },
    
        {
          path: "contact-us",
          element: <ContactUs/>
        },
    
        {
          path: "collection",
          element: <Collection/>,
        },
        
        {
          path: "Footer",
          element: <footer/>,
        },

      ]
    }
    
    
  ])
  return <RouterProvider router={router}/>
  
}

export default App
