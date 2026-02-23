import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <span>College Logo</span> &nbsp;&nbsp;
      <Link to="/">Home</Link> | <Link to="/work">Work</Link>
      <hr />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex", gap: "20px" }}>
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
          alt="College"
          width="200"
        />

        <div>
          <h1>ABC College</h1>
          <p>Welcome to our college website.</p>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div>
      <Navbar />

      <h1>OS with Records</h1>

      <div>
        <button>User Info</button>
        <button>Arch</button>
        <button>Hostel</button>
        <br /><br />
        <button>Library</button>
        <button>Faculty</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}