
    document.querySelectorAll('.open-modal').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('href');
        document.querySelector(modalId).style.display = 'block';
      });
    });

    document.querySelectorAll('.close').forEach(btn => {
      btn.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
      });
    });

    window.onclick = function (event) {
      document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    };
  