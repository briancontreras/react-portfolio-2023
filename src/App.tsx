import Message from "./Message"
import NavBar from "./NavBar";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css"
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function App(){
  return <div>
  <NavBar/ >
  <About/ >
  
  </div>;
}
export default App;
