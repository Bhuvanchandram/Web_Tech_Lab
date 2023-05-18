function validateForm() {
    var regNum = document.forms["testForm"]["regNum"].value;
    var subCode = document.forms["testForm"]["subCode"].value;
    var test1 = document.forms["testForm"]["test1"].value;
    var test2 = document.forms["testForm"]["test2"].value;
    var test3 = document.forms["testForm"]["test3"].value;

    if (regNum == "" || subCode == "" || test1 == "" || test2 == "" || test3 == "") {
        alert("All fields must be filled out");
        return false;
    }
    if (isNaN(test1) || isNaN(test2) || isNaN(test3)) {
        alert("Test scores must be numbers");
        return false;
    }
}

function calculateAverage() {
    var test1 = parseInt(document.forms["testForm"]["test1"].value);
    var test2 = parseInt(document.forms["testForm"]["test2"].value);
    var test3 = parseInt(document.forms["testForm"]["test3"].value);

    var tests = [test1, test2, test3];
    tests.sort(function(a, b){return b-a});

    var average = (tests[0] + tests[1]) / 2;
    alert("Average of two best tests: " + average);
}