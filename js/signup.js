$(document).ready(function() {
  document.getElementById("box11").style.backgroundColor = "rgb(255, 255 ,255)";
  document.getElementById("box22").style.backgroundColor = "rgb(255, 255 ,255)";
  document.getElementById("box33").style.backgroundColor = "rgb(255, 255 ,255)";
  document.getElementById("box44").style.backgroundColor = "rgb(255, 255 ,255)";

  document.getElementById("0").style.backgroundColor = "rgb(255, 0 ,0)";
  document.getElementById("1").style.backgroundColor = "rgb(0, 0 ,255)";
  document.getElementById("2").style.backgroundColor = "rgb(0, 0 ,0)";
  document.getElementById("3").style.backgroundColor = "rgb(245, 222 ,179)";
  document.getElementById("4").style.backgroundColor = "rgb(255, 255 ,0)";
  document.getElementById("5").style.backgroundColor = "rgb(0, 128 ,0)";
  document.getElementById("6").style.backgroundColor = "rgb(255, 182 ,193)";
  document.getElementById("7").style.backgroundColor = "rgb(128, 0 ,128)";
  document.getElementById("8").style.backgroundColor = "rgb(135, 206 ,250)";
  var user;
  var colors = [];
  var numbers = [];
  $("#submit").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      console.log("please enter the user name");
    } else {
      user = $("#user").val();
      console.log(user);
      $('#myModal').modal('toggle');
    }
  });
  $("#signup-btn").on("click", function() {
    var box11 = $("#box11").css("background-color");
    var box22 = $("#box22").css("background-color");
    var box33 = $("#box33").css("background-color");
    var box44 = $("#box44").css("background-color");
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('toggle');
    } else if (box11 === 'rgb(255, 255, 255)' || box22 === "rgb(255, 255, 255)" || box33 === "rgb(255, 255, 255)" || box44 === "rgb(255, 255, 255)") {
      $("#signup-btn").notify(
        "Please select all the colors", {
          position: "left"
        }
      );
    } else if ($("#pass-1").val() == "" || $("#pass-2").val() == "" || $("#pass-3").val() == "" || $("#pass-4").val() == "") {
      $("#signup-btn").notify(
        "Please enter numbers in the input box", {
          position: "left"
        }
      );
    } else {
      for (var i = 1; i <= 4; i++) {
        numbers.push($('#pass-' + i + '').val());
      }
      colors.push(box11, box22, box33, box44);
      var myObj = {
        user: user,
        numbers: numbers,
        colors: colors
      }

      $.ajax({
        url: "http://localhost:3000/signup",
        data: JSON.stringify(myObj),
        type: "POST",
        success: function(data) {
          console.log(data);
        }
      });
    }
  });
  $(".close").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      console.log("please enter the user name");
    }
  });
  $('#myModal').modal('show');


  $("#0").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "transparent";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "transparent";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "transparent";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "transparent";
      }
    }
  });
  $("#1").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  });
  $("#2").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  });
  $("#3").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  });
  $("#4").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  });
  $("#5").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  });
  $("#6").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  });
  $("#7").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  });
  $("#8").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('show');
    } else {
      if (document.getElementById("box11").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box11").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box22").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box22").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box33").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box33").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      } else if (document.getElementById("box44").style.backgroundColor == "rgb(255, 255, 255)") {
        document.getElementById("box44").style.backgroundColor = $(this).css('backgroundColor');
        this.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  });
  $("#box11").on("click", function() {
    if ($(this).css('backgroundColor') == "rgb(255, 0, 0)") {
      document.getElementById("0").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 0, 255)") {
      document.getElementById("1").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 0, 0)") {
      document.getElementById("2").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(245, 222, 179)") {
      document.getElementById("3").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(255, 255, 0)") {
      document.getElementById("4").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 128, 0)") {
      document.getElementById("5").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(255, 182, 193)") {
      document.getElementById("6").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(128, 0, 128)") {
      document.getElementById("7").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(135, 206, 250)") {
      document.getElementById("8").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    }
  });
  $("#box22").on("click", function() {
    if ($(this).css('backgroundColor') == "rgb(255, 0, 0)") {
      document.getElementById("0").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 0, 255)") {
      document.getElementById("1").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 0, 0)") {
      document.getElementById("2").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(245, 222, 179)") {
      document.getElementById("3").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(255, 255, 0)") {
      document.getElementById("4").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 128, 0)") {
      document.getElementById("5").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(255, 182, 193)") {
      document.getElementById("6").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(128, 0, 128)") {
      document.getElementById("7").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(135, 206, 250)") {
      document.getElementById("8").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    }
  });
  $("#box33").on("click", function() {
    if ($(this).css('backgroundColor') == "rgb(255, 0, 0)") {
      document.getElementById("0").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 0, 255)") {
      document.getElementById("1").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 0, 0)") {
      document.getElementById("2").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(245, 222, 179)") {
      document.getElementById("3").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(255, 255, 0)") {
      document.getElementById("4").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 128, 0)") {
      document.getElementById("5").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(255, 182, 193)") {
      document.getElementById("6").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(128, 0, 128)") {
      document.getElementById("7").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(135, 206, 250)") {
      document.getElementById("8").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    }
  });
  $("#box44").on("click", function() {
    if ($(this).css('backgroundColor') == "rgb(255, 0, 0)") {
      document.getElementById("0").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 0, 255)") {
      document.getElementById("1").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 0, 0)") {
      document.getElementById("2").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(245, 222, 179)") {
      document.getElementById("3").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(255, 255, 0)") {
      document.getElementById("4").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(0, 128, 0)") {
      document.getElementById("5").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(255, 182, 193)") {
      document.getElementById("6").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(128, 0, 128)") {
      document.getElementById("7").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    } else if ($(this).css('backgroundColor') == "rgb(135, 206, 250)") {
      document.getElementById("8").style.backgroundColor = $(this).css('backgroundColor');
      this.style.backgroundColor = "rgb(255, 255, 255)";
    }
  });
});
