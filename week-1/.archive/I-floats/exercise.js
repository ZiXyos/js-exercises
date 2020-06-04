var numberOfStudents = 15;
var numberOfMentors = 8;

function aight_student(stu, ment) {

    let classes = ment + stu;
    let percentStudent = (100 * stu / classes);
    let percentMentors = (100 * ment / classes);
    console.log("Percentage students: " + Math.round(percentStudent) + '%');
    console.log("Percentage students: " + Math.round(percentMentors) + '%');
}

aight_student(numberOfStudents, numberOfMentors);