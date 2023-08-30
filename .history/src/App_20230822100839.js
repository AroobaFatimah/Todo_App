
import './App.css';
import { Login } from "./pages/login"
import { TasksPage } from './pages/tasks_page';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/textarea",
    element: (
      <Textarea heading="Enter text to convert it into uppercase"></Textarea>
    ),
  },
]);
function App() {
  return (
    <div>

    </div>
  );
}

export default App;
