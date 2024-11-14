// Set : Đối tượng lưu trữ giá trị trong js, mà những giá trị này nó là duy nhất(không trùng lặp)
// // Cú pháp:
// const set = new Set()  // tạo set rỗng
// // const set2 = new Set (array) // Tạo set từ mảng
// const set2 = new Set([6,8,10,9,1,8,8,8,8,8,8])
// console.log(set);
// console.log(set2);
// // Các thuộc tính và phương thức của set.
// //Thêm giá trị vào set: set.add(value)
// set2.add(2)
// set2.add(3)
// set2.add(8)
// console.log(set2);
// // Xóa giá trị trong set: set.delete(value)
// set2.delete(8)
// console.log(set2);
// // xóa toàn bộ giá trị trong set: set.clear()
// // set2.clear()
// // console.log(set2);
// // Ktra giá trị nào đó có tồn tại trong set hay không: set.has(value) => trả về true or false
// // console.log(set2.has(3));
// // Kiểm tra có bao nhiêu giá trị trong set: set.size
// // console.log(set2.size);
// // Đặc điểm: Set không truy cập được trực tiếp giá trị, nhưng có thể duyệt Set thông qua for
// // for (item of set2){
// //     console.log(item);    
// // }
// // Chuyển đổi từ set về mảng bằng cú pháp spread (...)
// const arr = [...set2]
// console.log(arr);
// // Ứng dụng: Lọc trùng trong mảng, lưu trữ những giá trị nào mà nó không trùng nhau
// // VD: 
// const banthang = ["Ngọc","An","Ngọc","Ngọc","Minh"]
// // => Đưa ra ds các cầu thủ ghi bàn 
// // const cauthu = []
// // for (item of banthang){
// //     if (cauthu.indexOf(item)==-1){
// //         cauthu.push(item)
// //     }
// // }
// // console.log(cauthu);
// const setcauthu = new Set(banthang)
// const cauthu = [...setcauthu]
// console.log(cauthu);
// // Map: Là đối tượng lưu trữ của js, lưu trữ theo cặp key-value
// // cú pháp:
// const map = new Map()
// // Các thuộc tính và phương thức của Map 
// // - thêm cặp giá trị: map.set(key,value)
// map.set("name","Ngọc")
// map.set("age",20)
// map.set("address","Thái Nguyên")
// map.set("married",true)
// console.log(map);
// //Truy cập giá trị thông qua key: map.get(key)
// const name = map.get("name")
// console.log(name);
// // Xóa giá trị thông qua key: map.delete(key)
// map.delete("married")
// console.log(map);
// // Xóa tất cả: map.clear()
// // map.clear()
// // console.log(map);
// //ktra key có tồn tại trong map hay không: map.has(key) => true or false
// console.log(map.has("address"));
// // Ktra số lượng cặp key-value trong set: map.size
// console.log(map.size);
// Arrow function 
// function tenham(thamso){
//     //todo something
// }
// const tenham = (thamso)=>{
//     // todo something
// }
// - Hàm chỉ có 1 khối lệnh (xử lý logic trên 1 dòng mà ko ngăn cách nhau bởi dấu ;)
// const tinhtong = (a,b)=>a+b
// // thay vì:
// function tinhtong(a,b){
//     return a+b
// }
// - hàm chỉ có 1 tham số và chỉ có 1 khối lệnh
// const binhphuong = a=>a*a
// // - hàm chỉ có 1 tham số và chỉ có nhiều khối lệnh
// const display = a=>{
//     const binhphuong = a*a
//     console.log(binhphuong);    
// }
// Hàm không có tham số
// const display = ()=>console.log(`Hello world`);
// Tham số mặc định (default parameter)
// - cho phép đặt giá trị mặc định cho tham số của hàm. Khi gọi hàm nếu tham số
// được truyền giá trị thì nó sẽ nhận giá trị truyền vào, nếu không truyền thì
// tham số sẽ nhận giá trị mặc định
// const tinhtong =(a,b=0)=>a+b
// console.log(tinhtong(5));
// console.log(tinhtong(5,6));
// Lưu ý: tham số mặc định phải nằm sau cùng các tham số thông thường
// không thể đặt: 
// const tinhtong = (a=0,b)=>a+b

// Hàm callback: Một hàm sẽ đóng vai trò là tham số của 1 hàm khác và
// nó sẽ được gọi khi sử dụng tham số đó bên trong hàm
// Ví dụ: 
// const tinhtong =(a,b)=>a+b 
// // const display = (hamcb)=>{
// //     const tong = hamcb(8,10)
// //     console.log(`Tổng 8+10=${tong} `);
// // }
// // display(tinhtong)
// const display = (a,b,callbackFn)=>{
//     const tong = callbackFn(a,b)  //15
//     console.log(`Tổng ${a}+${b}=${tong} `);
// }
// display(7,8,tinhtong)
// // Return hàm trong hàm 

// const thetich = (dai,rong)=>{
//     const dientich = dai*rong 
//     return (cao)=>{
//         console.log(`Thể tích là ${dientich*cao} `);   
//     }
// }
// const abc = thetich(5,6) // abc là 1 hàm có 1 tham só là chiều cao.
// abc(10)
// Gọi hàm ngay lập tức  IIFE (Immediately Invoked Function Expression)
// VD: 
// const tinhtong = (a,b)=>console.log(a+b)
// tinhtong(5,6)
// Viết lại bằng IIFE
//  ((a,b)=>console.log(a+b))(5,6)
// Làm việc với mảng 
const a = [7,8,10,6,5,9]
// forEach: dùng để duyệt mảng 
a.forEach((item,index)=>{
    console.log(`chỉ số: ${index}. Giá trị: ${item}`);    
})
// Đặc điểm: Không dừng được cho đến khi duyệt hết mảng. không giống
//  như for thông thường
// let dem = 0
// for (item of a){    
//     if (item==6){
//         break;
//     }
//     dem++
// }
// console.log(dem);
// map của mảng: tạo ra 1 mảng mới với các phần tử có giá trị
// dựa trên việc xử lý logic của các phần tử mảng gốc mà không 
// làm thay đổi mảng gốc
// VD: tạo ra mảng b với các phần tử có giá trị là các phần tử của mảng a+5 đơn
// vị
// const b = a.map((item,index)=>{
//     return item+5   // Return giá trị
// })
// viết ngắn gọn:
const b = a.map(item=>item+5)
console.log(b);
console.log(a);
// filter: (lọc): tạo ra mảng mới dựa trên điều kiện nào đó của mảng
// gốc mà không làm thay đổi mảng gốc 
// VD: tạo ra mảng mới chỉ bao gồm phần lẻ của mảng a 
// const c = a.filter((item,index)=>{
//     return item%2==1  // return điều kiện
// })
// Viết ngăn gọn
const c = a.filter(item=>item%2==1)
console.log(c);
// reduce: Tạo ra 1 giá trị được tích lũy dựa trên việc xử lý logic phần
// tử mảng 
// VD: tính tổng các phần tử mảng a 
// const tong = a.reduce(hàm callback, giá trị khởi tạo)
const tongphantu = a.reduce((tong,item,index)=>{
    return tong+item
},10)
console.log(tongphantu);
