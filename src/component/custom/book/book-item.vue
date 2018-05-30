<template>
  <div class="item-container">
      <a @click="toBook(book.id)">
          <div class="item-card pointer">
              <img v-bind:src="book.imgUrl" class="item-img"/>
          </div>
        </a>
        <div class="item-content">
            <p class="item-name pointer" @click="toBook">{{book.name}}</p>
        </div> 
        <div class="item-label l">
            <label>{{book.author}}</label>
        </div>   
        <div class="item-label r">
            <label>{{book.publisher}}</label>
        </div>  
  </div>
</template>

<script>
export default {
  name: 'book-item',
  data() {
      return {
      }
  },
  props:{
      book: {
          type: Object,
          required: true
      }
  },
  componets: {

  },
  methods: {
      toBook(id) {
          if(this.$route.path.startsWith('/custom/book')&&this.$route.path!='/custom/books'){
              this.$emit('changeBook',id);
          }else{
            this.$router.push({path: '/custom/book',query:{id:this.book.id}});
          }
      }
  }
}
</script>

<style>
.item-container{
    float: left;
    margin-left: 48px;
    border-radius: 4px;
    margin-bottom: 25px;
    width: 16%;
    height: 262px;
    position: relative;
    transition: .3s all linear;
    padding: 4px;
    background-color: #fff;
    border: 1px solid #fff;
}
.item-card{
    overflow: hidden;
    width: 200px;
    height: 180px;
    position: relative;
    border-radius: 8px;
    transition: all .3s;
}
.item-img{
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
    border-radius: 8px;
}
.item-content{
    padding: 10px 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-label{
    /* position: absolute; */
    bottom: 6px;
    left: 8px;
    font-size: 12px;
    /* color: #FFF; */
    line-height: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 88px;
    margin-left: 5px;
    margin-right: 5px;
}
.item-name{
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    max-height: 48px;
    /* margin-top: 16px; */
    transition: .3s all linear;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: -o-ellipsis-lastline;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #2B333B;
}
.item-content-bottom{

}
.l{
    float: left;
}
.r{
    float: right;
}
</style>


