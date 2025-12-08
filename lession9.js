import CRUD from './lession8.js'
const crud = new CRUD("http://localhost:3000/products")
crud.GetAllProduct().then(value=>{
    console.log(value);    
})