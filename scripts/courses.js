
    function filterCourses(category) {
      const buttons = document.querySelectorAll('.course');
      buttons.forEach(button => {
        if (category === 'all') {
          button.style.display = 'inline-block';
        } else {
          button.style.display = button.classList.contains(category) ? 'inline-block' : 'none';
        }
      });
    }

    