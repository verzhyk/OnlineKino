import { Films } from "./components/Films";
import { Film } from "./components/Film";
import { Home } from "./components/Home";
import { CreateFilm } from "./components/CreateFilm";
import { Actors } from "./components/Actors";
import { CreateActor } from "./components/CreateActor";

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
    path: '/films/create',
    element: <CreateFilm />
  },
  {
    path: '/films/:id',
    element: <Film />
  },
  {
    path: '/actors',
    element: <Actors />
  }
  ,
  {
    path: '/actors/create',
    element: <CreateActor />
  }
];

export default AppRoutes;
