import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import MenuBar from "./pages/MenuBar/MenuBar";
import SlideBanner from "./pages/Banner/SlideBanner";
import Footer from "./../src/pages/Footer/Footer";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
import Apoinment from "./pages/aponment/Apoinment";
import ReadMore from "./pages/ReadMore/ReadMore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Protects from "./pages/protect/Protects";
import ServiceDetail from "./pages/Services/service/serviceDetail/ServiceDetail";
import NotFound from "./pages/notFound/NotFound";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <SlideBanner></SlideBanner>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/apoinment">
              <Apoinment></Apoinment>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Protects></Protects>
            </PrivateRoute>
            <Route exact path="/readMore/:MoreInfo">
              <ReadMore></ReadMore>
            </Route>
            <Route exat path="/more">
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route exat path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
