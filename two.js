// Custom JavaScript can be added here
$(document).ready(function(){
    console.log("Website loaded successfully");
    
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        const email = $('#email').val();
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const terms = $('#terms').is(':checked');
        
        if (email && firstName && lastName && terms) {
            alert(`Thank you, ${firstName}! Your form has been submitted.`);
        } else {
            alert('Please fill out all fields and agree to the terms.');
        }
    });
});
