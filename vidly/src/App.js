import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import "./App.css";
import MovieForm from "./components/moviesform";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies/new" component={MovieForm} />
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Route path='/login' component={LoginForm}/>
        <Route path='/register' component={RegisterForm}/>
        <Redirect from="/" exact to='/movies' />
        <Redirect to="not-found" />
      </Switch>
    </div>
  );
}

export default App;
