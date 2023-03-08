const employees = ["David", "Caroline", "Anna", "Brando", "Ephraim", "Franchesca"];
document.getElementById("sort").innerHTML = employees;  

function myFunction1() {
  employees.sort();
  document.getElementById("sort").innerHTML = employees;
}

function validateForm() {
    var pass1 = document.getElementById("pwd1").value; 
    var pass2 = document.getElementById("pwd2").value;
    
    if(pass1 != pass2) {
        document.getElementById("message1").innerHTML = "**Hoy itama mo naman!";
        document.getElementById("message2").innerHTML = "**Hoy itama mo naman!";
        return false;  
    } else {
        alert ("Na tumbok din!");
        document.write("JavaScript form has been submitted successfully");    
    }
}