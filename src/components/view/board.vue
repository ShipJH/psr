<template>
  <div>
    <div>
      <div>
        <div>
            <div>
                <select v-model="searchSelect">
                    <option selected value="ALL">전체</option> 
                    <option value="01">제목</option>
                </select>
            </div>

            <div>
                <input type="text" placeholder="Search" v-model="searchInput"  v-on:keyup="searchKeyUp" />
            </div>
        </div>
        

        <div>
            <table>
                <thead>
                        <th>No</th>
                        <th>제목</th>
                        <th>등록자</th>
                        <th>등록일자</th>
                </thead>
                <tbody>
                    <tr v-for="list in boardList" :key="list.boardNo" v-on:click="goDetail(list.boardNo)" style="cursor:pointer;">
                        <td>{{ list.boardNo }}</td>
                        <td>{{ list.title }}</td>
                        <td>{{ list.regUser }}</td>
                        <td>{{ list.regDate }}</td>
                    </tr>
                </tbody>
            </table>

             <a href="#" :key="n" v-on:click="goPage(n)" v-for="n in listCnt">{{ n }} </a>

             
            
        </div>
        
        <a href="#" :key="n" v-on:click="goPage(n+5)"  v-for="n in 5">{{ n+5 }} </a>
        <br/>
        <a href="#" :key="n" v-on:click="goPage(n+10)"  v-for="n in 5">{{ n+10 }} </a>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "board",
  data: function() {
    return {
      boardList: [],
      searchInput: "",
      searchSelect: "",

      listCnt: 0,
      pageNo: 1,
      n: 11
    };
  },
  created: function() {
    this.findByBoardList();
    this.searchSelect = "ALL";
  },
  methods: {
    goPage: function(n) {
      this.$http
        .get(this.$appUrl + "/board/4010/01/" + n + "/제")
        .then(response => {
          this.boardList = response.data.boardList;

          this.listCnt = response.data.listCnt;
        });
    },

    searchKeyUp: function() {
      this.findByBoardList();
    },

    findByBoardList: function() {
      if (this.searchInput != "") {
        this.$http
          .get(
            this.$appUrl +
              "/board/4010/" +
              this.searchSelect +
              "/" +
              this.pageNo +
              "/" +
              this.searchInput
          )
          .then(response => {
            this.boardList = response.data.boardList;
          });
      } else {
        this.$http.get(this.$appUrl + "/board/4010/01/1/제").then(response => {
          this.boardList = response.data.boardList;

          this.listCnt = response.data.listCnt;
        });
      }
    },
    goDetail: function(no) {
      this.$router.push({ name: "detailView", query: { boardNo: no } });
    }
  }
};
</script>
<style>
</style>