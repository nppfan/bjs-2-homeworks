function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student('Иван', 'мужской', 20);
let student2 = new Student('Мария', 'женский', 22);
let student3 = new Student('Алексей', 'мужской', 21);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}


Student.prototype.addMarks = function(...marks) {
  if (this.marks === undefined) {
    console.log('Студент отчислен');
    return;
}
if (marks.length === 0) {
    return 0;
}
this.marks.push(...marks);
}

student1.addMarks(5, 4, 3);
student2.addMarks(4, 4, 5);
student3.addMarks(3, 3, 4);

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
    return 0;
}
const sum = this.marks.reduce((total, mark) => total + mark, 0);
return sum / this.marks.length;
}


Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;

}