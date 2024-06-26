import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Public/Home";
import Login from "./pages/Public/Login";
import Register from "./pages/Public/Register";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ProfileLayout from "./pages/User/ProfileLayout";
import DashboardLayout from "./pages/Admin/DashboardLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Books from "./pages/Admin/Books";
import Users from "./pages/Admin/Users";
import Reviews from "./pages/Admin/Reviews";
import Genres from "./pages/Admin/Genres";
import CreateBook from "./pages/Admin/CreateBook";
import Profile from "./pages/User/Profile";
import Favourites from "./pages/User/Favourites";
import Book from "./pages/Public/Book";
import UpdateBook from "./pages/Admin/UpdateBook";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="book/:id" element={<Book />} />

        {/* Private */}
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="favourites" element={<Favourites />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route element={<AdminRoute />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="books" element={<Books />} />
            <Route path="users" element={<Users />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="genres" element={<Genres />} />
            <Route path="create" element={<CreateBook />} />
            <Route path="books/update/:id" element={<UpdateBook />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
