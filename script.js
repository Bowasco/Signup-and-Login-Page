// let fullname = document.getElementById('fname')
// let email = document.getElementById('email')
// let password = document.getElementById('password')
// let confirmPassword = document.getElementById('password_2')
// let phoneNum = document.getElementById('phoneNum')
// // let checker = document.getElementById('checker')
// let table = document.getElementById('table')
// let data = []
// let loading = false
// let signupbtn = document.getElementById("signup")




function saveData(ev){
    ev.preventDefault();
    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPassword = document.getElementById('password_2')
    let phoneNum = document.getElementById('phoneNum')
    // let checker = document.getElementById('checker')
    let table = document.getElementById('table')
    let data = JSON.parse(localStorage.getItem("info")) || []
    let loading = false
    let signupbtn = document.getElementById("signup")



    if(username.value == '' || email.value == '' || password.value == '' || confirmPassword.value == ''){
        alert ('All field are mandatory')
    }else if(password.value !== confirmPassword.value){
        alert('Password does not match')
    }else if(password.value.length < 8 && confirmPassword.value.length < 8){
        alert('Password too short')
    }
    // else if(checker.checked !== true){
    //     alert('Please agree to terms and conditions')
    // }
    else{
        // loading = true;
        // loading? signupbtn.innerHTML =`Please wait ...`:"Sign up";

        let userDataObj = {
            username: username.value,
            email: email.value,
            password: password.value,
            // terms: checker.checked
        }
        data.push(userDataObj)
        localStorage.setItem("info", JSON.stringify(data))

        username.value = '',
        email.value = '';
        phoneNum.value = '';
        password.value = '',
        confirmPassword.value  = '';
        alert('Signup Successful')
    }

        // const existuser = data.find(user => user.email == email.value);
        // console.log(existuser);

        // if (existuser) {
        //     alert("E-mail already exist")
        // } else {
        //     data.push(userDataObj)
        //     localStorage.setItem("userdetails", JSON.stringify(data))
        //     alert("Signup successful.")
        //     console.log(data);
        // }
}



function authenticate() {
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "login.html";
  }

































// showandhide.innerHTML = 'Show'
// function showPass(){
//     password.type == 'password' ? password.type = 'text' : password.type = 'password'
//     showandhide.innerHTML == 'Show' ? showandhide.innerHTML = 'Hide' : showandhide.innerHTML = 'Show'
// }

// let displayTable = () => {
//     table.innerHTML = ''

//     data.forEach((data, index) =>{
//         table.innerHTML += `<tr> <td>${data.fullname} </td> <td>${data.email} <td>${data.password}  <td>${data.terms} </td></tr>`
//     })
// }