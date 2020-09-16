import { cleanObject, validateEmail } from '../../../utility/misc';

export function displayMessage  (message, type, timeout = 5000) {
  this.setState(
      {
        message: type != 'error' ? message : null,
        error: type == 'error' ? message : null,
      },
      () => {
        setTimeout(() => {
          this.setState({ message: null, error: null });
        }, timeout);
      }
    );
  };

  export function checkData  ()  {
    let error = null;
    let isUpdate = this.state.id ? true : false;
    const regString = /[a-zA-Z]/;
    const CamerRegexNumber = /^((\+|00)?237)?6[5-9][0-9]{7}$/;

    if (this.state.firstname.trim().length === 0) {
      error = "User's First Name is required!";
    } else if (this.state.lastname.trim().length === 0) {
      error = "User's Last Name is required!";
    } else if (this.state.username.trim().length === 0) {
      error = "User's Username is required!";
    } else if (!isUpdate && this.state.password.trim().length === 0) {
      error = "User's Password is required!";
    } else if (this.state.email.trim().length === 0) {
      error = "User's Email is required!";
    } else if (!validateEmail(this.state.email)) {
      error = 'Email is invalid!';
    } else if (!isUpdate && this.state.password !== this.state.cpassword) {
      error = 'Confirmation Password does not match';
      // le name first name et tout ne doivent pas contenir de chiffres etc...
    } else if (!regString.test(this.state.firstname)) {
      error = 'FirstName cannot contain a number';
    } else if (!regString.test(this.state.lastname)) {
      error = 'LastName cannot contain a number';
    } else if (!regString.test(this.state.username)) {
      error = 'Username cannot contain a number';
    } else if (
      regString.test(this.state.role_id) ||
      this.state.role_id === undefined
    ) {
      error = 'Provide a UserRole ';
    }
    return error;
  };