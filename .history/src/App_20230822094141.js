
import './App.css';
import { Login } from "./pages/login"
import { Tasks } from './pages/tasks';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
