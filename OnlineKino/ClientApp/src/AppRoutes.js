import { Films } from "./components/Films";
import { Film } from "./components/Film";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/films',
    element: <Films />
  },
  {
    path: '/films/:id',
    element: <Film />
  }
];

export default AppRoutes;
