// Destructuring: Trích xuất giá trị từ mảng hoặc object và gán vào biến cụ thể nào đó
// Mảng
// const a = [5,7,9,2,10,50,30,100]
// // const b = a[0]
// // const c = a[1]
// // console.log(b,c);
// // const [,,,,c] =a
// // console.log(c);
// // kết hợp với spread để lấy phần tử còn lại của mảng 
// const [b,c,...d] = a
// console.log(b,c);
// console.log(d);
// Object 
const person = {
    name:"Ngọc",
    age: 20,
    address:"Thái Nguyên"
}
// const name = person.name 
// const age = person.age
const {address,age} = person
console.log(address,age);
// lưu ý: Tên biên trùng với tên thuộc tính, nếu muốn tên
// biến khác với tên thuộc tính thì làm như sau: 
const {name:ten,age:tuoi} = person
console.log(ten,tuoi);
// Sử dụng destructuring trong hàm
// function display(ten,tuoi){
//     console.log('Tên là: '+ten+'. Tuổi:'+tuoi);   
// }
// display(person.name,person.age)
function display({name:ten,age:tuoi}){
    console.log('Tên là: '+ten+'. Tuổi:'+tuoi);   
}
display(person)