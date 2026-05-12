function submitForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
}

document.querySelectorAll('.error').forEach(el => el.innerText = '');



























if(!\ ^[a-zA-Z\s]+$/.test(name) {
    document.getElementById('nameError').innerText = 'Name should contain only letters and spaces.';
    return false;
}
if(!\ ^\d{10}$/.test(phone) {
    document.getElementById('phoneError').innerText = 'Phone number should be 10 digits.';
    return false;
}
if(!\ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    document.getElementById('emailError').innerText = 'Please enter a valid email address.';
    return false;
}
if(!\ ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
    document.getElementById('passwordError').innerText = 'Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    return false;
}
alert('Form submitted successfully!');
return true;





















