function impBmrCalculator() {
    // Refresh the value after button pressed
    document.getElementById('yourBmr').innerHTML = '';
    document.getElementById('yourEnergy').innerHTML = '';

    // Get gender value
    var gender = document.getElementById("gender").value;

    // Check that age field is not empty and assign value
    if (document.getElementById("age").value != 0) {
        var age = document.getElementById("age").value;
    }
    else {
        alert("Please enter your age")
    }
    
    // Check that only one value for height is entered and convert them to cm
    if ((document.getElementById("feet").value && document.getElementById("inches").value) != 0) {
        alert("Please enter your height in feet or inches");
    } else if (document.getElementById("feet").value != 0) {
        var userHeight = document.getElementById("feet").value * 30.48;
    } else if (document.getElementById("inches").value != 0) {
        var userHeight = document.getElementById("inches").value / 0.39370;
    }

    // Check that only one value for weight is entered and convert them to kg
    if ((document.getElementById("stones").value && document.getElementById("pounds").value) != 0) {
        alert("Please enter your weight in stones or pounds");
    } else if (document.getElementById("stones").value != 0) {
        var weight = document.getElementById("stones").value * 6.35029;
    } else if (document.getElementById("pounds").value != 0) {
        var weight = document.getElementById("pounds").value / 2.2046;
    }

    if (document.getElementById('sedentary').checked) {
        activityValue = document.getElementById('sedentary').value;
    } else if (document.getElementById('lActive').checked) {
        activityValue = document.getElementById('lActive').value;
    } else if (document.getElementById('mActive').checked) {
        activityValue = document.getElementById('mActive').value;
    } else if (document.getElementById('vActive').checked) {
        activityValue = document.getElementById('vActive').value;
    } else if (document.getElementById('sActive').checked) {
        activityValue = document.getElementById('sActive').value;
    }
    else {
        alert("Please select your activity level");
    }

    // Calculate BMR
    if (gender == "male") {
        Bmr = (10 * weight) + (6.25 * userHeight) - (5 * age) + 5;
        document.getElementById('yourBmr').append(Bmr);
    } else if (gender == 'female') {
        Bmr = (10 * weight) + (6.25 * userHeight) - (5 * age) - 161;
        document.getElementById('yourBmr').append(Bmr);
    }

    // Calculate total energy expanditure
    if (document.getElementById('sedentary').checked || document.getElementById('lActive').checked) {
        var totEnerExpand = Bmr * 1.53;
    } else if (document.getElementById('mActive').checked || document.getElementById('vActive').checked) {
        var totEnerExpand = Bmr * 1.76;
    } else if (document.getElementById('sActive').checked) {
        var totEnerExpand = Bmr * 2.25;
    }

    document.getElementById('yourEnergy').append(totEnerExpand);
}
document.getElementById("button").addEventListener("click", impBmrCalculator, false);


// METRIC CALCULATOR
function metBmrCalculator() {
    // Refresh the value after button pressed
    document.getElementById('yourBmr_m').innerHTML = '';
    document.getElementById('yourEnergy_m').innerHTML = '';

    // Get gender value
    var gender = document.getElementById("gender_m").value;

    // Check if field not empty and assign value
    function notEmptyCheck(id, text) {
        if (document.getElementById(id).value != 0) {
            var assign = document.getElementById(id).value;
            return assign;
        }
        else {
            alert(text)
        }
    }

    var age = notEmptyCheck("age_m", "Please enter your age")
    var userHeight = notEmptyCheck("cm", "Please enter your height in cm")
    var weight = notEmptyCheck("kg", "Please enter your weight in kg")

    if (document.getElementById('sedentary_m').checked) {
        activityValue = document.getElementById('sedentary_m').value;
    } else if (document.getElementById('lActive_m').checked) {
        activityValue = document.getElementById('lActive_m').value;
    } else if (document.getElementById('mActive_m').checked) {
        activityValue = document.getElementById('mActive_m').value;
    } else if (document.getElementById('vActive_m').checked) {
        activityValue = document.getElementById('vActive_m').value;
    } else if (document.getElementById('sActive_m').checked) {
        activityValue = document.getElementById('sActive_m').value;
    }
    else {
        alert("Please select your activity level");
    }

    // Calculate BMR
    if (gender == "male") {
        Bmr = (10 * weight) + (6.25 * userHeight) - (5 * age) + 5;
        document.getElementById('yourBmr_m').append(Bmr);
    } else if (gender == 'female') {
        Bmr = (10 * weight) + (6.25 * userHeight) - (5 * age) - 161;
        document.getElementById('yourBmr_m').append(Bmr);
    }

    // Calculate total energy expanditure
    if (document.getElementById('sedentary_m').checked || document.getElementById('lActive_m').checked) {
        var totEnerExpand = Bmr * 1.53;
    } else if (document.getElementById('mActive_m').checked || document.getElementById('vActive_m').checked) {
        var totEnerExpand = Bmr * 1.76;
    } else if (document.getElementById('sActive_m').checked) {
        var totEnerExpand = Bmr * 2.25;
    }

    document.getElementById('yourEnergy_m').append(totEnerExpand);
}

document.getElementById("button_m").addEventListener("click", metBmrCalculator, false);

function openField(evt, fieldName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(fieldName).style.display = "block";
    evt.currentTarget.className += " active";
}
