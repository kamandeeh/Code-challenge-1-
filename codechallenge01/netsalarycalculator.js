  // NET SALARY CALCULATOR
// Function to calculate and display net salary
function calculateNetSalary() {
    // Get the input values
    let basicSalary = parseFloat(document.getElementById("basic-salary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);
  
    //Calculate payee (i.e. Tax)
    let payee = Math.floor((basicSalary + benefits) * 0.25);
  
    //Calculate NHIF deductions
    let NHIFDeductions = Math.floor(basicSalary * 0.02);
  
    //Calculate NSSF deductions
    let NSSFDeductions = Math.floor(basicSalary * 0.12);
  
    //Calculate gross salary
    let grossSalary = Math.floor(basicSalary + benefits);
  
    //Calculate net salary
    let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
  
    //Display the net salary
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <p>paye is ${payee}</p>
      <p>gross salary is ${grossSalary}</p>
      <p>NSSF Deduction is ${NSSFDeductions}</p>
      <p>NHIF Deduction is ${NHIFDeductions}</p>
      <p>net salary is ${netSalary}</p>
      `;
  }

console.log(calculateNetSalary(500000))
    