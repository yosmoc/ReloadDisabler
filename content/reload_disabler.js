var ReloadDisabler = {
    init : function () {
        this.button_getmsg = document.getElementById("button-getmsg");
        this.menu_getmsg   = document.getElementById("menu_getAllNewMsgPopup").parentNode;
        this.key_getmsg    = document.getElementById("key_getNewMessages");
        this.key_getallmsg = document.getElementById("key_getAllNewMessages");
        this.timer         = 0;
    },

    toggle_getmsg : function () {
        if (this.button_getmsg.disabled) {
            this._enable_elm(this.button_getmsg);
            this._enable_elm(this.menu_getmsg);
            this._enable_hotkey(this.key_getmsg, "key_getNewMessages");
            this._enable_hotkey(this.key_getallmsg, "key_getAllNewMessages");

            var self = this;

            this.timer = setTimeout(function () {
                self._disable_elm(self.button_getmsg);
                self._disable_elm(self.menu_getmsg);
                self._disable_hotkey(this.key_getmsg);
                self._disable_hotkey(this.key_getallmsg);
            }, 15 * 1000);

        } else {
            clearTimeout(this.timer);

            this._disable_elm(this.button_getmsg);
            this._disable_elm(this.menu_getmsg);
            this._disable_hotkey(this.key_getmsg);
            this._disable_hotkey(this.key_getallmsg);
        };
    },

    _enable_elm : function (elm) {
        elm.removeAttribute('disabled');
    },
    
    _disable_elm : function (elm) {
        elm.setAttribute('disabled', true);
    },

    _enable_hotkey : function (keyid, command) {
        keyid.attributes.oncommand.value = goDoCommand(command);
    },

    _disable_hotkey : function (keyid) {
        keyid.attributes.oncommand.value = goDoCommand("");
    }
};

window.addEventListener("load",
                        function() { ReloadDisabler.init();
                                     ReloadDisabler.toggle_getmsg(); },
                        false);
