//<i class="fas fa-mug-hot"></i>
//<i class="fas fa-graduation-cap"></i>

// Function that will create employee cards with the proper information for each type of employee
function generateEmployeeCards (data) {
    let employeeCards = '';
    for (let i = 0; i < data.length; i++) {
        const currentEmployee = data[i];
        let icon = '';
        let thirdAttribute = '';
        if (currentEmployee.employeeType === 'Manager') {
            icon = `<i class="fas fa-mug-hot"></i>`
        } else if (currentEmployee.employeeType === 'Intern') {
            icon = `<i class="fas fa-graduation-cap"></i>`
        } else {
            icon = `<i class="fas fa-glasses"></i>`
        }
        if (currentEmployee.employeeType === 'Manager') {
            thirdAttribute = `Office Number: ${currentEmployee.employeeOffice}`
        } else if (currentEmployee.employeeType === 'Intern') {
            thirdAttribute = `School: ${currentEmployee.employeeSchool}`
        } else {
            thirdAttribute = `GitHub: ${currentEmployee.employeeGithub}`
        }

        employeeCards += `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h3>${currentEmployee.employeeName}</h3>
            <div class='employee-header'>
                ${icon}
                <h5>${currentEmployee.employeeType}</h5>
            </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${i+1}</li>
          <li class="list-group-item">Email: ${currentEmployee.employeeEmail}</li>
          <li class="list-group-item">${thirdAttribute}</li>
        </ul>
      </div>`
    }
    return employeeCards
}


// function that will generate HTML page when done
const generateHTML = (data) => {
       return `<!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="./assets/style.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-v4-rtl/4.6.0-2/css/bootstrap.min.css" integrity="sha512-hugT+JEQi0vXZbvspjv4x2M7ONBvsLR9IFTEQAYoUsmk7s1rRc2u7I6b4xa14af/wZ+Nw7Aspf3CtAfUOGyflA==" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        </head>
        <body>
            <h1>Employee Directory</h1>
            <section class ='container-md card-container'>
              ${generateEmployeeCards(data)}  
            </section>
        
            
            <script src="" async defer></script>
        </body>
    </html>`

}

module.exports = generateHTML