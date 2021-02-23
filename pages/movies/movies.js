// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    commingSoon: [],
    top250: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      endpoint
    } = getApp()
    wx.request({
      url: endpoint + 'in_theaters',
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        console.log(res)
        this.setData({
          inTheaters: res.data.subjects
        })
      }
    })
    wx.request({
      url: endpoint + 'coming_soon',
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        this.setData({
          commingSoon: res.data.subjects
        })
      }
    })
    wx.request({
      url: endpoint + 'top250',
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        this.setData({
          top250: res.data.subjects
        })
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