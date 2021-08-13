<template>
  <div>
    <div class="container-sm">
    <my-header></my-header>
    <div class="product_cont">
        <div class="button_block">
          <div class="d-flex justify-content-center">
          <div v-for="(button, i) in filtredContainer" v-bind:key="i">
          <router-link tag="button" class="btn btn-success" active-class="active" :to="{name:'Category', params:{category: button}}">{{button}}</router-link>  
        </div>
        </div>
        </div>
        </div>
        <my-products></my-products>
    </div>
  </div>
</template>



<script>
import MyHeader from './Header.vue'
import MyProducts from "./Product.vue"
export default {
   data(){
    return {
    buttonBtn:[],
    }
    },
  computed:{
     filtredContainer(){
    return this.buttonBtn = this.products.reduce(function (values, item){
      if(!values.includes(item.category)){
         values.push(item.category)
      }
      return values
  }, ["all"])
},
products(){
    return this.$store.getters.products
  }
  },
  methods:{
},
  components:{MyHeader,MyProducts},
  created: function() {
  this.$store.dispatch('initStore')        
  }
}

</script>
<style scoped>
/* button {
  text-decoration: none;
  color: black;
  
  background-color: violet;
}

.router-link-exact-active {
  color: greenyellow;
  background-color: black;
} */
 /* .button_block button{
   background: coral;
   color: chartreuse;
 } */
</style>