


const submitButton = document.getElementById('form-submit');

const firstNameInput = document.getElementById('first-name');

const lastNameInput = document.getElementById('last-name');

const emailInput = document.getElementById('email-address');

const phoneInput = document.getElementById('phone-number');

const addressInput = document.getElementById('delivery-address');

const dateInput = document.getElementById('delivery-date');

const specialInput = document.getElementById('special-notes');

const checkbox = document.querySelectorAll('input[name="order"]');

const field = document.querySelectorAll('.fillable');







field.forEach(function(check){

    const sessionValue =sessionStorage.getItem(check.name);

    if (sessionValue) {
        check.value = sessionValue;
    }

    check.addEventListener('input', function(){

         const formField = [ {name: "First Name", value: firstNameInput.value.trim()},
                        {name: "Last Name", value: lastNameInput.value.trim()},
                        {name: "Email", value: emailInput.value.trim()},
                        {name: "Phone", value: phoneInput.value.trim()},
                        {name: "Address", value: addressInput.value.trim()},
                        {name: "Date", value: dateInput.value.trim()},
    ];


    sessionStorage.setItem(check.name, check.value.trim())
    

    if (check.value.trim() === '') {

            check.closest('fieldset').style.border = '2px solid red';
        

} else check.closest('fieldset').style.border = '2px solid green';})

 
})





submitButton.addEventListener('click', function(event) {


    const formField = [ {name: "First Name", value: firstNameInput.value.trim()},
                        {name: "Last Name", value: lastNameInput.value.trim()},
                        {name: "Email", value: emailInput.value.trim()},
                        {name: "Phone", value: phoneInput.value.trim()},
                        {name: "Address", value: addressInput.value.trim()},
                        {name: "Date", value: dateInput.value.trim()},
    ];



    const blankFields = formField.filter(field => field.value === '');

    if (blankFields.length > 0 || checkbox.length === 0) {
        const missing = blankFields.map(field => field.name).join(', ');
        alert("Please fill in all required fields: " + missing + " and be sure to select at least one order option.")}
    
        else {alert("form submitted and is ready for delivery")};

    //console.log(firstNameInput.value.trim());
    //console.log(blankFields)[1];
    //console.log(checkbox.length);
    //alert("clicked")
});