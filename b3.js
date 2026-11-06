// Falsy Value: Giá trị khi chuyển về boolean thì nhận giá trị false
//  - null
//  - ''
//  - undefined
//  - 0
//  - false
//  - NaN 
// truthy: Những giá trị không phải falsy value
// Biểu thức AND &&
// Cách thức hoạt động: Duyệt từ trái qua phải, nếu gặp giá trị là truthy thì sẽ bỏ qua, 
// duyệt phần tử tiếp theo cho đến khi gặp falsy value thì dừng và nhận giá trị falsy value.
// Trong trường hợp tất cả giá trị đều là truthy thì sẽ nhận giá trị cuối cùng 
const a = "Ngoc"&&10&&0&&"AN"&&false 
console.log(a); // 0
const b = "Ngoc"&&"An"&&10&&20
console.log(b);  //20
// Ứng dụng: Thực hiện hành động hoặc lấy giá trị khi cần kiểm tra nhiều điều kiện liên tiếp nhau
// Ví dụ: thay vì câu lệnh if thì có thể dùng toán tử AND 
// if (điều kiện 1 && điều kiện 2 && điều kiện 3) {
//     // todo something 
// } 
// Thì có thể thay thế bằng
// điều kiện 1&&điều kiện 2&&điều kiện 3&&todo 
// thực tế:
const user = {
    id:1,
    age:20,
    role: 'admin',
    name: 'Ngọc'
}
// In ra tên người dùng nếu có role là admin và tuổi <30
user.role=='admin'&&user.age<30&&console.log(user.name);
        // true            true            Ngọc
// OR || 
// Cách thức hoạt động: Duyệt từ trái qua phải, nếu gặp falsy value thì bỏ qua, duyệt phần tử tiếp theo, nếu gặp truthy thì dừng, trường hợp tất cả phần tử đều là falsy value thì sẽ nhận giá trị cuối cùng
// const title = "Minh"||0||"An"||false||undefined
// console.log(title);
const title = ""||0||"An"||false||undefined
console.log(title);
// Ứng dụng: Sử dụng để gán giá trị mặc định cho biến
// Ví dụ: CHo 1 form nhập liệu gồm 2 thông tin: Họ tên, địa chỉ. Khi submit form nếu người dùng không nhập địa chỉ thì lấy địa chỉ là "Không xác định"
function submit(){
    const name = document.getElementById("name").value 
    const address = document.getElementById("address").value||"Không xác định"
    console.log({name,address});    
}
// Nullish ??: Hoạt động tương tự biểu thức OR nhưng các phần tử không phải so sánh với falsy value mà chỉ so sánh với null và undefined
// Cú pháp
const title2 = null??undefined??0??"CDE"
console.log(title2); // 0
// Ứng dụng: Dùng để đặt giá trị mặc định cho biến

// Optional Chaining ?.: Cho phép truy cập thuộc tính của 1 giá trị không tồn tại (trả về undefined) mà không gây lỗi
// Ví dụ
const students = [
    {
        name:"sv1",
        address: {
            provice:"Thái Nguyên",
            ward:"ABC"
        }
    },
    {
        name:"sv2",
        address: null
    },
    {
        name:"sv3",
        address: {
            provice:"Hà Nội",
            ward:"ABC"
        }
    }
]
// Hiển thị danh sách sinh viên bao gồm tên và tỉnh thành
for (sv of students){
    console.log(`
        Họ tên: ${sv.name}
        Tỉnh: ${sv.address?.provice||"Chưa xác định"}
        `);
    
}