let allowCategory1 = new Product ('T-shirts', 'Ralph Lauren', 49, 100);
let allowCategory2 = new Product ('Pants', 'Nike', 44, 44);
let allowCategory3 = new Product ('Sweaters', 'ROBI AGNES', 59, 100);
let allowCategory4 = new Product ('Shoes', 'Zaro', 100, 200);
let allowCategory5 = new Product ('Sweaters', 'ROBI AGNES', 100, 100);

console.log(allowCategory1.getProducts(), allowCategory1.getMinPrice());
console.log(allowCategory2.getProducts(), allowCategory2.getMinPrice());
console.log(allowCategory3.getProducts(), allowCategory3.getMinPrice());
console.log(allowCategory4.getProducts(), allowCategory4.getMinPrice());
console.log(allowCategory5.getProducts(), allowCategory5.getMinPrice());

