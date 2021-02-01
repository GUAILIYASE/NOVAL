const QQMapWX = require('../../lib/qqmap-wx-jssdk');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
     local:{},
     search:'',
     markers:[],
     active:0,
     flage:false
  },
 getvalue(e){
   this.setData({
     search:e.detail.value
   })
 },
 searchsome(){
  var _this = this;
   // 调用接口
   let local=this.data.local
   qqmapsdk.search({
      keyword: this.data.search,  //搜索关键词
      location: `${local.latitude},${local.longitude}`,  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        let mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/static/position.png", //图标路径
            width: 20,
            height: 20,
            address:res.data[i].address
          })
        }
        mks=_this.data.markers.concat(mks)
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks,
          flag:true
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res){
        // console.log(res);
      }
  });
 },
 goaddress(e){
   let index=e.currentTarget.dataset.index
     this.setData({
       active:index/1,
       flag:false
     })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'TAABZ-HLNKI-HIYGT-5LBN6-AJZJ7-P5BSJ'
  });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that=this
    // this.setData
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res)
        let arr=[]
        arr.push(res)
        that.setData({
          markers:arr,
          local:res,
          show:true
        })
      }
     })
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