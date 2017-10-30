// pages/lists/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "newList": [{
      "id":1,
      "title": "test",
      "img": '../../images/zx.gif',
      "title": "【咨询热线】哦哦哦",
      "date": '2017-10-25'
    }, {
        "id": 2,
      "title": "test",
      "img": '../../images/zx.gif',
      "title": "【优惠信息】",
      "date": '2017-10-25'
      }, {
        "id": 3,
        "title": "test",
        "img": '../../images/zx.gif',
        "title": "【最近活动】",
        "date": '2017-10-25'
    }, {
        "id": 4,
      "title": "test",
      "img": '../../images/zx.gif',
      "title": "【周年活动】哦哦哦",
      "date": '2017-10-25'
      }, {
        "id": 5,
        "title": "test",
        "img": '../../images/zx.gif',
        "title": "【更多】哦哦哦",
        "date": '2017-10-25'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("AA")
    // wx.request({
    //   url: "http://127.0.0.1/weicms/index.php?s=/addon/Cms/Cms/getdetail",
    //   data: {},
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function(res) {
    //     this.setData({
    //       "newsList":res.data
    //     })
    //   },
    //   fail: function(res) {
    //     console.log("fail")
    //   },
    //   complete: function(res) {
    //     console.log("complete")
    //   },
    // })
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