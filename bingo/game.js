var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Score: "Score",
        Time: "Time",
        Other: "Other Players",
        Left: " balls left",
        Leave: "Leave The Game?",
        End: "Game ends in ",
        Pattern: "WIN PATTERNS",
        Pause: "PAUSED",
        Win: "YOU WIN!",
        Lose: "YOU LOSE!",
        Place: "You've placed ",
        No: "No bingo balls left!",
        Ok: "OK",
        Scene: "Choose Your Destination",
        NY: "New York",
        Paris: "Shanghai",
        SH: "Paris"
    },
    Results: {
        Title: "High score"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !0,
            Link: "http://google.com",
            LinkEnabled: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile"
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {
	/*
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d =
                c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : e <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : e <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                    MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
    */
};
var MobileAdInGameHeader = {
	/*
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : e <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" :
                e <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
    */
};
var MobileAdInGameFooter = {
	/*
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" :
                e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
    */
};
var MobileAdInGameEnd = {
	/*
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : e <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : e <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
    */
};
(function(b, c) {
    function d(b, j, z) {
        if (z === c && 1 === b.nodeType)
            if (z = "data-" + j.replace(sc, "-$1").toLowerCase(), z = b.getAttribute(z), "string" == typeof z) {
                try {
                    z = "true" === z ? !0 : "false" === z ? !1 : "null" === z ? null : +z + "" === z ? +z : tc.test(z) ? f.parseJSON(z) : z
                } catch (d) {}
                f.data(b, j, z)
            } else z = c;
        return z
    }

    function e(b) {
        for (var j in b)
            if (!("data" === j && f.isEmptyObject(b[j])) && "toJSON" !== j) return !1;
        return !0
    }

    function g() {
        return !1
    }

    function m() {
        return !0
    }

    function y(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function r(b,
        j) {
        do b = b[j]; while (b && 1 !== b.nodeType);
        return b
    }

    function q(b, j, c) {
        j = j || 0;
        if (f.isFunction(j)) return f.grep(b, function(b, v) {
            return !!j.call(b, v, b) === c
        });
        if (j.nodeType) return f.grep(b, function(b) {
            return b === j === c
        });
        if ("string" == typeof j) {
            var d = f.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (uc.test(j)) return f.filter(j, d, !c);
            j = f.filter(j, d)
        }
        return f.grep(b, function(b) {
            return 0 <= f.inArray(b, j) === c
        })
    }

    function u(b) {
        var j = wb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; j.length;) b.createElement(j.pop());
        return b
    }

    function s(b, j) {
        if (1 === j.nodeType && f.hasData(b)) {
            var c, d, x;
            d = f._data(b);
            var B = f._data(j, d),
                t = d.events;
            if (t)
                for (c in delete B.handle, B.events = {}, t) {
                    d = 0;
                    for (x = t[c].length; d < x; d++) f.event.add(j, c, t[c][d])
                }
            B.data && (B.data = f.extend({}, B.data))
        }
    }

    function l(b, j) {
        var c;
        1 === j.nodeType && (j.clearAttributes && j.clearAttributes(), j.mergeAttributes && j.mergeAttributes(b), c = j.nodeName.toLowerCase(), "object" === c ? (j.parentNode && (j.outerHTML = b.outerHTML), f.support.html5Clone && b.innerHTML && !f.trim(j.innerHTML) &&
            (j.innerHTML = b.innerHTML)) : "input" === c && xb.test(b.type) ? (j.defaultChecked = j.checked = b.checked, j.value !== b.value && (j.value = b.value)) : "option" === c ? j.selected = b.defaultSelected : "input" === c || "textarea" === c ? j.defaultValue = b.defaultValue : "script" === c && j.text !== b.text && (j.text = b.text), j.removeAttribute(f.expando))
    }

    function n(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function p(b) {
        xb.test(b.type) && (b.defaultChecked =
            b.checked)
    }

    function A(b, j) {
        if (j in b) return j;
        for (var c = j.charAt(0).toUpperCase() + j.slice(1), f = j, d = yb.length; d--;)
            if (j = yb[d] + c, j in b) return j;
        return f
    }

    function D(b, j) {
        return b = j || b, "none" === f.css(b, "display") || !f.contains(b.ownerDocument, b)
    }

    function K(b, j) {
        for (var c, d, x = [], B = 0, t = b.length; B < t; B++) c = b[B], c.style && (x[B] = f._data(c, "olddisplay"), j ? (!x[B] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && D(c) && (x[B] = f._data(c, "olddisplay", P(c.nodeName)))) : (d = Q(c, "display"), !x[B] && "none" !==
            d && f._data(c, "olddisplay", d)));
        for (B = 0; B < t; B++)
            if (c = b[B], c.style && (!j || "none" === c.style.display || "" === c.style.display)) c.style.display = j ? x[B] || "" : "none";
        return b
    }

    function M(b, j, c) {
        return (b = vc.exec(j)) ? Math.max(0, b[1] - (c || 0)) + (b[2] || "px") : j
    }

    function Xa(b, j, c, d) {
        j = c === (d ? "border" : "content") ? 4 : "width" === j ? 1 : 0;
        for (var x = 0; 4 > j; j += 2) "margin" === c && (x += f.css(b, c + ea[j], !0)), d ? ("content" === c && (x -= parseFloat(Q(b, "padding" + ea[j])) || 0), "margin" !== c && (x -= parseFloat(Q(b, "border" + ea[j] + "Width")) || 0)) : (x += parseFloat(Q(b,
            "padding" + ea[j])) || 0, "padding" !== c && (x += parseFloat(Q(b, "border" + ea[j] + "Width")) || 0));
        return x
    }

    function G(b, j, c) {
        var d = "width" === j ? b.offsetWidth : b.offsetHeight,
            x = !0,
            B = f.support.boxSizing && "border-box" === f.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = Q(b, j);
            if (0 > d || null == d) d = b.style[j];
            if (ya.test(d)) return d;
            x = B && (f.support.boxSizingReliable || d === b.style[j]);
            d = parseFloat(d) || 0
        }
        return d + Xa(b, j, c || (B ? "border" : "content"), x) + "px"
    }

    function P(b) {
        if (Ya[b]) return Ya[b];
        var j = f("<" + b + ">").appendTo(C.body),
            c = j.css("display");
        j.remove();
        if ("none" === c || "" === c) {
            la = C.body.appendChild(la || f.extend(C.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement) ma = (la.contentWindow || la.contentDocument).document, ma.write("<!doctype html><html><body>"), ma.close();
            j = ma.body.appendChild(ma.createElement(b));
            c = Q(j, "display");
            C.body.removeChild(la)
        }
        return Ya[b] = c, c
    }

    function N(b, j, c, d) {
        var x;
        if (f.isArray(j)) f.each(j, function(j, f) {
            c || wc.test(b) ? d(b, f) : N(b + "[" + ("object" == typeof f ? j : "") + "]", f, c, d)
        });
        else if (!c &&
            "object" === f.type(j))
            for (x in j) N(b + "[" + x + "]", j[x], c, d);
        else d(b, j)
    }

    function za(b) {
        return function(j, c) {
            "string" != typeof j && (c = j, j = "*");
            var d, x, B = j.toLowerCase().split(fa),
                t = 0,
                e = B.length;
            if (f.isFunction(c))
                for (; t < e; t++) d = B[t], (x = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = b[d] = b[d] || [], d[x ? "unshift" : "push"](c)
        }
    }

    function na(b, j, z, f, d, B) {
        d = d || j.dataTypes[0];
        B = B || {};
        B[d] = !0;
        var t;
        d = b[d];
        for (var e = 0, l = d ? d.length : 0, g = b === Za; e < l && (g || !t); e++) t = d[e](j, z, f), "string" == typeof t && (!g || B[t] ? t = c : (j.dataTypes.unshift(t),
            t = na(b, j, z, f, t, B)));
        return (g || !t) && !B["*"] && (t = na(b, j, z, f, "*", B)), t
    }

    function sa(b, j) {
        var z, d, x = f.ajaxSettings.flatOptions || {};
        for (z in j) j[z] !== c && ((x[z] ? b : d || (d = {}))[z] = j[z]);
        d && f.extend(!0, b, d)
    }

    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch (v) {}
    }

    function Ab() {
        return setTimeout(function() {
            Aa = c
        }, 0), Aa = f.now()
    }

    function Bb(b, j, c) {
        var d, x = 0,
            B = Ba.length,
            t = f.Deferred().always(function() {
                delete e.elem
            }),
            e = function() {
                for (var j = Aa || Ab(), j = Math.max(0, l.startTime + l.duration - j), c = 1 - (j / l.duration || 0), z =
                    0, f = l.tweens.length; z < f; z++) l.tweens[z].run(c);
                return t.notifyWith(b, [l, c, j]), 1 > c && f ? j : (t.resolveWith(b, [l]), !1)
            },
            l = t.promise({
                elem: b,
                props: f.extend({}, j),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: j,
                originalOptions: c,
                startTime: Aa || Ab(),
                duration: c.duration,
                tweens: [],
                createTween: function(j, c) {
                    var z = f.Tween(b, l.opts, j, c, l.opts.specialEasing[j] || l.opts.easing);
                    return l.tweens.push(z), z
                },
                stop: function(j) {
                    for (var c = 0, z = j ? l.tweens.length : 0; c < z; c++) l.tweens[c].run(1);
                    return j ? t.resolveWith(b, [l, j]) : t.rejectWith(b, [l, j]), this
                }
            });
        j = l.props;
        c = l.opts.specialEasing;
        var g, n, p, m;
        for (d in j)
            if (g = f.camelCase(d), n = c[g], p = j[d], f.isArray(p) && (n = p[1], p = j[d] = p[0]), d !== g && (j[g] = p, delete j[d]), (m = f.cssHooks[g]) && "expand" in m)
                for (d in p = m.expand(p), delete j[g], p) d in j || (j[d] = p[d], c[d] = n);
            else c[g] = n;
        for (; x < B; x++)
            if (d = Ba[x].call(l, b, j, l.opts)) return d;
        var r = l;
        f.each(j, function(b, v) {
            for (var j = (ta[b] || []).concat(ta["*"]), c = 0, z = j.length; c < z && !j[c].call(r, b, v); c++);
        });
        return f.isFunction(l.opts.start) && l.opts.start.call(b,
            l), f.fx.timer(f.extend(e, {
            anim: l,
            queue: l.opts.queue,
            elem: b
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function S(b, j, c, f, d) {
        return new S.prototype.init(b, j, c, f, d)
    }

    function Ca(b, j) {
        var c, f = {
                height: b
            },
            d = 0;
        for (j = j ? 1 : 0; 4 > d; d += 2 - j) c = ea[d], f["margin" + c] = f["padding" + c] = b;
        return j && (f.opacity = f.width = b), f
    }

    function Cb(b) {
        return f.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Db, Da, C = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac =
        b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        aa = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        $a = Object.prototype.hasOwnProperty,
        ab = String.prototype.trim,
        f = function(b, j) {
            return new f.fn.init(b, j, Db)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        fa = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, j) {
            return (j + "").toUpperCase()
        },
        Fa = function() {
            C.addEventListener ? (C.removeEventListener("DOMContentLoaded", Fa, !1), f.ready()) : "complete" === C.readyState && (C.detachEvent("onreadystatechange", Fa), f.ready())
        },
        Hb = {};
    f.fn = f.prototype = {
        constructor: f,
        init: function(b, j, z) {
            var d, x;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Fc.exec(b);
                if (d && (d[1] || !j)) {
                    if (d[1]) return j = j instanceof f ? j[0] : j, x = j && j.nodeType ? j.ownerDocument || j : C, b = f.parseHTML(d[1], x, !0), Gb.test(d[1]) && f.isPlainObject(j) && this.attr.call(b, j, !0), f.merge(this, b);
                    if ((j = C.getElementById(d[2])) && j.parentNode) {
                        if (j.id !== d[2]) return z.find(b);
                        this.length = 1;
                        this[0] = j
                    }
                    return this.context = C, this.selector = b, this
                }
                return !j || j.jquery ? (j || z).find(b) : this.constructor(j).find(b)
            }
            return f.isFunction(b) ? z.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), f.makeArray(b,
                this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return aa.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, j, c) {
            b = f.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === j ? b.selector = this.selector + (this.selector ? " " : "") + c : j && (b.selector = this.selector + "." + j + "(" + c + ")"), b
        },
        each: function(b, j) {
            return f.each(this, b, j)
        },
        ready: function(b) {
            return f.ready.promise().done(b),
                this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(aa.apply(this, arguments), "slice", aa.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(f.map(this, function(j, c) {
                return b.call(j, c, j)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    f.fn.init.prototype = f.fn;
    f.extend = f.fn.extend = function() {
        var b,
            j, z, d, x, e, t = arguments[0] || {},
            l = 1,
            g = arguments.length,
            n = !1;
        "boolean" == typeof t && (n = t, t = arguments[1] || {}, l = 2);
        "object" != typeof t && !f.isFunction(t) && (t = {});
        for (g === l && (t = this, --l); l < g; l++)
            if (null != (b = arguments[l]))
                for (j in b) z = t[j], d = b[j], t !== d && (n && d && (f.isPlainObject(d) || (x = f.isArray(d))) ? (x ? (x = !1, e = z && f.isArray(z) ? z : []) : e = z && f.isPlainObject(z) ? z : {}, t[j] = f.extend(n, e, d)) : d !== c && (t[j] = d));
        return t
    };
    f.extend({
        noConflict: function(v) {
            return b.$ === f && (b.$ = Bc), v && b.jQuery === f && (b.jQuery = Ac), f
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? f.readyWait++ : f.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --f.readyWait : f.isReady)) {
                if (!C.body) return setTimeout(f.ready, 1);
                f.isReady = !0;
                !0 !== b && 0 < --f.readyWait || (Da.resolveWith(C, [f]), f.fn.trigger && f(C).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === f.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === f.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return !1;
            try {
                if (b.constructor && !$a.call(b, "constructor") && !$a.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (j) {
                return !1
            }
            for (var z in b);
            return z === c || $a.call(b, z)
        },
        isEmptyObject: function(b) {
            for (var j in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, j, c) {
            var d;
            return !b || "string" != typeof b ? null : ("boolean" ==
                typeof j && (c = j, j = 0), j = j || C, (d = Gb.exec(b)) ? [j.createElement(d[1])] : (d = f.buildFragment([b], j, c ? null : []), f.merge([], (d.cacheable ? f.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(v) {
            if (!v || "string" != typeof v) return null;
            v = f.trim(v);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(v);
            if (Gc.test(v.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + v))();
            f.error("Invalid JSON: " + v)
        },
        parseXML: function(v) {
            var j, z;
            if (!v || "string" != typeof v) return null;
            try {
                b.DOMParser ?
                    (z = new DOMParser, j = z.parseFromString(v, "text/xml")) : (j = new ActiveXObject("Microsoft.XMLDOM"), j.async = "false", j.loadXML(v))
            } catch (d) {
                j = c
            }
            return (!j || !j.documentElement || j.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + v), j
        },
        noop: function() {},
        globalEval: function(v) {
            v && Dc.test(v) && (b.execScript || function(v) {
                b.eval.call(b, v)
            })(v)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, j) {
            return b.nodeName && b.nodeName.toLowerCase() === j.toLowerCase()
        },
        each: function(b, j, z) {
            var d, x = 0,
                e = b.length,
                t = e === c || f.isFunction(b);
            if (z)
                if (t)
                    for (d in b) {
                        if (!1 === j.apply(b[d], z)) break
                    } else
                        for (; x < e && !1 !== j.apply(b[x++], z););
                else if (t)
                for (d in b) {
                    if (!1 === j.call(b[d], d, b[d])) break
                } else
                    for (; x < e && !1 !== j.call(b[x], x, b[x++]););
            return b
        },
        trim: ab && !ab.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : ab.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        },
        makeArray: function(b, j) {
            var c, d = j || [];
            return null != b && (c = f.type(b), null == b.length || "string" === c || "function" ===
                c || "regexp" === c || f.isWindow(b) ? Eb.call(d, b) : f.merge(d, b)), d
        },
        inArray: function(b, j, c) {
            var d;
            if (j) {
                if (Fb) return Fb.call(j, b, c);
                d = j.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in j && j[c] === b) return c
            }
            return -1
        },
        merge: function(b, j) {
            var d = j.length,
                f = b.length,
                x = 0;
            if ("number" == typeof d)
                for (; x < d; x++) b[f++] = j[x];
            else
                for (; j[x] !== c;) b[f++] = j[x++];
            return b.length = f, b
        },
        grep: function(b, j, c) {
            var d, f = [],
                e = 0,
                t = b.length;
            for (c = !!c; e < t; e++) d = !!j(b[e], e), c !== d && f.push(b[e]);
            return f
        },
        map: function(b, j, d) {
            var F,
                x, e = [],
                t = 0,
                l = b.length;
            if (b instanceof f || l !== c && "number" == typeof l && (0 < l && b[0] && b[l - 1] || 0 === l || f.isArray(b)))
                for (; t < l; t++) F = j(b[t], t, d), null != F && (e[e.length] = F);
            else
                for (x in b) F = j(b[x], x, d), null != F && (e[e.length] = F);
            return e.concat.apply([], e)
        },
        guid: 1,
        proxy: function(b, j) {
            var d, F, x;
            return "string" == typeof j && (d = b[j], j = b, b = d), f.isFunction(b) ? (F = aa.call(arguments, 2), x = function() {
                return b.apply(j, F.concat(aa.call(arguments)))
            }, x.guid = b.guid = b.guid || f.guid++, x) : c
        },
        access: function(b, j, d, F, x, e, t) {
            var l, g =
                null == d,
                n = 0,
                p = b.length;
            if (d && "object" == typeof d) {
                for (n in d) f.access(b, j, n, d[n], 1, e, F);
                x = 1
            } else if (F !== c) {
                l = t === c && f.isFunction(F);
                g && (l ? (l = j, j = function(b, v, j) {
                    return l.call(f(b), j)
                }) : (j.call(b, F), j = null));
                if (j)
                    for (; n < p; n++) j(b[n], d, l ? F.call(b[n], n, j(b[n], d)) : F, t);
                x = 1
            }
            return x ? b : g ? j.call(b) : p ? j(b[0], d) : e
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    f.ready.promise = function(v) {
        if (!Da)
            if (Da = f.Deferred(), "complete" === C.readyState) setTimeout(f.ready, 1);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded",
            Fa, !1), b.addEventListener("load", f.ready, !1);
        else {
            C.attachEvent("onreadystatechange", Fa);
            b.attachEvent("onload", f.ready);
            var j = !1;
            try {
                j = null == b.frameElement && C.documentElement
            } catch (c) {}
            j && j.doScroll && function x() {
                if (!f.isReady) {
                    try {
                        j.doScroll("left")
                    } catch (b) {
                        return setTimeout(x, 50)
                    }
                    f.ready()
                }
            }()
        }
        return Da.promise(v)
    };
    f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, j) {
        Hb["[object " + j + "]"] = j.toLowerCase()
    });
    Db = f(C);
    var Ib = {};
    f.Callbacks = function(b) {
        var j;
        if ("string" ==
            typeof b) {
            if (!(j = Ib[b])) {
                j = b;
                var d = Ib[j] = {};
                j = (f.each(j.split(fa), function(b, v) {
                    d[v] = !0
                }), d)
            }
        } else j = f.extend({}, b);
        b = j;
        var F, x, e, t, l, g, n = [],
            p = !b.once && [],
            m = function(j) {
                F = b.memory && j;
                x = !0;
                g = t || 0;
                t = 0;
                l = n.length;
                for (e = !0; n && g < l; g++)
                    if (!1 === n[g].apply(j[0], j[1]) && b.stopOnFalse) {
                        F = !1;
                        break
                    }
                e = !1;
                n && (p ? p.length && m(p.shift()) : F ? n = [] : r.disable())
            },
            r = {
                add: function() {
                    if (n) {
                        var j = n.length;
                        (function xc(j) {
                            f.each(j, function(j, c) {
                                var d = f.type(c);
                                "function" === d && (!b.unique || !r.has(c)) ? n.push(c) : c && c.length && "string" !==
                                    d && xc(c)
                            })
                        })(arguments);
                        e ? l = n.length : F && (t = j, m(F))
                    }
                    return this
                },
                remove: function() {
                    return n && f.each(arguments, function(b, v) {
                        for (var j; - 1 < (j = f.inArray(v, n, j));) n.splice(j, 1), e && (j <= l && l--, j <= g && g--)
                    }), this
                },
                has: function(b) {
                    return -1 < f.inArray(b, n)
                },
                empty: function() {
                    return n = [], this
                },
                disable: function() {
                    return n = p = F = c, this
                },
                disabled: function() {
                    return !n
                },
                lock: function() {
                    return p = c, F || r.disable(), this
                },
                locked: function() {
                    return !p
                },
                fireWith: function(b, v) {
                    return v = v || [], v = [b, v.slice ? v.slice() : v], n && (!x || p) &&
                        (e ? p.push(v) : m(v)), this
                },
                fire: function() {
                    return r.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!x
                }
            };
        return r
    };
    f.extend({
        Deferred: function(b) {
            var j = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return x.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return f.Deferred(function(v) {
                            f.each(j, function(j,
                                c) {
                                var d = c[0],
                                    z = b[j];
                                x[c[1]](f.isFunction(z) ? function() {
                                    var b = z.apply(this, arguments);
                                    b && f.isFunction(b.promise) ? b.promise().done(v.resolve).fail(v.reject).progress(v.notify) : v[d + "With"](this === x ? v : this, [b])
                                } : v[d])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? f.extend(b, d) : d
                    }
                },
                x = {};
            return d.pipe = d.then, f.each(j, function(b, v) {
                var f = v[2],
                    e = v[3];
                d[v[1]] = f.add;
                e && f.add(function() {
                    c = e
                }, j[b ^ 1][2].disable, j[2][2].lock);
                x[v[0]] = f.fire;
                x[v[0] + "With"] = f.fireWith
            }), d.promise(x), b && b.call(x, x), x
        },
        when: function(b) {
            var j = 0,
                c = aa.call(arguments),
                d = c.length,
                x = 1 !== d || b && f.isFunction(b.promise) ? d : 0,
                e = 1 === x ? b : f.Deferred(),
                t = function(b, v, j) {
                    return function(c) {
                        v[b] = this;
                        j[b] = 1 < arguments.length ? aa.call(arguments) : c;
                        j === l ? e.notifyWith(v, j) : --x || e.resolveWith(v, j)
                    }
                },
                l, g, n;
            if (1 < d) {
                l = Array(d);
                g = Array(d);
                for (n = Array(d); j < d; j++) c[j] && f.isFunction(c[j].promise) ? c[j].promise().done(t(j, n, c)).fail(e.reject).progress(t(j, g, l)) : --x
            }
            return x || e.resolveWith(n, c), e.promise()
        }
    });
    var Nc = f,
        bb, O, Ga, ga, Ha, Ia, T, ha, Ja, cb,
        ua, Jb, J = C.createElement("div");
    J.setAttribute("className", "t");
    J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = J.getElementsByTagName("*");
    ga = J.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length) bb = {};
    else {
        Ha = C.createElement("select");
        Ia = Ha.appendChild(C.createElement("option"));
        T = J.getElementsByTagName("input")[0];
        O = {
            leadingWhitespace: 3 === J.firstChild.nodeType,
            tbody: !J.getElementsByTagName("tbody").length,
            htmlSerialize: !!J.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !!ga.style.cssFloat,
            checkOn: "on" === T.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== J.className,
            enctype: !!C.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === C.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        T.checked = !0;
        O.noCloneChecked = T.cloneNode(!0).checked;
        Ha.disabled = !0;
        O.optDisabled = !Ia.disabled;
        try {
            delete J.test
        } catch (Pd) {
            O.deleteExpando = !1
        }!J.addEventListener && J.attachEvent && J.fireEvent && (J.attachEvent("onclick", Jb = function() {
            O.noCloneEvent = !1
        }), J.cloneNode(!0).fireEvent("onclick"), J.detachEvent("onclick", Jb));
        T = C.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        O.radioValue = "t" === T.value;
        T.setAttribute("checked",
            "checked");
        T.setAttribute("name", "t");
        J.appendChild(T);
        ha = C.createDocumentFragment();
        ha.appendChild(J.lastChild);
        O.checkClone = ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        O.appendChecked = T.checked;
        ha.removeChild(T);
        ha.appendChild(J);
        if (J.attachEvent)
            for (cb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ja = "on" + cb, (ua = Ja in J) || (J.setAttribute(Ja, "return;"), ua = "function" == typeof J[Ja]), O[cb + "Bubbles"] = ua;
        bb = (f(function() {
            var v, j, c, d, f = C.getElementsByTagName("body")[0];
            f && (v = C.createElement("div"), v.style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(v, f.firstChild), j = C.createElement("div"), v.appendChild(j), j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = j.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", O.reliableHiddenOffsets = ua && 0 === c[0].offsetHeight, j.innerHTML = "", j.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                O.boxSizing = 4 === j.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, b.getComputedStyle && (O.pixelPosition = "1%" !== (b.getComputedStyle(j, null) || {}).top, O.boxSizingReliable = "4px" === (b.getComputedStyle(j, null) || {
                    width: "4px"
                }).width, d = C.createElement("div"), d.style.cssText = j.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", d.style.marginRight = d.style.width = "0", j.style.width = "1px", j.appendChild(d), O.reliableMarginRight = !parseFloat((b.getComputedStyle(d, null) || {}).marginRight)),
                "undefined" != typeof j.style.zoom && (j.innerHTML = "", j.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === j.offsetWidth, j.style.display = "block", j.style.overflow = "visible", j.innerHTML = "<div></div>", j.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== j.offsetWidth, v.style.zoom = 1), f.removeChild(v))
        }), ha.removeChild(J), Ga = ga = Ha = Ia = T = ha = J = null, O)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    f.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando], !!b && !e(b)
        },
        data: function(b, j, d, F) {
            if (f.acceptData(b)) {
                var x, e, t = f.expando,
                    l = "string" == typeof j,
                    g = b.nodeType,
                    n = g ? f.cache : b,
                    p = g ? b[t] : b[t] && t;
                if (p && n[p] && (F || n[p].data) || !(l && d === c)) {
                    p || (g ? b[t] = p = f.deletedIds.pop() || f.guid++ : p = t);
                    n[p] || (n[p] = {},
                        g || (n[p].toJSON = f.noop));
                    if ("object" == typeof j || "function" == typeof j) F ? n[p] = f.extend(n[p], j) : n[p].data = f.extend(n[p].data, j);
                    return x = n[p], F || (x.data || (x.data = {}), x = x.data), d !== c && (x[f.camelCase(j)] = d), l ? (e = x[j], null == e && (e = x[f.camelCase(j)])) : e = x, e
                }
            }
        },
        removeData: function(b, j, c) {
            if (f.acceptData(b)) {
                var d, x, l, t = b.nodeType,
                    g = t ? f.cache : b,
                    n = t ? b[f.expando] : f.expando;
                if (g[n]) {
                    if (j && (d = c ? g[n] : g[n].data)) {
                        f.isArray(j) || (j in d ? j = [j] : (j = f.camelCase(j), j in d ? j = [j] : j = j.split(" ")));
                        x = 0;
                        for (l = j.length; x < l; x++) delete d[j[x]];
                        if (!(c ? e : f.isEmptyObject)(d)) return
                    }
                    if (c || !(delete g[n].data, !e(g[n]))) t ? f.cleanData([b], !0) : f.support.deleteExpando || g != g.window ? delete g[n] : g[n] = null
                }
            }
        },
        _data: function(b, j, c) {
            return f.data(b, j, c, !0)
        },
        acceptData: function(b) {
            var j = b.nodeName && f.noData[b.nodeName.toLowerCase()];
            return !j || !0 !== j && b.getAttribute("classid") === j
        }
    });
    f.fn.extend({
        data: function(b, j) {
            var z, F, x, e, t, l = this[0],
                g = 0,
                n = null;
            if (b === c) {
                if (this.length && (n = f.data(l), 1 === l.nodeType && !f._data(l, "parsedAttrs"))) {
                    x = l.attributes;
                    for (t = x.length; g <
                        t; g++) e = x[g].name, e.indexOf("data-") || (e = f.camelCase(e.substring(5)), d(l, e, n[e]));
                    f._data(l, "parsedAttrs", !0)
                }
                return n
            }
            return "object" == typeof b ? this.each(function() {
                f.data(this, b)
            }) : (z = b.split(".", 2), z[1] = z[1] ? "." + z[1] : "", F = z[1] + "!", f.access(this, function(j) {
                if (j === c) return n = this.triggerHandler("getData" + F, [z[0]]), n === c && l && (n = f.data(l, b), n = d(l, b, n)), n === c && z[1] ? this.data(z[0]) : n;
                z[1] = j;
                this.each(function() {
                    var c = f(this);
                    c.triggerHandler("setData" + F, z);
                    f.data(this, b, j);
                    c.triggerHandler("changeData" +
                        F, z)
                })
            }, null, j, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                f.removeData(this, b)
            })
        }
    });
    f.extend({
        queue: function(b, j, c) {
            var d;
            if (b) return j = (j || "fx") + "queue", d = f._data(b, j), c && (!d || f.isArray(c) ? d = f._data(b, j, f.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(b, j) {
            j = j || "fx";
            var c = f.queue(b, j),
                d = c.length,
                x = c.shift(),
                e = f._queueHooks(b, j),
                t = function() {
                    f.dequeue(b, j)
                };
            "inprogress" === x && (x = c.shift(), d--);
            x && ("fx" === j && c.unshift("inprogress"), delete e.stop, x.call(b, t, e));
            !d && e && e.empty.fire()
        },
        _queueHooks: function(b, j) {
            var c = j + "queueHooks";
            return f._data(b, c) || f._data(b, c, {
                empty: f.Callbacks("once memory").add(function() {
                    f.removeData(b, j + "queue", !0);
                    f.removeData(b, c, !0)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(b, j) {
            var d = 2;
            return "string" != typeof b && (j = b, b = "fx", d--), arguments.length < d ? f.queue(this[0], b) : j === c ? this : this.each(function() {
                var c = f.queue(this, b, j);
                f._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && f.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                f.dequeue(this,
                    b)
            })
        },
        delay: function(b, j) {
            return b = f.fx ? f.fx.speeds[b] || b : b, j = j || "fx", this.queue(j, function(j, c) {
                var d = setTimeout(j, b);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, j) {
            var d, F = 1,
                e = f.Deferred(),
                l = this,
                t = this.length,
                g = function() {
                    --F || e.resolveWith(l, [l])
                };
            "string" != typeof b && (j = b, b = c);
            for (b = b || "fx"; t--;)(d = f._data(l[t], b + "queueHooks")) && d.empty && (F++, d.empty.add(g));
            return g(), e.promise(j)
        }
    });
    var ba, Kb, Lb, Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = f.support.getSetAttribute;
    f.fn.extend({
        attr: function(b, j) {
            return f.access(this, f.attr, b, j, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                f.removeAttr(this, b)
            })
        },
        prop: function(b, j) {
            return f.access(this, f.prop, b, j, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = f.propFix[b] ||
                b, this.each(function() {
                    try {
                        this[b] = c, delete this[b]
                    } catch (j) {}
                })
        },
        addClass: function(b) {
            var j, c, d, e, l, t, g;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).addClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b) {
                j = b.split(fa);
                c = 0;
                for (d = this.length; c < d; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (!e.className && 1 === j.length) e.className = b;
                        else {
                            l = " " + e.className + " ";
                            t = 0;
                            for (g = j.length; t < g; t++) 0 > l.indexOf(" " + j[t] + " ") && (l += j[t] + " ");
                            e.className = f.trim(l)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var j,
                d, e, x, l, t, g;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).removeClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                j = (b || "").split(fa);
                t = 0;
                for (g = this.length; t < g; t++)
                    if (e = this[t], 1 === e.nodeType && e.className) {
                        d = (" " + e.className + " ").replace(Mb, " ");
                        x = 0;
                        for (l = j.length; x < l; x++)
                            for (; 0 <= d.indexOf(" " + j[x] + " ");) d = d.replace(" " + j[x] + " ", " ");
                        e.className = b ? f.trim(d) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                e = "boolean" == typeof c;
            return f.isFunction(b) ? this.each(function(d) {
                f(this).toggleClass(b.call(this,
                    d, this.className, c), c)
            }) : this.each(function() {
                if ("string" === d)
                    for (var x, l = 0, t = f(this), g = c, n = b.split(fa); x = n[l++];) g = e ? g : !t.hasClass(x), t[g ? "addClass" : "removeClass"](x);
                else if ("undefined" === d || "boolean" === d) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Mb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var j, d, e, x = this[0];
            if (arguments.length) return e = f.isFunction(b), this.each(function(d) {
                var z, x = f(this);
                if (1 === this.nodeType && (e ? z = b.call(this, d, x.val()) : z = b, null == z ? z = "" : "number" == typeof z ? z += "" : f.isArray(z) && (z = f.map(z, function(b) {
                    return null == b ? "" : b + ""
                })), j = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], !j || !("set" in j) || j.set(this, z, "value") === c)) this.value = z
            });
            if (x) return j = f.valHooks[x.type] || f.valHooks[x.nodeName.toLowerCase()], j && "get" in j && (d = j.get(x,
                "value")) !== c ? d : (d = x.value, "string" == typeof d ? d.replace(Oc, "") : null == d ? "" : d)
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c, d, e = b.selectedIndex,
                        x = [],
                        l = b.options,
                        t = "select-one" === b.type;
                    if (0 > e) return null;
                    b = t ? e : 0;
                    for (d = t ? e + 1 : l.length; b < d; b++)
                        if (c = l[b], c.selected && (f.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !f.nodeName(c.parentNode, "optgroup"))) {
                            c = f(c).val();
                            if (t) return c;
                            x.push(c)
                        }
                    return t && !x.length && l.length ? f(l[e]).val() : x
                },
                set: function(b, c) {
                    var d = f.makeArray(c);
                    return f(b).find("option").each(function() {
                        this.selected = 0 <= f.inArray(f(this).val(), d)
                    }), d.length || (b.selectedIndex = -1), d
                }
            }
        },
        attrFn: {},
        attr: function(b, j, d, e) {
            var x, l, t = b.nodeType;
            if (b && !(3 === t || 8 === t || 2 === t)) {
                if (e && f.isFunction(f.fn[j])) return f(b)[j](d);
                if ("undefined" == typeof b.getAttribute) return f.prop(b, j, d);
                (e = 1 !== t || !f.isXMLDoc(b)) && (j = j.toLowerCase(), l = f.attrHooks[j] || (Nb.test(j) ? Kb :
                    ba));
                if (d !== c) {
                    if (null === d) {
                        f.removeAttr(b, j);
                        return
                    }
                    return l && "set" in l && e && (x = l.set(b, d, j)) !== c ? x : (b.setAttribute(j, d + ""), d)
                }
                return l && "get" in l && e && null !== (x = l.get(b, j)) ? x : (x = b.getAttribute(j), null === x ? c : x)
            }
        },
        removeAttr: function(b, c) {
            var d, e, x, l, t = 0;
            if (c && 1 === b.nodeType)
                for (e = c.split(fa); t < e.length; t++)(x = e[t]) && (d = f.propFix[x] || x, l = Nb.test(x), l || f.attr(b, x, ""), b.removeAttribute(Ob ? x : d), l && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Pc.test(b.nodeName) && b.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === c && f.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return ba && f.nodeName(b, "button") ? ba.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, d) {
                    if (ba && f.nodeName(b, "button")) return ba.set(b, c, d);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, j, d) {
            var e, x, l, t = b.nodeType;
            if (b && !(3 === t || 8 === t || 2 === t)) return l = 1 !== t || !f.isXMLDoc(b), l && (j = f.propFix[j] || j, x = f.propHooks[j]), d !== c ? x && "set" in x && (e = x.set(b, d, j)) !== c ? e : b[j] = d : x && "get" in x && null !== (e = x.get(b, j)) ? e : b[j]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var j = b.getAttributeNode("tabindex");
                    return j && j.specified ? parseInt(j.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b,
            j) {
            var d, e = f.prop(b, j);
            return !0 === e || "boolean" != typeof e && (d = b.getAttributeNode(j)) && !1 !== d.nodeValue ? j.toLowerCase() : c
        },
        set: function(b, c, d) {
            var e;
            return !1 === c ? f.removeAttr(b, d) : (e = f.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, ba = f.valHooks.button = {
        get: function(b, j) {
            var d;
            return d = b.getAttributeNode(j), d && (Lb[j] ? "" !== d.value : d.specified) ? d.value : c
        },
        set: function(b, c, d) {
            var f = b.getAttributeNode(d);
            return f || (f = C.createAttribute(d), b.setAttributeNode(f)),
                f.value = c + ""
        }
    }, f.each(["width", "height"], function(b, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            set: function(b, v) {
                if ("" === v) return b.setAttribute(c, "auto"), v
            }
        })
    }), f.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            ba.set(b, c, d)
        }
    });
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(b, j) {
        f.attrHooks[j] = f.extend(f.attrHooks[j], {
            get: function(b) {
                b = b.getAttribute(j, 2);
                return null === b ? c : b
            }
        })
    });
    f.support.style || (f.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() ||
                c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    f.support.enctype || (f.propFix.enctype = "encoding");
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(b, c) {
                if (f.isArray(c)) return b.checked = 0 <= f.inArray(f(b).val(), c)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) {
            return f.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function(b, j, d, e, x) {
            var l, t, g, n, p, m, r, q, u;
            if (!(3 === b.nodeType || 8 === b.nodeType || !j || !d || !(l = f._data(b)))) {
                d.handler && (r = d, d = r.handler, x = r.selector);
                d.guid || (d.guid = f.guid++);
                (g = l.events) || (l.events = g = {});
                (t = l.handle) || (l.handle = t = function(b) {
                    return "undefined" != typeof f && (!b || f.event.triggered !== b.type) ? f.event.dispatch.apply(t.elem, arguments) : c
                }, t.elem = b);
                j = f.trim(Rb(j)).split(" ");
                for (l = 0; l < j.length; l++) {
                    n = Pb.exec(j[l]) || [];
                    p = n[1];
                    m = (n[2] || "").split(".").sort();
                    u = f.event.special[p] || {};
                    p = (x ? u.delegateType : u.bindType) || p;
                    u = f.event.special[p] || {};
                    n = f.extend({
                        type: p,
                        origType: n[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: x,
                        needsContext: x && f.expr.match.needsContext.test(x),
                        namespace: m.join(".")
                    }, r);
                    q = g[p];
                    if (!q && (q = g[p] = [], q.delegateCount = 0, !u.setup || !1 === u.setup.call(b, e, m, t))) b.addEventListener ? b.addEventListener(p, t, !1) : b.attachEvent && b.attachEvent("on" + p, t);
                    u.add && (u.add.call(b, n), n.handler.guid || (n.handler.guid = d.guid));
                    x ? q.splice(q.delegateCount++, 0, n) : q.push(n);
                    f.event.global[p] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, e, x) {
            var l, t, g, n, p, m, r, q, u, A, s = f.hasData(b) && f._data(b);
            if (s && (r = s.events)) {
                c = f.trim(Rb(c || "")).split(" ");
                for (l = 0; l < c.length; l++)
                    if (t = Pb.exec(c[l]) || [], g = n = t[1], t = t[2], g) {
                        q = f.event.special[g] || {};
                        g = (e ? q.delegateType : q.bindType) || g;
                        u = r[g] || [];
                        p = u.length;
                        t = t ? RegExp("(^|\\.)" + t.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (m = 0; m < u.length; m++) A = u[m], (x || n === A.origType) && (!d || d.guid === A.guid) && (!t || t.test(A.namespace)) && (!e || e === A.selector || "**" === e && A.selector) && (u.splice(m--, 1), A.selector && u.delegateCount--, q.remove && q.remove.call(b, A));
                        0 === u.length && p !== u.length && ((!q.teardown || !1 === q.teardown.call(b, t, s.handle)) && f.removeEvent(b,
                            g, s.handle), delete r[g])
                    } else
                        for (g in r) f.event.remove(b, g + c[l], d, e, !0);
                f.isEmptyObject(r) && (delete s.handle, f.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(v, j, d, e) {
            if (!d || 3 !== d.nodeType && 8 !== d.nodeType) {
                var l, g, t, n, p, m, r, q = v.type || v;
                n = [];
                if (!Qb.test(q + f.event.triggered) && (0 <= q.indexOf("!") && (q = q.slice(0, -1), l = !0), 0 <= q.indexOf(".") && (n = q.split("."), q = n.shift(), n.sort()), d && !f.event.customEvent[q] || f.event.global[q]))
                    if (v = "object" == typeof v ? v[f.expando] ?
                        v : new f.Event(q, v) : new f.Event(q), v.type = q, v.isTrigger = !0, v.exclusive = l, v.namespace = n.join("."), v.namespace_re = v.namespace ? RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n = 0 > q.indexOf(":") ? "on" + q : "", d) {
                        if (v.result = c, v.target || (v.target = d), j = null != j ? f.makeArray(j) : [], j.unshift(v), p = f.event.special[q] || {}, !(p.trigger && !1 === p.trigger.apply(d, j))) {
                            r = [
                                [d, p.bindType || q]
                            ];
                            if (!e && !p.noBubble && !f.isWindow(d)) {
                                g = p.delegateType || q;
                                l = Qb.test(g + q) ? d : d.parentNode;
                                for (t = d; l; l = l.parentNode) r.push([l, g]),
                                    t = l;
                                t === (d.ownerDocument || C) && r.push([t.defaultView || t.parentWindow || b, g])
                            }
                            for (g = 0; g < r.length && !v.isPropagationStopped(); g++) l = r[g][0], v.type = r[g][1], (m = (f._data(l, "events") || {})[v.type] && f._data(l, "handle")) && m.apply(l, j), (m = n && l[n]) && f.acceptData(l) && m.apply && !1 === m.apply(l, j) && v.preventDefault();
                            return v.type = q, !e && !v.isDefaultPrevented() && (!p._default || !1 === p._default.apply(d.ownerDocument, j)) && ("click" !== q || !f.nodeName(d, "a")) && f.acceptData(d) && n && d[q] && ("focus" !== q && "blur" !== q || 0 !== v.target.offsetWidth) &&
                                !f.isWindow(d) && (t = d[n], t && (d[n] = null), f.event.triggered = q, d[q](), f.event.triggered = c, t && (d[n] = t)), v.result
                        }
                    } else
                        for (g in d = f.cache, d) d[g].events && d[g].events[q] && f.event.trigger(v, j, d[g].handle.elem, !0)
            }
        },
        dispatch: function(v) {
            v = f.event.fix(v || b.event);
            var j, d, e, l, g, t, n = (f._data(this, "events") || {})[v.type] || [],
                p = n.delegateCount,
                m = aa.call(arguments),
                r = !v.exclusive && !v.namespace,
                q = f.event.special[v.type] || {},
                u = [];
            m[0] = v;
            v.delegateTarget = this;
            if (!(q.preDispatch && !1 === q.preDispatch.call(this, v))) {
                if (p &&
                    (!v.button || "click" !== v.type))
                    for (d = v.target; d != this; d = d.parentNode || this)
                        if (!0 !== d.disabled || "click" !== v.type) {
                            l = {};
                            g = [];
                            for (j = 0; j < p; j++) e = n[j], t = e.selector, l[t] === c && (l[t] = e.needsContext ? 0 <= f(t, this).index(d) : f.find(t, this, null, [d]).length), l[t] && g.push(e);
                            g.length && u.push({
                                elem: d,
                                matches: g
                            })
                        }
                n.length > p && u.push({
                    elem: this,
                    matches: n.slice(p)
                });
                for (j = 0; j < u.length && !v.isPropagationStopped(); j++) {
                    l = u[j];
                    v.currentTarget = l.elem;
                    for (d = 0; d < l.matches.length && !v.isImmediatePropagationStopped(); d++)
                        if (e = l.matches[d],
                            r || !v.namespace && !e.namespace || v.namespace_re && v.namespace_re.test(e.namespace)) v.data = e.data, v.handleObj = e, e = ((f.event.special[e.origType] || {}).handle || e.handler).apply(l.elem, m), e !== c && (v.result = e, !1 === e && (v.preventDefault(), v.stopPropagation()))
                }
                return q.postDispatch && q.postDispatch.call(this, v), v.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, j) {
                var d, f, e, l = j.button,
                    t = j.fromElement;
                return null == b.pageX && null != j.clientX && (d = b.target.ownerDocument || C, f = d.documentElement, e = d.body, b.pageX = j.clientX + (f && f.scrollLeft || e && e.scrollLeft || 0) - (f && f.clientLeft ||
                    e && e.clientLeft || 0), b.pageY = j.clientY + (f && f.scrollTop || e && e.scrollTop || 0) - (f && f.clientTop || e && e.clientTop || 0)), !b.relatedTarget && t && (b.relatedTarget = t === b.target ? j.toElement : t), !b.which && l !== c && (b.which = l & 1 ? 1 : l & 2 ? 3 : l & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[f.expando]) return b;
            var c, d, e = b,
                l = f.event.fixHooks[b.type] || {},
                g = l.props ? this.props.concat(l.props) : this.props;
            b = f.Event(e);
            for (c = g.length; c;) d = g[--c], b[d] = e[d];
            return b.target || (b.target = e.srcElement || C), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, l.filter ? l.filter(b, e) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, d) {
                    f.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, d, e) {
            b = f.extend(new f.Event, d, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? f.event.trigger(b, null, c) : f.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    f.event.handle =
        f.event.dispatch;
    f.removeEvent = C.removeEventListener ? function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d, !1)
    } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    f.Event = function(b, c) {
        if (this instanceof f.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? m : g) : this.type = b, c && f.extend(this, c), this.timeStamp = b && b.timeStamp || f.now(),
            this[f.expando] = !0;
        else return new f.Event(b, c)
    };
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = m;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = m;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        f.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var v, d = b.relatedTarget,
                    e = b.handleObj;
                if (!d || d !== this && !f.contains(this, d)) b.type = e.origType, v = e.handler.apply(this, arguments), b.type = c;
                return v
            }
        }
    });
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = f.nodeName(b, "input") || f.nodeName(b, "button") ?
                    b.form : c) && !f._data(b, "_submit_attached") && (f.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), f._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && f.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) f.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this, b, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                db.test(b.nodeName) && !f._data(b, "_change_attached") && (f.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                        f.event.simulate("change", this.parentNode, b, !0)
                }), f._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !db.test(this.nodeName)
        }
    });
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = 0,
            e = function(b) {
                f.event.simulate(c, b.target, f.event.fix(b), !0)
            };
        f.event.special[c] = {
            setup: function() {
                0 === d++ && C.addEventListener(b, e, !0)
            },
            teardown: function() {
                0 === --d && C.removeEventListener(b, e, !0)
            }
        }
    });
    f.fn.extend({
        on: function(b, j, d, e, l) {
            var n, t;
            if ("object" == typeof b) {
                "string" != typeof j && (d = d || j, j = c);
                for (t in b) this.on(t, j, d, b[t], l);
                return this
            }
            null == d && null == e ? (e = j, d = j = c) : null == e && ("string" == typeof j ? (e = d, d = c) : (e = d, d = j, j = c));
            if (!1 === e) e = g;
            else if (!e) return this;
            return 1 === l && (n = e, e = function(b) {
                return f().off(b), n.apply(this, arguments)
            }, e.guid = n.guid || (n.guid = f.guid++)), this.each(function() {
                f.event.add(this,
                    b, e, d, j)
            })
        },
        one: function(b, c, d, f) {
            return this.on(b, c, d, f, 1)
        },
        off: function(b, j, d) {
            var e, l;
            if (b && b.preventDefault && b.handleObj) return e = b.handleObj, f(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof b) {
                for (l in b) this.off(l, j, b[l]);
                return this
            }
            if (!1 === j || "function" == typeof j) d = j, j = c;
            return !1 === d && (d = g), this.each(function() {
                f.event.remove(this, b, d, j)
            })
        },
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b,
                null, c)
        },
        live: function(b, c, d) {
            return f(this.context).on(b, this.selector, c, d), this
        },
        die: function(b, c) {
            return f(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, d, f) {
            return this.on(c, b, d, f)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                f.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return f.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d =
                b.guid || f.guid++,
                e = 0,
                l = function(d) {
                    var z = (f._data(this, "lastToggle" + b.guid) || 0) % e;
                    return f._data(this, "lastToggle" + b.guid, z + 1), d.preventDefault(), c[z].apply(this, arguments) || !1
                };
            for (l.guid = d; e < c.length;) c[e++].guid = d;
            return this.click(l)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(b, c) {
            f.fn[c] = function(b, d) {
                return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            };
            Tc.test(c) && (f.event.fixHooks[c] = f.event.keyHooks);
            Uc.test(c) && (f.event.fixHooks[c] = f.event.mouseHooks)
        });
    var Vc = b,
        E = function(b, c, d, f) {
            d = d || [];
            c = c || X;
            var e, l, t, g, n = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== n && 9 !== n) return [];
            t = Ka(c);
            if (!t && !f && (e = Wc.exec(b)))
                if (g = e[1])
                    if (9 === n) {
                        l = c.getElementById(g);
                        if (!l || !l.parentNode) return d;
                        if (l.id === g) return d.push(l), d
                    } else {
                        if (c.ownerDocument &&
                            (l = c.ownerDocument.getElementById(g)) && Sb(c, l) && l.id === g) return d.push(l), d
                    } else {
                if (e[2]) return oa.apply(d, pa.call(c.getElementsByTagName(b), 0)), d;
                if ((g = e[3]) && Tb && c.getElementsByClassName) return oa.apply(d, pa.call(c.getElementsByClassName(g), 0)), d
            }
            return eb(b.replace(La, "$1"), c, d, f, t)
        },
        va = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Ub = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ia = function(b) {
            return Y(function(c) {
                return c = +c, Y(function(d, f) {
                    for (var e, l = b([], d.length, c), t = l.length; t--;) d[e = l[t]] && (d[e] = !(f[e] = d[e]))
                })
            })
        },
        Ma = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Oa = function(b, c) {
            var d, f, e, l, t, g, n;
            if (t = Vb[H][b]) return c ? 0 : t.slice(0);
            t = b;
            g = [];
            for (n = L.preFilter; t;) {
                if (!d || (f = Xc.exec(t))) f && (t = t.slice(f[0].length)), g.push(e = []);
                d = !1;
                if (f = Yc.exec(t)) e.push(d = new Wb(f.shift())), t = t.slice(d.length), d.type = f[0].replace(La, " ");
                for (l in L.filter)(f = Na[l].exec(t)) &&
                    (!n[l] || (f = n[l](f, X, !0))) && (e.push(d = new Wb(f.shift())), t = t.slice(d.length), d.type = l, d.matches = f);
                if (!d) break
            }
            return c ? t.length : t ? E.error(b) : Vb(b, g).slice(0)
        },
        gb = function(b, c, d) {
            var f = c.dir,
                e = d && "parentNode" === c.dir,
                l = Zc++;
            return c.first ? function(c, d, j) {
                for (; c = c[f];)
                    if (e || 1 === c.nodeType) return b(c, d, j)
            } : function(c, d, j) {
                if (j)
                    for (; c = c[f];) {
                        if ((e || 1 === c.nodeType) && b(c, d, j)) return c
                    } else
                        for (var z, g = wa + " " + l + " ", n = g + fb; c = c[f];)
                            if (e || 1 === c.nodeType) {
                                if ((z = c[H]) === n) return c.sizset;
                                if ("string" == typeof z &&
                                    0 === z.indexOf(g)) {
                                    if (c.sizset) return c
                                } else {
                                    c[H] = n;
                                    if (b(c, d, j)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        hb = function(b) {
            return 1 < b.length ? function(c, d, f) {
                for (var e = b.length; e--;)
                    if (!b[e](c, d, f)) return !1;
                return !0
            } : b[0]
        },
        Pa = function(b, c, d, f, e) {
            for (var l, g = [], n = 0, p = b.length, m = null != c; n < p; n++)
                if (l = b[n])
                    if (!d || d(l, f, e)) g.push(l), m && c.push(n);
            return g
        },
        ib = function(b, c, d, f, e, l) {
            return f && !f[H] && (f = ib(f)), e && !e[H] && (e = ib(e, l)), Y(function(l, g, n, p) {
                if (!l || !e) {
                    var B, m, r = [],
                        q = [],
                        u = g.length;
                    if (!(m = l)) {
                        m = c || "*";
                        var A =
                            n.nodeType ? [n] : n,
                            s = [];
                        B = 0;
                        for (var y = A.length; B < y; B++) E(m, A[B], s, l);
                        m = s
                    }
                    A = b && (l || !c) ? Pa(m, r, b, n, p) : m;
                    s = d ? e || (l ? b : u || f) ? [] : g : A;
                    d && d(A, s, n, p);
                    if (f) {
                        m = Pa(s, q);
                        f(m, [], n, p);
                        for (n = m.length; n--;)
                            if (B = m[n]) s[q[n]] = !(A[q[n]] = B)
                    }
                    if (l)
                        for (n = b && s.length; n--;) {
                            if (B = s[n]) l[r[n]] = !(g[r[n]] = B)
                        } else s = Pa(s === g ? s.splice(u, s.length) : s), e ? e(null, g, s, p) : oa.apply(g, s)
                }
            })
        },
        jb = function(b) {
            var c, d, f, e = b.length,
                l = L.relative[b[0].type];
            d = l || L.relative[" "];
            for (var g = l ? 1 : 0, n = gb(function(b) {
                return b === c
            }, d, !0), p = gb(function(b) {
                return -1 <
                    Xb.call(c, b)
            }, d, !0), m = [
                function(b, d, v) {
                    return !l && (v || d !== Qa) || ((c = d).nodeType ? n(b, d, v) : p(b, d, v))
                }
            ]; g < e; g++)
                if (d = L.relative[b[g].type]) m = [gb(hb(m), d)];
                else {
                    d = L.filter[b[g].type].apply(null, b[g].matches);
                    if (d[H]) {
                        for (f = ++g; f < e && !L.relative[b[f].type]; f++);
                        return ib(1 < g && hb(m), 1 < g && b.slice(0, g - 1).join("").replace(La, "$1"), d, g < f && jb(b.slice(g, f)), f < e && jb(b = b.slice(f)), f < e && b.join(""))
                    }
                    m.push(d)
                }
            return hb(m)
        },
        eb = function(b, c, d, f, e) {
            var l, g, n, p, m = Oa(b);
            if (!f && 1 === m.length) {
                g = m[0] = m[0].slice(0);
                if (2 < g.length &&
                    "ID" === (n = g[0]).type && 9 === c.nodeType && !e && L.relative[g[1].type]) {
                    c = L.find.ID(n.matches[0].replace(ja, ""), c, e)[0];
                    if (!c) return d;
                    b = b.slice(g.shift().length)
                }
                for (l = Na.POS.test(b) ? -1 : g.length - 1; 0 <= l; l--) {
                    n = g[l];
                    if (L.relative[p = n.type]) break;
                    if (p = L.find[p])
                        if (f = p(n.matches[0].replace(ja, ""), kb.test(g[0].type) && c.parentNode || c, e)) {
                            g.splice(l, 1);
                            b = f.length && g.join("");
                            if (!b) return oa.apply(d, pa.call(f, 0)), d;
                            break
                        }
                }
            }
            return lb(b, m)(f, c, e, d, kb.test(b)), d
        },
        Yb = function() {},
        fb, mb, L, Ra, Ka, Sb, lb, nb, xa, Qa, Zb = !0,
        H = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        X = Vc.document,
        W = X.documentElement,
        wa = 0,
        Zc = 0,
        $c = [].pop,
        oa = [].push,
        pa = [].slice,
        Xb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        Y = function(b, c) {
            return b[H] = null == c || c, b
        },
        ob = function() {
            var b = {},
                c = [];
            return Y(function(d, f) {
                return c.push(d) > L.cacheLength && delete b[c.shift()], b[d] = f
            }, b)
        },
        $b = ob(),
        Vb = ob(),
        ac = ob(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(pb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        kb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ja = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + pb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ca = function(b) {
            var c = X.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        dd = ca(function(b) {
            return b.appendChild(X.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = ca(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = ca(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = ca(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = ca(function(b) {
            b.id = H + 0;
            b.innerHTML = "<a name='" + H + "'></a><div name='" + H + "'></div>";
            W.insertBefore(b, W.firstChild);
            var c = X.getElementsByName &&
                X.getElementsByName(H).length === 2 + X.getElementsByName(H + 0).length;
            return mb = !X.getElementById(H), W.removeChild(b), c
        });
    try {
        pa.call(W.childNodes, 0)[0].nodeType
    } catch (Qd) {
        pa = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    E.matches = function(b, c) {
        return E(b, null, null, c)
    };
    E.matchesSelector = function(b, c) {
        return 0 < E(c, null, null, [b]).length
    };
    Ra = E.getText = function(b) {
        var c, d = "",
            f = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b =
                    b.nextSibling) d += Ra(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[f]; f++) d += Ra(c);
        return d
    };
    Ka = E.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = E.contains = W.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            f = c && c.parentNode;
        return b === f || !(!f || !(1 === f.nodeType && d.contains && d.contains(f)))
    } : W.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    E.attr = function(b, c) {
        var d, f = Ka(b);
        return f || (c = c.toLowerCase()), (d = L.attrHandle[c]) ? d(b) : f || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    L = E.selectors = {
        cacheLength: 50,
        createPseudo: Y,
        match: Na,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var f, e = [], l = 0; f = d[l]; l++) 1 === f.nodeType && e.push(f);
                    return e
                }
                return d
            },
            NAME: gd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Tb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ja, ""), b[3] = (b[4] || b[5] || "").replace(ja, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || E.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && E.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Na.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) ad.test(c) && (d = Oa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ? function(b) {
                return b = b.replace(ja, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ja, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode &&
                            c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ja, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = $b[H][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, d) {
                return function(f) {
                    f = E.attr(f, b);
                    return null == f ? "!=" === c : c ? (f += "", "=" ===
                        c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && -1 < f.indexOf(d) : "$=" === c ? d && f.substr(f.length - d.length) === d : "~=" === c ? -1 < (" " + f + " ").indexOf(d) : "|=" === c ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, f) {
                return "nth" === b ? function(b) {
                    var c, j;
                    c = b.parentNode;
                    if (1 === d && 0 === f) return !0;
                    if (c) {
                        j = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (j++, b === c)); c = c.nextSibling);
                    }
                    return j -= f, j === d || 0 === j % d && 0 <= j / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 ===
                                    d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, f = L.pseudos[b] || L.setFilters[b.toLowerCase()] || E.error("unsupported pseudo: " + b);
                return f[H] ? f(c) : 1 < f.length ? (d = [b, b, "", c], L.setFilters.hasOwnProperty(b.toLowerCase()) ? Y(function(b, d) {
                    for (var v, e = f(b, c), l = e.length; l--;) v = Xb.call(b, e[l]), b[v] = !(d[v] = e[l])
                }) : function(b) {
                    return f(b, 0, d)
                }) : f
            }
        },
        pseudos: {
            not: Y(function(b) {
                var c = [],
                    d = [],
                    f = lb(b.replace(La, "$1"));
                return f[H] ? Y(function(b, c, d, j) {
                    j = f(b, null, j, []);
                    for (var v = b.length; v--;)
                        if (d = j[v]) b[v] = !(c[v] = d)
                }) : function(b, v, e) {
                    return c[0] = b, f(c, null, e, d), !d.pop()
                }
            }),
            has: Y(function(b) {
                return function(c) {
                    return 0 < E(b, c).length
                }
            }),
            contains: Y(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !L.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function() {
                return [0]
            }),
            last: ia(function(b, c) {
                return [c - 1]
            }),
            eq: ia(function(b,
                c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ia(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ia(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ia(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ia(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    nb = W.compareDocumentPosition ? function(b, c) {
        return b === c ? (xa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return xa = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, f, e = [],
            l = [];
        d = b.parentNode;
        f = c.parentNode;
        var g = d;
        if (d === f) return Ma(b, c);
        if (!d) return -1;
        if (!f) return 1;
        for (; g;) e.unshift(g), g = g.parentNode;
        for (g = f; g;) l.unshift(g), g = g.parentNode;
        d = e.length;
        f = l.length;
        for (g = 0; g < d && g < f; g++)
            if (e[g] !== l[g]) return Ma(e[g], l[g]);
        return g === d ? Ma(b, l[g], -1) : Ma(e[g], c, 1)
    };
    [0, 0].sort(nb);
    Zb = !xa;
    E.uniqueSort = function(b) {
        var c, d = 1;
        xa = Zb;
        b.sort(nb);
        if (xa)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    E.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    lb = E.compile = function(b, c) {
        var d, f = [],
            e = [],
            l = ac[H][b];
        if (!l) {
            c || (c = Oa(b));
            for (d = c.length; d--;) l = jb(c[d]), l[H] ? f.push(l) : e.push(l);
            var g = 0 < f.length,
                n = 0 < e.length,
                p = function(b, c, d, j, v) {
                    var l, z, m = [],
                        r = 0,
                        q = "0",
                        B = b && [],
                        u = null != v,
                        s = Qa,
                        A = b || n && L.find.TAG("*", v && c.parentNode || c),
                        y = wa += null == s ? 1 : Math.E;
                    for (u && (Qa = c !== X && c, fb = p.el); null != (v = A[q]); q++) {
                        if (n && v) {
                            for (l = 0; z = e[l]; l++)
                                if (z(v, c, d)) {
                                    j.push(v);
                                    break
                                }
                            u && (wa = y, fb =
                                ++p.el)
                        }
                        g && ((v = !z && v) && r--, b && B.push(v))
                    }
                    r += q;
                    if (g && q !== r) {
                        for (l = 0; z = f[l]; l++) z(B, m, c, d);
                        if (b) {
                            if (0 < r)
                                for (; q--;)!B[q] && !m[q] && (m[q] = $c.call(j));
                            m = Pa(m)
                        }
                        oa.apply(j, m);
                        u && !b && 0 < m.length && 1 < r + f.length && E.uniqueSort(j)
                    }
                    return u && (wa = y, Qa = s), B
                };
            d = (p.el = 0, g ? Y(p) : p);
            l = ac(b, d)
        }
        return l
    };
    if (X.querySelectorAll) {
        var cc, hd = eb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Z = [":focus"],
            Sa = [":active", ":focus"],
            Ta = W.matchesSelector || W.mozMatchesSelector || W.webkitMatchesSelector || W.oMatchesSelector ||
            W.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Z.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Z.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Z.push(":enabled",
                ":disabled")
        });
        Z = RegExp(Z.join("|"));
        eb = function(b, c, d, f, e) {
            if (!f && !e && (!Z || !Z.test(b))) {
                var l, g, n = !0,
                    p = H;
                g = c;
                l = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    l = Oa(b);
                    (n = c.getAttribute("id")) ? p = n.replace(id, "\\$&"): c.setAttribute("id", p);
                    p = "[id='" + p + "'] ";
                    for (g = l.length; g--;) l[g] = p + l[g].join("");
                    g = kb.test(b) && c.parentNode || c;
                    l = l.join(",")
                }
                if (l) try {
                    return oa.apply(d, pa.call(g.querySelectorAll(l), 0)), d
                } catch (m) {} finally {
                    n || c.removeAttribute("id")
                }
            }
            return hd(b, c, d, f, e)
        };
        Ta &&
            (ca(function(b) {
                cc = Ta.call(b, "div");
                try {
                    Ta.call(b, "[test!='']:sizzle"), Sa.push("!=", pb)
                } catch (c) {}
            }), Sa = RegExp(Sa.join("|")), E.matchesSelector = function(b, c) {
                c = c.replace(jd, "='$1']");
                if (!Ka(b) && !Sa.test(c) && (!Z || !Z.test(c))) try {
                    var d = Ta.call(b, c);
                    if (d || cc || b.document && 11 !== b.document.nodeType) return d
                } catch (f) {}
                return 0 < E(c, null, null, [b]).length
            })
    }
    L.pseudos.nth = L.pseudos.eq;
    L.filters = Yb.prototype = L.pseudos;
    L.setFilters = new Yb;
    E.attr = f.attr;
    f.find = E;
    f.expr = E.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique =
        E.uniqueSort;
    f.text = E.getText;
    f.isXMLDoc = E.isXML;
    f.contains = E.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = f.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(b) {
            var c, d, e, l, g, n, p = this;
            if ("string" != typeof b) return f(b).filter(function() {
                c = 0;
                for (d = p.length; c < d; c++)
                    if (f.contains(p[c], this)) return !0
            });
            n = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (e = n.length, f.find(b, this[c], n), 0 < c)
                    for (l = e; l < n.length; l++)
                        for (g =
                            0; g < e; g++)
                            if (n[g] === n[l]) {
                                n.splice(l--, 1);
                                break
                            }
            return n
        },
        has: function(b) {
            var c, d = f(b, this),
                e = d.length;
            return this.filter(function() {
                for (c = 0; c < e; c++)
                    if (f.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(q(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(q(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= f(b, this.context).index(this[0]) : 0 < f.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, e = 0, l = this.length,
                g = [], n = dc.test(b) || "string" != typeof b ? f(b, c || this.context) : 0; e < l; e++)
                for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (n ? -1 < n.index(d) : f.find.matchesSelector(d, b)) {
                        g.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return g = 1 < g.length ? f.unique(g) : g, this.pushStack(g, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? f.inArray(this[0], f(b)) : f.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? f(b, c) : f.makeArray(b && b.nodeType ? [b] : b),
                e = f.merge(this.get(), d);
            return this.pushStack(y(d[0]) || y(e[0]) ? e : f.unique(e))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    f.fn.andSelf = f.fn.addBack;
    f.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return f.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return f.dir(b, "parentNode", d)
        },
        next: function(b) {
            return r(b, "nextSibling")
        },
        prev: function(b) {
            return r(b, "previousSibling")
        },
        nextAll: function(b) {
            return f.dir(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return f.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return f.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return f.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return f.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return f.sibling(b.firstChild)
        },
        contents: function(b) {
            return f.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : f.merge([], b.childNodes)
        }
    }, function(b, c) {
        f.fn[b] = function(d, e) {
            var l = f.map(this, c, d);
            return kd.test(b) ||
                (e = d), e && "string" == typeof e && (l = f.filter(e, l)), l = 1 < this.length && !md[b] ? f.unique(l) : l, 1 < this.length && ld.test(b) && (l = l.reverse()), this.pushStack(l, b, aa.call(arguments).join(","))
        }
    });
    f.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? f.find.matchesSelector(c[0], b) ? [c[0]] : [] : f.find.matches(b, c)
        },
        dir: function(b, d, e) {
            var l = [];
            for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !f(b).is(e));) 1 === b.nodeType && l.push(b), b = b[d];
            return l
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 ===
                b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        qb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
        xb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        V = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = u(C),
        sb = hc.appendChild(C.createElement("div"));
    V.optgroup =
        V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    f.support.htmlSerialize || (V._default = [1, "X<div>", "</div>"]);
    f.fn.extend({
        text: function(b) {
            return f.access(this, function(b) {
                return b === c ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = f(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return f.isFunction(b) ? this.each(function(c) {
                f(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = f(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = f.isFunction(b);
            return this.each(function(d) {
                f(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") ||
                    f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!y(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(b,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!y(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, e = 0; null != (d = this[e]); e++)
                if (!b || f.filter(b, [d]).length)!c && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b,
                c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return f.clone(this, b, c)
            })
        },
        html: function(b) {
            return f.access(this, function(b) {
                var d = this[0] || {},
                    e = 0,
                    l = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (f.support.htmlSerialize || !rb.test(b)) && (f.support.leadingWhitespace || !qb.test(b)) &&
                    !V[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; e < l; e++) d = this[e] || {}, 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (v) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return y(this[0]) ? this.length ? this.pushStack(f(f.isFunction(b) ? b() : b), "replaceWith", b) : this : f.isFunction(b) ? this.each(function(c) {
                var d = f(this),
                    e = d.html();
                d.replaceWith(b.call(this, c, e))
            }) : ("string" != typeof b && (b = f(b).detach()), this.each(function() {
                var c =
                    this.nextSibling,
                    d = this.parentNode;
                f(this).remove();
                c ? f(c).before(b) : f(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, e) {
            b = [].concat.apply([], b);
            var l, g, n, t = 0,
                p = b[0],
                m = [],
                r = this.length;
            if (!f.support.checkClone && 1 < r && "string" == typeof p && gc.test(p)) return this.each(function() {
                f(this).domManip(b, d, e)
            });
            if (f.isFunction(p)) return this.each(function(l) {
                var g = f(this);
                b[0] = p.call(this, l, d ? g.html() : c);
                g.domManip(b, d, e)
            });
            if (this[0]) {
                l = f.buildFragment(b, this, m);
                n = l.fragment;
                g = n.firstChild;
                1 === n.childNodes.length && (n = g);
                if (g) {
                    d = d && f.nodeName(g, "tr");
                    for (l = l.cacheable || r - 1; t < r; t++) e.call(d && f.nodeName(this[t], "table") ? this[t].getElementsByTagName("tbody")[0] || this[t].appendChild(this[t].ownerDocument.createElement("tbody")) : this[t], t === l ? n : f.clone(n, !0, !0))
                }
                n = g = null;
                m.length && f.each(m, function(b, c) {
                    c.src ? f.ajax ? f.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : f.error("no ajax") : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    f.buildFragment = function(b, d, e) {
        var l, g, n, t = b[0];
        return d = d || C, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof t && 512 > t.length && d === C && "<" === t.charAt(0) && !rd.test(t) && (f.support.checkClone || !gc.test(t)) && (f.support.html5Clone || !rb.test(t)) && (g = !0, l = f.fragments[t], n = l !== c), l || (l = d.createDocumentFragment(), f.clean(b, d, l, e), g && (f.fragments[t] = n && l)), {
            fragment: l,
            cacheable: g
        }
    };
    f.fragments = {};
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        f.fn[b] = function(d) {
            var e, l = 0,
                g = [];
            d = f(d);
            var n = d.length;
            e = 1 === this.length && this[0].parentNode;
            if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === n) return d[c](this[0]), this;
            for (; l < n; l++) e = (0 < l ? this.clone(!0) : this).get(), f(d[l])[c](e), g = g.concat(e);
            return this.pushStack(g, b, d.selector)
        }
    });
    f.extend({
        clone: function(b, c, d) {
            var e, g, p, t;
            f.support.html5Clone || f.isXMLDoc(b) || !rb.test("<" + b.nodeName +
                ">") ? t = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(t = sb.firstChild));
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !f.isXMLDoc(b)) {
                l(b, t);
                e = n(b);
                g = n(t);
                for (p = 0; e[p]; ++p) g[p] && l(e[p], g[p])
            }
            if (c && (s(b, t), d)) {
                e = n(b);
                g = n(t);
                for (p = 0; e[p]; ++p) s(e[p], g[p])
            }
            return t
        },
        clean: function(b, c, d, e) {
            var l, g, n, m, r, q, s, A = c === C && hc,
                y = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = C;
            for (l = 0; null != (n = b[l]); l++)
                if ("number" == typeof n && (n += ""), n) {
                    if ("string" ==
                        typeof n)
                        if (pd.test(n)) {
                            A = A || u(c);
                            q = c.createElement("div");
                            A.appendChild(q);
                            n = n.replace(ec, "<$1></$2>");
                            g = (fc.exec(n) || ["", ""])[1].toLowerCase();
                            m = V[g] || V._default;
                            r = m[0];
                            for (q.innerHTML = m[1] + n + m[2]; r--;) q = q.lastChild;
                            if (!f.support.tbody) {
                                r = od.test(n);
                                m = "table" === g && !r ? q.firstChild && q.firstChild.childNodes : "<table>" === m[1] && !r ? q.childNodes : [];
                                for (g = m.length - 1; 0 <= g; --g) f.nodeName(m[g], "tbody") && !m[g].childNodes.length && m[g].parentNode.removeChild(m[g])
                            }!f.support.leadingWhitespace && qb.test(n) && q.insertBefore(c.createTextNode(qb.exec(n)[0]),
                                q.firstChild);
                            n = q.childNodes;
                            q.parentNode.removeChild(q)
                        } else n = c.createTextNode(n);
                    n.nodeType ? y.push(n) : f.merge(y, n)
                }
            q && (n = q = A = null);
            if (!f.support.appendChecked)
                for (l = 0; null != (n = y[l]); l++) f.nodeName(n, "input") ? p(n) : "undefined" != typeof n.getElementsByTagName && f.grep(n.getElementsByTagName("input"), p);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type)) return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (l = 0; null != (n = y[l]); l++)
                    if (!f.nodeName(n, "script") || !b(n)) d.appendChild(n),
                        "undefined" != typeof n.getElementsByTagName && (s = f.grep(f.merge([], n.getElementsByTagName("script")), b), y.splice.apply(y, [l + 1, 0].concat(s)), l += s.length)
            }
            return y
        },
        cleanData: function(b, c) {
            for (var d, e, l, g, n = 0, p = f.expando, m = f.cache, r = f.support.deleteExpando, q = f.event.special; null != (l = b[n]); n++)
                if (c || f.acceptData(l))
                    if (d = (e = l[p]) && m[e]) {
                        if (d.events)
                            for (g in d.events) q[g] ? f.event.remove(l, g) : f.removeEvent(l, g, d.handle);
                        m[e] && (delete m[e], r ? delete l[p] : l.removeAttribute ? l.removeAttribute(p) : l[p] = null, f.deletedIds.push(e))
                    }
        }
    });
    var Ua, da;
    f.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = f.uaMatch(zc.userAgent);
    da = {};
    Ua.browser && (da[Ua.browser] = !0, da.version = Ua.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    f.browser = da;
    f.sub = function() {
        function b(c, d) {
            return new b.fn.init(c,
                d)
        }
        f.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, e) {
            return e && e instanceof f && !(e instanceof b) && (e = b(e)), f.fn.init.call(this, d, e, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(C);
        return b
    };
    var Q, la, ma, tb = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Ea + ")(.*)$", "i"),
        ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Ya = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ea = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"],
        zd = f.fn.toggle;
    f.fn.extend({
        css: function(b, d) {
            return f.access(this, function(b, d, e) {
                return e !== c ? f.style(b, d, e) : f.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return K(this, !0)
        },
        hide: function() {
            return K(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return f.isFunction(b) && f.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : D(this)) ? f(this).show():
                    f(this).hide()
            })
        }
    });
    f.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Q(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, e, l) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g, n, p, m = f.camelCase(d),
                    r = b.style;
                d = f.cssProps[m] || (f.cssProps[m] = A(r, m));
                p = f.cssHooks[d] || f.cssHooks[m];
                if (e === c) return p && "get" in p && (g = p.get(b, !1, l)) !== c ? g : r[d];
                n = typeof e;
                "string" === n && (g = xd.exec(e)) && (e = (g[1] + 1) * g[2] + parseFloat(f.css(b, d)), n = "number");
                if (!(null == e || "number" === n && isNaN(e)))
                    if ("number" === n && !f.cssNumber[m] && (e += "px"), !p || !("set" in p) || (e = p.set(b, e, l)) !== c) try {
                        r[d] = e
                    } catch (q) {}
            }
        },
        css: function(b, d, e, l) {
            var g, n, p, m = f.camelCase(d);
            return d = f.cssProps[m] || (f.cssProps[m] = A(b.style, m)), p = f.cssHooks[d] || f.cssHooks[m], p && "get" in p && (g = p.get(b, !0, l)), g === c && (g = Q(b, d)), "normal" === g && d in jc && (g = jc[d]), e || l !== c ? (n = parseFloat(g), e ||
                f.isNumeric(n) ? n || 0 : g) : g
        },
        swap: function(b, c, d) {
            var f, e = {};
            for (f in c) e[f] = b.style[f], b.style[f] = c[f];
            d = d.call(b);
            for (f in c) b.style[f] = e[f];
            return d
        }
    });
    b.getComputedStyle ? Q = function(c, d) {
        var e, l, g, n, p = b.getComputedStyle(c, null),
            m = c.style;
        return p && (e = p[d], "" === e && !f.contains(c.ownerDocument, c) && (e = f.style(c, d)), ya.test(e) && ic.test(d) && (l = m.width, g = m.minWidth, n = m.maxWidth, m.minWidth = m.maxWidth = m.width = e, e = p.width, m.width = l, m.minWidth = g, m.maxWidth = n)), e
    } : C.documentElement.currentStyle && (Q = function(b,
        c) {
        var d, f, e = b.currentStyle && b.currentStyle[c],
            l = b.style;
        return null == e && l && l[c] && (e = l[c]), ya.test(e) && !vd.test(c) && (d = l.left, f = b.runtimeStyle && b.runtimeStyle.left, f && (b.runtimeStyle.left = b.currentStyle.left), l.left = "fontSize" === c ? "1em" : e, e = l.pixelLeft + "px", l.left = d, f && (b.runtimeStyle.left = f)), "" === e ? "auto" : e
    });
    f.each(["height", "width"], function(b, c) {
        f.cssHooks[c] = {
            get: function(b, d, e) {
                if (d) return 0 === b.offsetWidth && wd.test(Q(b, "display")) ? f.swap(b, yd, function() {
                    return G(b, c, e)
                }) : G(b, c, e)
            },
            set: function(b,
                d, e) {
                return M(b, d, e ? Xa(b, c, e, f.support.boxSizing && "border-box" === f.css(b, "boxSizing")) : 0)
            }
        }
    });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                e = b.currentStyle,
                l = f.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                g = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === f.trim(g.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"), e && !e.filter))) d.filter =
                tb.test(g) ? g.replace(tb, l) : g + " " + l
        }
    });
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(b, c) {
                return f.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return Q(b, "marginRight")
                })
            }
        });
        !f.support.pixelPosition && f.fn.position && f.each(["top", "left"], function(b, c) {
            f.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var e = Q(b, c);
                        return ya.test(e) ? f(b).position()[c] + "px" : e
                    }
                }
            }
        })
    });
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !f.support.reliableHiddenOffsets &&
            "none" === (b.style && b.style.display || Q(b, "display"))
    }, f.expr.filters.visible = function(b) {
        return !f.expr.filters.hidden(b)
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        f.cssHooks[b + c] = {
            expand: function(d) {
                var f = "string" == typeof d ? d.split(" ") : [d],
                    e = {};
                for (d = 0; 4 > d; d++) e[b + ea[d] + c] = f[d] || f[d - 2] || f[0];
                return e
            }
        };
        ic.test(b) || (f.cssHooks[b + c].set = M)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = f(this).val();
                return null == d ? null : f.isArray(d) ? f.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    f.param = function(b, d) {
        var e, l = [],
            g = function(b, c) {
                c = f.isFunction(c) ? c() : null == c ? "" : c;
                l[l.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = f.ajaxSettings && f.ajaxSettings.traditional);
        if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function() {
            g(this.name, this.value)
        });
        else
            for (e in b) N(e, b[e], d, g);
        return l.join("&").replace(Ad, "+")
    };
    var qa, ka, Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = f.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        ka = yc.href
    } catch (Rd) {
        ka = C.createElement("a"), ka.href = "", ka = ka.href
    }
    qa = mc.exec(ka.toLowerCase()) || [];
    f.fn.load = function(b, d, e) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var l, g, n, p = this,
            m = b.indexOf(" ");
        return 0 <= m && (l = b.slice(m, b.length), b = b.slice(0, m)), f.isFunction(d) ? (e = d, d = c) : d && "object" == typeof d && (g = "POST"), f.ajax({
            url: b,
            type: g,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                e && p.each(e, n || [b.responseText, c, b])
            }
        }).done(function(b) {
            n = arguments;
            p.html(l ? f("<div>").append(b.replace(Hd, "")).find(l) : b)
        }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        f.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    f.each(["get", "post"], function(b, d) {
        f[d] = function(b, e, l, g) {
            return f.isFunction(e) && (g = g || l, l = e, e = c), f.ajax({
                type: d,
                url: b,
                data: e,
                success: l,
                dataType: g
            })
        }
    });
    f.extend({
        getScript: function(b, d) {
            return f.get(b,
                c, d, "script")
        },
        getJSON: function(b, c, d) {
            return f.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? sa(b, f.ajaxSettings) : (c = b, b = f.ajaxSettings), sa(b, c), b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: za(Za),
        ajaxTransport: za(oc),
        ajax: function(b, d) {
            function e(b, d, j, n) {
                var v, r, u, z, B, K = d;
                if (2 !== G) {
                    G = 2;
                    m && clearTimeout(m);
                    p = c;
                    g = n || "";
                    I.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        z = s;
                        n = I;
                        var U, R, E, J, L = z.contents,
                            N = z.dataTypes,
                            P = z.responseFields;
                        for (R in P) R in j && (n[P[R]] = j[R]);
                        for (;
                            "*" === N[0];) N.shift(),
                            U === c && (U = z.mimeType || n.getResponseHeader("content-type"));
                        if (U)
                            for (R in L)
                                if (L[R] && L[R].test(U)) {
                                    N.unshift(R);
                                    break
                                }
                        if (N[0] in j) E = N[0];
                        else {
                            for (R in j) {
                                if (!N[0] || z.converters[R + " " + N[0]]) {
                                    E = R;
                                    break
                                }
                                J || (J = R)
                            }
                            E = E || J
                        }
                        z = j = E ? (E !== N[0] && N.unshift(E), j[E]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (s.ifModified && (B = I.getResponseHeader("Last-Modified"), B && (f.lastModified[l] = B), B = I.getResponseHeader("Etag"), B && (f.etag[l] = B)), 304 === b) K = "notmodified", v = !0;
                        else {
                            var H;
                            a: {
                                v = s;
                                r = z;
                                var O, K = v.dataTypes.slice();
                                j = K[0];
                                U = {};
                                R = 0;
                                v.dataFilter && (r = v.dataFilter(r, v.dataType));
                                if (K[1])
                                    for (H in v.converters) U[H.toLowerCase()] = v.converters[H];
                                for (; u = K[++R];)
                                    if ("*" !== u) {
                                        if ("*" !== j && j !== u) {
                                            H = U[j + " " + u] || U["* " + u];
                                            if (!H)
                                                for (O in U)
                                                    if (B = O.split(" "), B[1] === u && (H = U[j + " " + B[0]] || U["* " + B[0]])) {
                                                        !0 === H ? H = U[O] : !0 !== U[O] && (u = B[0], K.splice(R--, 0, u));
                                                        break
                                                    }
                                            if (!0 !== H)
                                                if (H && v["throws"]) r = H(r);
                                                else try {
                                                    r = H(r)
                                                } catch (Q) {
                                                    H = {
                                                        state: "parsererror",
                                                        error: H ? Q : "No conversion from " + j + " to " + u
                                                    };
                                                    break a
                                                }
                                        }
                                        j = u
                                    }
                                H = {
                                    state: "success",
                                    data: r
                                }
                            }
                            v = H;
                            K = v.state;
                            r = v.data;
                            u = v.error;
                            v = !u
                        } else if (u = K, !K || b) K = "error", 0 > b && (b = 0);
                    I.status = b;
                    I.statusText = (d || K) + "";
                    v ? D.resolveWith(A, [r, K, I]) : D.rejectWith(A, [I, K, u]);
                    I.statusCode(M);
                    M = c;
                    q && y.trigger("ajax" + (v ? "Success" : "Error"), [I, s, v ? r : u]);
                    C.fireWith(A, [I, K]);
                    q && (y.trigger("ajaxComplete", [I, s]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var l, g, n, p, m, r, q, u, s = f.ajaxSetup({}, d),
                A = s.context || s,
                y = A !== s && (A.nodeType || A instanceof f) ? f(A) : f.event,
                D = f.Deferred(),
                C = f.Callbacks("once memory"),
                M = s.statusCode || {},
                K = {},
                E = {},
                G = 0,
                J = "canceled",
                I = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!G) {
                            var d = b.toLowerCase();
                            b = E[d] = E[d] || b;
                            K[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === G ? g : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === G) {
                            if (!n)
                                for (n = {}; d = Ed.exec(g);) n[d[1].toLowerCase()] = d[2];
                            d = n[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return G || (s.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || J, p && p.abort(b), e(0, b), this
                    }
                };
            D.promise(I);
            I.success = I.done;
            I.error = I.fail;
            I.complete = C.add;
            I.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > G)
                        for (c in b) M[c] = [M[c], b[c]];
                    else c = b[I.status], I.always(c)
                }
                return this
            };
            s.url = ((b || s.url) + "").replace(Dd, "").replace(Gd, qa[1] + "//");
            s.dataTypes = f.trim(s.dataType || "*").toLowerCase().split(fa);
            null == s.crossDomain && (r = mc.exec(s.url.toLowerCase()) || !1, s.crossDomain = r && r.join(":") + (r[3] ? "" : "http:" === r[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            s.data && s.processData && "string" != typeof s.data && (s.data = f.param(s.data,
                s.traditional));
            na(Za, s, d, I);
            if (2 === G) return I;
            q = s.global;
            s.type = s.type.toUpperCase();
            s.hasContent = !Fd.test(s.type);
            q && 0 === f.active++ && f.event.trigger("ajaxStart");
            if (!s.hasContent && (s.data && (s.url += (lc.test(s.url) ? "&" : "?") + s.data, delete s.data), l = s.url, !1 === s.cache)) {
                r = f.now();
                var L = s.url.replace(Id, "$1_=" + r);
                s.url = L + (L === s.url ? (lc.test(s.url) ? "&" : "?") + "_=" + r : "")
            }(s.data && s.hasContent && !1 !== s.contentType || d.contentType) && I.setRequestHeader("Content-Type", s.contentType);
            s.ifModified && (l = l || s.url,
                f.lastModified[l] && I.setRequestHeader("If-Modified-Since", f.lastModified[l]), f.etag[l] && I.setRequestHeader("If-None-Match", f.etag[l]));
            I.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : s.accepts["*"]);
            for (u in s.headers) I.setRequestHeader(u, s.headers[u]);
            if (!s.beforeSend || !1 !== s.beforeSend.call(A, I, s) && 2 !== G) {
                J = "abort";
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) I[u](s[u]);
                if (p = na(oc, s, d, I)) {
                    I.readyState = 1;
                    q && y.trigger("ajaxSend", [I, s]);
                    s.async && 0 < s.timeout && (m = setTimeout(function() {
                        I.abort("timeout")
                    }, s.timeout));
                    try {
                        G = 1, p.send(K, e)
                    } catch (N) {
                        if (2 > G) e(-1, N);
                        else throw N;
                    }
                } else e(-1, "No Transport");
                return I
            }
            return I.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Kd = f.now();
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || f.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    f.ajaxPrefilter("json jsonp", function(d, e, l) {
        var g, n, p, m = d.data,
            r = d.url,
            q = !1 !== d.jsonp,
            s = q && Va.test(r),
            u = q && !s && "string" == typeof m && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(m);
        if ("jsonp" === d.dataTypes[0] || s || u) return g = d.jsonpCallback = f.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, n = b[g], s ? d.url = r.replace(Va, "$1" + g) : u ? d.data = m.replace(Va, "$1" + g) : q && (d.url += (Jd.test(r) ? "&" : "?") + d.jsonp + "=" + g), d.converters["script json"] = function() {
            return p || f.error(g + " was not called"), p[0]
        }, d.dataTypes[0] = "json", b[g] = function() {
            p = arguments
        }, l.always(function() {
            b[g] =
                n;
            d[g] && (d.jsonpCallback = e.jsonpCallback, qc.push(g));
            p && f.isFunction(n) && n(p[0]);
            p = n = c
        }), "script"
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return f.globalEval(b), b
            }
        }
    });
    f.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    f.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, f =
                C.head || C.getElementsByTagName("head")[0] || C.documentElement;
            return {
                send: function(e, l) {
                    d = C.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, e) {
                        if (e || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, f && d.parentNode && f.removeChild(d), d = c, e || l(200, "success")
                    };
                    f.insertBefore(d, f.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ra, ub = b.ActiveXObject ? function() {
            for (var b in ra) ra[b](0,
                1)
        } : !1,
        Ld = 0;
    f.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && zb())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : zb;
    var vb = f.ajaxSettings.xhr();
    f.extend(f.support, {
        ajax: !!vb,
        cors: !!vb && "withCredentials" in vb
    });
    f.support.ajax && f.ajaxTransport(function(d) {
        if (!d.crossDomain || f.support.cors) {
            var e;
            return {
                send: function(l, g) {
                    var n, p, m = d.xhr();
                    d.username ? m.open(d.type, d.url, d.async, d.username, d.password) : m.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (p in d.xhrFields) m[p] =
                            d.xhrFields[p];
                    d.mimeType && m.overrideMimeType && m.overrideMimeType(d.mimeType);
                    !d.crossDomain && !l["X-Requested-With"] && (l["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (p in l) m.setRequestHeader(p, l[p])
                    } catch (r) {}
                    m.send(d.hasContent && d.data || null);
                    e = function(b, l) {
                        var p, r, q, s, u;
                        try {
                            if (e && (l || 4 === m.readyState))
                                if (e = c, n && (m.onreadystatechange = f.noop, ub && delete ra[n]), l) 4 !== m.readyState && m.abort();
                                else {
                                    p = m.status;
                                    q = m.getAllResponseHeaders();
                                    s = {};
                                    (u = m.responseXML) && u.documentElement && (s.xml = u);
                                    try {
                                        s.text =
                                            m.responseText
                                    } catch (z) {}
                                    try {
                                        r = m.statusText
                                    } catch (A) {
                                        r = ""
                                    }!p && d.isLocal && !d.crossDomain ? p = s.text ? 200 : 404 : 1223 === p && (p = 204)
                                }
                        } catch (y) {
                            l || g(-1, y)
                        }
                        s && g(p, r, s, q)
                    };
                    d.async ? 4 === m.readyState ? setTimeout(e, 0) : (n = ++Ld, ub && (ra || (ra = {}, f(b).unload(ub)), ra[n] = e), m.onreadystatechange = e) : e()
                },
                abort: function() {
                    e && e(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ba = [
            function(b, c, d) {
                var e, l, g, n, p, m, r = this,
                    q = b.style,
                    s = {},
                    u = [],
                    A = b.nodeType && D(b);
                d.queue ||
                    (p = f._queueHooks(b, "fx"), null == p.unqueued && (p.unqueued = 0, m = p.empty.fire, p.empty.fire = function() {
                        p.unqueued || m()
                    }), p.unqueued++, r.always(function() {
                        r.always(function() {
                            p.unqueued--;
                            f.queue(b, "fx").length || p.empty.fire()
                        })
                    }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [q.overflow, q.overflowX, q.overflowY], "inline" === f.css(b, "display") && "none" === f.css(b, "float") && (!f.support.inlineBlockNeedsLayout || "inline" === P(b.nodeName) ? q.display = "inline-block" : q.zoom = 1));
                d.overflow && (q.overflow = "hidden",
                    f.support.shrinkWrapBlocks || r.done(function() {
                        q.overflow = d.overflow[0];
                        q.overflowX = d.overflow[1];
                        q.overflowY = d.overflow[2]
                    }));
                for (e in c) l = c[e], Md.exec(l) && (delete c[e], l !== (A ? "hide" : "show") && u.push(e));
                if (l = u.length) {
                    g = f._data(b, "fxshow") || f._data(b, "fxshow", {});
                    A ? f(b).show() : r.done(function() {
                        f(b).hide()
                    });
                    r.done(function() {
                        var c;
                        f.removeData(b, "fxshow", !0);
                        for (c in s) f.style(b, c, s[c])
                    });
                    for (e = 0; e < l; e++) c = u[e], n = r.createTween(c, A ? g[c] : 0), s[c] = g[c] || f.style(b, c), c in g || (g[c] = n.start, A && (n.end = n.start,
                        n.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        ta = {
            "*": [
                function(b, c) {
                    var d, e, l = this.createTween(b, c),
                        g = Nd.exec(c),
                        n = l.cur(),
                        p = +n || 0,
                        m = 1,
                        r = 20;
                    if (g) {
                        d = +g[2];
                        e = g[3] || (f.cssNumber[b] ? "" : "px");
                        if ("px" !== e && p) {
                            p = f.css(l.elem, b, !0) || d || 1;
                            do m = m || ".5", p /= m, f.style(l.elem, b, p + e); while (m !== (m = l.cur() / n) && 1 !== m && --r)
                        }
                        l.unit = e;
                        l.start = p;
                        l.end = g[1] ? p + (g[1] + 1) * d : d
                    }
                    return l
                }
            ]
        };
    f.Animation = f.extend(Bb, {
        tweener: function(b, c) {
            f.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, e = 0, l = b.length; e < l; e++) d = b[e], ta[d] = ta[d] || [], ta[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    f.Tween = S;
    S.prototype = {
        constructor: S,
        init: function(b, c, d, e, l, g) {
            this.elem = b;
            this.prop = d;
            this.easing = l || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (f.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = S.propHooks[this.prop];
            return b && b.get ? b.get(this) : S.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = S.propHooks[this.prop];
            return this.options.duration ? this.pos = c = f.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : S.propHooks._default.set(this), this
        }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = f.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                f.fx.step[b.prop] ? f.fx.step[b.prop](b) : b.elem.style &&
                    (null != b.elem.style[f.cssProps[b.prop]] || f.cssHooks[b.prop]) ? f.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    f.each(["toggle", "show", "hide"], function(b, c) {
        var d = f.fn[c];
        f.fn[c] = function(e, l, g) {
            return null == e || "boolean" == typeof e || !b && f.isFunction(e) && f.isFunction(l) ? d.apply(this, arguments) : this.animate(Ca(c, !0), e, l, g)
        }
    });
    f.fn.extend({
        fadeTo: function(b, c, d, f) {
            return this.filter(D).css("opacity",
                0).show().end().animate({
                opacity: c
            }, b, d, f)
        },
        animate: function(b, c, d, e) {
            var l = f.isEmptyObject(b),
                g = f.speed(c, d, e);
            c = function() {
                var c = Bb(this, f.extend({}, b), g);
                l && c.stop(!0)
            };
            return l || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, e) {
            var l = function(b) {
                var c = b.stop;
                delete b.stop;
                c(e)
            };
            return "string" != typeof b && (e = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    g = f.timers,
                    j = f._data(this);
                if (d) j[d] && j[d].stop && l(j[d]);
                else
                    for (d in j) j[d] &&
                        j[d].stop && Od.test(d) && l(j[d]);
                for (d = g.length; d--;) g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(e), c = !1, g.splice(d, 1));
                (c || !e) && f.dequeue(this, b)
            })
        }
    });
    f.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        f.fn[b] = function(b, d, f) {
            return this.animate(c, b, d, f)
        }
    });
    f.speed = function(b, c, d) {
        var e = b && "object" == typeof b ? f.extend({}, b) : {
            complete: d || !d && c || f.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !f.isFunction(c) && c
        };
        e.duration = f.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in f.fx.speeds ? f.fx.speeds[e.duration] : f.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        return e.old = e.complete, e.complete = function() {
            f.isFunction(e.old) && e.old.call(this);
            e.queue && f.dequeue(this, e.queue)
        }, e
    };
    f.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    f.timers = [];
    f.fx = S.prototype.init;
    f.fx.tick = function() {
        for (var b, c = f.timers,
            d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || f.fx.stop()
    };
    f.fx.timer = function(b) {
        b() && f.timers.push(b) && !Wa && (Wa = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.interval = 13;
    f.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fx.step = {};
    f.expr && f.expr.filters && (f.expr.filters.animated = function(b) {
        return f.grep(f.timers, function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    f.fn.offset = function(b) {
        if (arguments.length) return b ===
            c ? this : this.each(function(c) {
                f.offset.setOffset(this, b, c)
            });
        var d, e, l, g, n, p, m, r = {
                top: 0,
                left: 0
            },
            q = this[0],
            s = q && q.ownerDocument;
        if (s) return (e = s.body) === q ? f.offset.bodyOffset(q) : (d = s.documentElement, f.contains(d, q) ? ("undefined" != typeof q.getBoundingClientRect && (r = q.getBoundingClientRect()), l = Cb(s), g = d.clientTop || e.clientTop || 0, n = d.clientLeft || e.clientLeft || 0, p = l.pageYOffset || d.scrollTop, m = l.pageXOffset || d.scrollLeft, {
            top: r.top + p - g,
            left: r.left + m - n
        }) : r)
    };
    f.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(f.css(b, "marginTop")) || 0, d += parseFloat(f.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var e = f.css(b, "position");
            "static" === e && (b.style.position = "relative");
            var l = f(b),
                g = l.offset(),
                n = f.css(b, "top"),
                p = f.css(b, "left"),
                m = {},
                r = {},
                q, s;
            ("absolute" === e || "fixed" === e) && -1 < f.inArray("auto", [n, p]) ? (r = l.position(), q = r.top, s = r.left) : (q = parseFloat(n) || 0, s = parseFloat(p) || 0);
            f.isFunction(c) && (c = c.call(b, d, g));
            null !=
                c.top && (m.top = c.top - g.top + q);
            null != c.left && (m.left = c.left - g.left + s);
            "using" in c ? c.using.call(b, m) : l.css(m)
        }
    };
    f.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    e = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(f.css(b, "marginTop")) || 0, d.left -= parseFloat(f.css(b, "marginLeft")) || 0, e.top += parseFloat(f.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(f.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b =
                    this.offsetParent || C.body; b && !rc.test(b.nodeName) && "static" === f.css(b, "position");) b = b.offsetParent;
                return b || C.body
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var e = /Y/.test(d);
        f.fn[b] = function(l) {
            return f.access(this, function(b, l, g) {
                var n = Cb(b);
                if (g === c) return n ? d in n ? n[d] : n.document.documentElement[l] : b[l];
                n ? n.scrollTo(e ? f(n).scrollLeft() : g, e ? g : f(n).scrollTop()) : b[l] = g
            }, b, l, arguments.length, null)
        }
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        f.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(e, l) {
            f.fn[l] = function(l, g) {
                var n = arguments.length && (e || "boolean" != typeof l),
                    p = e || (!0 === l || !0 === g ? "margin" : "border");
                return f.access(this, function(d, e, l) {
                    var g;
                    return f.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : l === c ? f.css(d, e, l, p) : f.style(d, e, l, p)
                }, d, n ? l : c, n, null)
            }
        })
    });
    b.jQuery = b.$ = f;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return f
        })
})(window);
var portraitMode = !1,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = 640,
    desktopHeight = 480,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate", "bg"],
    advancedDivsToResize = {
    	/*
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height +
                20
        },
        MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width +
                2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        }
        */
    };

function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) /
            2)
    } catch (c) {
        console.log(c)
    }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
var minHeight = 99999999;

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        ig.ua.mobile || $("#tempdiv").hide();
        for (var b = navigator.userAgent.split(" "),
            c = null, d = 0; d < b.length; d++) "Version/" == b[d].substr(0, 8) && (c = b[d]);
        b = window.chrome; - 1 < navigator.userAgent.indexOf("Chrome") && null == c ? ig.ua.mobile && null !== b && void 0 !== b && $(window) && (c = document.getElementById("scrollDown"), c.src = "media/graphics/orientate/scroll_down.png", c.style.height = "40%", c.style.width = "20%", c.style.backgroundColor = "rgba(11,156,49,0.4)", 0 == window.orientation && $("#scrollDown").hide(), 90 == Math.abs(window.orientation) && (c = document.body.offsetHeight, c < minHeight && (minHeight = c), c = portraitMode ?
            document.getElementById("orientate") : document.getElementById("game"), b = document.getElementById("tempdiv"), c = c.clientHeight + b.clientHeight, console.log(c + "," + minHeight), c > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()), $(window).on("orientationchange", function() {
            0 == window.orientation && $("#scrollDown").hide();
            Math.abs(window.orientation);
            $("#scrollDown").show();
            0 == window.orientation && $("#scrollDown").hide()
        }), window.addEventListener("resize", function() {
            0 == window.orientation && $("#scrollDown").hide();
            if (90 == Math.abs(window.orientation)) {
                var b = portraitMode ? document.getElementById("orientate") : document.getElementById("game"),
                    c = document.getElementById("tempdiv");
                b.clientHeight + c.clientHeight > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()
            }
        })) : ($("#scrollDown").hide(), $("#tempdiv").hide())
    }
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide(), $("#bg").hide()) : ($("#orientate").hide(), $("#game").show(), $("#bg").show()));
    sizeHandler()
}

function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend",
        function(b) {
            b.preventDefault();
            return !1
        }, !1))
}
window.addEventListener("resize", function() {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
    orientationHandler()
}, !1);
document.ontouchmove = function() {
    window.scrollTo(0, 1)
};

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var m = document.createElement("object");
            m.id = "jukebox-flashstream-" + this.id;
            m.setAttribute("type", "application/x-shockwave-flash");
            m.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            m.setAttribute("width", "0");
            m.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (e in g) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", g[e]), m.appendChild(b);
            c.outerHTML = m.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in g) c.setAttribute(e, g[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var g in d)
                    if (e >= d[g].start && e <=
                        d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" ===
            typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }],
                d, e, g = 0, m = c.length; g < m; g++)
                if (e = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var y = 0, r = c[g].m.length; y < r; y++)
                        if (d = c[g].m[y], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (q) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                g = e.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = {},
        c = null,
        d = !0,
        e = !1;
    if ("undefined" !== typeof AudioContext) c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch (g) {
            e = !0
        }
    } else d = !1, e = !0; if (d) {
        var m = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        m.gain.value = 1;
        m.connect(c.destination)
    }
    var y = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = e;
        this._howls = []
    };
    y.prototype = {
        volume: function(b) {
            b =
                parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (m.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? m.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (m.gain.value = b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) &&
                    !1 === this._howls[c]._webAudio)
                    for (var e = 0; e < this._howls[c]._audioNode.length; e++) this._howls[c]._audioNode[e].muted = b
        }
    };
    var r = new y,
        y = null;
    if (!e) var y = new Audio,
        q = {
            mp3: !!y.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            opus: !!y.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!y.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!y.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            m4a: !!(y.canPlayType("audio/x-m4a;") || y.canPlayType("audio/aac;")).replace(/^no$/,
                ""),
            mp4: !!(y.canPlayType("audio/x-mp4;") || y.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!y.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        };
    var u = function(b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload || function() {}];
        this._onloaderror = [b.onloaderror || function() {}];
        this._onend = [b.onend || function() {}];
        this._onpause = [b.onpause || function() {}];
        this._onplay = [b.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        r._howls.push(this);
        this.load()
    };
    u.prototype = {
        load: function() {
            var d = this,
                g = null;
            if (!e) {
                for (var p = 0; p < d._urls.length; p++) {
                    var m, u;
                    if (d._format) m = d._format;
                    else if (u = d._urls[p].toLowerCase().split("?")[0], m =
                        (m = u.match(/.+\.([^?]+)(\?|$)/)) && 2 <= m.length ? m : u.match(/data\:audio\/([^?]+);/)) m = m[1];
                    else {
                        d.on("loaderror");
                        return
                    } if (q[m]) {
                        g = d._urls[p];
                        break
                    }
                }
                if (g) {
                    d._src = g;
                    if (d._webAudio) {
                        var y = g;
                        if (y in b) d._duration = b[y].duration, s(d);
                        else {
                            var M = new XMLHttpRequest;
                            M.open("GET", y, !0);
                            M.responseType = "arraybuffer";
                            M.onload = function() {
                                c.decodeAudioData(M.response, function(c) {
                                    c && (b[y] = c, s(d, c))
                                }, function() {
                                    d.on("loaderror")
                                })
                            };
                            M.onerror = function() {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode,
                                    d.load())
                            };
                            try {
                                M.send()
                            } catch (Xa) {
                                M.onerror()
                            }
                        }
                    } else {
                        var G = new Audio;
                        d._audioNode.push(G);
                        G.src = g;
                        G._pos = 0;
                        G.preload = "auto";
                        G.volume = r._muted ? 0 : d._volume * r.volume();
                        b[g] = d;
                        var P = function() {
                            d._duration = Math.ceil(10 * G.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            G.removeEventListener("canplaythrough", P, !1)
                        };
                        G.addEventListener("canplaythrough", P, !1);
                        G.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, e) {
            var g = this;
            "function" === typeof d && (e = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!g._loaded) return g.on("load", function() {
                g.play(d, e)
            }), g;
            if (!g._sprite[d]) return "function" === typeof e && e(), g;
            g._inactiveNode(function(m) {
                m._sprite = d;
                var q = 0 < m._pos ? m._pos : g._sprite[d][0] / 1E3,
                    s = g._sprite[d][1] / 1E3 - m._pos,
                    u = !(!g._loop && !g._sprite[d][2]),
                    y = "string" === typeof e ? e :
                    Math.round(Date.now() * Math.random()) + "",
                    G, P = {
                        id: y,
                        sprite: d,
                        loop: u
                    };
                G = setTimeout(function() {
                    !g._webAudio && u && g.stop(P.id, P.timer).play(d, P.id);
                    g._webAudio && !u && (g._nodeById(P.id).paused = !0, g._nodeById(P.id)._pos = 0);
                    !g._webAudio && !u && g.stop(P.id, P.timer);
                    g.on("end", y)
                }, 1E3 * s);
                g._onendTimer.push(G);
                P.timer = g._onendTimer[g._onendTimer.length - 1];
                if (g._webAudio) {
                    G = g._sprite[d][0] / 1E3;
                    var N = g._sprite[d][1] / 1E3;
                    m.id = y;
                    m.paused = !1;
                    G = [u, G, N];
                    N = g._nodeById(y);
                    N.bufferSource = c.createBufferSource();
                    N.bufferSource.buffer =
                        b[g._src];
                    N.bufferSource.connect(N.panner);
                    N.bufferSource.loop = G[0];
                    G[0] && (N.bufferSource.loopStart = G[1], N.bufferSource.loopEnd = G[1] + G[2]);
                    N.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    m.gain.value = g._volume;
                    "undefined" === typeof m.bufferSource.start ? m.bufferSource.noteGrainOn(0, q, s) : m.bufferSource.start(0, q, s)
                } else if (4 === m.readyState) m.id = y, m.currentTime = q, m.muted = r._muted, m.volume = g._volume * r.volume(), setTimeout(function() {
                    m.play()
                }, 0);
                else {
                    g._clearEndTimer(G);
                    var za = d,
                        na =
                        e,
                        sa = function() {
                            g.play(za, na);
                            m.removeEventListener("canplaythrough", sa, !1)
                        };
                    m.addEventListener("canplaythrough", sa, !1);
                    return g
                }
                g.on("play");
                "function" === typeof e && e(y);
                return g
            });
            return g
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.pause(b)
            }), d;
            d._clearEndTimer(c || 0);
            var e = b ? d._nodeById(b) : d._activeNode();
            if (e)
                if (e._pos = d.pos(null, b), d._webAudio) {
                    if (!e.bufferSource || e.paused) return d;
                    e.paused = !0;
                    "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) :
                        e.bufferSource.stop(0)
                } else e.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.stop(b)
            }), d;
            d._clearEndTimer(c || 0);
            var e = b ? d._nodeById(b) : d._activeNode();
            if (e)
                if (e._pos = 0, d._webAudio) {
                    if (!e.bufferSource || e.paused) return d;
                    e.paused = !0;
                    "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
                } else e.pause(), e.currentTime = 0;
            return d
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                    c.mute(b)
                }),
                c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function() {
                    d.volume(b, c)
                }), d;
                var e = c ? d._nodeById(c) : d._activeNode();
                e && (d._webAudio ? e.gain.value = b : e.volume =
                    b * r.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b, d) {
            var e = this;
            if (!e._loaded) return e.on("load", function() {
                e.pos(b)
            }), "number" === typeof b ? e : e._pos || 0;
            b = parseFloat(b);
            var g = d ? e._nodeById(d) : e._activeNode();
            if (g) return 0 <= b ? (e.pause(d), g._pos = b, e.play(g._sprite, d), e) : e._webAudio ? g._pos + (c.currentTime - e._playStart) : g.currentTime;
            if (0 <= b) return e;
            for (g = 0; g < e._audioNode.length; g++)
                if (e._audioNode[g].paused && 4 === e._audioNode[g].readyState) return e._webAudio ? e._audioNode[g]._pos : e._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, e) {
            var g = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded) return g.on("play", function() {
                g.pos3d(b, c, d, e)
            }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var m = e ? g._nodeById(e) : g._activeNode();
                    m && (g._pos3d = [b, c, d], m.panner.setPosition(b, c, d))
                }
            } else return g._pos3d;
            return g
        },
        fade: function(b, c, d,
            e, g) {
            var m = this,
                r = Math.abs(b - c),
                q = b > c ? "down" : "up",
                r = r / 0.01,
                s = d / r;
            if (!m._loaded) return m.on("load", function() {
                m.fade(b, c, d, e, g)
            }), m;
            m.volume(b, g);
            for (var u = 1; u <= r; u++)(function() {
                var b = Math.round(1E3 * (m._volume + ("up" === q ? 0.01 : -0.01) * u)) / 1E3;
                setTimeout(function() {
                    m.volume(b, g);
                    b === c && e && e()
                }, s * u)
            })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, e) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(e);
                g.on("end")
            }, e)
        },
        _nodeById: function(b) {
            for (var c =
                this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b = this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var e;
                this._webAudio ? (e = this._setupAudioNode(),
                    b(e)) : (this.load(), e = this._audioNode[this._audioNode.length - 1], e.addEventListener("loadedmetadata", function() {
                    b(e)
                }))
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]),
                this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(m);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var e = 0; e < d.length; e++) c ?
                    d[e].call(this, c) : d[e].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], e = c.toString(), g = 0; g < d.length; g++)
                if (e === d[g].toString()) {
                    d.splice(g, 1);
                    break
                }
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = r._howls.indexOf(this);
            null !== c && 0 <= c && r._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var s = function(b, c) {
        b._duration = c ? c.duration : b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length &&
            (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: r,
            Howl: u
        }
    });
    "undefined" !== typeof exports && (exports.Howler = r, exports.Howl = u);
    window.Howler = r;
    window.Howl = u
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            g = function() {
                return d.apply(this instanceof e && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        g.prototype = new e;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, g) {
            var n = ig.$new("canvas");
            n.width = b.width;
            n.height =
                b.height;
            var m = n.getContext("2d");
            ig.System.SCALE.CRISP(n, m);
            var y = ig.getVendorAttribute(m, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(m, "getImageDataHD");
            var D = b.width / y,
                K = b.height / y;
            n.width = Math.ceil(D);
            n.height = Math.ceil(K);
            m.drawImage(b, 0, 0, D, K);
            return 1 === y ? m.getImageData(c, d, e, g) : m.getImageDataHD(c, d, e, g)
        },
        module: function(b) {
            if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, g = 0; g < d.requires.length; g++) {
                    var m = d.requires[g];
                    ig.modules[m] ? ig.modules[m].loaded ||
                        (e = !1) : (e = !1, ig._loadScript(m, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    m = ig._loadQueue[c].requires;
                    for (g = 0; g < m.length; g++) d = ig.modules[m[g]], (!d || !d.loaded) && e.push(m[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" +
                b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) &&
                ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() :
                (ig._boot(), ig.modules["dom.ready"] = {
                    requires: [],
                    loaded: !1,
                    body: null
                }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, g) {
            var m = c++;
            d[m] = !0;
            var s = function() {
                d[m] && (b.requestAnimationFrame(s, g), e())
            };
            b.requestAnimationFrame(s, g);
            return m
        };
        b.ig.clearAnimation =
            function(b) {
                delete d[b]
            }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        g = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        m = 0;
    b.ig.Class = function() {};
    var y = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" == typeof b[e] && "function" == typeof c[e] && g.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
                return function() {
                    var e = this.parent;
                    this.parent = d[b];
                    var g = c.apply(this, arguments);
                    this.parent = e;
                    return g
                }
            }(e, b[e])) : c[e] =
            b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var u = this.prototype;
        e = !0;
        var s = new this;
        e = !1;
        for (var l in c) s[l] = "function" == typeof c[l] && "function" == typeof u[l] && g.test(c[l]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = u[b];
                var e = c.apply(this, arguments);
                this.parent =
                    d;
                return e
            }
        }(l, c[l]) : c[l];
        d.prototype = s;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = y;
        d.classId = s.classId = ++m;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * b,
                e = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            for (var m = g.getContext("2d"), y = m.getImageData(0, 0, d, e), r = 0; r < e; r++)
                for (var q = 0; q < d; q++) {
                    var u = 4 * (Math.floor(r / b) * this.width + Math.floor(q / b)),
                        s = 4 * (r * d + q);
                    y.data[s] = c.data[u];
                    y.data[s + 1] = c.data[u + 1];
                    y.data[s + 2] = c.data[u + 2];
                    y.data[s + 3] = c.data[u + 3]
                }
            m.putImageData(y, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, e, g, m) {
            if (this.loaded) {
                var y = ig.system.scale;
                g = (g ? g : this.width) * y;
                m = (m ? m : this.height) * y;
                ig.system.context.drawImage(this.data,
                    d ? d * y : 0, e ? e * y : 0, g, m, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, m);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, g, m, y) {
            g = g ? g : e;
            if (this.loaded && !(e > this.width || g > this.height)) {
                var r = ig.system.scale,
                    q = Math.floor(e * r),
                    u = Math.floor(g * r),
                    s = m ? -1 : 1,
                    l = y ? -1 : 1;
                if (m || y) ig.system.context.save(), ig.system.context.scale(s, l);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * r, Math.floor(d * e / this.width) * g * r, q, u, ig.system.getDrawPos(b) * s - (m ? q : 0), ig.system.getDrawPos(c) * l - (y ? u : 0), q, u);
                (m ||
                    y) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, m = 0; m < b.length; m++) this.draw(b[m], c, d + m * g, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) m = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? m / 2 : m;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (m = 0; m < b.length; m++) e = b.charCodeAt(m),
                    c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                g = this.widthMap[b] * e,
                m = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, g, m, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, m);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, g = 0; g < b.width; g++) {
                var m = 4 * g + 3;
                127 < c.data[m] ? e++ : 128 > c.data[m] && e && (this.widthMap.push(e), this.indices.push(g - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(g - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c <
                        ig.Sound.channels; c++) {
                        var g = new Audio(e);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var m = new Audio(e);
            d && (m.addEventListener("canplaythrough", function r(c) {
                m.removeEventListener("canplaythrough", r, !1);
                d(b, !0, c)
            }, !1), m.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            m.preload = "auto";
            m.load();
            this.clips[b] = [m];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(e), g.load(), this.clips[b].push(g);
            return m
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                    0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        bgcanvas: null,
        bgcontext: null,
        init: function(b, c, d, e, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.bgcanvas = ig.$("#bgcanvas");
            this.resize(d, e, g);
            this.context = this.canvas.getContext("2d");
            this.bgcontext = this.bgcanvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight;
            this.bgcanvas.width = this.realWidth;
            this.bgcanvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth,
                this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.system.bgcanvas.addEventListener("mousewheel", b, !1);
                ig.system.bgcanvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.bgcanvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.bgcanvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.bgcanvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.bgcanvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend",
                    this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none", ig.system.bgcanvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.bgcanvas.addEventListener("touchend",
                    this.keyup.bind(this), !1), ig.system.bgcanvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.bgcanvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.bgcanvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.bgcanvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.bgcanvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 :
                    ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b,
            c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmStarted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "click",
            path: "media/audio/click4"
        }, {
            name: "tile",
            path: "media/audio/click2"
        }, {
            name: "win",
            path: "media/audio/bgm2"
        }, {
            name: "correct",
            path: "media/audio/correct"
        }, {
            name: "wrong",
            path: "media/audio/wrong"
        }, {
            name: "ready",
            path: "media/audio/ready"
        }, {
            name: "go",
            path: "media/audio/go"
        }, {
            name: "congrats",
            path: "media/audio/congrats"
        }, {
            name: "wait",
            path: "media/audio/wait"
        }, {
            name: "power",
            path: "media/audio/power"
        }, {
            name: "over",
            path: "media/audio/over"
        }, {
            name: "count",
            path: "media/audio/count"
        }, {
            name: "hurry",
            path: "media/audio/hurry"
        }, {
            name: "ball",
            path: "media/audio/ball"
        }, {
            name: "star",
            path: "media/audio/star"
        }],
        debug: !1,
        init: function() {
            ig.ua.mobile ? (this.initSfx(), this.setupJukebox()) : (this.initSfx(), this.setupDesktopMusic());
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end", function(b) {
                        b.isPlaying = !1;
                        this.soundBuffer.pop()
                    }.bind(this, this.voSoundLoaded[index])),
                    this.voSoundLoaded[index].on("play", function(b) {
                        b.isPlaying = !0
                    }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            ig.ua.mobile ? this.pausePosition = this.jukebox.player.pause() : ig.music.pause();
            this.bgmPlaying = !1
        },
        playBackgroundMusic: function() {
            this.bgmPlaying || (this.bgmStarted = !0, ig.ua.mobile ? this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0) : ig.music.play(), this._unMuteBackgroundMusic(), this.bgmPlaying = !0)
        },
        playSound: function(b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying) this.soundBuffer.push(b), b.play()
        },
        stopAllAndPlaySound: function(b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function() {
            for (index = 0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(b, c, d) {
            var e = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                urls: [e, c],
                onload: d
            }) : new Howl({
                urls: [e, c]
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        _muteBackgroundMusic: function() {
            ig.ua.mobile ? (this.stopBackgroundMusic(), this.jukebox.player.setVolume(0)) : ig.music.volume = 0;
            this.debug && console.log("BGM muted")
        },
        _unMuteBackgroundMusic: function() {
            this.bgmStarted &&
                (ig.ua.mobile ? (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.jukebox.player.setVolume(1)) : ig.music.volume = 1, this.debug && console.log("BGM can play"))
        },
        focusBlurMute: function() {
            this.forceMuted || this.mute()
        },
        focusBlurUnmute: function() {
            this.forceMuted || this.unmute()
        },
        setForceMuted: function(b) {
            this.forceMuted = b
        },
        mute: function() {
            this.muted || (this._muteSounds(), this._muteBackgroundMusic(), this.muted = !0)
        },
        unmute: function() {
            this.muted && (this._unMuteSounds(), this._unMuteBackgroundMusic(), this.muted = !1)
        },
        setupWindowHandler: function() {
            "true" === getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function() {
                    ig.ua.mobile && ig.game && ig.game.resumeGame();
                    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
                }, window.onblur =
                function() {
                    ig.soundHandler && ig.soundHandler.focusBlurMute()
                })
        },
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.sfxSoundLoaded.push(this[b])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name,
                    this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function() {
            ig.music.add("media/audio/bgm1.*", "background")
        },
        setupJukebox: function() {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox, this.pausePosition = this.jukebox.player.settings.spritemap.music.start)
        },
        forceLoopBGM: function() {
            if (!this.forceMuted && this.bgmPlaying && this.jukebox && this.jukebox.player && this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop) {
                if (0 <= this.prevTime)
                    if (this.jukebox.player.getCurrentTime() ===
                        this.prevTime) {
                        if (this.silentCounter || (this.silentCounter = 0), this.silentCounter++, this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end || this.silentCounter > 0.0010 * ig.soundHandler.jukebox.player.settings.timeout * ig.system.fps) this.jukebox.player.pause(), this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.silentCounter = null
                    } else this.silentCounter = null;
                this.prevTime = this.jukebox.player.getCurrentTime()
            }
        }
    })
});

function getHiddenProp() {
    var b = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var c = 0; c < b.length; c++)
        if (b[c] + "Hidden" in document) return b[c] + "Hidden";
    return null
}

function isHidden() {
    var b = getHiddenProp();
    return !b ? !1 : document[b]
}
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(evtname, visChange)
}
window.addEventListener("pagehide", function() {
    ig.soundHandler && ig.soundHandler.focusBlurMute()
}, !1);
window.addEventListener("pageshow", function() {
    ig.ua.mobile && ig.game && ig.game.resumeGame();
    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
}, !1);

function visChange() {
    isHidden() ? ig.soundHandler && ig.soundHandler.focusBlurMute() : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.focusBlurUnmute())
}
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(b, c, d, e, g, m, y) {
        ig.system = new ig.System(b, d, e, g, m || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new(y || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b,
            c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function(b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
            b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var m in this.tiledef) m | 0 > this.lastSlope && (this.lastSlope = m | 0)
        },
        trace: function(b, c, g, m, y, r) {
            var q = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                u = Math.ceil(Math.max(Math.abs(g), Math.abs(m)) / this.tilesize);
            if (1 < u)
                for (var s = g / u, l = m / u, n = 0; n < u && (s || l) && !(this._traceStep(q,
                    b, c, s, l, y, r, g, m, n), b = q.pos.x, c = q.pos.y, q.collision.x && (g = s = 0), q.collision.y && (m = l = 0), q.collision.slope); n++);
            else this._traceStep(q, b, c, g, m, y, r, g, m, 0);
            return q
        },
        _traceStep: function(b, c, g, m, y, r, q, u, s, l) {
            b.pos.x += m;
            b.pos.y += y;
            var n = 0;
            if (m) {
                var p = 0 < m ? r : 0,
                    A = 0 > m ? this.tilesize : 0,
                    n = Math.max(Math.floor(g / this.tilesize), 0),
                    D = Math.min(Math.ceil((g + q) / this.tilesize), this.height);
                m = Math.floor((b.pos.x + p) / this.tilesize);
                var K = Math.floor((c + p) / this.tilesize);
                if (0 < l || m == K || 0 > K || K >= this.width) K = -1;
                if (0 <= m && m < this.width)
                    for (var M =
                        n; M < D && !(-1 != K && (n = this.data[M][K], 1 < n && n <= this.lastSlope && this._checkTileDef(b, n, c, g, u, s, r, q, K, M))); M++)
                        if (n = this.data[M][m], 1 == n || n > this.lastSlope || 1 < n && this._checkTileDef(b, n, c, g, u, s, r, q, m, M)) {
                            if (1 < n && n <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = n;
                            c = b.pos.x = m * this.tilesize - p + A;
                            u = 0;
                            break
                        }
            }
            if (y) {
                p = 0 < y ? q : 0;
                y = 0 > y ? this.tilesize : 0;
                n = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                A = Math.min(Math.ceil((b.pos.x + r) / this.tilesize), this.width);
                M = Math.floor((b.pos.y + p) / this.tilesize);
                D = Math.floor((g + p) / this.tilesize);
                if (0 < l || M == D || 0 > D || D >= this.height) D = -1;
                if (0 <= M && M < this.height)
                    for (m = n; m < A && !(-1 != D && (n = this.data[D][m], 1 < n && n <= this.lastSlope && this._checkTileDef(b, n, c, g, u, s, r, q, m, D))); m++)
                        if (n = this.data[M][m], 1 == n || n > this.lastSlope || 1 < n && this._checkTileDef(b, n, c, g, u, s, r, q, m, M)) {
                            if (1 < n && n <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = n;
                            b.pos.y = M * this.tilesize - p + y;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, m, y, r, q, u, s, l) {
            var n = this.tiledef[c];
            if (!n) return !1;
            c = (n[2] -
                n[0]) * this.tilesize;
            var p = (n[3] - n[1]) * this.tilesize,
                A = n[4];
            q = g + y + (0 > p ? q : 0) - (s + n[0]) * this.tilesize;
            u = m + r + (0 < c ? u : 0) - (l + n[1]) * this.tilesize;
            if (0 < c * u - p * q) {
                if (0 > y * -p + r * c) return A;
                s = Math.sqrt(c * c + p * p);
                l = p / s;
                s = -c / s;
                var D = q * l + u * s,
                    n = l * D,
                    D = s * D;
                if (n * n + D * D >= y * y + r * r) return A || 0.5 > c * (u - r) - p * (q - y);
                b.pos.x = g + y - n;
                b.pos.y = m + r - D;
                b.collision.slope = {
                    x: c,
                    y: p,
                    nx: l,
                    ny: s
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, m) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + m
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b,
            c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < e; g++) {
                this.preRenderedChunks[g] = [];
                for (var m = 0; m < d; m++) this.preRenderedChunks[g][m] = this.preRenderChunk(m, g, m == d - 1 ? b - m * this.chunkSize : this.chunkSize, g == e - 1 ?
                    c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var g = d / this.tilesize / ig.system.scale + 1,
                m = e / this.tilesize / ig.system.scale + 1,
                y = b * this.chunkSize / ig.system.scale % this.tilesize,
                r = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var q = ig.$new("canvas");
            q.width = d;
            q.height = e;
            q.retinaResolutionEnabled = !1;
            e = q.getContext("2d");
            ig.System.scaleMode(q, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < g; e++)
                for (var u = 0; u < m; u++)
                    if (e + b < this.width && u + c < this.height) {
                        var s = this.data[u + c][e + b];
                        s && this.tiles.drawTile(e * this.tilesize - y, u * this.tilesize - r, s - 1, this.tilesize)
                    }
            ig.system.context = d;
            return q
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                m = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                y = this.preRenderedChunks[0].length,
                r = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, y), m = Math.min(m, r));
            for (var q = 0; e < m; e++) {
                for (var u = 0, s = d; s < g; s++) {
                    var l = this.preRenderedChunks[e % r][s % y],
                        n = -b + s * this.chunkSize - u,
                        p = -c + e * this.chunkSize - q;
                    ig.system.context.drawImage(l, n, p);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(n, p, this.chunkSize, this.chunkSize));
                    this.repeat && l.width < this.chunkSize && n + l.width < ig.system.realWidth && (u += this.chunkSize - l.width, g++)
                }
                this.repeat && l.height < this.chunkSize && p + l.height < ig.system.realHeight && (q += this.chunkSize - l.height, m++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                e = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, m = this.scroll.y % this.tilesize, y = -g - this.tilesize, g = ig.system.width + this.tilesize - g, r = ig.system.height + this.tilesize - m, q = -1, m = -m - this.tilesize; m < r; q++, m += this.tilesize) {
                var u = q + e;
                if (u >= this.height || 0 > u) {
                    if (!this.repeat) continue;
                    u = (u % this.height + this.height) % this.height
                }
                for (var s = -1, l = y; l < g; s++, l += this.tilesize) {
                    b = s + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[u][b])(c = this.anims[b -
                        1]) ? c.draw(l, m) : this.tiles.drawTile(l, m, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name &&
                delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            ig.system.context.clearRect(0, 0, ig.system.realWidth, ig.system.realHeight);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b =
                0; b < this.backgroundMaps.length; b++) {
                var c = this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst ==
                    ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, g = Math.floor(d.pos.y / this.cellSize), m = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, y = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, r = Math.floor(d.pos.x / this.cellSize); r < m; r++)
                        for (var q = g; q < y; q++)
                            if (b[r])
                                if (b[r][q]) {
                                    for (var u = b[r][q], s = 0; s < u.length; s++) d.touches(u[s]) && !e[u[s].id] && (e[u[s].id] = !0, ig.Entity.checkPair(d, u[s]));
                                    u.push(d)
                                } else b[r][q] = [d];
                else b[r] = {}, b[r][q] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex -
                c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x + c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
    ig.System.inject({
        run: function() {
            ig.debug.beforeRun();
            this.parent();
            ig.debug.afterRun()
        },
        setGameNow: function(b) {
            this.parent(b);
            ig.debug.ready()
        }
    });
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: 0.016,
        debugRealTime: Date.now(),
        init: function() {
            var b = ig.$new("link");
            b.rel = "stylesheet";
            b.type = "text/css";
            b.href = ig.prefix + "lib/impact/debug/debug.css";
            ig.$("body")[0].appendChild(b);
            this.container = ig.$new("div");
            this.container.className = "ig_debug";
            ig.$("body")[0].appendChild(this.container);
            this.panelMenu = ig.$new("div");
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
            this.panelMenu.className = "ig_debug_panel_menu";
            this.container.appendChild(this.panelMenu);
            this.numberContainer = ig.$new("div");
            this.numberContainer.className = "ig_debug_stats";
            this.panelMenu.appendChild(this.numberContainer);
            window.console && window.console.log &&
                window.console.assert && (ig.log = console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert);
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function(b) {
            var c = ig.$new("span");
            this.numberContainer.appendChild(c);
            this.numberContainer.appendChild(document.createTextNode(b));
            this.numbers[b] = c
        },
        showNumber: function(b, c, d) {
            this.numbers[b] || this.addNumber(b, d);
            this.numbers[b].textContent = c
        },
        addPanel: function(b) {
            var c = new b.type(b.name, b.label);
            if (b.options)
                for (var d = 0; d < b.options.length; d++) {
                    var e = b.options[d];
                    c.addOption(new ig.DebugOption(e.name, e.object, e.property))
                }
            this.panels[c.name] = c;
            c.container.style.display = "none";
            this.container.appendChild(c.container);
            b = ig.$new("div");
            b.className = "ig_debug_menu_item";
            b.textContent = c.label;
            b.addEventListener("click", function() {
                this.togglePanel(c)
            }.bind(this), !1);
            c.menuItem = b;
            e = !1;
            for (d = 1; d < this.panelMenu.childNodes.length; d++) {
                var g = this.panelMenu.childNodes[d];
                if (g.textContent > c.label) {
                    this.panelMenu.insertBefore(b,
                        g);
                    e = !0;
                    break
                }
            }
            e || this.panelMenu.appendChild(b)
        },
        showPanel: function(b) {
            this.togglePanel(this.panels[b])
        },
        togglePanel: function(b) {
            b != this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
            var c = "block" != b.container.style.display;
            b.toggle(c);
            b.menuItem.className = "ig_debug_menu_item" + (c ? " active" : "");
            c && (this.activePanel = b)
        },
        ready: function() {
            for (var b in this.panels) this.panels[b].ready()
        },
        beforeRun: function() {
            var b =
                Date.now();
            this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
            this.debugRealTime = b;
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function() {
            var b = Date.now() - this.debugRealTime;
            this.debugTime = 0.8 * this.debugTime + 0.2 * b;
            this.activePanel && this.activePanel.afterRun();
            this.showNumber("ms", this.debugTime.toFixed(2));
            this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
            this.showNumber("draws", ig.Image.drawCount);
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
            ig.Image.drawCount = 0
        }
    });
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function(b, c) {
            this.name = b;
            this.label = c;
            this.container = ig.$new("div");
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function(b) {
            this.active = b;
            this.container.style.display = b ? "block" : "none"
        },
        addPanel: function(b) {
            this.panels.push(b);
            this.container.appendChild(b.container)
        },
        addOption: function(b) {
            this.options.push(b);
            this.container.appendChild(b.container)
        },
        ready: function() {},
        beforeRun: function() {},
        afterRun: function() {}
    });
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function(b, c, d) {
            this.name = b;
            this.object = c;
            this.property = d;
            this.active = this.object[this.property];
            this.container = ig.$new("div");
            this.container.className = "ig_debug_option";
            this.label = ig.$new("span");
            this.label.className = "ig_debug_label";
            this.label.textContent = this.name;
            this.mark = ig.$new("span");
            this.mark.className = "ig_debug_label_mark";
            this.container.appendChild(this.mark);
            this.container.appendChild(this.label);
            this.container.addEventListener("click", this.click.bind(this), !1);
            this.setLabel()
        },
        setLabel: function() {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled
        },
        click: function(b) {
            this.active = !this.active;
            this.object[this.property] = this.active;
            this.setLabel();
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    });
    ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function() {
            this.parent();
            ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y *
                ig.system.scale));
            if (ig.Entity._debugShowVelocities) {
                var b = this.pos.x + this.size.x / 2,
                    c = this.pos.y + this.size.y / 2;
                this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y)
            }
            if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target))
                for (var d in this.target)(b = ig.game.getEntityByName(this.target[d])) &&
                    this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, b.pos.x + b.size.x / 2, b.pos.y + b.size.y / 2)
        },
        _debugDrawLine: function(b, c, d, e, g) {
            ig.system.context.strokeStyle = b;
            ig.system.context.lineWidth = 1;
            ig.system.context.beginPath();
            ig.system.context.moveTo(ig.system.getDrawPos(c - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            ig.system.context.lineTo(ig.system.getDrawPos(e - ig.game.screen.x), ig.system.getDrawPos(g - ig.game.screen.y));
            ig.system.context.stroke();
            ig.system.context.closePath()
        }
    });
    ig.Entity._debugEnableChecks = !0;
    ig.Entity._debugShowBoxes = !1;
    ig.Entity._debugShowVelocities = !1;
    ig.Entity._debugShowNames = !1;
    ig.Entity.oldCheckPair = ig.Entity.checkPair;
    ig.Entity.checkPair = function(b, c) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c)
    };
    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        }, {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        }, {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        }, {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
    ig.Game.inject({
        loadLevel: function(b) {
            this.parent(b);
            ig.debug.panels.maps.load(this)
        }
    });
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function(b, c) {
            this.parent(b, c);
            this.load()
        },
        load: function(b) {
            this.options = [];
            this.panels = [];
            if (!b || !b.backgroundMaps.length) this.container.innerHTML = "<em>No Maps Loaded</em>";
            else {
                this.maps = b.backgroundMaps;
                this.mapScreens = [];
                this.container.innerHTML = "";
                for (b = 0; b < this.maps.length; b++) {
                    var c = this.maps[b],
                        d = new ig.DebugPanel(b, "Layer " + b),
                        e = new ig.$new("strong");
                    e.textContent = b + ": " + c.tiles.path;
                    d.container.appendChild(e);
                    d.addOption(new ig.DebugOption("Enabled", c, "enabled"));
                    d.addOption(new ig.DebugOption("Pre Rendered", c, "preRender"));
                    d.addOption(new ig.DebugOption("Show Chunks", c, "debugChunks"));
                    this.generateMiniMap(d, c, b);
                    this.addPanel(d)
                }
            }
        },
        generateMiniMap: function(b, c, d) {
            var e = ig.system.scale,
                g = ig.$new("canvas"),
                m = g.getContext("2d"),
                y = c.tiles.width * e,
                r = c.tiles.height * e,
                q = y / c.tilesize,
                u = r / c.tilesize;
            g.width = q;
            g.height = u;
            m.drawImage(c.tiles.data, 0, 0, y, r, 0, 0, q, u);
            m = ig.$new("canvas");
            m.width = c.width * e;
            m.height = c.height * e;
            u = m.getContext("2d");
            ig.game.clearColor && (u.fillStyle = ig.game.clearColor, u.fillRect(0, 0, y, r));
            for (r = y = 0; r < c.width; r++)
                for (var s = 0; s < c.height; s++)(y = c.data[s][r]) && u.drawImage(g, Math.floor((y - 1) * e % q), Math.floor((y - 1) * e / q) * e, e, e, r * e, s * e, e, e);
            g = ig.$new("div");
            g.className = "ig_debug_map_container";
            g.style.width = c.width * e + "px";
            g.style.height = c.height * e + "px";
            q = ig.$new("div");
            q.className = "ig_debug_map_screen";
            q.style.width = ig.system.width / c.tilesize * e - 2 + "px";
            q.style.height = ig.system.height / c.tilesize * e - 2 + "px";
            this.mapScreens[d] = q;
            g.appendChild(m);
            g.appendChild(q);
            b.container.appendChild(g)
        },
        afterRun: function() {
            for (var b = ig.system.scale, c = 0; c < this.maps.length; c++) {
                var d = this.maps[c],
                    e = this.mapScreens[c];
                if (d && e) {
                    var g = d.scroll.x / d.tilesize,
                        m = d.scroll.y / d.tilesize;
                    d.repeat && (g %= d.width, m %= d.height);
                    e.style.left = g * b + "px";
                    e.style.top = m * b + "px"
                }
            }
        }
    });
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
    ig.Game.inject({
        draw: function() {
            ig.graph.beginClock("draw");
            this.parent();
            ig.graph.endClock("draw")
        },
        update: function() {
            ig.graph.beginClock("update");
            this.parent();
            ig.graph.endClock("update")
        },
        checkEntities: function() {
            ig.graph.beginClock("checks");
            this.parent();
            ig.graph.endClock("checks")
        }
    });
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function(b, c) {
            this.parent(b, c);
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
            this.msHeight = this.height / this.ms;
            this.graph = ig.$new("canvas");
            this.graph.width = window.innerWidth;
            this.graph.height = this.height;
            this.container.appendChild(this.graph);
            this.ctx = this.graph.getContext("2d");
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
            this.ctx.fillRect(0, this.mark33ms, this.graph.width,
                1);
            this.addGraphMark("16ms", this.mark16ms);
            this.addGraphMark("33ms", this.mark33ms);
            this.addClock("draw", "Draw", "#13baff");
            this.addClock("update", "Entity Update", "#bb0fff");
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
            this.addClock("lag", "System Lag", "#f26900");
            ig.mark = this.mark.bind(this);
            ig.graph = this
        },
        addGraphMark: function(b, c) {
            var d = ig.$new("span");
            d.className = "ig_debug_graph_mark";
            d.textContent = b;
            d.style.top = c.round() + "px";
            this.container.appendChild(d)
        },
        addClock: function(b, c,
            d) {
            var e = ig.$new("span");
            e.className = "ig_debug_legend_color";
            e.style.backgroundColor = d;
            var g = ig.$new("span");
            g.className = "ig_debug_legend_number";
            g.appendChild(document.createTextNode("0"));
            var m = ig.$new("span");
            m.className = "ig_debug_legend";
            m.appendChild(e);
            m.appendChild(document.createTextNode(c + " ("));
            m.appendChild(g);
            m.appendChild(document.createTextNode("ms)"));
            this.container.appendChild(m);
            this.clocks[b] = {
                description: c,
                color: d,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: g
            }
        },
        beginClock: function(b,
            c) {
            this.clocks[b].start = Date.now() + (c || 0)
        },
        endClock: function(b) {
            b = this.clocks[b];
            b.current = Math.round(Date.now() - b.start);
            b.avg = 0.8 * b.avg + 0.2 * b.current
        },
        mark: function(b, c) {
            this.active && this.marks.push({
                msg: b,
                color: c || "#fff"
            })
        },
        beforeRun: function() {
            this.endClock("lag");
            this.timeBeforeRun = Date.now()
        },
        afterRun: function() {
            var b = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1E3 / ig.system.fps - b, 0));
            var b = this.graph.width - 1,
                c = this.height;
            this.ctx.drawImage(this.graph, -1, 0);
            this.ctx.fillStyle =
                "#000";
            this.ctx.fillRect(b, 0, 1, this.height);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark16ms, 1, 1);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark33ms, 1, 1);
            for (var d in this.clocks) {
                var e = this.clocks[d];
                e.html.textContent = e.avg.toFixed(2);
                if (e.color && 0 < e.current) {
                    this.ctx.fillStyle = e.color;
                    var g = e.current * this.msHeight,
                        c = c - g;
                    this.ctx.fillRect(b, c, 1, g);
                    e.current = 0
                }
            }
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.globalAlpha = 0.5;
            for (d = 0; d < this.marks.length; d++) c = this.marks[d],
                this.ctx.fillStyle = c.color, this.ctx.fillRect(b, 0, 1, this.height), c.msg && (this.ctx.fillText(c.msg, b - 1, this.textY), this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1;
            this.marks = []
        }
    });
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        barIm: new ig.Image("media/graphics/sprites/line.png"),
        baseIm: new ig.Image("media/graphics/sprites/base.png"),
        logoIm: new ig.Image("media/graphics/sprites/loaderLogo.png"),
        bg: new ig.Image("media/graphics/sprites/bg.png"),
        starIm: new ig.Image("media/graphics/sprites/progStar.png"),
        init: function(b, c) {
            this.parent(b, c);
            ig.ua.mobile
            // && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
            var d = ig.system.context;
            this.texter = {};
            this.texter.text = d.font;
            this.texter.fill = d.fillStyle;
            this.texter.shadowBlur = d.shadowBlur;
            this.texter.shadowColor = d.shadowColor;
            this.texter.shadowSpread = d.shadowSpread;
            this.star = {
                which: 0,
                scX: 1,
                x: ig.system.width / 2,
                y: 150
            };
            this.bar = {
                scX: 1,
                scY: 1,
                x: ig.system.width / 2 - 165,
                y: ig.system.height / 2 + 20
            };
            this.logo = {
                scX: 1,
                x: ig.system.width / 2,
                y: ig.system.height / 2 - 30
            }
        },
        drawer: function(b, c, d, e, g, m, y, r, q, u, s, l, n) {
            b = 2 == b ? ig.system.bgcontext : ig.system.context;
            null == y && (y = 1);
            null ==
                r && (r = 1);
            null == u && (u = 1);
            e *= c.width / d;
            var p = c.width / d,
                A = c.height;
            d = c.width / d * y;
            var D = c.height * r;
            null == s ? 0 < p && 0 < A && (b.globalAlpha = u, b.drawImage(c.data, e, 0, p, A, q ? g - d / 2 : g, q ? m - D / 2 : m, d, D), b.globalAlpha = 1) : (l = q ? -d / 2 : l || 0, n = q ? -D / 2 : n || 0, 0 < p && 0 < A && (b.translate(g, m), b.rotate(2 * Math.PI / 360 * s), b.scale(y, r), b.globalAlpha = u, b.drawImage(c.data, e, 0, p, A, l, n, d, D), b.globalAlpha = 1, b.setTransform(1, 0, 0, 1, 0, 0)))
        },
        textSet: function(b, c, d) {
            b = 2 == b ? ig.system.bgcontext : ig.system.context;
            b.font = c + "px tex";
            b.fillStyle = d
        },
        textDraw: function(b,
            c, d, e) {
            b = 2 == b ? ig.system.bgcontext : ig.system.context;
            var g = b.measureText("M").width;
            b.fillText(c, d - b.measureText(c).width / 2, e + g / 2);
            b.font = this.texter.text;
            b.fillStyle = this.texter.fill
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()",
                100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            this.star.which = 5 < Math.floor(6 * (this.status / 1)) ? 5 : Math.floor(6 * (this.status / 1));
            this.tex = Math.floor(100 * (this.status / 1)) + "%";
            this.drawer(1, this.bg, 1, 0, 0, 0);
            this.drawer(1, this.logoIm, 1, 0, this.logo.x, this.logo.y, this.logo.scX, this.logo.scX, !0);
            this.drawer(1, this.starIm, 6, this.star.which, this.star.x, this.star.y, this.scX, this.scX, !0);
            this.drawer(1, this.baseIm, 1, 0, this.bar.x, this.bar.y, this.bar.scX, this.bar.scX);
            this.drawer(1, this.barIm, 1, 0, this.bar.x, this.bar.y, this._drawStatus, this.bar.scY);
            this.textSet(1, 35, "#ff8503");
            this.textDraw(1, this.tex, this.star.x, 290)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var g = {},
            m = {},
            y = {},
            r = 0,
            q = !1,
            u = !1,
            s = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            s = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            r = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            u = !0;
            q = new ig.Timer;
            for (var d in c) this.initEnd(d, c, m);
            for (d in m) this.initStart(d, m, b, g), this.initDelta(d, y, b, m)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + e[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!u) return !1;
            if (this.delay) {
                if (q.delta() < this.delay) return;
                this.delay = 0;
                q.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (q.delta() + r) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in y) this.propUpdate(property, b, g, y, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    s && s.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    r = 0;
                    q.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, m);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(m, d);
                    for (property in m) this.initDelta(property, y, b, m);
                    r = 0;
                    q.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            r += q.delta()
        };
        this.resume = function() {
            this.paused = !1;
            q.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, r += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(b) {
            var c, d = 0.1,
                e = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            e || (e = 0.3);
            !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/audio/bgm1.mp3", "media/audio/bgm1.ogg"],
                autoplay: !1,
                spritemap: {
                    music: {
                        start: 0,
                        end: 9.79,
                        loop: !0
                    }
                }
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" ===
                typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
                1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
                this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            null != this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function(b, c, d) {
            var e = this.size.x,
                g = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            null ==
                d && (this.pos.x += (e - this.size.x) / 2, this.pos.y += (g - this.size.y) / 2)
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 200),
        splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200,
                this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 240, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        drawer: function(b, c, d, e, g, m, y, r, q, u, s, l, n) {
            b = 2 == b ? ig.system.bgcontext : ig.system.context;
            null == y && (y = 1);
            null == r && (r = 1);
            null == u && (u = 1);
            e *= c.width / d;
            var p = c.width / d,
                A = c.height;
            d = c.width / d * y;
            var D = c.height * r;
            g = q ? g - d / 2 : g;
            m = q ? m - D / 2 : m;
            l = q ? -d / 2 : l || 0;
            n = q ? -D / 2 : n || 0;
            null == s ? 0 < p && 0 < A && (b.globalAlpha = u, b.drawImage(c.data, e, 0, p, A, g, m, d, D), b.globalAlpha = 1) : 0 < p && 0 < A && (b.translate(g, m), b.rotate(2 * Math.PI / 360 * s), b.scale(y, r), b.globalAlpha = u, b.drawImage(c.data, e, 0, p, A, l, n, d, D), b.globalAlpha = 1, b.setTransform(1, 0, 0, 1,
                0, 0))
        },
        drawerOld: function(b, c, d, e, g, m, y, r, q, u, s) {
            var l = ig.system.context;
            u = u || 0;
            s = s || 0;
            null == m && (m = 1);
            null == y && (y = 1);
            null == r && (r = 1);
            if (null != q) {
                d *= b.width / c;
                var n = b.width / c,
                    p = b.height;
                c = b.width / c * m;
                var A = b.height * y;
                l.save();
                l.translate(e, g);
                null != q && l.rotate(2 * Math.PI / 360 * q);
                l.scale(m, y);
                l.globalAlpha = r;
                0 < n && 0 < p && (0 < c && 0 < A) && l.drawImage(b.data, d, 0, n, p, u, s, c, A);
                l.restore()
            }
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position",
                "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * y);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * y);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(m, y), $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", y + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            e ? $("#" +
                g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent()
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
                2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    y = window.innerWidth /
                    mobileWidth;
                $("#" + g.id).css("left", this.pos.x * y);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * y);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = w / 2 - destW / 2, y = h / 2 - destH / 2, console.log(m, y), $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", y + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/sprites/btn_more_games.png", 64, 66),
        size: {
            x: 64,
            y: 66
        },
        zIndex: 750,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (d.div_layer_name ? (console.log("settings found ... using that div layer name"), b = d.div_layer_name) : b = "more-games", console.log("div_layer_name:", b), this.checkClickableLayer(b,
                _SETTINGS.MoreGames.Link, _SETTINGS.MoreGames.NewWindow)) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return console.log("clickable layer already exists ..."), !0;
            console.log("doesnt exist yet ...");
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) :
                this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * y);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * y);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = document.getElementById("game").offsetLeft,
                y = document.getElementById("game").offsetTop, $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", y + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width =
                this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && (b.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof b.clicking &&
                b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1)
        },
        update: function() {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x - this.size.x / 2, this.pos.y = ig.input.mouse.y - this.size.y / 2;
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex,
                b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var m = w / 2 - destW / 2,
                y = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", y + this.pos.y * multiplier));
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain").requires("impact.entity").defines(function() {
    EntityPlain = ig.Entity.extend({
        redraw: !1,
        stay: !1,
        clearColor: null,
        tweening: !1,
        which: 0,
        sc: 1,
        oriSc: 1,
        scX: 1,
        scY: 1,
        alp: 1,
        rot: 0,
        hold: {},
        stay: [],
        size: {
            x: 50,
            y: 50
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.ctx = ig.system.context, this.bgCtx = ig.system.bgcontext)
        },
        update: function() {
            this.parent()
        },
        tweener: function(b, c, d, e) {
            var g = {};
            g[b] = c;
            this.tween(g, d, {
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        sizer: function(b, c, d, e, g, m) {
            this.size.x = b.width / c * this.scX + (g || 0);
            this.size.y = b.height / 1 * this.scX + (m || 0);
            this.pos.x = d - this.size.x / 2;
            this.pos.y = e - this.size.y / 2;
            this.hold.x = d - this.size.x / 2;
            this.hold.y = e - this.size.y / 2
        },
        pauseT: function() {
            this.pauseTweens()
        },
        unpauseT: function() {
            this.resumeTweens()
        },
        unpause: function() {
            for (var b = 0; b < this.main.timers.length; b++) this.main.timers[b].unpause();
            this.unpauseT()
        },
        pause: function() {
            for (var b = 0; b < this.main.timers.length; b++) this.main.timers[b].pause();
            this.pauseT()
        },
        ready: function() {
            this.parent();
            this.main = ig.game.getEntitiesByType(EntityPlainGame)[0];
            this.item = ig.game.getEntitiesByType(EntityPlainTile);
            this.small = ig.game.getEntitiesByType(EntityPlainBallSmall);
            this.big = ig.game.getEntitiesByType(EntityPlainBall)[0];
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.but = ig.game.getEntitiesByType(EntityPlainButton)[0];
            this.win = ig.game.getEntitiesByType(EntityPlainBingo)[0];
            this.power = ig.game.getEntitiesByType(EntityPlainPower)[0];
            this.over = ig.game.getEntitiesByType(EntityPlainOver)[0];
            this.gameBut = ig.game.getEntitiesByType(EntityPlainGameBut);
            this.homeBut = ig.game.getEntitiesByType(EntityPlainHomeBut)
        },
        tinyTween: function(b, c, d) {
            if (b > c) return b -= d, b < c && (b = c), b;
            if (b < c) return b += d, b > c && (b = c), b;
            if (b == c) return b
        },
        clearBg: function() {
            ig.system.bgcontext.clearRect(0, 0, ig.system.realWidth, ig.system.realHeight);
            ig.game.redrawEntities()
        },
        drawer: function(b, c, d, e, g, m, y, r, q, u, s, l, n) {
            b = 2 == b ? ig.system.bgcontext : ig.system.context;
            null == y && (y = 1);
            null == r && (r = 1);
            null == u && (u = 1);
            e *= c.width / d;
            var p = c.width /
                d,
                A = c.height;
            d = c.width / d * y;
            var D = c.height * r;
            null == s ? 0 < p && 0 < A && (b.globalAlpha = u, b.drawImage(c.data, e, 0, p, A, q ? g - d / 2 : g, q ? m - D / 2 : m, d, D), b.globalAlpha = 1) : (l = q ? -d / 2 : l || 0, n = q ? -D / 2 : n || 0, 0 < p && 0 < A && (b.translate(g, m), b.rotate(2 * Math.PI / 360 * s), b.scale(y, r), b.globalAlpha = u, b.drawImage(c.data, e, 0, p, A, l, n, d, D), b.globalAlpha = 1, b.setTransform(1, 0, 0, 1, 0, 0)))
        },
        drawerOld: function(b, c, d, e, g, m, y, r, q, u, s) {
            var l = ig.system.context;
            u = u || 0;
            s = s || 0;
            null == m && (m = 1);
            null == y && (y = 1);
            null == r && (r = 1);
            if (null != q) {
                d *= b.width / c;
                var n = b.width /
                    c,
                    p = b.height;
                c = b.width / c * m;
                var A = b.height * y;
                l.save();
                l.translate(e, g);
                null != q && l.rotate(2 * Math.PI / 360 * q);
                l.scale(m, y);
                l.globalAlpha = r;
                0 < n && 0 < p && (0 < c && 0 < A) && l.drawImage(b.data, d, 0, n, p, u, s, c, A);
                l.restore()
            }
        },
        textSet: function(b, c, d) {
            b = 2 == b ? ig.system.bgcontext : ig.system.context;
            b.font = c + "px tex";
            b.fillStyle = d
        },
        textSet2: function(b, c, d) {
            b = 2 == b ? ig.system.bgcontext : ig.system.context;
            b.font = c + "px tex";
            b.fillStyle = d;
            b.shadowBlur = 10;
            b.shadowColor = d
        },
        textDraw: function(b, c, d, e) {
            b = 2 == b ? ig.system.bgcontext : ig.system.context;
            var g = b.measureText("M").width;
            b.fillText(c, d - b.measureText(c).width / 2, e + g / 2);
            b.font = ig.game.texter.text;
            b.fillStyle = ig.game.texter.fill;
            b.shadowBlur = ig.game.texter.shadowBlur;
            b.shadowColor = ig.game.texter.shadowColor
        },
        shuffleArray: function(b) {
            for (var c = b.length, d, e; 0 < c;) e = Math.floor(Math.random() * c), c--, d = b[c], b[c] = b[e], b[e] = d;
            return b
        },
        getScore: function(b) {
            if (!this.checkNull(ig.game.storage) && this.supports_local_storage()) switch (b) {
                case "ques":
                    if (ig.game.storage.isSet(ig.game.quesKey) && void 0 != ig.game.storage.get(ig.game.quesKey)) ig.game.question.Celeb =
                        ig.game.storage.get(ig.game.quesKey);
                    else return !1
            } else return !1
        },
        setScore: function(b) {
            if (!this.checkNull(ig.game.storage) && this.supports_local_storage()) switch (b) {
                case "coin":
                    ig.game.storage.set(ig.game.coinKey, ig.game.coin)
            }
        },
        supports_local_storage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return !1
            }
        },
        clicked: function() {
            this.click = !0;
            this.release = !1
        },
        released: function() {
            this.click = !1;
            this.release = !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-tile").requires("game.entities.plain").defines(function() {
    EntityPlainTile = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        tile: {
            which: 0,
            circleScX: 0,
            x: 194,
            y: 119,
            leadX: 0,
            leadY: 0,
            star1scX: 0,
            scX: 1,
            scY: 1,
            rot: 0,
            holdX: 0,
            holdY: 0,
            col: "#261703",
            textSize: 35,
            textBig: 35,
            textSmall: 25,
            textY: -2
        },
        star0: {
            scX: 0,
            x: 0,
            y: 0,
            scX: 0,
            alp: 0
        },
        star1: {
            scX: 0,
            x: 0,
            y: 0,
            scX: 0,
            alp: 0
        },
        star2: {
            scX: 0,
            x: 0,
            y: 0,
            scX: 0,
            alp: 0
        },
        star3: {
            scX: 0,
            x: 0,
            y: 0,
            scX: 0,
            alp: 0
        },
        star4: {
            scX: 0,
            x: 0,
            y: 0,
            scX: 0,
            alp: 0
        },
        lastTile: !1,
        starTargX: [30, -10, -42, 25, 13],
        starTargY: [30, -45, 10, -12, 19],
        startTargScX: [0.3, 0.2, 0.55, 0.36, 0.22],
        zIndex: 100,
        lock: !1,
        bingoTimer: new ig.Timer,
        bingoTime: 0.55,
        hold: {
            x: 0,
            y: 0
        },
        bingo: !1,
        bingoDraw: !1,
        bingoStart: !1,
        name: "plain-but",
        drawLock: !1,
        scene: 0,
        num: 0,
        selected: !1,
        seq: 0,
        oriSc: 0,
        tileB: new ig.Image("media/graphics/sprites/tile.png"),
        cirl: new ig.Image("media/graphics/sprites/tile-s.png"),
        star1Im: new ig.Image("media/graphics/sprites/bingo-star.png"),
        starIm: new ig.Image("media/graphics/sprites/star.png"),
        ready: function() {
            this.parent();
            this.main.timers.push(this.bingoTimer);
            this.num = this.main.boards[this.main.player0.which][this.hold.x][this.hold.y];
            2 == this.hold.x && 2 == this.hold.y && this.locker()
        },
        init: function(b, c, d) {
            ig.global.wm || (this.seq = d.seq, this.tile.im = this.tileB, this.tile.im2 = this.cirl, this.hold.x = d.holdX, this.hold.y = d.holdY, this.tile.x += (this.tile.im.width - 1) * this.hold.x, this.tile.y += (this.tile.im.height - 1) * this.hold.y, b = this.tile.x - this.tile.im.width / 2, c = this.tile.y - this.tile.im.height / 2,
                this.parent(b, c, d), this.size.x = this.tile.im.width - 1, this.size.y = this.tile.im.height - 1)
        },
        runStar: function() {
            this.drawLock = !0;
            this.tile.star1scX = 0;
            ig.game.redraw = !0;
            this.tweener("tile", {
                star1scX: 1.2
            }, 0.5, "locker1");
            for (var b = 0; 5 > b; b++) this["star" + b] = {
                scX: 0,
                x: 0,
                y: 0,
                scX: 0,
                alp: 0
            }, this.tweener("star" + b, {
                x: this.starTargX[b] + 3,
                scX: this.startTargScX[b] + 0.1,
                y: this.starTargY[b] + 3,
                alp: 1
            }, 0.3, "pow1")
        },
        locker: function() {
            this.selected = this.lock = !0;
            this.tile.circleScX = 1;
            this.tile.textSmall = 0;
            this.main.player0.selected[this.hold.x][this.hold.y] = !0;
            this.main.player0.taken[this.hold.x][this.hold.y] = !0;
            ig.game.redraw = !0
        },
        bingoAni: function() {
            this.lock = !1;
            this.bingoTimer.reset();
            this.bingoDraw = this.bingoStart = this.bingo = !0;
            this.locker()
        },
        clicking: function() {},
        released: function() {},
        tweener: function(b, c, d, e) {
            var g = {};
            g[b] = c;
            this.tween(g, d, {
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        update: function() {
            this.parent();
            if (!ig.global.wm) {
                if (!0 == this.bingoStart && this.bingoTimer.delta() >
                    this.bingoTime) {
                    this.bingoStart = !1;
                    this.tile.star1scX = 0;
                    this.tweener("tile", {
                        star1scX: 0.9
                    }, 0.2, "star1");
                    for (var b = 0; 5 > b; b++) this["star" + b] = {
                        scX: 0,
                        x: 0,
                        y: 0,
                        scX: 0,
                        alp: 0
                    }, this.tweener("star" + b, {
                        x: this.starTargX[b] + 3,
                        scX: this.startTargScX[b] + 0.1,
                        y: this.starTargY[b] + 3,
                        alp: 1
                    }, 0.3, "star2")
                }
                this.tile.rot += 8
            }
        },
        tweener2: function(b, c, d) {
            this.tween({
                tile: {
                    circleScX: b
                }
            }, c, {
                onComplete: function() {
                    null != d && this.tweenF(d)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        delayer: function(b, c) {
            this.tween({},
                b, {
                    onComplete: function() {
                        null != c && this.tweenF(c)
                    }.bind(this),
                    easing: ig.Tween.Easing.Quadratic.EaseOut
                }).start()
        },
        clicked: function() {
            !0 != this.win.play && !0 != this.main.gamePaused && (!this.lock && !this.main.tweening && !this.tweening) && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.tile), this.selected ? (this.tweening = !0, this.tweener2(1, 0.1, 3)) : (this.tweening = !0, this.tweener2(1.2, 0.1, 0)), this.selected = !this.selected, this.main.player0.selected[this.hold.x][this.hold.y] = !this.main.player0.selected[this.hold.x][this.hold.y],
                ig.game.redraw = !0, this.main.checker(0))
        },
        tweenF: function(b) {
            switch (b) {
                case "locker1":
                    this.tweener("tile", {
                        star1scX: 1
                    }, 0.1, "locker2");
                    break;
                case "locker2":
                    ig.game.redraw = !0;
                    break;
                case "locker3":
                    this.tweening = !1;
                    break;
                case -2:
                    this.tweener2(1, 0.1, -1);
                    break;
                case -1:
                    this.tweener2(0.94, 0.1, 1);
                    break;
                case 0:
                    this.tweener2(0.94, 0.1, 1);
                    break;
                case 1:
                    ig.game.redraw = !0;
                    this.delayer(0.1, 2);
                    break;
                case 2:
                    this.tweening = !1;
                    break;
                case 3:
                    this.tweener2(0.94, 0.1, 4);
                    break;
                case 4:
                    this.tweener2(1.2, 0.1, 5);
                    break;
                case 5:
                    this.tweener2(0,
                        0.1, 1);
                    break;
                case "star1":
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.correct);
                    this.tweener("tile", {
                        star1scX: 0.6
                    }, 0.2, "star3");
                    break;
                case "star2":
                    for (b = 0; 5 > b; b++) this.tweener("star" + b, {
                        x: this.starTargX[b],
                        scX: this.startTargScX[b],
                        y: this.starTargY[b]
                    }, 0.1);
                    this.bingoDraw = !1;
                    ig.game.redraw = !0;
                    break;
                case "pow1":
                    for (b = 0; 5 > b; b++) this.tweener("star" + b, {
                        x: this.starTargX[b],
                        scX: this.startTargScX[b],
                        y: this.starTargY[b]
                    }, 0.1);
                    this.stopTweens();
                    this.drawLock = !1;
                    break;
                case "star3":
                    ig.game.redraw = !0, !1 ==
                        this.win.play && !0 == this.lastTile && (this.win.correct = !0, this.win.startAni())
            }
        },
        idle: function() {
            this.sc = this.oriSc
        },
        redrawAll: function() {
            this.drawer(2, this.tile.im, 1, 0, this.tile.x, this.tile.y + this.main.lead.yTop, this.tile.scX, this.tile.scY, !0);
            !0 == this.selected ? (this.drawer(2, this.tile.im2, 5, this.hold.x, this.tile.x, this.tile.y + this.main.lead.yTop, this.tile.scX * this.tile.circleScX, this.tile.scX * this.tile.circleScX, !0), this.tile.textY = -1, this.tile.textSize = this.tile.textSmall * this.tile.scX * this.tile.circleScX) :
                (this.tile.textY = -2, this.tile.textSize = this.tile.textBig);
            this.textSet(2, this.tile.textSize * this.tile.scX, this.tile.col);
            this.textDraw(2, this.num, this.tile.x, this.tile.y + this.tile.textY + this.main.lead.yTop);
            !1 == this.bingoDraw && !0 == this.bingo && this.drawer(2, this.star1Im, 1, 0, this.tile.x, this.tile.y - 2 + this.main.lead.yTop, this.tile.circleScX * this.tile.star1scX * this.tile.scX, this.tile.circleScX * this.tile.star1scX * this.tile.scX, !0)
        },
        draw: function() {
            this.parent();
            this.tweening && (this.drawer(1, this.tile.im2,
                5, this.hold.x, this.tile.x, this.tile.y + this.main.lead.yTop, this.tile.circleScX * this.tile.scX, this.tile.circleScX * this.tile.scX, !0), this.textSet(1, this.tile.textSmall * this.tile.scX * this.tile.circleScX, this.tile.col), this.textDraw(1, this.num, this.tile.x, this.tile.y + this.tile.textY + this.main.lead.yTop));
            if (!0 == this.bingoDraw) {
                this.drawer(1, this.star1Im, 1, 0, this.tile.x, this.tile.y - 2 + this.main.lead.yTop, this.tile.circleScX * this.tile.star1scX * this.tile.scX, this.tile.circleScX * this.tile.star1scX * this.tile.scX, !0, 1, this.tile.rot);
                for (var b = 0; 5 > b; b++) this.drawer(1, this.starIm, 1, 0, this.tile.x + this["star" + b].x, this.tile.y + this["star" + b].y + this.main.lead.yTop, this.tile.circleScX * this["star" + b].scX * this.tile.scX, this.tile.circleScX * this["star" + b].scX * this.tile.scX, !0, this["star" + b].alp, this.tile.rot)
            }
            if (!0 == this.drawLock)
                for (b = 0; 5 > b; b++) this.drawer(1, this.starIm, 1, 0, this.tile.x + this["star" + b].x, this.tile.y + this["star" + b].y + this.main.lead.yTop, this.tile.circleScX * this["star" + b].scX * this.tile.scX, this.tile.circleScX *
                    this["star" + b].scX * this.tile.scX, !0, this["star" + b].alp, this.tile.rot)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-ball").requires("game.entities.plain").defines(function() {
    EntityPlainBall = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        lead: {
            x: 0,
            y: 0
        },
        zIndex: 200,
        name: "plain-ball",
        scene: 0,
        num: 0,
        selected: !1,
        seq: 0,
        oriSc: 0,
        moveSide: !1,
        staySide: !1,
        drawBig: !0,
        moveSmall: !1,
        ballIm: new ig.Image("media/graphics/sprites/bigball.png"),
        rayIm: new ig.Image("media/graphics/sprites/ray.png"),
        starIm: new ig.Image("media/graphics/sprites/star.png"),
        cirl: new ig.Image("media/graphics/sprites/smallBall.png"),
        text: ["B", "I", "N", "G", "O"],
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.seq = d.seq, this.num = d.num, this.ball = {
                im: this.ballIm,
                im2: this.rayIm,
                tx1: 0,
                which: 0,
                x: ig.system.width / 2,
                y: ig.system.height / 2,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scX2: 1,
                scY: 1,
                rot: 0,
                rot2: 0,
                holdX: 0,
                holdY: 0,
                col: "#261703",
                textSize: 115,
                textSize2: 55,
                textY: 12,
                textY2: -69,
                alp: 1,
                alp2: 0,
                textScX: 0
            }, this.ball2 = {
                alp: 1,
                alp2: 1,
                col: "#261703",
                holdX: 0,
                holdY: 0,
                im: this.ballIm,
                im2: this.rayIm,
                leadX: 0,
                leadY: 0,
                rot: 7696,
                rot2: 0,
                scX: 0.4,
                scX2: 0.8,
                scY: 1,
                textAlp: 1,
                textScX: 0,
                textScX1: 1,
                textScX2: 1,
                textSize: 115,
                textSize2: 55,
                textY: 12,
                textY2: -69,
                tx1: 29,
                tx2: "I",
                which: 0,
                x: 75,
                y: 60
            }, this.star1 = {
                im: this.starIm,
                which: 0,
                x: 0,
                y: 0,
                rad: 0,
                leadX: 0,
                leadY: 0,
                scX: 0,
                fixScX: 1,
                fixScY: 1,
                rot: 0,
                holdX: 0,
                holdY: 0,
                alp: 1
            }, this.star2 = {
                im: this.starIm,
                which: 0,
                x: 0,
                y: 0,
                rad: 0,
                leadX: 0,
                leadY: 0,
                scX: 0,
                fixScX: 1,
                fixScY: 1,
                rot: 0,
                holdX: 0,
                holdY: 0,
                alp: 1
            }, this.star3 = {
                im: this.starIm,
                which: 0,
                x: 0,
                y: 0,
                rad: 0,
                leadX: 0,
                leadY: 0,
                scX: 0,
                fixScX: 1,
                fixScY: 1,
                rot: 0,
                holdX: 0,
                holdY: 0,
                alp: 1
            }, this.star4 = {
                im: this.starIm,
                which: 0,
                x: 0,
                y: 0,
                rad: 0,
                leadX: 0,
                leadY: 0,
                scX: 0,
                fixScX: 1,
                fixScY: 1,
                rot: 0,
                holdX: 0,
                holdY: 0,
                alp: 1
            }, this.star5 = {
                im: this.starIm,
                which: 0,
                x: 0,
                y: 0,
                rad: 0,
                leadX: 0,
                leadY: 0,
                scX: 0,
                fixScX: 1,
                fixScY: 1,
                rot: 0,
                holdX: 0,
                holdY: 0,
                alp: 1
            })
        },
        reGen: function(b) {
            this.stopTweens();
            for (var c = 0; 8 > c; c++)
                for (var d = 0; 5 > d; d++)
                    for (var e = 0; 5 > e; e++) this.main.boards[this.main["player" + c].which][d][e] == b && (this.main["player" + c].taken[d][e] = !0, 0 != c && (this.main["player" + c].selected[d][e] = !0));
            for (c = 0; 8 > c; c++) this.main.checker(c);
            this.main.taken.push(b);
            this.ball.tx1 = b;
            this.ball.tx2 = 75 == this.ball.tx1 ? this.text[4] : this.text[Math.floor((this.ball.tx1 - 1) / 15)];
            this.which = 75 == this.ball.tx1 ? 4 : Math.floor((this.ball.tx1 - 1) / 15);
            this.main.caller.splice(this.main.caller.indexOf(b), 1); - 1 < this.main.gameNum.indexOf(b) && this.main.gameNum.splice(this.main.gameNum.indexOf(b), 1);
            this.staySide = !1;
            ig.game.redraw = !0;
            this.lead.x = 0;
            this.lead.y = 0;
            this.ball.scX = 0;
            this.ball.textScX1 = 0;
            this.ball.textScX2 = 0;
            this.ball.textAlp = 1;
            this.moveSide = !1;
            this.ball.scX2 = 1;
            this.ball.alp2 =
                1;
            this.moveSmall = this.drawBig = !0;
            this.tweener("ball2", {
                scX: 0.2,
                x: 30,
                y: 132
            }, 0.5, "moveSmall4");
            this.tweener("ball", {
                scX: 1.2
            }, 0.9, 0);
            this.tweener("ball", {}, 0.6, "text1");
            this.tweener("ball", {}, 0.2, "text3");
            for (c = 1; 6 > c; c++) this["star" + c].rad = 0, this["star" + c].alp = 1, this["star" + c].scX = 0, this["star" + c].rad = 0, this.tweener("star" + c, {
                scX: 0
            }, 0.3 + 0.2 * c, "star0");
            this.tweener("ball", {}, 2, "move");
            for (c = 0; c < this.small.length; c++) this.small[c].reGen()
        },
        tweenF: function(b, c) {
            switch (b) {
                case "moveSmall4":
                    this.moveSmall = !1;
                    break;
                case "moveSmall1":
                    this.ball2.scX = Number(String(this.ball.scX));
                    this.ball2.tx1 = this.main.taken[this.main.taken.length - 1];
                    this.ball2.tx2 = 75 == this.ball2.tx1 ? this.text[4] : this.text[Math.floor((this.ball2.tx1 - 1) / 15)];
                    this.ball2.which = 75 == this.ball2.tx1 ? 4 : Math.floor((this.ball2.tx1 - 1) / 15);
                    this.ball2.x = 75;
                    this.ball2.y = 60;
                    this.staySide = !0;
                    ig.game.redraw = !0;
                    this.tweener("ball", {}, 0.1, "moveSmall2");
                    break;
                case "moveSmall2":
                    this.drawBig = !1, this.stopTweens()
            }
            if (!this.moveSide) switch (b) {
                case 0:
                    this.tweener("ball", {
                        scX: 0.95
                    }, 0.4, 1);
                    break;
                case 1:
                    this.tweener("ball", {
                        scX: 1.1
                    }, 0.3, 2);
                    break;
                case 2:
                    this.tweener("ball", {
                        scX: 1
                    }, 0.3, 1);
                    break;
                case "star0":
                    this.tweener(c, {
                        scX: 1.2,
                        rad: 130
                    }, 0.8, "star1");
                    break;
                case "star1":
                    this.tweener(c, {
                        scX: 0.9,
                        rad: 100
                    }, 0.2, "star2");
                    break;
                case "star2":
                    this.tweener(c, {
                        scX: 0.7 + 0.5 * Math.random(),
                        rad: 80 + 50 * Math.random()
                    }, 0.2, "star1");
                    break;
                case "text1":
                    this.tweener("ball", {
                        textScX1: 1.4
                    }, 0.2, "text2");
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.ball);
                    break;
                case "text2":
                    this.tweener("ball", {
                        textScX1: 1
                    }, 0.2);
                    break;
                case "text3":
                    this.tweener("ball", {
                        textScX2: 2.4
                    }, 0.2, "text4");
                    break;
                case "text4":
                    this.tweener("ball", {
                        textScX2: 1
                    }, 0.2);
                    break;
                case "move":
                    this.moveSide = !0;
                    this.power.coinTween();
                    this.tweener("lead", {
                        x: -245,
                        y: -180
                    }, 1);
                    this.tweener("ball", {
                        scX: 0.4,
                        scX2: 0.8,
                        alp2: 0
                    }, 1.5, "moveSmall1");
                    for (var d = 1; 6 > d; d++) this.tweener("star" + d, {
                        scX: 0,
                        alp: 0,
                        rad: 80
                    }, 1.5);
                    for (d = 1; 8 > d; d++) this.main.checker(d);
                    this.main.bingoLeft--
            }
        },
        tweener: function(b, c, d, e) {
            var g = {};
            g[b] = c;
            this.tween(g, d, {
                onComplete: function() {
                    null !=
                        e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        released: function() {},
        update: function() {
            this.parent();
            ig.global.wm || (this.ball.rot += 2, this.star1.rot -= 1, this.star1.ang = 2 * Math.PI / 360 * this.ball.rot, this.star2.ang = 2 * Math.PI / 360 * (this.ball.rot + 72), this.star3.ang = 2 * Math.PI / 360 * (this.ball.rot + 144), this.star4.ang = 2 * Math.PI / 360 * (this.ball.rot + 216), this.star5.ang = 2 * Math.PI / 360 * (this.ball.rot + 288))
        },
        ready: function() {
            this.parent()
        },
        redrawAll: function() {
            !0 == this.staySide && void 0 !=
                this.ball2.tx2 && (this.drawer(2, this.ball2.im, 5, this.ball2.which, this.ball2.x, this.ball2.y, this.ball2.scX, this.ball2.scX, !0, this.ball2.alp), this.textSet(2, this.ball2.textSize * this.ball2.scX * this.ball2.textScX1, "rgba(38, 23, 3," + this.ball2.textAlp + ")"), this.textDraw(2, this.ball2.tx1, this.ball2.x, this.ball2.y + this.ball2.textY * this.ball2.scX), this.textSet(2, this.ball2.textSize2 * this.ball2.scX * this.ball2.textScX2, "rgba(38, 23, 3," + this.ball2.textAlp + ")"), this.textDraw(2, this.ball2.tx2, this.ball2.x, this.ball2.y +
                    this.ball2.textY2 * this.ball2.scX))
        },
        draw: function() {
            this.parent();
            !0 == this.moveSmall && 1 < this.main.taken.length && void 0 != this.ball2.tx2 && (this.drawer(1, this.ball2.im, 5, this.ball2.which, this.ball2.x, this.ball2.y, this.ball2.scX, this.ball2.scX, !0, this.ball2.alp), this.textSet(1, this.ball2.textSize * this.ball2.scX * this.ball2.textScX1, "rgba(38, 23, 3," + this.ball2.textAlp + ")"), this.textDraw(1, this.ball2.tx1, this.ball2.x, this.ball2.y + this.ball2.textY * this.ball2.scX), this.textSet(1, this.ball2.textSize2 * this.ball2.scX *
                this.ball2.textScX2, "rgba(38, 23, 3," + this.ball2.textAlp + ")"), this.textDraw(1, this.ball2.tx2, this.ball2.x, this.ball2.y + this.ball2.textY2 * this.ball2.scX));
            !0 == this.drawBig && void 0 != this.ball.tx2 && (this.drawer(1, this.ball.im2, 1, 0, this.ball.x + this.lead.x, this.ball.y + this.lead.y, this.ball.scX2, this.ball.scX2, !0, this.ball.alp2, this.ball.rot), this.drawer(1, this.ball.im, 5, this.which, this.ball.x + this.lead.x, this.ball.y + this.lead.y, this.ball.scX, this.ball.scX, !0, this.ball.alp), this.textSet(1, this.ball.textSize *
                    this.ball.scX * this.ball.textScX1, "rgba(38, 23, 3," + this.ball.textAlp + ")"), this.textDraw(1, this.ball.tx1, this.ball.x + this.lead.x, this.ball.y + this.lead.y + this.ball.textY * this.ball.scX), this.textSet(1, this.ball.textSize2 * this.ball.scX * this.ball.textScX2, "rgba(38, 23, 3," + this.ball.textAlp + ")"), this.textDraw(1, this.ball.tx2, this.ball.x + this.lead.x, this.ball.y + this.lead.y + this.ball.textY2 * this.ball.scX), this.drawer(1, this.star1.im, 1, 0, this.main.screenS.x / 2 + this.lead.x + Math.cos(this.star1.ang) * this.star1.rad,
                    this.main.screenS.y / 2 + Math.sin(this.star1.ang) * this.star1.rad + this.lead.y, this.star1.scX * this.star1.fixScX, this.star1.scX * this.star1.fixScX, !0, this.star1.alp, this.star1.rot), this.drawer(1, this.star2.im, 1, 0, this.main.screenS.x / 2 + this.lead.x + Math.cos(this.star2.ang) * this.star2.rad, this.main.screenS.y / 2 + Math.sin(this.star2.ang) * this.star2.rad + this.lead.y, this.star2.scX * this.star2.fixScX, this.star2.scX * this.star2.fixScX, !0, this.star2.alp, this.star1.rot), this.drawer(1, this.star3.im, 1, 0, this.main.screenS.x /
                    2 + this.lead.x + Math.cos(this.star3.ang) * this.star3.rad, this.main.screenS.y / 2 + Math.sin(this.star3.ang) * this.star3.rad + this.lead.y, this.star3.scX * this.star3.fixScX, this.star3.scX * this.star3.fixScX, !0, this.star3.alp, this.star1.rot), this.drawer(1, this.star4.im, 1, 0, this.main.screenS.x / 2 + this.lead.x + Math.cos(this.star4.ang) * this.star4.rad, this.main.screenS.y / 2 + Math.sin(this.star4.ang) * this.star4.rad + this.lead.y, this.star4.scX * this.star4.fixScX, this.star4.scX * this.star4.fixScX, !0, this.star4.alp, this.star1.rot),
                this.drawer(1, this.star5.im, 1, 0, this.main.screenS.x / 2 + this.lead.x + Math.cos(this.star5.ang) * this.star5.rad, this.main.screenS.y / 2 + Math.sin(this.star5.ang) * this.star5.rad + this.lead.y, this.star5.scX * this.star5.fixScX, this.star5.scX * this.star5.fixScX, !0, this.star5.alp, this.star1.rot))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-ball-small").requires("game.entities.plain").defines(function() {
    EntityPlainBallSmall = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        lead: {
            x: 0,
            y: 0
        },
        zIndex: 195,
        name: "plain-ball",
        scene: 0,
        num: 0,
        selected: !1,
        seq: 0,
        oriSc: 0,
        moveSide: !1,
        ballIm: new ig.Image("media/graphics/sprites/smallBall.png"),
        text: ["B", "I", "N", "G", "O"],
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.seq = d.seq, this.ball = {
                im: this.ballIm,
                tx1: 0,
                which: 0,
                x: 30,
                y: 132,
                leadX: 0,
                leadY: 0,
                scX: 1,
                fixScX: 0.73,
                rot: 0,
                rot2: 0,
                holdX: 0,
                holdY: 0,
                col: "#261703",
                textSize: 23,
                textSize2: 12,
                textY: 3,
                textY2: -14,
                alp: 1,
                alp2: 1,
                textScX: 1,
                pos0: 30,
                pos1: 75,
                pos2: 120,
                pos3: 150,
                drawFix: !1
            })
        },
        reGen: function() {
            this.ball.tx1 = this.main.taken[this.main.taken.length - this.seq - 2];
            this.ball.tx2 = 75 == this.ball.tx1 ? this.text[4] : this.text[Math.floor((this.ball.tx1 - 1) / 15)];
            this.which = 75 == this.ball.tx1 ? 4 : Math.floor((this.ball.tx1 - 1) / 15);
            this.ball.x = this.ball["pos" + this.main.smallSeq[this.seq]];
            this.ball.alp = 2 == this.main.smallSeq[this.seq] ||
                3 == this.main.smallSeq[this.seq] ? 0 : 1;
            2 == this.main.smallSeq[this.seq] ? this.x = -130 : 3 == this.main.smallSeq[this.seq] ? (this.tweener("ball", {}, 0.5, 0), this.ball.x = this.ball.pos0) : this.tweener("ball", {
                x: this.ball["pos" + (this.main.smallSeq[this.seq] + 1)]
            }, 0.5, 1)
        },
        tweenF: function(b) {
            switch (b) {
                case 0:
                    this.ball.alp = 1;
                    this.drawfix = !0;
                    ig.game.redraw = !0;
                    this.tweener("ball", {}, 0.3, 2);
                    break;
                case 1:
                    this.ball.alp = 1;
                    this.drawfix = !0;
                    ig.game.redraw = !0;
                    this.tweener("ball", {}, 0.3, 2);
                    break;
                case 2:
                    this.tweening = !1
            }
        },
        tweener: function(b,
            c, d, e) {
            var g = {};
            g[b] = c;
            this.tween(g, d, {
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        update: function() {
            this.parent()
        },
        ready: function() {
            this.parent();
            this.ball.x = this.ball["pos" + this.main.smallSeq[this.seq]]
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            void 0 != this.main.taken[this.main.taken.length - this.seq - 2] && (this.drawer(1, this.ball.im, 5, this.which, this.ball.x + this.lead.x, this.ball.y + this.lead.y, this.ball.scX * this.ball.fixScX,
                this.ball.scX * this.ball.fixScX, !0, this.ball.alp), this.textSet(1, this.ball.textSize * this.ball.scX, "rgba(38, 23, 3," + this.ball.alp + ")"), this.textDraw(1, this.ball.tx1, this.ball.x + this.lead.x, this.ball.y + this.lead.y + this.ball.textY * this.ball.scX), this.textSet(1, this.ball.textSize2 * this.ball.scX, "rgba(38, 23, 3," + this.ball.alp + ")"), this.textDraw(1, this.ball.tx2, this.ball.x + this.lead.x, this.ball.y + this.lead.y + this.ball.textY2 * this.ball.scX))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-button").requires("game.entities.plain").defines(function() {
    EntityPlainButton = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        tile: {
            which: 0,
            x: 193,
            y: 120,
            leadX: 0,
            leadY: 0,
            scX: 1,
            scY: 1,
            rot: 0,
            holdX: 0,
            holdY: 0,
            col: "black",
            textSize: 35,
            textY: -2
        },
        zIndex: 100,
        name: "plain-but",
        clickAllow: !1,
        clickTimer: null,
        clickTime: 4,
        scene: 0,
        num: 0,
        selected: !1,
        block: !1,
        seq: 0,
        oriSc: 0,
        bingoIm: new ig.Image("media/graphics/sprites/bingo.png"),
        bingoBut: {
            which: 0,
            x: 0,
            y: 430,
            leadX: 0,
            leadY: 0,
            scX: 0.9,
            scY: 1,
            rot: 0
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.clickTimer = new ig.Timer)
        },
        clicked: function() {
            if (!0 != this.main.gamePaused && !1 != this.main.gameAllow && (!0 != this.win.play && !0 != this.block) && (this.block = !0, !0 != this.win.play)) {
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click);
                this.main.checker(0);
                for (var b = 0, c = 0; 13 > c; c++)
                    for (var d = 0; 5 > d; d++)
                        if (5 == this.main.player0.bingoSlot[c]) {
                            for (var e = 0; e < this.item.length; e++) this.item[e].hold.x == this.main.bingoPoses[c][d][0] &&
                                this.item[e].hold.y == this.main.bingoPoses[c][d][1] && (this.item[e].bingoTime = 0.2 * d, this.item[e].bingoAni(), this.main.gameAllow = !1, 4 == d && (this.item[e].lastTile = !0));
                            b++
                        }!0 != this.win.play && 0 == b && this.win.startAni()
            }
        },
        clicking: function() {
            this.bingoBut.scX = 0.88
        },
        released: function() {},
        update: function() {
            this.parent();
            !ig.global.wm && !(!0 == this.win.play && !0 == this.over.drawOver) && null != this.pointer && this.pointer.hoveringItem == this && (this.bingoBut.scX = 0.98)
        },
        idle: function() {
            this.bingoBut.scX = 0.9
        },
        ready: function() {
            this.parent();
            this.sizer(this.bingoIm, 1, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y)
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            this.drawer(1, this.bingoIm, 1, 0, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.main.lead.yBottom, this.bingoBut.scX, this.bingoBut.scX, !0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-power").requires("game.entities.plain").defines(function() {
    EntityPlainPower = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 200,
        name: "plain-but",
        clickAllow: !1,
        clickTimer: null,
        clickTime: 4,
        scene: 0,
        num: 0,
        scX: 0.36,
        selected: !1,
        block: !1,
        seq: 0,
        oriSc: 0,
        drawLead: !1,
        lead: {
            x: 0,
            y: 0,
            num: 0
        },
        powerStarIm: new ig.Image("media/graphics/sprites/powerStar.png"),
        starIm: new ig.Image("media/graphics/sprites/bingo-star.png"),
        ballIm: new ig.Image("media/graphics/sprites/bigball.png"),
        coin1Im: new ig.Image("media/graphics/sprites/coin1.png"),
        coin2Im: new ig.Image("media/graphics/sprites/coin2.png"),
        auraIm: new ig.Image("media/graphics/sprites/aura.png"),
        star2Im: new ig.Image("media/graphics/sprites/star.png"),
        overIm: new ig.Image("media/graphics/sprites/overlay.png"),
        pow: {
            x: 566,
            y: 62,
            leadX: 0,
            leadY: 0,
            count: 0,
            starWhich: 0,
            scX: 0.36,
            alp: 1,
            percent: 0,
            which: 0,
            drawCoin: !0,
            auraX: 0,
            auraAlp: 1,
            starX1: 0,
            starX2: 0,
            starX3: 0,
            starPosX1: -45,
            starPosX2: -45,
            starPosX3: -45,
            starPosY1: -45,
            starPosY2: -45,
            starPosY3: -45,
            rot: 0
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.coin1 = {
                x: 566,
                y: 100,
                y2: 47,
                leadX: 0,
                leadY: 0,
                scX2: 0.36,
                scX: 0.48,
                percent: 0,
                which: 0,
                drawCoin: !0
            })
        },
        tweener: function(b, c, d, e, g) {
            var m = {};
            m[b] = c;
            null == g && (g = 0);
            this.tween(m, d, {
                delay: g,
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        reGen: function() {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.power);
            this.which = Math.floor(5 * Math.random());
            this.tweener("pow", {
                    auraX: 1
                }, 0.3,
                0);
            this.pow.starPosX1 = -45 + Math.floor(90 * Math.random());
            this.pow.starPosX2 = -45 + Math.floor(90 * Math.random());
            this.pow.starPosX3 = -45 + Math.floor(90 * Math.random());
            this.pow.starPosY1 = -45 + Math.floor(90 * Math.random());
            this.pow.starPosY2 = -45 + Math.floor(90 * Math.random());
            this.pow.starPosY3 = -45 + Math.floor(90 * Math.random());
            this.pow.alp = 1;
            this.tweener("pow", {
                starX1: 0.3
            }, 0.5, "star1", 0.5);
            this.tweener("pow", {
                starX2: 0.2
            }, 0.3, "star2", 1);
            this.tweener("pow", {
                starX3: 0.1
            }, 0.2, "star3", 1.5);
            this.tweener("pow", {
                    alp: 0
                },
                1, "none", 0.5)
        },
        coinTween: function() {
            !1 != this.coin1.drawCoin && this.tweener("coin1", {
                percent: 1 < this.coin1.percent + 0.18 ? 1 : this.coin1.percent + 0.18
            }, 0.2, "coin1")
        },
        clicked: function() {
            if (!0 != this.coin1.drawCoin) {
                this.coin1.drawCoin = !0;
                this.coin1.percent = 0;
                var b = [],
                    c = [];
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click);
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.star);
                for (var d = 0; d < this.item.length; d++) this.item[d].hold.x == this.which && !1 == this.main.player0.selected[this.item[d].hold.x][this.item[d].hold.y] &&
                    !1 == this.main.player0.taken[this.item[d].hold.x][this.item[d].hold.y] && b.push(d), this.item[d].hold.x == this.which && !1 == this.main.player0.taken[this.item[d].hold.x][this.item[d].hold.y] && c.push(d);
                this.shuffleArray(b);
                this.shuffleArray(c);
                0 < b.length ? (this.lead.num = b[0], this.lead.x = this.pow.x, this.lead.y = this.pow.y, this.drawLead = !0, this.tweener("lead", {
                    x: this.item[this.lead.num].tile.x,
                    y: this.item[this.lead.num].tile.y
                }, 0.3, "locks")) : 0 < c.length ? (this.lead.num = c[0], this.lead.x = this.pow.x, this.lead.y =
                    this.pow.y, this.drawLead = !0, this.tweener("lead", {
                        x: this.item[this.lead.num].tile.x,
                        y: this.item[this.lead.num].tile.y
                    }, 0.3, "locks")) : this.but.clicked()
            }
        },
        lockTile: function() {
            this.item[this.lead.num].locker();
            this.item[this.lead.num].runStar()
        },
        clicking: function() {
            this.pow.scX = 0.34
        },
        released: function() {},
        tweenF: function(b) {
            switch (b) {
                case "coin1":
                    1 <= this.coin1.percent && (this.coin1.drawCoin = !1, this.reGen());
                    break;
                case 0:
                    this.tweener("pow", {
                        auraAlp: 0
                    }, 0.4, 1);
                    break;
                case "star1":
                    this.pow.starX1 = 0;
                    this.pow.starPosX1 = -45 + Math.floor(90 * Math.random());
                    this.pow.starPosY1 = -45 + Math.floor(90 * Math.random());
                    this.tweener("pow", {
                        starX1: 0.15
                    }, 1, "star1");
                    break;
                case "star2":
                    this.pow.starX2 = 0;
                    this.pow.starPosX2 = -45 + Math.floor(90 * Math.random());
                    this.pow.starPosY2 = -45 + Math.floor(90 * Math.random());
                    this.tweener("pow", {
                        starX2: 0.1
                    }, 0.4, "star2");
                    break;
                case "star3":
                    this.pow.starX3 = 0;
                    this.pow.starPosX3 = -45 + Math.floor(90 * Math.random());
                    this.pow.starPosY3 = -45 + Math.floor(90 * Math.random());
                    this.tweener("pow", {
                        starX3: 0.05
                    }, 0.3, "star3");
                    break;
                case "locks":
                    this.drawLead = !1;
                    this.lockTile();
                    this.stopTweens();
                    break;
                case 1:
                    this.pow.auraX = 0, this.pow.auraAlp = 1, this.tweener("pow", {
                        auraX: 0.8
                    }, 0.3, 0)
            }
        },
        update: function() {
            this.parent();
            ig.global.wm || (!0 == this.drawLead && (1 < this.pow.count ? (this.pow.count = 0, this.pow.starWhich = (this.pow.starWhich + 1) % 3) : this.pow.count++), this.pow.rot++, null != this.pointer && this.pointer.hoveringItem == this && (this.pow.scX = 0.39))
        },
        idle: function() {
            this.pow.scX = 0.36
        },
        ready: function() {
            this.parent();
            this.sizer(this.ballIm,
                5, this.pow.x, this.pow.y)
        },
        redrawAll: function() {
            !0 == this.coin1.drawCoin && this.bgCtx.drawImage(this.coin2Im.data, 0, 0, this.coin2Im.width, this.coin1Im.height, this.main.lead.xRight + this.coin1.x - this.coin1Im.width / 2 * this.coin1.scX, this.coin1.y - this.coin1Im.height * this.coin1.scX, this.coin1Im.width * this.coin1.scX, this.coin1Im.height * this.coin1.scX)
        },
        draw: function() {
            this.parent();
            !0 == this.coin1.drawCoin ? 0 < this.coin1Im.height * (1 - this.coin1.percent) && 0 < this.coin1Im.height * this.coin1.percent && this.ctx.drawImage(this.coin1Im.data,
                0, this.coin1Im.height * (1 - this.coin1.percent), this.coin1Im.width, this.coin1Im.height * this.coin1.percent, this.main.lead.xRight + this.coin1.x - this.coin1Im.width / 2 * this.coin1.scX, this.coin1.y - this.coin1Im.height * this.coin1.scX * this.coin1.percent, this.coin1Im.width * this.coin1.scX, this.coin1Im.height * this.coin1.percent * this.coin1.scX) : (this.drawer(1, this.auraIm, 1, 0, this.main.lead.xRight + this.pow.x, this.pow.y, this.pow.auraX, this.pow.auraX, !0, this.pow.auraAlp), this.drawer(1, this.ballIm, 5, this.which, this.main.lead.xRight +
                this.pow.x, this.pow.y, this.pow.scX, this.pow.scX, !0), this.drawer(1, this.starIm, 1, 0, this.main.lead.xRight + this.pow.x, this.pow.y - 2, 0.9 * (this.pow.scX / 0.36), 0.9 * (this.pow.scX / 0.36), !0), this.drawer(1, this.star2Im, 1, 0, this.main.lead.xRight + this.pow.x + this.pow.starPosX1, this.pow.y + this.pow.starPosY1, this.pow.starX1, this.pow.starX1, !0), this.drawer(1, this.star2Im, 1, 0, this.main.lead.xRight + this.pow.x + this.pow.starPosX2, this.pow.y + this.pow.starPosY2, this.pow.starX2, this.pow.starX2, !0), this.drawer(1, this.star2Im,
                1, 0, this.main.lead.xRight + this.pow.x + this.pow.starPosX3, this.pow.y + this.pow.starPosY3, this.pow.starX3, this.pow.starX3, !0), this.drawer(1, this.overIm, 1, 0, this.main.lead.xRight + this.pow.x, this.pow.y, this.pow.scX, this.pow.scX, !0, this.pow.alp));
            !0 == this.drawLead && this.drawer(1, this.powerStarIm, 3, this.pow.starWhich, this.lead.x, this.lead.y, 0.9, 0.9, !0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-over").requires("game.entities.plain").defines(function() {
    EntityPlainOver = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 500,
        name: "plain-but",
        clickAllow: !1,
        clickTimer: null,
        clickTime: 4,
        scene: 0,
        num: 0,
        win: !1,
        drawOver: !1,
        selected: !1,
        block: !1,
        seq: 0,
        placement: 0,
        oriSc: 0,
        rayIm: new ig.Image("media/graphics/sprites/ray.png"),
        popIm: new ig.Image("media/graphics/sprites/popup.png"),
        bingoIm: new ig.Image("media/graphics/sprites/ok.png"),
        bingoBut: {
            which: 0,
            x: 0,
            y: 410,
            leadX: 0,
            leadY: -500,
            scX: 0.9,
            scY: 1,
            rot: 0
        },
        board: {
            which: 0,
            x: 0,
            y: 230,
            leadX: 0,
            leadY: -500,
            scX: 0.8,
            rot: 0
        },
        sadIm: new ig.Image("media/graphics/sprites/sad.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.ray = {
                targX: 0,
                targY: 0,
                x: 30,
                y: -25,
                leadX: 0,
                leadY: 0,
                scX: 1,
                scY: 1,
                rot: 0
            }, this.clickTimer = new ig.Timer)
        },
        clicked: function() {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click);
            this.tweener("board", {
                leadY: 50
            }, 0.3, "gameOver1")
        },
        clicking: function() {
            this.bingoBut.scX = 0.88
        },
        released: function() {},
        update: function() {
            this.parent();
            ig.global.wm || (this.ray.rot++, null != this.pointer && this.pointer.hoveringItem == this && (this.bingoBut.scX = 0.98))
        },
        startAni: function() {
            this.board.leadY = -500;
            this.ray.scX = 1;
            for (var b = 0; 8 > b; b++) - 1 < this.main["player" + b].bingoSlot.indexOf(5) && this.placement++;
            this.th = 1 == this.placement ? "ST" : 2 == this.placement ? "ND" : 3 == this.placement ? "RD" : "TH";
            this.drawOver = !0;
            this.tweener("board", {
                leadY: 50
            }, 0.3, 0);
            this.tweener("ray", {
                scX: 0.9
            }, 0.6, 1)
        },
        idle: function() {
            this.bingoBut.scX = 0.9
        },
        ready: function() {
            this.parent()
        },
        tweenF: function(b) {
            switch (b) {
                case 0:
                    this.tweener("board", {
                        leadY: 0
                    }, 0.3);
                    this.sizer(this.bingoIm, 1, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y);
                    !0 == this.win ? ig.soundHandler.playSound(ig.soundHandler.SOUNDID.congrats) : ig.soundHandler.playSound(ig.soundHandler.SOUNDID.over);
                    break;
                case 1:
                    this.tweener("ray", {
                        scX: 1.1
                    }, 0.8, 2);
                    break;
                case 2:
                    this.tweener("ray", {
                        scX: 0.9
                    }, 0.8, 1);
                    break;
                case "gameOver1":
                    this.tweener("board", {
                        leadY: -500
                    }, 0.3, "gameOver2");
                    break;
                case "gameOver2":
                    ig.game.director.jumpTo(LevelHome)
            }
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            !1 != this.drawOver && (this.ctx.fillStyle = "rgba(0,0,0,0.5)", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.grad = this.ctx.createLinearGradient(0, 260 + this.board.leadY, 0, 300 + this.board.leadY), this.grad.addColorStop(0, "#fae50d"), this.grad.addColorStop(1, "#c45508"), !0 == this.win ? (this.drawer(1, this.rayIm, 1, 0, this.main.screenS.x / 2 + this.board.x, this.board.y + this.board.leadY - 20, this.ray.scX, this.ray.scX, !0, 1, this.ray.rot), this.drawer(1, this.popIm,
                1, 0, this.main.screenS.x / 2 + this.board.x, this.board.y + this.board.leadY, this.board.scX, this.board.scX, !0), this.textSet(1, 59, "black"), this.textDraw(1, _STRINGS.Game.Win, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.board.leadY - 135 + 6), this.textSet(1, 59, this.grad), this.textDraw(1, _STRINGS.Game.Win, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.board.leadY - 135), this.textSet(1, 25, "white"), this.textDraw(1, _STRINGS.Game.Place + this.placement + this.th + "!", this.main.screenS.x / 2 + this.bingoBut.x,
                this.bingoBut.y + this.board.leadY - 85)) : (this.drawer(1, this.sadIm, 1, 0, this.main.screenS.x / 2 + this.board.x, this.board.y + this.board.leadY, this.board.scX, this.board.scX, !0), this.textSet(1, 59, "black"), this.textDraw(1, _STRINGS.Game.Lose, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.board.leadY - 135 + 6), this.textSet(1, 59, this.grad), this.textDraw(1, _STRINGS.Game.Lose, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.board.leadY - 135), this.textSet(1, 25, "white"), this.textDraw(1, _STRINGS.Game.No,
                this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.board.leadY - 85)), this.drawer(1, this.bingoIm, 1, 0, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.board.leadY, this.bingoBut.scX, this.bingoBut.scX, !0), this.textSet(1, 29 * this.bingoBut.scX, "#261703"), this.textDraw(1, _STRINGS.Game.Ok, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.board.leadY - 3))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-bingo").requires("game.entities.plain").defines(function() {
    EntityPlainBingo = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        state: 0,
        zIndex: 250,
        textSize: 26,
        size: {
            x: 1,
            y: 1
        },
        here: {
            alp: 0
        },
        name: "plain-bingo",
        stopBingo: !1,
        scX: 1,
        screenS: {
            x: 0,
            y: 0
        },
        correct: !1,
        play: !1,
        count: 0,
        star1Im: new ig.Image("media/graphics/sprites/star1.png"),
        star2Im: new ig.Image("media/graphics/sprites/star2.png"),
        star3Im: new ig.Image("media/graphics/sprites/star3.png"),
        star4Im: new ig.Image("media/graphics/sprites/star4.png"),
        star5Im: new ig.Image("media/graphics/sprites/star5.png"),
        bingoIm0: new ig.Image("media/graphics/sprites/b.png"),
        bingoIm1: new ig.Image("media/graphics/sprites/i.png"),
        bingoIm2: new ig.Image("media/graphics/sprites/n.png"),
        bingoIm3: new ig.Image("media/graphics/sprites/g.png"),
        bingoIm4: new ig.Image("media/graphics/sprites/o.png"),
        bingoIm5: new ig.Image("media/graphics/sprites/s.png"),
        rayIm: new ig.Image("media/graphics/sprites/ray.png"),
        starIm: new ig.Image("media/graphics/sprites/star.png"),
        crossIm: new ig.Image("media/graphics/sprites/x.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.screenS.x = ig.system.width, this.screenS.y = ig.system.height, this.reGen())
        },
        startAni: function() {
            !0 == this.correct ? ig.soundHandler.playSound(ig.soundHandler.SOUNDID.win) : ig.soundHandler.playSound(ig.soundHandler.SOUNDID.wait);
            if (!0 != this.play && (this.main.pauseGame(), this.count++, !(1 < this.count))) {
                this.play = !0;
                this.reGen();
                this.stopBingo = !1;
                this.tweener("here", {
                    alp: 0.5
                }, 0.3);
                for (var b = 0; 6 > b; b++) this.tweener("bingo" + b, {}, 0.2 * b, "b0");
                for (b = 1; 6 > b; b++) this.tweener("star" +
                    b, {
                        scX: 1,
                        scY: 0.9
                    }, 0.3 + 0.1 * b, "star0");
                this.tweener("ray", {
                    scX: 1,
                    scY: 1
                }, 0.2, "ray1");
                this.tweener("ray", {}, 3, "stopPlay");
                this.tweener("cross", {}, 1, "cross0")
            }
        },
        reGen: function() {
            stopBingo = !1;
            this.here.alp = 0;
            this.here.scX = 1;
            this.star1 = {
                targX: -20,
                targY: -60,
                x: -20,
                y: -60,
                leadX: -8,
                leadY: -5,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.star2 = {
                targX: -90,
                targY: -30,
                x: -90,
                y: -30,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.star3 = {
                targX: 120,
                targY: -20,
                x: 120,
                y: -20,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.star4 = {
                targX: 170,
                targY: -18,
                x: 170,
                y: -18,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.star5 = {
                targX: 0,
                targY: -10,
                x: 0,
                y: -10,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.ray = {
                targX: 0,
                targY: 0,
                x: 30,
                y: -25,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.cross = {
                targX: 0,
                targY: 0,
                x: 0,
                y: -50,
                leadX: 0,
                leadY: 0,
                scX: 1.2,
                scY: 1.2,
                rot: 0,
                alp: 0
            };
            this.cross2 = {
                targX: 0,
                targY: 0,
                x: 0,
                y: -50,
                leadX: 0,
                leadY: 0,
                scX: 1.2,
                scY: 1.2,
                rot: 0,
                alp: 0
            };
            this.bingo0 = {
                targX: -128,
                targY: -10,
                x: -128,
                y: -10,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.bingo1 = {
                targX: -75,
                targY: -30,
                x: -128,
                y: -30,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.bingo2 = {
                targX: -10,
                targY: -38,
                x: -10,
                y: -39,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.bingo3 = {
                targX: 70,
                targY: -35,
                x: 70,
                y: -35,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.bingo4 = {
                targX: 145,
                targY: -25,
                x: 145,
                y: -25,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            this.bingo5 = {
                targX: 200,
                targY: -5,
                x: 200,
                y: -5,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            }
        },
        tweenF: function(b, c) {
            if (!1 != this.play) {
                switch (b) {
                    case "stopPlay":
                        this.tweener("here", {
                            scX: 1.1
                        }, 0.1, "stopPlay2");
                        break;
                    case "stopPlay2":
                        this.tweener("here", {
                            scX: 1
                        }, 0.2, "stopPlay3");
                        break;
                    case "stopPlay3":
                        this.tweener("here", {
                            scX: 1.3
                        }, 0.2, "stopPlay4");
                        break;
                    case "stopPlay4":
                        this.tweener("here", {
                            scX: 0,
                            alp: 0
                        }, 0.2, "stopPlay5");
                        break;
                    case "stopPlay5":
                        if (!1 == this.play) return;
                        this.stopTweens();
                        !0 == this.correct ? (this.over.win = !0, this.over.startAni()) : (this.stopBingo = !0, this.play = !1, this.but.block = !1, this.count = 0, this.main.resumeGame())
                }
                if (!0 != this.stopBingo) switch (b) {
                    case "cross0":
                        this.tweener(c, {
                            alp: 0.8
                        }, 0.2, "cross1");
                        break;
                    case "cross1":
                        this.tweener(c, {
                                scX: 0.8,
                                scY: 0.8,
                                alp: 1
                            }, 0.1,
                            "cross2");
                        this.cross2.alp = 0.5;
                        this.tweener("cross2", {
                            alp: 0,
                            scX: 1.6,
                            scY: 1.6
                        }, 0.3);
                        !1 == this.correct && ig.soundHandler.playSound(ig.soundHandler.SOUNDID.wrong);
                        break;
                    case "cross2":
                        this.tweener(c, {
                            scX: 0.8,
                            scY: 0.9
                        }, 0.3, "cross3");
                        break;
                    case "cross3":
                        this.tweener(c, {
                            scX: 0.9,
                            scY: 0.8
                        }, 0.3, "cross2");
                        break;
                    case "b0":
                        this.tweener(c, {
                            x: this[c].targX,
                            y: this[c].targY,
                            scX: 1.5,
                            scY: 1.3
                        }, 0.2, "b1");
                        break;
                    case "b1":
                        this.tweener(c, {
                            y: this[c].targY - 2,
                            scX: 0.95,
                            scY: 0.95
                        }, 0.3, "b2");
                        break;
                    case "b2":
                        this.tweener(c, {
                            y: this[c].targY +
                                2,
                            scX: 0.88,
                            scY: 0.88
                        }, 0.4, "b1");
                        break;
                    case "star0":
                        this.tweener(c, {
                            scX: 1,
                            scY: 0.95
                        }, 0.5, "star1");
                        break;
                    case "star1":
                        this.tweener(c, {
                            scX: 0.95,
                            scY: 1
                        }, 0.5, "star0");
                        break;
                    case "ray1":
                        this.tweener(c, {
                            scX: 1,
                            scY: 1
                        }, 0.5, "ray2");
                        break;
                    case "ray2":
                        this.tweener(c, {
                            scX: 0.8,
                            scY: 0.8
                        }, 0.5, "ray1")
                }
            }
        },
        update: function() {
            this.parent();
            !1 != this.play && (this.ray.rot++, !0 == ig.game.redraw && this.clearBg())
        },
        tweener: function(b, c, d, e) {
            var g = {};
            g[b] = c;
            this.tween(g, d, {
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        ready: function() {
            this.parent()
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            if (!1 != this.play && !ig.global.wm) {
                this.ctx.fillStyle = "rgba(0,0,0," + this.here.alp + ")";
                this.ctx.fillRect(0, 0, ig.system.width, ig.system.height);
                if (!0 == this.correct) {
                    this.drawer(1, this.rayIm, 1, 0, this.ray.x * this.here.scX + this.pos.x, this.ray.y * this.here.scX + this.pos.y, this.ray.scX * this.here.scX, this.ray.scY * this.here.scX, !0, 1, this.ray.rot);
                    for (var b = 1; 6 > b; b++) this.drawer(1,
                        this["star" + b + "Im"], 1, 0, this["star" + b].x * this.here.scX + this.pos.x + this.star1.leadX, this["star" + b].y * this.here.scX + this.pos.y + this.star1.leadY, this["star" + b].scX * this.here.scX, this["star" + b].scY * this.here.scX, !0)
                }
                for (b = 0; 6 > b; b++) this.drawer(1, this["bingoIm" + b], 1, 0, this["bingo" + b].x * this.here.scX + this.pos.x, this["bingo" + b].y * this.here.scX + this.pos.y, this["bingo" + b].scX * this.here.scX, this["bingo" + b].scY * this.here.scX, !0);
                !1 == this.correct && (this.drawer(1, this.crossIm, 1, 0, this.cross2.x * this.here.scX + this.pos.x,
                    this.cross2.y * this.here.scX + this.pos.y, this.cross2.scX * this.here.scX, this.cross2.scY * this.here.scX, !0, this.cross2.alp, this.cross2.rot), this.drawer(1, this.crossIm, 1, 0, this.cross.x * this.here.scX + this.pos.x, this.cross.y * this.here.scX + this.pos.y, this.cross.scX * this.here.scX, this.cross.scY * this.here.scX, !0, this.cross.alp, this.cross.rot))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-game-but").requires("game.entities.plain").defines(function() {
    EntityPlainGameBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 400,
        name: "plain-but",
        scene: 0,
        num: 0,
        scX: 0.75,
        selected: !1,
        seq: 0,
        oriSc: 0,
        but0Im: new ig.Image("media/graphics/sprites/pause.png"),
        but3Im: new ig.Image("media/graphics/sprites/home.png"),
        but1Im: new ig.Image("media/graphics/sprites/mute.png"),
        but2Im: new ig.Image("media/graphics/sprites/unmute.png"),
        but4Im: new ig.Image("media/graphics/sprites/play.png"),
        popIm: new ig.Image("media/graphics/sprites/quit.png"),
        board: {
            which: 0,
            x: 0,
            y: 190,
            leadX: 0,
            leadY: -500,
            scX: 0.9,
            rot: 0
        },
        card: {
            which: 0,
            x: 0,
            y: 445,
            leadX: 0,
            leadY: 0,
            scX: 0.75
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.seq = d.seq, this.card.x = 475 + 61 * this.seq, 0 == this.seq ? (this.grad = this.ctx.createLinearGradient(0, ig.system.height / 2 - 40, 0, ig.system.height / 2 + 20), this.grad.addColorStop(0, "#fae50d"), this.grad.addColorStop(1, "#c45508"), this.pauseBut = this.but0Im, this.board.scX = 0.8, this.board.y = 210, this.board.x = -25, this.card.x = 800) : 1 == this.seq && (this.soundBut = this.but1Im))
        },
        tweenF: function(b) {
            switch (b) {
                case 0:
                    this.tweener("board", {
                        leadY: 0
                    }, 0.3);
                    this.homeBut[0].resizer();
                    this.homeBut[1].resizer();
                    break;
                case 1:
                    this.tweener("board", {
                        leadY: -500
                    }, 0.3);
                    this.main.resumeGame();
                    this.main.drawHome = !1;
                    break;
                case "gameOver1":
                    this.tweener("board", {
                        leadY: -500
                    }, 0.2, "gameOver2");
                    break;
                case "gameOver2":
                    ig.game.director.jumpTo(LevelHome)
            }
        },
        homeBack: function() {
            this.tweener("board", {
                leadY: 50
            }, 0.3, 1)
        },
        goHome: function() {
            this.tweener("board", {
                leadY: 50
            }, 0.3, "gameOver1")
        },
        clicked: function() {
            if (!1 != this.main.gameAllow) switch (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.seq) {
                case 0:
                    !1 == this.main.gamePaused ? (this.pauseBut = this.but4Im, this.main.gamePaused = !0, this.main.pauseGame()) : (this.pauseBut = this.but0Im, this.main.gamePaused = !1, this.main.resumeGame());
                    break;
                case 1:
                    !0 == ig.soundHandler.muted ? (this.soundBut = this.but1Im, ig.soundHandler.setForceMuted(!1), ig.soundHandler.unmute()) : (this.soundBut = this.but2Im, ig.soundHandler.mute(),
                        ig.soundHandler.setForceMuted(!0));
                    break;
                case 2:
                    !1 == this.main.drawHome && (this.tweener("board", {
                        leadY: 50
                    }, 0.3, 0), this.main.drawHome = !0, this.main.pauseGame())
            }
        },
        clicking: function() {
            this.card.scX = 0.73
        },
        released: function() {},
        update: function() {
            this.parent();
            !ig.global.wm && null != this.pointer && this.pointer.hoveringItem == this && (this.card.scX = 0.82)
        },
        idle: function() {
            this.card.scX = 0.75
        },
        ready: function() {
            this.parent();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.sizer(this.but0Im, 1, this.card.x,
                this.card.y, 10, 10);
            ig.ua.mobile && this.sizer(this.but0Im, 1, this.card.x, this.card.y, 10, 100)
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            if (0 == this.seq) {
                if (!0 == this.main.gamePaused || !0 == this.main.drawHome) this.ctx.fillStyle = "rgba(0,0,0,0.5)", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), !0 == this.main.gamePaused && (this.drawer(1, this.popIm, 1, 0, this.main.screenS.x / 2 + this.board.x, this.board.y, this.board.scX, this.board.scX, !0), this.textSet(1, 55, "white"), this.textDraw(1, _STRINGS.Game.Pause,
                    this.main.screenS.x / 2 + this.board.x + 40, this.board.y + 57));
                this.drawer(1, this.pauseBut, 1, 0, this.main.lead.xRight + this.card.x, this.card.y, this.card.scX, this.card.scX, !0)
            } else 1 == this.seq ? this.drawer(1, this.soundBut, 1, 0, this.main.lead.xRight + this.card.x, this.card.y, this.card.scX, this.card.scX, !0) : 2 == this.seq && (this.drawer(1, this.popIm, 1, 0, this.main.screenS.x / 2 + this.board.x, this.board.y + this.board.leadY, this.board.scX, this.board.scX, !0), this.textSet(1, 25, "white"), this.textDraw(1, _STRINGS.Game.Leave, this.main.screenS.x /
                2 + this.board.x + 40, this.board.y + this.board.leadY + 60), this.drawer(1, this.but3Im, 1, 0, this.main.lead.xRight + this.card.x, this.card.y, this.card.scX, this.card.scX, !0))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-home-but").requires("game.entities.plain").defines(function() {
    EntityPlainHomeBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 500,
        name: "plain-but",
        clickAllow: !1,
        clickTimer: null,
        clickTime: 4,
        scene: 0,
        num: 0,
        win: !1,
        drawOver: !1,
        selected: !1,
        block: !1,
        seq: 0,
        placement: 0,
        oriSc: 0,
        bingoIm: new ig.Image("media/graphics/sprites/ok.png"),
        bingoIm2: new ig.Image("media/graphics/sprites/close.png"),
        bingoBut: {
            which: 0,
            x: 0,
            y: 330,
            leadX: 0,
            leadY: -500,
            scX: 0.8,
            scY: 1,
            rot: 0
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.seq = d.seq, 0 == this.seq ? (this.bingoBut.x = 30, this.bingoBut.oriSc = 0.8) : (this.bingoIm = this.bingoIm2, this.bingoBut.x = 210, this.bingoBut.y = 200, this.bingoBut.oriSc = 0.9))
        },
        clicked: function() {
            if (!1 != this.main.drawHome) switch (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.seq) {
                case 0:
                    this.homeBut[0].moveSide();
                    this.homeBut[1].moveSide();
                    this.gameBut[2].goHome();
                    break;
                case 1:
                    this.homeBut[0].moveSide(), this.homeBut[1].moveSide(),
                        this.gameBut[2].homeBack()
            }
        },
        clicking: function() {
            this.bingoBut.scX = this.bingoBut.oriSc - 0.08
        },
        released: function() {},
        resizer: function() {
            this.sizer(this.bingoIm, 1, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y, 0, 20)
        },
        update: function() {
            this.parent();
            !ig.global.wm && null != this.pointer && this.pointer.hoveringItem == this && (this.bingoBut.scX = this.bingoBut.oriSc + 0.08)
        },
        idle: function() {
            this.bingoBut.scX = this.bingoBut.oriSc
        },
        ready: function() {
            this.parent()
        },
        tweenF: function() {},
        moveSide: function() {
            this.pos.x = -200;
            this.pos.y = -200
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            !1 != this.drawHome && (this.drawer(1, this.bingoIm, 1, 0, this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y + this.gameBut[2].board.leadY, this.bingoBut.scX, this.bingoBut.scX, !0), 1 != this.seq && (this.textSet(1, 29 * this.bingoBut.scX, "#261703"), this.textDraw(1, "OK", this.main.screenS.x / 2 + this.bingoBut.x, this.bingoBut.y - 3 + this.gameBut[2].board.leadY)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-pattern").requires("game.entities.plain").defines(function() {
    EntityPlainPattern = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 100,
        name: "plain-but",
        scene: 0,
        num: 0,
        scX: 0.75,
        selected: !1,
        seq: 0,
        oriSc: 0,
        patternIm: new ig.Image("media/graphics/sprites/pattern.png"),
        fme: 0,
        count: 0,
        card: {
            which: 0,
            x: 465,
            y: 442,
            leadX: 0,
            leadY: 100,
            scX: 0.7,
            alp: 1
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.tween({
                card: {
                    leadY: -5
                }
            }, 0.3, {
                delay: 1.3,
                onComplete: function() {
                    this.tween({
                            card: {
                                leadY: 0
                            }
                        },
                        0.3, {
                            easing: ig.Tween.Easing.Quadratic.EaseOut
                        }).start()
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start())
        },
        update: function() {
            this.parent();
            ig.global.wm || (50 > this.count ? this.count++ : (this.fme = (this.fme + 1) % 13, this.count = 0))
        },
        ready: function() {
            this.parent()
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            this.drawer(1, this.patternIm, 13, this.fme, this.card.x, this.card.y + this.card.leadY, this.card.scX, this.card.scX, !0, this.card.alp)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-starter").requires("game.entities.plain").defines(function() {
    EntityPlainStarter = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        state: 0,
        zIndex: 400,
        textSize: 26,
        name: "plain-game",
        starter: {
            which: 0,
            x: 20,
            y: 220,
            leadX: 0,
            leadY: -500,
            scX: 0,
            scY: 0.95,
            rot: 0,
            textSize: 55
        },
        go: {
            which: 0,
            x: 20,
            y: 240,
            leadX: 0,
            leadY: -500,
            scX: 0.95,
            scY: 0.95,
            rot: 0
        },
        drawStart: !1,
        screenS: {
            x: 0,
            y: 0
        },
        starterIm: new ig.Image("media/graphics/sprites/ready.png"),
        goIm: new ig.Image("media/graphics/sprites/go.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.screenS.x = ig.system.width, this.screenS.y = ig.system.height, this.parent(b, c, d))
        },
        startAni: function() {
            this.tweener("starter", {
                scX: 1.2
            }, 0.3, 0, 1)
        },
        reGen: function() {},
        tweener: function(b, c, d, e, g) {
            var m = {};
            m[b] = c;
            null == g && (g = 0);
            this.tween(m, d, {
                delay: g,
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        tweenF: function(b) {
            switch (b) {
                case 0:
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.ready);
                    this.tweener("starter", {
                        scX: 0.8
                    }, 0.3, -1);
                    break;
                case -1:
                    this.tweener("starter", {}, 0.6, 1);
                    break;
                case 1:
                    this.starter.scX = 0;
                    this.starterIm = this.goIm;
                    this.tweener("starter", {
                        scX: 1
                    }, 0.2, 2);
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.go);
                    break;
                case 2:
                    this.tweener("starter", {
                        scX: 0.8
                    }, 0.3, -2);
                    break;
                case -2:
                    this.tweener("starter", {}, 0.2, 3);
                    break;
                case 3:
                    this.tweener("starter", {
                        scX: 1.2
                    }, 0.1, 4);
                    break;
                case 4:
                    this.tweener("starter", {
                        scX: 0
                    }, 0.2, 5);
                    break;
                case 5:
                    this.main.gameAllow = !0, this.kill()
            }
        },
        moveOut: function() {
            this.tweener("starter", {
                leadY: 50
            }, 0.3, 1)
        },
        update: function() {
            this.parent();
            !0 == ig.game.redraw && this.clearBg()
        },
        ready: function() {
            this.parent()
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            !ig.global.wm && !1 != this.drawStart && (this.ctx.fillStyle = "rgba(0,0,0,0.5)", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.drawer(1, this.starterIm, 1, 0, this.screenS.x / 2 + this.starter.x, this.starter.y, this.starter.scX, this.starter.scX, !0))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-game").requires("game.entities.plain", "game.entities.plain-tile", "game.entities.plain-ball", "game.entities.plain-ball-small", "game.entities.plain-button", "game.entities.plain-power", "game.entities.plain-over", "game.entities.plain-bingo", "game.entities.plain-game-but", "game.entities.plain-home-but", "game.entities.plain-pattern", "game.entities.plain-starter").defines(function() {
    EntityPlainGame = EntityPlain.extend({
        gravityFactor: 0,
        size: {
            x: 1,
            y: 1
        },
        type: ig.Entity.TYPE.B,
        state: 0,
        zIndex: 1,
        textSize: 26,
        name: "plain-game",
        taken: [],
        gameAllow: !1,
        countDown: 11,
        count: !1,
        gameTime: 5,
        smallSeq: [3, 0, 1, 2],
        bingoLeft: 38,
        gameOver: !1,
        B: [],
        I: [],
        N: [],
        G: [],
        O: [],
        boards: [],
        timers: [],
        players: [],
        bingoPoses: [],
        gameNum: [],
        lead: {
            xTop: 0,
            yTop: -500,
            yBottom2: 0,
            yBottom: 600,
            yBottom2: 600,
            xLeft: -200,
            yLeft: -200,
            xRight: 200,
            yRight: 0
        },
        gamePaused: !1,
        drawHome: !1,
        bgs: {
            which: 0,
            x: 0,
            y: 0,
            scX: 1,
            scY: 1,
            rot: 0
        },
        cards: {
            which: 0,
            x: 2,
            y: -25,
            leadX: 0,
            leadY: 0,
            scX: 0.88,
            scY: 0.88,
            rot: 0
        },
        screenS: {
            x: 0,
            y: 0
        },
        holder: {
            which: 0,
            x: 566,
            y: 30,
            leadX: 0,
            leadY: 0,
            scX: 1,
            scY: 1,
            rot: 0
        },
        tracker: {
            which: 0,
            x: 75,
            y: 79,
            leadX: 0,
            leadY: 0,
            scX: 1,
            scY: 1,
            rot: 0,
            textSize: 13,
            col: "white",
            textX: -52,
            textY: 140,
            offX: 25,
            offY: 16
        },
        miniBoard1: {
            which: 0,
            x: -30,
            y: 139,
            leadX: 0,
            leadY: 0,
            scX: 0.85,
            scY: 1,
            rot: 0,
            tileStartX: -20,
            tileStartY: -15,
            tileOffset: 10.2
        },
        miniBoard2: {
            which: 0,
            x: 30,
            y: 139,
            leadX: 0,
            leadY: 0,
            scX: 0.85,
            scY: 1,
            rot: 0
        },
        miniBoard3: {
            which: 0,
            x: -30,
            y: 207,
            leadX: 0,
            leadY: 0,
            scX: 0.85,
            scY: 1,
            rot: 0
        },
        miniBoard4: {
            which: 0,
            x: 30,
            y: 207,
            leadX: 0,
            leadY: 0,
            scX: 0.85,
            scY: 1,
            rot: 0
        },
        miniBoard5: {
            which: 0,
            x: -30,
            y: 275,
            leadX: 0,
            leadY: 0,
            scX: 0.85,
            scY: 1,
            rot: 0
        },
        miniBoard6: {
            which: 0,
            x: 30,
            y: 275,
            leadX: 0,
            leadY: 0,
            scX: 0.85,
            scY: 1,
            rot: 0
        },
        miniBoard7: {
            which: 0,
            x: -30,
            y: 343,
            leadX: 0,
            leadY: 0,
            scX: 0.85,
            scY: 1,
            rot: 0
        },
        miniBoard8: {
            which: 0,
            x: 30,
            y: 343,
            leadX: 0,
            leadY: 0,
            scX: 0.85,
            scY: 1,
            rot: 0
        },
        miniBingo: {
            which: 0,
            x: 0,
            y: 3,
            leadX: 0,
            leadY: 0,
            scX: 0.8,
            scY: 1,
            rot: 0,
            tileStartX: -20,
            tileStartY: -15,
            tileOffset: 10.2
        },
        coinGui: {
            x: 525,
            y: 49,
            leadX: 0,
            leadY: 0,
            scX: 0.65
        },
        light: {
            x: 565,
            y: 435,
            leadX: 0,
            leadY: 0,
            scX: 0.8
        },
        ballIm: new ig.Image("media/graphics/sprites/bigball.png"),
        bg0: new ig.Image("media/graphics/sprites/bg1.png"),
        bg1: new ig.Image("media/graphics/sprites/bg2.png"),
        bg2: new ig.Image("media/graphics/sprites/bg3.png"),
        card0: new ig.Image("media/graphics/sprites/card1.png"),
        card1: new ig.Image("media/graphics/sprites/card2.png"),
        card2: new ig.Image("media/graphics/sprites/card3.png"),
        trackerIm: new ig.Image("media/graphics/sprites/tracker.png"),
        holderIm: new ig.Image("media/graphics/sprites/holder.png"),
        boardIm: new ig.Image("media/graphics/sprites/smallBoard.png"),
        circleIm: new ig.Image("media/graphics/sprites/circleSmall.png"),
        circle2Im: new ig.Image("media/graphics/sprites/circleBig.png"),
        miniIm: new ig.Image("media/graphics/sprites/mini-tile.png"),
        miniSecIm: new ig.Image("media/graphics/sprites/mini-sec.png"),
        miniBingoIm: new ig.Image("media/graphics/sprites/miniBingo.png"),
        miniYoursIm: new ig.Image("media/graphics/sprites/miniYours.png"),
        boardSeq: [],
        starIm: new ig.Image("media/graphics/sprites/bingo-star.png"),
        ready: function() {
            this.parent();
            this.small = ig.game.getEntitiesByType(EntityPlainBallSmall);
            this.big = ig.game.getEntitiesByType(EntityPlainBall)[0];
            this.over = ig.game.getEntitiesByType(EntityPlainOver)[0];
            this.starter = ig.game.getEntitiesByType(EntityPlainStarter)[0];
            this.tweener("lead", {}, 0.5, "start");
            this.starter.drawStart = !0;
            this.starter.startAni();
            this.tweening = !0
        },
        tweenF: function(b) {
            switch (b) {
                case "start":
                    this.tweener("lead", {
                        yTop: 50,
                        xLeft: 15,
                        xRight: -15
                    }, 0.4, 0);
                    break;
                case "GameOver":
                    this.over.win = !1;
                    this.over.startAni();
                    this.gameAllow = !1;
                    break;
                case 0:
                    this.tweener("lead", {
                        yTop: 0,
                        yBottom: -20,
                        xLeft: 0,
                        xRight: 0
                    }, 0.3, 1);
                    break;
                case 1:
                    this.tweener("lead", {
                        yBottom: 0
                    }, 0.3, "stopTween");
                    break;
                case "stopTween":
                    this.tweening = !1;
                    break;
                case "coin1":
                    1 <= this.coin1.percent && (this.coin1.drawCoin = !1)
            }
        },
        runGame: function() {
            !0 != this.gameOver && (this.gameTimer.delta() > this.gameTime && !1 == this.count && !1 == this.win.play && (0 < this.bingoLeft ? (this.gameTime = 7, this.gameTimer.reset(), this.big.reGen(this.caller[0])) : (this.checker2(0), this.count = !0, this.gameTime = 1, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hurry))), !0 == this.count && this.gameTimer.delta() > this.gameTime &&
                (0 == this.countDown ? (this.gameOver = !0, this.gameTimer.reset(), this.over.win = !1, this.over.startAni(), this.gameAllow = !1, this.countDown--) : (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.count), this.gameTimer.reset(), this.countDown--, ig.game.redraw = !0)))
        },
        update: function() {
            this.parent();
            ig.global.wm || (!0 == this.tweening ? ig.game.redraw = !0 : this.runGame(), !0 == ig.game.redraw && this.clearBg())
        },
        init: function(b, c, d) {
            if (!ig.global.wm) {
                this.screenS.x = ig.system.width;
                this.screenS.y = ig.system.height;
                this.pointer =
                    ig.game.spawnEntity(EntityPointer, 0, 0);
                this.bgs.which = ig.game.which;
                this.bgs.im = [this.bg0, this.bg1, this.bg2];
                this.cards.im = [this.card0, this.card1, this.card2];
                for (var e = 0; 8 > e; e++) {
                    this.boardSeq.push(e);
                    this["board" + e] = [];
                    this.boards.push(this["board" + e]);
                    this["player" + e] = {};
                    this["player" + e].seq = e;
                    this["player" + e].selected = [];
                    this["player" + e].taken = [];
                    this["player" + e].bingoSlot = [];
                    this["player" + e].bingoDone = [];
                    this["player" + e].bingos = 0;
                    this["player" + e].which = e;
                    for (var g = 0; 5 > g; g++)
                        for (var m = 0; 5 > m; m++) void 0 ==
                            this["player" + e].selected[m] && (this["player" + e].selected[m] = [], this["player" + e].taken[m] = []), this["player" + e].selected[m][g] = !1, this["player" + e].taken[m][g] = !1;
                    this["player" + e].taken[2][2] = !0;
                    this["player" + e].selected[2][2] = !0;
                    this.players.push(this["player" + e])
                }
                this.shuffleArray(this.boardSeq);
                for (g = 0; 13 > g; g++) this.bingoPoses[g] = [];
                this.tracker.im = this.trackerIm;
                this.holder.im = this.holderIm;
                this.parent(b, c, d);
                this.genQues();
                this.bingoPos();
                this.ball = ig.game.spawnEntity(EntityPlainBall, 0, 0);
                for (e =
                    0; 4 > e; e++) this.small = ig.game.spawnEntity(EntityPlainBallSmall, 0, 0, {
                    seq: e
                });
                this.but = ig.game.spawnEntity(EntityPlainButton, 0, 0);
                this.win = ig.game.spawnEntity(EntityPlainBingo, ig.system.width / 2 - 20, ig.system.height / 2);
                this.pow = ig.game.spawnEntity(EntityPlainPower, 0, 0);
                this.over = ig.game.spawnEntity(EntityPlainOver, 0, 0);
                for (e = 0; 3 > e; e++) this.buts = ig.game.spawnEntity(EntityPlainGameBut, 0, 0, {
                    seq: e
                });
                this.buts = ig.game.spawnEntity(EntityPlainPattern, 0, 0);
                for (e = 0; 2 > e; e++) this.buts = ig.game.spawnEntity(EntityPlainHomeBut,
                    0, 0, {
                        seq: e
                    });
                this.starter = ig.game.spawnEntity(EntityPlainStarter, 0, 0);
                this.gameTimer = new ig.Timer
            }
        },
        bingoPos: function() {
            for (var b = 0; 5 > b; b++)
                for (var c = 0; 5 > c; c++) {
                    for (var d = 0; 5 > d; d++) b == d && this.bingoPoses[d].push([b, c]), c == d && this.bingoPoses[d + 5].push([b, c]);
                    c == b && this.bingoPoses[10].push([b, c]);
                    c == 4 - b && this.bingoPoses[11].push([b, c])
                }
            this.bingoPoses[12].push([0, 0]);
            this.bingoPoses[12].push([0, 4]);
            this.bingoPoses[12].push([2, 2]);
            this.bingoPoses[12].push([4, 0]);
            this.bingoPoses[12].push([4, 4]);
            for (b =
                0; 13 > b; b++)
                for (c = 0; 5 > c; c++);
        },
        checker: function(b) {
            this["player" + b].bingoSlot = [];
            this["player" + b].bingoDone = [];
            for (var c = 0; 13 > c; c++) {
                void 0 == this["player" + b].bingoSlot[c] && (this["player" + b].bingoSlot[c] = 0);
                for (var d = 0; 5 > d; d++)!0 == this["player" + b].taken[this.bingoPoses[c][d][0]][this.bingoPoses[c][d][1]] && !0 == this["player" + b].selected[this.bingoPoses[c][d][0]][this.bingoPoses[c][d][1]] && (this["player" + b].bingoSlot[c] += 1)
            }
        },
        checker2: function(b) {
            this["player" + b].bingoSlot = [];
            this["player" + b].bingoDone = [];
            for (var c = 0; 13 > c; c++) {
                void 0 == this["player" + b].bingoSlot[c] && (this["player" + b].bingoSlot[c] = 0);
                for (var d = 0; 5 > d; d++)!0 == this["player" + b].taken[this.bingoPoses[c][d][0]][this.bingoPoses[c][d][1]] && (this["player" + b].bingoSlot[c] += 1)
            }
        },
        genQues: function() {
            for (var b = 0, c = 1; 16 > c; c++) this.B.push(c + 0), this.I.push(c + 15), this.N.push(c + 30), this.G.push(c + 45), this.O.push(c + 60);
            this.stock = [this.B, this.I, this.N, this.G, this.O];
            this.caller = [];
            for (c = 0; 5 > c; c++) this.shuffleArray(this.B), this.shuffleArray(this.I), this.shuffleArray(this.N),
                this.shuffleArray(this.G), this.shuffleArray(this.O);
            for (var d = 0; 8 > d; d++)
                for (c = 0; 5 > c; c++) this.boards[d] = [], this.boards[d][c] = [];
            for (var e = 0; 8 > e; e++) {
                this.shuffleArray(this.B);
                this.shuffleArray(this.I);
                this.shuffleArray(this.N);
                this.shuffleArray(this.G);
                this.shuffleArray(this.O);
                null == this.boards[e] && (this.boards[e] = []);
                for (c = 0; 5 > c; c++)
                    for (d = 0; 5 > d; d++) null == this.boards[e][c] && (this.boards[e][c] = []), null == this.boards[e][c][d] && (this.boards[e][c][d] = []), this.boards[e][c][d] = this.stock[c][2 * d], -1 == this.caller.indexOf(this.stock[c][2 *
                        d
                    ]) && this.caller.push(this.stock[c][2 * d])
            }
            for (d = 0; 5 > d; d++)
                for (c = 0; 5 > c; c++) b++, this.gameNum.push(this.boards[this.player0.which][d][c]), this.tile = ig.game.spawnEntity(EntityPlainTile, 200, 200, {
                    seq: c + d,
                    holdX: d,
                    holdY: c
                });
            this.shuffleArray(this.caller);
            this.shuffleArray(this.gameNum)
        },
        tweener: function(b, c, d, e) {
            var g = {};
            g[b] = c;
            this.tween(g, d, {
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        redrawAll: function() {
            this.drawer(2, this.bgs.im[this.bgs.which],
                1, 0, 0, 0);
            this.drawer(2, this.cards.im[this.bgs.which], 1, 0, this.screenS.x / 2 + this.cards.x, this.screenS.y / 2 + this.cards.y + this.lead.yTop, this.cards.scX, this.cards.scY, !0);
            this.drawer(2, this.tracker.im, 1, 0, this.lead.xLeft + this.tracker.x, this.screenS.y / 2 + this.tracker.y, this.tracker.scX, this.tracker.scY, !0);
            this.textSet(2, 16, "white");
            !0 == this.count ? this.textDraw(2, _STRINGS.Game.End + this.countDown, this.lead.xLeft + this.tracker.x, this.screenS.y / 2 + this.tracker.y - 150) : this.textDraw(2, this.bingoLeft + _STRINGS.Game.Left,
                this.lead.xLeft + this.tracker.x, this.screenS.y / 2 + this.tracker.y - 150);
            for (var b = 0; 75 > b; b++) {
                var c = Math.floor(b / 15); - 1 == this.taken.indexOf(b + 1) ? (this.tracker.col = "rgba(120,109,187,0.45)", this.textSet2(2, this.tracker.textSize * this.tracker.scX, this.tracker.col), ig.system.bgcontext.shadowColor = "black") : (this.tracker.col = "rgba(247, 249, 255, 1)", this.textSet2(2, this.tracker.textSize * this.tracker.scX, this.tracker.col));
                this.textDraw(2, b + 1, this.lead.xLeft + this.tracker.textX + this.tracker.x + this.tracker.offX *
                    c, this.tracker.textY + this.tracker.y + b % 15 * this.tracker.offY)
            }
            this.drawer(2, this.circleIm, 1, 0, this.lead.xLeft + 30, 132, 0.95, 0.95, !0);
            this.drawer(2, this.circleIm, 1, 0, this.lead.xLeft + 75, 132, 0.95, 0.95, !0);
            this.drawer(2, this.circleIm, 1, 0, this.lead.xLeft + 120, 132, 0.95, 0.95, !0);
            this.drawer(2, this.circle2Im, 1, 0, this.lead.xLeft + 75, 60, 0.98, 0.98, !0);
            this.textSet(2, 16, "white");
            this.textDraw(2, _STRINGS.Game.Other, this.lead.xRight + this.holder.x, 90 + this.holder.y);
            this.drawer(2, this.holder.im, 1, 0, this.lead.xRight + this.holder.x,
                this.screenS.y / 2 + this.holder.y, this.holder.scX, this.holder.scY, !0);
            for (b = 1; 9 > b; b++)
                if (this.drawer(2, this.boardIm, 3, this.bgs.which, this.lead.xRight + this.holder.x + this["miniBoard" + b].x, this.holder.y + this["miniBoard" + b].y, +this["miniBoard" + b].scX, +this["miniBoard" + b].scX, !0), 0 == this.boardSeq[b - 1]) this.drawer(2, this.miniYoursIm, 1, 0, this.lead.xRight + this.holder.x + this["miniBoard" + b].x + this.miniBingo.x, this.holder.y + this["miniBoard" + b].y + this.miniBingo.y, 0.75, 0.75, !0);
                else if (-1 < this["player" + this.boardSeq[b -
                1]].bingoSlot.indexOf(5)) this.drawer(2, this.miniBingoIm, 1, 0, this.lead.xRight + this.holder.x + this["miniBoard" + b].x + this.miniBingo.x, this.holder.y + this["miniBoard" + b].y + this.miniBingo.y, +this.miniBingo.scX, +this.miniBingo.scX, !0);
            else
                for (c = 0; 5 > c; c++)
                    for (var d = 0; 5 > d; d++)!0 == this["player" + this.boardSeq[b - 1]].taken[d][c] ? this.drawer(2, this.miniSecIm, 3, this.bgs.which, this.lead.xRight + this.holder.x + this["miniBoard" + b].x + this.miniBoard1.tileStartX + this.miniBoard1.tileOffset * d, this.holder.y + this["miniBoard" +
                        b].y + this.miniBoard1.tileStartY + this.miniBoard1.tileOffset * c, this["miniBoard" + b].scX, this["miniBoard" + b].scX, !0) : this.drawer(2, this.miniIm, 1, 0, this.lead.xRight + this.holder.x + this["miniBoard" + b].x + this.miniBoard1.tileStartX + this.miniBoard1.tileOffset * d, this.holder.y + this["miniBoard" + b].y + this.miniBoard1.tileStartY + this.miniBoard1.tileOffset * c, this["miniBoard" + b].scX, this["miniBoard" + b].scX, !0)
        },
        pauseGame: function() {
            this.gameTimer.pause()
        },
        resumeGame: function() {
            this.gameTimer.unpause()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.plain-game", "game.entities.button-more-games", "game.entities.pointer").defines(function() {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 296,
            y: 396,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityPlainGame",
            x: 288,
            y: 56
        }, {
            type: "EntityButtonMoreGames",
            x: 432,
            y: 284,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 608,
            y: 120
        }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
                    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120
                ],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222,
                    223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240
                ],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
                [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346,
                    347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360
                ],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470,
                    471, 472, 473, 474, 475, 476, 477, 478, 479, 480
                ],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
                [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594,
                    595, 596, 597, 598, 599, 600
                ],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680],
                [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718,
                    719, 720
                ],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842,
                    843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880
                ],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966,
                    967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3
                ],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073,
                    1074, 1075, 1076, 1077, 1078, 1079, 1080
                ],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172,
                    1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200
                ]
            ]
        }]
    };
    LevelTestDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.plain-card").requires("game.entities.plain").defines(function() {
    EntityPlainCard = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        tile: {
            which: 0,
            x: 193,
            y: 120,
            leadX: 0,
            leadY: 0,
            scX: 1,
            scY: 1,
            rot: 0,
            holdX: 0,
            holdY: 0,
            col: "black",
            textSize: 35,
            textY: -2
        },
        zIndex: 100,
        name: "plain-but",
        scene: 0,
        num: 0,
        selected: !1,
        seq: 0,
        oriSc: 0,
        card0: new ig.Image("media/graphics/sprites/scene0.png"),
        card1: new ig.Image("media/graphics/sprites/scene1.png"),
        card2: new ig.Image("media/graphics/sprites/scene2.png"),
        cardb0: new ig.Image("media/graphics/sprites/sceneb0.png"),
        cardb1: new ig.Image("media/graphics/sprites/sceneb1.png"),
        cardb2: new ig.Image("media/graphics/sprites/sceneb2.png"),
        card: {
            which: 0,
            x: 0,
            y: 430,
            leadX: 0,
            leadY: 0,
            scX: 0.92
        },
        text: [_STRINGS.Game.NY, _STRINGS.Game.Paris, _STRINGS.Game.SH],
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.seq = d.seq, this.card.x = ig.system.width / 2 - 200 + 200 * this.seq, this.card.y = ig.system.height / 2 - 15)
        },
        clicked: function() {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click);
            ig.game.which = this.seq
        },
        clicking: function() {
            this.card.scX = 0.92
        },
        released: function() {},
        update: function() {
            this.parent();
            !ig.global.wm && null != this.pointer && this.pointer.hoveringItem == this && (this.card.scX = 0.95)
        },
        idle: function() {
            this.card.scX = 0.92
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.sizer(this["card" + this.seq], 1, this.card.x, this.card.y)
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            this.textSet(1, 21, "white");
            this.textDraw(1, this.text[this.seq], this.card.x,
                this.card.y + 150);
            ig.game.which == this.seq ? (this.ctx.shadowBlur = 30, this.ctx.shadowSpread = 60, this.ctx.shadowColor = "pink", this.drawer(1, this["card" + this.seq], 1, 0, this.card.x, this.card.y, this.card.scX, this.card.scX, !0), this.ctx.shadowBlur = ig.game.texter.shadowBlur, this.ctx.shadowSpread = ig.game.texter.shadowSpread, this.ctx.shadowColor = ig.game.texter.shadowColor) : this.drawer(1, this["cardb" + this.seq], 1, 0, this.card.x, this.card.y, this.card.scX, this.card.scX, !0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-play").requires("game.entities.plain").defines(function() {
    EntityPlainPlay = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 100,
        name: "plain-but",
        scene: 0,
        num: 0,
        selected: !1,
        seq: 0,
        oriSc: 0,
        scX: 0.75,
        card2Im: new ig.Image("media/graphics/sprites/start.png"),
        cardIm: new ig.Image("media/graphics/sprites/start2.png"),
        moreIm: new ig.Image("media/graphics/sprites/moreGames2.png"),
        patIm: new ig.Image("media/graphics/sprites/pattern2.png"),
        card: {
            which: 0,
            x: 0,
            y: 430,
            leadX: 0,
            leadY: 0,
            scX: 0.75
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.seq = d.seq, this.card.x = ig.system.width / 2, 0 == this.seq ? this.card.y = ig.system.height - 165 : 1 == this.seq ? this.card.y = ig.system.height - 45 : 2 == this.seq ? this.card.y = ig.system.height - 102 : 3 == this.seq && (this.card.y = ig.system.height - 40))
        },
        clicked: function() {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click);
            switch (this.seq) {
                case 0:
                    ig.game.director.jumpTo(LevelScene);
                    break;
                case 1:
                    ig.game.director.jumpTo(LevelGame);
                    break;
                case 2:
                    ig.game.director.jumpTo(LevelTut)
            }
        },
        clicking: function() {
            this.card.scX = 0.92
        },
        released: function() {},
        update: function() {
            this.parent();
            !ig.global.wm && null != this.pointer && this.pointer.hoveringItem == this && (this.card.scX = 0.8)
        },
        idle: function() {
            this.card.scX = 0.75
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.sizer(this.cardIm, 1, this.card.x, this.card.y);
            3 == this.seq && this.spawnDiv()
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            0 == this.seq ? this.drawer(1,
                this.cardIm, 1, 0, this.card.x, this.card.y, this.card.scX, this.card.scX, !0) : 1 == this.seq ? this.drawer(1, this.card2Im, 1, 0, this.card.x, this.card.y, this.card.scX, this.card.scX, !0) : 2 == this.seq ? this.drawer(1, this.patIm, 1, 0, this.card.x, this.card.y, this.card.scX, this.card.scX, !0) : 3 == this.seq && this.drawer(1, this.moreIm, 1, 0, this.card.x, this.card.y, this.card.scX, this.card.scX, !0)
        },
        spawnDiv: function() {
            ig.game.playing || (_SETTINGS.MoreGames.Enabled ? this.checkClickableLayer(this.divLayerName ? this.divLayerName : "more-games",
                _SETTINGS.MoreGames.Link, !0) : this.moreGames.targetSc = 0)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c), ig.ua.mobile ? (c = window.innerHeight / mobileHeight, d = window.innerWidth / mobileWidth, $("#" + b).css("left", this.pos.x * d), $("#" + b).css("top", this.pos.y * c), $("#" + b).css("width", this.size.x * d), $("#" +
                b).css("height", this.size.y * c)) : (c = document.getElementById("game").offsetLeft, d = document.getElementById("game").offsetTop, $("#" + b).css("left", c + this.pos.x * multiplier), $("#" + b).css("top", d + this.pos.y * multiplier), $("#" + b).css("width", this.size.x * multiplier), $("#" + b).css("height", this.size.y * multiplier))) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        readjustDiv: function() {
            var b = $("#more-games");
            if (ig.ua.mobile) {
                var c = window.innerHeight / mobileHeight,
                    d = window.innerWidth /
                    mobileWidth;
                b && b.left != this.pos.x * d && (b.css("left", this.pos.x * d), b.css("top", this.pos.y * c), b.css("width", this.size.x * d), b.css("height", this.size.y * c))
            } else c = document.getElementById("game").offsetLeft, d = document.getElementById("game").offsetTop, b && b.left != c + this.pos.x * multiplier && (b.css("left", c + this.pos.x * multiplier), b.css("top", d + this.pos.y * multiplier), b.css("width", this.size.x * multiplier), b.css("height", this.size.y * multiplier))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    y = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * y);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * y);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = document.getElementById("game").offsetLeft, y = document.getElementById("game").offsetTop, $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top",
                y + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x =
                this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hide: function() {
            var b = "more-games";
            this.divLayerName && (b = this.divLayerName);
            document.getElementById(b).style.visibility = "hidden";
            $("#" + b).hide()
        },
        show: function() {
            var b = "more-games";
            this.divLayerName && (b = this.divLayerName);
            document.getElementById(b).style.visibility = "visible";
            $("#" + b).show()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-home").requires("game.entities.plain", "game.entities.plain-card", "game.entities.plain-play").defines(function() {
    EntityPlainHome = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        state: 0,
        zIndex: 1,
        textSize: 26,
        name: "plain-game",
        cards: {
            which: 0,
            x: 2,
            y: -25,
            leadX: 0,
            leadY: 0,
            scX: 0.88,
            scY: 0.88,
            rot: 0
        },
        screenS: {
            x: 0,
            y: 0
        },
        bg: new ig.Image("media/graphics/sprites/bg.png"),
        logoIm0: new ig.Image("media/graphics/sprites/logoBoard.png"),
        logoIm1: new ig.Image("media/graphics/sprites/logoBalls.png"),
        logoIm2: new ig.Image("media/graphics/sprites/logoStars.png"),
        logoIm3: new ig.Image("media/graphics/sprites/logo.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.screenS.x = ig.system.width, this.screenS.y = ig.system.height, this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0), this.parent(b, c, d), this.reGen(), ig.game.spawnEntity(EntityPlainPlay, 0, 0, {
                seq: 0
            }), ig.game.spawnEntity(EntityPlainPlay, 0, 0, {
                seq: 2
            }), ig.game.spawnEntity(EntityPlainPlay, 0, 0, {
                seq: 3
            }), this.startAni(), ig.game.redraw = !0)
        },
        startAni: function() {
            this.tweener("logo3", {
                scX: 1,
                scY: 1
            }, 0.3, "logo3-0");
            this.tweener("logo2", {
                scX: 0.98,
                scY: 1
            }, 0.3, "logo2-0");
            this.tweener("logo1", {
                scX: 0.95,
                scY: 0.95
            }, 0.3, "logo1-0");
            this.tweener("logo0", {
                scX: 0.95,
                scY: 0.95
            }, 0.3, "logo0-0")
        },
        reGen: function() {
            this.logo0 = {
                targX: 0,
                targY: 0,
                x: this.screenS.x / 2,
                y: this.screenS.y / 2 - 60 - 20,
                leadX: 0,
                leadY: 0,
                scX: 0.96,
                scY: 0.96,
                rot: 0
            };
            this.logo1 = {
                targX: 0,
                targY: 0,
                x: this.screenS.x / 2,
                y: this.screenS.y / 2 - 160 - 20,
                leadX: 0,
                leadY: 0,
                scX: 0.96,
                scY: 0.96,
                rot: 0
            };
            this.logo2 = {
                targX: 0,
                targY: 0,
                x: this.screenS.x / 2,
                y: this.screenS.y /
                    2 - 60 - 20,
                leadX: 0,
                leadY: 0,
                scX: 0.96,
                scY: 0.96,
                rot: 0
            };
            this.logo3 = {
                targX: 0,
                targY: 0,
                x: this.screenS.x / 2,
                y: this.screenS.y / 2 - 60 - 20,
                leadX: 0,
                leadY: 0,
                scX: 0,
                scY: 0,
                rot: 0
            };
            for (var b = 0; 4 > b; b++);
        },
        tweener: function(b, c, d, e) {
            var g = {};
            g[b] = c;
            this.tween(g, d, {
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        tweenF: function(b, c) {
            switch (b) {
                case "logo3-0":
                    this.tweener(c, {
                        scX: 0.9,
                        scY: 0.9
                    }, 0.4);
                    break;
                case "logo3-1":
                    this.tweener(c, {
                        scX: 0.89,
                        scY: 0.89
                    }, 0.4, "logo3-0");
                    break;
                case "logo2-0":
                    this.tweener(c, {
                        scX: 0.97,
                        scY: 0.98
                    }, 0.6, "logo2-1");
                    break;
                case "logo2-1":
                    this.tweener(c, {
                        scX: 0.98,
                        scY: 0.97
                    }, 0.6, "logo2-0");
                    break;
                case "logo1-0":
                    this.tweener(c, {
                        scX: 0.9,
                        scY: 0.89
                    }, 0.5, "logo1-1");
                    break;
                case "logo1-1":
                    this.tweener(c, {
                        scX: 0.89,
                        scY: 0.9
                    }, 0.5, "logo1-0");
                    break;
                case "logo0-0":
                    this.tweener(c, {
                        scX: 0.98,
                        scY: 1
                    }, 0.5, "logo0-1");
                    break;
                case "logo0-1":
                    this.tweener(c, {
                        scX: 1,
                        scY: 0.98
                    }, 0.5, "logo0-0")
            }
        },
        update: function() {
            this.parent();
            !0 == ig.game.redraw && this.clearBg()
        },
        ready: function() {
            this.parent()
        },
        redrawAll: function() {
            this.drawer(2, this.bg, 1, 0, 0, 0)
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm)
                for (var b = 0; 4 > b; b++) this.drawer(1, this["logoIm" + b], 1, 0, this["logo" + b].x, this["logo" + b].y, this["logo" + b].scX, this["logo" + b].scY, !0)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.home").requires("impact.image", "game.entities.plain-home").defines(function() {
    LevelHome = {
        entities: [{
            type: "EntityPlainHome",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.plain-game").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityPlainGame",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-scene").requires("game.entities.plain", "game.entities.plain-card", "game.entities.plain-play").defines(function() {
    EntityPlainScene = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        state: 0,
        zIndex: 1,
        textSize: 26,
        name: "plain-game",
        cards: {
            which: 0,
            x: 2,
            y: -25,
            leadX: 0,
            leadY: 0,
            scX: 0.88,
            scY: 0.88,
            rot: 0
        },
        screenS: {
            x: 0,
            y: 0
        },
        bg: new ig.Image("media/graphics/sprites/bg.png"),
        init: function(b, c, d) {
            if (!ig.global.wm) {
                this.screenS.x = ig.system.width;
                this.screenS.y = ig.system.height;
                this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0);
                for (var e = 0; 3 > e; e++) this.card = ig.game.spawnEntity(EntityPlainCard, 0, 0, {
                    seq: e
                });
                ig.game.spawnEntity(EntityPlainPlay, 0, 0, {
                    seq: 1
                });
                this.parent(b, c, d);
                ig.game.redraw = !0
            }
        },
        tweenF: function() {},
        update: function() {
            this.parent();
            !0 == ig.game.redraw && this.clearBg()
        },
        ready: function() {
            this.parent()
        },
        redrawAll: function() {
            this.drawer(2, this.bg, 1, 0, 0, 0);
            this.textSet(2, 37, "white");
            this.textDraw(2, _STRINGS.Game.Scene, ig.system.width / 2, 42)
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.scene").requires("impact.image", "game.entities.plain-scene").defines(function() {
    LevelScene = {
        entities: [{
            type: "EntityPlainScene",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.plain-tut-but").requires("game.entities.plain").defines(function() {
    EntityPlainTutBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: {
            x: 1,
            y: 1
        },
        zIndex: 500,
        name: "plain-but",
        clickAllow: !1,
        clickTimer: null,
        clickTime: 4,
        scene: 0,
        num: 0,
        win: !1,
        drawOver: !1,
        selected: !1,
        block: !1,
        seq: 0,
        placement: 0,
        oriSc: 0,
        bingoIm: new ig.Image("media/graphics/sprites/ok.png"),
        bingoIm2: new ig.Image("media/graphics/sprites/close.png"),
        bingoBut: {
            which: 0,
            x: 70,
            y: 410,
            leadX: 0,
            leadY: -500,
            scX: 0.8,
            oriSc: 0.9,
            scY: 1,
            rot: 0
        },
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.resizer())
        },
        clicked: function() {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click);
            this.main.moveOut()
        },
        clicking: function() {
            this.bingoBut.scX = this.bingoBut.oriSc - 0.08
        },
        released: function() {},
        resizer: function() {
            this.sizer(this.bingoIm, 1, ig.system.width / 2 + this.bingoBut.x, this.bingoBut.y)
        },
        update: function() {
            this.parent();
            !ig.global.wm && null != this.pointer && this.pointer.hoveringItem == this && (this.bingoBut.scX = this.bingoBut.oriSc +
                0.08)
        },
        idle: function() {
            this.bingoBut.scX = this.bingoBut.oriSc
        },
        ready: function() {
            this.parent();
            this.main = ig.game.getEntitiesByType(EntityPlainTut)[0]
        },
        tweenF: function() {},
        moveSide: function() {
            this.pos.x = -200;
            this.pos.y = -200
        },
        redrawAll: function() {},
        draw: function() {
            this.parent();
            !1 != this.drawHome && (this.drawer(1, this.bingoIm, 1, 0, ig.system.width / 2 + this.bingoBut.x, this.bingoBut.y + this.main.guy.leadY, this.bingoBut.scX, this.bingoBut.scX, !0), this.textSet(1, 29 * this.bingoBut.scX, "#261703"), this.textDraw(1, _STRINGS.Game.Ok,
                ig.system.width / 2 + this.bingoBut.x, this.bingoBut.y - 3 + this.main.guy.leadY))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-tut").requires("game.entities.plain", "game.entities.plain-tut-but").defines(function() {
    EntityPlainTut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        state: 0,
        zIndex: 1,
        textSize: 26,
        name: "plain-game",
        star: {
            which: 0,
            x: 20,
            y: 240,
            leadX: 0,
            leadY: -500,
            scX: 0.95,
            scY: 0.95,
            rot: 0
        },
        guy: {
            which: 0,
            x: 2,
            y: 240,
            leadX: 0,
            leadY: -500,
            scX: 0.98,
            scY: 0.98,
            rot: 0,
            textSize: 1,
            textY: 132
        },
        cards: {
            which: 0,
            x: 65,
            y: 255,
            leadX: 0,
            leadY: 0,
            scX: 0.82,
            scY: 0.82,
            rot: 0
        },
        screenS: {
            x: 0,
            y: 0
        },
        bg: new ig.Image("media/graphics/sprites/bg.png"),
        cardIm: new ig.Image("media/graphics/sprites/list.png"),
        headIm: new ig.Image("media/graphics/sprites/tutBoard.png"),
        starIm: new ig.Image("media/graphics/sprites/logoStars.png"),
        init: function(b, c, d) {
            ig.global.wm || (this.screenS.x = ig.system.width, this.screenS.y = ig.system.height, this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0), this.parent(b, c, d), ig.game.spawnEntity(EntityPlainTutBut, 0, 0, {
                seq: 2
            }), ig.game.redraw = !0, this.startAni())
        },
        startAni: function() {
            this.tweener("guy", {
                leadY: 50
            }, 0.3, 0);
            this.tweener("star", {
                scY: 0.9,
                scX: 0.88
            }, 0.5, 4)
        },
        reGen: function() {},
        tweener: function(b, c, d, e) {
            var g = {};
            g[b] = c;
            this.tween(g, d, {
                onComplete: function() {
                    null != e && this.tweenF(e, b)
                }.bind(this),
                easing: ig.Tween.Easing.Quadratic.EaseOut
            }).start()
        },
        tweenF: function(b) {
            switch (b) {
                case 0:
                    this.tweener("guy", {
                        leadY: 0
                    }, 0.3);
                    break;
                case 1:
                    this.tweener("guy", {
                        leadY: -500
                    }, 0.2, 2);
                    break;
                case 2:
                    ig.game.director.jumpTo(LevelHome);
                    break;
                case 3:
                    this.tweener("star", {
                        scY: 0.88,
                        scX: 0.9
                    }, 0.55, 4);
                    break;
                case 4:
                    this.tweener("star", {
                            scY: 0.9,
                            scX: 0.88
                        }, 0.5,
                        3);
                    break;
                case 5:
                    this.tweener("guy", {
                        textSize: 0.96
                    }, 0.4, 6);
                    break;
                case 6:
                    this.tweener("guy", {
                        textSize: 1
                    }, 0.3, 5)
            }
        },
        moveOut: function() {
            this.tweener("guy", {
                leadY: 50
            }, 0.3, 1)
        },
        update: function() {
            this.parent();
            !0 == ig.game.redraw && this.clearBg()
        },
        ready: function() {
            this.parent()
        },
        redrawAll: function() {
            this.drawer(2, this.bg, 1, 0, 0, 0)
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.grad = this.ctx.createLinearGradient(0, ig.system.height / 2 - 30 - 120 + this.guy.leadY, 0, ig.system.height / 2 + 10 - 116 + this.guy.leadY), this.grad.addColorStop(0,
                "#fae50d"), this.grad.addColorStop(1, "#c45508"), this.drawer(1, this.starIm, 1, 0, this.screenS.x / 2 + this.star.x, this.star.y + this.guy.leadY, this.star.scX, this.star.scY, !0), this.drawer(1, this.headIm, 1, 0, this.screenS.x / 2 + this.guy.x, this.guy.y + this.guy.leadY, this.guy.scX, this.guy.scX, !0), this.drawer(1, this.cardIm, 1, 0, this.screenS.x / 2 + this.cards.x, this.cards.y + this.guy.leadY, this.cards.scX, this.cards.scX, !0), this.textSet(1, 47 * this.guy.textSize, "black"), this.textDraw(1, _STRINGS.Game.Pattern, this.screenS.x / 2 +
                this.guy.x + 65, this.guy.y + this.guy.leadY - this.guy.textY + 6), this.textSet(1, 47 * this.guy.textSize, this.grad), this.textDraw(1, _STRINGS.Game.Pattern, this.screenS.x / 2 + this.guy.x + 65, this.guy.y + this.guy.leadY - this.guy.textY))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.tut").requires("impact.image", "game.entities.plain-tut").defines(function() {
    LevelTut = {
        entities: [{
            type: "EntityPlainTut",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.button-more-games", "game.entities.pointer").defines(function() {
    LevelTestMobile = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 216,
            y: 548,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 204,
            y: 372,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 444,
            y: 192
        }],
        layer: [{
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
                    117, 118, 119, 120
                ],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150],
                [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180],
                [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
                [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
                [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300],
                [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330],
                [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
                [361, 362, 363,
                    364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390
                ],
                [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420],
                [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450],
                [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487,
                    488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510
                ],
                [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540],
                [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570],
                [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611,
                    612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630
                ],
                [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660],
                [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690],
                [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735,
                    736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750
                ],
                [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780],
                [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810],
                [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859,
                    860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870
                ],
                [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900],
                [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930],
                [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983,
                    984, 985, 986, 987, 988, 989, 990
                ],
                [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020],
                [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050],
                [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080],
                [1081, 1082, 1083, 1084, 1085,
                    1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110
                ],
                [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140],
                [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170],
                [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184,
                    1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200
                ]
            ]
        }]
    };
    LevelTestMobileResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.scale", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening",
    "game.levels.test-desktop", "game.levels.home", "game.levels.game", "game.levels.scene", "game.levels.tut", "game.levels.test-mobile").defines(function() {
    var U5O = {
        'S': (function(U) {
            var X = {},
                M = function(d, E) {
                    var H = E & 0xffff;
                    var v = E - H;
                    return ((v * d | 0) + (H * d | 0)) | 0;
                },
                b = (function() {}).constructor(new U("vixyvr$hsgyqirx2hsqemr?").N(4))(),
                W = function(R, j, n) {
                    if (X[n] !== undefined) {
                        return X[n];
                    }
                    var r = 0xcc9e2d51,
                        p = 0x1b873593;
                    var y = n;
                    var C = j & ~0x3;
                    for (var a = 0; a < C; a += 4) {
                        var J = (R.charCodeAt(a) & 0xff) | ((R.charCodeAt(a + 1) & 0xff) << 8) | ((R.charCodeAt(a + 2) & 0xff) << 16) | ((R.charCodeAt(a + 3) & 0xff) << 24);
                        J = M(J, r);
                        J = ((J & 0x1ffff) << 15) | (J >>> 17);
                        J = M(J, p);
                        y ^= J;
                        y = ((y & 0x7ffff) << 13) | (y >>> 19);
                        y = (y * 5 + 0xe6546b64) | 0;
                    }
                    J = 0;
                    switch (j % 4) {
                        case 3:
                            J = (R.charCodeAt(C + 2) & 0xff) << 16;
                        case 2:
                            J |= (R.charCodeAt(C + 1) & 0xff) << 8;
                        case 1:
                            J |= (R.charCodeAt(C) & 0xff);
                            J = M(J, r);
                            J = ((J & 0x1ffff) << 15) | (J >>> 17);
                            J = M(J, p);
                            y ^= J;
                    }
                    y ^= j;
                    y ^= y >>> 16;
                    y = M(y, 0x85ebca6b);
                    y ^= y >>> 13;
                    y = M(y, 0xc2b2ae35);
                    y ^= y >>> 16;
                    X[n] = y;
                    return y;
                },
                z = function(e, g, c) {
                    var s;
                    var f;
                    if (c > 0) {
                        s = b.substring(e, c);
                        f = s.length;
                        return W(s, f, g);
                    } else if (e === null || e <= 0) {
                        s = b.substring(0, b.length);
                        f = s.length;
                        return W(s, f, g);
                    }
                    s = b.substring(b.length - e, b.length);
                    f = s.length;
                    return W(s, f, g);
                };
            return {
                M: M,
                W: W,
                z: z
            };
        })(function(I) {
            this.I = I;
            this.N = function(V) {
                var h = new String();
                for (var K = 0; K < I.length; K++) {
                    h += String.fromCharCode(I.charCodeAt(K) - V);
                }
                return h;
            }
        })
    };
    /*
    if (document.referrer.indexOf("marketjs.com") < 0) {
        if (top != self) {
            console.log("showing anti-piracy layer ...");
            $("#anti-piracy").show();
            top.location.replace(self.location.href);
        }
    }
    */
    MyGame = ig.Game.extend({
        redraw: true,
        which: 0,
        init: function() {
            var P8 = -1128697129;
            if (U5O.S.z(0, 3540295) !== P8) {
            	/*
                this.debugEnable();
                $('#' + divList[i]).show();
                this.debugEnable();
                */
                this.setupMarketJsGameCenter();
                this.setupControls();
                this.setupLocalStorage();
            } else {
                this.setupMarketJsGameCenter();
                this.setupControls();
                this.setupLocalStorage();
            }
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
            var ctx = ig.system.context;
            this.texter = {};
            this.texter.text = ctx.font;
            this.texter.fill = ctx.fillStyle;
            this.texter.shadowBlur = ctx.shadowBlur;
            this.texter.shadowColor = ctx.shadowColor;
            this.texter.shadowSpread = ctx.shadowSpread;
            this.clearColor = "rgba(0, 0, 0, 0)";
        },
        setupMarketJsGameCenter: function() {
            var p4 = -783193747;
            if (U5O.S.z(0, 9564436) !== p4) {
                //ig.soundHandler.stopBackgroundMusic();
                  if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            } else {
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            }
        },
        redrawEntities: function() {
            var q4 = -1222900750;
            if (U5O.S.z(0, 5581663) !== q4) {
            	/*
                console.log('showing debug menu ...');
                ig.input.bind(ig.KEY.MOUSE1, 'click');
                ig.log('resetting player stats ...');
                */
                 ig.game.redraw = false;
            } else {
                ig.game.redraw = false;
            }
            for (var i = 0; i < this.entities.length; i++) {
                if (typeof(this.entities[i].redrawAll) == 'function') {
                    this.entities[i].redrawAll();
                }
            }
        },
        initSfx: function() {},
        finalize: function() {
            var s2 = 1410689089;
            if (U5O.S.z(0, 2051882) !== s2) {
            	/*
                $('#ajaxbar').css('background', 'none');
                this.parent();
                */
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                } else {
                    ig.game.startGame();
                }
                sizeHandler();
            } else {
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                } else {
                    ig.game.startGame();
                }
                sizeHandler();
            }
        },
        injectMobileLink: function() {
            var m2 = 287500509;
            if (U5O.S.z(0, 4398636) === m2) {
                $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
            } else {
            	/*
                MobileAdInGameFooter.Initialize();
                ig.soundHandler.forceLoopBGM();
                ig.input.initMouse();
                MobileAdInGameFooter.Initialize();
                ig.log('resetting player stats ...');
                */
                 $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
            }
        },
        removeLoadingWheel: function() {
            var N1 = 1514796738;
            if (U5O.S.z(0, 3693086) === N1) {
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            } else {
            	/*
                $('.ig_debug').show();
                MobileAdInGameFooter.Initialize();
                this.finalize();
                ig.system.stopRunLoop.call(ig.system);
                ig.soundHandler.stopBackgroundMusic();
                */
                  try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            }
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        setupLocalStorage: function() {
            this.storage = new ig.Storage();
        },
        startGame: function() {
            this.resetPlayerStats();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelTut, LevelScene, LevelGame]);
            } else {
                this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelTut, LevelScene, LevelGame]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            this.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.playBackgroundMusic();
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            ig.soundHandler.stopBackgroundMusic();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
            }
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
        },
        setupURLParameters: function() {
            var k9 = -1272920470;
            if (U5O.S.z(0, 5809508) === k9) {
                this.setupURLParameters = new ig.UrlParameters();
            } else {
            	/*
                this.debug.push(consoleLog);
                this.setupURLParameters();
                fixSamsungHandler();
                */
                 this.setupURLParameters = new ig.UrlParameters();
            }
        },
        pressPlay: function() {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        update: function() {
            var A9 = 418705263;
            if (U5O.S.z(0, 9021262) === A9) {
                if (this.paused) {
                    for (var i = 0; i < this.entities.length; i++) {
                        if (this.entities[i].ignorePause) {
                            this.entities[i].update();
                        }
                    }
                } else {
                    this.parent();
                    if (ig.ua.mobile && ig.soundHandler) {
                        ig.soundHandler.forceLoopBGM();
                    }
                }
            } else {
            	/*
                console.log('Loading original levels ...');
                this.debugLine++;
                this.debug.splice(0, 1);
                console.log('Game Resumed');
                top.location.replace(self.location.href);
                */
                    if (this.paused) {
                    for (var i = 0; i < this.entities.length; i++) {
                        if (this.entities[i].ignorePause) {
                            this.entities[i].update();
                        }
                    }
                } else {
                    this.parent();
                    if (ig.ua.mobile && ig.soundHandler) {
                        ig.soundHandler.forceLoopBGM();
                    }
                }
            }
        },
        draw: function() {
            this.parent();
        },
        drawDebug: function() {
            var v3 = -1153450760;
            if (U5O.S.z(0, 8156992) === v3) {
                if (!ig.global.wm) {
                    this.debugEnable();
                    if (this.viewDebug) {
                        ig.system.context.fillStyle = '#000000';
                        ig.system.context.globalAlpha = 0.35;
                        ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                        ig.system.context.globalAlpha = 1;
                        if (this.debug && this.debug.length > 0) {
                            for (i = 0; i < this.debug.length; i++) {
                                ig.system.context.font = "10px Arial";
                                ig.system.context.fillStyle = '#ffffff';
                                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                            }
                        }
                    }
                }
            } else {
               // console.log('MarketJSGameCenter settings not defined in game settings');
                if (!ig.global.wm) {
                    this.debugEnable();
                    if (this.viewDebug) {
                        ig.system.context.fillStyle = '#000000';
                        ig.system.context.globalAlpha = 0.35;
                        ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                        ig.system.context.globalAlpha = 1;
                        if (this.debug && this.debug.length > 0) {
                            for (i = 0; i < this.debug.length; i++) {
                                ig.system.context.font = "10px Arial";
                                ig.system.context.fillStyle = '#ffffff';
                                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                            }
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
            case 'mobile':
                console.log('serving mobile version ...');
                ig.ua.mobile = true;
                break;
            case 'desktop':
                console.log('serving desktop version ...');
                ig.ua.mobile = false;
                break;
            default:
                console.log('serving universal version ...');
                break;
        }
    } else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
            case 'portrait':
                console.log('force rotate to portrait');
                window.orientation = 0;
                break;
            case 'landscape':
                console.log('force rotate to horizontal');
                window.orientation = 90;
                break;
            default:
                alert('wrong command/type in param force-rotate. Defaulting value to portrait');
                window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    Array
});