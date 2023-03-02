import './App.scss';
import Books from "./components/Books/Books";
import 'bootstrap'
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="container-lg">
<h1 className="mt-lg-5 text-white">William Gibson Books</h1>

                <Books></Books>

    </div>
        <Navbar></Navbar>

    </div>
  );
}

export default App;
