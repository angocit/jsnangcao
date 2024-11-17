// Set : Đối tượng lưu trữ giá trị trong js, lưu trữ giá trị (bất kì kiểu dl nào)
//  là duy nhất (không trùng lặp)
// const set = new Set()  // Khởi tạo set rỗng
// const set2 = new Set([8,9,6])  // Tạo set từ mảng
// console.log(set);
// console.log(set2);

// // Phương thức & Thuộc tính của set
// // - THêm giá trị vào set: set.add(value)
// set.add(10)
// set.add(7)
// set.add(9)
// set.add(5)
// set.add(5)
// set.add(5)
// set.add(5)
// set.add(5)
// console.log(set);
// // - Xóa giá trị trong set: set.delete(value)
// set.delete(5)
// console.log(set);
// //xóa hết: set.clear()
// // set.clear()
// // console.log(set);
// // Ktra giá trị có tồn tại trong Set hay không: set.has(value) =>true or false
// console.log(set.has(10));
// // Kiểm tra số lượng giá trị đc lưu trữ trong set: set.size
// console.log(set.size);
// // Không truy cập được trực tiếp giá trị trong set, nhưng có thể
// // duyệt set bằng for 
// console.log(`----------------------`);

// // for (item of set){
// //     console.log(item);    
// // }
// // Chuyển set => array bằng spread
// const a = [...set]
// console.log(a[1]);
// // Ứng dụng: lưu trữ
// // -> lọc trùng 
// const banthang = ["Ngọc","An","Ngọc","Minh","Ngọc"]
// // Liệt kê danh sách cầu thủ ghi bàn
// // let cauthu = []
// // for (item of banthang){
// //     if (cauthu.indexOf(item)==-1){
// //         cauthu.push(item)
// //     }
// // }
// // console.log(cauthu);
// const setbanthang = new Set(banthang)
// const cauthu = [...setbanthang]
// console.log(cauthu);
// // Map: Đối tượng lưu trữ trong js. Lưu trữ theo cặp key-value
// const map = new Map()
// // PHương thức & Thuộc tính 
// // Thêm cặp giá trị: map.set(key,value)
// map.set("name","Ngọc")
// map.set("age",20)
// map.set("address","Thái Nguyên")
// map.set("married",true)
// console.log(map);
// // truy cập giá trị của map thông qua key: map.get(key)
// const name = map.get("name")
// console.log(name);
// console.log("get k ton tai",map.get("sdfsadfsad"));

// // Xóa cặp key value: map.delete(key)
// map.delete("married")
// console.log(map);
// // Xóa hết: map.clear()
// // map.clear()
// // console.log(map);
// // kiểm tra key tồn tại trong map hay không: map.has(key)=> true or false
// console.log(map.has("married"));
// // Thống kê số lượng cặp key-value: map.size
// console.log(map.size);
// // Ứng dụng: - Lưu trữ
// // - đc thiết kế để truy cập giá trị linh hoạt so với object 
// // VD: đếm số lượng từ xuất hiện trong chuỗi
// const str = "xin chào hôm nay là chủ nhật. chào cả lớp là chào"
// const strarr = str.split(' ')
// const mapstr = new Map()
// for (text of strarr){
//     // Nếu chưa xuất hiện thì set =1
//     // xuất hiện rồi thì + 1
//     mapstr.set(text, (mapstr.get(text)||0)+1)
// }
// console.log(mapstr.get("là"));
// Arrow function
// function tenham(thamso){
//     // todo 
// }
// const tenham = (thamso)=>{
//     // todo 
// }
// Trong hàm có 1 khối lệnh
// const tinhtong = (a,b)=>console.log(a+b);
// tinhtong(5,10)
// // Trong hàm chỉ có 1 tham số
// const display = a=>console.log(`Tham số là ${a}`);
// display(10)
// // Hàm không có tham số
// const display1 =()=>console.log(`Hello world`);
// display1()
// default parameter (tham số mặc định): Đặt giá trị cho tham số của hàm
// Khi gọi hàm, nếu truyền giá trị cho tham số thì tham số nhận giá trị truyền vào
// còn nếu không truyền thì nhận giá trị mặc định
// const tinhtong =(a,b=5)=>console.log(a+b);
// tinhtong(8,10)
// Lưu ý: tham số mặc định phải nằm sau cùng tham số thông thường
// VD: với hàm tính tổng trên Chúng ta không thể viết dạng 
// const tinhtong =(a=5,b)=>console.log(a+b);
// Hàm callback: một hàm sẽ đóng vai trò là tham số của một hàm khác
// VD: 
// const tinhtong =(a,b=5)=>a+b;
// const display = (a,b,callbackFn)=>{
// // Template string: Có thể viết cả chuỗi,biến,hàm trong dấu backtick (`)
//   console.log(`Tổng ${a}+${b} = ${callbackFn(a,b)}`);
  
// }
// display(7,8,tinhtong)

// // Hàm return hàm: Thay vì return ra giá trị thì hàm return ra 1 hàm khác
// // giá trị được gán khi gọi hàm sẽ đóng vai trò là hàm được return
//  const dientich = (dai,rong)=>{
//     const tich = dai*rong 
//     return (cao)=>{
//         console.log(`Thể tích là: ${tich*cao}`);
//     }
//  }
//  const thetich = dientich(6,10)
//  thetich(10)

 // Gọi hàm ngay lập tức (IIFE)
//  const tinhtong = (a,b)=>console.log(`tổng là: ${a+b}`);
//  tinhtong(5,6)
//  Thay vì viết như trên thì có thể sử dụng IIFE như sau: 
// ((a,b)=>console.log(`tổng là: ${a+b}`))(5,6)
// Mảng
const a = [7,8,9,6,10]
// Duyệt mảng :
// forEach 
a.forEach((item,index)=>{
    //todo something
    console.log(`Chỉ số ptu: ${index} - Giá trị: ${item}`);    
})
// Lưu ý: Không dừng (k sử dụng break hoặc continue như for thông thường) cho đến khi duyệt hết mảng
// - map: tạo ra mảng mới: các ptu mảng mới sẽ có giá trị phụ thuộc vào
// việc xử lý logic trên phần tử mảng gốc. KHông làm thay đổi mảng gốc 
// VD: tạo ra mảng b với các phần tử có giá trị là phần tử ở mảng a+ 5 đơn vị
// const b = a.map((item,index)=>{
//     return item+5 // Return giá trị
// })
// rút gọn 
const b = a.map(item=>item+5)
console.log(b);
// Filter(lọc): Tạo ra mảng mới, những phần tử ở mảng mới sẽ phù hợp với điều
// kiện nào đó của mảng gốc
// - Không làm thay đổi mảng gốc 
// VD: tạo ra mảng c chỉ bao gồm những phần tử lẻ của mảng a 
const c = a.filter((item,index)=>{
    return item%2==1   // Return điều kiện
})
console.log(c);
// reduce: Tạo ra giá trị tích lũy của mảng sau mỗi lần lặp.
// VD: Tính tổng các phần tử mảng a 
// cú pháp: array.reduce(hamfcallback,giá trị khởi tạo)
const tongphantu = a.reduce((tong,item,index)=>{
    return tong+item
},0)
console.log(tongphantu);
