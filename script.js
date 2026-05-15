// 你可以自己改这里的密码
const PASSWORD = "LAIN032104";

function login(){
    let pwd = document.getElementById("pwd").value;
    if(pwd === PASSWORD){
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("admin").style.display = "block";
    }else{
        alert("密码错误！");
    }
}

function logout(){
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("admin").style.display = "none";
    document.getElementById("pwd").value = "";
}
