// pages/detail/detail.js
const {
  postList
} = require('../../data/data')

const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: {},
    collected: false,
    isPlaying: false,
    _pid: null
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


    wx.getBackgroundAudioManager().onPlay(() => {
      console.log('on music play')
      app.isPlaying = true
      this.setData({
        isPlaying: true
      })
    })

    wx.getBackgroundAudioManager().onPause(() => {
      console.log('on music pause')
      app.isPlaying = false
      this.setData({
        isPlaying: false
      })
    })

    this.setData({
      _pid: postId,
      collected,
      post,
      isPlaying: app.isPlaying
    })


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
  async playBGMusic() {
    const {
      isPlaying,
      post
    } = this.data
    const bgmMgr = wx.getBackgroundAudioManager()

    if (!isPlaying) {
      bgmMgr.src = post.music.url
      bgmMgr.title = post.music.title
      bgmMgr.play()
    } else {
      bgmMgr.pause()
    }

    this.setData({
      isPlaying: !isPlaying
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