import "./App.css";
import { RouterProvider } from "react-router-dom";

import { Suspense } from "react";
import { MyRouter } from "./config/MyRouter";

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<></>}>
          <RouterProvider router={MyRouter} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
