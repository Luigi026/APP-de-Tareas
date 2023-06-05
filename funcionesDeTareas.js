const { log } = require ('console');
const fs = require('fs');      
const tareas = require('./tareas.json');


// FUNCION CONSTRUCTORA
const Tarea = function (titulo,estado) {
    this.titulo = titulo;
    this.estado = estado;                                
};          


module.exports = {
    listar: function(){
        log("\n************** LISTA DE PRODUCTOS **************\n".blue);
        /*for (let i = 0 ;escribir.length ; i++) {
            log(`${i+1} ${tareas[i].titulo}  -->  ${tareas[i].estado}`);
            log("---------------------------------------------".blue)
        */
        tareas.forEach((tarea,i) => {
            log(` ${i+1}`.yellow, ' - '.yellow, `${tarea.titulo}`, ' ---> '.yellow, `${tarea.estado}`);
            log("-----------------------------------------------".blue);   
        });
            log("\n*************************************************\n".blue)          
    },
    crear: function(titulo,estado) {
        let nuevaTarea = new Tarea(titulo, estado);     //NEW  --> instanciamos es decir ,genera lo que nosotros le pidamos desde nuestro molde 

        tareas.push(nuevaTarea);                  //esa nueva tarea creada se lo vamos a pushear a nuestro array de tareas que era un JSON pero al requerirlo pasa a ser automaticamente un array de objetos literales que se puede manipular

        let escribirJSON = JSON.stringify(tareas,null,3);     //luego creo una nueva variable donde al JSON lo stringifico porque voy a a escribir en la base de datos
                                                                    //convertimos un array recibido como parametro a un string en formato JSON
        fs.writeFileSync('tareas.json',escribirJSON,'utf-8');      //Guardamos la informacion en nuestra base de datos JSON usando WFSync

        
        log('\n      Nueva tarea creada.\n'.blue)

        log(nuevaTarea);
    },
    filtrarPorEstado : function(estado){                    //creamos la variabl fPE y le damos como parametro el estado que se busca filtrar
        let tareaFiltrada = tareas.filter(tarea => tarea.estado === estado);//creamos una nueva variable para guardar las tareas filtradas, entonces filtramos el array con el metodo filter()
        log(tareaFiltrada)                                  //itera tarea por tarea y compara el valor de la propiedad estado con el valor que recibe como parametro
                                    //y por ultimo que me logee la tarea filtrada por estado 

    }

}

