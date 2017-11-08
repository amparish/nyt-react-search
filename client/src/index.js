// Include the Main React Dependencies
import ReactDOM from "react-dom";
// Grabs routes
import routes from "./config/routes";

// Renders contents according to the route page
// Displays contents in the div root of index.html
ReactDOM.render(routes, document.getElementById("root"));