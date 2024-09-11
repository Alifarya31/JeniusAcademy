// Improved code with suggestions

const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNameInput = document.getElementById("first-name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const phoneNumberInput = document.getElementById("phone-number");
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("password-confirm");

  // Form component validation
  const isValidForm = validateForm({
    firstName: firstNameInput.value,
    surname: surnameInput.value,
    email: emailInput.value,
    phoneNumber: phoneNumberInput.value,
    password: passwordInput.value,
    passwordConfirm: passwordConfirmInput.value,
  });

  if (!isValidForm) {
    alert("Please fill in all required fields and meet the validation criteria.");
    return;
  }

  // If form is valid, proceed with submission
  // ...
});

// Extracted validation function
function validateForm(data) {
  const validationRules = {
    firstName: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    surname: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      required: true,
      isValidEmail: true,
    },
    phoneNumber: {
      required: true,
      isValidPhoneNumber: true,
    },
    password: {
      required: true,
      minLength: 8,
      maxLength: 50,
    },
    passwordConfirm: {
      required: true,
      isPasswordConfirmationValid: true,
    },
  };

  const errors = {};

  for (const field in validationRules) {
    const ruleSet = validationRules[field];
    const value = data[field];

    if (ruleSet.required && !value) {
      errors[field] = `${field} is required`;
      continue;
    }

    if (value && typeof value === "string") {
      if (ruleSet.minLength && value.length < ruleSet.minLength) {
        errors[field] = `${field} must be at least ${ruleSet.minLength} characters long`;
      }

      if (ruleSet.maxLength && value.length > ruleSet.maxLength) {
        errors[field] = `${field} must be at most ${ruleSet.maxLength} characters long`;
      }

      if (ruleSet.isValidEmail && !isValidEmail(value)) {
        errors[field] = `${field} is not a valid email address`;
      }

      if (ruleSet.isValidPhoneNumber && !isValidPhoneNumber(value)) {
        errors[field] = `${field} is not a valid phone number`;
      }

      if (ruleSet.isPasswordConfirmationValid && !isPasswordConfirmationValid(value, data.password)) {
        errors[field] = `${field} does not match the password`;
      }
    }
  }

  return Object.keys(errors).length === 0;
}

// Helper functions for validation
function isValidEmail(email) {
  const emailInput = document.getElementById("email");
  const emailDomain = email.split("@")[1];

  // Basic email validation, you can improve it if needed
  return email.includes("@") && emailDomain.includes(".");
}

function isValidPhoneNumber(phoneNumber) {
  const phoneNumberInput = document.getElementById("phone-number");

  // Basic phone number validation, you can improve it if needed
  return phoneNumber.length > 9 && phoneNumber.match(/\d/g).length === phoneNumber.length;
}

function isPasswordConfirmationValid(passwordConfirm, password) {
  return passwordConfirm === password;
}