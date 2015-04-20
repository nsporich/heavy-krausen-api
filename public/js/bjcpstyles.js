dpd.users.me(function(user) {
    if (user) {
        $('msg').text("Signed in as " + user.friendlyName);
    } 
    else {
        location.href = "/";
    }
});


$('#logout-btn').click(function() {
        dpd.users.logout(function(res, err) {
            location.href = "/";
    });
});


$('form').submit(function() {

    var category = $('#category').val();
    var stylename = $('#stylename').val();
    var aroma = $('#aroma').val();
    var appearance = $('#appearance').val();
    var flavor = $('#flavor').val();
    var mouthfeel = $('#mouthfeel').val();
    var comments = $('#comments').val();
    var ingredients = $('#ingredients').val();
    var ibuLow = $('#ibuLow').val();
    var ibuHigh = $('#ibuHigh').val();
    var srmLow = $('#srmLow').val();
    var srmHigh = $('#srmHigh').val();
    var ogLow = $('#ogLow').val();
    var ogHigh = $('#ogHigh').val();
    var fgLow = $('#fgLow').val();
    var fgHigh = $('#fgHigh').val();
    var abvLow = $('#abvLow').val();
    var abvHigh = $('#abvHigh').val();


    dpd.bjcpstyles.post({
        "category":category,
        "stylename":stylename,
        "aroma":aroma,
        "appearance":appearance,
        "flavor":flavor,
        "mouthfeel":mouthfeel,
        "comments":comments,
        "ingredients":ingredients,
        "ibuLow":ibuLow,
        "ibuHigh":ibuHigh,
        "srmLow":srmLow,
        "srmHigh":srmHigh,
        "ogLow":ogLow,
        "ogHigh":ogHigh,
        "fgLow":fgLow,
        "fgHigh":fgHigh,
        "abvLow":abvLow,
        "abvHigh":abvHigh
    },

    function(result, err) {
        if(err) return console.log(err);
            console.log(result, result.id);
    });

    $('#formBJCP')[0].reset();
    
});
