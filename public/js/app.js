//require("./login");
import {login} from './login';
require('../css/app.scss');
login('admin','radical');
$(".mountain").text("Welcome to Pomodoro !");
console.log("App loaded");
