var emailLogin = document.getElementById("email-login");
var passwordLogin = document.getElementById("password-login");
var btnAcept = document.getElementsByClassName("btn-login");
var modalOk = document.getElementById("myModal-Ok");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var validateEmailLogin = false;
var validatePasswordLogin = false;
emailLogin.addEventListener("focus", emailFocus);
emailLogin.addEventListener("blur", emailBlur);
passwordLogin.addEventListener("focus", passwordFocus);
passwordLogin.addEventListener("blur", passwordBlur);
function emailFocus() {
  p = document.getElementById("email-error-login");
  p.classList.replace("active", "hidden");
  p2 = document.getElementById("emailError-login");
  p2.classList.replace("active", "hidden");
}
function emailBlur(e) {
  var emailValueLogin = e.target.value;
  if (emailValueLogin == "") {
    validateEmailLogin = false;
    var p = document.getElementById("email-error-login");
    p.classList.replace("hidden", "active");
    emailLogin.classList.add("borderWarning");
  } else {
    var p = document.getElementById("email-error-login");
    p.classList.replace("active", "hidden");
    var expReg =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var respuestaExpReg = expReg.test(emailValueLogin);
    if (respuestaExpReg) {
      p = document.getElementById("emailError-login");
      p.classList.replace("active", "hidden");
      emailLogin.classList.remove("borderWarning");
      emailLogin.classList.add("borderSuccess");
      validateEmailLogin = true;
    } else {
      var p = document.getElementById("emailError-login");
      p.classList.replace("hidden", "active");
      emailLogin.classList.add("borderWarning");
      validateEmailLogin = false;
    }
  }
}
function passwordFocus() {
  p = document.getElementById("password-error-login");
  p2 = document.getElementById("passwordErrorLength-login");
  p3 = document.getElementById("passwordErrorCaracter-login");
  p.classList.replace("active", "hidden");
  p2.classList.replace("active", "hidden");
  p3.classList.replace("active", "hidden");
}
function passwordBlur(e) {
  var passwordValue = e.target.value;
  if (passwordValue == "") {
    validatePasswordLogin = false;
    var p = document.getElementById("password-error-login");
    p.classList.replace("hidden", "active");
    passwordLogin.classList.add("borderWarning");
  } else {
    var p = document.getElementById("password-error-login");
    p.classList.replace("active", "hidden");
    var letterPassword = 0;
    var numberPasdword = 0;
    if (passwordValue.length > 7) {
      p = document.getElementById("passwordErrorLength-login");
      p.classList.replace("active", "hidden");
      for (let i = 0; i < passwordValue.length; i++) {
        var letterPass = passwordValue.substring(i, i + 1);
        let ascii = letterPass.charCodeAt();
        if (letterPass == Number(letterPass) && ascii != 32) {
          numberPasdword += 1;
        }
        if (
          !(
            ascii < 65 ||
            (ascii > 90 && ascii < 97) ||
            (ascii > 122 && ascii != 209 && ascii != 241)
          )
        ) {
          letterPassword += 1;
        }
      }
      if (letterPassword + numberPasdword === passwordValue.length) {
        p = document.getElementById("passwordErrorCaracter-login");
        p.classList.replace("active", "hidden");
        passwordLogin.classList.remove("borderWarning");
        passwordLogin.classList.add("borderSuccess");
        validatePasswordLogin = true;
        // return checkedPW = password.value;
      } else {
        p = document.getElementById("passwordErrorCaracter-login");
        p.classList.replace("hidden", "active");
        passwordLogin.classList.add("borderWarning");
        validatePasswordLogin = false;
      }
    } else {
      var p = document.getElementById("passwordErrorLength-login");
      p.classList.replace("hidden", "active");
      passwordLogin.classList.add("borderWarning");
      validatePasswordLogin = false;
    }
  }
}
btn.onclick = function (e) {
  var url = "https://basp-m2022-api-rest-server.herokuapp.com/login";
  url = url + "?email=" + emailLogin.value + "&password=" + passwordLogin.value;
  e.preventDefault();
  if (!validateEmailLogin || !validatePasswordLogin) {
    modalOk.style.display = "block";
    var text = document.getElementById("p-login");
    text.innerHTML = "<h3>Error</h3>" + "<h3>Email invalid</h3>";
    fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (jsonResponse) {
      console.log(jsonResponse.errors[0].msg);
      // modal.style.display = "block";
      // console.log(jsonResponse.name);
      // jsonResponse.msg
      // var employyCreate = {
      //   name = data.name
      //   surname = data.surname
      // }
      // localStorage.setItem("user", employyCreate);

    })

  } else {
    
    // var text = document.getElementById("p-login");
    // text.innerHTML = "<h3>Error</h3>" + "<h3>Email invalid</h3>";
    fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (jsonResponse) {
      console.log(jsonResponse.msg);
      // modal.style.display = "block";
      // console.log(jsonResponse.name);
      // jsonResponse.msg
      // var employyCreate = {
      //   name = data.name
      //   surname = data.surname
      // }
      // localStorage.setItem("user", employyCreate);

    })


    


    // modalOk.style.display = "block";
    // var text = document.getElementById("p-login");
    // text.innerHTML =
    //   "<h3>Congratulations</h3>" + "<h3>log in successfully</h3>";
  }
};
span.onclick = function () {
  modalOk.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalOk) {
    modalOk.style.display = "none";
  }
};