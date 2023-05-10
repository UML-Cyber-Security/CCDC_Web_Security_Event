import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";

function App() {
  return (
  <>
  <Router>
  <NavBar />
 
  {/* LINKS */}
  <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/about" component={About} />
  <Route path="/shop" component={Shop} />
  </Switch>
 
  <Route path="/admin" component={Admin} />
 
  <Footer />
  </Router>
  </>
  );
 }

export default App;
