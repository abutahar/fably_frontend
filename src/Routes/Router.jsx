import { createBrowserRouter } from "react-router-dom";
import App from "../Components/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
