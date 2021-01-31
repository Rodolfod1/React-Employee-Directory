import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero"
import About from "./pages/About";
import Footer from "./components/Footer"
import { Wrapper } from "./components/Wrapper";
import Employee from "./pages/Employee";

function App() {
  return (
      <Router>
        <div>
          <Wrapper>
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/employee" exact component={Employee} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
