// Start by creating a variables `numberOfStudents` and `numberOfMentors`

function classeroom(numberOfStudents, numberOfMentors) {

    var studentStr = ("Number of students: " + numberOfStudents + '\n');
    var mentorsStr = ("Number of mentors: " + numberOfMentors + '\n');

    let classes = numberOfMentors + numberOfStudents;
    const all = ("Total numnber of students and mentors: " + classes);
    console.log(studentStr + mentorsStr + all);
}

classeroom(15, 8);