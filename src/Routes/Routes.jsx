import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/readList",
        loader: () => fetch("../../public/booksData.json"),
        Component: ReadList,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("../../public/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
