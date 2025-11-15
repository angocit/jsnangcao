// Một số phương thức của mảng 
// Duyệt mảng 
// forEach
// cú pháp: arr.forEach((item,index,array)=>{
    // to do
// })
// Trong đó: item: phần tử được duyệt
// - index (optional): chỉ số của phần tử được duyệt
// - array (optional): Mảng được duyệt
const a = [6,8,5,10,3]
// a.forEach((item,index)=>{
//     console.log(`Vị trí: ${index} Phần tử là: ${item} `);
//     // console.log(array);    
// })
// cách viết khác
// const callbackFn=(item,index)=>{
//     console.log(`Vị trí: ${index} Phần tử là: ${item} `);
//     // console.log(array);    
// }
// a.forEach(callbackFn)
// Lưu ý: Duyệt hết mảng và không thể dừng hay 
// bỏ qua phần tử được (k dùng đc continue, break)
// map(): Tạo ra 1 mảng mới với giá trị của phần
// tử được xác định theo phần tử mảng gốc và không
// làm thay đổi mảng gốc 
// cú pháp: arr.map((item,index,array)=>{
        // return value  
// })
// Trong đó: item: phần tử được duyệt
// - index (optional): chỉ số của phần tử được duyệt
// - array (optional): Mảng được duyệt
// value: giá trị phần tử mảng mới sẽ nhận được ở 
// mỗi vòng lặp 
// VD: tạo ra 1 mảng b có các phần tử là phần tử 
// của mảng a*2 
console.log(a);
// const b = a.map((item,index)=>{
//     return item*2
// })
// Viết ngắn gọn
// const b =a.map(item=>item*2)
// console.log(b);
// // Tạo mảng c từ mảng a với điều kiện. ptu mảng
// // a là chẵn thì sẽ x2, lẻ thì giữ nguyên
// // VD: Input [6,8,5,10,3] Output [12,16,5,20,3]
// // const c = a.map(item=>{
// //     if (item%2 ==0){
// //         return item*2
// //     }
// //     return item 
// // })
// // Ngắn gọn hơn
// const c = a.map(item=>(item%2==0)?item*2:item)
// console.log(c);
// filter(): Lọc=> tạo ra 1 mảng mới với các phần
// tử của mảng gốc thỏa mãn điều kiện nào đó và không
// làm thay đổi mảng gốc 
// Cú pháp: arr.filter((item,index,array)=>{
//    return condition // Return điều kiện 
// })
// VD: tạo ra mảng b bao gồm những phần tử chẵn
// của mảng a 
// const b = a.filter(item=>{
//     return item%2==0
// })
// Ngắn gọn
const b = a.filter(item=>item%2==0)
console.log(b);
const students = [
    {
        name:"SV1",
        score:8,
        address: "Thái Nguyên"
    },
     {
        name:"SV2",
        score:6,
        address: "Hà Nội"
    },
     {
        name:"SV3",
        score:5,
        address: "Thái Nguyên"
    }
 ]

 // Lọc ra sinh viên quê Thái Nguyên
 // Hiển thị danh sách sv, với điều kiện, sv quên thái nguyên
//  sẽ được +1 điểm
// Y1
const thainguyenstudens = students.filter(student=>student.address==="Thái Nguyên")
console.log(thainguyenstudens);
// Y2
// const studentsUd = students.map(student=>{
//     if (student.address==="Thái Nguyên"){
//         return {...student,score:student.score+1}
//     }
//     return  student
// })
// Ngắn gọn 
const studentsUd = students.map(student=>(student.address==="Thái Nguyên")?
         {...student,score:student.score+1}:student
)
console.log(studentsUd);
// reduce()=> trả về giá trị tích lũy sau khi duyệt mảng 
// Cú pháp: arr.reduce((total,item,index)=>{
//  return value
// },initValue)
// trong đó :
// - total: Biến lưu giá trị được tích lũy sau mỗi vòng lặp 
// item: Phần tử được duyệt
// Chỉ số mảng của phần tử đc duyệt
// value: giá trị mà total nhận được khi duyệt đến phần tử
// initValue: Giá trị khởi tạo của total
// VD: Tính tổng các phần tử của mảng a 
// const tong = a.reduce((total,item)=>{
//     return total+item
// })
// console.log(tong);

// Chỉ tính tổng những phần tử lẻ 
// const tong = a.reduce((subtotal,item)=>{
//     if (item%2==1){
//         return subtotal+item
//     }
//     return subtotal
// },0)
// console.log(tong);

// slice() Tạo ra mảng mới được tách từ mảng gốc
// không làm thay đổi gốc: cú pháp arr.slice(start,end)
// trong đó: start là vị trí bắt đầu, end: vị trí kết thúc
// VD: Từ mảng a, lấy các phần tử từ vị trí thứ 2->4
const c = a.slice(2,4)
console.log(c);
// splice():
// cú pháp arr.splice(start,numberdel,item1,item2...)
// trong đó: start: vị trí bắt đầu
// numberdel:số lượng phần tử muốn xóa từ vị trí start
// item1,item2,... là các phần tử được chèn vào từ
// vị trí start 
//  Xóa và chèn phần tử vào mảng gốc
// VD: Chèn phần tử 7 vào vị trí 2 mảng a 
a.splice(2,0,7)
console.log(a);
