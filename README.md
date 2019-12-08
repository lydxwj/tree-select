# tree-select

由于elementUI没有树形选择组件，但是项目又需要，因此粗实现单选择的树形选择组件。

### 组件组成

- elementUI的Input
- elementUI的Select
- elementUI的Tree

### Attributes

- v-model 双向绑定的 绑定值 

- treeData 树形数据，参考结构

  ```
  [{
          isLeaf: false,
          label: '粗树干1',
          value: '1',
          children: [{
            isLeaf: true,
            label: '粗树干1-树叶1',
            value: '1-1'
          }]
        }]
   }]
  ```

- placeholder 下拉框placeholder

- clearable 是否显示清空按钮

- accordion 是否树形每次只能展开一个

### Events

- change  节点选中状态发生变化时的回调，空对象或者当前选中的对象

### 说明

本项目只是定制型的组件，不是很通用，相当于只提供了一个示例，自己根据需要再进一步修改，如有不足之处希望不吝赐教。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
