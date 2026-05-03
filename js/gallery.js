// Lightbox untuk halaman Galeri

document.addEventListener('DOMContentLoaded', function () {

    var overlay = document.getElementById('lightbox');
    var lbImg = document.getElementById('lb-img');
    var lbCaption = document.getElementById('lb-caption');
    var lbClose = document.getElementById('lb-close');

    if (!overlay) return;

    /* Open */
    document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            lbImg.src = trigger.dataset.lightbox;
            lbImg.alt = trigger.dataset.caption || '';
            lbCaption.textContent = trigger.dataset.caption || '';
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    /* Close helpers */
    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        lbImg.src = '';
    }

    lbClose.addEventListener('click', closeLightbox);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });
});
