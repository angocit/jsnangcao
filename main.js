// // Set : Đối tượng lưu trữ giá trị trong js, mà những giá trị này nó là duy nhất(không trùng lặp)
// // // Cú pháp:
// const set = new Set();
// // Có thể khởi tạo set từ array 
// const set2 = new Set([4,8,9,10,33])
// console.log(set);
// console.log(set2);
// // Các phương thức và thuộc tính của set
// // - Thêm giá trị vào set: set.add(value)
// set.add(5)
// set.add(8)
// set.add(10)
// set.add(9)
// console.log(set);
// // - Xóa giá trị của set: set.delete(value)
// set.delete(10)
// console.log(set);
// // Xóa toàn bộ: set.clear()
// // set.clear()
// // console.log(set);
// // Ktra giá trị có tồn tại trong set hay không: set.has(value) => true or false 
// // console.log(set.has(5));
// // ktra số lượng phần tử trong set: set.size 
// console.log(set.size);
// // Đặc điểm của Set: Không truy cập được trực tiếp giá trị của Set nhưng có thể duyệt set
// // thông qua for
// for (item of set){
//     console.log(item);    
// }
// // - Có thể sử dụng spread để chuyển đổi set =>mảng 
// const a = [...set]
// console.log(a);
// // Ứng dụng: lọc phần tử trùng nhau của mảng
// const banthang = ["Ngọc","Minh","Ngọc","Ngọc","An"]
// // => đưa ra danh sách những cầu thủ ghi bàn từ mảng bàn thắng. 
// // const cauthu = []
// // for (ghiban of banthang){
// //     if (cauthu.indexOf(ghiban)==-1){
// //         cauthu.push(ghiban)
// //     }
// // }
// // console.log(cauthu);
// const setcauthu = new Set(banthang)
// const cauthu = [...setcauthu]
// console.log(cauthu);
// // Map: Là đối tuowgj lưu trữ js, lưu theo cặp giá trị key-value.
// // Cú pháp:
// const map = new Map();
// // Các phương thức và thuộc tính của Map
// // thêm cặp giá trị: map.set(key,value)
// map.set("name","Ngoc")
// map.set("married",true)
// map.set("age",20)
// map.set("address","Thái Nguyên")
// console.log(map);
// // Lấy giá trị thông qua key: map.get(key)
// const name = map.get("name")
// console.log(name);

// // Xóa cặp giá trị thông qua key: map.delete(key)
// map.delete("address")
// console.log(map);
// // Xóa tất: map.clear()
// // map.clear()
// // console.log(map);
// // Ktra key có tồn tại trong map hay không: map.has(key) =>true or false
// console.log(map.has("name"));
// // Đếm số lượng các cặp giá trị trong Map: map.size 
// console.log(map.size);
// Làm việc với hàm
// Arrow function (hàm mũi tên)
// function tenham(thamso){
//     //todo something
// }
// const tenham = (thamso)=>{
//     //todo something
// }
// - Khi trong hàm chỉ có 1 khối lệnh
// const tinhtong = (a,b)=>a+b
// // - Khi hàm chỉ có 1 tham số và 1 khối lệnh 
// const binhphuong=a=>a*a 
// // Khi hàm không có tham số
// const display = ()=>console.log(`Hello world`);
// display()
// Tham số mặc định (Default parameter)
// const display = (tinh,huyen="Chưa xác định")=>console.log(`Địa chỉ: huyện: ${huyen} - tỉnh: ${tinh} `);
// display("Thái Nguyên")

// // Callback: hàm sẽ đóng vai trò là 1 tham số của 1 hàm khác
// const dientich = (dai,rong)=>dai*rong
// const thetich = (dai,rong,cao,callbackFn)=>{
//     const dientich = callbackFn(dai,rong)
//     console.log(`Thể tích khối lập phương là: ${dientich*cao}`);
// }
// thetich(10,5,10,dientich)
// Hàm return hàm
// const thetich = (dai,rong)=>{
//     const dientich = dai*rong
//     return (cao)=>console.log(`Thể tích là: ${dientich*cao}`);
// }
// const abc = thetich(5,10)
// // Lúc này:abc có vai trò như hàm được return từ hàm thetich
// abc(5)
// IIFE : Gọi hàm trực tiếp
// const tinhtong = (a,b)=>console.log(a+b);
// tinhtong(5,10)
// ((a,b)=>console.log(a+b))(5,10)
// Làm việc với mảng 
const menu = ["Cơm","Canh","Cá","Rau","Thịt"]
// forEach
console.log(`MENU`); 
menu.forEach((item,index)=>{
    console.log(`${index+1}. ${item}`);   
})
// Không dừng cho đến khi duyệt hết mảng.
// map: Tạo ra 1 mảng mới dựa trên giá trị (có thể xử lý logic) từ các phần tử của mảng cũ
// Nhưng không làm thay đổi mảng gốc
const a = [8,10,2,6,7]
// =>Tạo ra 1 mảng mới với các phần tử có giá trị là phần tử của mảng a + 5 đơn vị
// const b = a.map((item,index)=>{
//     return item+5 // Return giá trị
// })
// rút gọn:
const b = a.map(item=>item+5)
console.log(b);
// Filter: cũng tạo ra 1 mảng mới dựa vào điều kiện nào đó của mảng gốc
// mà không làm thay đổi mảng gốc
// VD: tạo ra 1 mảng mới bao gồm những phần tử chẵn của mảng a 
// const c = a.filter((item,index)=>{
//     return item%2==0  // Return điều kiện
// })
// Rút gọn: 
const c = a.filter(item=>item%2==0)
console.log(c);

// reduce: Tạo ra một giá trị được tích lũy dựa vào viiejc xử lý logic
// các phần tử trong mảng
// VD: tính tổng các phần tử trong mảng a 
// let tong =0
// for (item of a){
//     tong+=item
// }
// console.log(tong);
//a.reduce(hàm callback, giá trị khởi tạo)
const tonggiatri = a.reduce((tong,item,index)=>{
    return tong+item
},0)
console.log(tonggiatri);
