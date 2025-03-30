// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. forEach
names.forEach((name, index) => console.log(`${name} ${provinces[index]}`));

// 2. Map
const provinceNamesUpper = provinces.map((province) => province.toUpperCase());
console.log(provinceNamesUpper);

// 3. Map
const nameLength = names.map((names) => names.length);
console.log(nameLength);

// 4. Sort()
const sortProvinces = [...provinces].sort();
console.log(sortProvinces);

// 5. Filter
const capeProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(`Remaining Provinces: ${capeProvinces.length}`);

// 6. Map and some
const containingS = names.map((name) =>
  name.split("").some((char) => char.toLowerCase() === "s")
);
console.log(containingS);

// 7. Reduce
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced

// 1. Log Products
console.log(products.map((product) => product.product));

// 2. Filter by Name Length
console.log(products.filter((product) => product.product.length <= 5));

// 3. Price Manipulation
const validPrices = products
  .filter((product) => product.price && !isNaN(product.price))
  .map((product) => ({ ...product, price: Number(product.price) }));
const totalPrice = validPrices.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);

// 4. Concatenate Product Names
console.log(products.map((product) => product.product).join(", "));

// 5. Find Extremes in Prices
const prices = validPrices.map((product) => product.price);
const highest = Math.max(...prices);
const lowest = Math.min(...prices);
console.log(`Highest: ${highest}. Lowest: ${lowest}.`);

// 6. Object Transformation
const transformedProducts = products.reduce((acc, { product, price }) => {
  acc.push({ name: product, cost: price });
  return acc;
}, []);
console.log(transformedProducts);
