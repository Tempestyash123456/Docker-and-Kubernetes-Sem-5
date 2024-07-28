document
  .getElementById("my-form")
  .addEventListener("input", function (event) {
    const target = event.target;
    const id = target.id;
    const value = target.value.trim();

    // Clear previous error message
    const errorElement = document.getElementById(`${id}-error`);
    errorElement.textContent = "";

    // First Name validation: no numbers or special characters allowed
    if (id === "first-name" && !/^[a-zA-Z]+$/.test(value)) {
      errorElement.textContent = "First name must contain only alphabetic characters.";
    }

    // Last Name validation: no numbers or special characters allowed
    if (id === "last-name" && !/^[a-zA-Z]+$/.test(value)) {
      errorElement.textContent = "Last name must contain only alphabetic characters.";
    }

    // Email validation: email should be in the format of name@domain.com
    if (id === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(value)) {
        errorElement.textContent = "Please enter a valid email address.";
      }
    }

    // Mobile Number validation: mobile number should be 10 digits long
    if (id === "mobile-number") {
      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(value)) {
        errorElement.textContent = "Mobile number must be 10 digits long.";
      }
    }

    // Password validation: password should start with a letter and contain at least one number, one upper case, one lower case letter and one special character (special characters only _,-,@,.)
    if (id === "password") {
      const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[_@.-])([a-zA-Z0-9_@.-]){8,}$/;
      if (!passwordPattern.test(value)) {
        errorElement.textContent = "Password should start with a letter and contain at least one number, one upper case, one lower case letter and one special character.";
      }
    }

    // Date of Birth validation
    if (id === "dob" && !value) {
      errorElement.textContent = "Please enter your date of birth.";
    }
  });

document
  .getElementById("my-form")
  .addEventListener("submit", function (event) {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(function (errorElement) {
      errorElement.textContent = "";
    });

    // First Name validation: no numbers or special characters allowed
    const firstName = document.getElementById("first-name");
    if (firstName.value.trim().length < 4) {
      document.getElementById("first-name-error").textContent =
        "First name must be at least 4 characters long.";
      isValid = false;
    }

    // Last Name validation: no numbers or special characters allowed
    const lastName = document.getElementById("last-name");
    if (lastName.value.trim().length < 6) {
      document.getElementById("last-name-error").textContent =
        "Last name must be at least 6 characters long.";
      isValid = false;
    }

    // Email validation: email should be in the format of name@domain.com
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("email-error").textContent =
        "Please enter a valid email address.";
      isValid = false;
    }

    // Mobile Number validation: mobile number should be 10 digits long
    const mobileNumber = document.getElementById("mobile-number");
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNumber.value)) {
      document.getElementById("mobile-number-error").textContent =
        "Mobile number must be 10 digits long.";
      isValid = false;
    }

    // Password validation: password should start with a letter and contain at least one number, one upper case, one lower case letter and one special character (special characters only _,-,@,.)
    const password = document.getElementById("password");
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[_@.-])([a-zA-Z0-9_@.-]){8,}$/;
    if (!passwordPattern.test(password.value)) {
      document.getElementById("password-error").textContent =
        "Password should start with a letter and contain at least one number, one upper case, one lower case letter and one special character.";
      isValid = false;
    }

    // Date of Birth validation
    const dob = document.getElementById("dob");
    if (!dob.value) {
      document.getElementById("dob-error").textContent =
        "Please enter your date of birth.";
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
