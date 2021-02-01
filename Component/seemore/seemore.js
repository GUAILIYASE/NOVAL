// Component/seemore/seemore.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    color: {
      type: String
    },
    color1: {
      type: String
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
    gomore() {
      wx.navigateTo({
        url: '/pages/more/more',
      })
    }
  }
})
