console.log("A5.12_CW")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

const studentsData=[
  {
    name:"Rahul",
    rollNo:101,
    hindi:80,
    english:75,
    maths:90,
    computers:88,
    science:82,
    totalMarks:415,
    avgMarks:83
  },
  {
    name:"Amit",
    rollNo:102,
    hindi:85,
    english:70,
    maths:95,
    computers:92,
    science:78,
    totalMarks:420,
    avgMarks:84
  },
  {
    name:"Priya",
    rollNo:103,
    hindi:78,
    english:92,
    maths:87,
    computers:95,
    science:90,
    totalMarks:442,
    avgMarks:88.4
  },
  {
    name:"Kaveri",
    rollNo:104,
    hindi:89,
    english:95,
    maths:96,
    computers:98,
    science:91,
    totalMarks:469,
    avgMarks:93.8
  }
  
]



function getTopper(data){
let highestTotalStudent = data[0]
  for(let i=1; i<data.length;i++){
    if(data[i].totalMarks > highestTotalStudent.totalMarks){
      highestTotalStudent = data[i]
    }
  }
  return highestTotalStudent
}



function getGrades(avg){
  if(avg >= 90) return "A"
  if(avg >= 80) return "B"
  if(avg >= 70) return "C"
  if(avg >= 60) return "D"
  if(avg >= 50) return "E"
  return "F"
}


function getAGradeCount(data){
  let count =0;
  for(let i=0; i<data.length; i++){
    if(data[i].avgMarks >= 90){
      count = count + 1 
    }
  }
  return count 
}


function getTotalMarks(data){
  let classTotalMarks=0;
  for(let i=0; i<data.length; i++){
    classTotalMarks = classTotalMarks + data[i].totalMarks
  }
  return classTotalMarks
}


function calculateSubjectAverage(data,subjectName){
  let totalMarks=0
  for(let i=0; i<data.length; i++){
    totalMarks = totalMarks  + data[i][subjectName]
    
  }
  return totalMarks / data.length
}



function generateClassReport(studentsData){

let topper = getTopper(studentsData);
let aGradeCount = getAGradeCount(studentsData);
let totalMarksScoredByClass = getTotalMarks(studentsData);
let hindiAverage = calculateSubjectAverage(studentsData, "hindi");
let mathsAverage = calculateSubjectAverage(studentsData, "maths");
let englishAverage = calculateSubjectAverage(studentsData, "english");
  let scienceAverage = calculateSubjectAverage(studentsData, "science");
  let computersAverage = calculateSubjectAverage(studentsData, "computers");
  
let report = "====== Class Performance Report ======\n" ;
  report += "Topper:\n"
  report += "-----\n"
  report += "Name: " + topper.name + "\n"
  report += "Roll No: "+topper.rollNo +"\n"
  report += "Total Marks: "+ topper.totalMarks + '\n'
  report += "Grade: " + getGrades(topper.avgMarks) +"\n"

  report += "\nA graders:\n"
   report += "-----\n"
   report += "Total numbers of A graders: " + aGradeCount +"\n"

for(let i=0; i<studentsData.length; i++){
  
  if(studentsData[i].avgMarks >= 90){
    
    report += "Name: " + studentsData[i].name + "\nTotal Marks: " + studentsData[i].totalMarks +"\n-----" 
  }
}

  report += "\nClass Average: \n" 
  report += "-----\n"
    report += "Total Marks Scored by Class: " + totalMarksScoredByClass+"\n"

  report += "Total Average Of Class: " + totalMarksScoredByClass / studentsData.length
  
  report += "\n-----"+"\nTotal Average Of Hindi: "+ hindiAverage +"\n"

report += "\nTotal Average Of Maths: "+ mathsAverage +"\n"

report += "\nTotal Average Of English: "+ englishAverage +"\n"

report += "\nTotal Average Of Science: "+ scienceAverage +"\n"

report += "\nTotal Average Of Computers: "+ computersAverage +"\n"
  
  return report
}

console.log(generateClassReport(studentsData))console.log("A5.12_HW_1")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

