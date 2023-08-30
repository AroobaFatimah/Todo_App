
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
function App() {
  return (
    <div>
      <Login></Login>
      {/* <TasksPage></TasksPage> */}
    </div>
  );
}

export default App;
