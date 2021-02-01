// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      order:[
        {
          icon:'balance-list-o',
          name:'我的订单',
          path:''
        },
        {
          icon:'medal-o',
          name:'优惠券',
          path:''
        },
        {
          icon:'bill-o',
          name:'礼品卡',
          path:''
        },
        {
          icon:'like-o',
          name:'我的收藏',
          path:''
        },
        {
          icon:'eye-o',
          name:'我的足迹',
          path:''
        },
        {
          icon:'vip-card-o',
          name:'会员福利',
          path:''
        },
        {
          icon:'location-o',
          name:'地址管理',
          path:''
        },
        {
          icon:'chat-o',
          name:'账号安全',
          path:''
        },
        {
          icon:'phone-circle-o',
          name:'联系客服',
          path:''
        },
        {
          icon:'question-o',
          name:'帮助中心',
          path:''
        },
        {
          icon:'notes-o',
          name:'意见反馈',
          path:''
        }
      ],
      user:{}
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
     let user=wx.getStorageSync('user')
     this.setData({
       user:user
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