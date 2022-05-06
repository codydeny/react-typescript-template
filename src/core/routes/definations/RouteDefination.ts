import { ReactNode } from "react";
import { Paths } from "../paths.type";

export interface RouteDefinition {
  path: Paths;
  protected?: boolean;
  redirect?: string;
  component?: ReactNode;
  routes?: RouteDefinition[];
  title?: string;
}
