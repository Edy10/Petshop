<template>
  <div class="balanco">
    <h3>Serviço do dia</h3>
    <v-simple-table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Serviço</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{cliente.nome}}</td>
          <td>{{cliente.idade}}</td>
          <td>{{cliente.raca}}</td>
          <td>{{cliente.servico.nome}}</td>
          <td>{{cliente.servico.preco | grana}}</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td>Total</td>
            <td colspan="3"></td>
            <td><b>{{totalServicos | grana}}</b></td>
          </tr>
        </tfoot>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: ['clientes'],
  computed:{
    totalServicos(){
      if(!Array.isArray(this.clientes)){
        return 0;
      }
      return this.clientes.reduce((total,cliente) => total + cliente.servico.preco, 0);
    }
  }
}
</script>

<style lang="scss">
    .balanco{
        padding-top: 20px;
    }
</style>