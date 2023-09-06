//npm init -y => nos crea el package.json
//npm install express -> nos instala express en el proyecto

const express= require('express');
const app= express();

/*Nos ayudan a interpretar y decodificar JSON*/
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api", (req, res) =>{
    res.json({message:"¡Hola desde una API!"});
})

const estudiantes = [
    {nombre: "Elena", apellido:"De Troya"},
    {nombre: "Juana", apellido:"De Arco"},
    {nombre: "Pedro", apellido:"Páramo"},
]

//Peticiones GET son para obtener info
app.get("/api/estudiantes", (req,res)=>{
    res.json(estudiantes);
});

app.get("/api/estudiantes/:id", (req,res)=>{
    let id = req.params.id; //params son los parametros que recibimos mediantes URL
    res.json(estudiantes[id]);
})

//Peticiones POST son para crear nuevos registros
app.post("/api/estudiantes", (req,res)=>{
    estudiantes.push(req.body);
    res.json(estudiantes);
})

//Peticiones PUT para actualizar registros
app.put("/api/estudiantes/:id", (req, res)=>{
    let id= req.params.id;
    estudiantes[id] = req.body;
    res.json(estudiantes);
})


app.listen(8000, ()=> {
    console.log("Servidor corriendo");
})

//Peticiones DELETE eliminan registros
app.delete("/api/estudiantes/:id", (req, res) =>{
    let id = req.params.id;
    estudiantes.splice(id, 1); //id = posicion 1=cantidad
    res.json(estudiantes);

})