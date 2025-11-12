// Arrow function 
// const tenham = (prams(nếu có))=>{
//     //Todo
// }
// Ví dụ:
// const tinhtong = (a,b)=>{
//     return a+b
// }
// const a = [7,8,9]
// const tong = (arr)=>{
//     let total = 0
//     for(item of arr){
//         total+=item
//     }
//     return total
// }
// console.log(tong(a));
// 1 số cách viết khác
// Trong hàm chỉ có 1 khối lệnh: const tenham=(thamso)=>khoilenh
// VD:
// const tinhtong = (a,b)=>a+b
// // Trong hàm chỉ có 1 tham số: const tenham = thamso=>{//todo}
// const dientichhinhtron = bankinh=>bankinh*bankinh*3.14
//Hàm không có tham số và 1 khối lệnh: cons tenham = ()=>khoilenh
// Default prameter: Tham số mặc định
// Khi gọi hàm nếu truyền tham số thì nó sẽ lấy tham số truyền vào
// nếu không truyền thì sẽ lấy tham số mặc định khi định nghĩa 

const tinhtong = (a=10,b=9)=>a+b
console.log(tinhtong());
// Lưu ý: Tham số mặc định phải nằm phía sau
// tham số thông thường
// -- Gọi hàm ngay lập tức IIFE 
// (khối lệnh hàm)(tham số)
// VD 
// ((a,b)=>console.log(`Tích 2 số: ${a*b}`))(7,6)

// const a = [8,2,5,10];
// ((arr)=>{
//     // dùng for duyệt từng ptu mảng
//     let tong = 0 // biến tích lũy
//     for (item of arr){
//         tong+=item 
//         // tong = tong+item 
//     }
//     console.log(`Tổng các ptu là: ${tong}`);
    
// })(a)

// Hàm return hàm 
// const dientich = (dai,rong)=>{
//     const tich = dai*rong
//     return (cao)=>{
//         console.log(`Thể tích là: ${tich*cao} `);        
//     }
// }
// const thetich = dientich(6,10)
// // console.log(typeof(thetich));
// thetich(8)
// Callback Function
const tinhtich = (a,b)=>a*b 

const Display = (a,b,callbackFn)=>{
    console.log(`Tích 2 số 
    ${a}+${b} = ${callbackFn(a,b)} `);
}
Display(8,9,tinhtich)