const studentsData = [
  { name: "Sarah", rollNo: 201, chemistry: 88, homeScience: 78, commerce: 92, physicalEducation: 90, moralScience: 85, totalMarks: 433, avgMarks: 86.6 },
  { name: "Michael", rollNo: 202, chemistry: 75, homeScience: 90, commerce: 85, physicalEducation: 94, moralScience: 88, totalMarks: 432, avgMarks: 86.4 },
  { name: "Emily", rollNo: 203, chemistry: 82, homeScience: 95, commerce: 88, physicalEducation: 92, moralScience: 90, totalMarks: 447, avgMarks: 89.4 },
  { name: "David", rollNo: 204, chemistry: 95, homeScience: 96, commerce: 94, physicalEducation: 99, moralScience: 99, totalMarks: 483, avgMarks: 96.6 },
  { name: "Olivia", rollNo: 205, chemistry: 85, homeScience: 92, commerce: 89, physicalEducation: 91, moralScience: 86, totalMarks: 443, avgMarks: 88.6 }
];


function findTopper(student){
let highestMarks = student[0]
for(let i=0; i<student.length; i++){
  if( student[i].totalMarks > highestMarks.totalMarks ){
    highestMarks = student[i]
  }
}
  return highestMarks
}


function getGrades(avg){
  if(avg >= 95) return "A+"
  if(avg >= 90) return "A"
  if(avg >= 85) return "B+"
  if(avg >= 80) return "B"
  if(avg >= 75) return "C+"
  if(avg >= 70) return "C"
  if(avg >= 65) return "D+"
  if(avg >= 60) return "D"
  if(avg >= 55) return "E"
  if(avg < 55) return "F"
}

function totalAGraders(data){
  let count =0
  for(let i=0; i<data.length; i++ ){
    if(data[i].avgMarks > 90){
      count = count + 1;
    }
  }
  return count
}


function totalMarksScoredByClass(data){
let totalMarksOfClass=0
  for(let i=0; i<data.length; i++){
   totalMarksOfClass = totalMarksOfClass +  data[i].chemistry + data[i].homeScience + data[i].commerce + data[i].physicalEducation + data[i].moralScience 
  }
  return totalMarksOfClass
}

function totalAvgOfClass(avg){
  let totalClassAvg=0
  for(let i=0; i<avg.length; i++){
      totalClassAvg = totalClassAvg + avg[i].avgMarks
  }
  return totalClassAvg
}


function totalSubjectAverage(data,subjectName){
  let subjectAvg=0
  for(let i=0; i<data.length; i++){
    subjectAvg = subjectAvg + data[i][subjectName]
  }
  return subjectAvg / data.length
}



function classPerformanceReport(){
  
let topper= findTopper(studentsData);
let aGraders= totalAGraders(studentsData);
let avgOfClass = totalAvgOfClass(studentsData);
let totalMarksOfclass = totalMarksScoredByClass(studentsData);
let chemistryAverage = totalSubjectAverage(studentsData, "chemistry");
  let homecienceAverage = totalSubjectAverage(studentsData, "homeScience");
  let CommerceAverage = totalSubjectAverage(studentsData, "commerce");
  let physicalEduAverage = totalSubjectAverage(studentsData, "physicalEducation");
  let moralScienceAverage = totalSubjectAverage(studentsData, "moralScience");
  
let report = "====== Class Performance Report =====" + "\nTopper: " + "\n-----" + "\nName: " + topper.name + "\nRoll No: " + topper.rollNo + "\nTotal Marks: "+ topper.totalMarks +"\n" 

 report += "Grade: " + getGrades(topper.avgMarks) +"\n" 

 report += "\nA+ Graders: " + "\n-----"

report += "\nTotal no. of A+ graders:" + aGraders +"\n"

  for(let i=0; i<studentsData.length;i++){
    if(studentsData[i].avgMarks > 95){
      report += "Name: " + studentsData[i].name + "\nTotal Marks: " + studentsData[i].totalMarks +"\n-----"
    }
  }

  report += "\nClass Average: "+"\n-----" 
  
  report += "\nTotal Marks Scored by Class: " + totalMarksOfclass +"\n" 

  report += "\nTotal average of Class: " + avgOfClass+  "\n-----"
  
   report += "\nTotal Average of Chemistry: " + chemistryAverage 

   report += "\nTotal Average of Home Science: " + homecienceAverage

   report += "\nTotal Average of Commerce: " + CommerceAverage
  
   report += "\nTotal Average of Physical Education: " + physicalEduAverage
  
   report += "\nTotal Average of Moral Science: " +  moralScienceAverage
  
  return report
}

console.log(classPerformanceReport())