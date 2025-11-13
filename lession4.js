// Arrow function 
// Cú pháp:
const tenham = (thamso)=>{
    // to do something 
}
// Ví dụ: 
// const tinhtong = (a,b)=>{
//     return a+b
// }
// Một số cách viết khác của arrow function
// 1. Khi hàm chỉ có 1 khối lệnh: 
// const tenham = (thamso)=>khối lệnh
// VD:
// const tinhtong = (a,b)=>a+b
// 2. Khi hàm chỉ có 1 tham số: 
// const tenham = thamso=>khoilenh
// VD :
// const binhphuong = a=>a*a
//  Tham số mặc định (Default parameter)
// Gán cho tham số 1 giá trị mặc định. Khi gọi hàm
// nếu truyền giá trị tương ứng thì tham số sẽ nhận
// giá trị truyền vào, nếu không truyền giá trị thì nó
// sẽ nhận giá trị mặc định
// VD:
 const tinhtong = (a,b=5)=>a+b // gán b giá trị mặc định
// //  là 5
// console.log(`Kết quả là: ${tinhtong(6)} `);
//Hàm callback

const Display = (a,b,cb)=>{
    console.log(`Tổng 2 số:
         ${a}+${b}=${cb(a,b)} `);    
}
Display(8,9,tinhtong)
// B. Tập: 1. Viết hàm xử lý tính tổng các
// phần tử của mảng 
// 2. Cho mảng a = [6,9,10,30]
//  - Viết hàm hiển thị các ptu của mảng
// và hiển thị tổng các phần tử trong mảng 
const a = [6,9,10,30]
const tongmang = arr=>{
    let total = 0;
    for (item of arr){
        total+=item
    }
    return total
}
const HienthiMang = (arr,cb)=>{
    console.log(`Ds các phần tử`);
    for (i of arr){
        console.log(i);        
    }
    console.log(`Tổng các ptu mảng: ${cb(arr)} `);    
}
HienthiMang(a,tongmang)