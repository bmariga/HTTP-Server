
class Student {
    constructor(name,age,course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    greeting() {
        
        console.log("My name is " + this.name + ", I am "+ this.age + " and I study "+ this.course);

    }
}

console.log("Path Name and File Name");
console.log(__dirname, __filename);


module.exports = Student;
 