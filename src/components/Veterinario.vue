<template>
  <div>
    <h3>Fila da Consulta Veterinária.</h3>
    <v-simple-table v-if="clientes.length > 0">
      <thead>
        <tr>
            <th>Nome</th>
            <th>Idae</th>
            <th>Raça</th>
            <th>Sintomas</th>
            <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
            <td>{{cliente.nome}}</td>
            <td>{{cliente.idade}}</td>
            <td>{{cliente.raca}}</td>
            <td>{{cliente.servico.observacao}}</td>
            <td><v-btn color="primary" @click="finalizarServico(cliente)">Finalizar</v-btn></td>
        </tr>
      </tbody>
    </v-simple-table>
    <div v-else> Nenhum cliente na fila do veterinário</div>
  </div>
</template>

<script>
import Servico from '@/components/Servico';
export default {
    props: ['clientes'],
    extends: Servico,
    methods:{
      //Esse metado está sendo herdado do componente Serviço - Metado que dispara um evento para o componente Balanço.
      /*finalizarServico(cliente){
        this.$emit('atendido', cliente);
      }*/
    }
}
</script> 

<style>

</style>