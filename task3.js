const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },
];
const newArray = [];
for(let i = 0; i<students.length; i++){
    let studentName = students[i].name;
    let studentMarks = students[i].marks;
    let marksPop = [studentName,studentMarks];
    marksPop.pop();
    
    if(students[i].marks < 50){
        students[i].status = "Fail";
        marksPop.push("Fail");
    }
    else{
        students[i].status = "Pass";
        marksPop.push("Pass");
    }
    let studentStatus = students[i].status;
    newArray.push({name:studentName, status: studentStatus})
}
console.log(newArray);