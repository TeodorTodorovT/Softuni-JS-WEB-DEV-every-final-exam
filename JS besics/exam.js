function exam(input){
    let studentCount = Number(input[0]);
    let grade = Number(input[1]);

    let index = 1;

    let topStudents = 0;
    let goodStudents = 0;
    let averageStudents = 0;
    let failedStudents = 0;
    let averageGrade = 0;

    for(let i = 0; i < studentCount; i++){
        if(grade >= 5){
            topStudents++
        }else if(grade >= 4 && grade <= 4.99){
            goodStudents++
        }else if(grade >= 3 && grade <= 3.99){
            averageStudents++
        }else if(grade < 3){
            failedStudents++
        }
        averageGrade +=grade;
        index++
        grade = Number(input[index]);
    }

    console.log(`Top students: ${(topStudents / studentCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodStudents / studentCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(averageStudents / studentCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(failedStudents / studentCount * 100).toFixed(2)}%`);
    console.log(`Average: ${(averageGrade / studentCount).toFixed(2)}`);
}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"
])
