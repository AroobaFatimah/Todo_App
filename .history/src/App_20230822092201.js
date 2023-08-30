
import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Login } from "./pages/login"

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
