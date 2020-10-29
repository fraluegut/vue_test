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
        
        ingresarUsuario(){
            var nuevo = {}
            nuevo.nombre = this.nuevoUsuario.nombre
            nuevo.correo = this.nuevoUsuario.correo
            nuevo.clave = this.nuevoUsuario.clave
            this.usuarios.push(nuevo)
            this.nuevoUsuario.nombre = ''
            this.nuevoUsuario.correo = ''
            this.nuevoUsuario.clave = ''
        }

    }

})