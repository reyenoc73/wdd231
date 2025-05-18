

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("#course-list input[type='checkbox']");
    const totalCreditsDisplay = document.getElementById("total-credits");

    function calculateTotalCredits() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
            }
        });
        totalCreditsDisplay.textContent = total;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", calculateTotalCredits);
    });
});

