import Vue from 'vue'
import { Button } from 'element-ui'
import {Row,Col} from 'element-ui'
import {Transfer} from 'element-ui'
import {Checkbox, CheckboxButton,CheckboxGroup} from 'element-ui'
import {Select, Option } from 'element-ui'
import {Dialog} from 'element-ui'
import {Input} from 'element-ui'
import {Message} from 'element-ui'
Vue.prototype.$ELEMENT = {size: 'small', zIndex: 1000}
Vue.prototype.$message = Message;
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Transfer)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Dialog)
