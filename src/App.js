import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Components/Browse";
import Login from "./Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
