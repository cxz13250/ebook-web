<template>
  <div class="item-container">
      <a @click="toBook">
          <div class="item-card pointer">
              <img v-bind:src="book.imgUrl" class="item-img"/>
              <div class="item-label">
                  <label>{{book.categoryName}}</label>
              </div>
          </div>
        </a>
        <div class="item-content">
            <a @click="toBook" class="pointer">{{book.name}}</a>
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
      toBook() {
          this.$router.push({path: '/custom/book',query:{id:this.book.id}});
      }
  }
}
</script>

<style>
.item-container{
    float: left;
    margin-left: 25px;
    border-radius: 4px;
    margin-bottom: 25px;
    width: 18%;
    height: 252px;
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
    padding: 12px 8px;
}
.item-label{
    position: absolute;
    bottom: 6px;
    left: 8px;
    font-size: 12px;
    color: #FFF;
    line-height: 16px;
}
.item-content-bottom{

}
</style>


