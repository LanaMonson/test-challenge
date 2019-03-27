document.addEventListener("DOMContentLoaded", function() {
  var btnSave = document.getElementById("btnSave");
  btnSave.addEventListener("click", event => {
    alert("Hello, Derivita!");
  });

  var btnCancel = document.getElementById("btnCancel");
  btnCancel.addEventListener("click", event => {
    alert("Are you sure you want to cancel?");
  });

  var btnEdit = document.getElementById("btnEdit");
  btnEdit.addEventListener("click", event => {
    alert("Pretend you are editing...");
  });
});
