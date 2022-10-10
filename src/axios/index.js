// 引入axios
import axios from 'axios';
// 首页 热门 好评
const Home_Mes = "/api/api/user/item/list/mainPage"
// http://43.140.252.159:9123/api/user/item/list/mainPage
// 首页 热门 好评
function getHomeMessage(user) {
    console.log(user);
    return axios.get(Home_Mes,{ params: user });
}

export default { getHomeMessage };
