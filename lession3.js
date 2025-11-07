// Optional Chaining 

// const students = [
//     {
//         id:1,
//         name:"SV1",
//         age: 20,
//         address: {
//             province:"Thai Nguyên",
//             ward:"Vô Tranh"
//         }
//     },
//     {
//         id:2,
//         name:"SV2",
//         age: 20
//     },
//     {
//         id:3,
//         name:"SV3",
//         age: 20,
//         address: {
//             province:"Hà Nội",
//             ward:"Cầu Giấy"
//         }
//     }
// ]
// for (student of students){
//     console.log(`Họ tên là: ${student.name} 
//         Tỉnh: ${student.address?.province||"Không XĐ"}`);
    
// }

// Set : Lưu trữ những giá trị là duy nhất (không trùng nhau)
// Khởi tạo set 
const set = new Set()
// Thêm phần tử vào set.add(value)
set.add(5)
set.add(6)
set.add(5)
set.add(9)
console.log(set);
// Xóa: set.delete(value)
set.delete(5)
// Xóa toàn bộ: set.clear()
// set.clear()
console.log(set);
// Kiểm tra giá trị có trong set: set.has(value)
console.log( set.has(6));
// Số lượng phần tử trong set: set.size
console.log(set.size);
// Tạo set từ mảng 
const a = [5,8,2,5,9,10]
const set2 = new Set(a)
console.log(set2);


// Thay vì dùng cả đoạn này để lọc trùng
// -------START------------------------
// const b = []
// function checkItemIsset(arr,i){
//     let check = false 
//     for (item of arr){
//         if (item==i){
//             check = true ;
//             break;
//         }
//     }
//     return check
// }
// // dùng for để lọc 
// for (i of a){
//     // if (b.findIndex(function (item){return item==i})==-1){
//     //     b.push(i)
//     // }
//     if (!checkItemIsset(b,i)){
//         b.push(i)
//     }
// }

//-------------END---------------------------------
// Thì chỉ cần tạo set từ mảng là lọc được trùng 
// const b = new Set(a)
// console.log(b);
// // Lưu ý: Không thể truy cập được trực tiếp phần tử trong Set
// // chỉ có thể lấy phần tử thông qua cách duyệt set bằng for of 
// // VD:
// for (item of set2){
//     console.log(item);    
// }
// // Có thể chuyển từ set qua mảng bằng spread
// const newarr = [...set2]
// console.log(newarr);

// Map : Lưu những giá trị theo cặp (key,value)
// Cú pháp
const map = new Map()
// Thêm giá trị vào map map.set(key,value)
map.set("name","Ngọc")
map.set("age",20)
console.log(map);
// Lấy giá trị của key,value: mat.get(key)
// console.log(map.get("name"));
// Xóa key: map.delete(key)
// map.delete("age")
// Xóa toàn bộ: map.clear()
// map.clear()
// Đếm số lượng cặp key-value : map.size 
// Kiểm tra key có tồn tại hay không: map.has(key)
console.log(map.has("age"));

console.log(map.size);

