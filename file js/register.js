document.getElementById("registrationForm").addEventListener("submit", function (event) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var formIsValid = true;

    if (firstName.trim() === "") {
      document.getElementById("firstNameError").innerText = "Nama depan tidak boleh kosong.";
      document.getElementById("firstNameError").style.display = "block";
      formIsValid = false;
    } else {
      document.getElementById("firstNameError").style.display = "none";
    }

    if (lastName.trim() === "") {
      document.getElementById("lastNameError").innerText = "Nama belakang tidak boleh kosong.";
      document.getElementById("lastNameError").style.display = "block";
      formIsValid = false;
    } else {
      document.getElementById("lastNameError").style.display = "none";
    }

    if (!isValidEmail(email)) {
      document.getElementById("emailError").innerText = "Format email tidak valid.";
      document.getElementById("emailError").style.display = "block";
      formIsValid = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }

    if (!isValidPhoneNumber(phone)) {
      document.getElementById("phoneError").innerText = "Nomor telepon harus berupa angka.";
      document.getElementById("phoneError").style.display = "block";
      formIsValid = false;
    } else {
      document.getElementById("phoneError").style.display = "none";
    }

    if (!isValidPassword(password)) {
      document.getElementById("passwordError").innerText = "Kata sandi harus minimal 6 karakter.";
      document.getElementById("passwordError").style.display = "block";
      formIsValid = false;
    } else {
      document.getElementById("passwordError").style.display = "none";
    }

    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText = "Konfirmasi kata sandi tidak cocok.";
      document.getElementById("confirmPasswordError").style.display = "block";
      formIsValid = false;
    } else {
      document.getElementById("confirmPasswordError").style.display = "none";
    }

    if (!formIsValid) {
      event.preventDefault();
    }

    if (isValidName(firstName) && isValidName(lastName) && isValidEmail(email) && isValidPhoneNumber(phone) && isValidPassword(password) && password === confirmPassword) {
      alert("Registrasi berhasil!");
    }
  });

  function isValidName(name) {
    for (let i = 0; i < name.length; i++) {
      let char = name.charAt(i);
      if (!((char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || char === " ")) {
        return false;
      }
    }
    return true;
  }

  function isValidEmail(email) {
    if (email.indexOf("@") > -1 && email.indexOf(".") > -1) {
      let parts = email.split("@");
      if (parts.length === 2 && parts[0].length > 0 && parts[1].length > 0) {
        let domainParts = parts[1].split(".");
        if (domainParts.length >= 2 && domainParts[0].length > 0 && domainParts[1].length > 0) {
          return true;
        }
      }
    }
    return false;
  }

  function isValidPhoneNumber(phone) {
    for (let i = 0; i < phone.length; i++) {
      let char = phone.charAt(i);
      if (char < "0" || char > "9") {
        return false;
      }
    }
    return true;
  }

  function isValidPassword(password) {
    return password.length >= 6;
  }