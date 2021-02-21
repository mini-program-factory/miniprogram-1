// pages/detail/detail.js
const {
  postList
} = require('../../data/data')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: {},
    collected: false,
    _pid: null
  },


  toggleCollect: function () {


    const {
      collected,
      _pid: postId
    } = this.data



    wx.setStorageSync(postId, {
      collected: !collected
    })

    this.setData({
      collected: !collected
    })

    wx.showToast({
      title: !collected ? '收藏成功' : '取消收藏',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({
    postId = null
  }) {

    const post = postList.find(({
      postId: id
    }) => id === Number(postId))

    const {
      collected
    } = wx.getStorageSync(postId)

    this.setData({
      _pid: postId,
      collected,
      post
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