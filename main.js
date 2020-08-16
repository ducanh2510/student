var fs = require('fs');
var readline = require('readline-sync');
var students = [];
function menu() {
    console.log("==========MENU==========");
    console.log("1. Show All Students");
    console.log("2. Creat new Student");
    console.log("3. Save and Exit");
}

function readFile(path) {
    var list = fs.readFileSync(path, { encoding: 'utf-8'} );
    students = JSON.parse(list);
}

function creatNewStudent() {
    var student = {};
    var name = readline.question('Name of a new students: ');
    var age = parseInt(readline.question('Age of a new students: '));
    var school = readline.question('School of a new student:    ');
    student.name = name;
    student.age = age;
    student.school = school;
    students.push(student);
}

function saveAndExit() {
    var list = JSON.stringify(students);
    fs.writeFileSync('./data.txt', list);
}