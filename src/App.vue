<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <el-row class="demo_place">
      <el-col>
        <treeSelect  placeholder='请选择机构' class="treeSelect" @change="searchSelectChain" v-model="treeVal" :treeData="treeData" />
      </el-col>
      <el-col class="pt20">双向绑定数据：{{current}}</el-col>
      <el-col class="pt20">当前选中数据：{{treeVal}}</el-col>
    </el-row>
  </div>
</template>

<script>
import treeSelect from './components/tree-select.vue'

export default {
  name: 'app',
  components: {
    treeSelect
  },
  data () {
    return {
      treeVal: '',
      current: {},
      treeData: [{
        isLeaf: false,
        label: '粗树干1',
        value: '1',
        children: [{
          isLeaf: true,
          label: '粗树干1-树叶1',
          value: '1-1'
        }]
      }, {
        isLeaf: false,
        label: '粗树干2',
        value: '2',
        children: [{
          isLeaf: true,
          label: '粗树干2-树叶1',
          value: '2-1'
        }, {
          isLeaf: true,
          label: '粗树干2-树叶2',
          value: '2-2'
        }]
      }, {
        isLeaf: true,
        label: '粗树干3',
        value: '3'
      }]
    }
  },
  methods: {
    searchSelectChain (obj) {
      this.current = {
        isLeaf: obj.isLeaf,
        value: obj.value,
        label: obj.label
      }
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  .pt20
    padding-top 20px
  .treeSelect
    width 300px
</style>
