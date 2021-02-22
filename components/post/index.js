// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    post: Object
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handlePostClick: ({
      currentTarget
    }) => {
      wx.navigateTo({
        url: `/pages/detail/detail?postId=${currentTarget.dataset.postId}`,

      })
    },
  }
})