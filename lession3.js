// const students = [
//     {
//         id:1,
//         name:"SV 1",
//         age: 20,
//         address: {
//             province:"Thái Nguyên",
//             Ward:"Phú Lương"
//         }
//     },
//     {
//         id:2,
//         name:"SV 2",
//         age: 21,
//         address: {
//             province:"Hà Nội",
//             Ward:"Cầu Giấy"
//         }
//     },
//     {
//         id:3,
//         name:"SV 3",
//         age: 20,
//         address: null
//     },
//     {
//         id:4,
//         name:"SV 4",
//         age: 20,
//         address: {
//             province:"Hải Phòng",
//             Ward:"An Dương"
//         }
//     }
// ]
// for (sinhvien of students){
//     console.log(`
//         Họ tên: ${sinhvien.name}
//         Tỉnh: ${sinhvien.address?.province||"Không xác định"}
//         `);
    
// }

// Set: Lưu trữ những giá trị là duy nhất (không trùng nhau)
// Cú pháp:
const set = new Set()
// 1 số phương thức và thuộc tính:
// Thêm ptu vào Set: set.add(value)
set.add(5)
set.add(7)
set.add(9)
set.add(5)
console.log(set);
// Xóa ptu trong Set: set.delete(value)
set.delete(5)
console.log(set);
// Xóa toàn bộ: set.clear()
// set.clear()
// Ktra giá trị có tồn tại trong Set: 
// set.has(value)=>boolean
console.log(set.has(7));
// Trả về số lượng ptu trong Set: set.size

console.log(set.size);
// Lưu ý: - K thể truy cập đc ptu trog set
// Nhưng có thể duyệt Set = for
for (item of set){
    console.log(`Giá trị: ${item}`);    
}
// Tạo set từ mảng và tạo mảng từ set
console.log(`---TẠO SET TỪ MẢNG---`);

const a = [6,3,4,8,6,6,10]
const set2 = new Set(a)
console.log(set2);
console.log(`---TẠO MẢNG TỪ SET---`);
const b = [...set2]
console.log(b);
// Ứng dụng: Lọc trùng, ktra ptu


