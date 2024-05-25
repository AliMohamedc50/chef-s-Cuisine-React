
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Book_a_table from "./components/book-table/Book_a_table";
import Our_Specials from "./components/Our-Specials/Our_Specials";
import Top_dishe from "./components/top-dishe/Top_Dish";
import Breakfast from "./components/Breakfast/Breakfast";
import Lunches from "./components/lunche/Lunches";
import Dinners from "./components/dinners/Dinners";
import Show_Product from "./components/show-product/Show_Product";
import Create_new_items from "./components/create-items/Create_new_items";


function Layout() {
  return (
    <div className="w-full h-screen md:flex">
      <Nav />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        // index: true,
        element: <Book_a_table />,
      },
      {
        path: "our-specials",
        element: <Our_Specials />,
      },
      {
        path: "top-dishes",
        element: <Top_dishe />,
      },
      {
        path: "breakfasts",
        element: <Breakfast />,
      },
      {
        path: "lunches",
        element: <Lunches />,
      },
      {
        path: "dinners",
        element: <Dinners />,
      },
      {
        path: ":product/new-item",
        element: <Create_new_items />,
      },
      {
        path: ":product/item/:id",
        element: <Show_Product />,
      },
    ],
  },
]);



function App() {

  return (
        <RouterProvider router={router} />
  );
}

export default App
