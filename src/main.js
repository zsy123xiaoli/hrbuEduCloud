import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"

import Video from "video.js";
import "video.js/dist/video-js.min.css"
Vue.prototype.$video = Video


//按需引入element-ui
import {
  Input,
  Button,
  Row,
  Select,
  Option,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Checkbox,
  Message,
  Cascader,
  Breadcrumb,
  BreadcrumbItem,
  Upload,
  Link,
} from 'element-ui';
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
Vue.use(Cascader);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Upload);
Vue.use(Link);

Vue.prototype.$message = Message;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')