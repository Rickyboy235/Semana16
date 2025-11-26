let productos = [];

// Mostrar productos
function mostrarProductos(lista = productos) {
    const tbody = document.getElementById("productList");
    tbody.innerHTML = "";

    lista.forEach((prod, index) => {
        let fila = `
            <tr>
                <td>${prod.nombre}</td>
                <td>$${prod.precio}</td>
                <td>${prod.categoria}</td>
                <td class="acciones">
                    <button onclick="editarProducto(${index})">Editar</button>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += fila;
    });
}

// Guardar o Editar
document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;
    const editIndex = document.getElementById("editIndex").value;

    if (editIndex === "") {
        productos.push({ nombre, precio, categoria });
    } else {
        productos[editIndex] = { nombre, precio, categoria };
    }

    this.reset();
    document.getElementById("editIndex").value = "";

    mostrarProductos();
});

// Editar
function editarProducto(index) {
    const producto = productos[index];

    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("editIndex").value = index;
}

// Eliminar
function eliminarProducto(index) {
    productos.splice(index, 1);
    mostrarProductos();
}

// Búsqueda
document.getElementById("searchInput").addEventListener("input", function () {
    const texto = this.value.toLowerCase();

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});


