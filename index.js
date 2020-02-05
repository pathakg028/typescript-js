"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var Todo = response.data;
    var userId = Todo.userId;
    var title = Todo.title;
    var completed = Todo.completed;
    myFunc(userId, title, completed);
    // console.log(`${userId}, ${title}, ${completed}`)
});
var myFunc = function (userId, title, completed) {
    console.log(userId + ", " + title + ", " + completed);
};
