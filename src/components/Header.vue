<template>
  <header class="header">
        <header class="header_inner">
          <h1><router-link :to="{name:'Products'}" >{{sitename}}</router-link></h1>
          <button class="btn btn-outline-info" v-on:click ="showCart"><span>{{cartItemCount}}</span> Cart</button>
        </header>
      </header>
      
</template>
<script>

import Products from "./Product.vue"
export default {
  name:'my-header',

   data(){
     return{
       sitename: "Shop",
       }
},
methods:{
  showCart(){
    this.$router.push({name:'Cart'})
  },
  
},
computed:{
 cartItemCount(){
    return this.$store.getters.cart.length || '0'
  },
  cart(){
    return this.$store.getters.cart
  }
  
},
watch:{
},
components: {Products}
}
</script>


<style scoped>
  a{
    text-decoration: none;
    color:black
  }
</style>