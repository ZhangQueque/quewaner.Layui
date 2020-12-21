var LayuiHelper = {

    /**
    * 菜单初始化
    * @param tableId  string   表格ID
    * @param url      string   数据接口
    * @param cols     [{}]     表头
    * @param page     bool     是否启动分页，默认true
    * @param limit    int      每页显示数量，默认10
    * @param skin     string   皮肤，默认line
    */
    TableRender: function (tableId, url, cols, page = true, limit=10,skin="line") {
        layui.use(['form', 'table'], function () {
            var $ = layui.jquery,
                form = layui.form,
                table = layui.table;

            table.render({
                elem: tableId,
                url: url,
                toolbar: '#toolbarDemo',
                defaultToolbar: ['filter', 'exports', 'print', {
                    title: '提示',
                    layEvent: 'LAYTABLE_TIPS',
                    icon: 'layui-icon-tips'
                }],
                cols: [cols],
                limits: [10, 15, 20, 25, 50, 100],
                limit: limit,
                page: page,
                skin: skin
            });
        });
    }

}

function CheckFunction(handler) {
    if (!handler || typeof handler !== "function") {
        handler = function () { };
    }
    return handler;
}