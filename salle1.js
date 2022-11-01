let btn = document.getElementById("btn");
let btnIcon = document.getElementById("btn-icon");
let permissions = document.getElementById("permissions");

const togglePermissions = () =>  {
  if (btnIcon.name == "add-circle-outline") {
    btnIcon.name = "remove-circle-outline";
    permissions.style.height = "max-content";
  } else { 
    btnIcon.name == "add-circle-outline";
    permissions.style.height = "20px";
  } 
};

btn.addEventListener("click", togglePermissions);

