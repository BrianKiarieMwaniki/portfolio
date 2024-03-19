import { ToastContainer } from "react-toastify";
import {Home,NotFound} from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement:<NotFound/>
    },
  ]);
  return (
    <div className="App">
      <ToastContainer
        autoClose={4000}
        position="top-center"
        draggable={true}
        closeButton={false}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
