// Insert year for copyright
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// handle cookie message display

function setMessageDismissed() {
    localStorage.setItem('cookieMsg', 'dismissed');
}

let msgCheck = localStorage.getItem('cookieMsg');

// if (msgCheck != 'dismissed') {
//     $('#cookie-msg').slideDown(1000);
// }

$('.cookie-msg-close').click(function (e) {
    e.preventDefault();
    $('#cookie-msg').slideUp(setMessageDismissed());
    return false;
})