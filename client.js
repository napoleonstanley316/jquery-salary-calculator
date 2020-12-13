console.log('js loaded!');

let employeeInfo = [];
// let salaries = [];


// consoleLoaded is a callback function
$(document).ready(consoleLoaded);


function consoleLoaded() {

    console.log('jquery is ready');

    // click listeners
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
     <td><button id="deleteButton" class="btn btn-danger">DELETE</button></td>
     </tr>`)
    }


    $('#deleteButton').on('click', deleteEmployee);

}

function addSalaries() {

    let totalSalary = 0;

    for (let info of employeeInfo) {

        totalSalary += Math.round(info.salary)

    }


    let monthlyCost = Math.round(totalSalary) / 12;
    let totalMonthly = Math.round(monthlyCost)

    $('#totalField').text(`${totalMonthly}`)
    console.log(monthlyCost);

    if (totalMonthly > 20000) {

        $('#totalField').addClass('overBudget');
    }
}


function handleClick() {
    console.log('clicked');
    // declares object that takes values from html input fields (field that are being typed in)
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

    // $('#totalField').empty();

    addInfo();

    addSalaries();

    emptyFields();

}

// when the delete button is clicked, this function delete the parent of the parent of the delete button (row: newInfo)
function deleteEmployee() {

    console.log('delete button function works!');
    $(this).parent().parent().remove();

    emptyFields();

}


function emptyFields() {
    $('#last').val('');
    $('#first').val('');
    $('#ID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');



}

