// Set : Đối tượng lưu trữ giá trị trong js,
// mà những giá trị này nó là duy nhất(không trùng lặp)
// cú pháp: 
// const set = new Set()   // tạo ra 1 set rỗng
// // // const set = new Set(array) : Tạo ra set từ mảng
// // const set2 = new Set([7,5,6,6,6,6,6,6,6])
// // console.log(set);
// // console.log(set2);
// // // Phương thức và thuộc tính 
// // // - thêm giá trị vào Set: set.add(value)
// set.add(6)
// set.add(7)
// set.add(9)
// set.add(2)
// set.add(1)
// set.add(6)
// // console.log(set);
// // // Xóa giá trị trong Set: set.delete(value)
// // set.delete(7)
// // console.log(set);
// // //Xóa hết: set.clear()
// // // set.clear()
// // // console.log(set);
// // // Kiểm tra giá trị có tồn tại trong Set hay không: set.has(value)=>true or false
// // console.log(set.has(9));
// // // Đến số lượng giá trị trong Set: set.size
// // console.log(set.size);
// // Đặc điểm set: Không truy cập được trực tiếp giá trị trong set, nhưng
// // có thể duyệt set thông qua for 
// for (item of set){
//     console.log(item);    
// }
// // Có thể sử dụng spread để chuyển set về mảng
// const a = [...set]
// console.log(a);

// // Ứng dụng:
// const banthang = ["Ngọc","Minh","Ngọc","An","Ngọc"]
// // const cauthu = []
// // for(item of banthang){
// //     if (cauthu.indexOf(item)==-1){
// //         cauthu.push(item)
// //     }
// // }
// // console.log(cauthu);
// const setcauthu = new Set(banthang)
// const cauthu = [...setcauthu]
// console.log(cauthu);

// // // Map: Đối tượng lưu trữ trong js. Tập hợp các cặp key-value
// const map = new Map()
// // Phương thức và thuộc tính:
// // - Thêm cặp giá trị vào map: map.set(key,value)
// map.set("name","Ngọc")
// map.set("age",20)
// map.set("address","Thái Nguyên")
// map.set("married",true)
// console.log(map);
// // Truy cập giá trị trong Map: map.get(key)
// const name = map.get("name")
// console.log(name);
// // Xóa cặp key-value: map.delete(key)
// map.delete('married')
// console.log(map);
// // - Ktra key có tồn tại trong Map: map.has(key) => true or false 
// console.log(map.has('age'));
// // Xóa toàn bộ key-value trong Map: map.clear()
// // map.clear()
// // console.log(map);
// // Ktra có bao nhiêu cặp key-value: map.size 
// console.log(map.size);
// Arrow function 
// function tenham(thamso){
//     // todo something 
// }
// const tenham = (thamso)=>{
//     // todo something 
// }
// - Trong hàm chỉ có 1 khối lệnh 
// const tinhtong = (a,b)=>a+b 
// // thay vì 
// // function tinhtong(a,b){
// //     return a+b
// // }
// // - Trong hàm chỉ có 1 tham số 
// const tenham =a=>{
//     // todo something
// }
// hàm không có tham số và 1 khối lệnh 
// const display = ()=>console.log(`Hello world!`);
// display()
// // Tham số mặc định (Default Parameter): Đặt giá trị mặc định cho tham số, khi gọi hàm
// // nếu truyền giá trị cho tham số thì tham số sẽ nhận giá trị truyền vào
// // nếu không truyền thì nó sẽ nhận giá trị mặc định
// const tinhtong = (a,b=5)=>a+b 
// const tong = tinhtong(5,8)
// console.log(tong);
// Lưu ý:  Tham số mặc định phải nằm sau cùng các tham số thông thường
// VD: với hàm tính tổng trên không thể đặt như sau: 
// const tinhtong= (b=5,a)=>a+b
// Hàm callback: một hàm sẽ đóng vai trò là tham số của một hàm khác 
// VD:
// const display = (callbackFn)=>{
//     const a =6,b=8
//     console.log(`Tổng a+b là ${callbackFn(6,8)}`);
// }
// display(tinhtong)
// const display = (a,b,cb)=>{
//     console.log(`Tổng ${a} + ${b} = ${cb(a,b)} `);
// }
// display(8,9,tinhtong)

// Hàm return hàm: Khi gọi hàm thì kết quả trả về là 1 hàm được return 
// trong hàm được gọi 
// a return b 
// const c = a()
// c  <=> b
// const dientich = ()=>{
//     return ()=>{
//         return 10
//     }
// }
// const display = dientich()
// // display = 10
// // // display()
// const display2 = ()=>{
//     return 10
// }
// // display <=> display2
// console.log(display2())
// console.log(display())

// Gọi hàm ngay lập tức (IIFE): 
// const tinhtong = (a,b)=>console.log(a+b);
// tinhtong(5,6)
// dùng iife như sau: 
// ((a,b)=>console.log(a+b))(5,6)
// Thao tác với mảng 
        //    0 1 2 3  4 5
const a = [7,8,5,6,10,9]
// - Duyệt mảng
// - forEach 
a.forEach((item,index)=>{
    console.log(`Chỉ số: ${index} - Giá trị ptu: ${item} `);    
})
// Đặc điểm: Nó sẽ không dừng được (k dùng đc break;continue) 
// cho đến khi duyệt hết mảng
// VD: Đến số lượng phần tử đứng trước 5 trong mảng a 
// let dem = 0
// for (item of a){
//     if (item==5){
//         break;
//     }
//     dem++
// }
// console.log(dem);

// K dùng được như sau:
// let dem = 0
// a.forEach((item,index)=>{
//     if (item == 5){
//         break;
//     }
//     dem++
// })

// console.log(dem);
// map: Tạo ra mảng mới từ những phần tử của mảng gốc sau khi xử lý logic
// phần tử mảng gốc mà không làm thay đổi mảng gốc 
// VD: Tạo ra 1 mảng b với các phần tử có giá trị là phần tử mảng a+5 đơn vị
// nghĩa là b = [12,13,10,11,15,14]
// const b = a.map((item,index)=>{
//     return item+5  // Return giá trị
// })
// rút gọn 
const b = a.map(item=>item+5)
console.log(b);
// filter (lọc): Tạo ra mảng mới với các phần tử phù hợp với điều kiện nào
// đó của mảng gốc mà không làm thay đổi mảng gốc 
// VD: tạo ra mảng mới chỉ bao gồm những phần tử lẻ của mảng a 
// const c = a.filter((item,index)=>{
//     return item%2==1 // Return điều kiện
// })
// Rút gọn 
const c = a.filter(item=>item%2==1)
console.log(c);
// reduce: Tạo ra 1 giá trị được tích lũy từ những lần duyệt phần tử của mảng
// gốc 
// VD: Tính tổng các phần tử của mảng a 
let tong = 10
for (item of a){
    tong = tong+item
}
console.log(tong);
 
// const tongphantu = a.reduce(hàm callback,giá trị khởi tạo)
const tongphantu = a.reduce((tong,item,index)=>{
    return tong+item
},10)
console.log(tongphantu);
