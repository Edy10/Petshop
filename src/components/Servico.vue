<script>
export default {
    methods:{
        finalizarServico(cliente){
            //alert("O serviço "+ cliente +" foi finalizado.");
            this.$emit('atendido', cliente);
        }
    }
}
</script>