import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import MoviesLink from "./components/movieslink";
import RentalsLink from "./components/rentalslink";
import CustomersLink from "./components/customerslink";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>

        <Route path='/' exact component={Movies}/>
      </Switch>
    </div>
  );
}

export default App;
