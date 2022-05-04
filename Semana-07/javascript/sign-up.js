// variables 
var nombre = document.getElementById("name");
var surname = document.getElementById("surname");
var dni = document.getElementById("dni");
var date = document.getElementById("date");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var locationsingup = document.getElementById("location");
var postal = document.getElementById("postal");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordRepeat = document.getElementById("passwordRepeat");
var btnCreate = document.getElementById("btn-create");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];
var passwordComparison;
// banderas
var nameValidateModal = true;
var surnameValidateModal = true;
var dniValidateModal = true;
var dateValidateModal = true;
var phoneValidateModal = true;
var addressValidateModal = true;
var locationValidateModal = true;
var postalValidateModal = true;
var emailValidateModal = true;
var passwordValidateModal = true;
var passwordRepeatValidateModal = true;
// msg errors
var textName = document.getElementById("msgName");
var textSurname = document.getElementById("msgSurname");
var textDni = document.getElementById("msgDni");
var textDate = document.getElementById("msgDate");
var textPhone = document.getElementById("msgPhone");
var textAddress = document.getElementById("msgAddress");
var textLocation = document.getElementById("msgLocation");
var textPostal = document.getElementById("msgPostal");
var textEmail = document.getElementById("msgEmail");
var textPassword = document.getElementById("msgPassword");
var TextRepeatPassword = document.getElementById("msgPasswordRepeat");
// array de mensajes con error
var errorMessages = [textName, textSurname, textDni, textDate, textPhone, textAddress, textLocation, textPostal, textEmail, textPassword, TextRepeatPassword];
var InputsName = ["Name: ", "Surname: ", "Dni: ", "Date: ", "Phone: ", "Address: ", "Location: ", "Postal: ", "Email: ", "Password: ", "Password Repeat: "];
// eventos
nombre.addEventListener("blur", nameBlur);
nombre.addEventListener("focus", nameFocus);
surname.addEventListener("blur", surnameBlur);
surname.addEventListener("focus", surnameFocus);
dni.addEventListener("blur", dniBlur);
dni.addEventListener("focus", dniFocus);
date.addEventListener("blur", dateBlur);
date.addEventListener("focus", dateFocus);
phone.addEventListener("blur", phoneBlur);
phone.addEventListener("focus", phoneFocus);
address.addEventListener("blur", addressBlur);
address.addEventListener("focus", addressFocus);
locationsingup.addEventListener("blur", locationBlur);
locationsingup.addEventListener("focus", locationFocus);
postal.addEventListener("blur", postalBlur);
postal.addEventListener("focus", postalFocus);
email.addEventListener("blur", emailBlur);
email.addEventListener("focus", emailFocus);
password.addEventListener("blur", passwordBlur);
password.addEventListener("focus", passwordFocus);
passwordRepeat.addEventListener("blur", passwordRepeatBlur);
passwordRepeat.addEventListener("blur", passwordRepeatFocus);
// funciones de eventos blur
function nameBlur(e) {
	var nameValue = e.target.value;
	if (nameValue == "") {
		nombre.classList.add("borderWarning");
		textName.textContent = "Obligatory field";
		nameValidateModal = false;
	} else {
		if (nameValue.length < 4) {
			nombre.classList.add("borderWarning");
			textName.textContent = "must have more than three characters";
			nameValidateModal = false;
		} else {
			var cont = false;
			for (var i = 0; i < nameValue.length; i++) {
				var letterName = nameValue.substring(i, i + 1);
				let ascii = letterName.charCodeAt();
				if (
					ascii < 65 ||
					(ascii > 90 && ascii < 97) ||
					(ascii > 122 && ascii != 32 && ascii != 209 && ascii != 241)
				) {
					cont = true;
				}
			}
			if (cont) {
				nombre.classList.add("borderWarning");
				textName.textContent = "Must contain only letters";
				nameValidateModal = false;
			} else {
				nombre.classList.remove("borderWarning");
				nombre.classList.add("borderSuccess");
				textName.textContent = "";
				nameValidateModal = true;
			}
		}
	}
}
function surnameBlur(e) {
	var surnameValue = e.target.value;
	if (surnameValue == "") {
		surname.classList.add("borderWarning");
		textSurname.textContent = "Obligatory field";
		surnameValidateModal = false;
	} else {
		if (surnameValue.length < 4) {
			surname.classList.add("borderWarning");
			textSurname.textContent = "must have more than three characters";
			surnameValidateModal = false;
		} else {
			var validateSurname = false;
			for (var i = 0; i < surnameValue.length; i++) {
				var letraSurname = surnameValue.substring(i, i + 1);
				var asciiSurname = letraSurname.charCodeAt();
				if (asciiSurname < 65 || (asciiSurname > 90 && asciiSurname < 97) ||
					(asciiSurname > 122 && asciiSurname != 32 && asciiSurname != 209 && asciiSurname != 241)) {
					validateSurname = true;
				}
			}
			if (validateSurname) {
				surname.classList.add("borderWarning");
				textSurname.textContent = "Must contain only letters";
				surnameValidateModal = false;
			} else {
				surname.classList.remove("borderWarning");
				surname.classList.add("borderSuccess");
				textSurname.textContent = "";
				surnameValidateModal = true;
			}
		}
	}
}
function dniBlur(e) {
	dniValue = e.target.value;
	if (dniValue == "") {
		dni.classList.add("borderWarning");
		textDni.textContent = "Obligatory field";
		dniValidateModal = false;
	} else {
		if (dniValue.length < 8) {
			dni.classList.add("borderWarning");
			textDni.textContent = "Enter more than seven numbers";
			dniValidateModal = false;
		} else {
			var validateDni = false;
			for (let i = 0; i < dniValue.length; i++) {
				var numDni = dniValue.substring(i, i + 1);
				var asciiDni = numDni.charCodeAt();
				if (numDni != Number(numDni) || asciiDni == 32) {
					validateDni = true;
				}
			}
			if (validateDni) {
				dni.classList.add("borderWarning");
				textDni.textContent = "enter only numbers";
				dniValidateModal = false;
			} else {
				dni.classList.remove("borderWarning");
				dni.classList.add("borderSuccess");
				textDni.textContent = "";
				dniValidateModal = true;
			}
		}
	}
}
function dateBlur(e) {
	var dateValue = e.target.value;
	if (dateValue == "") {
		date.classList.add("borderWarning");
		textDate.textContent = "Obligatory field";
		dateValidateModal = false;
	} else {
		var day = dateValue.substring(3, 5);
		var check1 = dateValue.substring(2, 3);
		var month = dateValue.substring(0, 2);
		var check2 = dateValue.substring(5, 6);
		var year = dateValue.substring(6);
		day = Number(day);
		month = Number(month);
		year = Number(year);
		if (day < 1 || day > 31) {
			date.classList.add("borderWarning");
			textDate.textContent = "Format mm/dd/yyyy";
			dateValidateModal = false;
		} else if (month < 1 || month > 12) {
			date.classList.add("borderWarning");
			textDate.textContent = "Format mm/dd/yyyy";
			dateValidateModal = false;
		} else if (year < 1900 || year > 2022 || year != Number(year)) {
			date.classList.add("borderWarning");
			textDate.textContent = "Format mm/dd/yyyy";
			dateValidateModal = false;
		} else if (check1 != "/" || check2 != "/") {
			date.classList.add("borderWarning");
			textDate.textContent = "Format mm/dd/yyyy";
			dateValidateModal = false;
		} else {
			date.classList.remove("borderWarning");
			date.classList.add("borderSuccess");
			textDate.textContent = "";
			dateValidateModal = true;
		}
	}
}
function phoneBlur(e) {
	var phoneValue = e.target.value;
	if (phoneValue == "") {
		phone.classList.add("borderWarning");
		textPhone.textContent = "Obligatory field";
		phoneValidateModal = false;
	} else {
		if (phoneValue.length == 10) {
			var validatePhone = false;
			for (var i = 0; i < phoneValue.length; i++) {
				var numberPhone = phoneValue.substring(i, i + 1);
				var asciiPhone = numberPhone.charCodeAt();
				if (numberPhone != Number(numberPhone) || asciiPhone == 32) {
					validatePhone = true;
				}
			}
			if (validatePhone) {
				phone.classList.add("borderWarning");
				textPhone.textContent = "Enter only numbers";
				phoneValidateModal = false;
			} else {
				phone.classList.remove("borderWarning");
				phone.classList.add("borderSuccess");
				textPhone.textContent = "";
				phoneValidateModal = true;
			}
		} else {
			phone.classList.add("borderWarning");
			textPhone.textContent = "Must contain 10 numbers";
			phoneValidateModal = false;
		}
	}
}
function addressBlur(e) {
	var addressValue = e.target.value;
	if (addressValue == "") {
		address.classList.add("borderWarning");
		textAddress.textContent = "Obligatory field";
		addressValidateModal = false;
	} else {
		if (addressValue.length < 5) {
			address.classList.add("borderWarning");
			textAddress.textContent = "Minimum five characters";
			addressValidateModal = false;
		} else {
			if (addressValue.indexOf(" ") === -1) {
				address.classList.add("borderWarning");
				textAddress.textContent = "Must contain a space";
				addressValidateModal = false;
			} else {
				var letterAddress = 0;
				var numberAddress = 0;
				var spacesAddress = 0;
				for (let i = 0; i < addressValue.length; i++) {
					letra = addressValue.substring(i, i + 1);
					let ascii = letra.charCodeAt();
					if (letra == Number(letra) && ascii != 32) {
						numberAddress += 1;
					} else if (!(ascii < 65 || (ascii > 90 && ascii < 97) || (ascii > 122 && ascii != 209 && ascii != 241))
					) {
						letterAddress += 1;
					} else if (ascii == 32) {
						spacesAddress += 1;
					}
				}
				if (letterAddress == 0 || numberAddress == 0) {
					address.classList.add("borderWarning");
					textAddress.textContent = "Must contain letters and numbers";
					addressValidateModal = false;
				} else if (letterAddress + numberAddress + spacesAddress == addressValue.length) {
					address.classList.remove("borderWarning");
					address.classList.add("borderSuccess");
					textAddress.textContent = "";
					addressValidateModal = true;
				} else {
					address.classList.add("borderWarning");
					textAddress.textContent = "Must not contain special characters";
					addressValidateModal = false;
				}
			}
		}
	}
}
function locationBlur(e) {
	var locationValue = e.target.value;
	if (locationValue == "") {
		locationsingup.classList.add("borderWarning");
		textLocation.textContent = "Obligatory field";
		locationValidateModal = false;
	} else {
		if (locationValue.length < 3) {
			locationsingup.classList.add("borderWarning");
			textLocation.textContent = "Minimum three characters";
			locationValidateModal = false;
		} else {
			var spacesLocation = 0;
			var lettersLocation = 0;
			var numberLocation = 0;
			for (let i = 0; i < locationValue.length; i++) {
				var letter = locationValue.substring(i, i + 1);
				var asciiLocation = letter.charCodeAt();
				if (asciiLocation === 32) {
					spacesLocation += 1;
				} else if (letter == Number(letter)) {
					numberLocation += 1;
				} else if (!(asciiLocation < 65 || (asciiLocation > 90 && asciiLocation < 97) ||
					(asciiLocation > 122 && asciiLocation != 209 && asciiLocation != 241))) {
					lettersLocation += 1;
				}
			}
			if (spacesLocation + numberLocation + lettersLocation != locationValue.length) {
				locationsingup.classList.add("borderWarning");
				textLocation.textContent = "Special characters not allowed";
				locationValidateModal = false;
			} else {
				locationsingup.classList.remove("borderWarning");
				locationsingup.classList.add("borderSuccess");
				textLocation.textContent = "";
				locationValidateModal = true;
			}
		}
	}
}
function postalBlur(e) {
	var postalValue = e.target.value;
	if (postalValue == "") {
		postal.classList.add("borderWarning");
		textPostal.textContent = "Obligatory field";
		postalValidateModal = false;
	} else {
		if (postalValue == Number(postalValue)) {
			if (postalValue.length == 4 || postalValue.length == 5) {
				postal.classList.remove("borderWarning");
				postal.classList.add("borderSuccess");
				textPostal.textContent = "";
				postalValidateModal = true;
			} else {
				postal.classList.add("borderWarning");
				textPostal.textContent = "Enter 4 or 5 numbers";
				postalValidateModal = false;
			}
		} else {
			postal.classList.add("borderWarning");
			textPostal.textContent = "Enter only numbers";
			postalValidateModal = false;
		}
	}
}
function emailBlur(e) {
	var emailValue = e.target.value;
	if (emailValue == "") {
		email.classList.add("borderWarning");
		textEmail.textContent = "Obligatory field";
		emailValidateModal = false;
	} else {
		var expReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		var respuestaExpReg = expReg.test(emailValue);
		if (respuestaExpReg) {
			email.classList.remove("borderWarning");
			email.classList.add("borderSuccess");
			textEmail.textContent = "";
			emailValidateModal = true;
		} else {
			email.classList.add("borderWarning");
			textEmail.textContent = "Invalid email";
			emailValidateModal = false;
		}
	}
}
function passwordBlur(e) {
	var passwordValue = e.target.value;
	if (passwordValue == "") {
		password.classList.add("borderWarning");
		textPassword.textContent = "Obligatory field";
		passwordValidateModal = false;
	} else {
		var letterPassword = 0;
		var numberPasdword = 0;
		if (passwordValue.length > 7) {
			for (let i = 0; i < passwordValue.length; i++) {
				var letterPass = passwordValue.substring(i, i + 1);
				let ascii = letterPass.charCodeAt();
				if (letterPass == Number(letterPass) && ascii != 32) {
					numberPasdword += 1;
				}
				if (!(ascii < 65 || (ascii > 90 && ascii < 97) || (ascii > 122 && ascii != 209 && ascii != 241))) {
					letterPassword += 1;
				}
			}
			if (letterPassword + numberPasdword === passwordValue.length) {
				password.classList.remove("borderWarning");
				password.classList.add("borderSuccess");
				textPassword.textContent = "";
				passwordValidateModal = true;
				passwordComparison = passwordValue;
			} else {
				password.classList.add("borderWarning");
				textPassword.textContent = "Cannot contain special characters";
				passwordValidateModal = false;
			}
		} else {
			password.classList.add("borderWarning");
			textPassword.textContent = "Enter at least 8 characters";
			passwordValidateModal = false;
		}
	}
}
function passwordRepeatBlur(e) {
	var passwordRepeatValue = e.target.value;
	if (passwordRepeatValue == "") {
		passwordRepeat.classList.add("borderWarning");
		TextRepeatPassword.textContent = "Obligatory field";
		passwordRepeatValidateModal = false;
	} else {
		var lettersPasswordRepeat = 0;
		var numberPasswordRepeat = 0;
		if (passwordRepeatValue.length > 7) {
			for (let i = 0; i < passwordRepeatValue.length; i++) {
				var letterPasswordRepeat = passwordRepeatValue.substring(i, i + 1);
				var asciiPR = letterPasswordRepeat.charCodeAt();
				if (letterPasswordRepeat == Number(letterPasswordRepeat) && asciiPR != 32) {
					numberPasswordRepeat += 1;
				}
				if (!(asciiPR < 65 || (asciiPR > 90 && asciiPR < 97) || (asciiPR > 122 && asciiPR != 209 && asciiPR != 241))) {
					lettersPasswordRepeat += 1;
				}
			}
			if (lettersPasswordRepeat + numberPasswordRepeat == passwordRepeatValue.length && passwordComparison === passwordRepeatValue) {
				passwordRepeat.classList.remove("borderWarning");
				passwordRepeat.classList.add("borderSuccess");
				TextRepeatPassword.textContent = "";
				passwordRepeatValidateModal = true;
			} else if (passwordComparison != passwordRepeatValue) {
				passwordRepeat.classList.add("borderWarning");
				TextRepeatPassword.textContent = "Passwords must match";
				passwordRepeatValidateModal = false;
			} else {
				passwordRepeat.classList.add("borderWarning");
				TextRepeatPassword.textContent = "Cannot contain special characters";
				passwordRepeatValidateModal = false;
			}
		} else {
			passwordRepeat.classList.add("borderWarning");
			TextRepeatPassword.textContent = "Enter at least 8 characters";
			passwordRepeatValidateModal = false;
		}
	}
}
// funciones eventos focus
function nameFocus() {
	textName.textContent = "";
}
function surnameFocus() {
	textSurname.textContent = "";
}
function dniFocus() {
	textDni.textContent = "";
}
function dateFocus() {
	textDate.textContent = "";
}
function phoneFocus() {
	textPhone.textContent = "";
}
function addressFocus() {
	textAddress.textContent = "";
}
function locationFocus() {
	textLocation.textContent = "";
}
function postalFocus() {
	textPostal.textContent = "";
}
function emailFocus() {
	textEmail.textContent = "";
}
function passwordFocus() {
	textPassword.textContent = "";
}
function passwordRepeatFocus() {
	TextRepeatPassword.textContent = "";
}
btn.onclick = function (e) {
	e.preventDefault();
	var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";
	url = url + "?name=" + nombre.value + "&lastName=" + surname.value + "&dni=" + dni.value + "&dob=" +
		date.value + "&phone=" + phone.value + "&address=" + address.value + "&city=" + locationsingup.value
		+ "&zip=" + postal.value + "&email=" + email.value + "&password=" + password.value;
	if (
		nameValidateModal &&
		surnameValidateModal &&
		dniValidateModal &&
		dateValidateModal &&
		phoneValidateModal &&
		addressValidateModal &&
		locationValidateModal &&
		postalValidateModal &&
		emailValidateModal &&
		passwordValidateModal &&
		passwordRepeatValidateModal
	) {
		fetch(url)
			.then(function (response) {
				return response.json()
			})
			.then(function (jsonResponse) {
				modal.style.display = "block";
				var print = document.getElementById("create-employy");
				print.innerHTML = "<h3>" + jsonResponse.msg + "</h3><p>Name: " + jsonResponse.data.name + "</p><p>LastName: " + jsonResponse.data.lastName + "</p><p>Dni: " + jsonResponse.data.dni + "</p><p>Date: " + jsonResponse.data.dob + "</p><p>Phone: " + jsonResponse.data.phone + "</p><p>Address: " + jsonResponse.data.address + "</p><p>Location: " + jsonResponse.data.city + "</p><p>Postal: " + jsonResponse.data.zip + "</p><p>Email: " + jsonResponse.data.email + "</p><p>Password: " + jsonResponse.data.password;
				var user = {
					nameUser: jsonResponse.data.name,
					lastName: jsonResponse.data.lastName,
					dni: jsonResponse.data.dni,
					date: jsonResponse.data.dob,
					phone: jsonResponse.data.phone,
					address: jsonResponse.data.address,
					location: jsonResponse.data.city,
					postal: jsonResponse.data.zip,
					email: jsonResponse.data.email,
					password: jsonResponse.data.password,
				}
				var userJson = JSON.stringify(user);
				localStorage.setItem("user", userJson);
			})
			.catch(function (error) {
				console.log("error");
			})
	} else {
		modal.style.display = "block";
		var print = document.getElementById("create-employy");
		print.textContent = "";
		var flags = [nameValidateModal, surnameValidateModal, dniValidateModal, dateValidateModal, phoneValidateModal, addressValidateModal, locationValidateModal, postalValidateModal, emailValidateModal, passwordValidateModal, passwordRepeatValidateModal];
		for (let i = 0; i < flags.length; i++) {
			if (!(flags[i])) {
				var text = document.createElement("p");
				text.innerText = InputsName[i] + errorMessages[i].textContent;
				print.append(text);
			}
		}
	}
}
span.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
// si LS esta vacio no completa, si tiene algo lo completa
function Validatedata() {
	if (!(localStorage.getItem("user") === null)) {
		var userprint = JSON.parse(localStorage.getItem("user"));
		nombre.value = userprint.nameUser;
		surname.value = userprint.lastName;
		dni.value = userprint.dni;
		date.value = userprint.date;
		phone.value = userprint.phone;
		address.value = userprint.address;
		locationsingup.value = userprint.location;
		postal.value = userprint.postal;
		email.value = userprint.email;
		password.value = userprint.password;
		passwordRepeat.value = userprint.password;
	} else {
		nameValidateModal = true;
		surnameValidateModal = true;
		dniValidateModal = true;
		dateValidateModal = true;
		phoneValidateModal = true;
		addressValidateModal = true;
		locationValidateModal = true;
		postalValidateModal = true;
		emailValidateModal = true;
		passwordValidateModal = true;
		passwordRepeatValidateModal = true;
	}
}
Validatedata();