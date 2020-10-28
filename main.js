new Vue({
    el: '#app',
    data:{
        nuevoUsuario:{
            nombre: '',
            correo:'',
            clave:''
        },
        usuarioModificar:{
            nombre: '',
            correo:'',
            clave:''
        },
        usuarios:[]
        
    },
    methods: {
        sumar(){
            this.total += this.valor
        },
        restar(){
            this.total -= this.valor
        },
        mostrarUbicacion(e, mensaje){
            console.log(e)
            console.log(mensaje)
            console.log("-------")
            /*
            this.coordenadas.x = e.clientX
            this.coordenadas.y = e.clientY
            */
        },
        ingresarUsuario(){

        }

    }

})