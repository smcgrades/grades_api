// Function to extract department and number from the course string
function extractDetails(course) {
  const match = course.match(/(\D+)\s(\d+)/);
  return match ? { department: match[1].trim(), number: parseInt(match[2]) } : null;
}

export default function return_courses(courses) {
  courses = [...new Set(courses.map((course) => course.Course))];

  courses.sort((a, b) => {
    const detailsA = extractDetails(a);
    const detailsB = extractDetails(b);

    console.log("detailsA", detailsA);
    console.log("detailsB", detailsB);
  
    if (detailsA.department === detailsB.department) {
      // Sort such that n is followed immediately by n+1
      if (detailsA.number + 1 === detailsB.number) {
        return -1; // a should come before b
      } else if (detailsA.number === detailsB.number + 1) {
        return 1; // b should come before a
      }
      return detailsA.number - detailsB.number;
    }
    // Alphabetical sort for different departments
    return detailsA.department.localeCompare(detailsB.department);
  });

  return courses;
}
