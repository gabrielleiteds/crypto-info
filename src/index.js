const App = require("./app");

require("dotenv").config();

App.listen(8000, () => {
  console.log("Server run on port 8000");
});
