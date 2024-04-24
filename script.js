let slider_element = document.getElementById("slider");
let button_element = document.getElementById("button");

let size_password = document.getElementById("valor");
let password = document.getElementById("password");

let container_password = document.getElementById("container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"
let nova_senha = ""

size_password.innerHTML = slider_element.value;

slider.oninput = function()
{
    size_password.innerHTML = this.value;
}

function generate_password()
{
    let pass = "";

    for (let i = 0, n = charset.length; i < slider_element.value; i++)
    {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    container_password.classList.remove("hide");
    password.innerHTML = pass;
    nova_senha = pass;
}

function copy_password()
{
    console.log("aksnlasdnasd")
    alert("Senha copiada para área de trasferência.");
    navigator.clipboard.writeText(nova_senha);
}