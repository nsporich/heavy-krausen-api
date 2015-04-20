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