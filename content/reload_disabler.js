var ReloadDisabler = {
    init : function () {
        this.getmsg      = document.getElementById("button-getmsg");
        this.menu_getmsg = document.getElementById("menu_getAllNewMsgPopup").parentNode;
    },

    toggle_getmsg : function () {
        if (this.getmsg.disabled) {
            this._enable_elm(this.getmsg);
            this._enable_elm(this.menu_getmsg);

            var self = this;

            var timer = setTimeout(function () {
                self._disable_elm(self.getmsg);
                self._disable_elm(self.menu_getmsg);
            }, 5 * 1000);

        } else {
            clearTimeout(timer);

            this._disable_elm(this.getmsg);
            this._disable_elm(this.menu_getmsg);
        };
    },

    _enable_elm : function (elm) {
        elm.removeAttribute('disabled');
    },
    
    _disable_elm : function (elm) {
        elm.setAttribute('disabled', true);
    }
};

window.addEventListener("load", function() { ReloadDisabler.init();
                                             ReloadDisabler.toggle_getmsg()},
                        false);
