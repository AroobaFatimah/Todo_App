
import './App.css';
import { Login } from "./pages/login"
import { TasksPage } from './pages/tasks_page';
import { LocationsPage } from './pages/location';
import { Signup } from "./pages/signup"
import { LoginSignup } from './pages/login_signup';
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
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "/location",
    element: <LocationsPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
