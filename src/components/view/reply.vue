<template>
          <div>
            <template>
            <div>
                <div>
                  <input type="text" placeholder="내용을 입력해주세요." v-model="replyContent.content"/>
                </div>
                  <input type="button" value="작성" @click.prevent="replyInsert()"/>
              </div>
            </template>
            
            <div>
              <table>
                <template v-for="list in replys">
                    <tr :key="list.replyNo">
                        <td>{{list.replyNo}}</td>
                        <td>{{list.content}}</td>
                        <td>
                          <input type="button" value="작성" @click="list.isReInsert = !list.isReInsert"/>
                        </td>
                    </tr>
                    <tr v-if="list.isReInsert" :key="list.replyNo">
                       <td>
                         <input type="text" placeholder="내용을 입력해주세요." v-model="replyContent.content"/>
                       </td>
                       <td>
                         <input type="button" value="작성" @click="replyInsert(list.replyNo, list.replyGroup)">
                       </td>
                    </tr>
                </template>
              </table>
            </div>
        </div>
</template>

<script>
  export default {
    props: [
    'bno'
    ],
    name: 'reply',
    data(){
        return{
        replys:[],
        replyContent:{boardNo: this.bno, replyNo: 0, replyGroup: 0},
        replyID:[]
      }

    },
    created: function(){
            this.replyData(this.bno);
    },
    methods: {
        replyData: function (no) {
        this.$http.get("http://localhost:8080/board/4020/" + no)
            .then((response)  =>  {
                this.replys = response.data.replyList;
            })
        },
       replyInsert: function (replyNo, replyGroup) {
         
        this.replyContent.replyNo=replyNo;
        this.replyContent.replyGroup=replyGroup;

       this.$http.post("http://localhost:8080/board/4021/", this.replyContent )
           .then(()  =>  {
               this.replyData(this.bno);
           })
       }
       
    }
  }
</script>
<style>

</style>