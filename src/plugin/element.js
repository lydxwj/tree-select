import Vue from 'vue'
import {
  Input,
  Button,
  Select,
  Checkbox,
  Row,
  Col,
  MessageBox,
  Message,
  Option,
  CheckboxGroup,
  Loading,
  Tree,
  Scrollbar
} from 'element-ui'

Vue.use(Scrollbar)
Vue.use(Input)
Vue.use(Loading)
Vue.use(CheckboxGroup)
Vue.use(Option)
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Tree)

const msgbox = MessageBox
const { alert, confirm } = msgbox

Vue.prototype.$msgbox = msgbox
Vue.prototype.$alert = alert
Vue.prototype.$confirm = confirm
Vue.prototype.$message = Message
