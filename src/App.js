import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";
import Brand from "./pages/Brand/BrandPage";
import BrandCreate from "./components/Brand/BrandCreateForm";
import MainPage from "./pages/MainPage/MainPage"

function App() {
  return (
    <>
      <Router>
        <div className="row">
          <div className="column-one">  
            {" "}
            <Navbar/>
          </div>
          <div className="column-two">
            {" "}
            <Switch>
              
              <Route path="/" exact component={MainPage} />
              <Route path="/brand" exact component={Brand} />
              <Route path="/brandcreate" component={BrandCreate} />


              <Route path="/order" />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
