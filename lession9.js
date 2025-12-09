import crud from './lession8.js'
const product = new crud("products")
product.GetAll().then(data=>{
    console.log(data);    
})
const category = new crud("categorys")
category.GetAll().then(data=>{
    console.log(data);    
})