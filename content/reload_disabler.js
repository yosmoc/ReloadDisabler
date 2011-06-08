var ReloadDisabler = {
    init : function () {
        this.button_getmsg = document.getElementById("button-getmsg");
        this.menu_getmsg   = document.getElementById("menu_getAllNewMsgPopup").parentNode;
        this.key_getmsg    = document.getElementById("key_getNewMessages");
        this.key_getallmsg = document.getElementById("key_getAllNewMessages");
        this.timer         = Components.classes["@mozilla.org/timer;1"]
                             .createInstance(Components.interfaces.nsITimer);

    },

    is_enabled : function () {
        return !this.button_getmsg.disabled;
    },

    enable_getmsg : function () {
        this._enable_elm(this.button_getmsg);
        this._enable_elm(this.menu_getmsg);
        this._enable_hotkey(this.key_getmsg, "key_getNewMessages");
        this._enable_hotkey(this.key_getallmsg, "key_getAllNewMessages");

        // 仮で5s
        this._set_timer(5);
    },

    disable_getmsg : function () {
        this._clear_timer();

        this._disable_elm(this.button_getmsg);
        this._disable_elm(this.menu_getmsg);
        this._disable_hotkey(this.key_getmsg);
        this._disable_hotkey(this.key_getallmsg);
    },

    _set_timer : function (time) {
        var self = this;
        this.timer.initWithCallback(function () {
            self.disable_getmsg();
        }, time * 1000, Components.interfaces.nsITimer.TYPE_ONE_SHOT);
    },

    _clear_timer : function() {
        this.timer.cancel();
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
                                     ReloadDisabler.disable_getmsg(); },
                        false);

