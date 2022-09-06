$( document ).ready(function() {
    $(document).on('input', '#slider', function() {
        document.getElementById("password").value = randomPassword(this.value, document.getElementById("cl").value, document.getElementById("sc").value);
    });


});

console.log("test");

function randomPassword(l, cl, sc) {

    let code = "abcdefghijklmnopqrstuvwxyz1234567890";
    let final = "";

    if (cl == "on") {
        code += "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
    }

    if (sc == "on") {
        code += "!@#$%:&+=";
    }

    for(let i = 0; i < l; i++) {
        final += code.charAt(Math.floor(Math.random() * code.length));
    }

    return final;
}