let fullname = document.getElementById('fname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('password_2')
let phoneNum = document.getElementById('phoneNum')
// let checker = document.getElementById('checker')
let table = document.getElementById('table')
let data = []
let loading = false
let signupbtn = document.getElementById("signup")




function saveData(){
    if(fullname.value == '' || email.value == '' || password.value == '' || confirmPassword.value == ''){
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
        loading = true;
        loading? signupbtn.innerHTML =`Please wait ...`:"Sign up";
        let userDataObj = {
            name: fname.value,
            email: email.value,
            password: password.value,
            // terms: checker.checked
        }

        data.push(userDataObj)
        console.log(data);

        localStorage.setItem("info", JSON.stringify(data))
        
        alert('Login Successful')

        fullname.value = '',
        email.value = '';
        phoneNum.value = '';
        password.value = '',
        confirmPassword.value  = '';
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