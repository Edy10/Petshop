<template>
  <div>
    <v-form>
      <h1>Bem vindo ao Petshop</h1>
      <v-spacer></v-spacer>
      <v-text-field type="text" label="Nome do Cliente:" v-model="cliente.nome"></v-text-field>
      <v-select :items="racas" item-text="nome" v-model="cliente.raca" label="Raça do Cáo:"></v-select>
      <v-text-field label="Idade:" type="number" v-model="cliente.idade" :rules="[rules.idadeCanina]" ></v-text-field>
      <v-select label="Serviço:" v-model="cliente.servico" :items="servicos" >
        <template v-slot:selection="data">{{data.item.nome}}</template>
        <template v-slot:item="data">{{data.item.nome}} ({{data.item.preco | grana}})</template>
      </v-select>
      <v-textarea label="Sintomas" rows="3" v-model="cliente.servico.observacao" v-if="cliente.servico.tipo === 'consulta'">
      </v-textarea>
      <v-btn color="primary" @click="cadastrarCliente" :disabled="cliente.idade > 15 || !cliente.nome || !cliente.raca || !cliente.idade || !cliente.servico.nome">
        Cadastrar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  import axios from 'axios';
  import Cachorro from '@/models/cachorro';
  export default {
    data(){
      return{
        racas: [],
        servicos: [],
        cliente: new Cachorro(),
        rules:{
          idadeCanina: value => value < 15 || 'A idade informada não é válida'
        }
      }
    },
    async created(){
      try {
        this.racas = await this.buscarRacas();
        this.servicos = await this.buscaServicos();
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      //Executa a busca das raças dos cachorros na API
      async buscarRacas() {
        const {data} = await axios.get("http://localhost:3000/racas");
        return data;
      },
      //Executo a busca dos serviços na API
      async buscaServicos() {
        const {data} = await axios.get("http://localhost:3000/servicos");
        return data;
      },
      //Funçáo que executa o cadastrar o cliente.
      cadastrarCliente(){
        //Emite um evento passando para o componente pai.
        this.$emit('novo-cadastro', this.cliente)
        this.cliente = new Cachorro();
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>