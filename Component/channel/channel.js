// Component/channel/channel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    channel: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotochannel(e) {
      let index=e.currentTarget.dataset.index
      let id=e.currentTarget.dataset.id
      wx.navigateTo({
        url: `../../pages/channel/channel?index=${index}&id=${id}`,
      })
    }
  }
})
