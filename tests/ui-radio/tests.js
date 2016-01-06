/**
 * 美化单选测试用例
 * @author xieliang
 * @email admin@xuexb.com
 */

(function() {
    'use strict';

    var is_ie_78 = !window.addEventListener; //针对ie78测试一些ui的显示问题，通过判断是否有相关的类来表示是否ok

    asyncTest("使用prop操作", is_ie_78 ? 4 : 2, function() {
        var $wrap = $('<label class="ui-radio">' +
            '<input type="radio" name="xieliang" value="谢亮">' +
            '<span>谢亮</span>' +
            '</label><label class="ui-radio">' +
            '<input type="radio" name="xieliang" value="xuexb">' +
            '<span>xuexb</span>' +
            '</label>').appendTo('#qunit-fixture');

        var $input = $wrap.find('input');

        //实例
        $input.radioMM();


        //选中
        $input.eq(0).prop('checked', true);
        strictEqual($input.get(0).checked, true, '选中');

        //取消选中
        //因为在ie78里单选选中后不支持取消,只能让别的按钮选中
        $input.eq(1).prop('checked', true);
        strictEqual($input.get(0).checked, false, '取消选中');

        if (is_ie_78) {
            $input.eq(0).prop('checked', true);
            strictEqual($input.eq(0).parent().hasClass('checked'), true, '选中的ui');

            //因为在ie78里单选选中后不支持取消,只能让别的按钮选中
            $input.eq(1).prop('checked', true);
            strictEqual($input.eq(0).parent().hasClass('checked'), false, '取消选中的ui');
        }

        start();
    });


    asyncTest("默认选中", is_ie_78 ? 2 : 1, function() {
        var $wrap = $('<label class="ui-radio">' +
            '<input type="radio" name="xieliang" value="谢亮" checked>' +
            '<span>谢亮</span>' +
            '</label><label class="ui-radio">' +
            '<input type="radio" name="xieliang" value="xuexb">' +
            '<span>xuexb</span>' +
            '</label>').appendTo('#qunit-fixture');

        var $input = $wrap.find('input');

        //实例
        $input.radioMM();


        //选中的值
        strictEqual($input.filter(':checked').val(), '谢亮', '选中的值');

        if (is_ie_78) {
            stop();
            setTimeout(function(){
                start();
                strictEqual($input.filter(':checked').parent().hasClass('checked'), true, '选中的ui');
            }, 1);
        }

        start();
    });
})();