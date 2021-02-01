// Component/position/positin.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
     value:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
     getvalue(e){
       console.log(e)
       this.setData({
         value:e.detail.value
       })
     },
     goto(){
     
      



       wx.navigateTo({
         url: '../../pages/position/position',
       })
     }
  }
})
