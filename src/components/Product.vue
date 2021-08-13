<template>
    <div>
       <div class="container-sm">
         <div class="grid-container">
       
          <div class="pro" v-for=" (product, i) in filtredProduct" v-bind:key="i">
            <div class="card" style="width: 18rem;">
          <img :src="'/' + product.img" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title" v-text="product.title">Card title</h5>
              <p class="card-text" v-text="product.price"></p>
              <p>Осталось {{product.availableItem}}</p>
              <div>
            <button type="button"  class="btn btn-secondary" v-if="product.availableItem>0"  @click ="addToCartItem(product)">Add to CartItem</button>
            <button type="button" class="disabled" v-else>Add to CartItem</button>
            </div>
  </div>
  </div>
</div>
          </div>
          </div>
  </div>
</template>


<script>
import {mapActions} from 'vuex'
export default {

data(){
  
    return {
    copyproducts:[],
    }
},
watch:{
   
},
methods: {
  ...mapActions(['ADD_IN_CART']),
    addToCartItem(aProduct){
      this.ADD_IN_CART(aProduct)
    }
},
computed:{
   filtredProduct(){
     if(this.$route.params.category == ['all'] || !this.$route.params.category ){
       return this.copyproducts = this.products
     }
     else{
     return this.copyproducts = this.products.filter((item)=>{

       if(this.$route.params.category  == item.category){
         return item
       }
       
     })
   }
   },
   products(){
    return this.$store.getters.products
  },

},

created: function() {
  this.$store.dispatch('initStore') 
},
}
</script>

<style>
.card-img-top{
  width: 100%;
  height: 250px;
}
.pro{
  margin: 0 auto;
}
.grid-container{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  /* grid-template-rows: 50% 50%; */
}
@media (max-width: 768px) {
  .grid-container{
  grid-template-columns: repeat(1,1fr);
 
}
}
.disabled{
  background-color: black;
}

</style>