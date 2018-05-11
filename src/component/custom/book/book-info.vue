<template>
  <div class="book-wrapper">
      <div class="book-left">
          <div class="pic">
              <div class="pic-info">
                  <img class="book-img" v-bind:src="book.imgUrl">
              </div>
          </div>
      </div>
      <div class="book-right">
          <div class="book-info">
              <h1 v-bind:title="book.name">{{book.name}}</h1>
              <div class="line"></div>
              <h2>{{book.description}}</h2>
              <div class="line"></div>
              <div class="message">
                  <span class="t1">作者:{{book.author}} 著</span>
                  <span class="t1">出版社:{{book.publisher}}</span>
                  <span class="t1">出版时间:{{book.publishTime}}</span>
              </div>
              <div class="line"></div>
          </div>
      </div>
  </div>
</template>

<script>
import { formatDate } from 'util/date-util.js';
export default {
    name: 'book-info',
    data() {
        return {
            book: {
                id:0,
                imgUrl:"http://img3m2.ddimg.cn/30/4/23941002-3_w_2.jpg",
                name:"三国演义",
                categoryName:"名著",
                author:"(明)罗贯中",
                publisher:"安徽教育出版社",
                description:"《三国演义》全称《三国志通俗演义》，是中国古代第一部长篇章回小说，为四大名著之一，是历史演义小说的经典之作。"+
　　"它描写了从东汉末年到西晋初年之间近105年的历史风云，以描写战争为主，反映了东汉末年的群雄割据混战和魏、蜀、吴三国之间的政治和军事斗争，反映了三国时代各类社会斗争与矛盾的转化，概括了这一时代的历史巨变，塑造了一批叱咤风云的三国英雄人物，在广阔的背景上，上演了一幕幕气势磅礴的战争场面。"+
　　"《三国演义》的内涵是十分丰富的，囊括了中国古代政治、外交、兵法、权谋、道德观念、哲学、思想等方方面面的内容。书中描写的四十多次战争，不仅场面雄伟壮阔，引人入胜，而且为后人提供了各种军事知识和战争经验。据说，《三国演义》成书以后，很快就被农民起义军的将领们视为军事教科书。"+
　　"《三国演义》现存最早的版本，是明嘉靖年间刊刻的，俗称“嘉靖本”。清康熙年间，毛纶、毛宗岗父子对旧版本进行辨析、增删、评点，修改成如今通行的一百二十回本。我们这个精缩本，就是以通行本为基础编写的。",
                publishTime:"2016年04月",
                total:10,
                borrowed:5,
            }
        }
    },
    created() {

    },
    filters: {
        formatDate(time) {
            return formatDate(time);
        }
    },
    methods: {

    }
}
</script>

<style>
.book-wrapper{
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    padding: 30px 8%;
    display: table;
}
.book-left{
    float: left;
}
.book-right{
    margin-left: 20px;
    float: left;
}
.pic{
    float: left;
    width: 320px;
    padding: 0 20px 30px 0;
}
.pic-info{
    width: 320px;
    height: 320px;
    margin: 0 auto;
    position: relative;
    z-index: 7777;
}
.book-img{
    display: block;
    width: 320px;
    height: 320px;
    overflow: hidden;
}
.book-info{
    float: left;
    width: 860px;
    font: 12px "Verdana","Simsun";
    color: #646464;
    padding-left: 20px;
}
.book-info h1{
    line-height: 24px;
    max-height: 48px;
    overflow: hidden;
    color: #323232;
    font-size: 18px;
    margin: 0 auto;
}
.book-info h2{
    padding-top: 6px;
    /* max-height: 96px; */
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 6px;
}
.message{
    /* float: left; */
    width: 860px;
    font: 12px "Verdana","Simsun";
    color: #646464;
}
.message .t1{
    display: inline-block;
    padding-right: 25px;
    /* padding-bottom: 25px; */
}
</style>