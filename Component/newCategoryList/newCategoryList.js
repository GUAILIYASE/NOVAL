// Component/newCategoryList/newCategoryList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newCategoryList:{
      type:Array
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
    gotoclassify(e){
      let index=e.currentTarget.dataset.index
      wx.setStorageSync('navindex', index)
      wx.switchTab({
        url: `../../pages/classify/classify`,
      })
    }
  }
})
