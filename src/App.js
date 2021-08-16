import Routes from "./utils/routes";
import Layout from "./containers/layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="mainContainer">
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
