// OOP 
// class Person {
//     constructor(){
//         this.name = "Ngọc"
//         this.age = 20
//     }
// }

// const sv = new Person()
// console.log(sv.name);
// console.log(sv.age);

// Khởi tạo đối tượng với tham số truyền vào 
// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     Display = ()=>{
//         console.log(`Tên của đối tượng là: ${this.name}`);  
//     }
// }
// const sv1 = new Person("Ngoc",20)
// const sv2 = new Person("An",30)
// // console.log(sv1.name);
// // console.log(sv2.name);
// sv1.Display()
// sv2.Display()
// // Tính kế thừa

// class NewPerson extends Person{
//     constructor(name,age,address){
//         // Khởi tạo đối tượng
//         // Không gọi bằng new Person() thay vào đó sử dụng super
//         super(name,age) 
//         this.address = address
//     }
// }
// const sv3 = new NewPerson("Việt",20,"Thái Nguyên")
// console.log(sv3.name);
// console.log(sv3.age);
// console.log(sv3.address);
// sv3.Display()

class CRUD{
    constructor(collection){
        this.API_URL = `http://localhost:3000/${collection}`
    }
    GetAll =async ()=>{
        try {
            const res = await fetch(this.API_URL)
            if (!res.ok) throw await res.json()
            return await res.json()
        } catch (error) {
            throw error
        }
    }
    Add = async (data)=>{
        try {
            const res = await fetch(this.API_URL,{
                method:'POST',
                headers: {'Content-type':'Application/json'},
                body:JSON.stringify(data)
            })
            if (!res.ok) throw await res.json()
            return await res.json()
        } catch (error) {
            throw error
        }
    }
    Edit = async (data,id)=>{
         try {
            const res = await fetch(this.API_URL+"/"+id,{
                method:'PUT',
                headers: {'Content-type':'Application/json'},
                body:JSON.stringify(data)
            })
            if (!res.ok) throw await res.json()
            return await res.json()
        } catch (error) {
            throw error
        }
    }
    DELETE = async (id)=>{
         try {
            const res = await fetch(this.API_URL+"/"+id,{
                method:'DELETE'
            })
            if (!res.ok) throw await res.json()
            return await res.json()
        } catch (error) {
            throw error
        }
    }
}
export default CRUD

// export const tinhtong = (a,b)=>a+b
// export const tinhtinhhieu = (a,b)=>a-b
// export const tinhtich = (a,b)=>a*b
// export const tinhthuong = (a,b)=>a/b
const tinhtong = (a,b)=>a+b
const tinhhieu = (a,b)=>a-b
const tinhtich = (a,b)=>a*b
const tinhthuong = (a,b)=>a/b
export {tinhthuong,tinhtong,tinhtich,tinhhieu}
// const product = new CRUD("products")
// product.GetAll().then(data=>{
//     console.log(data);    
// })
// const category = new CRUD("categorys")
// category.GetAll().then(data=>{
//     console.log(data);    
// })