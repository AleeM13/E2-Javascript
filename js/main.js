const form = document.getElementById('form');
const error = document.getElementById('error');
const inputNumber = document.getElementById('num')
const h2 = document.getElementById('nombre');
const h4 = document.getElementById('precio');

const arrayPizzas = [
    {id: 1, nombre: 'Napolitana', ingredientes: ['salsa de tomate', 'muzzarella', 'rodajas de tomate', 'ajo', 'perejil', 'aceitunas'], precio: '1500'},
    {id: 2, nombre: 'Fugazzeta', ingredientes: ['muzzarella', 'cebolla', 'aceitunas'], precio: '1050'},
    {id: 3, nombre: '4 Quesos', ingredientes: ['salsa de tomate', 'muzarella', 'provolone', 'parmesano', 'roquefort', 'aceitunas'], precio: '1500'},
    {id: 4, nombre: 'Roquefort', ingredientes: ['salsa de tomate', 'muzzarella', 'roquefort', 'aceitunas'], precio: '1350'},
    {id: 5, nombre: 'Vegetariana', ingredientes: ['muzarrella', 'salsa blanca', 'acelga', 'oregano', 'aceitunas'], precio: '1050'},
    {id: 6, nombre: 'Especial', ingredientes: ['salsa de tomate', 'muzzarella', 'jamon', 'rodajas de tomate', 'provenzal', 'huevo', 'morrones'], precio: '1150'},
    {id: 7, nombre: 'Muzzarella', ingredientes: ['salsa de tomate', 'muzzarella', 'rodajas de tomate', 'oregano', 'aceitunas'], precio: '950'},
    {id: 8, nombre: 'Calabresa', ingredientes: ['salsa de tomate', 'muzzarella', 'longaniza', 'aji molido', 'aceitunas'], precio: '1200'}
];

const renderPizza = (pizza) => {
    error.innerText = "";

    const {nombre, precio} = pizza[0];

    h2.innerText = `Pizza: ${nombre}`;
    h4.innerText = `Precio: ${precio}`;

}

const cleanText = () =>{
    h2.innerText = ``;
    h4.innerText = ``;
}

const showError = () => {
    error.innerText = "ID de pizza no encontrado";
}


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const input = parseInt(inputNumber.value);

    const miPizza = arrayPizzas.filter(pizza => pizza.id === input);

    if(miPizza.length === 0){
        showError();
        cleanText();
    } else {
        renderPizza(miPizza);
    }
})