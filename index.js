$(function() {
  $('.increment').click(function() {
    var count = Number($(this).siblings('.itxt').val());
    count += 1;
    //将数字放回input中
    $(this).siblings('.itxt').val(count);

    //小计
    //小计 = 单价*数量
    var singlePrice = $(this).parents('.p-num').siblings('.p-price').text().substr(1);
    var subtotal = singlePrice * count;
    $(this).parents('.p-num').siblings('.p-sum').text('￥' + subtotal.toFixed(2));
    getSum();
  })


  //点击 - 让数字进行减
  $('.decrement').click(function() {
    //拿到数字并修改
    var count = $(this).siblings('.itxt').val();
    //修改数字前先判断是否小于等于1
    if (count <= 1) {
      return;
    }
    count -= 1;
    //将数字放回到input中
    $(this).siblings('.itxt').val(count);

    var singlePrice = $(this).parents('.p-num').siblings('.p-price').text().substr(1);
    var subtotal = singlePrice * count;
    $(this).parents('.p-num').siblings('.p-sum').text('￥' + subtotal.toFixed(2));

  })

  // 3、修复bug
  //change的触发时机：1、表单修改  2、丢失焦点
  $('.itxt').change(function(e) {
    //重新同步小计 小计 = 单价*数量
    var value = e.target.value;
    if (Number(value) < 1) {
      $(this).val(1);
    }

    var count = $(this).val();
    var singlePrice = $(this).parents('.p-num').siblings('.p-price').text().substr(1);
    var subtotal = singlePrice * count;
    $(this).parents('.p-num').siblings('.p-sum').text('￥' + subtotal.toFixed(2));
    getSum();
  })

  //4、全选和反选
  //全选
  //业务逻辑
  //1、将全选按钮的状态同步到所有子按钮
  //2、将所有的购物车添加背景


  //给全选按钮绑定点击事件
  $('.checkall ').click(function() {
    var status = $(this).prop('checked');
    //将状态同步给小按钮们
    $('.j-checkbox,.checkall ').prop('checked', status);

    //如果全选按钮勾选上了，那么就添加class类名，否则就删除
    if (status) {
      $('.cart-item').addClass('check-cart-item');
    } else {
      $('.cart-item').removeClass('check-cart-item');
    }
    getSum();
  })

  // 反选
  //业务逻辑
  //所有小按钮选中才能选中
  $('.j-checkbox').click(function() {
    var isEqual = $('.j-checkbox').length === $('.j-checkbox:checked').length;
    if (isEqual) {
      //全选按钮也选中
      $('.checkall').prop('checked', true)
    } else {
      //否则全选按钮不选中
      $('.checkall').prop('checked', false)
    }

    //*给他的父级添加一个class类名，他有的话就取消类名添加
    $(this).parents('.cart-item').toggleClass('check-cart-item');
    getSum()
  })

  // 5、总计
  //业务逻辑
  //计算每一个的数量，和每一个的单价
  getSum()

  function getSum() {
    var selectedCount = 0
    var allPrice = 0
    $('.itxt').each(function(index, dom) {
      if ($(this).parents('.p-num').siblings('.p-checkbox').children('input').prop('checked')) {
        selectedCount += Number($(dom).val())
      }
    })

    $('.p-num').each(function(index, dom) {
      if ($(this).siblings('.p-checkbox').children('input').prop('checked')) {
        allPrice += Number($(dom).text().substr(1))
      }
    })
    console.log(allPrice)
    $('.amount-sum em').text(selectedCount)
    $('.price-sum em').text('￥' + allPrice.toFixed(2))
  }



  //6、删除功能

  //删除单个商品
  $('.p-action a').click(function() {
    $(this).parents('.cart-item').remove();
    getSum();
  })

  //删除选中的商品
  $('.remove-batch').click(function() {
    $('.check-cart-item').remove();
    getSum();
  })

  //删除所有商品
  $('.clear-all').click(function() {
    $('.cart-item-list').html('');
    getSum();
  })



































})