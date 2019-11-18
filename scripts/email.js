var text = document.querySelector('#mytext');
var sw = "Prepopulated email template that is written with the help of our client at Grady! Social Work Temp"

var gq = "Prepopulated email template that is written with the help of our client at Grady! General Questions Temp"

var c = "Prepopulated email template that is written with the help of our client at Grady! Complaints Temp"


function rewrite(key) {
    if(key == 1) {
        text.value = sw;
    } else if(key == 2) {
        text.value = gq;
    } else {
        text.value = c;
    }

}
