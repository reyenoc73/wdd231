// Función para calcular el total de créditos
function calculateTotalCredits(coursesDisplayed) {
    return coursesDisplayed.reduce((sum, course) => sum + course.credits, 0);
}

function calculateTotalCredits(coursesDisplayed) {
    return coursesDisplayed.reduce((total, course) => total + course.credits, 0);
}

function updateTotalCredits(coursesDisplayed) {
    const totalCredits = calculateTotalCredits(coursesDisplayed);
    document.getElementById("credit-count").textContent = `Total Credits: ${totalCredits}`;
}

function displayCourses(filter = "all") {
    const container = document.getElementById("courses-container");
    container.innerHTML = "";

    let filteredCourses = courses;
    if (filter === "WDD") {
        filteredCourses = courses.filter(course => course.subject === "WDD");
    } else if (filter === "CSE") {
        filteredCourses = courses.filter(course => course.subject === "CSE");
    }

    filteredCourses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-card");
        if (course.completed) {
            courseItem.classList.add("completed");
        }
        courseItem.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>`;
        container.appendChild(courseItem);
    });

    updateTotalCredits(filteredCourses);
}

// Display all courses when the page loads
document.addEventListener("DOMContentLoaded", () => displayCourses());
updateTotalCredits(courses); // Ensure credits update immediately

