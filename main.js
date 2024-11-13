// Set : Đối tượng lưu trữ giá trị trong js, mà những giá trị này nó là duy nhất(không trùng lặp)
// // Cú pháp:
// const set = new Set();
// // Có thể khởi tạo set từ array 
// const set2 = new Set([4,8,9,10,33])
// console.log(set2);

// // Các phương thức và thuộc tính của Set.
// // - Thêm giá trị vào set :
// set.add(8)
// set.add(9)
// set.add(6)
// set.add(7)
// console.log(set);
// //- Xóa giá trị trong set
// set.delete(9)
// console.log(set);
// // - Xóa toàn bộ: 
// // set.clear()
// // console.log(set);
// // Kiểm tra một giá trị nào đó có tồn tại trong Set hay không. => trả về true or false
// console.log(set.has(8))
// // Kiểm tra số lượng phần tử trong set.
// console.log(set.size)
// // Lưu ý: Set không truy cập trực tiếp được đến giá trị nhuwg có thể truy cập bằng 
// // cách duyệt cả set bằng for 
// // for (item of set){
// //     console.log(item+40);    
// // }
// // Ngoài ra thì có thể sử dụng spread để sao chép các phần tử trong set ra mảng 
// const a = [...set]
// console.log(a[2]);
// // Ứng dụng: Lọc phần tử trùng trong mảng 
// // VD:
// const banthang = ["Ngoc","An","Ngoc","Ngoc","Minh"]
// // Hiển thị danh sách những cầu thủ ghi bàn:
// const cauthu = new Set(banthang)
// console.log(`Danh sách cầu thủ ghi bàn là:`);
// for (item of cauthu){
//     console.log(item);    
// }
// console.log(`Tổng: ${cauthu.size}`);
// // Map:
// // Cú pháp:
// const map = new Map();
// // Các phương thức và thuộc tính của map 
// // Thêm 1 cặp giá trị:
// map.set("name","Ngọc")
// map.set("age",20)
// map.set("address","Thái Nguyên")
// map.set("maried",true)
// console.log(map);

// // Xóa cặp giá trị.
// map.delete("maried")
// console.log(map);
// // XÓa hết
// // map.clear()
// // console.log(map);
// // Ktra key có tồn tại trong map hay không => trả về true hoặc false
// // console.log(map.has("age"))
// // ---------------------------------------
// // CÓ thể truy cập trực tếp giá trị thông qua key 
// const name = map.get('name')
// console.log(name);
// // Ktra số lượng các cặp trong map 
// // console.log(map.size)

// Arrow function (hàm mũi tên)
// function tenham(thamso){

// }
// const tenham = (thamso)=>{
//     //todo 
// }
// - Trong hàm chỉ có 1 khối lệnh
// function tinhtong(a,b){
//     return a+b
// }
// const tinhtong = (a,b)=>a+b
// console.log(tinhtong(5,6));
// // Nếu hàm chỉ có 1 tham số
// // function binhphuong(a){
// //     return a*a
// // }
// const binhphuong = a=>a*a;
// // Hàm không có tham số
// const display =()=>console.log(`Hello world`);
// display()
// Default parameters  (Tham số mặc định)
// const tinhtong = (a,b)=>a+b
// console.log(tinhtong(5,8))
// const display = (huyen,tinh="Chưa xác định")=>{
//     console.log(`Địa chỉ là là: Huyện ${huyen} - Tỉnh ${tinh} `);
// }
// display("Sông Công")
// const dientich = (dai,rong)=>dai*rong
// // Hàm Callback
// const display = (cao,callbackFn)=>{
//     const dai = 10, rong = 9
//     // Thể tích = diện tích x chiều cao 
//     console.log(`Thể tích khối lập phương là: ${cao*callbackFn(dai,rong)} `); 
// }
// display(10,dientich)
// const thetich = (dai,rong)=>{
//     const dientich = dai*rong
//     return (cao)=>{
//         console.log(`Thể tích là: ${cao*dientich}`);        
//     }
// }
// // thetich(10,9)(10)
// const abc = thetich(10,9)
// abc(10)
// Hàm return hàm: Khi chúng ta gọi hàm và gán nó vào 1 biến thì biến đó
// trở thành hàm mà nó được return 
// Gọi hàm ngay lập tức  IIFE
// const tinhtong = (a,b)=>console.log(a+b)
// tinhtong(5,7)
// Viết lại thành 
// ((a,b)=>console.log(a+b))(5,6)
// Thao tác với mảng
const menu = ["Cơm","Canh","Cá","Rau"]
// Duyệt mảng: for or for of
// forEach để duyệt mảng 
console.log(`Danh sách món ăn:`);

menu.forEach((item,index)=>{
    // Todo something
    console.log(`${index+1}. ${item}`);
})
// Giải thích: item: phần tử mảng được duyệt
//             index: chỉ số của phần tử mảng 
// Đặc điểm: Không dừng được cho đến khi duyệt hết các phần tử của mảng
// map trong mảng: Tạo ra 1 mảng mới theo điều kiện nào đó từ mảng gốc và không
// làm thay đổi mảng gốc
const a = [5,10,6,9]
// - Tạo ra mảng b với phần tử là những phần tử mảng a và tăng lên 5 giá trị
// const b = a.map((item,index)=>{
//     return item+5  // return giá trị
// })
// console.log(b);
// console.log(a);
// viết lại ngăn gọn 
const b = a.map(item=>item+5)
console.log(b);

// Filter: Tạo ra 1 mảng mới phù hợp với điều kiện nào đó của mảng gốc
// mà không làm thay đổi mảng gốc
// VD: Tạo ra mảng mới chỉ gồm những phần tử chẵn của mảng a 
const c = a.filter(item=>{
    return item%2==0  // Return điều kiện
})
console.log(c);
// Reduce 
// Tạo ra giá trị được tích lũy từ các phép tính của các phần tử trong mảng
// VD: Tính tổng các phần tử của mảng a 
const tongall = a.reduce((tong,item)=>{
    return tong+item
},0)
console.log(tongall);
