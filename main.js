// Spread & Rest  
// ... Three dot 
// Spread: DÙng để copy hoặc mở rộng phần tử của mảng hoặc thuộc tính của đối tượng
// - Mảng 
// const a = [5,8,9,2]
// const b = [...a]
// // đặc điểm: không làm thay đổi mảng gốc 
// // b.push(8)
// // console.log('mang b',b);
// // console.log('mang a',a);
// // Mở rộng 
// const c = [...a,48,5,6,20,1,7]
// console.log(c);
// Với dối tượng (object)
// const person = {
//     name:"Ngoc",
//     age:20
// }
// // const person2 = {...person}
// // console.log(person2);
// // Mở rộng 
// // const person3 = {...person,address:"Thái Nguyên"}
// // console.log(person3);
// // thay đổi giá trị của đối tượng
// const person4 = {...person,age:person.age+1}
// console.log(person4);
// Rest: Gom các phần tử thành mảng=> Rest đóng vai trò là tham  số của hàm
// const tinhtongnha = (nha1,nha2,nha3,nha4)=>{
//     return nha1+nha2+nha3+nha4
// }
// const tongdientich = (...hodan)=>{
//     let tong = 0
//     for(dientich of hodan){
//         tong+=dientich
//     }
//     console.log(tong);    
// }
// tongdientich(10,50,40,15,70)
// Short circuiting
// Falsy Value 
// false
// 0
// ""
// null
// undefined
// NaN : Not a number 
// AND (&&) và OR (||)
// OR: Duyệt từ trái qua phải, nếu gặp falsy value thì bỏ qua duyệt giá trị
// tiếp theo cho đến khi gặp giá trị KHÔNG PHẢI là falsy value thì dừng và 
// nhận giá trị đó. Trong trường hợp tất cả đều là falsy value thì lấy giá trị 
// cuối cùng  
// const a = false||0||""||null||undefined
// console.log(a);
// Ứng dụng: Đặt giá trị mặc định cho biến

// const Check=()=>{
//     const input = document.querySelector('input').value
//     // let address = 'Hà Nội'
//     // if (input!==''){
//     //     address=input
//     // }
//     // console.log(address);    
//     const address = input||"Hà Nội"
//     console.log(address);
    
// }
// Biểu thức AND: Tương tự biểu thức OR đều duyệt từ trái qua phải
// và đều so sánh với falsy value 
// Tuye nhiên, nếu gặp falsy value thì dừng, nếu gặp giá trị KHÔNG PHẢI
// falsy value thì bỏ qua duyệt giá trị tiếp theo cho đến khi gặp falsy value 
// Trong trường hợp tất cả đều KHÔNG PHẢI Falsy value thì lấy giá trị cuối cùng
// const a = "Ngoc"&&10&&0&&false 
// console.log(a);
// // Ứng dụng
// // -> Validate : email đúng định dạng và mật khẩu lớn hơn 6 kí tự 
// const validate = (email,password)=>{
//     // if (email.indexOf('@')==-1||email.indexOf('.')==-1||password.length<6){
//     //     return false
//     // }
//     // else return true
//                     // true           true                     true
//     return email.indexOf('@')>-1&&email.indexOf('.')>-1&&password.length>5
// } 
// validate('angocit','123456')  không pass  
// validate('angocit@','123456')  không pass  
// validate('angocit@gmail.com','123456')  pass   
// Nullish: Tương tự như biểu thức or nhưng thay vì so sách với các giá trị
// falsy value thì chỉ so sánh với null và undefined
// Cú pháp:
// const a = null??undefined??0??"Ngoc"
// console.log(a);
const wd19303 = [
    {
        name:"SV1",
        age:20,
        address: {
            provice:"Thái Nguyên",
            district:"Sông Công"
        }
    },
    {
        name:"SV2",
        age:20,
        address: {
            provice:"Hà Nội",
            district:"Cầu Giấy"
        }
    },
    {
        name:"SV3",
        age:20
    }
]
// In ra danh sách sinh viên trong lớp
for (sinhvien of wd19303){
    console.log(`
    Tên SV: ${sinhvien.name}  - Tuổi: ${sinhvien.age} - Quê quán: ${sinhvien.address?.provice??'Chưa xác định'}   
        `);
    
}

