// Set: Dùng để lưu trữ những giá trị là duy nhât (không trùng lặp)
// Cú pháp: const set = new Set()
const set = new Set()
// 1 số phương thức và thuộc tính của Set
// Thêm phần tử vào set: cú pháp: set.add(value)
set.add(5)
set.add(6)
set.add(5)
set.add(8)
set.add(10)
console.log(set);
// Xóa phần tử set. set.delete(value)
set.delete(5)
console.log(set);
// xóa tất cả phần tử: set.clear()
// set.clear()
// console.log(set);
// Kiểm tra phần tử có tồn tại trong set hay không. set.has(value)=> trả về boolean
console.log(set.has(5)); // false
console.log(set.has(6)); // true
// kiểm tra số lượng phần tử trong Set: set.size
console.log(set.size);
// Tạo Set từ mảng 
const a = [8,5,5,8,2,9,1]
const set2 = new Set(a)
console.log(set2);
// Đặc điểm: Không thể truy cập trực tiếp được vào phần tử của set. nhưng có thể sử dụng for để duyệt từng phần tử hoặc chuyển set về array bằng cú pháp spread
// Ví dụ:
for (item of set2){
    console.log(item);    
}
const arr = [...set2]
console.log(arr);
// Ứng dụng: lọc trùng
// Nhập tên công việc vào ô input sau đó hiển thị ra màn hình ở vị trí content danh sách những tên đã nhập vào, cái nào đã nhập rồi thì không hiển thị ra nữa
// const todoform = document.getElementById("todo")
// const todoset = new Set()
// // Bắt sự kiện submit
// todoform.addEventListener("submit",(e)=>{
//     e.preventDefault() // Ngăn trình duyệt chuyển hướng
//     // Lấy giá trị từ input
//     const todo = document.getElementById("name").value || "Chưa xác định"
//     // Đưa vào set
//     todoset.add(todo)
//     // Hiển thị ra content
//     // const content = document.getElementById("content")
//     // // duyệt set để hiển thị
//     // let html = ''
//     // for(item of todoset){
//     //     html += `<p>${item}</p>`
//     // }
//     // content.innerHTML= html
//     render(todoset)
// })
// const render = (set)=>{
//     const content = document.getElementById("content")
//     // duyệt set để hiển thị
//     let html = ''
//     for(item of set){
//         html += `<p>${item}</p>`
//     }
//     content.innerHTML= html
// }
// Map: Dùng để lưu trữ theo cặp giá trị key, value: key có thể là bất kì loại dữ liệu nào
// Cú pháp: const map = new Map()
const map = new Map()
// Một số phương thức và thuộc tính của Map
// Thêm cặp giá trị: map.set(key,value)
map.set("name","Ngọc")
map.set("age",40)
map.set("address","Thái Nguyên")
console.log(map);
// Lấy giá trị của key trong Map: map.get(key)
const name = map.get("name")
console.log(name);
// Xóa cặp giá trị: map.delete(key)
map.delete("age")
console.log(map);
// Xóa hết: map.clear()
// map.clear()
// console.log(map);
// Ktra key có tồn tại trong map: map.has(key)=> trả về boolean
console.log(map.has("age")); // false
console.log(map.has("name")); // true 
// Số lượng key-value trong map: map.size
console.log(map.size);
// Bài tập ví dụ:
// Cho đoạn văn sau: Cựu CEO Nvidia Jensen Huang từng có quan hệ thân mật với một nhân viên khác tại Nvidia, tờ Forbes và Business Insider cùng dẫn lại thông tin từ Reuters. Chỉ mới hôm qua, The New York Times vừa đưa tin ông Huang có quan hệ không trong sáng với một nữ lãnh đạo dưới quyền cũng tại công ty.
// Đếm số lần xuất hiện trong content của từ được nhập ở ô input khi nhấn submit
// 1: truy cập content
const content = document.getElementById("content").innerText 
// console.log(content);
// Tách từng từ ra
const contentarr = content.split(" ")
// đưa từng từ map và set giá trị
const contentmap = new Map()
for (item of contentarr){
    // kiểm tra trong map có key nào theo từ xuất hiện hay không
    if (contentmap.has(item)){
        // Xuất hiện thì tăng giá trị lên 1 đơn vị
        contentmap.set(item,contentmap.get(item)+1)
    }
    else {
        contentmap.set(item,1) // Chưa có thì đặt giá trị là 1
    }
}
const todoform = document.getElementById("todo")
// Bắt sự kiện submit
todoform.addEventListener("submit",(e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    // Lấy giá trị từ input
    const todo = document.getElementById("name").value
    // Get key theo todo
    alert(contentmap.get(todo)??0)
})