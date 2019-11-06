var _self, app = getApp();
Page({
  data: {
    //总价
    totalprice: '',
    // 选择文本
    selectText: "全不选",
    //模拟购物车数据【此数据可以来源于网络、本地存储等多种途径】
    shoppingCard: [
      {
        "checked": true,
        "shopName": "hcoder 官方店",
        "shopId": "1",
        "items": [
          {
            "goodsId": 1,
            "goodsName": "hcoder 演示商品",
            "price": 10.00,
            "count": 1,
            "img": "https://m.360buyimg.com/babel/jfs/t1/3730/7/3438/394579/5b996f2eE1727c59e/373cf10d42a53b72.jpg",
            "checked": true
          },
          {
            "goodsId": 2,
            "goodsName": "dcloud 演示商品",
            "price": 20.00,
            "count": 1,
            "img": "https://img14.360buyimg.com/n7/jfs/t1/1156/8/14017/123589/5bd9a4e8E7dbd4a15/70fbbccdf8811111.jpg",
            "checked": true
          }
        ]
      },
      {
        "checked": true,
        "shopName": "grace 官方旗舰店",
        "shopId": "2",
        "items": [
          {
            "goodsId": 3,
            "goodsName": "uni-app 演示商品",
            "price": 30.00,
            "count": 2,
            "img": "https://img10.360buyimg.com/n7/jfs/t19690/263/1947634738/190301/ad172397/5adfe5eaN42591f8c.jpg",
            "checked": true
          }
        ]
      }
    ]
  },
  onLoad: function () {
    _self = this;
    // 初始化时候计算总价，如果使用api 获取购物车项目在 api 请求完成后执行此函数
    this.countTotoal();
  },
  //计算总计函数
  countTotoal: function () {
    var total = 0;
    for (var i = 0; i < this.data.shoppingCard.length; i++) {
      for (var ii = 0; ii < this.data.shoppingCard[i].items.length; ii++) {
        if (this.data.shoppingCard[i].items[ii].checked) {
          total += Number(this.data.shoppingCard[i].items[ii].price) * Number(this.data.shoppingCard[i].items[ii].count);
        }
      }
    }
    this.setData({ totalprice: total });
  },
  change: function (e) {
    var data = e.detail;
    this.data.shoppingCard[data[2]].items[data[1]].count = data[0];
    this.setData({ shoppingCard: this.data.shoppingCard });
    //计算总价
    this.countTotoal();
  },
  removeGoods: function (e) {
    var index = e.currentTarget.id.replace('removeIndex_', '');
    index = index.split('_');
    var index1 = Number(index[0]);
    var index2 = Number(index[1]);
    wx.showModal({
      title: '确认提醒',
      content: '您确定要移除此商品吗？',
      success: function (e) {
        if (e.confirm) {
          _self.data.shoppingCard[index1].items.splice(index2, 1);
          // 是否全部删除包含商铺
          if (_self.data.shoppingCard[index1].items.length < 1) {
            _self.data.shoppingCard.splice(index1, 1);
          }
          _self.setData({ shoppingCard: _self.data.shoppingCard });
          //计算总价
          _self.countTotoal();
        }
      }
    })
  },
  checkout: function () {
    wx.showToast({
      title: '计算的数据保存在 shoppingCard 变量内 ^_^',
      icon: "none"
    })
  },
  // 店铺选中按钮状态切换
  shopChange: function (e) {
    e = e.detail;
    var index = Number(e[1][0]);
    this.data.shoppingCard[index].checked = e[0];
    for (let i = 0; i < this.data.shoppingCard[index].items.length; i++) {
      this.data.shoppingCard[index].items[i].checked = e[0];
    }
    this.setData({ shoppingCard: this.data.shoppingCard });
    this.countTotoal();
  },
  // 商品选中
  itemChange: function (e) {
    e = e.detail;
    var index = e[1][0].split('-');
    index[0] = Number(index[0]);
    index[1] = Number(index[1]);
    this.data.shoppingCard[index[0]].items[index[1]].checked = e[0];
    var checkedNum = 0;
    for (let i = 0; i < this.data.shoppingCard[index[0]].items.length; i++) {
      if (this.data.shoppingCard[index[0]].items[i].checked) {
        checkedNum++;
      }
    }
    if (checkedNum < 1) {
      this.data.shoppingCard[index[0]].checked = false;
    } else {
      this.data.shoppingCard[index[0]].checked = true;
    }
    this.setData({ shoppingCard: this.data.shoppingCard });
    this.countTotoal();
  },
  itemChangeAll: function (e) {
    console.log(e)
    e = e.detail;
    this.setData({ selectText: e[0] ? '全不选' : '全选' });
    for (var i = 0; i < this.data.shoppingCard.length; i++) {
      this.data.shoppingCard[i].checked = e[0];
      for (var ii = 0; ii < this.data.shoppingCard[i].items.length; ii++) {
        this.data.shoppingCard[i].items[ii].checked = e[0];
      }
    }
    this.setData({ shoppingCard: this.data.shoppingCard });
    this.countTotoal();
  }
})