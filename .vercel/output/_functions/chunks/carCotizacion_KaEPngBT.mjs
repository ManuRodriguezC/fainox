function getCarProducts() {
  const getList = localStorage.getItem("carProductsList");
  if (getList) {
    return JSON.parse(getList);
  } else {
    return [];
  }
}
function addCarProduct(name) {
  let products = getCarProducts();
  if (products.includes(name)) {
    console.log("El producto ya existe en la lista.");
  } else {
    products.push(name);
    localStorage.setItem("carProductsList", JSON.stringify(products));
    console.log("Producto añadido:", name);
  }
}
function removeCarProduct(name) {
  let products = getCarProducts();
  if (products.includes(name)) {
    products = products.filter((product) => product !== name);
    localStorage.setItem("carProductsList", JSON.stringify(products));
    console.log("Producto eliminado:", name);
  } else {
    console.log("El producto no existe en la lista.");
  }
}
function cleanCarProduct() {
  localStorage.removeItem("carProductsList");
}

export { addCarProduct as a, cleanCarProduct as c, getCarProducts as g, removeCarProduct as r };
