// 引入axios
import axios from 'axios';
// 首页 热门 好评
const HOT_HP = "/api/ajax/topRatedMovies?token=&optimus_uuid=D9F1FC20DDF611EB8EE9456AD6CD7F17CA182499ADC145FEADD38EE5319B88AA&optimus_risk_level=71&optimus_code=10"

// 首页 热门 好评
function getHotHp() {
    return axios.get(HOT_HP);
}
