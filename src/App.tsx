import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./routes";

function App() {
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
