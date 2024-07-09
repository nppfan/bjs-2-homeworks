function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  new Student.prototype.setSubject.apply(this, arguments);
}
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) {
    if (marks.length === 0) {
        return 0;
    }
    this.marks.push(...marks);
}
  
  Student.prototype.getAverage = function () {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    if (this.marks.length === 0) {
        return 0;
      }
    return sum / this.marks.length;
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
    
  }

