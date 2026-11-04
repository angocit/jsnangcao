// Template string 
// => Giúp viết chuỗi, biến, hàm trong cùng 1 câu lệnh 
// ``   Sử dụng dấu backtick
// Ví dụ 
// const tenlop = 'MD21301'
// // thông thường
// console.log('Tên lớp là: '+tenlop);
// // Template string
// console.log(`Tên lớp là: ${tenlop}`);
// // Thực thi hàm
// function tinhtong(a,b){
//     return a+b
// }
// console.log(`Tổng 2 số 3+5 = ${tinhtong(3,5)}`);

// Destructuring: Trích xuất giá trị của phần tử mảng
// hoặc thuộc tính của đối tượng và gán vào biến
// riêng lẻ
// Mảng
// const a = [6,4,8,10]
// // const b = a[0]
// // const c = a[1]
// // const [b,c] =a 
// // console.log(b);
// // console.log(c);
// // bỏ qua phần tử bằng dấu , (bao nhiêu ptu <=> Bấy nhiêu dấu ,)
// const [,b,,c]= a
// console.log(b);
// console.log(c);
//Object (đối tượng)
// const person = {
//     name: "Ngọc",
//     age: 30,
//     address:"Thái Nguyên"
// }
// const name = person.name
// const age = person.age
// console.log(name);
// console.log(age);
// const {name,age} = person
// console.log(name);
// console.log(age);
// // Lưu ý: Tên biến trùng với tên thuộc tính
// // Để thay đổi tên biến=> sử dụng tên_thuộc_tính:tên_biến
// const {name:hoten,age:tuoi} = person
// console.log(`Họ tên: ${hoten}, tuổi: ${tuoi}`);
// Sử dụng destructuring trong hàm
// function display(person){
//     console.log(`
//         Họ tên: ${person.name}
//         Tuổi: ${person.age}
//         Địa chỉ: ${person.address}
//         `);    
// }
// display(person)
// function display({name,age,address}){
//     console.log(`
//         Họ tên: ${name}
//         Tuổi: ${age}
//         Địa chỉ: ${address}
//         `);    
// }
// display(person)

// Spread/Rest: Đều sử dụng dấu ...
// Spread: Sao chép, mở rộng phần tử của mảng hoặc thuộc tính của đối tượng
// Mảng
const a = [8,6,10,9,5]
const b = [...a]
console.log(a);
console.log(b);

// Tại sao không b= a 
const c =a 
console.log(c);
// Spread không làm thay đổi mảng gốb
c.push(10)
console.log(a)
console.log(b);
console.log(c);
// Mở rộng
const d = [...a,3,20]
console.log(d);
const e = [80,33,20]
const f = [...a,...e]
console.log(f);

// Object 
const person = {
    name:"Ngọc",
    age:33,
    address:"Thái Nguyên"
}
// Sao chép
const person2 = {...person}
console.log(person2);
// Mở rộng
const person3 = {...person,classname:"WD21301"}
console.log(person3);
// Gán lại giá trị thuộc tính
const person4 = {...person,age:40}
console.log(person4);
