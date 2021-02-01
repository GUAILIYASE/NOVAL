const { default: api } = require("../../http/api")

// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: [],
    active: 0,
    showlist: {},
    scrolltop: 0
  },
  getactive(e) {
    let active = e.currentTarget.dataset.index
    if (active !== this.data.active) {
      this.setData({
        active: active,
        scrolltop: 0
      })
      this.getlist()
    }
  },
  getlist() {
    api.currentaction(this.data.tab[this.data.active].id).then(res => {
      this.setData({
        showlist: res.data.currentOne
      })
      wx.setStorageSync('nav', res.data.currentOne.subList)
    })
  },
  gocategory(e) {
    let id = e.currentTarget.dataset.index
    wx.navigateTo({
      url: `../category/category?index=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    api.category().then(res => {
      this.setData({
        tab: res.categoryList
      })
      let index = wx.getStorageSync('navindex')
      wx.setStorageSync('navindex', 0)
      if (index >= 0) {
        this.setData({
          active: index
        })
      }
      this.getlist()
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