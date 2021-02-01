const { default: api } = require("../../http/api")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nav: [],
    active: 0,
    data:{},
    scrolltop:0
  },
  getindex(e) {
    let index = e.currentTarget.dataset.index
    if (index !== this.data.active) {
      this.setData({
        active: index,
        scrolltop:0
      })
      this.getlist()
    }
  },
  getlist() {
    api.goodsList(this.data.nav[this.data.active].id).then(res => {
      this.setData({
        data:res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.nextTick(() => {
      if (options.index) {
        this.setData({
          active: options.index / 1
        })
      }
      this.getlist()
    })

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
    let nav = wx.getStorageSync('nav')
    this.setData({
      nav: nav
    })

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