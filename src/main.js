import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入main.scss文件
import "./stylesheets/main.scss"
//引入rem.js文件
import "./models/rem"

// import ViewUI from 'view-design';
// Vue.use(ViewUI);

//引入swiper.min.css文件
import "swiper/css/swiper.min.css"

//引入axios
import axios from "axios"
//通过这种方式获取axios对象
Vue.prototype.$http = axios

//引入lazy-load(图片懒加载)
import { Lazyload} from 'mint-ui';

Vue.use(Lazyload);



import { Loadmore } from 'mint-ui';

Vue.component("mt-loadmore", Loadmore);

//引入InfiniteScroll（无限滚动）
import { InfiniteScroll, Tabbar, TabItem,Cell,Button} from 'mint-ui';

Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-button", Button);
Vue.component("mt-cell", Cell);



Vue.config.productionTip = false

// import { Menu } from 'view-design';
// Vue.component('Menu', Menu);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//
//                       .::::.
//                     .::::::::.
//                    :::::::::::
//                 ..:::::::::::'
//              '::::::::::::'
//                .::::::::::
//           '::::::::::::::..
//                ..::::::::::::.
//              ``::::::::::::::::
//               ::::``:::::::::'        .:::.
//              ::::'   ':::::'       .::::::::.
//            .::::'      ::::     .:::::::'::::.
//           .:::'       :::::  .:::::::::' ':::::.
//          .::'        :::::.:::::::::'      ':::::.
//         .::'         ::::::::::::::'         ``::::.
//     ...:::           ::::::::::::'              ``::.
//    ```` ':.          ':::::::::'                  ::::..
//                       '.:::::'                    ':'````..