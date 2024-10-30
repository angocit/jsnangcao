// Destructuring: Trích xuất giá trị từ mảng hoặc object và gán vào biến cụ thể nào đó
// Mảng

// const a = [5,10,30,9,6,8,100]
// // const b = a[0]
// // const c = a[1]
// // const [b,,,c] = a
// // console.log(b);

// // console.log(c)
// // kết hợp spread để lấy phần tử còn lại của mảng
// const [b,c,...d] = a
// console.log(b);
// console.log(c);
// console.log(d);
// Object
const name = "sdfasdfsad"
const person = {
    name:"Ngọc",
    age:20,
    address: "Thái Nguyên"
}
// const name = person.name;
// const age = person.age
// const {name,age} = person
console.log(name);
// lưu ý: biến destructuring phải trùng với tên thuộc tính
// muốn đặt khác thì làm như sau: 

const {name:ten,age} = person
console.log(ten);
// Sử dụng destructuring trong hàm
function display({name,age}){
    console.log(`Tên là: ${name} `);
    console.log(`Tuoi: ${age}`);   
    
}
display(person)