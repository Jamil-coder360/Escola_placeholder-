import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mainlayout from "./components/Mainlayout";
import HomePage from "./pages/HomePage"";
import ContactPage from "./pages/ContactPage";
import Servicepage from "./pages/Servicepage";
import AboutPage from "./pages/Aboutpage";
import Project from "./pages/Project";
import { Page } from "./pages/Page";
import NotFound from "./pages/NotFound";   
import Blogpage from "./pages/BlogPage";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/contact" ,
        element: <ContactPage />
      },
      {
        path: "/service" ,
        element: <ServicePage />
      },
      {
        path: "/blog" ,
        element: <BlogPage />
      },
      {
        path: "/about" ,
        element: <AboutPage />
      },
      {
        path: "/project" ,
        element: <Project />
      },
      {
        path: "/page" ,
        element: <Page />
      },

      	{
				path: "*",
				element: <NotFound />,
			}
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App