var colors = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(0, 0, 0)", "rgb(245, 222, 179)", "rgb(255, 255, 0)", "rgb(0, 128, 0)", "rgb(255, 182, 193)", "rgb(128, 0, 128)", "rgb(135, 206, 250)"];
var userColors = [];
var isDown = false;
var flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9;
var userServerResponse;
$(document).ready(function() {
  $("#myModal").modal('toggle');
  colors.sort(function(a, b) {
    return 0.5 - Math.random()
  });
  for (var i = 1; i <= colors.length; i++) {
    document.getElementById(i).style.backgroundColor = colors[i - 1];
  }
  document.getElementById("box11").style.backgroundColor = "rgb(255, 255 ,255)";
  document.getElementById("box22").style.backgroundColor = "rgb(255, 255 ,255)";
  document.getElementById("box33").style.backgroundColor = "rgb(255, 255 ,255)";
  document.getElementById("box44").style.backgroundColor = "rgb(255, 255 ,255)";

  function setFlags(identity) {
    flag1 = false, flag2 = false, flag3 = false, flag4 = false, flag5 = false, flag6 = false, flag7 = false, flag8 = false, flag9 = false;
    if (identity == 1) {
      flag2 = true;
      flag4 = true;
      flag5 = true;
    }
    if (identity == 2) {
      flag1 = true;
      flag3 = true;
      flag4 = true;
      flag5 = true;
      flag6 = true;
    }
    if (identity == 3) {
      flag2 = true;
      flag5 = true;
      flag6 = true;
    }
    if (identity == 4) {
      flag1 = true;
      flag2 = true;
      flag5 = true;
      flag7 = true;
      flag8 = true;
    }
    if (identity == 5) {
      flag1 = true;
      flag2 = true;
      flag3 = true;
      flag4 = true;
      flag5 = true;
      flag6 = true;
      flag7 = true;
      flag8 = true;
      flag9 = true;
    }
    if (identity == 6) {
      flag2 = true;
      flag3 = true;
      flag5 = true;
      flag8 = true;
      flag9 = true;
    }
    if (identity == 7) {
      flag4 = true;
      flag5 = true;
      flag8 = true;
    }
    if (identity == 8) {
      flag4 = true;
      flag5 = true;
      flag6 = true;
      flag7 = true;
      flag9 = true;
    }
    if (identity == 9) {
      flag5 = true;
      flag6 = true;
      flag8 = true;
    }
  }

  function checkMouse() {
    $(document).mousedown(function() {
      isDown = true;
    }).mouseup(function() {
      isDown = false;
    });
  }
  $("#1").mousedown(function() {
    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);
          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);
          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);
        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);
          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);
          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);
        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
  });
  $("#2").mousedown(function() {

    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);
          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);
          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });

  });
  $("#3").mousedown(function() {

    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    console.log(userColors);
    if (userColors.length == 9) {
      location.reload();
    }
    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });

  });
  $("#4").mousedown(function() {

    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    console.log(userColors);

    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });

  });
  $("#5").mousedown(function() {

    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    console.log(userColors);

    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });

  });
  $("#6").mousedown(function() {

    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    console.log(userColors);

    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);
          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);
        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });

        }
      }
    });

  });
  $("#7").mousedown(function() {

    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    console.log(userColors);
    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });

  });
  $("#8").mousedown(function() {

    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    console.log(userColors);
    if (userColors.length == 9) {
      location.reload();
    }
    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });

  });
  $("#9").mousedown(function() {

    checkMouse();
    setFlags(this.id);
    userColors.push($(this).css("background-color"));
    $(this).css("background-color", "aquamarine");
    console.log(userColors);

    $("#1").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag1) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#2").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag2) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#3").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag3) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#4").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag4) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#5").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag5) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#6").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag6) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#7").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag7) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#8").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag8) {
          setFlags(this.id);

          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);

        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });
    $("#9").mouseover(function() {
      checkMouse();
      if (isDown) {
        if (flag9) {
          setFlags(this.id);
          userColors.push($(this).css("background-color"));
          $(this).css("background-color", "aquamarine");
          console.log(userColors);
        } else {
          swal({
              title: "Warning!",
              text: "Do Not Jump !",
              type: "warning",
              confirmButtonText: "Cool",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
        }
      }
    });

  });
  var arr = [];
  var usersArr = [];
  $(".mouseBox").mouseup(function() {
    if (userColors.length < 4) {
      swal({
          title: "Warning!",
          text: "Please select atleast 4 colors !",
          type: "warning",
          confirmButtonText: "Cool",
          closeOnConfirm: false
        },
        function(isConfirm) {
          if (isConfirm) {
            location.reload();
          }
        });
    } else if (userColors.length >= 4 && userColors.length < 9) {
      swal({
        title: "Authenticating your data !!!",
        imageUrl: "loading.gif",
        imageSize: "200x200",
        timer: 2000,
        showConfirmButton: false
      }, function() {
        for (var i = 0; i < userColors.length; i++) {
          for (var j = 0; j < userServerResponse.colors.length; j++) {
            if (userServerResponse.colors[j] === userColors[i]) {
              arr.push(userColors[i]);
            }
          }
        }
        if (arr.length < 4) {
          alert("Password Not Correct1");
          location.reload();
        } else {
          if (arr.join("") === userServerResponse.colors.join("")) {
            swal({
              type: "success",
              title: "First Step authenticated successfully !!",
              text: "",
              timer: 1000,
              showConfirmButton: true
            }, function(isConfirm) {
              if (isConfirm) {
                arr.sort(function(a, b) {
                  return 0.5 - Math.random()
                });
                for (var i = 1; i <= arr.length; i++) {
                  document.getElementById("box" + i + i).style.backgroundColor = arr[i - 1];
                  swal.close();
                }
              }
            });

          } else {
            swal({
              type: "error",
              title: "Password not correct"
            }, function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            });
          }
        }
      });
    } else if (userColors.length == 9) {
      alert("You cannot select all the colors");
      location.reload();
    }
  });

  $("#submit").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      console.log("please enter the user name");
    } else {
      var user = $("#user").val();
      $('#myModal').modal('toggle');
      var myObj = {
        user: user
      };
      $.ajax({
        url: "http://localhost:3000/login",
        type: "POST",
        data: JSON.stringify(myObj),
        success: function(data) {
          if (data == "") {
            swal({
                title: "Username does not exist !!!",
                type: "error",
                confirmButtonText: "Try Again !!",
                closeOnConfirm: false
              },
              function(isConfirm) {
                if (isConfirm) {
                  location.reload();
                }
              });
          } else {
            console.log(data);
            userServerResponse = data;
          }
        }
      });
    }
  });
  $("#login-btn").on("click", function() {
    var count = 0;
    var box11 = $("#box11").css("background-color");
    var box22 = $("#box22").css("background-color");
    var box33 = $("#box33").css("background-color");
    var box44 = $("#box44").css("background-color");
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      $('#myModal').modal('toggle');
    } else if (box11 === 'rgb(255, 255, 255)' || box22 === "rgb(255, 255, 255)" || box33 === "rgb(255, 255, 255)" || box44 === "rgb(255, 255, 255)") {
      $("#login-btn").notify(
        "Please select all the colors", {
          position: "left"
        }
      );
    } else if ($("#pass-1").val() == "" || $("#pass-2").val() == "" || $("#pass-3").val() == "" || $("#pass-4").val() == "") {
      $("#login-btn").notify(
        "Please enter numbers in the input box", {
          position: "left"
        }
      );
    } else {
      for (var i = 1; i <= 4; i++) {
        usersArr.push($("#pass" + i).val());
      }
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (userServerResponse.numbers[i] == usersArr[j]) {
            count++;
          }
        }
      }
      if (count == 4) {
        checkPin();
      } else {
        swal({
          type: "error",
          title: "Password does not match"
        }, function(isConfirm) {
          if (isConfirm) {
            location.reload();
          }
        });
      }
    }
  });
  var checkArr = [];
  var usersCheckArr = [];
  var successCount = 0;

  function checkPin() {
    for (var i = 0; i < 4; i++) {
      checkArr.push(userServerResponse.colors[i]);
      checkArr.push(userServerResponse.numbers[i]);
      usersCheckArr.push(arr[i]);
      usersCheckArr.push(usersArr[i]);
    }
    loop1:
      for (var k = 0; k < checkArr.length; k = k + 2) {
        for (var j = 0; j < usersCheckArr.length; j++) {
          if (checkArr[k] === usersCheckArr[j]) {
            if (checkArr[k + 1] == usersCheckArr[j + 1]) {
              successCount++;
            } else {
              swal({
                type: "error",
                title: "Password does not match"
              }, function(isConfirm) {
                if (isConfirm) {
                  location.reload();
                }
              });
              break loop1;
            }
          }
        }
      }
    if (successCount == 4) {
      swal({
        title: "Authenticating your data !!!",
        imageUrl: "loading.gif",
        imageSize: "200x200",
        timer: 2000,
        showConfirmButton: false
      },function(){
        swal({
          title: "Authenticated successfully",
          type: "success",
          showConfirmButton: true,
          animation: "slide-from-top"
        },function(isConfirm){
          if(isConfirm){
            window.location = "index.html";
          }
        });
      });
    }
  }
  $(".close").on("click", function() {
    if ($("#user").val() == "") {
      $("#warning").css("display", "block");
      console.log("please enter the user name");
    } else {
      user = $("#user").val();
      console.log(user);
      $('#myModal').modal('toggle');
    }
  });
});
