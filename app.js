require('colors')
const { log } = require('console');
const { argv } = require('process');
// const argv = require('process').argv; 
const accion = argv[2];                                       
const funcionesDeTareas = require('./funcionesDeTareas');

                                                                                                         
let respuesta = ' ';

    switch (accion) {
        case "listar":
            funcionesDeTareas.listar();
            break;
        case "crear":
            let titulo = argv[3];
            let estado = argv[4] || "Pendiente";

            if([titulo,estado].includes(undefined)){             //creamos un nuevo array y usamos include que si incluye undefined nos devuelva log()
                log('\nTodos los datos son obligatorios\n'.red);
                return null
            };                                             
            respuesta = funcionesDeTareas.crear(titulo,estado);
            break;  
        case "filtrar": 
        let filtro = argv[3];     
        respuesta = funcionesDeTareas.filtrarPorEstado(filtro);
        break
        case respuesta:
            log("\nAtención - Tienes que pasar una accion.\n".red)
            break;    
        default:
            log("\nNo entiendo que quieres hacer\n".red);
            break;            

    }


