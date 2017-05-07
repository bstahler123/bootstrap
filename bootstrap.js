$(document).on('click', 'a', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {
    const config = {
        apiKey: "AIzaSyD5eqGeGoJKiDUXQA36Qi5_Qtoqs3aVqL0",
        authDomain: "portfolio-messenger.firebaseapp.com",
        databaseURL: "https://portfolio-messenger.firebaseio.com",
        projectId: "portfolio-messenger",
        storageBucket: "portfolio-messenger.appspot.com",
        messagingSenderId: "51564714549"
    };
    firebase.initializeApp(config);
    $('.form1').on('submit', event => {
        event.preventDefault();
        const name = $('#InputName').val();
        const email = $('#InputEmail').val();
        const message = $('#InputMessage').val();
        console.log(name, email, message);
        firebase.database().ref('messages').push({
        	name, email, message

        });

    });


});
