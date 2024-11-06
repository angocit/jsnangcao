// Spread & Rest  đều dùng dấu ...
// - Spread: Copy hoặc mở rộng mảng hoặc thuộc tính của đối tượng
//  Mảng 
// const a = [5,6,8,1]
// // const b = [...a]
// // // Đặc điểm: Không làm thay đổi mảng gốc 
// // b.push(15)
// // console.log(a);
// // console.log(b);
// // mở rộng 
// const b = [...a,15,20,11,9]
// console.log(b);
// Đối với object 
// const person = {
//     name:"Ngọc",
//     age: 20
// }
// const person2 = {...person,address:"Thái Nguyên"}
// console.log(person2);
// const person3 = {...person,age:person.age+1}
// console.log(person3);
// - Rest: Gom các phần tử thành mảng
// VD: 
// const tinhtongthongthuong = (nha1,nha2,nha3,nha4)=>{
//     return nha1+nha2+nha3+nha4
// }
// Rest parameter 
// const tinhtong = (...nha)=>{
//     let tong = 0;
//     for(dientich of nha){
//         tong += dientich
//     }
//     console.log(tong);
    
// }
// tinhtong(100,50,30,80,40,12,36)
// Short-circuiting: Cú pháp đặc biệt của js, nó sẽ
// dừng khi biểu thức được xác định 
// - nÓ xác định dựa vào falsy value 
// Falsy Value 
// - false 
// - 0
// - ""
// - null
// - undefined
// - NaN : Not a number 
// - OR (||)
// const a = ""||false||0||"Ngoc"||"abc"
// console.log(a);
// Ứng dụng: đặt giá trị mặc định cho biến
// function Check(){
//     const input = document.querySelector('input').value
//     const address =input||"Hà Nội" 
//     console.log(address);    
// }
// AND (&&)
// Cách duyệt ngược lại so vói OR 
// const a = "Ngoc"&&"Minh"&&10
// console.log(a);
// Ứng dụng: 
// const checkvalidate = (email,password)=>{
//     // TH email có @  email.indexOf('@') >-1
//                     // true            true
//     return email.indexOf('@')>-1&&password.length>6
// }
// // Nullish Giống Với biểu thức or nhưng thay vì so sánh
// // với falsy value thì nó chỉ so sánh với null và undefined 
// // Biểu thức: ??
// const a = null??undefined??0??"Ngọc"
// console.log(a);
// Optional Chaining:  Giúp chúng ta truy cập thuộc tính hoặc phương thức của đối tượng mà không cần
// ktra xem nó có tồn tại hay không 
const wd19203 = [
    {
    name:"Ngoc",
    age:20
    },
    {
        name:"SV2",
        age:20,
        address: {
            provice:"Hà Nội",
            district:"Cầu Giấy"
        }
    },
    {
        name:"SV3",
        age:20
    },
]
// Giả sử muốn in ra danh sách sinh viên 
for (sinhvien of wd19203){
    console.log(`
        Họ tên: ${sinhvien.name} - Tuổi: ${sinhvien.age} - Tỉnh: ${sinhvien.address?.provice??"Chưa xác định"}
        `);    
}
console.log('sadfsadfsafs');
