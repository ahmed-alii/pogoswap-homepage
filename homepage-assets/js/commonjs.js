/*! For license information please see commonjs.js.LICENSE.txt */
(() => {
    var e = {
        780: (e, t, n) => {
            !function e(t, n, r) {
                function o(a, s) {
                    if (!n[a]) {
                        if (!t[a]) {
                            if (i) return i(a, !0);
                            var l = new Error("Cannot find module '" + a + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var u = n[a] = {exports: {}};
                        t[a][0].call(u.exports, (function (e) {
                            return o(t[a][1][e] || e)
                        }), u, u.exports, e, t, n, r)
                    }
                    return n[a].exports
                }

                for (var i = void 0, a = 0; a < r.length; a++) o(r[a]);
                return o
            }({
                1: [function (e, t, n) {
                    "use strict";

                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    Object.defineProperty(n, "__esModule", {value: !0}), n.default = void 0;
                    var o = function () {
                        function e() {
                            !function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e)
                        }

                        var t, n;
                        return t = e, n = [{
                            key: "getCookieExpiresString", value: function (e) {
                                var t = new Date, n = new Date(t.getTime() + e);
                                return "expires=".concat(n.toGMTString(), ";")
                            }
                        }, {
                            key: "bake", value: function (t, n) {
                                document.cookie = "smartbanner_exited=1; ".concat(t ? e.getCookieExpiresString(t) : "", " path=").concat(n)
                            }
                        }, {
                            key: "unbake", value: function () {
                                document.cookie = "smartbanner_exited=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                            }
                        }, {
                            key: "baked", get: function () {
                                return "1" === document.cookie.replace(/(?:(?:^|.*;\s*)smartbanner_exited\s*=\s*([^;]*).*$)|^.*$/, "$1")
                            }
                        }], null && r(t.prototype, null), n && r(t, n), e
                    }();
                    n.default = o
                }, {}], 2: [function (e, t, r) {
                    (function (e) {
                        "use strict";

                        function t(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }

                        Object.defineProperty(r, "__esModule", {value: !0}), r.default = void 0;
                        var n = function () {
                            function n() {
                                !function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, n)
                            }

                            var r, o;
                            return r = n, o = [{
                                key: "platform", value: function () {
                                    return /iPhone|iPad|iPod/i.test(window.navigator.userAgent) ? "ios" : /Android/i.test(window.navigator.userAgent) ? "android" : void 0
                                }
                            }, {
                                key: "userAgentMatchesRegex", value: function (e) {
                                    return new RegExp(e).test(window.navigator.userAgent)
                                }
                            }, {
                                key: "jQueryMobilePage", value: function () {
                                    return void 0 !== e.$ && "undefined" !== e.$.mobile && null !== document.querySelector(".ui-page")
                                }
                            }, {
                                key: "wrapperElement", value: function () {
                                    var e = n.jQueryMobilePage() ? ".ui-page" : "html";
                                    return document.querySelectorAll(e)
                                }
                            }], null && t(r.prototype, null), o && t(r, o), n
                        }();
                        r.default = n
                    }).call(this, void 0 !== n.g ? n.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}], 3: [function (e, t, n) {
                    "use strict";
                    var r, o, i = (r = e("./smartbanner.js")) && r.__esModule ? r : {default: r};
                    window.addEventListener("load", (function () {
                        (o = new i.default).apiEnabled ? window.smartbanner = o : o.publish()
                    }))
                }, {"./smartbanner.js": 5}], 4: [function (e, t, n) {
                    "use strict";

                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    Object.defineProperty(n, "__esModule", {value: !0}), n.default = void 0;
                    var o = function () {
                        function e() {
                            !function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e)
                        }

                        var t, n;
                        return t = e, (n = [{
                            key: "parse", value: function () {
                                var e = document.getElementsByTagName("meta"), t = {};
                                return Array.apply(null, e).forEach((function (e) {
                                    var n = null, r = e.getAttribute("name"), o = e.getAttribute("content");
                                    r && o && function (e) {
                                        return -1 !== e.indexOf("smartbanner:") && e.split(":")[1].length > 0
                                    }(r) && o.length > 0 && (-1 !== (n = r.split(":")[1]).indexOf("-") && (n = function (e) {
                                        var t = e.split("-");
                                        return t.map((function (e, n) {
                                            n > 0 && (t[n] = e.charAt(0).toUpperCase() + e.substring(1))
                                        })), t.join("")
                                    }(n)), t[n] = o)
                                })), t
                            }
                        }]) && r(t.prototype, n), e
                    }();
                    n.default = o
                }, {}], 5: [function (e, t, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0}), n.default = void 0;
                    var r = a(e("./optionparser.js")), o = a(e("./detector.js")), i = a(e("./bakery.js"));

                    function a(e) {
                        return e && e.__esModule ? e : {default: e}
                    }

                    function s(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    var l = "data-smartbanner-original-top", u = "data-smartbanner-original-margin-top";

                    function c(e) {
                        this.positioningDisabled || f(e.data.height)
                    }

                    function f(e) {
                        for (var t, n = o.default.wrapperElement(), r = 0, i = n.length; r < i; r++) if (t = n[r], o.default.jQueryMobilePage()) {
                            if (t.getAttribute(l)) continue;
                            var a = parseFloat(getComputedStyle(t).top);
                            t.setAttribute(l, isNaN(a) ? 0 : a), t.style.top = e + "px"
                        } else {
                            if (t.getAttribute(u)) continue;
                            var s = parseFloat(getComputedStyle(t).marginTop);
                            t.setAttribute(u, isNaN(s) ? 0 : s), t.style.marginTop = e + "px"
                        }
                    }

                    var d = function () {
                        function e() {
                            !function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e);
                            var t = new r.default;
                            this.options = t.parse(), this.platform = o.default.platform();
                            var n = new Event("smartbanner.init");
                            document.dispatchEvent(n)
                        }

                        var t, n;
                        return t = e, (n = [{
                            key: "publish", value: function () {
                                if (0 === Object.keys(this.options).length) throw new Error("No options detected. Please consult documentation.");
                                if (i.default.baked) return !1;
                                if (this.userAgentExcluded) return !1;
                                if (!this.platformEnabled && !this.userAgentIncluded) return !1;
                                var e = document.createElement("div");
                                document.querySelector("body").appendChild(e), e.outerHTML = this.html;
                                var t = new Event("smartbanner.view");
                                document.dispatchEvent(t), this.positioningDisabled || f(this.height), function (e) {
                                    document.querySelector(".js_smartbanner__exit").addEventListener("click", (function (t) {
                                        return function (e, t) {
                                            t.exit(), e.preventDefault()
                                        }(t, e)
                                    })), document.querySelector(".js_smartbanner__button").addEventListener("click", (function (t) {
                                        return function (e, t) {
                                            t.clickout()
                                        }(0, e)
                                    })), o.default.jQueryMobilePage() && $(document).on("pagebeforeshow", e, c)
                                }(this)
                            }
                        }, {
                            key: "exit", value: function () {
                                o.default.jQueryMobilePage() && $(document).off("pagebeforeshow", c), this.positioningDisabled || function () {
                                    for (var e, t = o.default.wrapperElement(), n = 0, r = t.length; n < r; n++) e = t[n], o.default.jQueryMobilePage() && e.getAttribute(l) ? e.style.top = e.getAttribute(l) + "px" : e.getAttribute(u) && (e.style.marginTop = e.getAttribute(u) + "px")
                                }();
                                var e = document.querySelector(".js_smartbanner");
                                document.querySelector("body").removeChild(e);
                                var t = new Event("smartbanner.exit");
                                document.dispatchEvent(t), i.default.bake(this.hideTtl, this.hidePath)
                            }
                        }, {
                            key: "clickout", value: function () {
                                var e = new Event("smartbanner.clickout");
                                document.dispatchEvent(e)
                            }
                        }, {
                            key: "originalTop", get: function () {
                                var e = o.default.wrapperElement()[0];
                                return parseFloat(e.getAttribute(l))
                            }
                        }, {
                            key: "originalTopMargin", get: function () {
                                var e = o.default.wrapperElement()[0];
                                return parseFloat(e.getAttribute(u))
                            }
                        }, {
                            key: "priceSuffix", get: function () {
                                return "ios" === this.platform ? this.options.priceSuffixApple : "android" === this.platform ? this.options.priceSuffixGoogle : ""
                            }
                        }, {
                            key: "icon", get: function () {
                                return "android" === this.platform ? this.options.iconGoogle : this.options.iconApple
                            }
                        }, {
                            key: "buttonUrl", get: function () {
                                return "android" === this.platform ? this.options.buttonUrlGoogle : "ios" === this.platform ? this.options.buttonUrlApple : "#"
                            }
                        }, {
                            key: "closeLabel", get: function () {
                                return void 0 !== this.options.closeLabel ? this.options.closeLabel : "Close"
                            }
                        }, {
                            key: "html", get: function () {
                                var e = this.options.customDesignModifier ? this.options.customDesignModifier : this.platform;
                                return '<div class="smartbanner smartbanner--'.concat(e, ' js_smartbanner">\n      <a href="javascript:void();" class="smartbanner__exit js_smartbanner__exit" aria-label="').concat(this.closeLabel, '"></a>\n      <div class="smartbanner__icon" style="background-image: url(').concat(this.icon, ');"></div>\n      <div class="smartbanner__info">\n        <div>\n          <div class="smartbanner__info__title">').concat(this.options.title, '</div>\n          <div class="smartbanner__info__author">').concat(this.options.author, '</div>\n          <div class="smartbanner__info__price">').concat(this.options.price).concat(this.priceSuffix, '</div>\n        </div>\n      </div>\n      <a href="').concat(this.buttonUrl, '" target="_blank" class="smartbanner__button js_smartbanner__button" rel="noopener" aria-label="').concat(this.options.button, '"><span class="smartbanner__button__label">').concat(this.options.button, "</span></a>\n    </div>")
                            }
                        }, {
                            key: "height", get: function () {
                                try {
                                    return document.querySelector(".js_smartbanner").offsetHeight
                                } catch (e) {
                                    return 0
                                }
                            }
                        }, {
                            key: "platformEnabled", get: function () {
                                var e = this.options.enabledPlatforms || "android,ios";
                                return e && -1 !== e.replace(/\s+/g, "").split(",").indexOf(this.platform)
                            }
                        }, {
                            key: "positioningDisabled", get: function () {
                                return "true" === this.options.disablePositioning
                            }
                        }, {
                            key: "apiEnabled", get: function () {
                                return "true" === this.options.api
                            }
                        }, {
                            key: "userAgentExcluded", get: function () {
                                return !!this.options.excludeUserAgentRegex && o.default.userAgentMatchesRegex(this.options.excludeUserAgentRegex)
                            }
                        }, {
                            key: "userAgentIncluded", get: function () {
                                return !!this.options.includeUserAgentRegex && o.default.userAgentMatchesRegex(this.options.includeUserAgentRegex)
                            }
                        }, {
                            key: "hideTtl", get: function () {
                                return !!this.options.hideTtl && parseInt(this.options.hideTtl)
                            }
                        }, {
                            key: "hidePath", get: function () {
                                return this.options.hidePath ? this.options.hidePath : "/"
                            }
                        }]) && s(t.prototype, n), e
                    }();
                    n.default = d
                }, {"./bakery.js": 1, "./detector.js": 2, "./optionparser.js": 4}]
            }, {}, [3])
        }, 496: e => {
            e.exports = function () {
                var e = {};
                Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = function (e) {
                    return !(!e || !e.Window) && e instanceof e.Window
                };
                var t = {};
                Object.defineProperty(t, "__esModule", {value: !0}), t.init = o, t.getWindow = function (t) {
                    return (0, e.default)(t) ? t : (t.ownerDocument || t).defaultView || r.window
                }, t.window = t.realWindow = void 0;
                var n = void 0;
                t.realWindow = n;
                var r = void 0;

                function o(e) {
                    t.realWindow = n = e;
                    var o = e.document.createTextNode("");
                    o.ownerDocument !== e.document && "function" == typeof e.wrap && e.wrap(o) === o && (e = e.wrap(e)), t.window = r = e
                }

                t.window = r, "undefined" != typeof window && window && o(window);
                var i = {};

                function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
                var s = function (e) {
                    return !!e && "object" === a(e)
                }, l = function (e) {
                    return "function" == typeof e
                }, u = {
                    window: function (n) {
                        return n === t.window || (0, e.default)(n)
                    }, docFrag: function (e) {
                        return s(e) && 11 === e.nodeType
                    }, object: s, func: l, number: function (e) {
                        return "number" == typeof e
                    }, bool: function (e) {
                        return "boolean" == typeof e
                    }, string: function (e) {
                        return "string" == typeof e
                    }, element: function (e) {
                        if (!e || "object" !== a(e)) return !1;
                        var n = t.getWindow(e) || t.window;
                        return /object|function/.test(a(n.Element)) ? e instanceof n.Element : 1 === e.nodeType && "string" == typeof e.nodeName
                    }, plainObject: function (e) {
                        return s(e) && !!e.constructor && /function Object\b/.test(e.constructor.toString())
                    }, array: function (e) {
                        return s(e) && void 0 !== e.length && l(e.splice)
                    }
                };
                i.default = u;
                var c = {};

                function f(e) {
                    var t = e.interaction;
                    if ("drag" === t.prepared.name) {
                        var n = t.prepared.axis;
                        "x" === n ? (t.coords.cur.page.y = t.coords.start.page.y, t.coords.cur.client.y = t.coords.start.client.y, t.coords.velocity.client.y = 0, t.coords.velocity.page.y = 0) : "y" === n && (t.coords.cur.page.x = t.coords.start.page.x, t.coords.cur.client.x = t.coords.start.client.x, t.coords.velocity.client.x = 0, t.coords.velocity.page.x = 0)
                    }
                }

                function d(e) {
                    var t = e.iEvent, n = e.interaction;
                    if ("drag" === n.prepared.name) {
                        var r = n.prepared.axis;
                        if ("x" === r || "y" === r) {
                            var o = "x" === r ? "y" : "x";
                            t.page[o] = n.coords.start.page[o], t.client[o] = n.coords.start.client[o], t.delta[o] = 0
                        }
                    }
                }

                Object.defineProperty(c, "__esModule", {value: !0}), c.default = void 0;
                var p = {
                    id: "actions/drag",
                    install: function (e) {
                        var t = e.actions, n = e.Interactable, r = e.defaults;
                        n.prototype.draggable = p.draggable, t.map.drag = p, t.methodDict.drag = "draggable", r.actions.drag = p.defaults
                    },
                    listeners: {
                        "interactions:before-action-move": f,
                        "interactions:action-resume": f,
                        "interactions:action-move": d,
                        "auto-start:check": function (e) {
                            var t = e.interaction, n = e.interactable, r = e.buttons, o = n.options.drag;
                            if (o && o.enabled && (!t.pointerIsDown || !/mouse|pointer/.test(t.pointerType) || 0 != (r & n.options.drag.mouseButtons))) return e.action = {
                                name: "drag",
                                axis: "start" === o.lockAxis ? o.startAxis : o.lockAxis
                            }, !1
                        }
                    },
                    draggable: function (e) {
                        return i.default.object(e) ? (this.options.drag.enabled = !1 !== e.enabled, this.setPerAction("drag", e), this.setOnEvents("drag", e), /^(xy|x|y|start)$/.test(e.lockAxis) && (this.options.drag.lockAxis = e.lockAxis), /^(xy|x|y)$/.test(e.startAxis) && (this.options.drag.startAxis = e.startAxis), this) : i.default.bool(e) ? (this.options.drag.enabled = e, this) : this.options.drag
                    },
                    beforeMove: f,
                    move: d,
                    defaults: {startAxis: "xy", lockAxis: "xy"},
                    getCursor: function () {
                        return "move"
                    }
                }, v = p;
                c.default = v;
                var h = {};
                Object.defineProperty(h, "__esModule", {value: !0}), h.default = void 0;
                var g = {
                    init: function (e) {
                        var t = e;
                        g.document = t.document, g.DocumentFragment = t.DocumentFragment || m, g.SVGElement = t.SVGElement || m, g.SVGSVGElement = t.SVGSVGElement || m, g.SVGElementInstance = t.SVGElementInstance || m, g.Element = t.Element || m, g.HTMLElement = t.HTMLElement || g.Element, g.Event = t.Event, g.Touch = t.Touch || m, g.PointerEvent = t.PointerEvent || t.MSPointerEvent
                    },
                    document: null,
                    DocumentFragment: null,
                    SVGElement: null,
                    SVGSVGElement: null,
                    SVGElementInstance: null,
                    Element: null,
                    HTMLElement: null,
                    Event: null,
                    Touch: null,
                    PointerEvent: null
                };

                function m() {
                }

                var y = g;
                h.default = y;
                var b = {};
                Object.defineProperty(b, "__esModule", {value: !0}), b.default = void 0;
                var x = {
                    init: function (e) {
                        var t = h.default.Element, n = e.navigator || {};
                        x.supportsTouch = "ontouchstart" in e || i.default.func(e.DocumentTouch) && h.default.document instanceof e.DocumentTouch, x.supportsPointerEvent = !1 !== n.pointerEnabled && !!h.default.PointerEvent, x.isIOS = /iP(hone|od|ad)/.test(n.platform), x.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), x.isIe9 = /MSIE 9/.test(n.userAgent), x.isOperaMobile = "Opera" === n.appName && x.supportsTouch && /Presto/.test(n.userAgent), x.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", x.pEventTypes = x.supportsPointerEvent ? h.default.PointerEvent === e.MSPointerEvent ? {
                            up: "MSPointerUp",
                            down: "MSPointerDown",
                            over: "mouseover",
                            out: "mouseout",
                            move: "MSPointerMove",
                            cancel: "MSPointerCancel"
                        } : {
                            up: "pointerup",
                            down: "pointerdown",
                            over: "pointerover",
                            out: "pointerout",
                            move: "pointermove",
                            cancel: "pointercancel"
                        } : null, x.wheelEvent = h.default.document && "onmousewheel" in h.default.document ? "mousewheel" : "wheel"
                    },
                    supportsTouch: null,
                    supportsPointerEvent: null,
                    isIOS7: null,
                    isIOS: null,
                    isIe9: null,
                    isOperaMobile: null,
                    prefixedMatchesSelector: null,
                    pEventTypes: null,
                    wheelEvent: null
                }, w = x;
                b.default = w;
                var _ = {};

                function E(e) {
                    var t = e.parentNode;
                    if (i.default.docFrag(t)) {
                        for (; (t = t.host) && i.default.docFrag(t);) ;
                        return t
                    }
                    return t
                }

                function P(e, n) {
                    return t.window !== t.realWindow && (n = n.replace(/\/deep\//g, " ")), e[b.default.prefixedMatchesSelector](n)
                }

                Object.defineProperty(_, "__esModule", {value: !0}), _.nodeContains = function (e, t) {
                    if (e.contains) return e.contains(t);
                    for (; t;) {
                        if (t === e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }, _.closest = function (e, t) {
                    for (; i.default.element(e);) {
                        if (P(e, t)) return e;
                        e = E(e)
                    }
                    return null
                }, _.parentNode = E, _.matchesSelector = P, _.indexOfDeepestElement = function (e) {
                    for (var n, r = [], o = 0; o < e.length; o++) {
                        var i = e[o], a = e[n];
                        if (i && o !== n) if (a) {
                            var s = O(i), l = O(a);
                            if (s !== i.ownerDocument) if (l !== i.ownerDocument) if (s !== l) {
                                r = r.length ? r : S(a);
                                var u = void 0;
                                if (a instanceof h.default.HTMLElement && i instanceof h.default.SVGElement && !(i instanceof h.default.SVGSVGElement)) {
                                    if (i === l) continue;
                                    u = i.ownerSVGElement
                                } else u = i;
                                for (var c = S(u, a.ownerDocument), f = 0; c[f] && c[f] === r[f];) f++;
                                var d = [c[f - 1], c[f], r[f]];
                                if (d[0]) for (var p = d[0].lastChild; p;) {
                                    if (p === d[1]) {
                                        n = o, r = c;
                                        break
                                    }
                                    if (p === d[2]) break;
                                    p = p.previousSibling
                                }
                            } else v = i, g = a, (parseInt(t.getWindow(v).getComputedStyle(v).zIndex, 10) || 0) >= (parseInt(t.getWindow(g).getComputedStyle(g).zIndex, 10) || 0) && (n = o); else n = o
                        } else n = o
                    }
                    var v, g;
                    return n
                }, _.matchesUpTo = function (e, t, n) {
                    for (; i.default.element(e);) {
                        if (P(e, t)) return !0;
                        if ((e = E(e)) === n) return P(e, t)
                    }
                    return !1
                }, _.getActualElement = function (e) {
                    return e.correspondingUseElement || e
                }, _.getScrollXY = T, _.getElementClientRect = k, _.getElementRect = function (e) {
                    var n = k(e);
                    if (!b.default.isIOS7 && n) {
                        var r = T(t.getWindow(e));
                        n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y
                    }
                    return n
                }, _.getPath = function (e) {
                    for (var t = []; e;) t.push(e), e = E(e);
                    return t
                }, _.trySelector = function (e) {
                    return !!i.default.string(e) && (h.default.document.querySelector(e), !0)
                };
                var O = function (e) {
                    return e.parentNode || e.host
                };

                function S(e, t) {
                    for (var n, r = [], o = e; (n = O(o)) && o !== t && n !== o.ownerDocument;) r.unshift(o), o = n;
                    return r
                }

                function T(e) {
                    return {
                        x: (e = e || t.window).scrollX || e.document.documentElement.scrollLeft,
                        y: e.scrollY || e.document.documentElement.scrollTop
                    }
                }

                function k(e) {
                    var t = e instanceof h.default.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
                    return t && {
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        bottom: t.bottom,
                        width: t.width || t.right - t.left,
                        height: t.height || t.bottom - t.top
                    }
                }

                var M = {};
                Object.defineProperty(M, "__esModule", {value: !0}), M.default = function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e
                };
                var j = {};

                function I(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function A(e, t, n) {
                    return "parent" === e ? (0, _.parentNode)(n) : "self" === e ? t.getRect(n) : (0, _.closest)(n, e)
                }

                Object.defineProperty(j, "__esModule", {value: !0}), j.getStringOptionResult = A, j.resolveRectLike = function (e, t, n, r) {
                    var o, a = e;
                    return i.default.string(a) ? a = A(a, t, n) : i.default.func(a) && (a = a.apply(void 0, function (e) {
                        if (Array.isArray(e)) return I(e)
                    }(o = r) || function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(o) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return I(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I(e, t) : void 0
                        }
                    }(o) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())), i.default.element(a) && (a = (0, _.getElementRect)(a)), a
                }, j.rectToXY = function (e) {
                    return e && {x: "x" in e ? e.x : e.left, y: "y" in e ? e.y : e.top}
                }, j.xywhToTlbr = function (e) {
                    return !e || "left" in e && "top" in e || ((e = (0, M.default)({}, e)).left = e.x || 0, e.top = e.y || 0, e.right = e.right || e.left + e.width, e.bottom = e.bottom || e.top + e.height), e
                }, j.tlbrToXywh = function (e) {
                    return !e || "x" in e && "y" in e || ((e = (0, M.default)({}, e)).x = e.left || 0, e.y = e.top || 0, e.width = e.width || (e.right || 0) - e.x, e.height = e.height || (e.bottom || 0) - e.y), e
                }, j.addEdges = function (e, t, n) {
                    e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (t.top += n.y), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height = t.bottom - t.top
                };
                var D = {};
                Object.defineProperty(D, "__esModule", {value: !0}), D.default = function (e, t, n) {
                    var r = e.options[n], o = r && r.origin || e.options.origin,
                        i = (0, j.resolveRectLike)(o, e, t, [e && t]);
                    return (0, j.rectToXY)(i) || {x: 0, y: 0}
                };
                var C = {};

                function R(e) {
                    return e.trim().split(/ +/)
                }

                Object.defineProperty(C, "__esModule", {value: !0}), C.default = function e(t, n, r) {
                    if (r = r || {}, i.default.string(t) && -1 !== t.search(" ") && (t = R(t)), i.default.array(t)) return t.reduce((function (t, o) {
                        return (0, M.default)(t, e(o, n, r))
                    }), r);
                    if (i.default.object(t) && (n = t, t = ""), i.default.func(n)) r[t] = r[t] || [], r[t].push(n); else if (i.default.array(n)) for (var o = 0; o < n.length; o++) {
                        var a;
                        a = n[o], e(t, a, r)
                    } else if (i.default.object(n)) for (var s in n) {
                        var l = R(s).map((function (e) {
                            return "".concat(t).concat(e)
                        }));
                        e(l, n[s], r)
                    }
                    return r
                };
                var z = {};
                Object.defineProperty(z, "__esModule", {value: !0}), z.default = void 0, z.default = function (e, t) {
                    return Math.sqrt(e * e + t * t)
                };
                var B = {};

                function F(e, t) {
                    for (var n in t) {
                        var r = F.prefixedPropREs, o = !1;
                        for (var i in r) if (0 === n.indexOf(i) && r[i].test(n)) {
                            o = !0;
                            break
                        }
                        o || "function" == typeof t[n] || (e[n] = t[n])
                    }
                    return e
                }

                Object.defineProperty(B, "__esModule", {value: !0}), B.default = void 0, F.prefixedPropREs = {
                    webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
                    moz: /(Pressure)$/
                };
                var L = F;
                B.default = L;
                var Y = {};

                function X(e) {
                    return e instanceof h.default.Event || e instanceof h.default.Touch
                }

                function U(e, t, n) {
                    return e = e || "page", (n = n || {}).x = t[e + "X"], n.y = t[e + "Y"], n
                }

                function W(e, t) {
                    return t = t || {
                        x: 0,
                        y: 0
                    }, b.default.isOperaMobile && X(e) ? (U("screen", e, t), t.x += window.scrollX, t.y += window.scrollY) : U("page", e, t), t
                }

                function N(e, t) {
                    return t = t || {}, b.default.isOperaMobile && X(e) ? U("screen", e, t) : U("client", e, t), t
                }

                function q(e) {
                    var t = [];
                    return i.default.array(e) ? (t[0] = e[0], t[1] = e[1]) : "touchend" === e.type ? 1 === e.touches.length ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : 0 === e.touches.length && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t
                }

                function $(e) {
                    for (var t = {
                        pageX: 0,
                        pageY: 0,
                        clientX: 0,
                        clientY: 0,
                        screenX: 0,
                        screenY: 0
                    }, n = 0; n < e.length; n++) {
                        var r = e[n];
                        for (var o in t) t[o] += r[o]
                    }
                    for (var i in t) t[i] /= e.length;
                    return t
                }

                Object.defineProperty(Y, "__esModule", {value: !0}), Y.copyCoords = function (e, t) {
                    e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp
                }, Y.setCoordDeltas = function (e, t, n) {
                    e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x = n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp = n.timeStamp - t.timeStamp
                }, Y.setCoordVelocity = function (e, t) {
                    var n = Math.max(t.timeStamp / 1e3, .001);
                    e.page.x = t.page.x / n, e.page.y = t.page.y / n, e.client.x = t.client.x / n, e.client.y = t.client.y / n, e.timeStamp = n
                }, Y.setZeroCoords = function (e) {
                    e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0
                }, Y.isNativePointer = X, Y.getXY = U, Y.getPageXY = W, Y.getClientXY = N, Y.getPointerId = function (e) {
                    return i.default.number(e.pointerId) ? e.pointerId : e.identifier
                }, Y.setCoords = function (e, t, n) {
                    var r = t.length > 1 ? $(t) : t[0];
                    W(r, e.page), N(r, e.client), e.timeStamp = n
                }, Y.getTouchPair = q, Y.pointerAverage = $, Y.touchBBox = function (e) {
                    if (!e.length) return null;
                    var t = q(e), n = Math.min(t[0].pageX, t[1].pageX), r = Math.min(t[0].pageY, t[1].pageY),
                        o = Math.max(t[0].pageX, t[1].pageX), i = Math.max(t[0].pageY, t[1].pageY);
                    return {x: n, y: r, left: n, top: r, right: o, bottom: i, width: o - n, height: i - r}
                }, Y.touchDistance = function (e, t) {
                    var n = t + "X", r = t + "Y", o = q(e), i = o[0][n] - o[1][n], a = o[0][r] - o[1][r];
                    return (0, z.default)(i, a)
                }, Y.touchAngle = function (e, t) {
                    var n = t + "X", r = t + "Y", o = q(e), i = o[1][n] - o[0][n], a = o[1][r] - o[0][r];
                    return 180 * Math.atan2(a, i) / Math.PI
                }, Y.getPointerType = function (e) {
                    return i.default.string(e.pointerType) ? e.pointerType : i.default.number(e.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : /touch/.test(e.type || "") || e instanceof h.default.Touch ? "touch" : "mouse"
                }, Y.getEventTargets = function (e) {
                    var t = i.default.func(e.composedPath) ? e.composedPath() : e.path;
                    return [_.getActualElement(t ? t[0] : e.target), _.getActualElement(e.currentTarget)]
                }, Y.newCoords = function () {
                    return {page: {x: 0, y: 0}, client: {x: 0, y: 0}, timeStamp: 0}
                }, Y.coordsToEvent = function (e) {
                    return {
                        coords: e, get page() {
                            return this.coords.page
                        }, get client() {
                            return this.coords.client
                        }, get timeStamp() {
                            return this.coords.timeStamp
                        }, get pageX() {
                            return this.coords.page.x
                        }, get pageY() {
                            return this.coords.page.y
                        }, get clientX() {
                            return this.coords.client.x
                        }, get clientY() {
                            return this.coords.client.y
                        }, get pointerId() {
                            return this.coords.pointerId
                        }, get target() {
                            return this.coords.target
                        }, get type() {
                            return this.coords.type
                        }, get pointerType() {
                            return this.coords.pointerType
                        }, get buttons() {
                            return this.coords.buttons
                        }, preventDefault: function () {
                        }
                    }
                }, Object.defineProperty(Y, "pointerExtend", {
                    enumerable: !0, get: function () {
                        return B.default
                    }
                });
                var V = {};

                function G(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(V, "__esModule", {value: !0}), V.BaseEvent = void 0;
                var H = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), G(this, "type", void 0), G(this, "target", void 0), G(this, "currentTarget", void 0), G(this, "interactable", void 0), G(this, "_interaction", void 0), G(this, "timeStamp", void 0), G(this, "immediatePropagationStopped", !1), G(this, "propagationStopped", !1), this._interaction = t
                    }

                    var t;
                    return (t = [{
                        key: "preventDefault", value: function () {
                        }
                    }, {
                        key: "stopPropagation", value: function () {
                            this.propagationStopped = !0
                        }
                    }, {
                        key: "stopImmediatePropagation", value: function () {
                            this.immediatePropagationStopped = this.propagationStopped = !0
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(e.prototype, t), e
                }();
                V.BaseEvent = H, Object.defineProperty(H.prototype, "interaction", {
                    get: function () {
                        return this._interaction._proxy
                    }, set: function () {
                    }
                });
                var K = {};
                Object.defineProperty(K, "__esModule", {value: !0}), K.find = K.findIndex = K.from = K.merge = K.remove = K.contains = void 0, K.contains = function (e, t) {
                    return -1 !== e.indexOf(t)
                }, K.remove = function (e, t) {
                    return e.splice(e.indexOf(t), 1)
                };
                var Q = function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        e.push(r)
                    }
                    return e
                };
                K.merge = Q, K.from = function (e) {
                    return Q([], e)
                };
                var Z = function (e, t) {
                    for (var n = 0; n < e.length; n++) if (t(e[n], n, e)) return n;
                    return -1
                };
                K.findIndex = Z, K.find = function (e, t) {
                    return e[Z(e, t)]
                };
                var J = {};

                function ee(e) {
                    return (ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function te(e, t) {
                    return (te = Object.setPrototypeOf || function (e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function ne(e, t) {
                    return !t || "object" !== ee(t) && "function" != typeof t ? re(e) : t
                }

                function re(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function oe(e) {
                    return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function ie(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(J, "__esModule", {value: !0}), J.DropEvent = void 0;
                var ae = function (e) {
                    !function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && te(e, t)
                    }(i, e);
                    var t, n, r, o = (n = i, r = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                            }))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function () {
                        var e, t = oe(n);
                        if (r) {
                            var o = oe(this).constructor;
                            e = Reflect.construct(t, arguments, o)
                        } else e = t.apply(this, arguments);
                        return ne(this, e)
                    });

                    function i(e, t, n) {
                        var r;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), ie(re(r = o.call(this, t._interaction)), "target", void 0), ie(re(r), "dropzone", void 0), ie(re(r), "dragEvent", void 0), ie(re(r), "relatedTarget", void 0), ie(re(r), "draggable", void 0), ie(re(r), "timeStamp", void 0), ie(re(r), "propagationStopped", !1), ie(re(r), "immediatePropagationStopped", !1);
                        var a = "dragleave" === n ? e.prev : e.cur, s = a.element, l = a.dropzone;
                        return r.type = n, r.target = s, r.currentTarget = s, r.dropzone = l, r.dragEvent = t, r.relatedTarget = t.target, r.draggable = t.interactable, r.timeStamp = t.timeStamp, r
                    }

                    return (t = [{
                        key: "reject", value: function () {
                            var e = this, t = this._interaction.dropState;
                            if ("dropactivate" === this.type || this.dropzone && t.cur.dropzone === this.dropzone && t.cur.element === this.target) if (t.prev.dropzone = this.dropzone, t.prev.element = this.target, t.rejected = !0, t.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
                                var n = t.activeDrops, r = K.findIndex(n, (function (t) {
                                    var n = t.dropzone, r = t.element;
                                    return n === e.dropzone && r === e.target
                                }));
                                t.activeDrops.splice(r, 1);
                                var o = new i(t, this.dragEvent, "dropdeactivate");
                                o.dropzone = this.dropzone, o.target = this.target, this.dropzone.fire(o)
                            } else this.dropzone.fire(new i(t, this.dragEvent, "dragleave"))
                        }
                    }, {
                        key: "preventDefault", value: function () {
                        }
                    }, {
                        key: "stopPropagation", value: function () {
                            this.propagationStopped = !0
                        }
                    }, {
                        key: "stopImmediatePropagation", value: function () {
                            this.immediatePropagationStopped = this.propagationStopped = !0
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(i.prototype, t), i
                }(V.BaseEvent);
                J.DropEvent = ae;
                var se = {};

                function le(e, t) {
                    for (var n = 0; n < e.slice().length; n++) {
                        var r = e.slice()[n], o = r.dropzone, i = r.element;
                        t.dropzone = o, t.target = i, o.fire(t), t.propagationStopped = t.immediatePropagationStopped = !1
                    }
                }

                function ue(e, t) {
                    for (var n = function (e, t) {
                        for (var n = e.interactables, r = [], o = 0; o < n.list.length; o++) {
                            var a = n.list[o];
                            if (a.options.drop.enabled) {
                                var s = a.options.drop.accept;
                                if (!(i.default.element(s) && s !== t || i.default.string(s) && !_.matchesSelector(t, s) || i.default.func(s) && !s({
                                    dropzone: a,
                                    draggableElement: t
                                }))) for (var l = i.default.string(a.target) ? a._context.querySelectorAll(a.target) : i.default.array(a.target) ? a.target : [a.target], u = 0; u < l.length; u++) {
                                    var c = l[u];
                                    c !== t && r.push({dropzone: a, element: c, rect: a.getRect(c)})
                                }
                            }
                        }
                        return r
                    }(e, t), r = 0; r < n.length; r++) {
                        var o = n[r];
                        o.rect = o.dropzone.getRect(o.element)
                    }
                    return n
                }

                function ce(e, t, n) {
                    for (var r = e.dropState, o = e.interactable, i = e.element, a = [], s = 0; s < r.activeDrops.length; s++) {
                        var l = r.activeDrops[s], u = l.dropzone, c = l.element, f = l.rect;
                        a.push(u.dropCheck(t, n, o, i, c, f) ? c : null)
                    }
                    var d = _.indexOfDeepestElement(a);
                    return r.activeDrops[d] || null
                }

                function fe(e, t, n) {
                    var r = e.dropState,
                        o = {enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null};
                    return "dragstart" === n.type && (o.activate = new J.DropEvent(r, n, "dropactivate"), o.activate.target = null, o.activate.dropzone = null), "dragend" === n.type && (o.deactivate = new J.DropEvent(r, n, "dropdeactivate"), o.deactivate.target = null, o.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (o.leave = new J.DropEvent(r, n, "dragleave"), n.dragLeave = o.leave.target = r.prev.element, n.prevDropzone = o.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (o.enter = new J.DropEvent(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), "dragend" === n.type && r.cur.dropzone && (o.drop = new J.DropEvent(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), "dragmove" === n.type && r.cur.dropzone && (o.move = new J.DropEvent(r, n, "dropmove"), o.move.dragmove = n, n.dropzone = r.cur.dropzone)), o
                }

                function de(e, t) {
                    var n = e.dropState, r = n.activeDrops, o = n.cur, i = n.prev;
                    t.leave && i.dropzone.fire(t.leave), t.enter && o.dropzone.fire(t.enter), t.move && o.dropzone.fire(t.move), t.drop && o.dropzone.fire(t.drop), t.deactivate && le(r, t.deactivate), n.prev.dropzone = o.dropzone, n.prev.element = o.element
                }

                function pe(e, t) {
                    var n = e.interaction, r = e.iEvent, o = e.event;
                    if ("dragmove" === r.type || "dragend" === r.type) {
                        var i = n.dropState;
                        t.dynamicDrop && (i.activeDrops = ue(t, n.element));
                        var a = r, s = ce(n, a, o);
                        i.rejected = i.rejected && !!s && s.dropzone === i.cur.dropzone && s.element === i.cur.element, i.cur.dropzone = s && s.dropzone, i.cur.element = s && s.element, i.events = fe(n, 0, a)
                    }
                }

                Object.defineProperty(se, "__esModule", {value: !0}), se.default = void 0;
                var ve = {
                    id: "actions/drop",
                    install: function (e) {
                        var t = e.actions, n = e.interactStatic, r = e.Interactable, o = e.defaults;
                        e.usePlugin(c.default), r.prototype.dropzone = function (e) {
                            return function (e, t) {
                                if (i.default.object(t)) {
                                    if (e.options.drop.enabled = !1 !== t.enabled, t.listeners) {
                                        var n = (0, C.default)(t.listeners),
                                            r = Object.keys(n).reduce((function (e, t) {
                                                return e[/^(enter|leave)/.test(t) ? "drag".concat(t) : /^(activate|deactivate|move)/.test(t) ? "drop".concat(t) : t] = n[t], e
                                            }), {});
                                        e.off(e.options.drop.listeners), e.on(r), e.options.drop.listeners = r
                                    }
                                    return i.default.func(t.ondrop) && e.on("drop", t.ondrop), i.default.func(t.ondropactivate) && e.on("dropactivate", t.ondropactivate), i.default.func(t.ondropdeactivate) && e.on("dropdeactivate", t.ondropdeactivate), i.default.func(t.ondragenter) && e.on("dragenter", t.ondragenter), i.default.func(t.ondragleave) && e.on("dragleave", t.ondragleave), i.default.func(t.ondropmove) && e.on("dropmove", t.ondropmove), /^(pointer|center)$/.test(t.overlap) ? e.options.drop.overlap = t.overlap : i.default.number(t.overlap) && (e.options.drop.overlap = Math.max(Math.min(1, t.overlap), 0)), "accept" in t && (e.options.drop.accept = t.accept), "checker" in t && (e.options.drop.checker = t.checker), e
                                }
                                return i.default.bool(t) ? (e.options.drop.enabled = t, e) : e.options.drop
                            }(this, e)
                        }, r.prototype.dropCheck = function (e, t, n, r, o, a) {
                            return function (e, t, n, r, o, a, s) {
                                var l = !1;
                                if (!(s = s || e.getRect(a))) return !!e.options.drop.checker && e.options.drop.checker(t, n, l, e, a, r, o);
                                var u = e.options.drop.overlap;
                                if ("pointer" === u) {
                                    var c = (0, D.default)(r, o, "drag"), f = Y.getPageXY(t);
                                    f.x += c.x, f.y += c.y;
                                    var d = f.x > s.left && f.x < s.right, p = f.y > s.top && f.y < s.bottom;
                                    l = d && p
                                }
                                var v = r.getRect(o);
                                if (v && "center" === u) {
                                    var h = v.left + v.width / 2, g = v.top + v.height / 2;
                                    l = h >= s.left && h <= s.right && g >= s.top && g <= s.bottom
                                }
                                return v && i.default.number(u) && (l = Math.max(0, Math.min(s.right, v.right) - Math.max(s.left, v.left)) * Math.max(0, Math.min(s.bottom, v.bottom) - Math.max(s.top, v.top)) / (v.width * v.height) >= u), e.options.drop.checker && (l = e.options.drop.checker(t, n, l, e, a, r, o)), l
                            }(this, e, t, n, r, o, a)
                        }, n.dynamicDrop = function (t) {
                            return i.default.bool(t) ? (e.dynamicDrop = t, n) : e.dynamicDrop
                        }, (0, M.default)(t.phaselessTypes, {
                            dragenter: !0,
                            dragleave: !0,
                            dropactivate: !0,
                            dropdeactivate: !0,
                            dropmove: !0,
                            drop: !0
                        }), t.methodDict.drop = "dropzone", e.dynamicDrop = !1, o.actions.drop = ve.defaults
                    },
                    listeners: {
                        "interactions:before-action-start": function (e) {
                            var t = e.interaction;
                            "drag" === t.prepared.name && (t.dropState = {
                                cur: {dropzone: null, element: null},
                                prev: {dropzone: null, element: null},
                                rejected: null,
                                events: null,
                                activeDrops: []
                            })
                        }, "interactions:after-action-start": function (e, t) {
                            var n = e.interaction, r = (e.event, e.iEvent);
                            if ("drag" === n.prepared.name) {
                                var o = n.dropState;
                                o.activeDrops = null, o.events = null, o.activeDrops = ue(t, n.element), o.events = fe(n, 0, r), o.events.activate && (le(o.activeDrops, o.events.activate), t.fire("actions/drop:start", {
                                    interaction: n,
                                    dragEvent: r
                                }))
                            }
                        }, "interactions:action-move": pe, "interactions:after-action-move": function (e, t) {
                            var n = e.interaction, r = e.iEvent;
                            "drag" === n.prepared.name && (de(n, n.dropState.events), t.fire("actions/drop:move", {
                                interaction: n,
                                dragEvent: r
                            }), n.dropState.events = {})
                        }, "interactions:action-end": function (e, t) {
                            if ("drag" === e.interaction.prepared.name) {
                                var n = e.interaction, r = e.iEvent;
                                pe(e, t), de(n, n.dropState.events), t.fire("actions/drop:end", {
                                    interaction: n,
                                    dragEvent: r
                                })
                            }
                        }, "interactions:stop": function (e) {
                            var t = e.interaction;
                            if ("drag" === t.prepared.name) {
                                var n = t.dropState;
                                n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1)
                            }
                        }
                    },
                    getActiveDrops: ue,
                    getDrop: ce,
                    getDropEvents: fe,
                    fireDropEvents: de,
                    defaults: {enabled: !1, accept: null, overlap: "pointer"}
                }, he = ve;
                se.default = he;
                var ge = {};

                function me(e) {
                    var t = e.interaction, n = e.iEvent, r = e.phase;
                    if ("gesture" === t.prepared.name) {
                        var o = t.pointers.map((function (e) {
                            return e.pointer
                        })), a = "start" === r, s = "end" === r, l = t.interactable.options.deltaSource;
                        if (n.touches = [o[0], o[1]], a) n.distance = Y.touchDistance(o, l), n.box = Y.touchBBox(o), n.scale = 1, n.ds = 0, n.angle = Y.touchAngle(o, l), n.da = 0, t.gesture.startDistance = n.distance, t.gesture.startAngle = n.angle; else if (s) {
                            var u = t.prevEvent;
                            n.distance = u.distance, n.box = u.box, n.scale = u.scale, n.ds = 0, n.angle = u.angle, n.da = 0
                        } else n.distance = Y.touchDistance(o, l), n.box = Y.touchBBox(o), n.scale = n.distance / t.gesture.startDistance, n.angle = Y.touchAngle(o, l), n.ds = n.scale - t.gesture.scale, n.da = n.angle - t.gesture.angle;
                        t.gesture.distance = n.distance, t.gesture.angle = n.angle, i.default.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (t.gesture.scale = n.scale)
                    }
                }

                Object.defineProperty(ge, "__esModule", {value: !0}), ge.default = void 0;
                var ye = {
                    id: "actions/gesture",
                    before: ["actions/drag", "actions/resize"],
                    install: function (e) {
                        var t = e.actions, n = e.Interactable, r = e.defaults;
                        n.prototype.gesturable = function (e) {
                            return i.default.object(e) ? (this.options.gesture.enabled = !1 !== e.enabled, this.setPerAction("gesture", e), this.setOnEvents("gesture", e), this) : i.default.bool(e) ? (this.options.gesture.enabled = e, this) : this.options.gesture
                        }, t.map.gesture = ye, t.methodDict.gesture = "gesturable", r.actions.gesture = ye.defaults
                    },
                    listeners: {
                        "interactions:action-start": me,
                        "interactions:action-move": me,
                        "interactions:action-end": me,
                        "interactions:new": function (e) {
                            e.interaction.gesture = {angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0}
                        },
                        "auto-start:check": function (e) {
                            if (!(e.interaction.pointers.length < 2)) {
                                var t = e.interactable.options.gesture;
                                if (t && t.enabled) return e.action = {name: "gesture"}, !1
                            }
                        }
                    },
                    defaults: {},
                    getCursor: function () {
                        return ""
                    }
                }, be = ye;
                ge.default = be;
                var xe = {};

                function we(e, t, n, r, o, a, s) {
                    if (!t) return !1;
                    if (!0 === t) {
                        var l = i.default.number(a.width) ? a.width : a.right - a.left,
                            u = i.default.number(a.height) ? a.height : a.bottom - a.top;
                        if (s = Math.min(s, Math.abs(("left" === e || "right" === e ? l : u) / 2)), l < 0 && ("left" === e ? e = "right" : "right" === e && (e = "left")), u < 0 && ("top" === e ? e = "bottom" : "bottom" === e && (e = "top")), "left" === e) return n.x < (l >= 0 ? a.left : a.right) + s;
                        if ("top" === e) return n.y < (u >= 0 ? a.top : a.bottom) + s;
                        if ("right" === e) return n.x > (l >= 0 ? a.right : a.left) - s;
                        if ("bottom" === e) return n.y > (u >= 0 ? a.bottom : a.top) - s
                    }
                    return !!i.default.element(r) && (i.default.element(t) ? t === r : _.matchesUpTo(r, t, o))
                }

                function _e(e) {
                    var t = e.iEvent, n = e.interaction;
                    if ("resize" === n.prepared.name && n.resizeAxes) {
                        var r = t;
                        n.interactable.options.resize.square ? ("y" === n.resizeAxes ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, "x" === n.resizeAxes ? r.delta.y = 0 : "y" === n.resizeAxes && (r.delta.x = 0))
                    }
                }

                Object.defineProperty(xe, "__esModule", {value: !0}), xe.default = void 0;
                var Ee = {
                    id: "actions/resize",
                    before: ["actions/drag"],
                    install: function (e) {
                        var t = e.actions, n = e.browser, r = e.Interactable, o = e.defaults;
                        Ee.cursors = function (e) {
                            return e.isIe9 ? {
                                x: "e-resize",
                                y: "s-resize",
                                xy: "se-resize",
                                top: "n-resize",
                                left: "w-resize",
                                bottom: "s-resize",
                                right: "e-resize",
                                topleft: "se-resize",
                                bottomright: "se-resize",
                                topright: "ne-resize",
                                bottomleft: "ne-resize"
                            } : {
                                x: "ew-resize",
                                y: "ns-resize",
                                xy: "nwse-resize",
                                top: "ns-resize",
                                left: "ew-resize",
                                bottom: "ns-resize",
                                right: "ew-resize",
                                topleft: "nwse-resize",
                                bottomright: "nwse-resize",
                                topright: "nesw-resize",
                                bottomleft: "nesw-resize"
                            }
                        }(n), Ee.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function (t) {
                            return function (e, t, n) {
                                return i.default.object(t) ? (e.options.resize.enabled = !1 !== t.enabled, e.setPerAction("resize", t), e.setOnEvents("resize", t), i.default.string(t.axis) && /^x$|^y$|^xy$/.test(t.axis) ? e.options.resize.axis = t.axis : null === t.axis && (e.options.resize.axis = n.defaults.actions.resize.axis), i.default.bool(t.preserveAspectRatio) ? e.options.resize.preserveAspectRatio = t.preserveAspectRatio : i.default.bool(t.square) && (e.options.resize.square = t.square), e) : i.default.bool(t) ? (e.options.resize.enabled = t, e) : e.options.resize
                            }(this, t, e)
                        }, t.map.resize = Ee, t.methodDict.resize = "resizable", o.actions.resize = Ee.defaults
                    },
                    listeners: {
                        "interactions:new": function (e) {
                            e.interaction.resizeAxes = "xy"
                        }, "interactions:action-start": function (e) {
                            !function (e) {
                                var t = e.iEvent, n = e.interaction;
                                if ("resize" === n.prepared.name && n.prepared.edges) {
                                    var r = t, o = n.rect;
                                    n._rects = {
                                        start: (0, M.default)({}, o),
                                        corrected: (0, M.default)({}, o),
                                        previous: (0, M.default)({}, o),
                                        delta: {left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0}
                                    }, r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta
                                }
                            }(e), _e(e)
                        }, "interactions:action-move": function (e) {
                            !function (e) {
                                var t = e.iEvent, n = e.interaction;
                                if ("resize" === n.prepared.name && n.prepared.edges) {
                                    var r = t, o = n.interactable.options.resize.invert,
                                        i = "reposition" === o || "negate" === o, a = n.rect, s = n._rects, l = s.start,
                                        u = s.corrected, c = s.delta, f = s.previous;
                                    if ((0, M.default)(f, u), i) {
                                        if ((0, M.default)(u, a), "reposition" === o) {
                                            if (u.top > u.bottom) {
                                                var d = u.top;
                                                u.top = u.bottom, u.bottom = d
                                            }
                                            if (u.left > u.right) {
                                                var p = u.left;
                                                u.left = u.right, u.right = p
                                            }
                                        }
                                    } else u.top = Math.min(a.top, l.bottom), u.bottom = Math.max(a.bottom, l.top), u.left = Math.min(a.left, l.right), u.right = Math.max(a.right, l.left);
                                    for (var v in u.width = u.right - u.left, u.height = u.bottom - u.top, u) c[v] = u[v] - f[v];
                                    r.edges = n.prepared.edges, r.rect = u, r.deltaRect = c
                                }
                            }(e), _e(e)
                        }, "interactions:action-end": function (e) {
                            var t = e.iEvent, n = e.interaction;
                            if ("resize" === n.prepared.name && n.prepared.edges) {
                                var r = t;
                                r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta
                            }
                        }, "auto-start:check": function (e) {
                            var t = e.interaction, n = e.interactable, r = e.element, o = e.rect, a = e.buttons;
                            if (o) {
                                var s = (0, M.default)({}, t.coords.cur.page), l = n.options.resize;
                                if (l && l.enabled && (!t.pointerIsDown || !/mouse|pointer/.test(t.pointerType) || 0 != (a & l.mouseButtons))) {
                                    if (i.default.object(l.edges)) {
                                        var u = {left: !1, right: !1, top: !1, bottom: !1};
                                        for (var c in u) u[c] = we(c, l.edges[c], s, t._latestPointer.eventTarget, r, o, l.margin || Ee.defaultMargin);
                                        u.left = u.left && !u.right, u.top = u.top && !u.bottom, (u.left || u.right || u.top || u.bottom) && (e.action = {
                                            name: "resize",
                                            edges: u
                                        })
                                    } else {
                                        var f = "y" !== l.axis && s.x > o.right - Ee.defaultMargin,
                                            d = "x" !== l.axis && s.y > o.bottom - Ee.defaultMargin;
                                        (f || d) && (e.action = {name: "resize", axes: (f ? "x" : "") + (d ? "y" : "")})
                                    }
                                    return !e.action && void 0
                                }
                            }
                        }
                    },
                    defaults: {
                        square: !1,
                        preserveAspectRatio: !1,
                        axis: "xy",
                        margin: NaN,
                        edges: null,
                        invert: "none"
                    },
                    cursors: null,
                    getCursor: function (e) {
                        var t = e.edges, n = e.axis, r = e.name, o = Ee.cursors, i = null;
                        if (n) i = o[r + n]; else if (t) {
                            for (var a = "", s = ["top", "bottom", "left", "right"], l = 0; l < s.length; l++) {
                                var u = s[l];
                                t[u] && (a += u)
                            }
                            i = o[a]
                        }
                        return i
                    },
                    defaultMargin: null
                }, Pe = Ee;
                xe.default = Pe;
                var Oe = {};
                Object.defineProperty(Oe, "__esModule", {value: !0}), Oe.default = void 0;
                var Se = {
                    id: "actions", install: function (e) {
                        e.usePlugin(ge.default), e.usePlugin(xe.default), e.usePlugin(c.default), e.usePlugin(se.default)
                    }
                };
                Oe.default = Se;
                var Te = {};
                Object.defineProperty(Te, "__esModule", {value: !0}), Te.default = void 0;
                var ke, Me, je = 0, Ie = {
                    request: function (e) {
                        return ke(e)
                    }, cancel: function (e) {
                        return Me(e)
                    }, init: function (e) {
                        if (ke = e.requestAnimationFrame, Me = e.cancelAnimationFrame, !ke) for (var t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length; n++) {
                            var r = t[n];
                            ke = e["".concat(r, "RequestAnimationFrame")], Me = e["".concat(r, "CancelAnimationFrame")] || e["".concat(r, "CancelRequestAnimationFrame")]
                        }
                        ke = ke && ke.bind(e), Me = Me && Me.bind(e), ke || (ke = function (t) {
                            var n = Date.now(), r = Math.max(0, 16 - (n - je)), o = e.setTimeout((function () {
                                t(n + r)
                            }), r);
                            return je = n + r, o
                        }, Me = function (e) {
                            return clearTimeout(e)
                        })
                    }
                };
                Te.default = Ie;
                var Ae = {};
                Object.defineProperty(Ae, "__esModule", {value: !0}), Ae.getContainer = Ce, Ae.getScroll = Re, Ae.getScrollSize = function (e) {
                    return i.default.window(e) && (e = window.document.body), {x: e.scrollWidth, y: e.scrollHeight}
                }, Ae.getScrollSizeDelta = function (e, t) {
                    var n = e.interaction, r = e.element, o = n && n.interactable.options[n.prepared.name].autoScroll;
                    if (!o || !o.enabled) return t(), {x: 0, y: 0};
                    var i = Ce(o.container, n.interactable, r), a = Re(i);
                    t();
                    var s = Re(i);
                    return {x: s.x - a.x, y: s.y - a.y}
                }, Ae.default = void 0;
                var De = {
                    defaults: {enabled: !1, margin: 60, container: null, speed: 300},
                    now: Date.now,
                    interaction: null,
                    i: 0,
                    x: 0,
                    y: 0,
                    isScrolling: !1,
                    prevTime: 0,
                    margin: 0,
                    speed: 0,
                    start: function (e) {
                        De.isScrolling = !0, Te.default.cancel(De.i), e.autoScroll = De, De.interaction = e, De.prevTime = De.now(), De.i = Te.default.request(De.scroll)
                    },
                    stop: function () {
                        De.isScrolling = !1, De.interaction && (De.interaction.autoScroll = null), Te.default.cancel(De.i)
                    },
                    scroll: function () {
                        var e = De.interaction, t = e.interactable, n = e.element, r = e.prepared.name,
                            o = t.options[r].autoScroll, a = Ce(o.container, t, n), s = De.now(),
                            l = (s - De.prevTime) / 1e3, u = o.speed * l;
                        if (u >= 1) {
                            var c = {x: De.x * u, y: De.y * u};
                            if (c.x || c.y) {
                                var f = Re(a);
                                i.default.window(a) ? a.scrollBy(c.x, c.y) : a && (a.scrollLeft += c.x, a.scrollTop += c.y);
                                var d = Re(a), p = {x: d.x - f.x, y: d.y - f.y};
                                (p.x || p.y) && t.fire({
                                    type: "autoscroll",
                                    target: n,
                                    interactable: t,
                                    delta: p,
                                    interaction: e,
                                    container: a
                                })
                            }
                            De.prevTime = s
                        }
                        De.isScrolling && (Te.default.cancel(De.i), De.i = Te.default.request(De.scroll))
                    },
                    check: function (e, t) {
                        var n;
                        return null == (n = e.options[t].autoScroll) ? void 0 : n.enabled
                    },
                    onInteractionMove: function (e) {
                        var t = e.interaction, n = e.pointer;
                        if (t.interacting() && De.check(t.interactable, t.prepared.name)) if (t.simulation) De.x = De.y = 0; else {
                            var r, o, a, s, l = t.interactable, u = t.element, c = t.prepared.name,
                                f = l.options[c].autoScroll, d = Ce(f.container, l, u);
                            if (i.default.window(d)) s = n.clientX < De.margin, r = n.clientY < De.margin, o = n.clientX > d.innerWidth - De.margin, a = n.clientY > d.innerHeight - De.margin; else {
                                var p = _.getElementClientRect(d);
                                s = n.clientX < p.left + De.margin, r = n.clientY < p.top + De.margin, o = n.clientX > p.right - De.margin, a = n.clientY > p.bottom - De.margin
                            }
                            De.x = o ? 1 : s ? -1 : 0, De.y = a ? 1 : r ? -1 : 0, De.isScrolling || (De.margin = f.margin, De.speed = f.speed, De.start(t))
                        }
                    }
                };

                function Ce(e, n, r) {
                    return (i.default.string(e) ? (0, j.getStringOptionResult)(e, n, r) : e) || (0, t.getWindow)(r)
                }

                function Re(e) {
                    return i.default.window(e) && (e = window.document.body), {x: e.scrollLeft, y: e.scrollTop}
                }

                var ze = {
                    id: "auto-scroll", install: function (e) {
                        var t = e.defaults, n = e.actions;
                        e.autoScroll = De, De.now = function () {
                            return e.now()
                        }, n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll = De.defaults
                    }, listeners: {
                        "interactions:new": function (e) {
                            e.interaction.autoScroll = null
                        }, "interactions:destroy": function (e) {
                            e.interaction.autoScroll = null, De.stop(), De.interaction && (De.interaction = null)
                        }, "interactions:stop": De.stop, "interactions:action-move": function (e) {
                            return De.onInteractionMove(e)
                        }
                    }
                };
                Ae.default = ze;
                var Be = {};
                Object.defineProperty(Be, "__esModule", {value: !0}), Be.warnOnce = function (e, n) {
                    var r = !1;
                    return function () {
                        return r || (t.window.console.warn(n), r = !0), e.apply(this, arguments)
                    }
                }, Be.copyAction = function (e, t) {
                    return e.name = t.name, e.axis = t.axis, e.edges = t.edges, e
                }, Be.sign = void 0, Be.sign = function (e) {
                    return e >= 0 ? 1 : -1
                };
                var Fe = {};

                function Le(e) {
                    return i.default.bool(e) ? (this.options.styleCursor = e, this) : null === e ? (delete this.options.styleCursor, this) : this.options.styleCursor
                }

                function Ye(e) {
                    return i.default.func(e) ? (this.options.actionChecker = e, this) : null === e ? (delete this.options.actionChecker, this) : this.options.actionChecker
                }

                Object.defineProperty(Fe, "__esModule", {value: !0}), Fe.default = void 0;
                var Xe = {
                    id: "auto-start/interactableMethods", install: function (e) {
                        var t = e.Interactable;
                        t.prototype.getAction = function (t, n, r, o) {
                            var i = function (e, t, n, r, o) {
                                var i = e.getRect(r), a = {
                                    action: null,
                                    interactable: e,
                                    interaction: n,
                                    element: r,
                                    rect: i,
                                    buttons: t.buttons || {0: 1, 1: 4, 3: 8, 4: 16}[t.button]
                                };
                                return o.fire("auto-start:check", a), a.action
                            }(this, n, r, o, e);
                            return this.options.actionChecker ? this.options.actionChecker(t, n, i, this, o, r) : i
                        }, t.prototype.ignoreFrom = (0, Be.warnOnce)((function (e) {
                            return this._backCompatOption("ignoreFrom", e)
                        }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = (0, Be.warnOnce)((function (e) {
                            return this._backCompatOption("allowFrom", e)
                        }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = Ye, t.prototype.styleCursor = Le
                    }
                };
                Fe.default = Xe;
                var Ue = {};

                function We(e, t, n, r, o) {
                    return t.testIgnoreAllow(t.options[e.name], n, r) && t.options[e.name].enabled && Ve(t, n, e, o) ? e : null
                }

                function Ne(e, t, n, r, o, i, a) {
                    for (var s = 0, l = r.length; s < l; s++) {
                        var u = r[s], c = o[s], f = u.getAction(t, n, e, c);
                        if (f) {
                            var d = We(f, u, c, i, a);
                            if (d) return {action: d, interactable: u, element: c}
                        }
                    }
                    return {action: null, interactable: null, element: null}
                }

                function qe(e, t, n, r, o) {
                    var a = [], s = [], l = r;

                    function u(e) {
                        a.push(e), s.push(l)
                    }

                    for (; i.default.element(l);) {
                        a = [], s = [], o.interactables.forEachMatch(l, u);
                        var c = Ne(e, t, n, a, s, r, o);
                        if (c.action && !c.interactable.options[c.action.name].manualStart) return c;
                        l = _.parentNode(l)
                    }
                    return {action: null, interactable: null, element: null}
                }

                function $e(e, t, n) {
                    var r = t.action, o = t.interactable, i = t.element;
                    r = r || {name: null}, e.interactable = o, e.element = i, (0, Be.copyAction)(e.prepared, r), e.rect = o && r.name ? o.getRect(i) : null, Ke(e, n), n.fire("autoStart:prepared", {interaction: e})
                }

                function Ve(e, t, n, r) {
                    var o = e.options, i = o[n.name].max, a = o[n.name].maxPerElement, s = r.autoStart.maxInteractions,
                        l = 0, u = 0, c = 0;
                    if (!(i && a && s)) return !1;
                    for (var f = 0; f < r.interactions.list.length; f++) {
                        var d = r.interactions.list[f], p = d.prepared.name;
                        if (d.interacting()) {
                            if (++l >= s) return !1;
                            if (d.interactable === e) {
                                if ((u += p === n.name ? 1 : 0) >= i) return !1;
                                if (d.element === t && (c++, p === n.name && c >= a)) return !1
                            }
                        }
                    }
                    return s > 0
                }

                function Ge(e, t) {
                    return i.default.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions
                }

                function He(e, t, n) {
                    var r = n.autoStart.cursorElement;
                    r && r !== e && (r.style.cursor = ""), e.ownerDocument.documentElement.style.cursor = t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null
                }

                function Ke(e, t) {
                    var n = e.interactable, r = e.element, o = e.prepared;
                    if ("mouse" === e.pointerType && n && n.options.styleCursor) {
                        var a = "";
                        if (o.name) {
                            var s = n.options[o.name].cursorChecker;
                            a = i.default.func(s) ? s(o, n, r, e._interacting) : t.actions.map[o.name].getCursor(o)
                        }
                        He(e.element, a || "", t)
                    } else t.autoStart.cursorElement && He(t.autoStart.cursorElement, "", t)
                }

                Object.defineProperty(Ue, "__esModule", {value: !0}), Ue.default = void 0;
                var Qe = {
                    id: "auto-start/base", before: ["actions"], install: function (e) {
                        var t = e.interactStatic, n = e.defaults;
                        e.usePlugin(Fe.default), n.base.actionChecker = null, n.base.styleCursor = !0, (0, M.default)(n.perAction, {
                            manualStart: !1,
                            max: 1 / 0,
                            maxPerElement: 1,
                            allowFrom: null,
                            ignoreFrom: null,
                            mouseButtons: 1
                        }), t.maxInteractions = function (t) {
                            return Ge(t, e)
                        }, e.autoStart = {maxInteractions: 1 / 0, withinInteractionLimit: Ve, cursorElement: null}
                    }, listeners: {
                        "interactions:down": function (e, t) {
                            var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
                            n.interacting() || $e(n, qe(n, r, o, i, t), t)
                        }, "interactions:move": function (e, t) {
                            !function (e, t) {
                                var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
                                "mouse" !== n.pointerType || n.pointerIsDown || n.interacting() || $e(n, qe(n, r, o, i, t), t)
                            }(e, t), function (e, t) {
                                var n = e.interaction;
                                if (n.pointerIsDown && !n.interacting() && n.pointerWasMoved && n.prepared.name) {
                                    t.fire("autoStart:before-start", e);
                                    var r = n.interactable, o = n.prepared.name;
                                    o && r && (r.options[o].manualStart || !Ve(r, n.element, n.prepared, t) ? n.stop() : (n.start(n.prepared, r, n.element), Ke(n, t)))
                                }
                            }(e, t)
                        }, "interactions:stop": function (e, t) {
                            var n = e.interaction, r = n.interactable;
                            r && r.options.styleCursor && He(n.element, "", t)
                        }
                    }, maxInteractions: Ge, withinInteractionLimit: Ve, validateAction: We
                };
                Ue.default = Qe;
                var Ze = {};
                Object.defineProperty(Ze, "__esModule", {value: !0}), Ze.default = void 0;
                var Je = {
                    id: "auto-start/dragAxis", listeners: {
                        "autoStart:before-start": function (e, t) {
                            var n = e.interaction, r = e.eventTarget, o = e.dx, a = e.dy;
                            if ("drag" === n.prepared.name) {
                                var s = Math.abs(o), l = Math.abs(a), u = n.interactable.options.drag, c = u.startAxis,
                                    f = s > l ? "x" : s < l ? "y" : "xy";
                                if (n.prepared.axis = "start" === u.lockAxis ? f[0] : u.lockAxis, "xy" !== f && "xy" !== c && c !== f) {
                                    n.prepared.name = null;
                                    for (var d = r, p = function (e) {
                                        if (e !== n.interactable) {
                                            var o = n.interactable.options.drag;
                                            if (!o.manualStart && e.testIgnoreAllow(o, d, r)) {
                                                var i = e.getAction(n.downPointer, n.downEvent, n, d);
                                                if (i && "drag" === i.name && function (e, t) {
                                                    if (!t) return !1;
                                                    var n = t.options.drag.startAxis;
                                                    return "xy" === e || "xy" === n || n === e
                                                }(f, e) && Ue.default.validateAction(i, e, d, r, t)) return e
                                            }
                                        }
                                    }; i.default.element(d);) {
                                        var v = t.interactables.forEachMatch(d, p);
                                        if (v) {
                                            n.prepared.name = "drag", n.interactable = v, n.element = d;
                                            break
                                        }
                                        d = (0, _.parentNode)(d)
                                    }
                                }
                            }
                        }
                    }
                };
                Ze.default = Je;
                var et = {};

                function tt(e) {
                    var t = e.prepared && e.prepared.name;
                    if (!t) return null;
                    var n = e.interactable.options;
                    return n[t].hold || n[t].delay
                }

                Object.defineProperty(et, "__esModule", {value: !0}), et.default = void 0;
                var nt = {
                    id: "auto-start/hold", install: function (e) {
                        var t = e.defaults;
                        e.usePlugin(Ue.default), t.perAction.hold = 0, t.perAction.delay = 0
                    }, listeners: {
                        "interactions:new": function (e) {
                            e.interaction.autoStartHoldTimer = null
                        }, "autoStart:prepared": function (e) {
                            var t = e.interaction, n = tt(t);
                            n > 0 && (t.autoStartHoldTimer = setTimeout((function () {
                                t.start(t.prepared, t.interactable, t.element)
                            }), n))
                        }, "interactions:move": function (e) {
                            var t = e.interaction, n = e.duplicate;
                            t.autoStartHoldTimer && t.pointerWasMoved && !n && (clearTimeout(t.autoStartHoldTimer), t.autoStartHoldTimer = null)
                        }, "autoStart:before-start": function (e) {
                            var t = e.interaction;
                            tt(t) > 0 && (t.prepared.name = null)
                        }
                    }, getHoldDuration: tt
                };
                et.default = nt;
                var rt = {};
                Object.defineProperty(rt, "__esModule", {value: !0}), rt.default = void 0;
                var ot = {
                    id: "auto-start", install: function (e) {
                        e.usePlugin(Ue.default), e.usePlugin(et.default), e.usePlugin(Ze.default)
                    }
                };
                rt.default = ot;
                var it = {};

                function at(e) {
                    return /^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : i.default.bool(e) ? (this.options.preventDefault = e ? "always" : "never", this) : this.options.preventDefault
                }

                function st(e) {
                    var t = e.interaction, n = e.event;
                    t.interactable && t.interactable.checkAndPreventDefault(n)
                }

                function lt(e) {
                    var n = e.Interactable;
                    n.prototype.preventDefault = at, n.prototype.checkAndPreventDefault = function (n) {
                        return function (e, n, r) {
                            var o = e.options.preventDefault;
                            if ("never" !== o) if ("always" !== o) {
                                if (n.events.supportsPassive && /^touch(start|move)$/.test(r.type)) {
                                    var a = (0, t.getWindow)(r.target).document, s = n.getDocOptions(a);
                                    if (!s || !s.events || !1 !== s.events.passive) return
                                }
                                /^(mouse|pointer|touch)*(down|start)/i.test(r.type) || i.default.element(r.target) && (0, _.matchesSelector)(r.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || r.preventDefault()
                            } else r.preventDefault()
                        }(this, e, n)
                    }, e.interactions.docEvents.push({
                        type: "dragstart", listener: function (t) {
                            for (var n = 0; n < e.interactions.list.length; n++) {
                                var r = e.interactions.list[n];
                                if (r.element && (r.element === t.target || (0, _.nodeContains)(r.element, t.target))) return void r.interactable.checkAndPreventDefault(t)
                            }
                        }
                    })
                }

                Object.defineProperty(it, "__esModule", {value: !0}), it.install = lt, it.default = void 0;
                var ut = {
                    id: "core/interactablePreventDefault",
                    install: lt,
                    listeners: ["down", "move", "up", "cancel"].reduce((function (e, t) {
                        return e["interactions:".concat(t)] = st, e
                    }), {})
                };
                it.default = ut;
                var ct = {};
                Object.defineProperty(ct, "__esModule", {value: !0}), ct.default = void 0, ct.default = {};
                var ft, dt = {};
                Object.defineProperty(dt, "__esModule", {value: !0}), dt.default = void 0, function (e) {
                    e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners = "noListeners"
                }(ft || (ft = {})), ft.touchAction, ft.boxSizing, ft.noListeners;
                dt.default = {
                    id: "dev-tools", install: function () {
                    }
                };
                var pt = {};
                Object.defineProperty(pt, "__esModule", {value: !0}), pt.default = function e(t) {
                    var n = {};
                    for (var r in t) {
                        var o = t[r];
                        i.default.plainObject(o) ? n[r] = e(o) : i.default.array(o) ? n[r] = K.from(o) : n[r] = o
                    }
                    return n
                };
                var vt = {};

                function ht(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [], r = !0, o = !1, i = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return gt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gt(e, t) : void 0
                        }
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function gt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function mt(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(vt, "__esModule", {value: !0}), vt.getRectOffset = xt, vt.default = void 0;
                var yt = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), mt(this, "states", []), mt(this, "startOffset", {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }), mt(this, "startDelta", void 0), mt(this, "result", void 0), mt(this, "endResult", void 0), mt(this, "edges", void 0), mt(this, "interaction", void 0), this.interaction = t, this.result = bt()
                    }

                    var t;
                    return (t = [{
                        key: "start", value: function (e, t) {
                            var n = e.phase, r = this.interaction, o = function (e) {
                                var t = e.interactable.options[e.prepared.name], n = t.modifiers;
                                return n && n.length ? n : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function (e) {
                                    var n = t[e];
                                    return n && n.enabled && {options: n, methods: n._methods}
                                })).filter((function (e) {
                                    return !!e
                                }))
                            }(r);
                            this.prepareStates(o), this.edges = (0, M.default)({}, r.edges), this.startOffset = xt(r.rect, t), this.startDelta = {
                                x: 0,
                                y: 0
                            };
                            var i = this.fillArg({phase: n, pageCoords: t, preEnd: !1});
                            return this.result = bt(), this.startAll(i), this.result = this.setAll(i)
                        }
                    }, {
                        key: "fillArg", value: function (e) {
                            var t = this.interaction;
                            return e.interaction = t, e.interactable = t.interactable, e.element = t.element, e.rect = e.rect || t.rect, e.edges = this.edges, e.startOffset = this.startOffset, e
                        }
                    }, {
                        key: "startAll", value: function (e) {
                            for (var t = 0; t < this.states.length; t++) {
                                var n = this.states[t];
                                n.methods.start && (e.state = n, n.methods.start(e))
                            }
                        }
                    }, {
                        key: "setAll", value: function (e) {
                            var t = e.phase, n = e.preEnd, r = e.skipModifiers, o = e.rect;
                            e.coords = (0, M.default)({}, e.pageCoords), e.rect = (0, M.default)({}, o);
                            for (var i = r ? this.states.slice(r) : this.states, a = bt(e.coords, e.rect), s = 0; s < i.length; s++) {
                                var l, u = i[s], c = u.options, f = (0, M.default)({}, e.coords), d = null;
                                null != (l = u.methods) && l.set && this.shouldDo(c, n, t) && (e.state = u, d = u.methods.set(e), j.addEdges(this.interaction.edges, e.rect, {
                                    x: e.coords.x - f.x,
                                    y: e.coords.y - f.y
                                })), a.eventProps.push(d)
                            }
                            a.delta.x = e.coords.x - e.pageCoords.x, a.delta.y = e.coords.y - e.pageCoords.y, a.rectDelta.left = e.rect.left - o.left, a.rectDelta.right = e.rect.right - o.right, a.rectDelta.top = e.rect.top - o.top, a.rectDelta.bottom = e.rect.bottom - o.bottom;
                            var p = this.result.coords, v = this.result.rect;
                            if (p && v) {
                                var h = a.rect.left !== v.left || a.rect.right !== v.right || a.rect.top !== v.top || a.rect.bottom !== v.bottom;
                                a.changed = h || p.x !== a.coords.x || p.y !== a.coords.y
                            }
                            return a
                        }
                    }, {
                        key: "applyToInteraction", value: function (e) {
                            var t = this.interaction, n = e.phase, r = t.coords.cur, o = t.coords.start,
                                i = this.result, a = this.startDelta, s = i.delta;
                            "start" === n && (0, M.default)(this.startDelta, i.delta);
                            for (var l = 0; l < [[o, a], [r, s]].length; l++) {
                                var u = ht([[o, a], [r, s]][l], 2), c = u[0], f = u[1];
                                c.page.x += f.x, c.page.y += f.y, c.client.x += f.x, c.client.y += f.y
                            }
                            var d = this.result.rectDelta, p = e.rect || t.rect;
                            p.left += d.left, p.right += d.right, p.top += d.top, p.bottom += d.bottom, p.width = p.right - p.left, p.height = p.bottom - p.top
                        }
                    }, {
                        key: "setAndApply", value: function (e) {
                            var t = this.interaction, n = e.phase, r = e.preEnd, o = e.skipModifiers,
                                i = this.setAll(this.fillArg({
                                    preEnd: r,
                                    phase: n,
                                    pageCoords: e.modifiedCoords || t.coords.cur.page
                                }));
                            if (this.result = i, !i.changed && (!o || o < this.states.length) && t.interacting()) return !1;
                            if (e.modifiedCoords) {
                                var a = t.coords.cur.page,
                                    s = {x: e.modifiedCoords.x - a.x, y: e.modifiedCoords.y - a.y};
                                i.coords.x += s.x, i.coords.y += s.y, i.delta.x += s.x, i.delta.y += s.y
                            }
                            this.applyToInteraction(e)
                        }
                    }, {
                        key: "beforeEnd", value: function (e) {
                            var t = e.interaction, n = e.event, r = this.states;
                            if (r && r.length) {
                                for (var o = !1, i = 0; i < r.length; i++) {
                                    var a = r[i];
                                    e.state = a;
                                    var s = a.options, l = a.methods, u = l.beforeEnd && l.beforeEnd(e);
                                    if (u) return this.endResult = u, !1;
                                    o = o || !o && this.shouldDo(s, !0, e.phase, !0)
                                }
                                o && t.move({event: n, preEnd: !0})
                            }
                        }
                    }, {
                        key: "stop", value: function (e) {
                            var t = e.interaction;
                            if (this.states && this.states.length) {
                                var n = (0, M.default)({
                                    states: this.states,
                                    interactable: t.interactable,
                                    element: t.element,
                                    rect: null
                                }, e);
                                this.fillArg(n);
                                for (var r = 0; r < this.states.length; r++) {
                                    var o = this.states[r];
                                    n.state = o, o.methods.stop && o.methods.stop(n)
                                }
                                this.states = null, this.endResult = null
                            }
                        }
                    }, {
                        key: "prepareStates", value: function (e) {
                            this.states = [];
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t], r = n.options, o = n.methods, i = n.name;
                                this.states.push({options: r, methods: o, index: t, name: i})
                            }
                            return this.states
                        }
                    }, {
                        key: "restoreInteractionCoords", value: function (e) {
                            var t = e.interaction, n = t.coords, r = t.rect, o = t.modification;
                            if (o.result) {
                                for (var i = o.startDelta, a = o.result, s = a.delta, l = a.rectDelta, u = [[n.start, i], [n.cur, s]], c = 0; c < u.length; c++) {
                                    var f = ht(u[c], 2), d = f[0], p = f[1];
                                    d.page.x -= p.x, d.page.y -= p.y, d.client.x -= p.x, d.client.y -= p.y
                                }
                                r.left -= l.left, r.right -= l.right, r.top -= l.top, r.bottom -= l.bottom
                            }
                        }
                    }, {
                        key: "shouldDo", value: function (e, t, n, r) {
                            return !(!e || !1 === e.enabled || r && !e.endOnly || e.endOnly && !t || "start" === n && !e.setStart)
                        }
                    }, {
                        key: "copyFrom", value: function (e) {
                            this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.edges = e.edges, this.states = e.states.map((function (e) {
                                return (0, pt.default)(e)
                            })), this.result = bt((0, M.default)({}, e.result.coords), (0, M.default)({}, e.result.rect))
                        }
                    }, {
                        key: "destroy", value: function () {
                            for (var e in this) this[e] = null
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(e.prototype, t), e
                }();

                function bt(e, t) {
                    return {
                        rect: t,
                        coords: e,
                        delta: {x: 0, y: 0},
                        rectDelta: {left: 0, right: 0, top: 0, bottom: 0},
                        eventProps: [],
                        changed: !0
                    }
                }

                function xt(e, t) {
                    return e ? {
                        left: t.x - e.left,
                        top: t.y - e.top,
                        right: e.right - t.x,
                        bottom: e.bottom - t.y
                    } : {left: 0, top: 0, right: 0, bottom: 0}
                }

                vt.default = yt;
                var wt = {};

                function _t(e) {
                    var t = e.iEvent, n = e.interaction.modification.result;
                    n && (t.modifiers = n.eventProps)
                }

                Object.defineProperty(wt, "__esModule", {value: !0}), wt.makeModifier = function (e, t) {
                    var n = e.defaults, r = {start: e.start, set: e.set, beforeEnd: e.beforeEnd, stop: e.stop},
                        o = function (e) {
                            var o = e || {};
                            for (var i in o.enabled = !1 !== o.enabled, n) i in o || (o[i] = n[i]);
                            var a = {
                                options: o, methods: r, name: t, enable: function () {
                                    return o.enabled = !0, a
                                }, disable: function () {
                                    return o.enabled = !1, a
                                }
                            };
                            return a
                        };
                    return t && "string" == typeof t && (o._defaults = n, o._methods = r), o
                }, wt.addEventModifiers = _t, wt.default = void 0;
                var Et = {
                    id: "modifiers/base", before: ["actions"], install: function (e) {
                        e.defaults.perAction.modifiers = []
                    }, listeners: {
                        "interactions:new": function (e) {
                            var t = e.interaction;
                            t.modification = new vt.default(t)
                        },
                        "interactions:before-action-start": function (e) {
                            var t = e.interaction.modification;
                            t.start(e, e.interaction.coords.start.page), e.interaction.edges = t.edges, t.applyToInteraction(e)
                        },
                        "interactions:before-action-move": function (e) {
                            return e.interaction.modification.setAndApply(e)
                        },
                        "interactions:before-action-end": function (e) {
                            return e.interaction.modification.beforeEnd(e)
                        },
                        "interactions:action-start": _t,
                        "interactions:action-move": _t,
                        "interactions:action-end": _t,
                        "interactions:after-action-start": function (e) {
                            return e.interaction.modification.restoreInteractionCoords(e)
                        },
                        "interactions:after-action-move": function (e) {
                            return e.interaction.modification.restoreInteractionCoords(e)
                        },
                        "interactions:stop": function (e) {
                            return e.interaction.modification.stop(e)
                        }
                    }
                };
                wt.default = Et;
                var Pt = {};
                Object.defineProperty(Pt, "__esModule", {value: !0}), Pt.defaults = void 0, Pt.defaults = {
                    base: {
                        preventDefault: "auto",
                        deltaSource: "page"
                    }, perAction: {enabled: !1, origin: {x: 0, y: 0}}, actions: {}
                };
                var Ot = {};

                function St(e) {
                    return (St = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function Tt(e, t) {
                    return (Tt = Object.setPrototypeOf || function (e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function kt(e, t) {
                    return !t || "object" !== St(t) && "function" != typeof t ? Mt(e) : t
                }

                function Mt(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function jt(e) {
                    return (jt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function It(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(Ot, "__esModule", {value: !0}), Ot.InteractEvent = void 0;
                var At = function (e) {
                    !function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Tt(e, t)
                    }(i, e);
                    var t, n, r, o = (n = i, r = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                            }))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function () {
                        var e, t = jt(n);
                        if (r) {
                            var o = jt(this).constructor;
                            e = Reflect.construct(t, arguments, o)
                        } else e = t.apply(this, arguments);
                        return kt(this, e)
                    });

                    function i(e, t, n, r, a, s, l) {
                        var u;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), It(Mt(u = o.call(this, e)), "target", void 0), It(Mt(u), "currentTarget", void 0), It(Mt(u), "relatedTarget", null), It(Mt(u), "screenX", void 0), It(Mt(u), "screenY", void 0), It(Mt(u), "button", void 0), It(Mt(u), "buttons", void 0), It(Mt(u), "ctrlKey", void 0), It(Mt(u), "shiftKey", void 0), It(Mt(u), "altKey", void 0), It(Mt(u), "metaKey", void 0), It(Mt(u), "page", void 0), It(Mt(u), "client", void 0), It(Mt(u), "delta", void 0), It(Mt(u), "rect", void 0), It(Mt(u), "x0", void 0), It(Mt(u), "y0", void 0), It(Mt(u), "t0", void 0), It(Mt(u), "dt", void 0), It(Mt(u), "duration", void 0), It(Mt(u), "clientX0", void 0), It(Mt(u), "clientY0", void 0), It(Mt(u), "velocity", void 0), It(Mt(u), "speed", void 0), It(Mt(u), "swipe", void 0), It(Mt(u), "timeStamp", void 0), It(Mt(u), "axes", void 0), It(Mt(u), "preEnd", void 0), a = a || e.element;
                        var c = e.interactable, f = (c && c.options || Pt.defaults).deltaSource,
                            d = (0, D.default)(c, a, n), p = "start" === r, v = "end" === r,
                            h = p ? Mt(u) : e.prevEvent, g = p ? e.coords.start : v ? {
                                page: h.page,
                                client: h.client,
                                timeStamp: e.coords.cur.timeStamp
                            } : e.coords.cur;
                        return u.page = (0, M.default)({}, g.page), u.client = (0, M.default)({}, g.client), u.rect = (0, M.default)({}, e.rect), u.timeStamp = g.timeStamp, v || (u.page.x -= d.x, u.page.y -= d.y, u.client.x -= d.x, u.client.y -= d.y), u.ctrlKey = t.ctrlKey, u.altKey = t.altKey, u.shiftKey = t.shiftKey, u.metaKey = t.metaKey, u.button = t.button, u.buttons = t.buttons, u.target = a, u.currentTarget = a, u.preEnd = s, u.type = l || n + (r || ""), u.interactable = c, u.t0 = p ? e.pointers[e.pointers.length - 1].downTime : h.t0, u.x0 = e.coords.start.page.x - d.x, u.y0 = e.coords.start.page.y - d.y, u.clientX0 = e.coords.start.client.x - d.x, u.clientY0 = e.coords.start.client.y - d.y, u.delta = p || v ? {
                            x: 0,
                            y: 0
                        } : {
                            x: u[f].x - h[f].x,
                            y: u[f].y - h[f].y
                        }, u.dt = e.coords.delta.timeStamp, u.duration = u.timeStamp - u.t0, u.velocity = (0, M.default)({}, e.coords.velocity[f]), u.speed = (0, z.default)(u.velocity.x, u.velocity.y), u.swipe = v || "inertiastart" === r ? u.getSwipe() : null, u
                    }

                    return (t = [{
                        key: "getSwipe", value: function () {
                            var e = this._interaction;
                            if (e.prevEvent.speed < 600 || this.timeStamp - e.prevEvent.timeStamp > 150) return null;
                            var t = 180 * Math.atan2(e.prevEvent.velocityY, e.prevEvent.velocityX) / Math.PI;
                            t < 0 && (t += 360);
                            var n = 112.5 <= t && t < 247.5, r = 202.5 <= t && t < 337.5;
                            return {
                                up: r,
                                down: !r && 22.5 <= t && t < 157.5,
                                left: n,
                                right: !n && (292.5 <= t || t < 67.5),
                                angle: t,
                                speed: e.prevEvent.speed,
                                velocity: {x: e.prevEvent.velocityX, y: e.prevEvent.velocityY}
                            }
                        }
                    }, {
                        key: "preventDefault", value: function () {
                        }
                    }, {
                        key: "stopImmediatePropagation", value: function () {
                            this.immediatePropagationStopped = this.propagationStopped = !0
                        }
                    }, {
                        key: "stopPropagation", value: function () {
                            this.propagationStopped = !0
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(i.prototype, t), i
                }(V.BaseEvent);
                Ot.InteractEvent = At, Object.defineProperties(At.prototype, {
                    pageX: {
                        get: function () {
                            return this.page.x
                        }, set: function (e) {
                            this.page.x = e
                        }
                    }, pageY: {
                        get: function () {
                            return this.page.y
                        }, set: function (e) {
                            this.page.y = e
                        }
                    }, clientX: {
                        get: function () {
                            return this.client.x
                        }, set: function (e) {
                            this.client.x = e
                        }
                    }, clientY: {
                        get: function () {
                            return this.client.y
                        }, set: function (e) {
                            this.client.y = e
                        }
                    }, dx: {
                        get: function () {
                            return this.delta.x
                        }, set: function (e) {
                            this.delta.x = e
                        }
                    }, dy: {
                        get: function () {
                            return this.delta.y
                        }, set: function (e) {
                            this.delta.y = e
                        }
                    }, velocityX: {
                        get: function () {
                            return this.velocity.x
                        }, set: function (e) {
                            this.velocity.x = e
                        }
                    }, velocityY: {
                        get: function () {
                            return this.velocity.y
                        }, set: function (e) {
                            this.velocity.y = e
                        }
                    }
                });
                var Dt = {};

                function Ct(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(Dt, "__esModule", {value: !0}), Dt.PointerInfo = void 0, Dt.PointerInfo = function e(t, n, r, o, i) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), Ct(this, "id", void 0), Ct(this, "pointer", void 0), Ct(this, "event", void 0), Ct(this, "downTime", void 0), Ct(this, "downTarget", void 0), this.id = t, this.pointer = n, this.event = r, this.downTime = o, this.downTarget = i
                };
                var Rt, zt, Bt = {};

                function Ft(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(Bt, "__esModule", {value: !0}), Object.defineProperty(Bt, "PointerInfo", {
                    enumerable: !0,
                    get: function () {
                        return Dt.PointerInfo
                    }
                }), Bt.default = Bt.Interaction = Bt._ProxyMethods = Bt._ProxyValues = void 0, Bt._ProxyValues = Rt, function (e) {
                    e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown = "", e.pointerWasMoved = "", e._proxy = ""
                }(Rt || (Bt._ProxyValues = Rt = {})), Bt._ProxyMethods = zt, function (e) {
                    e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = ""
                }(zt || (Bt._ProxyMethods = zt = {}));
                var Lt = 0, Yt = function () {
                    function e(t) {
                        var n = this, r = t.pointerType, o = t.scopeFire;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), Ft(this, "interactable", null), Ft(this, "element", null), Ft(this, "rect", void 0), Ft(this, "_rects", void 0), Ft(this, "edges", void 0), Ft(this, "_scopeFire", void 0), Ft(this, "prepared", {
                            name: null,
                            axis: null,
                            edges: null
                        }), Ft(this, "pointerType", void 0), Ft(this, "pointers", []), Ft(this, "downEvent", null), Ft(this, "downPointer", {}), Ft(this, "_latestPointer", {
                            pointer: null,
                            event: null,
                            eventTarget: null
                        }), Ft(this, "prevEvent", null), Ft(this, "pointerIsDown", !1), Ft(this, "pointerWasMoved", !1), Ft(this, "_interacting", !1), Ft(this, "_ending", !1), Ft(this, "_stopped", !0), Ft(this, "_proxy", null), Ft(this, "simulation", null), Ft(this, "doMove", (0, Be.warnOnce)((function (e) {
                            this.move(e)
                        }), "The interaction.doMove() method has been renamed to interaction.move()")), Ft(this, "coords", {
                            start: Y.newCoords(),
                            prev: Y.newCoords(),
                            cur: Y.newCoords(),
                            delta: Y.newCoords(),
                            velocity: Y.newCoords()
                        }), Ft(this, "_id", Lt++), this._scopeFire = o, this.pointerType = r;
                        var i = this;
                        this._proxy = {};
                        var a = function (e) {
                            Object.defineProperty(n._proxy, e, {
                                get: function () {
                                    return i[e]
                                }
                            })
                        };
                        for (var s in Rt) a(s);
                        var l = function (e) {
                            Object.defineProperty(n._proxy, e, {
                                value: function () {
                                    return i[e].apply(i, arguments)
                                }
                            })
                        };
                        for (var u in zt) l(u);
                        this._scopeFire("interactions:new", {interaction: this})
                    }

                    var t;
                    return (t = [{
                        key: "pointerMoveTolerance", get: function () {
                            return 1
                        }
                    }, {
                        key: "pointerDown", value: function (e, t, n) {
                            var r = this.updatePointer(e, t, n, !0), o = this.pointers[r];
                            this._scopeFire("interactions:down", {
                                pointer: e,
                                event: t,
                                eventTarget: n,
                                pointerIndex: r,
                                pointerInfo: o,
                                type: "down",
                                interaction: this
                            })
                        }
                    }, {
                        key: "start", value: function (e, t, n) {
                            return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === e.name ? 2 : 1) || !t.options[e.name].enabled) && ((0, Be.copyAction)(this.prepared, e), this.interactable = t, this.element = n, this.rect = t.getRect(n), this.edges = this.prepared.edges ? (0, M.default)({}, this.prepared.edges) : {
                                left: !0,
                                right: !0,
                                top: !0,
                                bottom: !0
                            }, this._stopped = !1, this._interacting = this._doPhase({
                                interaction: this,
                                event: this.downEvent,
                                phase: "start"
                            }) && !this._stopped, this._interacting)
                        }
                    }, {
                        key: "pointerMove", value: function (e, t, n) {
                            this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, t, n, !1);
                            var r, o,
                                i = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
                            this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, z.default)(r, o) > this.pointerMoveTolerance);
                            var a = this.getPointerIndex(e), s = {
                                pointer: e,
                                pointerIndex: a,
                                pointerInfo: this.pointers[a],
                                event: t,
                                type: "move",
                                eventTarget: n,
                                dx: r,
                                dy: o,
                                duplicate: i,
                                interaction: this
                            };
                            i || Y.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", s), i || this.simulation || (this.interacting() && (s.type = null, this.move(s)), this.pointerWasMoved && Y.copyCoords(this.coords.prev, this.coords.cur))
                        }
                    }, {
                        key: "move", value: function (e) {
                            e && e.event || Y.setZeroCoords(this.coords.delta), (e = (0, M.default)({
                                pointer: this._latestPointer.pointer,
                                event: this._latestPointer.event,
                                eventTarget: this._latestPointer.eventTarget,
                                interaction: this
                            }, e || {})).phase = "move", this._doPhase(e)
                        }
                    }, {
                        key: "pointerUp", value: function (e, t, n, r) {
                            var o = this.getPointerIndex(e);
                            -1 === o && (o = this.updatePointer(e, t, n, !1));
                            var i = /cancel$/i.test(t.type) ? "cancel" : "up";
                            this._scopeFire("interactions:".concat(i), {
                                pointer: e,
                                pointerIndex: o,
                                pointerInfo: this.pointers[o],
                                event: t,
                                eventTarget: n,
                                type: i,
                                curEventTarget: r,
                                interaction: this
                            }), this.simulation || this.end(t), this.removePointer(e, t)
                        }
                    }, {
                        key: "documentBlur", value: function (e) {
                            this.end(e), this._scopeFire("interactions:blur", {
                                event: e,
                                type: "blur",
                                interaction: this
                            })
                        }
                    }, {
                        key: "end", value: function (e) {
                            var t;
                            this._ending = !0, e = e || this._latestPointer.event, this.interacting() && (t = this._doPhase({
                                event: e,
                                interaction: this,
                                phase: "end"
                            })), this._ending = !1, !0 === t && this.stop()
                        }
                    }, {
                        key: "currentAction", value: function () {
                            return this._interacting ? this.prepared.name : null
                        }
                    }, {
                        key: "interacting", value: function () {
                            return this._interacting
                        }
                    }, {
                        key: "stop", value: function () {
                            this._scopeFire("interactions:stop", {interaction: this}), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null
                        }
                    }, {
                        key: "getPointerIndex", value: function (e) {
                            var t = Y.getPointerId(e);
                            return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : K.findIndex(this.pointers, (function (e) {
                                return e.id === t
                            }))
                        }
                    }, {
                        key: "getPointerInfo", value: function (e) {
                            return this.pointers[this.getPointerIndex(e)]
                        }
                    }, {
                        key: "updatePointer", value: function (e, t, n, r) {
                            var o = Y.getPointerId(e), i = this.getPointerIndex(e), a = this.pointers[i];
                            return r = !1 !== r && (r || /(down|start)$/i.test(t.type)), a ? a.pointer = e : (a = new Dt.PointerInfo(o, e, t, null, null), i = this.pointers.length, this.pointers.push(a)), Y.setCoords(this.coords.cur, this.pointers.map((function (e) {
                                return e.pointer
                            })), this._now()), Y.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), r && (this.pointerIsDown = !0, a.downTime = this.coords.cur.timeStamp, a.downTarget = n, Y.pointerExtend(this.downPointer, e), this.interacting() || (Y.copyCoords(this.coords.start, this.coords.cur), Y.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = t, this.pointerWasMoved = !1)), this._updateLatestPointer(e, t, n), this._scopeFire("interactions:update-pointer", {
                                pointer: e,
                                event: t,
                                eventTarget: n,
                                down: r,
                                pointerInfo: a,
                                pointerIndex: i,
                                interaction: this
                            }), i
                        }
                    }, {
                        key: "removePointer", value: function (e, t) {
                            var n = this.getPointerIndex(e);
                            if (-1 !== n) {
                                var r = this.pointers[n];
                                this._scopeFire("interactions:remove-pointer", {
                                    pointer: e,
                                    event: t,
                                    eventTarget: null,
                                    pointerIndex: n,
                                    pointerInfo: r,
                                    interaction: this
                                }), this.pointers.splice(n, 1), this.pointerIsDown = !1
                            }
                        }
                    }, {
                        key: "_updateLatestPointer", value: function (e, t, n) {
                            this._latestPointer.pointer = e, this._latestPointer.event = t, this._latestPointer.eventTarget = n
                        }
                    }, {
                        key: "destroy", value: function () {
                            this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null
                        }
                    }, {
                        key: "_createPreparedEvent", value: function (e, t, n, r) {
                            return new Ot.InteractEvent(this, e, this.prepared.name, t, this.element, n, r)
                        }
                    }, {
                        key: "_fireEvent", value: function (e) {
                            this.interactable.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e)
                        }
                    }, {
                        key: "_doPhase", value: function (e) {
                            var t = e.event, n = e.phase, r = e.preEnd, o = e.type, i = this.rect;
                            if (i && "move" === n && (j.addEdges(this.edges, i, this.coords.delta[this.interactable.options.deltaSource]), i.width = i.right - i.left, i.height = i.bottom - i.top), !1 === this._scopeFire("interactions:before-action-".concat(n), e)) return !1;
                            var a = e.iEvent = this._createPreparedEvent(t, n, r, o);
                            return this._scopeFire("interactions:action-".concat(n), e), "start" === n && (this.prevEvent = a), this._fireEvent(a), this._scopeFire("interactions:after-action-".concat(n), e), !0
                        }
                    }, {
                        key: "_now", value: function () {
                            return Date.now()
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(e.prototype, t), e
                }();
                Bt.Interaction = Yt;
                var Xt = Yt;
                Bt.default = Xt;
                var Ut = {};

                function Wt(e) {
                    e.pointerIsDown && (Vt(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0)
                }

                function Nt(e) {
                    qt(e.interaction)
                }

                function qt(e) {
                    if (!function (e) {
                        return !(!e.offset.pending.x && !e.offset.pending.y)
                    }(e)) return !1;
                    var t = e.offset.pending;
                    return Vt(e.coords.cur, t), Vt(e.coords.delta, t), j.addEdges(e.edges, e.rect, t), t.x = 0, t.y = 0, !0
                }

                function $t(e) {
                    var t = e.x, n = e.y;
                    this.offset.pending.x += t, this.offset.pending.y += n, this.offset.total.x += t, this.offset.total.y += n
                }

                function Vt(e, t) {
                    var n = e.page, r = e.client, o = t.x, i = t.y;
                    n.x += o, n.y += i, r.x += o, r.y += i
                }

                Object.defineProperty(Ut, "__esModule", {value: !0}), Ut.addTotal = Wt, Ut.applyPending = qt, Ut.default = void 0, Bt._ProxyMethods.offsetBy = "";
                var Gt = {
                    id: "offset",
                    before: ["modifiers", "pointer-events", "actions", "inertia"],
                    install: function (e) {
                        e.Interaction.prototype.offsetBy = $t
                    },
                    listeners: {
                        "interactions:new": function (e) {
                            e.interaction.offset = {total: {x: 0, y: 0}, pending: {x: 0, y: 0}}
                        },
                        "interactions:update-pointer": function (e) {
                            return Wt(e.interaction)
                        },
                        "interactions:before-action-start": Nt,
                        "interactions:before-action-move": Nt,
                        "interactions:before-action-end": function (e) {
                            var t = e.interaction;
                            if (qt(t)) return t.move({offset: !0}), t.end(), !1
                        },
                        "interactions:stop": function (e) {
                            var t = e.interaction;
                            t.offset.total.x = 0, t.offset.total.y = 0, t.offset.pending.x = 0, t.offset.pending.y = 0
                        }
                    }
                };
                Ut.default = Gt;
                var Ht = {};

                function Kt(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(Ht, "__esModule", {value: !0}), Ht.default = Ht.InertiaState = void 0;
                var Qt = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), Kt(this, "active", !1), Kt(this, "isModified", !1), Kt(this, "smoothEnd", !1), Kt(this, "allowResume", !1), Kt(this, "modification", void 0), Kt(this, "modifierCount", 0), Kt(this, "modifierArg", void 0), Kt(this, "startCoords", void 0), Kt(this, "t0", 0), Kt(this, "v0", 0), Kt(this, "te", 0), Kt(this, "targetOffset", void 0), Kt(this, "modifiedOffset", void 0), Kt(this, "currentOffset", void 0), Kt(this, "lambda_v0", 0), Kt(this, "one_ve_v0", 0), Kt(this, "timeout", void 0), Kt(this, "interaction", void 0), this.interaction = t
                    }

                    var t;
                    return (t = [{
                        key: "start", value: function (e) {
                            var t = this.interaction, n = Zt(t);
                            if (!n || !n.enabled) return !1;
                            var r = t.coords.velocity.client, o = (0, z.default)(r.x, r.y),
                                i = this.modification || (this.modification = new vt.default(t));
                            if (i.copyFrom(t.modification), this.t0 = t._now(), this.allowResume = n.allowResume, this.v0 = o, this.currentOffset = {
                                x: 0,
                                y: 0
                            }, this.startCoords = t.coords.cur.page, this.modifierArg = i.fillArg({
                                pageCoords: this.startCoords,
                                preEnd: !0,
                                phase: "inertiastart"
                            }), this.t0 - t.coords.cur.timeStamp < 50 && o > n.minSpeed && o > n.endSpeed) this.startInertia(); else {
                                if (i.result = i.setAll(this.modifierArg), !i.result.changed) return !1;
                                this.startSmoothEnd()
                            }
                            return t.modification.result.rect = null, t.offsetBy(this.targetOffset), t._doPhase({
                                interaction: t,
                                event: e,
                                phase: "inertiastart"
                            }), t.offsetBy({
                                x: -this.targetOffset.x,
                                y: -this.targetOffset.y
                            }), t.modification.result.rect = null, this.active = !0, t.simulation = this, !0
                        }
                    }, {
                        key: "startInertia", value: function () {
                            var e = this, t = this.interaction.coords.velocity.client, n = Zt(this.interaction),
                                r = n.resistance, o = -Math.log(n.endSpeed / this.v0) / r;
                            this.targetOffset = {
                                x: (t.x - o) / r,
                                y: (t.y - o) / r
                            }, this.te = o, this.lambda_v0 = r / this.v0, this.one_ve_v0 = 1 - n.endSpeed / this.v0;
                            var i = this.modification, a = this.modifierArg;
                            a.pageCoords = {
                                x: this.startCoords.x + this.targetOffset.x,
                                y: this.startCoords.y + this.targetOffset.y
                            }, i.result = i.setAll(a), i.result.changed && (this.isModified = !0, this.modifiedOffset = {
                                x: this.targetOffset.x + i.result.delta.x,
                                y: this.targetOffset.y + i.result.delta.y
                            }), this.onNextFrame((function () {
                                return e.inertiaTick()
                            }))
                        }
                    }, {
                        key: "startSmoothEnd", value: function () {
                            var e = this;
                            this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
                                x: this.modification.result.delta.x,
                                y: this.modification.result.delta.y
                            }, this.onNextFrame((function () {
                                return e.smoothEndTick()
                            }))
                        }
                    }, {
                        key: "onNextFrame", value: function (e) {
                            var t = this;
                            this.timeout = Te.default.request((function () {
                                t.active && e()
                            }))
                        }
                    }, {
                        key: "inertiaTick", value: function () {
                            var e, t, n, r, o, i = this, a = this.interaction, s = Zt(a).resistance,
                                l = (a._now() - this.t0) / 1e3;
                            if (l < this.te) {
                                var u, c = 1 - (Math.exp(-s * l) - this.lambda_v0) / this.one_ve_v0;
                                this.isModified ? (e = this.targetOffset.x, t = this.targetOffset.y, n = this.modifiedOffset.x, r = this.modifiedOffset.y, u = {
                                    x: Jt(o = c, 0, e, n),
                                    y: Jt(o, 0, t, r)
                                }) : u = {x: this.targetOffset.x * c, y: this.targetOffset.y * c};
                                var f = {x: u.x - this.currentOffset.x, y: u.y - this.currentOffset.y};
                                this.currentOffset.x += f.x, this.currentOffset.y += f.y, a.offsetBy(f), a.move(), this.onNextFrame((function () {
                                    return i.inertiaTick()
                                }))
                            } else a.offsetBy({
                                x: this.modifiedOffset.x - this.currentOffset.x,
                                y: this.modifiedOffset.y - this.currentOffset.y
                            }), this.end()
                        }
                    }, {
                        key: "smoothEndTick", value: function () {
                            var e = this, t = this.interaction, n = t._now() - this.t0, r = Zt(t).smoothEndDuration;
                            if (n < r) {
                                var o = {x: en(n, 0, this.targetOffset.x, r), y: en(n, 0, this.targetOffset.y, r)},
                                    i = {x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y};
                                this.currentOffset.x += i.x, this.currentOffset.y += i.y, t.offsetBy(i), t.move({skipModifiers: this.modifierCount}), this.onNextFrame((function () {
                                    return e.smoothEndTick()
                                }))
                            } else t.offsetBy({
                                x: this.targetOffset.x - this.currentOffset.x,
                                y: this.targetOffset.y - this.currentOffset.y
                            }), this.end()
                        }
                    }, {
                        key: "resume", value: function (e) {
                            var t = e.pointer, n = e.event, r = e.eventTarget, o = this.interaction;
                            o.offsetBy({
                                x: -this.currentOffset.x,
                                y: -this.currentOffset.y
                            }), o.updatePointer(t, n, r, !0), o._doPhase({
                                interaction: o,
                                event: n,
                                phase: "resume"
                            }), (0, Y.copyCoords)(o.coords.prev, o.coords.cur), this.stop()
                        }
                    }, {
                        key: "end", value: function () {
                            this.interaction.move(), this.interaction.end(), this.stop()
                        }
                    }, {
                        key: "stop", value: function () {
                            this.active = this.smoothEnd = !1, this.interaction.simulation = null, Te.default.cancel(this.timeout)
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(e.prototype, t), e
                }();

                function Zt(e) {
                    var t = e.interactable, n = e.prepared;
                    return t && t.options && n.name && t.options[n.name].inertia
                }

                function Jt(e, t, n, r) {
                    var o = 1 - e;
                    return o * o * t + 2 * o * e * n + e * e * r
                }

                function en(e, t, n, r) {
                    return -n * (e /= r) * (e - 2) + t
                }

                Ht.InertiaState = Qt;
                var tn = {
                    id: "inertia", before: ["modifiers", "actions"], install: function (e) {
                        var t = e.defaults;
                        e.usePlugin(Ut.default), e.usePlugin(wt.default), e.actions.phases.inertiastart = !0, e.actions.phases.resume = !0, t.perAction.inertia = {
                            enabled: !1,
                            resistance: 10,
                            minSpeed: 100,
                            endSpeed: 10,
                            allowResume: !0,
                            smoothEndDuration: 300
                        }
                    }, listeners: {
                        "interactions:new": function (e) {
                            var t = e.interaction;
                            t.inertia = new Qt(t)
                        },
                        "interactions:before-action-end": function (e) {
                            var t = e.interaction, n = e.event;
                            return (!t._interacting || t.simulation || !t.inertia.start(n)) && null
                        },
                        "interactions:down": function (e) {
                            var t = e.interaction, n = e.eventTarget, r = t.inertia;
                            if (r.active) for (var o = n; i.default.element(o);) {
                                if (o === t.element) {
                                    r.resume(e);
                                    break
                                }
                                o = _.parentNode(o)
                            }
                        },
                        "interactions:stop": function (e) {
                            var t = e.interaction.inertia;
                            t.active && t.stop()
                        },
                        "interactions:before-action-resume": function (e) {
                            var t = e.interaction.modification;
                            t.stop(e), t.start(e, e.interaction.coords.cur.page), t.applyToInteraction(e)
                        },
                        "interactions:before-action-inertiastart": function (e) {
                            return e.interaction.modification.setAndApply(e)
                        },
                        "interactions:action-resume": wt.addEventModifiers,
                        "interactions:action-inertiastart": wt.addEventModifiers,
                        "interactions:after-action-inertiastart": function (e) {
                            return e.interaction.modification.restoreInteractionCoords(e)
                        },
                        "interactions:after-action-resume": function (e) {
                            return e.interaction.modification.restoreInteractionCoords(e)
                        }
                    }
                };
                Ht.default = tn;
                var nn = {};

                function rn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function on(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (e.immediatePropagationStopped) break;
                        r(e)
                    }
                }

                Object.defineProperty(nn, "__esModule", {value: !0}), nn.Eventable = void 0;
                var an = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), rn(this, "options", void 0), rn(this, "types", {}), rn(this, "propagationStopped", !1), rn(this, "immediatePropagationStopped", !1), rn(this, "global", void 0), this.options = (0, M.default)({}, t || {})
                    }

                    var t;
                    return (t = [{
                        key: "fire", value: function (e) {
                            var t, n = this.global;
                            (t = this.types[e.type]) && on(e, t), !e.propagationStopped && n && (t = n[e.type]) && on(e, t)
                        }
                    }, {
                        key: "on", value: function (e, t) {
                            var n = (0, C.default)(e, t);
                            for (e in n) this.types[e] = K.merge(this.types[e] || [], n[e])
                        }
                    }, {
                        key: "off", value: function (e, t) {
                            var n = (0, C.default)(e, t);
                            for (e in n) {
                                var r = this.types[e];
                                if (r && r.length) for (var o = 0; o < n[e].length; o++) {
                                    var i = n[e][o], a = r.indexOf(i);
                                    -1 !== a && r.splice(a, 1)
                                }
                            }
                        }
                    }, {
                        key: "getRect", value: function (e) {
                            return null
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(e.prototype, t), e
                }();
                nn.Eventable = an;
                var sn = {};
                Object.defineProperty(sn, "__esModule", {value: !0}), sn.default = function (e, t) {
                    if (t.phaselessTypes[e]) return !0;
                    for (var n in t.map) if (0 === e.indexOf(n) && e.substr(n.length) in t.phases) return !0;
                    return !1
                };
                var ln = {};
                Object.defineProperty(ln, "__esModule", {value: !0}), ln.createInteractStatic = function (e) {
                    var t = function t(n, r) {
                        var o = e.interactables.get(n, r);
                        return o || ((o = e.interactables.new(n, r)).events.global = t.globalEvents), o
                    };
                    return t.getPointerAverage = Y.pointerAverage, t.getTouchBBox = Y.touchBBox, t.getTouchDistance = Y.touchDistance, t.getTouchAngle = Y.touchAngle, t.getElementRect = _.getElementRect, t.getElementClientRect = _.getElementClientRect, t.matchesSelector = _.matchesSelector, t.closest = _.closest, t.globalEvents = {}, t.version = "1.10.11", t.scope = e, t.use = function (e, t) {
                        return this.scope.usePlugin(e, t), this
                    }, t.isSet = function (e, t) {
                        return !!this.scope.interactables.get(e, t && t.context)
                    }, t.on = (0, Be.warnOnce)((function (e, t, n) {
                        if (i.default.string(e) && -1 !== e.search(" ") && (e = e.trim().split(/ +/)), i.default.array(e)) {
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r];
                                this.on(o, t, n)
                            }
                            return this
                        }
                        if (i.default.object(e)) {
                            for (var a in e) this.on(a, e[a], t);
                            return this
                        }
                        return (0, sn.default)(e, this.scope.actions) ? this.globalEvents[e] ? this.globalEvents[e].push(t) : this.globalEvents[e] = [t] : this.scope.events.add(this.scope.document, e, t, {options: n}), this
                    }), "The interact.on() method is being deprecated"), t.off = (0, Be.warnOnce)((function (e, t, n) {
                        if (i.default.string(e) && -1 !== e.search(" ") && (e = e.trim().split(/ +/)), i.default.array(e)) {
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r];
                                this.off(o, t, n)
                            }
                            return this
                        }
                        if (i.default.object(e)) {
                            for (var a in e) this.off(a, e[a], t);
                            return this
                        }
                        var s;
                        return (0, sn.default)(e, this.scope.actions) ? e in this.globalEvents && -1 !== (s = this.globalEvents[e].indexOf(t)) && this.globalEvents[e].splice(s, 1) : this.scope.events.remove(this.scope.document, e, t, n), this
                    }), "The interact.off() method is being deprecated"), t.debug = function () {
                        return this.scope
                    }, t.supportsTouch = function () {
                        return b.default.supportsTouch
                    }, t.supportsPointerEvent = function () {
                        return b.default.supportsPointerEvent
                    }, t.stop = function () {
                        for (var e = 0; e < this.scope.interactions.list.length; e++) this.scope.interactions.list[e].stop();
                        return this
                    }, t.pointerMoveTolerance = function (e) {
                        return i.default.number(e) ? (this.scope.interactions.pointerMoveTolerance = e, this) : this.scope.interactions.pointerMoveTolerance
                    }, t.addDocument = function (e, t) {
                        this.scope.addDocument(e, t)
                    }, t.removeDocument = function (e) {
                        this.scope.removeDocument(e)
                    }, t
                };
                var un = {};

                function cn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(un, "__esModule", {value: !0}), un.Interactable = void 0;
                var fn = function () {
                    function e(n, r, o, i) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), cn(this, "options", void 0), cn(this, "_actions", void 0), cn(this, "target", void 0), cn(this, "events", new nn.Eventable), cn(this, "_context", void 0), cn(this, "_win", void 0), cn(this, "_doc", void 0), cn(this, "_scopeEvents", void 0), cn(this, "_rectChecker", void 0), this._actions = r.actions, this.target = n, this._context = r.context || o, this._win = (0, t.getWindow)((0, _.trySelector)(n) ? this._context : n), this._doc = this._win.document, this._scopeEvents = i, this.set(r)
                    }

                    var n;
                    return (n = [{
                        key: "_defaults", get: function () {
                            return {base: {}, perAction: {}, actions: {}}
                        }
                    }, {
                        key: "setOnEvents", value: function (e, t) {
                            return i.default.func(t.onstart) && this.on("".concat(e, "start"), t.onstart), i.default.func(t.onmove) && this.on("".concat(e, "move"), t.onmove), i.default.func(t.onend) && this.on("".concat(e, "end"), t.onend), i.default.func(t.oninertiastart) && this.on("".concat(e, "inertiastart"), t.oninertiastart), this
                        }
                    }, {
                        key: "updatePerActionListeners", value: function (e, t, n) {
                            (i.default.array(t) || i.default.object(t)) && this.off(e, t), (i.default.array(n) || i.default.object(n)) && this.on(e, n)
                        }
                    }, {
                        key: "setPerAction", value: function (e, t) {
                            var n = this._defaults;
                            for (var r in t) {
                                var o = r, a = this.options[e], s = t[o];
                                "listeners" === o && this.updatePerActionListeners(e, a.listeners, s), i.default.array(s) ? a[o] = K.from(s) : i.default.plainObject(s) ? (a[o] = (0, M.default)(a[o] || {}, (0, pt.default)(s)), i.default.object(n.perAction[o]) && "enabled" in n.perAction[o] && (a[o].enabled = !1 !== s.enabled)) : i.default.bool(s) && i.default.object(n.perAction[o]) ? a[o].enabled = s : a[o] = s
                            }
                        }
                    }, {
                        key: "getRect", value: function (e) {
                            return e = e || (i.default.element(this.target) ? this.target : null), i.default.string(this.target) && (e = e || this._context.querySelector(this.target)), (0, _.getElementRect)(e)
                        }
                    }, {
                        key: "rectChecker", value: function (e) {
                            var t = this;
                            return i.default.func(e) ? (this._rectChecker = e, this.getRect = function (e) {
                                var n = (0, M.default)({}, t._rectChecker(e));
                                return "width" in n || (n.width = n.right - n.left, n.height = n.bottom - n.top), n
                            }, this) : null === e ? (delete this.getRect, delete this._rectChecker, this) : this.getRect
                        }
                    }, {
                        key: "_backCompatOption", value: function (e, t) {
                            if ((0, _.trySelector)(t) || i.default.object(t)) {
                                for (var n in this.options[e] = t, this._actions.map) this.options[n][e] = t;
                                return this
                            }
                            return this.options[e]
                        }
                    }, {
                        key: "origin", value: function (e) {
                            return this._backCompatOption("origin", e)
                        }
                    }, {
                        key: "deltaSource", value: function (e) {
                            return "page" === e || "client" === e ? (this.options.deltaSource = e, this) : this.options.deltaSource
                        }
                    }, {
                        key: "context", value: function () {
                            return this._context
                        }
                    }, {
                        key: "inContext", value: function (e) {
                            return this._context === e.ownerDocument || (0, _.nodeContains)(this._context, e)
                        }
                    }, {
                        key: "testIgnoreAllow", value: function (e, t, n) {
                            return !this.testIgnore(e.ignoreFrom, t, n) && this.testAllow(e.allowFrom, t, n)
                        }
                    }, {
                        key: "testAllow", value: function (e, t, n) {
                            return !e || !!i.default.element(n) && (i.default.string(e) ? (0, _.matchesUpTo)(n, e, t) : !!i.default.element(e) && (0, _.nodeContains)(e, n))
                        }
                    }, {
                        key: "testIgnore", value: function (e, t, n) {
                            return !(!e || !i.default.element(n)) && (i.default.string(e) ? (0, _.matchesUpTo)(n, e, t) : !!i.default.element(e) && (0, _.nodeContains)(e, n))
                        }
                    }, {
                        key: "fire", value: function (e) {
                            return this.events.fire(e), this
                        }
                    }, {
                        key: "_onOff", value: function (e, t, n, r) {
                            i.default.object(t) && !i.default.array(t) && (r = n, n = null);
                            var o = "on" === e ? "add" : "remove", a = (0, C.default)(t, n);
                            for (var s in a) {
                                "wheel" === s && (s = b.default.wheelEvent);
                                for (var l = 0; l < a[s].length; l++) {
                                    var u = a[s][l];
                                    (0, sn.default)(s, this._actions) ? this.events[e](s, u) : i.default.string(this.target) ? this._scopeEvents["".concat(o, "Delegate")](this.target, this._context, s, u, r) : this._scopeEvents[o](this.target, s, u, r)
                                }
                            }
                            return this
                        }
                    }, {
                        key: "on", value: function (e, t, n) {
                            return this._onOff("on", e, t, n)
                        }
                    }, {
                        key: "off", value: function (e, t, n) {
                            return this._onOff("off", e, t, n)
                        }
                    }, {
                        key: "set", value: function (e) {
                            var t = this._defaults;
                            for (var n in i.default.object(e) || (e = {}), this.options = (0, pt.default)(t.base), this._actions.methodDict) {
                                var r = n, o = this._actions.methodDict[r];
                                this.options[r] = {}, this.setPerAction(r, (0, M.default)((0, M.default)({}, t.perAction), t.actions[r])), this[o](e[r])
                            }
                            for (var a in e) i.default.func(this[a]) && this[a](e[a]);
                            return this
                        }
                    }, {
                        key: "unset", value: function () {
                            if (i.default.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var t = this._scopeEvents.delegatedEvents[e], n = t.length - 1; n >= 0; n--) {
                                var r = t[n], o = r.selector, a = r.context, s = r.listeners;
                                o === this.target && a === this._context && t.splice(n, 1);
                                for (var l = s.length - 1; l >= 0; l--) this._scopeEvents.removeDelegate(this.target, this._context, e, s[l][0], s[l][1])
                            } else this._scopeEvents.remove(this.target, "all")
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(e.prototype, n), e
                }();
                un.Interactable = fn;
                var dn = {};

                function pn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(dn, "__esModule", {value: !0}), dn.InteractableSet = void 0;
                var vn = function () {
                    function e(t) {
                        var n = this;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), pn(this, "list", []), pn(this, "selectorMap", {}), pn(this, "scope", void 0), this.scope = t, t.addListeners({
                            "interactable:unset": function (e) {
                                var t = e.interactable, r = t.target, o = t._context,
                                    a = i.default.string(r) ? n.selectorMap[r] : r[n.scope.id],
                                    s = K.findIndex(a, (function (e) {
                                        return e.context === o
                                    }));
                                a[s] && (a[s].context = null, a[s].interactable = null), a.splice(s, 1)
                            }
                        })
                    }

                    var t;
                    return (t = [{
                        key: "new", value: function (e, t) {
                            t = (0, M.default)(t || {}, {actions: this.scope.actions});
                            var n = new this.scope.Interactable(e, t, this.scope.document, this.scope.events),
                                r = {context: n._context, interactable: n};
                            return this.scope.addDocument(n._doc), this.list.push(n), i.default.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (n.target[this.scope.id] || Object.defineProperty(e, this.scope.id, {
                                value: [],
                                configurable: !0
                            }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", {
                                target: e,
                                options: t,
                                interactable: n,
                                win: this.scope._win
                            }), n
                        }
                    }, {
                        key: "get", value: function (e, t) {
                            var n = t && t.context || this.scope.document, r = i.default.string(e),
                                o = r ? this.selectorMap[e] : e[this.scope.id];
                            if (!o) return null;
                            var a = K.find(o, (function (t) {
                                return t.context === n && (r || t.interactable.inContext(e))
                            }));
                            return a && a.interactable
                        }
                    }, {
                        key: "forEachMatch", value: function (e, t) {
                            for (var n = 0; n < this.list.length; n++) {
                                var r = this.list[n], o = void 0;
                                if ((i.default.string(r.target) ? i.default.element(e) && _.matchesSelector(e, r.target) : e === r.target) && r.inContext(e) && (o = t(r)), void 0 !== o) return o
                            }
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(e.prototype, t), e
                }();
                dn.InteractableSet = vn;
                var hn = {};

                function gn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function mn(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [], r = !0, o = !1, i = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return yn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yn(e, t) : void 0
                        }
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function yn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                Object.defineProperty(hn, "__esModule", {value: !0}), hn.default = void 0;
                var bn = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), gn(this, "currentTarget", void 0), gn(this, "originalEvent", void 0), gn(this, "type", void 0), this.originalEvent = t, (0, B.default)(this, t)
                    }

                    var t;
                    return (t = [{
                        key: "preventOriginalDefault", value: function () {
                            this.originalEvent.preventDefault()
                        }
                    }, {
                        key: "stopPropagation", value: function () {
                            this.originalEvent.stopPropagation()
                        }
                    }, {
                        key: "stopImmediatePropagation", value: function () {
                            this.originalEvent.stopImmediatePropagation()
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(e.prototype, t), e
                }();

                function xn(e) {
                    if (!i.default.object(e)) return {capture: !!e, passive: !1};
                    var t = (0, M.default)({}, e);
                    return t.capture = !!e.capture, t.passive = !!e.passive, t
                }

                var wn = {
                    id: "events", install: function (e) {
                        var t, n = [], r = {}, o = [], a = {
                            add: s,
                            remove: l,
                            addDelegate: function (e, t, n, i, a) {
                                var l = xn(a);
                                if (!r[n]) {
                                    r[n] = [];
                                    for (var f = 0; f < o.length; f++) {
                                        var d = o[f];
                                        s(d, n, u), s(d, n, c, !0)
                                    }
                                }
                                var p = r[n], v = K.find(p, (function (n) {
                                    return n.selector === e && n.context === t
                                }));
                                v || (v = {selector: e, context: t, listeners: []}, p.push(v)), v.listeners.push([i, l])
                            },
                            removeDelegate: function (e, t, n, o, i) {
                                var a, s = xn(i), f = r[n], d = !1;
                                if (f) for (a = f.length - 1; a >= 0; a--) {
                                    var p = f[a];
                                    if (p.selector === e && p.context === t) {
                                        for (var v = p.listeners, h = v.length - 1; h >= 0; h--) {
                                            var g = mn(v[h], 2), m = g[0], y = g[1], b = y.capture, x = y.passive;
                                            if (m === o && b === s.capture && x === s.passive) {
                                                v.splice(h, 1), v.length || (f.splice(a, 1), l(t, n, u), l(t, n, c, !0)), d = !0;
                                                break
                                            }
                                        }
                                        if (d) break
                                    }
                                }
                            },
                            delegateListener: u,
                            delegateUseCapture: c,
                            delegatedEvents: r,
                            documents: o,
                            targets: n,
                            supportsOptions: !1,
                            supportsPassive: !1
                        };

                        function s(e, t, r, o) {
                            var i = xn(o), s = K.find(n, (function (t) {
                                return t.eventTarget === e
                            }));
                            s || (s = {
                                eventTarget: e,
                                events: {}
                            }, n.push(s)), s.events[t] || (s.events[t] = []), e.addEventListener && !K.contains(s.events[t], r) && (e.addEventListener(t, r, a.supportsOptions ? i : i.capture), s.events[t].push(r))
                        }

                        function l(e, t, r, o) {
                            var i = xn(o), s = K.findIndex(n, (function (t) {
                                return t.eventTarget === e
                            })), u = n[s];
                            if (u && u.events) if ("all" !== t) {
                                var c = !1, f = u.events[t];
                                if (f) {
                                    if ("all" === r) {
                                        for (var d = f.length - 1; d >= 0; d--) l(e, t, f[d], i);
                                        return
                                    }
                                    for (var p = 0; p < f.length; p++) if (f[p] === r) {
                                        e.removeEventListener(t, r, a.supportsOptions ? i : i.capture), f.splice(p, 1), 0 === f.length && (delete u.events[t], c = !0);
                                        break
                                    }
                                }
                                c && !Object.keys(u.events).length && n.splice(s, 1)
                            } else for (t in u.events) u.events.hasOwnProperty(t) && l(e, t, "all")
                        }

                        function u(e, t) {
                            for (var n = xn(t), o = new bn(e), a = r[e.type], s = mn(Y.getEventTargets(e), 1)[0], l = s; i.default.element(l);) {
                                for (var u = 0; u < a.length; u++) {
                                    var c = a[u], f = c.selector, d = c.context;
                                    if (_.matchesSelector(l, f) && _.nodeContains(d, s) && _.nodeContains(d, l)) {
                                        var p = c.listeners;
                                        o.currentTarget = l;
                                        for (var v = 0; v < p.length; v++) {
                                            var h = mn(p[v], 2), g = h[0], m = h[1], y = m.capture, b = m.passive;
                                            y === n.capture && b === n.passive && g(o)
                                        }
                                    }
                                }
                                l = _.parentNode(l)
                            }
                        }

                        function c(e) {
                            return u(e, !0)
                        }

                        return null == (t = e.document) || t.createElement("div").addEventListener("test", null, {
                            get capture() {
                                return a.supportsOptions = !0
                            }, get passive() {
                                return a.supportsPassive = !0
                            }
                        }), e.events = a, a
                    }
                };
                hn.default = wn;
                var _n = {};
                Object.defineProperty(_n, "__esModule", {value: !0}), _n.default = void 0;
                var En = {
                    methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function (e) {
                        for (var t = 0; t < En.methodOrder.length; t++) {
                            var n;
                            n = En.methodOrder[t];
                            var r = En[n](e);
                            if (r) return r
                        }
                        return null
                    }, simulationResume: function (e) {
                        var t = e.pointerType, n = e.eventType, r = e.eventTarget, o = e.scope;
                        if (!/down|start/i.test(n)) return null;
                        for (var i = 0; i < o.interactions.list.length; i++) {
                            var a = o.interactions.list[i], s = r;
                            if (a.simulation && a.simulation.allowResume && a.pointerType === t) for (; s;) {
                                if (s === a.element) return a;
                                s = _.parentNode(s)
                            }
                        }
                        return null
                    }, mouseOrPen: function (e) {
                        var t, n = e.pointerId, r = e.pointerType, o = e.eventType, i = e.scope;
                        if ("mouse" !== r && "pen" !== r) return null;
                        for (var a = 0; a < i.interactions.list.length; a++) {
                            var s = i.interactions.list[a];
                            if (s.pointerType === r) {
                                if (s.simulation && !Pn(s, n)) continue;
                                if (s.interacting()) return s;
                                t || (t = s)
                            }
                        }
                        if (t) return t;
                        for (var l = 0; l < i.interactions.list.length; l++) {
                            var u = i.interactions.list[l];
                            if (!(u.pointerType !== r || /down/i.test(o) && u.simulation)) return u
                        }
                        return null
                    }, hasPointer: function (e) {
                        for (var t = e.pointerId, n = e.scope, r = 0; r < n.interactions.list.length; r++) {
                            var o = n.interactions.list[r];
                            if (Pn(o, t)) return o
                        }
                        return null
                    }, idle: function (e) {
                        for (var t = e.pointerType, n = e.scope, r = 0; r < n.interactions.list.length; r++) {
                            var o = n.interactions.list[r];
                            if (1 === o.pointers.length) {
                                var i = o.interactable;
                                if (i && (!i.options.gesture || !i.options.gesture.enabled)) continue
                            } else if (o.pointers.length >= 2) continue;
                            if (!o.interacting() && t === o.pointerType) return o
                        }
                        return null
                    }
                };

                function Pn(e, t) {
                    return e.pointers.some((function (e) {
                        return e.id === t
                    }))
                }

                var On = En;
                _n.default = On;
                var Sn = {};

                function Tn(e) {
                    return (Tn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function kn(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [], r = !0, o = !1, i = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return Mn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mn(e, t) : void 0
                        }
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function Mn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function jn(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function In(e, t) {
                    return (In = Object.setPrototypeOf || function (e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function An(e, t) {
                    return !t || "object" !== Tn(t) && "function" != typeof t ? function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function Dn(e) {
                    return (Dn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                Object.defineProperty(Sn, "__esModule", {value: !0}), Sn.default = void 0;
                var Cn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];

                function Rn(e, t) {
                    return function (n) {
                        var r = t.interactions.list, o = Y.getPointerType(n), i = kn(Y.getEventTargets(n), 2), a = i[0],
                            s = i[1], l = [];
                        if (/^touch/.test(n.type)) {
                            t.prevTouchTime = t.now();
                            for (var u = 0; u < n.changedTouches.length; u++) {
                                var c = n.changedTouches[u], f = {
                                    pointer: c,
                                    pointerId: Y.getPointerId(c),
                                    pointerType: o,
                                    eventType: n.type,
                                    eventTarget: a,
                                    curEventTarget: s,
                                    scope: t
                                }, d = zn(f);
                                l.push([f.pointer, f.eventTarget, f.curEventTarget, d])
                            }
                        } else {
                            var p = !1;
                            if (!b.default.supportsPointerEvent && /mouse/.test(n.type)) {
                                for (var v = 0; v < r.length && !p; v++) p = "mouse" !== r[v].pointerType && r[v].pointerIsDown;
                                p = p || t.now() - t.prevTouchTime < 500 || 0 === n.timeStamp
                            }
                            if (!p) {
                                var h = {
                                    pointer: n,
                                    pointerId: Y.getPointerId(n),
                                    pointerType: o,
                                    eventType: n.type,
                                    curEventTarget: s,
                                    eventTarget: a,
                                    scope: t
                                }, g = zn(h);
                                l.push([h.pointer, h.eventTarget, h.curEventTarget, g])
                            }
                        }
                        for (var m = 0; m < l.length; m++) {
                            var y = kn(l[m], 4), x = y[0], w = y[1], _ = y[2];
                            y[3][e](x, n, w, _)
                        }
                    }
                }

                function zn(e) {
                    var t = e.pointerType, n = e.scope, r = {interaction: _n.default.search(e), searchDetails: e};
                    return n.fire("interactions:find", r), r.interaction || n.interactions.new({pointerType: t})
                }

                function Bn(e, t) {
                    var n = e.doc, r = e.scope, o = e.options, i = r.interactions.docEvents, a = r.events, s = a[t];
                    for (var l in r.browser.isIOS && !o.events && (o.events = {passive: !1}), a.delegatedEvents) s(n, l, a.delegateListener), s(n, l, a.delegateUseCapture, !0);
                    for (var u = o && o.events, c = 0; c < i.length; c++) {
                        var f = i[c];
                        s(n, f.type, f.listener, u)
                    }
                }

                var Fn = {
                    id: "core/interactions", install: function (e) {
                        for (var t = {}, n = 0; n < Cn.length; n++) {
                            var r = Cn[n];
                            t[r] = Rn(r, e)
                        }
                        var o, i = b.default.pEventTypes;

                        function a() {
                            for (var t = 0; t < e.interactions.list.length; t++) {
                                var n = e.interactions.list[t];
                                if (n.pointerIsDown && "touch" === n.pointerType && !n._interacting) for (var r = function () {
                                    var t = n.pointers[o];
                                    e.documents.some((function (e) {
                                        var n = e.doc;
                                        return (0, _.nodeContains)(n, t.downTarget)
                                    })) || n.removePointer(t.pointer, t.event)
                                }, o = 0; o < n.pointers.length; o++) r()
                            }
                        }

                        (o = h.default.PointerEvent ? [{type: i.down, listener: a}, {
                            type: i.down,
                            listener: t.pointerDown
                        }, {type: i.move, listener: t.pointerMove}, {
                            type: i.up,
                            listener: t.pointerUp
                        }, {type: i.cancel, listener: t.pointerUp}] : [{
                            type: "mousedown",
                            listener: t.pointerDown
                        }, {type: "mousemove", listener: t.pointerMove}, {
                            type: "mouseup",
                            listener: t.pointerUp
                        }, {type: "touchstart", listener: a}, {
                            type: "touchstart",
                            listener: t.pointerDown
                        }, {type: "touchmove", listener: t.pointerMove}, {
                            type: "touchend",
                            listener: t.pointerUp
                        }, {type: "touchcancel", listener: t.pointerUp}]).push({
                            type: "blur", listener: function (t) {
                                for (var n = 0; n < e.interactions.list.length; n++) e.interactions.list[n].documentBlur(t)
                            }
                        }), e.prevTouchTime = 0, e.Interaction = function (t) {
                            !function (e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && In(e, t)
                            }(a, t);
                            var n, r, o, i = (r = a, o = function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                    }))), !0
                                } catch (e) {
                                    return !1
                                }
                            }(), function () {
                                var e, t = Dn(r);
                                if (o) {
                                    var n = Dn(this).constructor;
                                    e = Reflect.construct(t, arguments, n)
                                } else e = t.apply(this, arguments);
                                return An(this, e)
                            });

                            function a() {
                                return jn(this, a), i.apply(this, arguments)
                            }

                            return (n = [{
                                key: "pointerMoveTolerance", get: function () {
                                    return e.interactions.pointerMoveTolerance
                                }, set: function (t) {
                                    e.interactions.pointerMoveTolerance = t
                                }
                            }, {
                                key: "_now", value: function () {
                                    return e.now()
                                }
                            }]) && function (e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }(a.prototype, n), a
                        }(Bt.default), e.interactions = {
                            list: [], new: function (t) {
                                t.scopeFire = function (t, n) {
                                    return e.fire(t, n)
                                };
                                var n = new e.Interaction(t);
                                return e.interactions.list.push(n), n
                            }, listeners: t, docEvents: o, pointerMoveTolerance: 1
                        }, e.usePlugin(it.default)
                    }, listeners: {
                        "scope:add-document": function (e) {
                            return Bn(e, "add")
                        }, "scope:remove-document": function (e) {
                            return Bn(e, "remove")
                        }, "interactable:unset": function (e, t) {
                            for (var n = e.interactable, r = t.interactions.list.length - 1; r >= 0; r--) {
                                var o = t.interactions.list[r];
                                o.interactable === n && (o.stop(), t.fire("interactions:destroy", {interaction: o}), o.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(r, 1))
                            }
                        }
                    }, onDocSignal: Bn, doOnInteractions: Rn, methodNames: Cn
                };
                Sn.default = Fn;
                var Ln = {};

                function Yn(e) {
                    return (Yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function Xn(e, t, n) {
                    return (Xn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                        var r = function (e, t) {
                            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Nn(e));) ;
                            return e
                        }(e, t);
                        if (r) {
                            var o = Object.getOwnPropertyDescriptor(r, t);
                            return o.get ? o.get.call(n) : o.value
                        }
                    })(e, t, n || e)
                }

                function Un(e, t) {
                    return (Un = Object.setPrototypeOf || function (e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function Wn(e, t) {
                    return !t || "object" !== Yn(t) && "function" != typeof t ? function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function Nn(e) {
                    return (Nn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function qn(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function $n(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function Vn(e, t, n) {
                    return t && $n(e.prototype, t), n && $n(e, n), e
                }

                function Gn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(Ln, "__esModule", {value: !0}), Ln.initScope = Kn, Ln.Scope = void 0;
                var Hn = function () {
                    function e() {
                        var t = this;
                        qn(this, e), Gn(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), Gn(this, "isInitialized", !1), Gn(this, "listenerMaps", []), Gn(this, "browser", b.default), Gn(this, "defaults", (0, pt.default)(Pt.defaults)), Gn(this, "Eventable", nn.Eventable), Gn(this, "actions", {
                            map: {},
                            phases: {start: !0, move: !0, end: !0},
                            methodDict: {},
                            phaselessTypes: {}
                        }), Gn(this, "interactStatic", (0, ln.createInteractStatic)(this)), Gn(this, "InteractEvent", Ot.InteractEvent), Gn(this, "Interactable", void 0), Gn(this, "interactables", new dn.InteractableSet(this)), Gn(this, "_win", void 0), Gn(this, "document", void 0), Gn(this, "window", void 0), Gn(this, "documents", []), Gn(this, "_plugins", {
                            list: [],
                            map: {}
                        }), Gn(this, "onWindowUnload", (function (e) {
                            return t.removeDocument(e.target)
                        }));
                        var n = this;
                        this.Interactable = function (e) {
                            !function (e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && Un(e, t)
                            }(i, e);
                            var t, r, o = (t = i, r = function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                    }))), !0
                                } catch (e) {
                                    return !1
                                }
                            }(), function () {
                                var e, n = Nn(t);
                                if (r) {
                                    var o = Nn(this).constructor;
                                    e = Reflect.construct(n, arguments, o)
                                } else e = n.apply(this, arguments);
                                return Wn(this, e)
                            });

                            function i() {
                                return qn(this, i), o.apply(this, arguments)
                            }

                            return Vn(i, [{
                                key: "_defaults", get: function () {
                                    return n.defaults
                                }
                            }, {
                                key: "set", value: function (e) {
                                    return Xn(Nn(i.prototype), "set", this).call(this, e), n.fire("interactable:set", {
                                        options: e,
                                        interactable: this
                                    }), this
                                }
                            }, {
                                key: "unset", value: function () {
                                    Xn(Nn(i.prototype), "unset", this).call(this), n.interactables.list.splice(n.interactables.list.indexOf(this), 1), n.fire("interactable:unset", {interactable: this})
                                }
                            }]), i
                        }(un.Interactable)
                    }

                    return Vn(e, [{
                        key: "addListeners", value: function (e, t) {
                            this.listenerMaps.push({id: t, map: e})
                        }
                    }, {
                        key: "fire", value: function (e, t) {
                            for (var n = 0; n < this.listenerMaps.length; n++) {
                                var r = this.listenerMaps[n].map[e];
                                if (r && !1 === r(t, this, e)) return !1
                            }
                        }
                    }, {
                        key: "init", value: function (e) {
                            return this.isInitialized ? this : Kn(this, e)
                        }
                    }, {
                        key: "pluginIsInstalled", value: function (e) {
                            return this._plugins.map[e.id] || -1 !== this._plugins.list.indexOf(e)
                        }
                    }, {
                        key: "usePlugin", value: function (e, t) {
                            if (!this.isInitialized) return this;
                            if (this.pluginIsInstalled(e)) return this;
                            if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, t), e.listeners && e.before) {
                                for (var n = 0, r = this.listenerMaps.length, o = e.before.reduce((function (e, t) {
                                    return e[t] = !0, e[Qn(t)] = !0, e
                                }), {}); n < r; n++) {
                                    var i = this.listenerMaps[n].id;
                                    if (o[i] || o[Qn(i)]) break
                                }
                                this.listenerMaps.splice(n, 0, {id: e.id, map: e.listeners})
                            } else e.listeners && this.listenerMaps.push({id: e.id, map: e.listeners});
                            return this
                        }
                    }, {
                        key: "addDocument", value: function (e, n) {
                            if (-1 !== this.getDocIndex(e)) return !1;
                            var r = t.getWindow(e);
                            n = n ? (0, M.default)({}, n) : {}, this.documents.push({
                                doc: e,
                                options: n
                            }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", {
                                doc: e,
                                window: r,
                                scope: this,
                                options: n
                            })
                        }
                    }, {
                        key: "removeDocument", value: function (e) {
                            var n = this.getDocIndex(e), r = t.getWindow(e), o = this.documents[n].options;
                            this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", {
                                doc: e,
                                window: r,
                                scope: this,
                                options: o
                            })
                        }
                    }, {
                        key: "getDocIndex", value: function (e) {
                            for (var t = 0; t < this.documents.length; t++) if (this.documents[t].doc === e) return t;
                            return -1
                        }
                    }, {
                        key: "getDocOptions", value: function (e) {
                            var t = this.getDocIndex(e);
                            return -1 === t ? null : this.documents[t].options
                        }
                    }, {
                        key: "now", value: function () {
                            return (this.window.Date || Date).now()
                        }
                    }]), e
                }();

                function Kn(e, n) {
                    return e.isInitialized = !0, i.default.window(n) && t.init(n), h.default.init(n), b.default.init(n), Te.default.init(n), e.window = n, e.document = n.document, e.usePlugin(Sn.default), e.usePlugin(hn.default), e
                }

                function Qn(e) {
                    return e && e.replace(/\/.*$/, "")
                }

                Ln.Scope = Hn;
                var Zn = {};
                Object.defineProperty(Zn, "__esModule", {value: !0}), Zn.default = void 0;
                var Jn = new Ln.Scope, er = Jn.interactStatic;
                Zn.default = er;
                var tr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0;
                Jn.init(tr);
                var nr = {};
                Object.defineProperty(nr, "__esModule", {value: !0}), nr.default = void 0, nr.default = function () {
                };
                var rr = {};
                Object.defineProperty(rr, "__esModule", {value: !0}), rr.default = void 0, rr.default = function () {
                };
                var or = {};

                function ir(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [], r = !0, o = !1, i = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return ar(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ar(e, t) : void 0
                        }
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function ar(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                Object.defineProperty(or, "__esModule", {value: !0}), or.default = void 0, or.default = function (e) {
                    var t = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function (t) {
                        var n = ir(t, 2), r = n[0], o = n[1];
                        return r in e || o in e
                    })), n = function (n, r) {
                        for (var o = e.range, i = e.limits, a = void 0 === i ? {
                            left: -1 / 0,
                            right: 1 / 0,
                            top: -1 / 0,
                            bottom: 1 / 0
                        } : i, s = e.offset, l = void 0 === s ? {x: 0, y: 0} : s, u = {
                            range: o,
                            grid: e,
                            x: null,
                            y: null
                        }, c = 0; c < t.length; c++) {
                            var f = ir(t[c], 2), d = f[0], p = f[1], v = Math.round((n - l.x) / e[d]),
                                h = Math.round((r - l.y) / e[p]);
                            u[d] = Math.max(a.left, Math.min(a.right, v * e[d] + l.x)), u[p] = Math.max(a.top, Math.min(a.bottom, h * e[p] + l.y))
                        }
                        return u
                    };
                    return n.grid = e, n.coordFields = t, n
                };
                var sr = {};
                Object.defineProperty(sr, "__esModule", {value: !0}), Object.defineProperty(sr, "edgeTarget", {
                    enumerable: !0,
                    get: function () {
                        return nr.default
                    }
                }), Object.defineProperty(sr, "elements", {
                    enumerable: !0, get: function () {
                        return rr.default
                    }
                }), Object.defineProperty(sr, "grid", {
                    enumerable: !0, get: function () {
                        return or.default
                    }
                });
                var lr = {};
                Object.defineProperty(lr, "__esModule", {value: !0}), lr.default = void 0;
                var ur = {
                    id: "snappers", install: function (e) {
                        var t = e.interactStatic;
                        t.snappers = (0, M.default)(t.snappers || {}, sr), t.createSnapGrid = t.snappers.grid
                    }
                };
                lr.default = ur;
                var cr = {};

                function fr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function dr(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? fr(Object(n), !0).forEach((function (t) {
                            pr(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fr(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function pr(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(cr, "__esModule", {value: !0}), cr.aspectRatio = cr.default = void 0;
                var vr = {
                    start: function (e) {
                        var t = e.state, n = e.rect, r = e.edges, o = e.pageCoords, i = t.options.ratio, a = t.options,
                            s = a.equalDelta, l = a.modifiers;
                        "preserve" === i && (i = n.width / n.height), t.startCoords = (0, M.default)({}, o), t.startRect = (0, M.default)({}, n), t.ratio = i, t.equalDelta = s;
                        var u = t.linkedEdges = {
                            top: r.top || r.left && !r.bottom,
                            left: r.left || r.top && !r.right,
                            bottom: r.bottom || r.right && !r.top,
                            right: r.right || r.bottom && !r.left
                        };
                        if (t.xIsPrimaryAxis = !(!r.left && !r.right), t.equalDelta) t.edgeSign = (u.left ? 1 : -1) * (u.top ? 1 : -1); else {
                            var c = t.xIsPrimaryAxis ? u.top : u.left;
                            t.edgeSign = c ? -1 : 1
                        }
                        if ((0, M.default)(e.edges, u), l && l.length) {
                            var f = new vt.default(e.interaction);
                            f.copyFrom(e.interaction.modification), f.prepareStates(l), t.subModification = f, f.startAll(dr({}, e))
                        }
                    }, set: function (e) {
                        var t = e.state, n = e.rect, r = e.coords, o = (0, M.default)({}, r),
                            i = t.equalDelta ? hr : gr;
                        if (i(t, t.xIsPrimaryAxis, r, n), !t.subModification) return null;
                        var a = (0, M.default)({}, n);
                        (0, j.addEdges)(t.linkedEdges, a, {x: r.x - o.x, y: r.y - o.y});
                        var s = t.subModification.setAll(dr(dr({}, e), {}, {
                            rect: a,
                            edges: t.linkedEdges,
                            pageCoords: r,
                            prevCoords: r,
                            prevRect: a
                        })), l = s.delta;
                        return s.changed && (i(t, Math.abs(l.x) > Math.abs(l.y), s.coords, s.rect), (0, M.default)(r, s.coords)), s.eventProps
                    }, defaults: {ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1}
                };

                function hr(e, t, n) {
                    var r = e.startCoords, o = e.edgeSign;
                    t ? n.y = r.y + (n.x - r.x) * o : n.x = r.x + (n.y - r.y) * o
                }

                function gr(e, t, n, r) {
                    var o = e.startRect, i = e.startCoords, a = e.ratio, s = e.edgeSign;
                    if (t) {
                        var l = r.width / a;
                        n.y = i.y + (l - o.height) * s
                    } else {
                        var u = r.height * a;
                        n.x = i.x + (u - o.width) * s
                    }
                }

                cr.aspectRatio = vr;
                var mr = (0, wt.makeModifier)(vr, "aspectRatio");
                cr.default = mr;
                var yr = {};
                Object.defineProperty(yr, "__esModule", {value: !0}), yr.default = void 0;
                var br = function () {
                };
                br._defaults = {};
                var xr = br;
                yr.default = xr;
                var wr = {};
                Object.defineProperty(wr, "__esModule", {value: !0}), Object.defineProperty(wr, "default", {
                    enumerable: !0,
                    get: function () {
                        return yr.default
                    }
                });
                var _r = {};

                function Er(e, t, n) {
                    return i.default.func(e) ? j.resolveRectLike(e, t.interactable, t.element, [n.x, n.y, t]) : j.resolveRectLike(e, t.interactable, t.element)
                }

                Object.defineProperty(_r, "__esModule", {value: !0}), _r.getRestrictionRect = Er, _r.restrict = _r.default = void 0;
                var Pr = {
                    start: function (e) {
                        var t = e.rect, n = e.startOffset, r = e.state, o = e.interaction, i = e.pageCoords,
                            a = r.options, s = a.elementRect,
                            l = (0, M.default)({left: 0, top: 0, right: 0, bottom: 0}, a.offset || {});
                        if (t && s) {
                            var u = Er(a.restriction, o, i);
                            if (u) {
                                var c = u.right - u.left - t.width, f = u.bottom - u.top - t.height;
                                c < 0 && (l.left += c, l.right += c), f < 0 && (l.top += f, l.bottom += f)
                            }
                            l.left += n.left - t.width * s.left, l.top += n.top - t.height * s.top, l.right += n.right - t.width * (1 - s.right), l.bottom += n.bottom - t.height * (1 - s.bottom)
                        }
                        r.offset = l
                    }, set: function (e) {
                        var t = e.coords, n = e.interaction, r = e.state, o = r.options, i = r.offset,
                            a = Er(o.restriction, n, t);
                        if (a) {
                            var s = j.xywhToTlbr(a);
                            t.x = Math.max(Math.min(s.right - i.right, t.x), s.left + i.left), t.y = Math.max(Math.min(s.bottom - i.bottom, t.y), s.top + i.top)
                        }
                    }, defaults: {restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1}
                };
                _r.restrict = Pr;
                var Or = (0, wt.makeModifier)(Pr, "restrict");
                _r.default = Or;
                var Sr = {};
                Object.defineProperty(Sr, "__esModule", {value: !0}), Sr.restrictEdges = Sr.default = void 0;
                var Tr = {top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0},
                    kr = {top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0};

                function Mr(e, t) {
                    for (var n = ["top", "left", "bottom", "right"], r = 0; r < n.length; r++) {
                        var o = n[r];
                        o in e || (e[o] = t[o])
                    }
                    return e
                }

                var jr = {
                    noInner: Tr, noOuter: kr, start: function (e) {
                        var t, n = e.interaction, r = e.startOffset, o = e.state, i = o.options;
                        if (i) {
                            var a = (0, _r.getRestrictionRect)(i.offset, n, n.coords.start.page);
                            t = j.rectToXY(a)
                        }
                        t = t || {x: 0, y: 0}, o.offset = {
                            top: t.y + r.top,
                            left: t.x + r.left,
                            bottom: t.y - r.bottom,
                            right: t.x - r.right
                        }
                    }, set: function (e) {
                        var t = e.coords, n = e.edges, r = e.interaction, o = e.state, i = o.offset, a = o.options;
                        if (n) {
                            var s = (0, M.default)({}, t), l = (0, _r.getRestrictionRect)(a.inner, r, s) || {},
                                u = (0, _r.getRestrictionRect)(a.outer, r, s) || {};
                            Mr(l, Tr), Mr(u, kr), n.top ? t.y = Math.min(Math.max(u.top + i.top, s.y), l.top + i.top) : n.bottom && (t.y = Math.max(Math.min(u.bottom + i.bottom, s.y), l.bottom + i.bottom)), n.left ? t.x = Math.min(Math.max(u.left + i.left, s.x), l.left + i.left) : n.right && (t.x = Math.max(Math.min(u.right + i.right, s.x), l.right + i.right))
                        }
                    }, defaults: {inner: null, outer: null, offset: null, endOnly: !1, enabled: !1}
                };
                Sr.restrictEdges = jr;
                var Ir = (0, wt.makeModifier)(jr, "restrictEdges");
                Sr.default = Ir;
                var Ar = {};
                Object.defineProperty(Ar, "__esModule", {value: !0}), Ar.restrictRect = Ar.default = void 0;
                var Dr = (0, M.default)({
                    get elementRect() {
                        return {top: 0, left: 0, bottom: 1, right: 1}
                    }, set elementRect(e) {
                    }
                }, _r.restrict.defaults), Cr = {start: _r.restrict.start, set: _r.restrict.set, defaults: Dr};
                Ar.restrictRect = Cr;
                var Rr = (0, wt.makeModifier)(Cr, "restrictRect");
                Ar.default = Rr;
                var zr = {};
                Object.defineProperty(zr, "__esModule", {value: !0}), zr.restrictSize = zr.default = void 0;
                var Br = {width: -1 / 0, height: -1 / 0}, Fr = {width: 1 / 0, height: 1 / 0}, Lr = {
                    start: function (e) {
                        return Sr.restrictEdges.start(e)
                    }, set: function (e) {
                        var t = e.interaction, n = e.state, r = e.rect, o = e.edges, i = n.options;
                        if (o) {
                            var a = j.tlbrToXywh((0, _r.getRestrictionRect)(i.min, t, e.coords)) || Br,
                                s = j.tlbrToXywh((0, _r.getRestrictionRect)(i.max, t, e.coords)) || Fr;
                            n.options = {
                                endOnly: i.endOnly,
                                inner: (0, M.default)({}, Sr.restrictEdges.noInner),
                                outer: (0, M.default)({}, Sr.restrictEdges.noOuter)
                            }, o.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : o.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), o.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : o.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), Sr.restrictEdges.set(e), n.options = i
                        }
                    }, defaults: {min: null, max: null, endOnly: !1, enabled: !1}
                };
                zr.restrictSize = Lr;
                var Yr = (0, wt.makeModifier)(Lr, "restrictSize");
                zr.default = Yr;
                var Xr = {};
                Object.defineProperty(Xr, "__esModule", {value: !0}), Object.defineProperty(Xr, "default", {
                    enumerable: !0,
                    get: function () {
                        return yr.default
                    }
                });
                var Ur = {};
                Object.defineProperty(Ur, "__esModule", {value: !0}), Ur.snap = Ur.default = void 0;
                var Wr = {
                    start: function (e) {
                        var t, n = e.interaction, r = e.interactable, o = e.element, i = e.rect, a = e.state,
                            s = e.startOffset, l = a.options, u = l.offsetWithOrigin ? function (e) {
                                var t = e.interaction.element;
                                return (0, j.rectToXY)((0, j.resolveRectLike)(e.state.options.origin, null, null, [t])) || (0, D.default)(e.interactable, t, e.interaction.prepared.name)
                            }(e) : {x: 0, y: 0};
                        if ("startCoords" === l.offset) t = {x: n.coords.start.page.x, y: n.coords.start.page.y}; else {
                            var c = (0, j.resolveRectLike)(l.offset, r, o, [n]);
                            (t = (0, j.rectToXY)(c) || {x: 0, y: 0}).x += u.x, t.y += u.y
                        }
                        var f = l.relativePoints;
                        a.offsets = i && f && f.length ? f.map((function (e, n) {
                            return {
                                index: n,
                                relativePoint: e,
                                x: s.left - i.width * e.x + t.x,
                                y: s.top - i.height * e.y + t.y
                            }
                        })) : [{index: 0, relativePoint: null, x: t.x, y: t.y}]
                    },
                    set: function (e) {
                        var t = e.interaction, n = e.coords, r = e.state, o = r.options, a = r.offsets,
                            s = (0, D.default)(t.interactable, t.element, t.prepared.name), l = (0, M.default)({}, n),
                            u = [];
                        o.offsetWithOrigin || (l.x -= s.x, l.y -= s.y);
                        for (var c = 0; c < a.length; c++) for (var f = a[c], d = l.x - f.x, p = l.y - f.y, v = 0, h = o.targets.length; v < h; v++) {
                            var g, m = o.targets[v];
                            (g = i.default.func(m) ? m(d, p, t._proxy, f, v) : m) && u.push({
                                x: (i.default.number(g.x) ? g.x : d) + f.x,
                                y: (i.default.number(g.y) ? g.y : p) + f.y,
                                range: i.default.number(g.range) ? g.range : o.range,
                                source: m,
                                index: v,
                                offset: f
                            })
                        }
                        for (var y = {
                            target: null,
                            inRange: !1,
                            distance: 0,
                            range: 0,
                            delta: {x: 0, y: 0}
                        }, b = 0; b < u.length; b++) {
                            var x = u[b], w = x.range, _ = x.x - l.x, E = x.y - l.y, P = (0, z.default)(_, E),
                                O = P <= w;
                            w === 1 / 0 && y.inRange && y.range !== 1 / 0 && (O = !1), y.target && !(O ? y.inRange && w !== 1 / 0 ? P / w < y.distance / y.range : w === 1 / 0 && y.range !== 1 / 0 || P < y.distance : !y.inRange && P < y.distance) || (y.target = x, y.distance = P, y.range = w, y.inRange = O, y.delta.x = _, y.delta.y = E)
                        }
                        return y.inRange && (n.x = y.target.x, n.y = y.target.y), r.closest = y, y
                    },
                    defaults: {
                        range: 1 / 0,
                        targets: null,
                        offset: null,
                        offsetWithOrigin: !0,
                        origin: null,
                        relativePoints: null,
                        endOnly: !1,
                        enabled: !1
                    }
                };
                Ur.snap = Wr;
                var Nr = (0, wt.makeModifier)(Wr, "snap");
                Ur.default = Nr;
                var qr = {};

                function $r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                Object.defineProperty(qr, "__esModule", {value: !0}), qr.snapSize = qr.default = void 0;
                var Vr = {
                    start: function (e) {
                        var t = e.state, n = e.edges, r = t.options;
                        if (!n) return null;
                        e.state = {
                            options: {
                                targets: null,
                                relativePoints: [{x: n.left ? 0 : 1, y: n.top ? 0 : 1}],
                                offset: r.offset || "self",
                                origin: {x: 0, y: 0},
                                range: r.range
                            }
                        }, t.targetFields = t.targetFields || [["width", "height"], ["x", "y"]], Ur.snap.start(e), t.offsets = e.state.offsets, e.state = t
                    }, set: function (e) {
                        var t, n = e.interaction, r = e.state, o = e.coords, a = r.options, s = r.offsets,
                            l = {x: o.x - s[0].x, y: o.y - s[0].y};
                        r.options = (0, M.default)({}, a), r.options.targets = [];
                        for (var u = 0; u < (a.targets || []).length; u++) {
                            var c = (a.targets || [])[u], f = void 0;
                            if (f = i.default.func(c) ? c(l.x, l.y, n) : c) {
                                for (var d = 0; d < r.targetFields.length; d++) {
                                    var p = (2, function (e) {
                                        if (Array.isArray(e)) return e
                                    }(t = r.targetFields[d]) || function (e, t) {
                                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                            var n = [], r = !0, o = !1, i = void 0;
                                            try {
                                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 2 !== n.length); r = !0) ;
                                            } catch (e) {
                                                o = !0, i = e
                                            } finally {
                                                try {
                                                    r || null == s.return || s.return()
                                                } finally {
                                                    if (o) throw i
                                                }
                                            }
                                            return n
                                        }
                                    }(t) || function (e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return $r(e, 2);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $r(e, 2) : void 0
                                        }
                                    }(t) || function () {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()), v = p[0], h = p[1];
                                    if (v in f || h in f) {
                                        f.x = f[v], f.y = f[h];
                                        break
                                    }
                                }
                                r.options.targets.push(f)
                            }
                        }
                        var g = Ur.snap.set(e);
                        return r.options = a, g
                    }, defaults: {range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1}
                };
                qr.snapSize = Vr;
                var Gr = (0, wt.makeModifier)(Vr, "snapSize");
                qr.default = Gr;
                var Hr = {};
                Object.defineProperty(Hr, "__esModule", {value: !0}), Hr.snapEdges = Hr.default = void 0;
                var Kr = {
                    start: function (e) {
                        var t = e.edges;
                        return t ? (e.state.targetFields = e.state.targetFields || [[t.left ? "left" : "right", t.top ? "top" : "bottom"]], qr.snapSize.start(e)) : null
                    },
                    set: qr.snapSize.set,
                    defaults: (0, M.default)((0, pt.default)(qr.snapSize.defaults), {
                        targets: null,
                        range: null,
                        offset: {x: 0, y: 0}
                    })
                };
                Hr.snapEdges = Kr;
                var Qr = (0, wt.makeModifier)(Kr, "snapEdges");
                Hr.default = Qr;
                var Zr = {};
                Object.defineProperty(Zr, "__esModule", {value: !0}), Object.defineProperty(Zr, "default", {
                    enumerable: !0,
                    get: function () {
                        return yr.default
                    }
                });
                var Jr = {};
                Object.defineProperty(Jr, "__esModule", {value: !0}), Object.defineProperty(Jr, "default", {
                    enumerable: !0,
                    get: function () {
                        return yr.default
                    }
                });
                var eo = {};
                Object.defineProperty(eo, "__esModule", {value: !0}), eo.default = void 0;
                var to = {
                    aspectRatio: cr.default,
                    restrictEdges: Sr.default,
                    restrict: _r.default,
                    restrictRect: Ar.default,
                    restrictSize: zr.default,
                    snapEdges: Hr.default,
                    snap: Ur.default,
                    snapSize: qr.default,
                    spring: Zr.default,
                    avoid: wr.default,
                    transform: Jr.default,
                    rubberband: Xr.default
                };
                eo.default = to;
                var no = {};
                Object.defineProperty(no, "__esModule", {value: !0}), no.default = void 0;
                var ro = {
                    id: "modifiers", install: function (e) {
                        var t = e.interactStatic;
                        for (var n in e.usePlugin(wt.default), e.usePlugin(lr.default), t.modifiers = eo.default, eo.default) {
                            var r = eo.default[n], o = r._defaults, i = r._methods;
                            o._methods = i, e.defaults.perAction[n] = o
                        }
                    }
                };
                no.default = ro;
                var oo = {};

                function io(e) {
                    return (io = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function ao(e, t) {
                    return (ao = Object.setPrototypeOf || function (e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function so(e, t) {
                    return !t || "object" !== io(t) && "function" != typeof t ? lo(e) : t
                }

                function lo(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function uo(e) {
                    return (uo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function co(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(oo, "__esModule", {value: !0}), oo.PointerEvent = oo.default = void 0;
                var fo = function (e) {
                    !function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && ao(e, t)
                    }(i, e);
                    var t, n, r, o = (n = i, r = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                            }))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function () {
                        var e, t = uo(n);
                        if (r) {
                            var o = uo(this).constructor;
                            e = Reflect.construct(t, arguments, o)
                        } else e = t.apply(this, arguments);
                        return so(this, e)
                    });

                    function i(e, t, n, r, a, s) {
                        var l;
                        if (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), co(lo(l = o.call(this, a)), "type", void 0), co(lo(l), "originalEvent", void 0), co(lo(l), "pointerId", void 0), co(lo(l), "pointerType", void 0), co(lo(l), "double", void 0), co(lo(l), "pageX", void 0), co(lo(l), "pageY", void 0), co(lo(l), "clientX", void 0), co(lo(l), "clientY", void 0), co(lo(l), "dt", void 0), co(lo(l), "eventable", void 0), Y.pointerExtend(lo(l), n), n !== t && Y.pointerExtend(lo(l), t), l.timeStamp = s, l.originalEvent = n, l.type = e, l.pointerId = Y.getPointerId(t), l.pointerType = Y.getPointerType(t), l.target = r, l.currentTarget = null, "tap" === e) {
                            var u = a.getPointerIndex(t);
                            l.dt = l.timeStamp - a.pointers[u].downTime;
                            var c = l.timeStamp - a.tapTime;
                            l.double = !!(a.prevTap && "doubletap" !== a.prevTap.type && a.prevTap.target === l.target && c < 500)
                        } else "doubletap" === e && (l.dt = t.timeStamp - a.tapTime);
                        return l
                    }

                    return (t = [{
                        key: "_subtractOrigin", value: function (e) {
                            var t = e.x, n = e.y;
                            return this.pageX -= t, this.pageY -= n, this.clientX -= t, this.clientY -= n, this
                        }
                    }, {
                        key: "_addOrigin", value: function (e) {
                            var t = e.x, n = e.y;
                            return this.pageX += t, this.pageY += n, this.clientX += t, this.clientY += n, this
                        }
                    }, {
                        key: "preventDefault", value: function () {
                            this.originalEvent.preventDefault()
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(i.prototype, t), i
                }(V.BaseEvent);
                oo.PointerEvent = oo.default = fo;
                var po = {};
                Object.defineProperty(po, "__esModule", {value: !0}), po.default = void 0;
                var vo = {
                    id: "pointer-events/base",
                    before: ["inertia", "modifiers", "auto-start", "actions"],
                    install: function (e) {
                        e.pointerEvents = vo, e.defaults.actions.pointerEvents = vo.defaults, (0, M.default)(e.actions.phaselessTypes, vo.types)
                    },
                    listeners: {
                        "interactions:new": function (e) {
                            var t = e.interaction;
                            t.prevTap = null, t.tapTime = 0
                        }, "interactions:update-pointer": function (e) {
                            var t = e.down, n = e.pointerInfo;
                            !t && n.hold || (n.hold = {duration: 1 / 0, timeout: null})
                        }, "interactions:move": function (e, t) {
                            var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
                            e.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && mo(e), ho({
                                interaction: n,
                                pointer: r,
                                event: o,
                                eventTarget: i,
                                type: "move"
                            }, t))
                        }, "interactions:down": function (e, t) {
                            !function (e, t) {
                                for (var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget, a = e.pointerIndex, s = n.pointers[a].hold, l = _.getPath(i), u = {
                                    interaction: n,
                                    pointer: r,
                                    event: o,
                                    eventTarget: i,
                                    type: "hold",
                                    targets: [],
                                    path: l,
                                    node: null
                                }, c = 0; c < l.length; c++) {
                                    var f = l[c];
                                    u.node = f, t.fire("pointerEvents:collect-targets", u)
                                }
                                if (u.targets.length) {
                                    for (var d = 1 / 0, p = 0; p < u.targets.length; p++) {
                                        var v = u.targets[p].eventable.options.holdDuration;
                                        v < d && (d = v)
                                    }
                                    s.duration = d, s.timeout = setTimeout((function () {
                                        ho({interaction: n, eventTarget: i, pointer: r, event: o, type: "hold"}, t)
                                    }), d)
                                }
                            }(e, t), ho(e, t)
                        }, "interactions:up": function (e, t) {
                            mo(e), ho(e, t), function (e, t) {
                                var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
                                n.pointerWasMoved || ho({
                                    interaction: n,
                                    eventTarget: i,
                                    pointer: r,
                                    event: o,
                                    type: "tap"
                                }, t)
                            }(e, t)
                        }, "interactions:cancel": function (e, t) {
                            mo(e), ho(e, t)
                        }
                    },
                    PointerEvent: oo.PointerEvent,
                    fire: ho,
                    collectEventTargets: go,
                    defaults: {holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: {x: 0, y: 0}},
                    types: {down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0}
                };

                function ho(e, t) {
                    var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget, a = e.type, s = e.targets,
                        l = void 0 === s ? go(e, t) : s, u = new oo.PointerEvent(a, r, o, i, n, t.now());
                    t.fire("pointerEvents:new", {pointerEvent: u});
                    for (var c = {
                        interaction: n,
                        pointer: r,
                        event: o,
                        eventTarget: i,
                        targets: l,
                        type: a,
                        pointerEvent: u
                    }, f = 0; f < l.length; f++) {
                        var d = l[f];
                        for (var p in d.props || {}) u[p] = d.props[p];
                        var v = (0, D.default)(d.eventable, d.node);
                        if (u._subtractOrigin(v), u.eventable = d.eventable, u.currentTarget = d.node, d.eventable.fire(u), u._addOrigin(v), u.immediatePropagationStopped || u.propagationStopped && f + 1 < l.length && l[f + 1].node !== u.currentTarget) break
                    }
                    if (t.fire("pointerEvents:fired", c), "tap" === a) {
                        var h = u.double ? ho({
                            interaction: n,
                            pointer: r,
                            event: o,
                            eventTarget: i,
                            type: "doubletap"
                        }, t) : u;
                        n.prevTap = h, n.tapTime = h.timeStamp
                    }
                    return u
                }

                function go(e, t) {
                    var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget, a = e.type,
                        s = n.getPointerIndex(r), l = n.pointers[s];
                    if ("tap" === a && (n.pointerWasMoved || !l || l.downTarget !== i)) return [];
                    for (var u = _.getPath(i), c = {
                        interaction: n,
                        pointer: r,
                        event: o,
                        eventTarget: i,
                        type: a,
                        path: u,
                        targets: [],
                        node: null
                    }, f = 0; f < u.length; f++) {
                        var d = u[f];
                        c.node = d, t.fire("pointerEvents:collect-targets", c)
                    }
                    return "hold" === a && (c.targets = c.targets.filter((function (e) {
                        var t;
                        return e.eventable.options.holdDuration === (null == (t = n.pointers[s]) ? void 0 : t.hold.duration)
                    }))), c.targets
                }

                function mo(e) {
                    var t = e.interaction, n = e.pointerIndex, r = t.pointers[n].hold;
                    r && r.timeout && (clearTimeout(r.timeout), r.timeout = null)
                }

                var yo = vo;
                po.default = yo;
                var bo = {};

                function xo(e) {
                    var t = e.interaction;
                    t.holdIntervalHandle && (clearInterval(t.holdIntervalHandle), t.holdIntervalHandle = null)
                }

                Object.defineProperty(bo, "__esModule", {value: !0}), bo.default = void 0;
                var wo = {
                    id: "pointer-events/holdRepeat", install: function (e) {
                        e.usePlugin(po.default);
                        var t = e.pointerEvents;
                        t.defaults.holdRepeatInterval = 0, t.types.holdrepeat = e.actions.phaselessTypes.holdrepeat = !0
                    }, listeners: ["move", "up", "cancel", "endall"].reduce((function (e, t) {
                        return e["pointerEvents:".concat(t)] = xo, e
                    }), {
                        "pointerEvents:new": function (e) {
                            var t = e.pointerEvent;
                            "hold" === t.type && (t.count = (t.count || 0) + 1)
                        }, "pointerEvents:fired": function (e, t) {
                            var n = e.interaction, r = e.pointerEvent, o = e.eventTarget, i = e.targets;
                            if ("hold" === r.type && i.length) {
                                var a = i[0].eventable.options.holdRepeatInterval;
                                a <= 0 || (n.holdIntervalHandle = setTimeout((function () {
                                    t.pointerEvents.fire({
                                        interaction: n,
                                        eventTarget: o,
                                        type: "hold",
                                        pointer: r,
                                        event: r
                                    }, t)
                                }), a))
                            }
                        }
                    })
                };
                bo.default = wo;
                var _o = {};

                function Eo(e) {
                    return (0, M.default)(this.events.options, e), this
                }

                Object.defineProperty(_o, "__esModule", {value: !0}), _o.default = void 0;
                var Po = {
                    id: "pointer-events/interactableTargets", install: function (e) {
                        var t = e.Interactable;
                        t.prototype.pointerEvents = Eo;
                        var n = t.prototype._backCompatOption;
                        t.prototype._backCompatOption = function (e, t) {
                            var r = n.call(this, e, t);
                            return r === this && (this.events.options[e] = t), r
                        }
                    }, listeners: {
                        "pointerEvents:collect-targets": function (e, t) {
                            var n = e.targets, r = e.node, o = e.type, i = e.eventTarget;
                            t.interactables.forEachMatch(r, (function (e) {
                                var t = e.events, a = t.options;
                                t.types[o] && t.types[o].length && e.testIgnoreAllow(a, r, i) && n.push({
                                    node: r,
                                    eventable: t,
                                    props: {interactable: e}
                                })
                            }))
                        }, "interactable:new": function (e) {
                            var t = e.interactable;
                            t.events.getRect = function (e) {
                                return t.getRect(e)
                            }
                        }, "interactable:set": function (e, t) {
                            var n = e.interactable, r = e.options;
                            (0, M.default)(n.events.options, t.pointerEvents.defaults), (0, M.default)(n.events.options, r.pointerEvents || {})
                        }
                    }
                };
                _o.default = Po;
                var Oo = {};
                Object.defineProperty(Oo, "__esModule", {value: !0}), Oo.default = void 0;
                var So = {
                    id: "pointer-events", install: function (e) {
                        e.usePlugin(po), e.usePlugin(bo.default), e.usePlugin(_o.default)
                    }
                };
                Oo.default = So;
                var To = {};

                function ko(e) {
                    var t = e.Interactable;
                    e.actions.phases.reflow = !0, t.prototype.reflow = function (t) {
                        return function (e, t, n) {
                            for (var r = i.default.string(e.target) ? K.from(e._context.querySelectorAll(e.target)) : [e.target], o = n.window.Promise, a = o ? [] : null, s = function () {
                                var i = r[l], s = e.getRect(i);
                                if (!s) return "break";
                                var u = K.find(n.interactions.list, (function (n) {
                                    return n.interacting() && n.interactable === e && n.element === i && n.prepared.name === t.name
                                })), c = void 0;
                                if (u) u.move(), a && (c = u._reflowPromise || new o((function (e) {
                                    u._reflowResolve = e
                                }))); else {
                                    var f = (0, j.tlbrToXywh)(s),
                                        d = {page: {x: f.x, y: f.y}, client: {x: f.x, y: f.y}, timeStamp: n.now()},
                                        p = Y.coordsToEvent(d);
                                    c = function (e, t, n, r, o) {
                                        var i = e.interactions.new({pointerType: "reflow"}),
                                            a = {interaction: i, event: o, pointer: o, eventTarget: n, phase: "reflow"};
                                        i.interactable = t, i.element = n, i.prevEvent = o, i.updatePointer(o, o, n, !0), Y.setZeroCoords(i.coords.delta), (0, Be.copyAction)(i.prepared, r), i._doPhase(a);
                                        var s = e.window.Promise, l = s ? new s((function (e) {
                                            i._reflowResolve = e
                                        })) : void 0;
                                        return i._reflowPromise = l, i.start(r, t, n), i._interacting ? (i.move(a), i.end(o)) : (i.stop(), i._reflowResolve()), i.removePointer(o, o), l
                                    }(n, e, i, t, p)
                                }
                                a && a.push(c)
                            }, l = 0; l < r.length && "break" !== s(); l++) ;
                            return a && o.all(a).then((function () {
                                return e
                            }))
                        }(this, t, e)
                    }
                }

                Object.defineProperty(To, "__esModule", {value: !0}), To.install = ko, To.default = void 0;
                var Mo = {
                    id: "reflow", install: ko, listeners: {
                        "interactions:stop": function (e, t) {
                            var n = e.interaction;
                            "reflow" === n.pointerType && (n._reflowResolve && n._reflowResolve(), K.remove(t.interactions.list, n))
                        }
                    }
                };
                To.default = Mo;
                var jo = {exports: {}};

                function Io(e) {
                    return (Io = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                Object.defineProperty(jo.exports, "__esModule", {value: !0}), jo.exports.default = void 0, Zn.default.use(it.default), Zn.default.use(Ut.default), Zn.default.use(Oo.default), Zn.default.use(Ht.default), Zn.default.use(no.default), Zn.default.use(rt.default), Zn.default.use(Oe.default), Zn.default.use(Ae.default), Zn.default.use(To.default);
                var Ao = Zn.default;
                if (jo.exports.default = Ao, "object" === Io(jo) && jo) try {
                    jo.exports = Zn.default
                } catch (e) {
                }
                Zn.default.default = Zn.default, jo = jo.exports;
                var Do = {exports: {}};

                function Co(e) {
                    return (Co = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                Object.defineProperty(Do.exports, "__esModule", {value: !0}), Do.exports.default = void 0;
                var Ro = jo.default;
                if (Do.exports.default = Ro, "object" === Co(Do) && Do) try {
                    Do.exports = jo.default
                } catch (e) {
                }
                return jo.default.default = jo.default, Do.exports
            }()
        }
    }, t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {exports: {}};
        return e[r](i, i.exports, n), i.exports
    }

    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {a: t}), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e = n(496), t = n.n(e);
        n(780), document.addEventListener("scroll", (function (e) {
            const t = window.scrollY, n = window.document.getElementsByClassName("header-wrap")[0],
                r = window.document.querySelector(".smartbanner");
            t > 0 ? (n.style.backgroundColor = "#06070A", n.style.borderBottomColor = "rgba(255, 255, 255, 0.25)", n.style.top = "0px", r && (r.style.height = "none")) : (n.style.backgroundColor = "transparent", n.style.borderBottomColor = "transparent", n.style.top = "", r && (r.style.display = ""))
        })), function () {
            const e = document.getElementById("pageHeader"), n = document.getElementById("menuHamburger"),
                r = document.getElementById("mobileMenuClose"), o = document.getElementById("mobileMenuDrag"),
                i = document.getElementById("mobileMenu"), a = document.getElementById("mobileMenuBg"),
                s = window.document.querySelectorAll(".main-mobile-menu-link"), l = "open-header";

            const nn = document.querySelectorAll(".mobile-menu-link:not(.dropdown-link)")
            for (let tt of nn) {
                tt.addEventListener("click", (() => {
                    e.classList.toggle(l);
                    const tt = document.body.style, n = a.style;
                    s.forEach((e => {
                        e.classList.remove("main-mobile-menu-link-open")
                    })), tt.overflow = "hidden" === tt.overflow ? "auto" : "hidden", n.display = "block" === n.display ? "none" : "block"
                }))
            }
            [r, n].forEach((t => {
                t.addEventListener("click", (() => {
                    e.classList.toggle(l);
                    const t = document.body.style, n = a.style;
                    s.forEach((e => {
                        e.classList.remove("main-mobile-menu-link-open")
                    })), t.overflow = "hidden" === t.overflow ? "auto" : "hidden", n.display = "block" === n.display ? "none" : "block"
                }))
            })), window.addEventListener("resize", (() => {
                window.innerWidth > 720 && e.classList.contains("open-header") && (s.forEach((e => {
                    e.classList.remove("main-mobile-menu-link-open")
                })), e.classList.remove(l), document.body.style.overflow = "auto", a.style.display = "none")
            })), t()(o).draggable({
                origin: "self",
                modifiers: [t().modifiers.restrict({restriction: "parent"})],
                listeners: {
                    move(e) {
                        const t = e.y0 - e.pageY;
                        i.style.transform = `translateY(-${t}px)`
                    }, end(t) {
                        const n = t.y0 - t.pageY > 90;
                        i.style.transition = "transform 0.3s", i.style.transform = n ? "translateY(-686px)" : "translateY(0px)", setTimeout((() => {
                            i.style.transform = "", n ? (s.forEach((e => {
                                e.classList.remove("main-mobile-menu-link-open")
                            })), i.style.transition = "none", e.classList.remove(l), document.body.style.overflow = "auto", a.style.display = "none", setTimeout((() => {
                                i.style.transition = ""
                            }), 100)) : i.style.transition = ""
                        }), 200)
                    }
                }
            })
        }(), function () {
            const e = window.document.querySelectorAll(".main-menu-link");
            e.forEach((e => {
                e.addEventListener("mouseenter", (function (t) {
                    e.getElementsByClassName("sub-links-wrap")[0].style.display = "block"
                }))
            })), e.forEach((e => {
                e.addEventListener("mouseleave", (function (t) {
                    e.getElementsByClassName("sub-links-wrap")[0].style.display = "none"
                }))
            }))
        }(), window.document.querySelectorAll(".main-mobile-menu-link").forEach((e => {
            e.addEventListener("click", (function (t) {
                e.classList.toggle("main-mobile-menu-link-open")
            }))
        })), function () {
            const e = window.document.getElementById("languageBtn"),
                t = window.document.getElementById("languageChangePopup"),
                n = window.document.getElementById("languageSwitchWrap"),
                r = window.document.getElementById("popupClose");
            e.addEventListener("click", (() => {
                t.classList.toggle("popup-show")
            })), r.addEventListener("click", (() => {
                t.classList.remove("popup-show")
            })), document.addEventListener("click", (e => {
                if (t.classList.contains("popup-show")) {
                    let r = e.target;
                    for (; r;) {
                        if (r === n) return;
                        r = r.parentElement
                    }
                    t.classList.remove("popup-show")
                }
            }))
        }(), function () {
            if (window.location.href.includes("/zh/")) {
                const e = window.document.getElementById("header-blog"),
                    t = window.document.getElementById("mobile_header-blog"),
                    n = window.document.getElementById("footer-icon_medium");
                e.href = "https://blog-cn.1inch.io/", t.href = "https://blog-cn.1inch.io/", n.href = "https://blog-cn.1inch.io/"
            }
        }()
    })()
})();
