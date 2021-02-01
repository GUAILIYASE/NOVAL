import api from "../../http/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic: [],
    page: 1,
  },
  gettopic() {
    wx.showLoading({
      title: '加载中',
    })
    let page = this.data.page
    let topic = this.data.topic
    api.topic(page).then(res => {
      if(res.data.length){
        if (page === 1 && !topic.length) {
        this.setData({
          topic: res.data
        })
      } else {
          topic=topic.concat(res.data)
          this.setData({
            topic:topic
          })
      }
      this.setData({
        page:page+1
      })
      }else{
        wx.showToast({
          title: '已经到底了',
        })
      }
      wx.hideLoading()
    })
  },
  scrolltolower(){
   this.gettopic()
  },
  goto(e){
    let id=e.currentTarget.dataset.detail.id
    wx.navigateTo({
      url: `../themedetail/themedetail?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gettopic()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})