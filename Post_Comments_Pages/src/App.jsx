import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./Pages/Home";
import PostList, { postLoader } from "./Pages/Post-list";
import PostComments from "./Pages/Post-comments";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      {
        path: "/posts",
        element: <PostList />,
        loader: postLoader,

      },
      {
        path: "/posts/:postId",
        element: <PostComments />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
