<template>
      <div>
          <div>
            {{boardDetail.title}}
          </div>
          <div>
            {{boardDetail.content}}
          </div>
          <div>
            {{boardDetail.regDate}}
          </div>
      </div>
</template>

<script>
export default {
  name: "boardDetail",
  props: ["bno"],
  data: function() {
    return {
      boardDetail: []
    };
  },
  created: function() {
    this.findByBoardList(this.bno);
  },
  methods: {
    findByBoardList: function(no) {
      this.$http.get(this.$appUrl + "/board/4012/" + no).then(response => {
        this.boardDetail = response.data;
      });
    }
  }
};
</script>
<style>
</style>