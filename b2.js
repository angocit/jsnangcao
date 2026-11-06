// default parameter
// function tinhtong(a,b=5){
//     return a+b
// }
// console.log(`Tổng là: ${tinhtong(5)}`);
// console.log(`Tổng 2 đối số là: ${tinhtong(5,10)}`);
// Lưu ý: tham số mặc định phải nằm sau tham số thông thường cuối cùng khi định nghĩa hàm

// Arrow function  (Hàm mũi tên)
// cú pháp :
// const tenham = ()=>{
//     // todo something
// }
// Ví dụ :
const tinhtong = (a,b)=>{
    return a+b
}
console.log(`Tổng là: ${tinhtong(5,9)}`);
// Một số cách viết hàm mũi tên
// - Nếu trong hàm chỉ có duy nhất 1 câu lệnh thì có thể bỏ {}, return
const tinhtong2 = (a,b)=>a+b 
console.log(`Tổng là: ${tinhtong2(10,9)}`);
const tinhtong3 = (a,b)=>console.log(a+b);
tinhtong3(10,15)
// - Nếu hàm chỉ có 1 tham số thì có thể bỏ ()
const display = a=>console.log(`Số dư của  ${a}/2 là: ${a%2}`);
display(10)
// Hàm lồng nhau

// const thetich = (a,b,c)=>{
//     const tich = a*b
//     const display = ()=>{
//         console.log(`Thể tích là : ${tich*c} `);        
//     }
//     display()
// }

// thetich(5,6,2)
const thetich = (a,b)=>{
    const tich = a*b
    return (c)=>{
        console.log(`Thể tích là : ${tich*c} `); 
    }
}
thetich(5,6)(2)