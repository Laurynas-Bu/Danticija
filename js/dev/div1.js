var modal, span, body, addTo;

modal = document.getElementById('div1');
span = document.getElementsByClassName("close")[0];
body = document.querySelector('body');
addTo = document.getElementById('addto');

$('#regbtn1, #regbtn2').click(function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";

});

span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "scroll";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "scroll";
    }
};

