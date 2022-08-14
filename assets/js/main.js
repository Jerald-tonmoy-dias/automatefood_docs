"use strict"

jQuery(document).ready(function () {

    // icon picker options
    var iconPickerOptions = { searchText: "Buscar...", labelHeader: "{0}/{1}" };
    // sortable list options
    var sortableListOptions = {
        placeholderCss: { 'background-color': "#cccccc" },
        onChange: function (e) {
            editor.update();
            var str = editor.getString();
            $("#out").text(str);

            // ajax setup

            var url = $('#menu_project_store_url').val();

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            // ajax setup request start

            $.ajax({
                type: 'POST',
                url: url,
                data: {
                    menu: str
                },
                beforeSend: function () {
                    $.notify("sorting", "info");
                },
                success: function (data) {
                    $.notify("success", "success");
                },
                error: function (data) {
                    $.notify("Opps!", "error");
                }
            });

            // ajax setup request end

        },
    };

    var editor = new MenuEditor('myEditor', {
        listOptions: sortableListOptions,
        iconPicker: iconPickerOptions
    });

    editor.setForm($('#frmEdit'));
    editor.setUpdateButton($('#btnUpdate'));

    /**
     * Update the menu
     */

    $("#btnUpdate").on('click', function () {
        editor.update();
        var str = editor.getString();
        $("#out").text(str);

        // ajax setup

        var url = $('#menu_project_store_url').val();

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        // ajax setup request start

        $.ajax({
            type: 'POST',
            url: url,
            data: {
                menu: str
            },
            beforeSend: function () {
                $.notify("updating", "info");
            },
            success: function (data) {
                $.notify("success", "success");
            },
            error: function (data) {
                $.notify("Opps!", "error");
            }
        });

        // ajax setup request end
    });

    /**
     * Add new menu item
     */
    $('#btnAdd').on('click', function () {
        editor.add();
        var str = editor.getString();
        $("#out").text(str);

        // ajax setup

        var url = $('#menu_project_store_url').val();

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        // ajax setup request start

        $.ajax({
            type: 'POST',
            url: url,
            data: {
                menu: str
            },
            beforeSend: function () {
                $.notify("saving", "info");
            },
            success: function (data) {
                $.notify("success", "success");
            },
            error: function (data) {
                $.notify("Opps!", "error");
            }
        });

        // ajax setup request end
    });

    /**Project Menu data */

    var url = $('#menus_project_url').val();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // ajax setup request start

    $.ajax({
        type: 'GET',
        url: url,
        data: {},
        beforeSend: function () {
            $('#myEditor').text("loading");
            $.notify("loading", "info");
        },
        success: function (data) {
            $.notify("Menus loaded", "success");
            editor.setData(data);
        },
        error: function (data) {
            $.notify("Opps!", "error");
        }
    });



});

// onDelete
function hotReload() {
    var editor = new MenuEditor('myEditor');
    var str = editor.getString();
    $("#out").text(str);

    // ajax setup

    var url = $('#menu_store_url').val();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // ajax setup request start

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            menu: str
        },
        success: function (data) {
            $.notify("success", "success");
        }
    });

    // ajax setup request end
}


function reload(){
    location.reload(true);
}