let idEmail = document.querySelector('#email');
let idPhone = document.querySelector('#phone');
let btnSave = document.querySelector('#btnSave');
let emailCheck = document.querySelector('#emailCheck');
let phoneCheck = document.querySelector('#phoneCheck');

btnSave?.addEventListener('click', function() {
    if (!idEmail.value.includes('@') && idPhone.value == "") {
        idEmail.classList.add('is-invalid');
        emailCheck.style.display = 'block';
        idPhone.classList.add('is-invalid');
        phoneCheck.style.display = 'block';
    }else if (!idEmail.value.includes('@')) {
        idEmail.classList.add('is-invalid');
        emailCheck.style.display = 'block';
        idPhone.classList.remove('is-invalid');
        phoneCheck.style.display = 'none';
    }else if (idPhone.value == "") {
        idPhone.classList.add('is-invalid');
        phoneCheck.style.display = 'block';
        idEmail.classList.remove('is-invalid');
        emailCheck.style.display = 'none';
    }
});