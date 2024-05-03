function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is invalid";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Password is required";
  } else {
    errors.password = "";
  }

  return errors;
}

export default Validation;
