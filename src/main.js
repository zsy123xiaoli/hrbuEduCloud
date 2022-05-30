import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
//按需引入element-ui

import { Input,Button,Row, Select, Option, DatePicker, Table, TableColumn, Pagination ,Checkbox,CheckboxGroup,MessageBox,Message,Cascader,Breadcrumb,BreadcrumbItem,Upload,Link,} from 'element-ui';

Vue.use(Input)
Vue.use(Button)
Vue.use(Row)
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Cascader);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Upload);
Vue.use(Link);


// Vue.use(MessageBox);
// Vue.use(Message);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;

  }
}).$mount('#app')