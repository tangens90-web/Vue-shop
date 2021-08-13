<template>
    <div>
      <my-header></my-header>
      <p>{{total}} $</p>
      <div v-if="cart.length">
      <router-link tag="button" class="btn btn-danger" :to="{name:'Form'}" >Order</router-link></div>
      <div class="container-md">
      <div  v-for="(product,i) in cart" :key="i"> 
      <div class="card" style="width: 18rem;">
          <img :src="'/' + product.img" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title" v-text="product.title">Card title</h5>
              <p class="card-text" v-text="product.price"></p>

              <p>{{product.inCart}}</p>
              <div>
                <button class="btn btn-outline-primary"  @click="addProduct(i)">+1</button>
                <button class="btn btn-outline-primary" @click="removeProduct(i)">-1</button>
                <button class="btn btn-danger" @click="deleteProduct(i)" >Delete from cart</button>
            
            </div>
  </div>
  </div>
    </div>
    </div>
    

    </div>
</template>

<script>
import MyHeader from './Header.vue'
import {mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions(['ADD_ONE_PRODUCT_CART','REMOVE_ONE_PRODUCT_CART']),
    addProduct(i){
        this.ADD_ONE_PRODUCT_CART(i)
    },
    removeProduct(i){
        this.REMOVE_ONE_PRODUCT_CART(i)
    },
    deleteProduct(i){
         this.$store.commit('DELETE_PRODUCT', i)
    },
    
  },
  computed:{
    cart(){
      return this.$store.getters.cart
    },
    total(){
      let total=0
      this.cart.map(item=>{
      total += item.inCart*item.price
     })
     return total
    }
  },
  components:{MyHeader}
}
</script>


<style scoped>
 .card{ 
   margin: 0 auto;
 }
</style>