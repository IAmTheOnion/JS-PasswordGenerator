$( document ).ready(function() {
    $("#mb").click(function(){
        document.getElementById("password").value = randomPassword(document.getElementById("slider").value, document.getElementById("cl").checked, document.getElementById("sc").checked);
    });

    $("#slider").change(function() {
        $("#slider-value").text(this.value);
    })

});

function randomPassword(l, cl, sc) {

    let code = "abcdefghijklmnopqrstuvwxyz1234567890";
    let final = "";

    if (cl) {
        code += "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
    }

    if (sc) {
        code += "!@#$%:&+=";
    }

    for(let i = 0; i < l; i++) {
        final += code.charAt(Math.floor(Math.random() * code.length));
    }

    return final;
}