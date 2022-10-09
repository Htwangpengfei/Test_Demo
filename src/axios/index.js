// 引入axios
import axios from 'axios';
// 首页 热门 好评
const Home_Mes = "/data/api/user/item/list/mainPage"

// 首页 热门 好评
function getHomeMessage(params) {
    return axios.get(Home_Mes,{ params });
}

export default { getHomeMessage };
