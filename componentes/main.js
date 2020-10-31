//Registro GLOBAL de componentes
/*
Vue.component('contador',{
    data(){
        return {
            contador: 0
        }
    },
    methods:{
        aumentar(){
            this.contador++;
        },
        disminuir(){
            this.contador--;
        }

    },
    template:`<div>
        <button @click="disminuir">-</button>
            {{contador}}
        <button @click="aumentar">+</button>
    </div>`

  
})*/

Vue.component('lista-contadores',{
    data(){
        return {
            numeroContadores: 4
        }
    },
    template: `
    <div>
        <div v-for="i in numeroContadores">
            {{i}}
        </div>
    </div>`,
    components:{
        contador:{
            data(){
                return {
                    contador: 0
                }
            },
            methods:{
                aumentar(){
                    this.contador++;
                },
                disminuir(){
                    this.contador--;
                }
        
            },
            template:`<div>
                <button @click="disminuir">-</button>
                    {{contador}}
                <button @click="aumentar">+</button>
            </div>`
        
          
        }
    }
})

new Vue({
    el: '#app',
    data:{}
})