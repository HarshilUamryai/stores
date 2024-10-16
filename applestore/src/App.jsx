// src/App.jsx
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import iphone from "./data/iphone.json";
import HotAccessories from "./compsnts/HotAccessories .jsx"
import MainLayout from './compsnts/MainLayout.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, // The layout component
      children: [ // Nested routes
        {
          path: "music",
          element: (
            <HotAccessories
              music={iphone.hotAccessories.music}
              musicCover={iphone.hotAccessoriesCover.music}
            />
          )
        },
        {
          path: "smartDevice",
          element: (
            <HotAccessories
              smartDevice={iphone.hotAccessories.smartDevice}
              smartDeviceCover={iphone.hotAccessoriesCover.smartDevice}
            />
          )
        },
        {
          path: "home",
          element: (
            <HotAccessories
              home={iphone.hotAccessories.home}
              homeCover={iphone.hotAccessoriesCover.home}
            />
          )
        },
        {
          path: "lifestyle",
          element: (
            <HotAccessories
              lifestyle={iphone.hotAccessories.lifestyle}
              lifestyleCover={iphone.hotAccessoriesCover.lifestyle}
            />
          )
        },
        {
          path: "mobileAccessories",
          element: (
            <HotAccessories
              mobileAccessories={iphone.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={iphone.hotAccessoriesCover.mobileAccessories}
            />
          )
        },
        // Optional: Add a default route or a 404 page
        {
          path: "*",
          element: <div>404 Not Found</div>
        }
      ]
    }
  ]);
 
  return (
    
    <RouterProvider router={router} />
  

   
  );
}

export default App;
