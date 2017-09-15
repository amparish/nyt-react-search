const React = require("react");
const router = require("react-router");
const routeDom = require("react-router-dom");

const Route = router.Route;
const Router = router.Router;
const BrowserRouter = routeDom.BrowserRouter;
const IndexRoute = Router.IndexRoute;
const browserHistory = Router.browserHistory;

//Require the three main components
const Main = require("./components/Main");
const Saved = require("./components/Saved");
const Search = require("./components/Search");

module.exports = (
    <BrowserRouter>
        <Route path="/" component={Main}>
            <Route path="Search" component={Search}/>
            <Route path="Saved" component={Saved}/>
            <IndexRoute component={Search}/>
        </Route>
    </BrowserRouter>
);