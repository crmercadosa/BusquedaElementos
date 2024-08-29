function buscarNombre (arreglo, nombre){
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]==nombre){
            contador++;
        }
    }
    if (contador==1){
        console.log("El nombre se encontró una vez dentro de la lista")
    }else if(contador>1){
        console.log("El nombre se encontró "+contador+" veces dentro de la lista")
    }else{
        console.log("El nombre no se encuentra en la lista")
    }
}

buscarNombre(["Cristian", "Fernando", "Carlos", "Efrain"],"Cristian")