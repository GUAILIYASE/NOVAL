// pages/index/index.js
import api from "../../http/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
   
  },
  getcode() {
    wx.login({
      success(res) {
        console.log(res)
        wx.setStorageSync('openid', res.code)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    api.gethome().then(res => {
      this.setData({
        data: res
      })
      wx.hideLoading({
        success: (res) => { },
      })
    })


    wx.authorize({
      scope: 'scope.userInfo',
      success: (res) => {
        console.log(res)
      }
    })
      wx.getUserInfo({
        lang: 'lang',
        success: (res) => {
          console.log(res.userInfo)
          wx.setStorageSync('user', res.userInfo)
        }
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