import Navbar from "./component/Navbar";
import "./App.css";
import Trending from "./component/Trending";
import LatestShow from "./component/LatestShow";
import MostPop from "./component/MostPop";
import Genesis from "./component/Genesis";
import Temple from "./component/Temple";
import Void from "./component/Void";
import Bayc from "./component/Bayc";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="container">
      <h2>Live Spaces</h2>
      <p><img className="logo_img mx-2"  src="https://cdn-icons-png.flaticon.com/512/3472/3472625.png" alt="tick"></img>
      All NFTs on Cyber either to or were minted by their space creator.
      </p>
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Trending/>}></Route>
      <Route exact path="/latestshow" element={<LatestShow/>}></Route>
      <Route exact path="/mostpopular" element={<MostPop/>}></Route>
      <Route exact path="/genesis" element={<Genesis/>}></Route>
      <Route exact path="temple" element={<Temple/>}></Route>
      <Route exact path="void" element={<Void/>}></Route>
      <Route exact path="bayc" element={<Bayc/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
