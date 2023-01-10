import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { authRoutes } from "./components/Routes/routes";

function App() {
  const router = createBrowserRouter(authRoutes);
  return (
    <RouterProvider router={router} />
  );
}
export default App;
