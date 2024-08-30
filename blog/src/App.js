// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Nav from "./components/nav";
import Images from "./components/image";
import About from "./components/about";
import Contact from "./components/contact";
import Important from "./components/important";
import Footer from "./components/footer";
import Blog from "./Blog";
import Admin from "./Admin";
import Dashboard from "./components/dashboard";
import BlogList from "./components/blog-list";
import Blogpost from "./components/blog-post";

const list = [
  { text: "HOME", href: "/" },
  { text: "ABOUT US", href: "#about" },
  { text: "CONTACT US", href: "#contact" },
  { text: "BLOGS", href: "/blog" },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav items={list} />
              <div className="section">
                <Images />
                <BlogList />
                <About />
                <Contact />
                <Important />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <div className="section">
                <Blog />
              </div>
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <div className="section">
                <Admin />
              </div>
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <div className="section">
                <Dashboard />
              </div>
            </>
          }
        />
        <Route path="/blog/:title" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
