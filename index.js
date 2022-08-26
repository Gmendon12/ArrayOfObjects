let studentRecords = [ 
{name:'John', id:123 , marks: 98},
{name: 'Babary', id : 101, marks: 23},
{name: 'Yogesh', id: 200, marks:45},
{name: 'Harry',  id: 115, marks:75}]

//Question 1. We are interested in retrieving only the name of the students and all names should be in caps

console.log(studentRecords[0].name.toUpperCase());
console.log(studentRecords[1].name.toUpperCase());
console.log(studentRecords[2].name.toUpperCase());
console.log(studentRecords[3].name.toUpperCase());


let onlyName = [];
for(let i = 0; i < studentRecords.length; i++) {
    onlyName.push(studentRecords[i].name.toUpperCase());
}
console.log(onlyName);

//Question 2. Suppose we have the same dataset as above but this time we want to get the details of student who scored more than 50 marks

for(i=0; i<=3; i++) {
    if (studentRecords[i].marks >50){
        console.log(studentRecords[i]);
    }
}

//Question 3. Retrieve details of students who scored more then 50 and have id greater than 120

for(i=0; i<=3; i++) {
    if (studentRecords[i].marks >50 && studentRecords[i].id > 120){
        console.log(studentRecords[i]);
    }
}

//Question 4. Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students

let sum = 0;
for (i=0;i<=3;i++){
   sum = sum + studentRecords[i].marks;
}
console.log(sum);

//Question 5. This time we want to get only the names of the students who scored more than 50 marks from the same dataset

let ab = [];
for(i=0; i<=3; i++) {
    if (studentRecords[i].marks >50){
        ab.push(studentRecords[i].name.toUpperCase());
        // console.log("Students who have scored above 50 marks =" + "" + studentRecords[i].name);
    }
}
console.log("Students who have scored above 50 marks" + "" + (ab));

//Question 6. This time we need to print the sum of marks of student with id > 120

let sum1 = 0;
for(i=0; i<=3; i++){
    if(studentRecords[i].id > 120){
        sum1 = sum1 + studentRecords[i].marks;
    }
}
console.log(sum1);

//Question 7. This time we require to print the total marks of the student swith the marks greater than 50 after grace of 15 marks has been added to those students who scored less than 50.

let plusGrace = 0;
for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks < 50) {
      plusGrace += studentRecords[i].marks + 15;
    }
  }
console.log(plusGrace);

//Question 8. Create 6 objects, each object will have a name, roll no as properties.
//Store these objects in an array of objects

const student1 = {
    name : "Gautam",
    class : 10,
    rollno : 12
}

const student2 = {
    name : "Priyanka",
    class : 10,
    rollno : 15
}

const student3 = {
    name : "Abhishek",
    class : 9,
    rollno : 20
}

const student4 = {
    name : "Felix",
    class : 12,
    rollno : 30
}

const student5 = {
    name : "Satyajith",
    class : 11,
    rollno : 2
}

const student6 = {
    name : "Puneeth",
    class : 8,
    rollno : 1
}

let studentArray = [];

const studentsRecord = (student) => {
    studentArray.push(student);
}

studentsRecord(student1);
studentsRecord(student2);
studentsRecord(student3);
studentsRecord(student4);
studentsRecord(student5);
studentsRecord(student6);

console.log(studentArray);

