import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import MovieDetails from "./components/moviedetails";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to='/movies' />
        <Redirect to="not-found" />
      </Switch>
    </div>
  );
}

export default App;
