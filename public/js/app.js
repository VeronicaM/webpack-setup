//require("./login");
import {login} from './login';
require('../css/app.scss');
login('admin','radical');
$(".mountain").text("Welcome to Webpack !");
console.log("App loaded");
