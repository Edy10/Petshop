<template>
  <div>
    <h3>Fila do Banho.</h3>
    <v-simple-table v-if="clientes.length > 0" >
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idae</th>
                <th>Raça</th>
                <th>Tosa</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cliente, index) in clientes" :key="index" v-bind:class="cliente.servico.finalizado ? 'atendido': ''">
                <td>{{cliente.nome}}</td>
                <td>{{cliente.idade}}</td>
                <td>{{cliente.raca}}</td>
                <td>{{cliente.servico.extra | pergunta}}</td>
                <td><v-btn color="primary" @click="finalizarServico(cliente)">Finalizar</v-btn></td>
            </tr>
        </tbody>
    </v-simple-table>
    <div v-else>Nenhum cliente na fila do banho</div>
  </div>
</template>

<script>
import Servico from '@/components/Servico';
export default {
    //Criaçáo da props que vai receber o evento cadastrado.
    props: ['clientes'],
    extends: Servico,
    //Filtro para validar o serviço cadastrado
    filters: {
        pergunta: function(value) {
            if(value == undefined){ return 'Não';}
            if(typeof value !== 'boolean') {return value;}

            return value ? 'Sim' : 'Náo';
        }
    },
    methods:{
        //Esse metado está sendo herdado do componente Serviço - Metado que dispara um evento para o componente Balanço.
        /*finalizarServico(cliente){
            this.$emit('atendido', cliente);
            //cliente.servico.finalizado = true;
            //Forçar a atualização da aplicação - Obss: O vue não atualiza a aplicação de segunda camada.
            //this.$set(this.clientes,this.clientes.findIndex((clienteAtendido) => clienteAtendido.nome === cliente), cliente);
        }*/
    }
}
</script>

<style lang="scss" scoped>
    .atendido{
        color: green;
        font-weight: bold;
    }
</style>