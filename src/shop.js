
new Vue({
  el:'#app',
  data:{
    sitename: "FunPlusPhoenix Shop",
    products:[],
    copyproducts:[],
    cart:[],
    buttonBtn:[],
    ttt: false
},
computed:{
  cartItemCount:function(){
    return this.cart.length || ''
  },
  filtredContainer(){
    return buttonBtn = this.products.reduce(function (values, item){
      if(!values.includes(item.category)){
         values.push(item.category)
      }
      return values
  }, ["all"])
},
},
methods: {
  addToCartItem(aProduct) {
    
     this.cart.push(aProduct.id)
  },
  changeFood(button){
     if(button === "all"){
       return this.copyproducts = this.products
     } 
     else{
       this.ttt = true
       return this.copyproducts = this.products.filter((item)=>{
      if(item.category === button)
          return item
        })}
  }
},
  // filter:{
  //   filtredContainer(aProduct){
  //     console.log("4244224")
  //   }
  // },
    created: function() {
  axios.get('./products.json')                
    .then((response) =>{
      this.products=response.data.products;        
      console.log(this.products);
  });
},


});
