<template>
      <div>
      <my-header></my-header>
      <input type="text" v-model="name">
      <select name="" v-model="choose" id="">
            <option disabled value="">State</option>
            <option v-for="(state,i) in meaning" :key="i" v-bind:value="state.netut">{{state.tut}}</option>
      </select>
      
      <pre>
            {{choose}}
      </pre>
      <select v-model="selected">
  <option v-for="(option,i) in options" :key="i" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Выбрано: {{ selected }}</span>
      </div>

</template>

<script>
import MyHeader from "./Header.vue";

export default {
      name:'Form',
      
      data(){
            return {
                  name:'tttt',
                  choose:'nothing',
                  selected: 'А',
                  options: [
                  { text: 'Один', value: 'А' },
                  { text: 'Два', value: 'Б' },
                  { text: 'Три', value: 'В' }],
                  meaning:[{
                        tut:'wetwtwtwt',
                        netut:'52352525',
                        gde:'t334334535'
                  },
                  {
                        tut:'t34t3t',
                        netut:'egrege',
                        gde:'gergegege'
                  },
                  {
                        tut:'3t43t',
                        netut:'t34t3t',
                        gde:'t34t43t'
                  }]
                  }
      },
      components:{MyHeader}
}
</script>