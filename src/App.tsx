import React from "react";
import Layout from "./components/layout/Layout";
import { RouteList } from "./core/routes/RouteList";

interface AppProps {
  children?: React.ReactNode;
}

function App(props: AppProps): JSX.Element {
  return (
    <Layout>
      <RouteList />
    </Layout>
  );
}

export default App;
