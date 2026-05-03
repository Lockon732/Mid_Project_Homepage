// Form validation + toast

document.addEventListener('DOMContentLoaded', function () {

    var form = document.getElementById('contact-form');
    var toast = document.getElementById('toast');

    if (!form) return;

    // Real-time validation helpers
    function setValid(input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        var err = document.getElementById(input.id + '-err');
        if (err) err.hidden = true;
    }

    function setInvalid(input, msg) {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        var err = document.getElementById(input.id + '-err');
        if (err) { err.textContent = msg; err.hidden = false; }
    }

    function clearState(input) {
        input.classList.remove('is-valid', 'is-invalid');
        var err = document.getElementById(input.id + '-err');
        if (err) err.hidden = true;
    }

    function validateEmail(val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }

    // Per-field live validation
    var namaInput = document.getElementById('nama');
    var emailInput = document.getElementById('email');
    var pesanInput = document.getElementById('pesan');

    if (namaInput) {
        namaInput.addEventListener('blur', function () {
            namaInput.value.trim().length > 0
                ? setValid(namaInput)
                : setInvalid(namaInput, 'Nama wajib diisi.');
        });
        namaInput.addEventListener('input', function () {
            if (namaInput.classList.contains('is-invalid')) {
                namaInput.value.trim().length > 0 ? setValid(namaInput) : null;
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', function () {
            validateEmail(emailInput.value.trim())
                ? setValid(emailInput)
                : setInvalid(emailInput, 'Masukkan email yang valid.');
        });
        emailInput.addEventListener('input', function () {
            if (emailInput.classList.contains('is-invalid')) {
                if (validateEmail(emailInput.value.trim())) setValid(emailInput);
            }
        });
    }

    if (pesanInput) {
        pesanInput.addEventListener('blur', function () {
            pesanInput.value.trim().length >= 10
                ? setValid(pesanInput)
                : setInvalid(pesanInput, 'Pesan minimal 10 karakter.');
        });
        pesanInput.addEventListener('input', function () {
            if (pesanInput.classList.contains('is-invalid')) {
                if (pesanInput.value.trim().length >= 10) setValid(pesanInput);
            }
        });
    }

    // Submit handling
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var ok = true;

        if (!namaInput.value.trim()) {
            setInvalid(namaInput, 'Nama wajib diisi.');
            ok = false;
        } else { setValid(namaInput); }

        if (!validateEmail(emailInput.value.trim())) {
            setInvalid(emailInput, 'Masukkan email yang valid.');
            ok = false;
        } else { setValid(emailInput); }

        if (pesanInput.value.trim().length < 10) {
            setInvalid(pesanInput, 'Pesan minimal 10 karakter.');
            ok = false;
        } else { setValid(pesanInput); }

        if (!ok) return;

        /* Sukses */
        showToast('Pesan berhasil dikirim!');
        form.reset();
        [namaInput, emailInput, pesanInput].forEach(clearState);
    });

    // Toast notification
    function showToast(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('visible');
        setTimeout(function () { toast.classList.remove('visible'); }, 3200);
    }

});
