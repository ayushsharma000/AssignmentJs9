//Q1. We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']



let studentRecords = [{name:"John",id:123,marks:98},
    {name:"Baba",id:101,marks:23},
    {name:"yaga",id:200,marks:45},
    {name:"Baba",id:115,marks:75}
];

let arr = studentRecords.map(x => x.name.toUpperCase());
console.log(arr);


//Q2. Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let arr1 = studentRecords.filter(x => x.marks > 50);
console.log(arr1);


//Q3. Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let arr2 = studentRecords.filter((x) =>x.marks > 50&&x.id>120);
console.log(arr2);


//Q4. Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let arr3 = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr3);


//Q5. This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let arr4 = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<arr4.length; i++)
    console.log(arr4[i].name);


// Q6. This time we are required to print the sum of marks of the students with id > 120.

let arr5 = studentRecords.filter(x => x.id > 120);
let arr6 = arr5.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr6);

// Q7. This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.


for(let x of studentRecords){
    if(x.marks<50){
        
        x.marks = x.marks + 15;
    }
}

let arr7 = studentRecords.filter(x => x.marks > 50);
let arr8 = arr7.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr8);

// Q8. Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 


let student1 = {
    name : "Praveen Soreng",
    class : 12,
    roll_no : 10021
}

let student2 = {
    name : "Amar Kumar",
    class : 12,
    roll_no : 10024
}
let student3 = {
    name : "Abhishek Kumar",
    class : 11,
    roll_no : 10056
}

let student4 = {
    name : "Amit Mishra",
    class : 11,
    roll_no : 10067
}
let student5 = {
    name : "Rohit Singh",
    class : 11,
    roll_no : 10079
}

let student6 = {
    name : "Priya Ranjan",
    class : 11,
    roll_no : 10067
}
let student =[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(student);