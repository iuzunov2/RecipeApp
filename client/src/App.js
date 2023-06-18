import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Footer } from './components/Footer'
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/Home";
import { Login } from "./pages/login.js";
import { Register } from "./pages/register.js";
import { Myprofile } from './pages/Myprofile.js'
import { Myrecipies } from './pages/Myrecipies.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/myrecipes" element={<Myrecipies />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;