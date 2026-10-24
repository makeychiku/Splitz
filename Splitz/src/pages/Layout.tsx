import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <Link to="/">Splitz</Link>
        <Link to="/login">Log In</Link>
        <Link to="/registration">Sign Up</Link>
      </header>
    </div>
  );
}
