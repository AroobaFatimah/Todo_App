
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
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "/location",
    element: <TasksPage />,
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
