import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import "./components/layout/navigation.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
