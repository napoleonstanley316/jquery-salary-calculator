console.log('js loaded!');

let employeeInfo = [];


$(document).ready(consoleLoaded);


function consoleLoaded() {

    console.log('jquery is ready');
    $('#addEmployee').on('click', handleClick);
    
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
     <td>${employee.salary}</td>
     <td><button>DELETE</button></td>
     </tr>`)
    //  <button>${DELETE}</button>
    }
   
}

function handleClick(){
    console.log('clicked');
 
    let newInfo = {
       last: $('#last').val(),
       first: $('#first').val(),
       ID: $('#ID').val(),
       title: $('#jobTitle').val(),
       salary: $('#annualSalary').val(),

    };
    console.log(newInfo); // should be the newInfo object on the console
    employeeInfo.push(newInfo);

    console.log(employeeInfo);
    
    addInfo();
    


    emptyFields()


}



function emptyFields(){
    $('#last').val('');
    $('#first').val('');
    $('#ID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');


}
