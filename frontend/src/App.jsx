import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IdeaPage from "./components/IdeaPage";
import { useAuth } from "./context/AuthProvider";
import AddProductForm from "./user/AddProductForm";
import ProductList from "./user/ProductList";
import { useParams } from "react-router-dom";
import NotFound from "./notfoundpage/NotFound";

const UserProducts = (del) => {
  const { userId } = useParams();
  return <ProductList userId={userId} del={del} />;
};

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("auth ", authUser);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/products" element={<Products />} />

        {/* <Route path="/products/:productId" element={<Product />} /> */}
        {authUser && <Route path="/addproduct" element={<AddProductForm />} />}
        <Route
          path="/products/:userId"
          element={<UserProducts del="false" />}
        />
        {authUser && (
          <Route
            path="/products/myproduct/:userId"
            element={<UserProducts del="true" />}
          />
        )}
        <Route path="/ideas" element={<IdeaPage />} />
        {!authUser && <Route path="/login" element={<Login />} />}
        {!authUser && <Route path="/signup" element={<Signup />} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
