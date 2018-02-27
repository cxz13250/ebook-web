import 'js/pnotify.custom.min.js'
var stack_topleft = { "dir1": "down", "dir2": "right", "push": "top" };
var stack_bottomleft = { "dir1": "right", "dir2": "up", "push": "top" };
var stack_custom = { "dir1": "right", "dir2": "down" };
var stack_custom2 = { "dir1": "left", "dir2": "up", "push": "top" };
var stack_modal = { "dir1": "down", "dir2": "right", "push": "top", "modal": true, "overlay_close": true };
var stack_bar_top = { "dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0 };
var stack_bar_bottom = { "dir1": "up", "dir2": "right", "spacing1": 0, "spacing2": 0 };

export function show_stack_topleft(type, message) {
    var opts = {
        title: "Over Here",
        text: "Check me out. I'm in a different stack.",
        addclass: "stack_topleft",
        delay: 1000,
        styling: "brighttheme",
        stack: stack_topleft
    };
    switch (type) {
        case 'error':
            opts.title = "错误";
            opts.text = message;
            opts.type = "error";
            break;
        case 'success':
            opts.title = "成功";
            opts.text = message;
            opts.type = "success";
            break;
        case 'info':
            opts.title = "提示";
            opts.text = message;
            opts.type = "info";
            break;
    }
    new PNotify(opts);
}