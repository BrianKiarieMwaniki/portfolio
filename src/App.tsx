import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer
        autoClose={4000}
        position="top-center"
        draggable={true}
        closeButton={false}
      />
      <Home />
    </div>
  );
}

export default App;
