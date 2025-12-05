// // Class
// class Person {
//     constructor(){
//         this.address = "Thái Nguyên"
//     }
//     name = "Ngoc"
//     age = 20
//     Display (value){
//         console.log(`Xin chào,${value}`);        
//     }
//     Display2(){
//         this.Display(this.name)
//     }
// }

// const p = new Person()
// p.Display2()
// // this
// // mUốn khởi tạo giá trị cho đối tượng khi tạo mới đối tượng 
// // sử dụng constructor 
// console.log(p.address);
// Khởi tạo đối tượng có tham số truyền vào 
class Person {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address = address
    }
}
// const person1 = new Person("Ngoc",30,"THái Nguyên")
// const person2 = new Person("An",20,"Hà Nội")
// console.log(person1.address);
// console.log(person2.address);

// Tính kế thừa => tạo đối tượng mới kế thùa những
// phương thức và thuộc tính đã có của đối tượng cũ 
// VD :
// class newPerson extends Person{    
//     constructor(){
//         super("Ngoc",30,"THái Nguyên") // Khởi tạo đối tượng cha
//         this.classname = "ABC"
//     }
// } 
// const person = new newPerson()
// console.log(person.name);
// console.log(person.age);
// console.log(person.address);
// ứng dụng thực tế : Tạo class để thực hiện việc CRUD

class CRUDProduct {
    constructor(url) {
        this.API = url
    }
    AddProduct = async (data) => {
        try {
            await fetch(this.API, {
                method: 'POST',
                headers: { 'Content-type': 'Application/json' },
                body: JSON.stringify(data)
            })
        } catch (error) {
            throw error
        }
    }
    GetAllProduct = async () => {
        try {
            const res = await fetch(this.API)
            if (!res.ok) throw await res.json()
            return await res.json()
        } catch (error) {

        }
    }
    handleDelete = async (id) => {
        if (!confirm("Bạn chắc chứ?")) return;
        try {
            const res = await fetch(`${this.API}/${id}`, { method: 'DELETE' })
            if (!res.ok) throw "Lỗi"
            alert("Xóa thành công")
        } catch (error) {
            alert("Xóa thất bại")
        }
    }
    RenderProduct = (productArr) => {
        // Truy cập vào tbody
        const tbody = document.querySelector("tbody")
        // Duyệt mảng để hiển thị
        tbody.innerHTML = productArr.map(({ id, name, image, price }, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                <td><img width="90" src="${image}"/></td>
                <td>${price}</td>
                <td>
                    <a href="edit.html?id=${id}">Sửa</a>
                    <button onclick="handleDelete(${id})">Xóa</button>
                </td>
            </tr>
        `
        }).join("")
    }
}
 const crudproduct = new CRUDProduct("http://localhost:3000/products")
 const init = async ()=>{
    const data = await crudproduct.GetAllProduct()
    // console.log(data);  
    crudproduct.RenderProduct(data)  
 }
 init()