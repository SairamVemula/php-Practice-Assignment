
  var getlink = "http://phptutorials.com/api/getuserdetails.php?user_id=1";
  var postlink = "http://phptutorials.com/api/updateuserdetails.php";


$(document).ready(function () {
  console.log("Doc Ready");

  getvaluesAPI();

  function setvaluesAPI(fname, lname, email, mobile, address) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("Update Data Send");
      }
    };
    xmlhttp.open("POST", postlink);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    // xmlhttp.send("fname="+fname+"&lname="+lname+"&email="+email+"&mobile="+mobile+"&address="+address);
    var JSONobj = JSON.stringify({
      fname: fname,
      lname: lname,
      Email: email,
      Mobile: mobile,
      Address: address,
    });
    console.log(JSONobj);
    xmlhttp.send(JSONobj);
  }

  function getvaluesAPI() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var JSONobj = JSON.parse(this.responseText);
        console.log(JSONobj);
        setHTML(JSONobj);
      }
    };
    xmlhttp.open("GET", getlink);
    xmlhttp.send();
  }

  function setHTML(JSONobj) {
    $("#fname").val(JSONobj.fname);
    $("#lname").val(JSONobj.lname);
    $("#email").val(JSONobj.Email);
    $("#mobile").val(JSONobj.Mobile);
    $("#address").val(JSONobj.Address);
  }

  $("#edit").click(function (e) {
    e.preventDefault();
    $("#edit").css("display", "none");
    $("#save").css("display", "block");
    $("input,textarea").css("background", "#04FEFE ");
    $("input,textarea").removeAttr("readonly");
  });
  $("#save").click(function (e) {
    e.preventDefault();
    setvaluesAPI(
      $("#fname").val(),
      $("#lname").val(),
      $("#email").val(),
      $("#mobile").val(),
      $("#address").val()
    );
    $("#save").css("display", "none");
    $("#edit").css("display", "block");
    $("input,textarea").css("background", "rgb(219, 216, 216)");
    $("input,textarea").attr("readonly", "true");
  });
});
