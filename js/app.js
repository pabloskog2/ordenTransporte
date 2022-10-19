
let add = document.querySelector('#agregar');
let list = document.querySelector('#lista');

let data = []
let ordenTransporte = 0


formulario.addEventListener('submit',validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    if (nombre.value == ''){
        alert ('Ingrese Nombre')
        return;
    }
    else{
        agregarEmpleado();
    }
}

function agregarEmpleado () {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let destino = document.getElementById("listadoComunas").value;
    let cantidad = parseFloat(document.getElementById("canti").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let total = cantidad*peso
    data.push(
        {
            "id": ordenTransporte,
            "nombre": nombre,
            "apellido": apellido,
            "destinao" : destino,
            "cantidad" : cantidad,
            "peso": peso,
            "total": total
        }
    );
    let id_row = 'row'+ordenTransporte
    let fila = '<tr id='+id_row+'> <td>'+ordenTransporte+'</td> <td>'+nombre+'</td> <td>'+apellido+'</td> <td>'+destino+'</td> <td>'+cantidad+'</td> <td>'+peso+'</td> <td> <a href="#" class="btn btn-danger" onclick="eliminar('+ordenTransporte+')"> Eliminar </a></td> </tr>'
    $("#lista").append(fila);
    $("#nombre").val('');
    $("#apellido").val('');
    $("#canti").val('');
    $("#peso").val('');
    ordenTransporte++
    Toastify({
        text: "Orden creada con éxito",
        duration: 3000,
        stopOnFocus: true,
        style: {
            background: "#58cbc2",
        },
        })
        .showToast();
}

function eliminar(row){
    $("#row"+row).remove();
    let i=0;
    let pos=0;
    for (x of data){
        if (x.id==row){
            pos=i;
        }
        i++;
    }
    data.splice(pos,1);
    Toastify({
        text: "Orden eliminada exitosamente",
        duration: 3000,
        stopOnFocus: true,
        style: {
            background: "#df6868",
        },
        })
        .showToast();
}
