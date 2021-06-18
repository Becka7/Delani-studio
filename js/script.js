$(document).ready(function(){
    $('#pic').click(function(){
       $('#pup').toggle();
       $('#pic').hide();
    });
});

$(document).ready(function(){
    $('#pup').click(function(){
        $('#pic').toggle();
        $('#pup').hide();
    });
});

$(document).ready(function(){
    $('#poc').click(function(){
        $('#pob').toggle();
        $('#poc').hide();
    });
});

$(document).ready(function(){
    $('#pob').click(function(){
        $('#poc').toggle();
        $('#pob').hide();
    });
});

$(document).ready(function(){
    $('#puc').click(function(){
       $('#pog').toggle();
       $('#puc').hide();
    });
});

$(document).ready(function(){
    $('#pog').click(function(){
       $('#puc').toggle();
       $('#pog').hide();
    });
});


function sendMessage(){
    var userName = document.getElementById("uName").value;
    alert("We got your message .Thank you for your response  "+userName);
}