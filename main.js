// Map
// Các phần tử trong map sẽ 2 giá trị
// Key - value
// - Thêm phần tử vào Map
// const map1 = new Map();
// map1.set('key1', "Số 1");
// map1.set("Key2", "Số 2");
// map1.set("Key3", "Số 3");
// // console.log(map1);
// // Lấy giá trị từ map
// // Tên Map.get('Key)
// console.log(map1.get('key1'));

// Khởi tạo Map từ Array.

// const arraya = [["Key1","Value 1"],["Key2","Value 2"],["Key3","Value 3"]];
// const map2 = new Map(arraya);
// const set1 = new Set(arraya);
// // console.log(set1);
// // console.log(map2.get('Key2'));
// // Khởi tạo Map từ Map
// // const map3 = new Map(map2);
// // console.log(map3);
// const map4 = new Map(set1);
// // xóa phần tử trong Map;
// // map4.delete('Key1');
// // Xóa toàn bộ
// map4.clear();
// console.log(map4);
// console.log(map4.has('Key5'));

const tracnghiem = new Map();
tracnghiem.set('cauhoi','Đâu là tên một châu lục?');
tracnghiem.set(1,'Việt Nam');
tracnghiem.set(2,'Châu Á');
tracnghiem.set(3,'Trung Quốc');
tracnghiem.set('dapan','Châu Á');
tracnghiem.set(true,'Bạn đã trả lời đúng');
tracnghiem.set(false,'Câu trả lời chưa chính xác');
console.log(tracnghiem.get('cauhoi'));
console.log(`1. ${tracnghiem.get(1)}`);
console.log(`2. ${tracnghiem.get(2)}`);
console.log(`3. ${tracnghiem.get(3)}`);
const dapan = 2;
// console.log(tracnghiem.get('dapan')==tracnghiem.get(dapan));
console.log(tracnghiem.get(tracnghiem.get('dapan')==tracnghiem.get(dapan)));