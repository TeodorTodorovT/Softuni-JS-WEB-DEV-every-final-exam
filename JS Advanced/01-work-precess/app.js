function solve() {
    let hireButton = document.getElementById('add-worker');
    hireButton.addEventListener('click',(e)=>{
        e.preventDefault();

        let firstNameElement = document.getElementById('fname');
        let lastNameElement = document.getElementById('lname');
        let emailElement = document.getElementById('email');
        let birthElement = document.getElementById('birth');
        let positionElement = document.getElementById('position');
        let salaryElement = document.getElementById('salary');
        let budgetElement = document.getElementById('sum')

        if(!firstNameElement.value || !lastNameElement.value || !emailElement.value || !birthElement.value || !positionElement.value || !salaryElement.value){
            return;
        }

        let tbody = document.getElementById('tbody');
        let tr = document.createElement('tr');
        let fNameTD = document.createElement('td')
        let lNameTD = document.createElement('td')
        let emailTD = document.createElement('td')
        let birthTD = document.createElement('td')
        let positionTD = document.createElement('td')
        let salaryTD = document.createElement('td')
        let buttonsTD = document.createElement('td')
        let fireButton = document.createElement('button')
        let editButton = document.createElement('button')

        fireButton.classList.add('fired')
        editButton.classList.add('edit')

        fNameTD.textContent = firstNameElement.value;
        lNameTD.textContent = lastNameElement.value;
        emailTD.textContent = emailElement.value;
        birthTD.textContent = birthElement.value;
        positionTD.textContent = positionElement.value;
        salaryTD.textContent = salaryElement.value;
        fireButton.textContent = 'Fired';
        editButton.textContent = 'Edit';

        tr.appendChild(fNameTD)
        tr.appendChild(lNameTD)
        tr.appendChild(emailTD)
        tr.appendChild(birthTD)
        tr.appendChild(positionTD)
        tr.appendChild(salaryTD)
        buttonsTD.appendChild(fireButton)
        buttonsTD.appendChild(editButton)
        tr.appendChild(buttonsTD)
        tbody.appendChild(tr)
        let newBudget = Number(budgetElement.textContent) + Number(salaryElement.value)

        budgetElement.textContent = newBudget.toFixed(2)


        firstNameElementBackUp = firstNameElement.value;
        lastNameElementBackUp = lastNameElement.value;
        emailElementBackUp = emailElement.value;
        birthElementBackUp = birthElement.value;
        positionElementBackUp = positionElement.value;
        salaryElementBackUp = salaryElement.value;

        firstNameElement.value = ''
        lastNameElement.value = ''
        emailElement.value = ''
        birthElement.value = ''
        positionElement.value = ''
        salaryElement.value = ''

        fireButton.addEventListener('click',(e)=>{
            let removedWorkerSalary = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(6)').textContent;
            removedWorkerSalary = Number(removedWorkerSalary)
            newBudget = Number(budgetElement.textContent) - removedWorkerSalary
            
            budgetElement.textContent = newBudget.toFixed(2)
            tr.remove(e.currentTarget)

        })

        editButton.addEventListener('click',(e)=>{

            let removedWorkerFirstName = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(1)').textContent;
            let removedWorkerLastName = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(2)').textContent;
            let removedWorkerEmail = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(3)').textContent;
            let removedWorkerBirth = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(4)').textContent;
            let removedWorkerPosition = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(5)').textContent;
            let removedWorkerSalary = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(6)').textContent;

            removedWorkerSalary = Number(removedWorkerSalary)
            newBudget = Number(budgetElement.textContent) - removedWorkerSalary
            
            budgetElement.textContent = newBudget.toFixed(2)

            firstNameElement.value = removedWorkerFirstName
            lastNameElement.value = removedWorkerLastName
            emailElement.value = removedWorkerEmail
            birthElement.value = removedWorkerBirth
            positionElement.value = removedWorkerPosition
            salaryElement.value = removedWorkerSalary

            tr.remove(e.currentTarget)
        })
    })


}
solve()