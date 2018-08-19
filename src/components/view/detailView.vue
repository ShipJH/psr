<template>
        <div>
              <board-detail :bno="boardNo"/>
              <reply :bno="boardNo"/>
        </div>
</template>
<script>
  import reply from './reply.vue'
  import boardDetail from './boardDetail.vue'
  export default {
    name: 'detailView',
    components:{
        'reply': reply,
        'boardDetail': boardDetail
    },
    data: function () {
        return {
            boardNo: this.$route.query.boardNo
        }
        
    }
  }

</script>
<style>

</style>