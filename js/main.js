var userEmail = document.getElementById("userEmail")
var userPass = document.getElementById("userPass")
var alertFind = document.getElementById("notion")
var alertpass = document.getElementById("notpass")
var alertName = document.getElementById("notname")
var takeName = document.getElementById("takeName")
var takeEmail = document.getElementById("takeEmail")
var takePass = document.getElementById("takePass")
var congorat = document.getElementById("cong")
// function getdata(){
//     localStorage.setItem("email",userEmail.value)
// }
function removalera(){
    var valid = userEmail.value
    var eqtion = /^[A-Z]|[a-z]@/
    if(eqtion.test(valid)){
        alertFind.classList.add("d-none")
    }
}
function removalerapass(){
    var valids = userPass.value
    var eqtionpass = /^[A-Z][a-z][1-9]/
    if(eqtionpass.test(valids)){
        alertpass.classList.add("d-none")
    }
}
function removalertNameTake(){
    var valid = takeName.value
    var eqtion = /^[A-Z]|[a-z]/
    if(eqtion.test(valid)){
        alertName.classList.add("d-none")
    }
}
function removaleraTake(){
    var valid = takeEmail.value
    var eqtion = /^[A-Z]|[a-z]@/
    if(eqtion.test(valid)){
        alertFind.classList.add("d-none")
    }
}
function removalerapassTake(){
    var valids = takePass.value
    var eqtionpass = /^[A-Z][a-z][1-9]/
    if(eqtionpass.test(valids)){
        alertpass.classList.add("d-none")
    }
}
function adduser(){
    var valid = takeEmail.value
    var eqtion = /^[A-Z]|[a-z]@/
    if(eqtion.test(valid)){
        localStorage.setItem("email",takeEmail.value)
        localStorage.setItem("pass",takePass.value)
        localStorage.setItem("name",takeName.value)
        congorat.classList.remove("d-none")
    }
}
function comper(){
    var getdata = localStorage.getItem("email")
    var getpass = localStorage.getItem("pass")
    if(getdata==userEmail.value&&getpass==userPass.value){
        var go = document.getElementById("tran")
        go. href ="file:///E:/login/home.html"
        

    }
}

function nikename(){
    var nameusr = localStorage.getItem("name")
    var cartona = `<p> ${"welcom    "   +   nameusr}</p>`
    document.getElementById("nikename").innerHTML=cartona
    console.log(nameusr)
}