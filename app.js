//form class
class Form{
    constructor(firstName, lastName, email, message){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.message = message;
    }

}

class UI {
    showAlert(message, className) {
        //creates div
        const div = document.createElement('div');

        //adding class to div
        div.className = `alert ${className}`;

        //appending child
        div.appendChild(document.createTextNode(message));

        //get parent
        const title = document.getElementById('alert-title');

        //getting form container
        const container = document.querySelector('.form')

        container.insertBefore(div, title);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    hilightField(id) {
        document.getElementById(`${id}`).style.border = '1px red solid';
    }

    removeHilight(id) {
        document.getElementById(`${id}`).style.border = 'none';
    }
}



// event listener for Submit
document.getElementById('btn').addEventListener('click', function(e){
   const firstName = document.getElementById('first-name').value,
         lastName = document.getElementById('last-name').value,
         email = document.getElementById('email').value,
         message = document.getElementById('message').value;

    const form = new Form(firstName, lastName, email, message);

    const ui = new UI();

    if(firstName === '' || lastName === '' || email === '' || message === '') {
    ui.showAlert('Please fill out all fields', 'deny')
    } else {
        ui.showAlert('From has been submitted!', 'success')
    }

    if(firstName === ''){
        ui.hilightField('first-name')
    } else {
        ui.removeHilight('first-name');
    }
    
    if (lastName === '') {
        ui.hilightField('last-name')

    } else {
        ui.removeHilight('last-name');
    }
    
    if(email === '') {
        ui.hilightField('email')

    } else {
        ui.removeHilight('email');
    }
    
    if(message === '') {
        ui.hilightField('message')
    } else {
        ui.removeHilight('message')
    }


    

//     } else {
//     ui.showAlert('From has been submitted!', 'success')
// }
    e.preventDefault();
});