import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/create_post";
import Postlist from "./components/Postlist";
function App() {
  const [selectedTab, setSelectedTab] = useState("home"); // Example value, replace with actual selected tab logic
  return (
    <div className="content">
      <Header />
      {selectedTab === "home" && <Sidebar />}
      {selectedTab === "create_post" && <CreatePost />}
      {selectedTab === "postlist" && <Postlist />}
      <Footer />
      <button onClick={() => setSelectedTab("home")}>Home</button>
      <button onClick={() => setSelectedTab("create_post")}>Create Post</button>
      <button onClick={() => setSelectedTab("postlist")}>Postlist</button>    

    </div>
  );
}


export default App;
