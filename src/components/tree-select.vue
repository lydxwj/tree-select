<template>
  <el-select
    ref="option"
    class="select_tree"
    popper-class="select_tree_popper"
    :placeholder="placeholder"
    :value="value"
    :clearable="clearable"
    @clear="clearHandle"
  >
    <li class="select_tree_search">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    </li>
    <el-option :value="currentSelect.value" :label="currentSelect.label">
      <div class="select_tree_content">
        <el-tree
          class="select_tree_cmp"
          ref="tree"
          :accordion="accordion"
          :highlight-current="true"
          :data="treeData"
          :props="propsTree"
          node-key="id"
          empty-text="没有数据"
          :show-checkbox="true"
          :check-on-click-node="true"
          :check-strictly="true"
          :default-expanded-keys="defaultExpandedKey"
          @node-click="handleNodeClick"
          @check-change="handleCheckChange"
          :filter-node-method="filterNode"
        ></el-tree>
      </div>
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: 'treeSelect',
  data () {
    return {
      filterText: '', // 筛选文字
      props: {
        children: 'children',
        label: 'label'
      },
      currentSelect: {}
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    },
    treeData (val) {
      if (this.value) {
        const selected = this.getActiveLeaf(val, this.value)
        if (selected) {
          this.currentSelect = {
            value: selected.value,
            label: selected.label
          }
        }
      }
    },
    currentSelect (val) {
      this.$refs.tree.setCheckedKeys([val.value])
    }
  },
  props: {
    treeData: Array,
    placeholder: String,
    value: String,
    input: Function,
    clearable: Boolean,
    accordion: Boolean, // 每次只能展开一个
    defaultExpandedKey: Array, // 默认展开树
    propsTree: Object,
    change: Function // 选择回调
  },
  methods: {
    getActiveLeaf (array, value) {
      const res = array.find(item => {
        if (item.value === value) {
          return true
        } else if (array.children) {
          this.getActiveLeaf(array.children, value)
        }
      })
      if (res) {
        return res
      }
    },
    handleNodeClick (data) {
      // this.currentSelect = {
      //   value: data.value,
      //   label: data.label
      // }
      // this.$emit('input', data.value)
      // this.$emit('change', data)
      // if (!data.children) {
      //   this.$refs.option.blur()
      // }
    },
    handleCheckChange (data, checked, indeterminate) {
      if (checked) {
        this.currentSelect = {
          value: data.value,
          label: data.label
        }
        this.$emit('input', data.value)
        this.$emit('change', data)
        if (!data.children) {
          this.$refs.option.blur()
        }
      } else {
        this.$emit('input', '')
        this.$emit('change', {})
      }
      console.log(data, checked, indeterminate)
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    clearHandle () {
      this.currentSelect = {}
      this.$emit('input', '')
    }
  }
}
</script>
<style lang="stylus">
.select_tree_popper {
  width: auto;

  .select_tree_search {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;
  }

  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }

  .el-select-dropdown__item {
    height: auto;
    padding: 0;
  }

  .select_tree_content {
    background-color: #fff;
    padding-bottom: 6px;
    padding-top: 44px;
  }
  .el-checkbox{
    display: none;
  }

  .el-select-dropdown__item.selected {
    font-weight: normal;
  }
}
</style>
