console.log('js loaded!');

let employeeInfo = [];
let salaries = [];



$(document).ready(consoleLoaded);


function consoleLoaded() {

    console.log('jquery is ready');
    $('#addEmployee').on('click', handleClick);
    addInfo();
    $('#employeeData').on('click', '#deleteButton', deleteEmployee)

}



function addInfo() {

    console.log('addInfo Works!');

    $('#employeeData').empty();

    for (let employee of employeeInfo) {

        $('#employeeData').append(`
    <tr class="newInfo">
     <td>${employee.last}</td>
     <td>${employee.first}</td>
     <td>${employee.ID}</td>
     <td>${employee.title}</td>
     <td id="salary">${employee.salary}</td>
     <td><button id="deleteButton">DELETE</button></td>
     </tr>`)
    }


    $('#deleteButton').on('click', deleteEmployee);

}

function addSalaries() {

    let totalSalary = 0;

    for (let info of employeeInfo) {

        totalSalary += parseFloat(info.salary)

        $('#salarySum').append(totalSalary)

    }

   
    console.log(totalSalary);
    

}


function handleClick() {
    console.log('clicked');

    let newInfo = {
        last: $('#last').val(),
        first: $('#first').val(),
        ID: $('#ID').val(),
        title: $('#jobTitle').val(),
        salary: $('#annualSalary').val(),

    }
    console.log(newInfo); // should be the newInfo object on the console
    employeeInfo.push(newInfo);

    console.log(employeeInfo);

    addInfo();

    addSalaries();

    sumOfSalary();

    emptyFields();

}


function deleteEmployee() {

    console.log('delete button function works!');
    $(this).parent().parent().remove();

}


function sumOfSalary(){

console.log('sumOfSalary works!');



}

function emptyFields() {
    $('#last').val('');
    $('#first').val('');
    $('#ID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');


}

