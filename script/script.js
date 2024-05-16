
var x = document.getElementById("log");
var y = document.getElementById("reg");
var z = document.getElementById("btn");

function regsister(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}


const form = document.getElementById("reg");
const name = document.getElementById("name");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit',e =>{
    e.preventDefault();
    check_input();
});

function check_input(){
    const nameValue = name.value.trim();
    const usernameValue =username.value.trim();
    const emailValue = email.value.trim();
    const passwordnameValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue ===''){
        setError(username,'Username can not be blank');
    }

}