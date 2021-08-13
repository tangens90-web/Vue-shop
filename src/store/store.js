import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


 export default new Vuex.Store({
  state:{
    products:[],
    cart:[],
  },
  mutations:{
    'SET_STORE' (state,products){
      state.products = products
    },
    'ADD_TO_CART' (state, product){
      if(state.cart.length){
        let bool = false
      state.cart.map((item)=>{
        
        if(item.title===product.title){
          bool = true
        }})
        if(!bool){
          state.cart.push(product)
        }
      
      }
      else{
        state.cart.push(product)
      }
      product.availableItem -=1
      product.inCart +=1
    },
    'DELETE_PRODUCT'(state, i){
      state.products.map((item)=>{ 
        if(item.id == state.cart[i].id){
          item.availableItem += item.inCart
          item.inCart = 0
      }} )
      state.cart.splice(i,1)
    },
    'ADD_ONE_PRODUCT'(state, i){
      if(state.cart[i].availableItem>0){
        state.cart[i].inCart++
        state.cart[i].availableItem--
      }
      
    },
    'REMOVE_ONE_PRODUCT'(state, i){
      if(state.cart[i].inCart>1){
        state.cart[i].inCart--
        state.cart[i].availableItem++
      }
    },
  },
  actions:{
    initStore:({commit})=>{
      axios.get('/static/products.json')                
    .then((response) =>{
      console.log(response)
      commit('SET_STORE', response.data.products)      
  })
    },
    ADD_IN_CART:({commit}, product)=>{
      
      commit('ADD_TO_CART',product)
    },
    ADD_ONE_PRODUCT_CART:({commit},index)=>{
      commit('ADD_ONE_PRODUCT',index)
    },
    REMOVE_ONE_PRODUCT_CART:({commit},index)=>{
      commit('REMOVE_ONE_PRODUCT',index)
    },
  },
  

  getters:{
    products:state=>state.products,
    cart:state=>state.cart
  }

  




})