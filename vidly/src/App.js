import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import MoviesLink from "./components/movieslink";
import RentalsLink from "./components/rentalslink";
import CustomersLink from "./components/customerslink";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Movies}/>
        <Route path='/movies'  component={MoviesLink}/>
        <Route path='/customers'  component={CustomersLink}/>
        <Route path='/rentals'  component={RentalsLink}/>
        <Route path='/not-found'  component={NotFound}/>
        <Redirect to='not-found'/>
      </Switch>
    </div>
  );
}

export default App;
