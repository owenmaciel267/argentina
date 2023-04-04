$(document).ready(() => {
  $("#color-list").change(function () {
    let color = $("#color-list").val();
    $(".el-que-cambia").css("background-color", color);
  });

  // form
  $("#registro-form").submit(function (event) {
    if ($("#nombre").val() == "") {
      $("#nombre")
        .next(".error")
        .text("Completa este campo")
        // .css("color", "red");
      // event.preventDefault();
    }
    if ($("#apellido").val() == "") {
      $("#apellido")
        .next(".error")
        .text("Completa este campo")
        // .css("color", "red");
      // event.preventDefault();
    }
    if ($("#email").val() == "") {
      $("#email")
        .next(".error")
        .text("Completa este campo")
        // .css("color", "red");
      // event.preventDefault();
    }
    if ($("#contraseña").val() == "") {
      $("#contraseña")
        .next(".error")
        .text("Completa este campo")
        // .css("color", "red");
      // event.preventDefault();
    }
  });
});
