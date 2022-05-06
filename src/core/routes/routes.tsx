import { Paths } from "./paths.type";
import { RouteDefinition } from "./definations/RouteDefination";
// lazy loaded components

const notFoundRoute: RouteDefinition = {
  path: Paths.allowAll,
  component: <h1>Not Found</h1>,
  protected: false,
  title: "Not Found",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: <h1>Home</h1>,
    protected: false,
    redirect: Paths.home,
    title: "Home",
  },
].concat(notFoundRoute as any); // Ensure that notFound is the last route
