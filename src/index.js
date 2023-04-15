import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Loading from "./Loading";
const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
