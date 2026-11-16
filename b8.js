// class Person{
//     name = "Ngọc"
//     age = 30
// }
// // Tạo object từ class
// const person = new Person()
// console.log(person);
// constructor trong class: chạy khi class được khởi tạo (instance)
// this: trỏ tới đối tượng được instance
class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    tangtuoi(){
        this.age+=1
    }
}
const person1 = new Person("Ngọc",30)
const perons2 = new Person("An",50)
console.log(person1);
person1.tangtuoi()
console.log(person1.age);
person1.tangtuoi()
console.log(person1.age);
console.log(perons2);
// Cho đoạn HTML sau:
// <ul id="studentList"></ul>
{/* Viết JavaScript thực hiện các yêu cầu: Tạo class students, khởi tạo danh sách sinh viên sau đó viết phương thức render() để hiển thị danh sách học viên vào ul#studentList. Mỗi học viên được hiển thị thành một thẻ li theo định dạng: “Tên học viên – Điểm: điểm”. Trước khi render, cần xóa nội dung cũ trong danh sách. */}
class Students{
    constructor(students){
        this.students = students
    }
    render(){
        // Truy cập đến ul
        const ul = document.getElementById("studentList")
        this.students.forEach(item=>{
            // tạo li
            const li = document.createElement("li")
            li.innerHTML= `${item.name} - Điểm: ${item.score}`
            // append
            ul.append(li)
        })
    }
}
const students = [
  { id: 1, name: "An",   age: 19, score: 8.5, active: true,  profile: { city: "Hà Nội" } },
  { id: 2, name: "Bình", age: 20, score: 6.5, active: false, profile: { city: "Đà Nẵng" } },
  { id: 3, name: "Chi",  age: 18, score: 9.0, active: true,  profile: { city: "Hà Nội" } },
  { id: 4, name: "Dũng", age: 21, score: 4.5, active: true,  profile: null },
  { id: 5, name: "Hà",   age: 20, score: 7.0, active: true }
];

// Tạo đối tượng studentlist
const studentlist = new Students(students)
studentlist.render()