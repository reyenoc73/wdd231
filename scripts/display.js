
function displayCourses(filter = "all") {
    const container = document.getElementById("courses-container");
    container.innerHTML = "";

    let filteredCourses;
    if (filter === "WDD") {
        filteredCourses = courses.filter(course => course.subject === "WDD");
    } else if (filter === "CSE") {
        filteredCourses = courses.filter(course => course.subject === "CSE");
    } else {
        filteredCourses = courses; // Show all courses
    }

    filteredCourses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-card");

        // Apply the "completed" class if the course is marked as completed
        if (course.completed) {
            courseItem.classList.add("completed");
        }

        // Display a checkmark if completed, otherwise show ❌
        const completionStatus = course.completed ? "✅ Completed" : "❌ Not Completed";

        courseItem.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p>${completionStatus}</p>`;
        
        container.appendChild(courseItem);
    });

    // Update the total credits dynamically
    updateTotalCredits(filteredCourses);
}
