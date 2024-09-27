import { ToastContainer } from "react-toastify";
import { Home, NotFound } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer, Navbar } from "./components";
function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
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
