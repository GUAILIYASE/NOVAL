const fly = require('./index')

export default {
  //获取大分类
  gethome() {
    return fly.get(`/index/index`)
  },
  topic(page) {
    return fly.get(`topic/listaction?page=${page}`)
  },
  topicdetail(id) {
    return fly.get(`topic/detailaction?id=${id}`)
  },
  category() {
    return fly.get(`category/indexaction`)
  },
  currentaction(id) {
    return fly.get(`category/currentaction?id=${id}`)
  },
  goodsList(id) {
    return fly.get(`goods/goodsList?categoryId=${id}`)
  },
  shopdetail(id) {
    let openid = wx.getStorageSync('openid')
    return fly.get(`goods/detailaction?id=${id}&openId=${openid}`)
  },



}