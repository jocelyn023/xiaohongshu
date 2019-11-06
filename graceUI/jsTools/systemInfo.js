/*
graceUI-JS - 获取系统信息并识别 iphoneX
link : graceui.hcoder.net
author : 5213606@qq.com 深海

版权声明 : 
GraceUI 的版权约束是不能转售或者将 GraceUI 直接发布到公开渠道！
侵权必究，请遵守版权约定！
*/
module.exports = {
  info: function () {
    try {
      const res = wx.getSystemInfoSync();
      var iPhoneXBottom = 0;
      res.rpx2px = res.windowWidth / 750;

      if (res.model.indexOf('iPhoneX') != -1 || res.model.indexOf('iPhone X') != -1) {
        res.iphonexbottomheightrpx = 72;
        res.iphonexbottomheightpx  = 72 * res.rpx2px;
      } else {
        res.iphonexbottomheightrpx = 0;
        res.iphonexbottomheightpx = 0;
      }
      return res;
    } catch (e) {
      return null;
    }
  }
}