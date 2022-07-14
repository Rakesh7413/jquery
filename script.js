$(function () {

    $("#fname_error").hide();
    $("#sname_error").hide();
    $("#email_error").hide();
    $("#password_error").hide();
    $("#retype_password_error").hide();

    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    $("#form_fname").focusout(function () {
        check_fname();
    });
    $("#form_sname").focusout(function () {
        check_sname();
    });
    $("#form_email").focusout(function () {
        check_email();
    });
    $("#form_password").focusout(function () {
        check_password();
    });
    $("#form_retype_password").focusout(function () {
        check_retype_password();
    });

    function check_fname() {
        var fname = $("#form_fname").val();
        if (fname !== '') {
            $("#fname_error").hide();
            $("#form_email").css("border", "1px rgb(191, 191, 191) solid");
        } else {
            $("#fname_error").html("*Required");
            $("#fname_error").show();
            $("#form_fname").css("border", "1px solid #F90A0A");
            error_fname = true;
        }
    }

    function check_sname() {
        var sname = $("#form_sname").val()
        if (sname !== '') {
            $("#sname_error").hide();
            $("#form_email").css("border", "1px rgb(191, 191, 191) solid");
        } else {
            $("#sname_error").html("*Required");
            $("#sname_error").show();
            $("#form_sname").css("border", "1px solid #F90A0A");
            error_fname = true;
        }
    }

    function check_retype_password() {
        var password = $("#form_password").val();
        var retype_password = $("#form_retype_password").val();
        if (password !== retype_password) {
            $("#retype_password_error").html("Passwords Did not Matched");
            $("#retype_password_error").show();
            $("#form_retype_password").css("border", "1px solid #F90A0A");
            error_retype_password = true;
        } else {
            $("#retype_password_error").hide();
            $("#form_email").css("border", "1px rgb(191, 191, 191) solid");
        }
    }

    function check_password() {
        var pattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8, 20}$/;
        var password= $("#form_passwprd").val();
        if (pattern.test(password)) {
            $("#form_email").css("border", "1px rgb(191, 191, 191) solid");
            $("#password_error").hide();
        } else {
            $("#password_error").html("Atleast 8 Characters");
            $("#password_error").show();
            $("#form_password").css("border", "1px solid #F90A0A");
            error_password = true;
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#form_email").val();
        if (pattern.test(email) && email !== '') {
            $("#email_error").hide();
            $("#form_email").css("border", "1px rgb(191, 191, 191) solid");
        } else {
            $("#email_error").html("Invalid Email");
            $("#email_error").show();
            $("#form_email").css("border", "1px solid #F90A0A");
            error_email = true;
        }
    }

    $("#registration_form").submit(function () {
        error_fname = false;
        error_sname = false;
        error_email = false;
        error_password = false;
        error_retype_password = false;

        check_fname();
        check_sname();
        check_email();
        check_password();
        check_retype_password();

        if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
            alert("Registration Successfull");
            return true;
        } else {
            alert("Please Fill the required feilds.");
            return false;
        }
    });
});