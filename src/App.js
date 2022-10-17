import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CreateUserAccount from "./pages/create_user_account/CreateUserAccount";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<CreateUserAccount />}/>
        </Routes>
      </Router>
  );
}

export default App;
