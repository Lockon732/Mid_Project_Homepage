// Read more / collapse artikel

window.addEventListener('load', function () {

    document.querySelectorAll('.article-body').forEach(function (body) {
        var btn = body.nextElementSibling;
        if (!btn || !btn.classList.contains('btn-read')) return;

        // Cek tinggi penuh (setelah gambar loading)
        var fullHeight = body.scrollHeight;

        if (fullHeight > 260) {
            body.style.maxHeight = '220px';
            body.style.overflow = 'hidden';
            body.style.transition = 'max-height 0.45s ease';
            body.classList.add('collapsed');
            btn.style.display = 'inline-flex';
        } else {
            btn.style.display = 'none';
        }

        btn.addEventListener('click', function () {
            var collapsed = body.classList.contains('collapsed');
            if (collapsed) {
                // Kalkulasi ulang scrollHeight saat dibuka untuk menghindari terpotong
                body.style.maxHeight = body.scrollHeight + 'px';
                body.classList.remove('collapsed');
                btn.textContent = 'Tutup artikel';
            } else {
                body.style.maxHeight = '220px';
                body.classList.add('collapsed');
                btn.textContent = 'Baca selengkapnya';
            }
        });
    });

});
