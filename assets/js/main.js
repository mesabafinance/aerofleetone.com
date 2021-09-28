// Insert year for copyright
document.getElementById("currentYear").innerHTML = new Date().getFullYear();


// handle cookie message display

function setMessageDismissed() {
    localStorage.setItem('topMsg', 'dismissed');
}

let msgCheck = localStorage.getItem('topMsg');
if (msgCheck != 'dismissed') {
    $('#top-msg').slideDown(1000);
}

$('.top-msg-close').click(function (e) {
    e.preventDefault();
    $('#top-msg').slideUp(setMessageDismissed());
    return false;
})