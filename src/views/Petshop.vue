<template>
    <div>
        <v-row>
            <v-col cols="12"  md="6" sm="12">
                <v-card class="pa-4">
                    <Recepcao @novo-cadastro="encaminharCliente"></Recepcao>
                </v-card>
            </v-col>
            <v-col cols="12"  md="6" sm="12">
                <v-card class="pa-4 mb-4">
                    <Veterinario :clientes="clientesVeterinario" @atendido="finalizarVeterinario"></Veterinario>
                </v-card>
                <v-card class="pa-4">
                    <Banho :clientes="clientesBanho" @atendido="finalizarBanho"></Banho>
                </v-card>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
            <v-col cols="12" sm="12">
                <v-card class="pa-4">
                    <Balanco :clientes="clientesAtendidos"></Balanco>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Recepcao from '@/components/Recepcao';
import Veterinario from '../components/Veterinario.vue';
import Banho from '../components/Banho.vue';
import Balanco from '../components/Balanco.vue';


export default {
    components:{
        Recepcao,
        Veterinario,
        Banho,
        Balanco
    },
    data(){
        return{
            clientesVeterinario: [],
            clientesBanho: [],
            clientesAtendidos: []
        }
    },
    methods: {
        encaminharCliente(cliente) {
            cliente.servico.tipo === 'banho' ? this.clientesBanho.push(cliente) : this.clientesVeterinario.push(cliente);
        },
        finalizarVeterinario(cliente){
            this.clientesAtendidos.push(cliente);
            //Atualiza o estado da aplicaçao sempre que for finalizado um consulta
            this.$delete(this.clientesVeterinario, this.clientesVeterinario.findIndex((clienteAtendido)=>clienteAtendido.nome == cliente.nome), cliente);
        },
        finalizarBanho(cliente){
            this.clientesAtendidos.push(cliente);
            //Atualiza o estado da aplicaço sempre que for finalizado um banho.
            this.clientesBanho = this.clientesBanho.filter((clienteAtendido) => clienteAtendido.nome != cliente.nome);
        }
    },
}
</script>

<style lang="scss">
    @import '../assets/style/main'
</style>