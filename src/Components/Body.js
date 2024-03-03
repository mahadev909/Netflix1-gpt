import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MovieDetail from "./MovieDetail";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/Netflix1-gpt",
      element: <Login />,
    },
    {
      path: "/Netflix1-gpt/browse",
      element: <Browse />,
    },
    {
      path: "/Netflix1-gpt/moviedetail",
      element: <MovieDetail/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
