

//STEP 1

var favMovies = ["Charlie Bartlett", "Mean Girls", "Finding Nemo", "Harry Potter", "Clueless"];
window.console.log(favMovies[1]);

//STEP 2

var movies = new Array(5);
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";

window.console.log(movies[0]);


//STEP 3


var movies = new Array(5);
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";

movies[movies.length] = "10 Things I hate About You";

window.console.log(movies.length);


//STEP 4

var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";

delete movies[0];

window.console.log(movies);

//STEP 5
var i;
var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";
movies[5] = "The Hangover";
movies[6] = "Bright";

for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 6

var i;
var index;
var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";
movies[5] = "The Hangover";
movies[6] = "Bright";

for (index in movies) {
    window.console.log(movies[index]);
}

//STEP 7

var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";
movies[5] = "The Hangover";
movies[6] = "Bright";

window.console.log(movies.sort());

//STEP 8

var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";
movies[5] = "The Hangover";
movies[6] = "Bright";

movies = movies.join("\n");

var leastFavMovies = [];
leastFavMovies[0] = "The Invention of Lying";
leastFavMovies[1] = "Dumb n Dumber";
leastFavMovies[2] = "Star Wars";

leastFavMovies = leastFavMovies.join("\n");

window.console.log("Movies I like: " + "\n" + "\n" + movies);
window.console.log("Movies I regret watching: " + "\n" + "\n" + leastFavMovies);
//STEP 9

var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";
movies[5] = "The Hangover";
movies[6] = "Bright";

movies = movies.sort().join("\n");

var leastFavMovies = [];
leastFavMovies[0] = "The Invention of Lying";
leastFavMovies[1] = "Dumb n Dumber";
leastFavMovies[2] = "Star Wars";

leastFavMovies = leastFavMovies.sort().join("\n");

movies = movies.concat(leastFavMovies);

window.console.log(movies);

//STEP 10
var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";
movies[5] = "The Hangover";
movies[6] = "Bright";

movies = movies.sort().join("\n");

var leastFavMovies = [];
leastFavMovies[0] = "The Invention of Lying";
leastFavMovies[1] = "Dumb n Dumber";
leastFavMovies[2] = "Star Wars";

leastFavMovies = leastFavMovies.sort().join("\n");

movies = movies.concat(leastFavMovies);

var x = "\n";
var movieList = movies.split(x);

movieList.filter(function () {
    "use strict";
    window.console.log(movieList[movieList.length - 1]);
});

//STEP 11

var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";
movies[5] = "The Hangover";
movies[6] = "Bright";

movies = movies.sort().join("\n");

var leastFavMovies = [];
leastFavMovies[0] = "The Invention of Lying";
leastFavMovies[1] = "Dumb n Dumber";
leastFavMovies[2] = "Star Wars";

leastFavMovies = leastFavMovies.sort().join("\n");

movies = movies.concat(leastFavMovies);

var x = "\n";
var movieList = movies.split(x);

var firstMovie = movieList.shift();

window.console.log(firstMovie);

//STEP 12

var movies = [];
movies[0] = "Charlie Bartlett";
movies[1] = "Mean Girls";
movies[2] = "Finding Nemo";
movies[3] = "Harry Potter";
movies[4] = "Clueless";
movies[5] = "The Hangover";
movies[6] = "Bright";

movies = movies.sort().join("\n");

var x = "\n";
var movieList = movies.split(x);

var i;
for (i = 0; i < movieList.length; i++) {
   window.console.log("Favorite Movies[" + i + "]" + movieList[i]);
}

var leastFavMovies = [];
leastFavMovies[0] = "The Invention of Lying";
leastFavMovies[1] = "Dumb n Dumber";
leastFavMovies[2] = "Star Wars";

leastFavMovies = leastFavMovies.sort().join("\n");

var y = "\n";
var leastMovieList = leastFavMovies.split(y);

var i;
for (i = 0; i < leastMovieList.length; i++) {
   window.console.log("Least Favorite Movies[" + i + "]" + leastMovieList[i]);
}

//STEP 13
var employee1, employee2, employeeid, name, title, department, iscurrent;

employee1 = [
    employeeid = 5330,
    name = "Justina Fees",
    title = "Mate",
    department = "Retail",
    iscurrent = true
]

employee2 = [
    employeeid = 6364,
    name = "Dom Barszcz",
    title = "Head Chef",
    department = "Kitchen",
    iscurrent = true
]


var employee = [];
employee.push(employee1);
employee.push(employee2);

var employee2_name = employee[1][1];

window.console.log(employee2_name);

//STEP 14

var employee1, employee2, employeeid, name, title, department, iscurrent;

employee1 = [
    employeeid = 5330,
    name = "Justina Fees",
    title = "Mate",
    department = "Retail",
    iscurrent = true
]

employee2 = [
    employeeid = 6364,
    name = "Dom Barszcz",
    title = "Head Chef",
    department = "Kitchen",
    iscurrent = true
]


var employee = [];
employee.push(employee1);
employee.push(employee2);

var i;
var display_names;
for (i = 0; i < employee.length; i++) {
    display_names = employee[0][1] + ", " + employee[1][1];
}
window.console.log(display_names);

//STEP 15

var employee1, employee2, employee3, employeeid, name, title, department, iscurrent;

employee1 = [
    employeeid = 5330,
    name = "Justina Fees",
    title = "Mate",
    department = "Retail",
    iscurrent = true
]

employee2 = [
    employeeid = 6364,
    name = "Dom Barszcz",
    title = "Head Chef",
    department = "Kitchen",
    iscurrent = true
]

employee3 = [
    employeeid = 4892,
    name = "Sam Chorny",
    title = "Crew",
    department = "Retail",
    iscurrent = false
]

var employee = [];
employee.push(employee1);
employee.push(employee2);
employee.push(employee3);


function get_status(employee) {
   return employee.filter( function(Boolean) {
       window.console.log(Boolean);
   });
}




//STEP 16
var faveFive = [["Charlie Bartlett", 1], ["Mean Girls", 2], ["Finding Nemo", 3], ["Harry Potter", 4], ["Clueless", 5]];

var i;
var getMovies = [];
for (i = 0; i < faveFive.length; i++) {
    getMovies[i] = faveFive[i][0]; 
}

faveFive.filter(function(movieNames) {
    window.console.log(getMovies.join(", "));
});                        
    

//STEP 17
 
var employees = ["Jay", "Wes", "Leigh", "Scott", "Brett"];

function showEmployee(names) {
    window.console.log(names);
}

function fillShowEmployee(callback) {
    var i;
    for (i = 0; i < employees.length; i++) {
        var names = employees[i];
        callback(names.toUpperCase());
    }
}
window.console.log("Employees: " + "\n" + "\n")
fillShowEmployee(showEmployee);


//STEP 18

function myFunction(arr) {
  arr = arr.filter(filterValues);
  return arr;
}

function filterValues(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(myFunction([58, '', 'abcd', true, null, false, 0]));

//STEP 19

function randomNum(num) {
return num[Math.floor(Math.random()*num.length)];     
}

var num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(randomNum(num));

//STEP 20



