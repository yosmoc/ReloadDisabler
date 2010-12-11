var ToggleGetmsg = {
    toggle_getmsg : function () {
        var getmsg = document.getElementById("button-getmsg");
        var menu_getmsg = document.getElementById("menu_getAllNewMsgPopup").parentNode;;

        if (getmsg.disabled) {
            this._enable_elm(getmsg);
            this._enable_elm(menu_getmsg);

            setTimeout(function () {
                ToggleGetmsg._disable_elm(getmsg)
            }, 10 * 1000);
        } else {
            this._disable_elm(getmsg);
            this._disable_elm(menu_getmsg);
        };
    },

    _enable_elm : function (elm) {
        elm.removeAttribute('disabled');
    },
    
    _disable_elm : function (elm) {
        elm.setAttribute('disabled', true);
    }
};

// (function () {
//     ToggleGetmsg.toggle_getmsg();
// })();