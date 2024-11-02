/* empty css                                         */
export { renderers } from '../../renderers.mjs';

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Correo Electrónico</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f8f8f8;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        a {
            color: #007bff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hola, {{name}} {{lastname}} quiere vender un equipo</h1>
        <h3>Celular: {{phone}}</h3>
        <h3>Correo: {{email}}</h3>
        <h3>Dirección: {{address}}</h3>
        <h3>Municipio: {{municipio}}</h3>
        <h3>Ciudad: {{city}}</h3>
        <h3>Nombre Equipo: {{product}}</h3>
        <h3>Imagen:</h3>
        <img src="cid:imagen.jpg" alt="Imagen del producto" style="max-width: 100%; height: auto;">
    </div>
</body>
</html>
`
	}
render["astro:html"] = true;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: render
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
