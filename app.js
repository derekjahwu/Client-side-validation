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

    clearFields() {
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '',
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }

    hilightField(id) {
        document.getElementById(`${id}`).style.border = '1px red solid';
    }

    removeHilight(id) {
        document.getElementById(`${id}`).style.border = 'none';
    }
    
    sendEmail (email,message) {
        Email.send({
            Host : "smtp.gmail.com",
            Username : "derekjwu96@gmail.com",
            Password : "jwhkhmqghpasuwhv",
            To : `derekjwu96@gmail.com, ${email}`,
            From : 'derekjwu96@gmail.com',
            Subject : `Thanks for Visiting!`,
            Body : `Hello,<br>Thank you for visitng my website! My name is Derek Wu and I am a self-taugh web-developer and I enjoy thinking of website designs and implementing them using code. Please visit my website at www.derekjahwu.com for more of my work. <br>Best,<br>Derek J. Wu<br><br>${message}`,
    })};

    // sendPersonalEmail (firstName, lastName, email, message) {
    //     Email.send({
    //         Host : "smtp.gmail.com",
    //         Username : "derekjwu96@gmail.com",
    //         Password : "iwzimrarmdhrmjru",
    //         To : `derekjwu96@gmail.com,`,
    //         From : 'derekjwu96@gmail.com',
    //         Subject : `${firstName} ${lastName} has Sent You a Message`,
    //         Body : `${message}`,
    // })};


};



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
        ui.showAlert('From has been submitted!', 'success');
        ui.clearFields();
        ui.sendEmail(email,message);
        // ui.sendPersonalEmail(firstName, lastName, email, message);
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