
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/tasks",
    element: <Tasks></Tasks>,
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
