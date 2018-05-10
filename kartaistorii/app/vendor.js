/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.1",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                    return a === b
                }, h, !0), l = ta(function(a) {
                    return I(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext;

    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(E(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(E(this, a || [], !0))
        },
        is: function(a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || F, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return K(a, "nextSibling")
        },
        prev: function(a) {
            return K(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(a) {
        var b = {};
        return r.each(a.match(L) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = e || a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    };

    function N(a) {
        return a
    }

    function O(a) {
        throw a
    }

    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var R = r.Deferred();
    r.fn.ready = function(a) {
        return R.then(a)["catch"](function(a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
        }
    }), r.ready.then = R.then;

    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) T(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        U = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function V() {
        this.expando = r.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var W = new V,
        X = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
    }

    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = $(c)
                } catch (e) {}
                X.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return X.hasData(a) || W.hasData(a)
        },
        data: function(a, b, c) {
            return X.access(a, b, c)
        },
        removeData: function(a, b) {
            X.remove(a, b)
        },
        _data: function(a, b, c) {
            return W.access(a, b, c)
        },
        _removeData: function(a, b) {
            W.remove(a, b)
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                X.set(this, a)
            }) : T(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X.get(f, a), void 0 !== c) return c;
                    if (c = _(f, a), void 0 !== c) return c
                } else this.each(function() {
                    X.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                X.remove(this, a)
            })
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return W.get(a, c) || W.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    W.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        ea = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function fa(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ga = {};

    function ha(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
    }

    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ia(this, !0)
        },
        hide: function() {
            return ia(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                da(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
    }

    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
    }
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
            k = 0;
            while (f = g[k++]) la.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() {
        return !0
    }

    function wa() {
        return !1
    }

    function xa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ya(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(L) || [""], j = b.length;
                while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""], j = b.length;
                while (j--)
                    if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return B(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return ya(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ya(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
    }

    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
        }
    }

    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
        });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }

    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(za, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
                else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ka(this, a, !0)
        },
        remove: function(a) {
            return Ka(this, a)
        },
        text: function(a) {
            return T(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return T(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();

    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Pa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ta = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--)
            if (a = Ua[c] + b, a in Va) return a
    }

    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a), b
    }

    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Za(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g
    }

    function $a(a, b, c) {
        var d, e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b),
                i = Ra.test(b);
            return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
                    return $a(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, La.test(a) || (r.cssHooks[a + b].set = Ya)
    }), r.fn.extend({
        css: function(a, b) {
            return T(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e)
    }
    r.Tween = _a, _a.prototype = {
        constructor: _a,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
        }
    }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
    }

    function fb() {
        return a.setTimeout(function() {
            ab = void 0
        }), ab = r.now()
    }

    function gb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], cb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() {
                p || ia([a]), W.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }
    r.Animation = r.extend(kb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return fa(c.elem, a, ba.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
            },
            prefilters: [ib],
            prefilter: function(a, b) {
                b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
            }
        }), r.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
            }, d
        }, r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(da).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = W.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = W.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            r.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), ab = void 0
        }, r.fx.timer = function(a) {
            r.timers.push(a), r.fx.start()
        }, r.fx.interval = 13, r.fx.start = function() {
            bb || (bb = !0, eb())
        }, r.fx.stop = function() {
            bb = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return T(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(L);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), lb = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
        }
    });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return T(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });

    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ")
    }

    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, qb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, qb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(L) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : pb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
            }
        }
    });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;

    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ob(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Rb = {
            0: 200,
            1223: 204
        },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || ra
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return T(this, function(a, d, e) {
                var f;
                return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.holdReady = function(a) {
        a ? r.readyWait++ : r.ready(!0)
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
    }, b || (a.jQuery = a.$ = r), r
});

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
        a;
    $.throttle = a = function(e, f, j, i) {
        var h, d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c
        }

        function g() {
            var o = this,
                m = +new Date() - d,
                n = arguments;

            function l() {
                d = +new Date();
                j.apply(o, n)
            }

            function k() {
                h = c
            }
            if (i && !h) {
                l()
            }
            h && clearTimeout(h);
            if (i === c && m > e) {
                l()
            } else {
                if (f !== true) {
                    h = setTimeout(i ? k : l, i === c ? e - m : e)
                }
            }
        }
        if ($.guid) {
            g.guid = j.guid = j.guid || $.guid++
        }
        return g
    };
    $.debounce = function(d, e, f) {
        return f === c ? a(d, e, false) : a(d, f, e !== false)
    }
})(this);
/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

;
(function($, window, document, undefined) {

    // Polyfill for requestAnimationFrame
    // via: https://gist.github.com/paulirish/1579671

    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
                window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                        callback(currTime + timeToCall);
                    },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());


    // Parallax Constructor

    function Parallax(element, options) {
        var self = this;

        if (typeof options == 'object') {
            delete options.refresh;
            delete options.render;
            $.extend(this, options);
        }

        this.$element = $(element);

        if (!this.imageSrc && this.$element.is('img')) {
            this.imageSrc = this.$element.attr('src');
        }

        var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

        if (positions.length < 1) {
            positions.push('center');
        }
        if (positions.length == 1) {
            positions.push(positions[0]);
        }

        if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
            positions = [positions[1], positions[0]];
        }

        if (this.positionX != undefined) positions[0] = this.positionX.toLowerCase();
        if (this.positionY != undefined) positions[1] = this.positionY.toLowerCase();

        self.positionX = positions[0];
        self.positionY = positions[1];

        if (this.positionX != 'left' && this.positionX != 'right') {
            if (isNaN(parseInt(this.positionX))) {
                this.positionX = 'center';
            } else {
                this.positionX = parseInt(this.positionX);
            }
        }

        if (this.positionY != 'top' && this.positionY != 'bottom') {
            if (isNaN(parseInt(this.positionY))) {
                this.positionY = 'center';
            } else {
                this.positionY = parseInt(this.positionY);
            }
        }

        this.position =
            this.positionX + (isNaN(this.positionX) ? '' : 'px') + ' ' +
            this.positionY + (isNaN(this.positionY) ? '' : 'px');

        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
                this.$element.css({
                    backgroundImage: 'url(' + this.imageSrc + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: this.position
                });
            }
            return this;
        }

        if (navigator.userAgent.match(/(Android)/)) {
            if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
                this.$element.css({
                    backgroundImage: 'url(' + this.imageSrc + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: this.position
                });
            }
            return this;
        }

        this.$mirror = $('<div />').prependTo('body');

        var slider = this.$element.find('>.parallax-slider');
        var sliderExisted = false;

        if (slider.length == 0)
            this.$slider = $('<img />').prependTo(this.$mirror);
        else {
            this.$slider = slider.prependTo(this.$mirror)
            sliderExisted = true;
        }

        this.$mirror.addClass('parallax-mirror').css({
            visibility: 'hidden',
            zIndex: this.zIndex,
            position: 'fixed',
            top: 0,
            left: 0,
            overflow: 'hidden'
        });

        this.$slider.addClass('parallax-slider').one('load', function() {
            if (!self.naturalHeight || !self.naturalWidth) {
                self.naturalHeight = this.naturalHeight || this.height || 1;
                self.naturalWidth = this.naturalWidth || this.width || 1;
            }
            self.aspectRatio = self.naturalWidth / self.naturalHeight;

            Parallax.isSetup || Parallax.setup();
            Parallax.sliders.push(self);
            Parallax.isFresh = false;
            Parallax.requestRender();
        });

        if (!sliderExisted)
            this.$slider[0].src = this.imageSrc;

        if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
            this.$slider.trigger('load');
        }

    };


    // Parallax Instance Methods

    $.extend(Parallax.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: true,
        androidFix: true,
        position: 'center',
        overScrollFix: false,

        refresh: function() {
            this.boxWidth = this.$element.outerWidth();
            this.boxHeight = this.$element.outerHeight() + this.bleed * 2;
            this.boxOffsetTop = this.$element.offset().top - this.bleed;
            this.boxOffsetLeft = this.$element.offset().left;
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

            var winHeight = Parallax.winHeight;
            var docHeight = Parallax.docHeight;
            var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
            var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
            var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
            var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;

            if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = imageHeightMin * this.aspectRatio | 0;
                this.imageHeight = imageHeightMin;
                this.offsetBaseTop = imageOffsetMin;

                var margin = this.imageWidth - this.boxWidth;

                if (this.positionX == 'left') {
                    this.offsetLeft = 0;
                } else if (this.positionX == 'right') {
                    this.offsetLeft = -margin;
                } else if (!isNaN(this.positionX)) {
                    this.offsetLeft = Math.max(this.positionX, -margin);
                } else {
                    this.offsetLeft = -margin / 2 | 0;
                }
            } else {
                this.imageWidth = this.boxWidth;
                this.imageHeight = this.boxWidth / this.aspectRatio | 0;
                this.offsetLeft = 0;

                var margin = this.imageHeight - imageHeightMin;

                if (this.positionY == 'top') {
                    this.offsetBaseTop = imageOffsetMin;
                } else if (this.positionY == 'bottom') {
                    this.offsetBaseTop = imageOffsetMin - margin;
                } else if (!isNaN(this.positionY)) {
                    this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, -margin);
                } else {
                    this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
                }
            }
        },

        render: function() {
            var scrollTop = Parallax.scrollTop;
            var scrollLeft = Parallax.scrollLeft;
            var overScroll = this.overScrollFix ? Parallax.overScroll : 0;
            var scrollBottom = scrollTop + Parallax.winHeight;

            if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
                this.visibility = 'visible';
                this.mirrorTop = this.boxOffsetTop - scrollTop;
                this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
                this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
            } else {
                this.visibility = 'hidden';
            }

            this.$mirror.css({
                transform: 'translate3d(0px, 0px, 0px)',
                visibility: this.visibility,
                top: this.mirrorTop - overScroll,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            });

            this.$slider.css({
                transform: 'translate3d(0px, 0px, 0px)',
                position: 'absolute',
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: 'none'
            });
        }
    });


    // Parallax Static Methods

    $.extend(Parallax, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: false,
        isFresh: false,
        isBusy: false,

        setup: function() {
            if (this.isReady) return;

            var $doc = $(document),
                $win = $(window);

            var loadDimensions = function() {
                Parallax.winHeight = $win.height();
                Parallax.winWidth = $win.width();
                Parallax.docHeight = $doc.height();
                Parallax.docWidth = $doc.width();
            };

            var loadScrollPosition = function() {
                var winScrollTop = $win.scrollTop();
                var scrollTopMax = Parallax.docHeight - Parallax.winHeight;
                var scrollLeftMax = Parallax.docWidth - Parallax.winWidth;
                Parallax.scrollTop = Math.max(0, Math.min(scrollTopMax, winScrollTop));
                Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
                Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
            };

            $win.on('resize.px.parallax load.px.parallax', function() {
                    loadDimensions();
                    Parallax.isFresh = false;
                    Parallax.requestRender();
                })
                .on('scroll.px.parallax load.px.parallax', function() {
                    loadScrollPosition();
                    Parallax.requestRender();
                });

            loadDimensions();
            loadScrollPosition();

            this.isReady = true;
        },

        configure: function(options) {
            if (typeof options == 'object') {
                delete options.refresh;
                delete options.render;
                $.extend(this.prototype, options);
            }
        },

        refresh: function() {
            $.each(this.sliders, function() {
                this.refresh()
            });
            this.isFresh = true;
        },

        render: function() {
            this.isFresh || this.refresh();
            $.each(this.sliders, function() {
                this.render()
            });
        },

        requestRender: function() {
            var self = this;

            if (!this.isBusy) {
                this.isBusy = true;
                window.requestAnimationFrame(function() {
                    self.render();
                    self.isBusy = false;
                });
            }
        },
        destroy: function(el) {
            var i,
                parallaxElement = $(el).data('px.parallax');
            parallaxElement.$mirror.remove();
            for (i = 0; i < this.sliders.length; i += 1) {
                if (this.sliders[i] == parallaxElement) {
                    this.sliders.splice(i, 1);
                }
            }
            $(el).data('px.parallax', false);
            if (this.sliders.length === 0) {
                $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
                this.isReady = false;
                Parallax.isSetup = false;
            }
        }
    });


    // Parallax Plugin Definition

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var options = typeof option == 'object' && option;

            if (this == window || this == document || $this.is('body')) {
                Parallax.configure(options);
            } else if (!$this.data('px.parallax')) {
                options = $.extend({}, $this.data(), options);
                $this.data('px.parallax', new Parallax(this, options));
            } else if (typeof option == 'object') {
                $.extend($this.data('px.parallax'), options);
            }
            if (typeof option == 'string') {
                if (option == 'destroy') {
                    Parallax['destroy'](this);
                } else {
                    Parallax[option]();
                }
            }
        })
    };

    var old = $.fn.parallax;

    $.fn.parallax = Plugin;
    $.fn.parallax.Constructor = Parallax;


    // Parallax No Conflict

    $.fn.parallax.noConflict = function() {
        $.fn.parallax = old;
        return this;
    };


    // Parallax Data-API

    $(document).on('ready.px.parallax.data-api', function() {
        $('[data-parallax="scroll"]').parallax();
    });

}(jQuery, window, document));

/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
    'use strict';

    /*
     * Global api.
     */
    var skrollr = {
        get: function() {
            return _instance;
        },
        //Main entry point.
        init: function(options) {
            return _instance || new Skrollr(options);
        },
        VERSION: '0.6.30'
    };

    //Minify optimization.
    var hasProp = Object.prototype.hasOwnProperty;
    var Math = window.Math;
    var getStyle = window.getComputedStyle;

    //They will be filled when skrollr gets initialized.
    var documentElement;
    var body;

    var EVENT_TOUCHSTART = 'touchstart';
    var EVENT_TOUCHMOVE = 'touchmove';
    var EVENT_TOUCHCANCEL = 'touchcancel';
    var EVENT_TOUCHEND = 'touchend';

    var SKROLLABLE_CLASS = 'skrollable';
    var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
    var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
    var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';

    var SKROLLR_CLASS = 'skrollr';
    var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
    var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
    var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';

    var DEFAULT_EASING = 'linear';
    var DEFAULT_DURATION = 1000; //ms
    var DEFAULT_MOBILE_DECELERATION = 0.004; //pixel/ms²

    var DEFAULT_SKROLLRBODY = 'skrollr-body';

    var DEFAULT_SMOOTH_SCROLLING_DURATION = 200; //ms

    var ANCHOR_START = 'start';
    var ANCHOR_END = 'end';
    var ANCHOR_CENTER = 'center';
    var ANCHOR_BOTTOM = 'bottom';

    //The property which will be added to the DOM element to hold the ID of the skrollable.
    var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

    var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;

    var rxTrim = /^\s+|\s+$/g;

    //Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
    var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

    var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

    //Easing function names follow the property in square brackets.
    var rxPropEasing = /^(@?[a-z\-]+)\[(\w+)\]$/;

    var rxCamelCase = /-([a-z0-9_])/g;
    var rxCamelCaseFn = function(str, letter) {
        return letter.toUpperCase();
    };

    //Numeric values with optional sign.
    var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

    //Used to replace occurences of {?} with a number.
    var rxInterpolateString = /\{\?\}/g;

    //Finds rgb(a) colors, which don't use the percentage notation.
    var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

    //Finds all gradients.
    var rxGradient = /[a-z\-]+-gradient/g;

    //Vendor prefix. Will be set once skrollr gets initialized.
    var theCSSPrefix = '';
    var theDashedCSSPrefix = '';

    //Will be called once (when skrollr gets initialized).
    var detectCSSPrefix = function() {
        //Only relevant prefixes. May be extended.
        //Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
        var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

        //Detect prefix for current browser by finding the first property using a prefix.
        if (!getStyle) {
            return;
        }

        var style = getStyle(body, null);

        for (var k in style) {
            //We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
            theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));

            if (theCSSPrefix) {
                break;
            }
        }

        //Did we even detect a prefix?
        if (!theCSSPrefix) {
            theCSSPrefix = theDashedCSSPrefix = '';

            return;
        }

        theCSSPrefix = theCSSPrefix[0];

        //We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
        if (theCSSPrefix.slice(0, 1) === '-') {
            theDashedCSSPrefix = theCSSPrefix;

            //There's no logic behind these. Need a look up.
            theCSSPrefix = ({
                '-webkit-': 'webkit',
                '-moz-': 'Moz',
                '-ms-': 'ms',
                '-o-': 'O'
            })[theCSSPrefix];
        } else {
            theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
        }
    };

    var polyfillRAF = function() {
        var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];

        var lastTime = _now();

        if (_isMobile || !requestAnimFrame) {
            requestAnimFrame = function(callback) {
                //How long did it take to render?
                var deltaTime = _now() - lastTime;
                var delay = Math.max(0, 1000 / 60 - deltaTime);

                return window.setTimeout(function() {
                    lastTime = _now();
                    callback();
                }, delay);
            };
        }

        return requestAnimFrame;
    };

    var polyfillCAF = function() {
        var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];

        if (_isMobile || !cancelAnimFrame) {
            cancelAnimFrame = function(timeout) {
                return window.clearTimeout(timeout);
            };
        }

        return cancelAnimFrame;
    };

    //Built-in easing functions.
    var easings = {
        begin: function() {
            return 0;
        },
        end: function() {
            return 1;
        },
        linear: function(p) {
            return p;
        },
        quadratic: function(p) {
            return p * p;
        },
        cubic: function(p) {
            return p * p * p;
        },
        swing: function(p) {
            return (-Math.cos(p * Math.PI) / 2) + 0.5;
        },
        sqrt: function(p) {
            return Math.sqrt(p);
        },
        outCubic: function(p) {
            return (Math.pow((p - 1), 3) + 1);
        },
        //see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
        bounce: function(p) {
            var a;

            if (p <= 0.5083) {
                a = 3;
            } else if (p <= 0.8489) {
                a = 9;
            } else if (p <= 0.96208) {
                a = 27;
            } else if (p <= 0.99981) {
                a = 91;
            } else {
                return 1;
            }

            return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
        }
    };

    /**
     * Constructor.
     */
    function Skrollr(options) {
        documentElement = document.documentElement;
        body = document.body;

        detectCSSPrefix();

        _instance = this;

        options = options || {};

        _constants = options.constants || {};

        //We allow defining custom easings or overwrite existing.
        if (options.easing) {
            for (var e in options.easing) {
                easings[e] = options.easing[e];
            }
        }

        _edgeStrategy = options.edgeStrategy || 'set';

        _listeners = {
            //Function to be called right before rendering.
            beforerender: options.beforerender,

            //Function to be called right after finishing rendering.
            render: options.render,

            //Function to be called whenever an element with the `data-emit-events` attribute passes a keyframe.
            keyframe: options.keyframe
        };

        //forceHeight is true by default
        _forceHeight = options.forceHeight !== false;

        if (_forceHeight) {
            _scale = options.scale || 1;
        }

        _mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;

        _smoothScrollingEnabled = options.smoothScrolling !== false;
        _smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;

        //Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
        _smoothScrolling = {
            targetTop: _instance.getScrollTop()
        };

        //A custom check function may be passed.
        _isMobile = ((options.mobileCheck || function() {
            return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
        })());

        if (_isMobile) {
            _skrollrBody = document.getElementById(options.skrollrBody || DEFAULT_SKROLLRBODY);

            //Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
            if (_skrollrBody) {
                _detect3DTransforms();
            }

            _initMobile();
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
        } else {
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
        }

        //Triggers parsing of elements and a first reflow.
        _instance.refresh();

        _addEvent(window, 'resize orientationchange', function() {
            var width = documentElement.clientWidth;
            var height = documentElement.clientHeight;

            //Only reflow if the size actually changed (#271).
            if (height !== _lastViewportHeight || width !== _lastViewportWidth) {
                _lastViewportHeight = height;
                _lastViewportWidth = width;

                _requestReflow = true;
            }
        });

        var requestAnimFrame = polyfillRAF();

        //Let's go.
        (function animloop() {
            _render();
            _animFrame = requestAnimFrame(animloop);
        }());

        return _instance;
    }

    /**
     * (Re)parses some or all elements.
     */
    Skrollr.prototype.refresh = function(elements) {
        var elementIndex;
        var elementsLength;
        var ignoreID = false;

        //Completely reparse anything without argument.
        if (elements === undefined) {
            //Ignore that some elements may already have a skrollable ID.
            ignoreID = true;

            _skrollables = [];
            _skrollableIdCounter = 0;

            elements = document.getElementsByTagName('*');
        } else if (elements.length === undefined) {
            //We also accept a single element as parameter.
            elements = [elements];
        }

        elementIndex = 0;
        elementsLength = elements.length;

        for (; elementIndex < elementsLength; elementIndex++) {
            var el = elements[elementIndex];
            var anchorTarget = el;
            var keyFrames = [];

            //If this particular element should be smooth scrolled.
            var smoothScrollThis = _smoothScrollingEnabled;

            //The edge strategy for this particular element.
            var edgeStrategy = _edgeStrategy;

            //If this particular element should emit keyframe events.
            var emitEvents = false;

            //If we're reseting the counter, remove any old element ids that may be hanging around.
            if (ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                delete el[SKROLLABLE_ID_DOM_PROPERTY];
            }

            if (!el.attributes) {
                continue;
            }

            //Iterate over all attributes and search for key frame attributes.
            var attributeIndex = 0;
            var attributesLength = el.attributes.length;

            for (; attributeIndex < attributesLength; attributeIndex++) {
                var attr = el.attributes[attributeIndex];

                if (attr.name === 'data-anchor-target') {
                    anchorTarget = document.querySelector(attr.value);

                    if (anchorTarget === null) {
                        throw 'Unable to find anchor target "' + attr.value + '"';
                    }

                    continue;
                }

                //Global smooth scrolling can be overridden by the element attribute.
                if (attr.name === 'data-smooth-scrolling') {
                    smoothScrollThis = attr.value !== 'off';

                    continue;
                }

                //Global edge strategy can be overridden by the element attribute.
                if (attr.name === 'data-edge-strategy') {
                    edgeStrategy = attr.value;

                    continue;
                }

                //Is this element tagged with the `data-emit-events` attribute?
                if (attr.name === 'data-emit-events') {
                    emitEvents = true;

                    continue;
                }

                var match = attr.name.match(rxKeyframeAttribute);

                if (match === null) {
                    continue;
                }

                var kf = {
                    props: attr.value,
                    //Point back to the element as well.
                    element: el,
                    //The name of the event which this keyframe will fire, if emitEvents is
                    eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
                };

                keyFrames.push(kf);

                var constant = match[1];

                if (constant) {
                    //Strip the underscore prefix.
                    kf.constant = constant.substr(1);
                }

                //Get the key frame offset.
                var offset = match[2];

                //Is it a percentage offset?
                if (/p$/.test(offset)) {
                    kf.isPercentage = true;
                    kf.offset = (offset.slice(0, -1) | 0) / 100;
                } else {
                    kf.offset = (offset | 0);
                }

                var anchor1 = match[3];

                //If second anchor is not set, the first will be taken for both.
                var anchor2 = match[4] || anchor1;

                //"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
                if (!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
                    kf.mode = 'absolute';

                    //data-end needs to be calculated after all key frames are known.
                    if (anchor1 === ANCHOR_END) {
                        kf.isEnd = true;
                    } else if (!kf.isPercentage) {
                        //For data-start we can already set the key frame w/o calculations.
                        //#59: "scale" options should only affect absolute mode.
                        kf.offset = kf.offset * _scale;
                    }
                }
                //"relative" mode, where numbers are relative to anchors.
                else {
                    kf.mode = 'relative';
                    kf.anchors = [anchor1, anchor2];
                }
            }

            //Does this element have key frames?
            if (!keyFrames.length) {
                continue;
            }

            //Will hold the original style and class attributes before we controlled the element (see #80).
            var styleAttr, classAttr;

            var id;

            if (!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                //We already have this element under control. Grab the corresponding skrollable id.
                id = el[SKROLLABLE_ID_DOM_PROPERTY];
                styleAttr = _skrollables[id].styleAttr;
                classAttr = _skrollables[id].classAttr;
            } else {
                //It's an unknown element. Asign it a new skrollable id.
                id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
                styleAttr = el.style.cssText;
                classAttr = _getClass(el);
            }

            _skrollables[id] = {
                element: el,
                styleAttr: styleAttr,
                classAttr: classAttr,
                anchorTarget: anchorTarget,
                keyFrames: keyFrames,
                smoothScrolling: smoothScrollThis,
                edgeStrategy: edgeStrategy,
                emitEvents: emitEvents,
                lastFrameIndex: -1
            };

            _updateClass(el, [SKROLLABLE_CLASS], []);
        }

        //Reflow for the first time.
        _reflow();

        //Now that we got all key frame numbers right, actually parse the properties.
        elementIndex = 0;
        elementsLength = elements.length;

        for (; elementIndex < elementsLength; elementIndex++) {
            var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

            if (sk === undefined) {
                continue;
            }

            //Parse the property string to objects
            _parseProps(sk);

            //Fill key frames with missing properties from left and right
            _fillProps(sk);
        }

        return _instance;
    };

    /**
     * Transform "relative" mode to "absolute" mode.
     * That is, calculate anchor position and offset of element.
     */
    Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
        var viewportHeight = documentElement.clientHeight;
        var box = element.getBoundingClientRect();
        var absolute = box.top;

        //#100: IE doesn't supply "height" with getBoundingClientRect.
        var boxHeight = box.bottom - box.top;

        if (viewportAnchor === ANCHOR_BOTTOM) {
            absolute -= viewportHeight;
        } else if (viewportAnchor === ANCHOR_CENTER) {
            absolute -= viewportHeight / 2;
        }

        if (elementAnchor === ANCHOR_BOTTOM) {
            absolute += boxHeight;
        } else if (elementAnchor === ANCHOR_CENTER) {
            absolute += boxHeight / 2;
        }

        //Compensate scrolling since getBoundingClientRect is relative to viewport.
        absolute += _instance.getScrollTop();

        return (absolute + 0.5) | 0;
    };

    /**
     * Animates scroll top to new position.
     */
    Skrollr.prototype.animateTo = function(top, options) {
        options = options || {};

        var now = _now();
        var scrollTop = _instance.getScrollTop();
        var duration = options.duration === undefined ? DEFAULT_DURATION : options.duration;

        //Setting this to a new value will automatically cause the current animation to stop, if any.
        _scrollAnimation = {
            startTop: scrollTop,
            topDiff: top - scrollTop,
            targetTop: top,
            duration: duration,
            startTime: now,
            endTime: now + duration,
            easing: easings[options.easing || DEFAULT_EASING],
            done: options.done
        };

        //Don't queue the animation if there's nothing to animate.
        if (!_scrollAnimation.topDiff) {
            if (_scrollAnimation.done) {
                _scrollAnimation.done.call(_instance, false);
            }

            _scrollAnimation = undefined;
        }

        return _instance;
    };

    /**
     * Stops animateTo animation.
     */
    Skrollr.prototype.stopAnimateTo = function() {
        if (_scrollAnimation && _scrollAnimation.done) {
            _scrollAnimation.done.call(_instance, true);
        }

        _scrollAnimation = undefined;
    };

    /**
     * Returns if an animation caused by animateTo is currently running.
     */
    Skrollr.prototype.isAnimatingTo = function() {
        return !!_scrollAnimation;
    };

    Skrollr.prototype.isMobile = function() {
        return _isMobile;
    };

    Skrollr.prototype.setScrollTop = function(top, force) {
        _forceRender = (force === true);

        if (_isMobile) {
            _mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
        } else {
            window.scrollTo(0, top);
        }

        return _instance;
    };

    Skrollr.prototype.getScrollTop = function() {
        if (_isMobile) {
            return _mobileOffset;
        } else {
            return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
        }
    };

    Skrollr.prototype.getMaxScrollTop = function() {
        return _maxKeyFrame;
    };

    Skrollr.prototype.on = function(name, fn) {
        _listeners[name] = fn;

        return _instance;
    };

    Skrollr.prototype.off = function(name) {
        delete _listeners[name];

        return _instance;
    };

    Skrollr.prototype.destroy = function() {
        var cancelAnimFrame = polyfillCAF();
        cancelAnimFrame(_animFrame);
        _removeAllEvents();

        _updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);

        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;

        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            _reset(_skrollables[skrollableIndex].element);
        }

        documentElement.style.overflow = body.style.overflow = '';
        documentElement.style.height = body.style.height = '';

        if (_skrollrBody) {
            skrollr.setStyle(_skrollrBody, 'transform', 'none');
        }

        _instance = undefined;
        _skrollrBody = undefined;
        _listeners = undefined;
        _forceHeight = undefined;
        _maxKeyFrame = 0;
        _scale = 1;
        _constants = undefined;
        _mobileDeceleration = undefined;
        _direction = 'down';
        _lastTop = -1;
        _lastViewportWidth = 0;
        _lastViewportHeight = 0;
        _requestReflow = false;
        _scrollAnimation = undefined;
        _smoothScrollingEnabled = undefined;
        _smoothScrollingDuration = undefined;
        _smoothScrolling = undefined;
        _forceRender = undefined;
        _skrollableIdCounter = 0;
        _edgeStrategy = undefined;
        _isMobile = false;
        _mobileOffset = 0;
        _translateZ = undefined;
    };

    /*
    	Private methods.
    */

    var _initMobile = function() {
        var initialElement;
        var initialTouchY;
        var initialTouchX;
        var currentElement;
        var currentTouchY;
        var currentTouchX;
        var lastTouchY;
        var deltaY;

        var initialTouchTime;
        var currentTouchTime;
        var lastTouchTime;
        var deltaTime;

        _addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
            var touch = e.changedTouches[0];

            currentElement = e.target;

            //We don't want text nodes.
            while (currentElement.nodeType === 3) {
                currentElement = currentElement.parentNode;
            }

            currentTouchY = touch.clientY;
            currentTouchX = touch.clientX;
            currentTouchTime = e.timeStamp;

            if (!rxTouchIgnoreTags.test(currentElement.tagName)) {
                e.preventDefault();
            }

            switch (e.type) {
                case EVENT_TOUCHSTART:
                    //The last element we tapped on.
                    if (initialElement) {
                        initialElement.blur();
                    }

                    _instance.stopAnimateTo();

                    initialElement = currentElement;

                    initialTouchY = lastTouchY = currentTouchY;
                    initialTouchX = currentTouchX;
                    initialTouchTime = currentTouchTime;

                    break;
                case EVENT_TOUCHMOVE:
                    //Prevent default event on touchIgnore elements in case they don't have focus yet.
                    if (rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
                        e.preventDefault();
                    }

                    deltaY = currentTouchY - lastTouchY;
                    deltaTime = currentTouchTime - lastTouchTime;

                    _instance.setScrollTop(_mobileOffset - deltaY, true);

                    lastTouchY = currentTouchY;
                    lastTouchTime = currentTouchTime;
                    break;
                default:
                case EVENT_TOUCHCANCEL:
                case EVENT_TOUCHEND:
                    var distanceY = initialTouchY - currentTouchY;
                    var distanceX = initialTouchX - currentTouchX;
                    var distance2 = distanceX * distanceX + distanceY * distanceY;

                    //Check if it was more like a tap (moved less than 7px).
                    if (distance2 < 49) {
                        if (!rxTouchIgnoreTags.test(initialElement.tagName)) {
                            initialElement.focus();

                            //It was a tap, click the element.
                            var clickEvent = document.createEvent('MouseEvents');
                            clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                            initialElement.dispatchEvent(clickEvent);
                        }

                        return;
                    }

                    initialElement = undefined;

                    var speed = deltaY / deltaTime;

                    //Cap speed at 3 pixel/ms.
                    speed = Math.max(Math.min(speed, 3), -3);

                    var duration = Math.abs(speed / _mobileDeceleration);
                    var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
                    var targetTop = _instance.getScrollTop() - targetOffset;

                    //Relative duration change for when scrolling above bounds.
                    var targetRatio = 0;

                    //Change duration proportionally when scrolling would leave bounds.
                    if (targetTop > _maxKeyFrame) {
                        targetRatio = (_maxKeyFrame - targetTop) / targetOffset;

                        targetTop = _maxKeyFrame;
                    } else if (targetTop < 0) {
                        targetRatio = -targetTop / targetOffset;

                        targetTop = 0;
                    }

                    duration = duration * (1 - targetRatio);

                    _instance.animateTo((targetTop + 0.5) | 0, {
                        easing: 'outCubic',
                        duration: duration
                    });
                    break;
            }
        });

        //Just in case there has already been some native scrolling, reset it.
        window.scrollTo(0, 0);
        documentElement.style.overflow = body.style.overflow = 'hidden';
    };

    /**
     * Updates key frames which depend on others / need to be updated on resize.
     * That is "end" in "absolute" mode and all key frames in "relative" mode.
     * Also handles constants, because they may change on resize.
     */
    var _updateDependentKeyFrames = function() {
        var viewportHeight = documentElement.clientHeight;
        var processedConstants = _processConstants();
        var skrollable;
        var element;
        var anchorTarget;
        var keyFrames;
        var keyFrameIndex;
        var keyFramesLength;
        var kf;
        var skrollableIndex;
        var skrollablesLength;
        var offset;
        var constantValue;

        //First process all relative-mode elements and find the max key frame.
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;

        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            element = skrollable.element;
            anchorTarget = skrollable.anchorTarget;
            keyFrames = skrollable.keyFrames;

            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;

            for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];

                offset = kf.offset;
                constantValue = processedConstants[kf.constant] || 0;

                kf.frame = offset;

                if (kf.isPercentage) {
                    //Convert the offset to percentage of the viewport height.
                    offset = offset * viewportHeight;

                    //Absolute + percentage mode.
                    kf.frame = offset;
                }

                if (kf.mode === 'relative') {
                    _reset(element);

                    kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;

                    _reset(element, true);
                }

                kf.frame += constantValue;

                //Only search for max key frame when forceHeight is enabled.
                if (_forceHeight) {
                    //Find the max key frame, but don't use one of the data-end ones for comparison.
                    if (!kf.isEnd && kf.frame > _maxKeyFrame) {
                        _maxKeyFrame = kf.frame;
                    }
                }
            }
        }

        //#133: The document can be larger than the maxKeyFrame we found.
        _maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());

        //Now process all data-end keyframes.
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;

        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            keyFrames = skrollable.keyFrames;

            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;

            for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];

                constantValue = processedConstants[kf.constant] || 0;

                if (kf.isEnd) {
                    kf.frame = _maxKeyFrame - kf.offset + constantValue;
                }
            }

            skrollable.keyFrames.sort(_keyFrameComparator);
        }
    };

    /**
     * Calculates and sets the style properties for the element at the given frame.
     * @param fakeFrame The frame to render at when smooth scrolling is enabled.
     * @param actualFrame The actual frame we are at.
     */
    var _calcSteps = function(fakeFrame, actualFrame) {
        //Iterate over all skrollables.
        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;

        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            var skrollable = _skrollables[skrollableIndex];
            var element = skrollable.element;
            var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
            var frames = skrollable.keyFrames;
            var framesLength = frames.length;
            var firstFrame = frames[0];
            var lastFrame = frames[frames.length - 1];
            var beforeFirst = frame < firstFrame.frame;
            var afterLast = frame > lastFrame.frame;
            var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
            var emitEvents = skrollable.emitEvents;
            var lastFrameIndex = skrollable.lastFrameIndex;
            var key;
            var value;

            //If we are before/after the first/last frame, set the styles according to the given edge strategy.
            if (beforeFirst || afterLast) {
                //Check if we already handled this edge case last time.
                //Note: using setScrollTop it's possible that we jumped from one edge to the other.
                if (beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
                    continue;
                }

                //Add the skrollr-before or -after class.
                if (beforeFirst) {
                    _updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]);

                    //This handles the special case where we exit the first keyframe.
                    if (emitEvents && lastFrameIndex > -1) {
                        _emitEvent(element, firstFrame.eventType, _direction);
                        skrollable.lastFrameIndex = -1;
                    }
                } else {
                    _updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]);

                    //This handles the special case where we exit the last keyframe.
                    if (emitEvents && lastFrameIndex < framesLength) {
                        _emitEvent(element, lastFrame.eventType, _direction);
                        skrollable.lastFrameIndex = framesLength;
                    }
                }

                //Remember that we handled the edge case (before/after the first/last keyframe).
                skrollable.edge = beforeFirst ? -1 : 1;

                switch (skrollable.edgeStrategy) {
                    case 'reset':
                        _reset(element);
                        continue;
                    case 'ease':
                        //Handle this case like it would be exactly at first/last keyframe and just pass it on.
                        frame = firstOrLastFrame.frame;
                        break;
                    default:
                    case 'set':
                        var props = firstOrLastFrame.props;

                        for (key in props) {
                            if (hasProp.call(props, key)) {
                                value = _interpolateString(props[key].value);

                                //Set style or attribute.
                                if (key.indexOf('@') === 0) {
                                    element.setAttribute(key.substr(1), value);
                                } else {
                                    skrollr.setStyle(element, key, value);
                                }
                            }
                        }

                        continue;
                }
            } else {
                //Did we handle an edge last time?
                if (skrollable.edge !== 0) {
                    _updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
                    skrollable.edge = 0;
                }
            }

            //Find out between which two key frames we are right now.
            var keyFrameIndex = 0;

            for (; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
                if (frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
                    var left = frames[keyFrameIndex];
                    var right = frames[keyFrameIndex + 1];

                    for (key in left.props) {
                        if (hasProp.call(left.props, key)) {
                            var progress = (frame - left.frame) / (right.frame - left.frame);

                            //Transform the current progress using the given easing function.
                            progress = left.props[key].easing(progress);

                            //Interpolate between the two values
                            value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

                            value = _interpolateString(value);

                            //Set style or attribute.
                            if (key.indexOf('@') === 0) {
                                element.setAttribute(key.substr(1), value);
                            } else {
                                skrollr.setStyle(element, key, value);
                            }
                        }
                    }

                    //Are events enabled on this element?
                    //This code handles the usual cases of scrolling through different keyframes.
                    //The special cases of before first and after last keyframe are handled above.
                    if (emitEvents) {
                        //Did we pass a new keyframe?
                        if (lastFrameIndex !== keyFrameIndex) {
                            if (_direction === 'down') {
                                _emitEvent(element, left.eventType, _direction);
                            } else {
                                _emitEvent(element, right.eventType, _direction);
                            }

                            skrollable.lastFrameIndex = keyFrameIndex;
                        }
                    }

                    break;
                }
            }
        }
    };

    /**
     * Renders all elements.
     */
    var _render = function() {
        if (_requestReflow) {
            _requestReflow = false;
            _reflow();
        }

        //We may render something else than the actual scrollbar position.
        var renderTop = _instance.getScrollTop();

        //If there's an animation, which ends in current render call, call the callback after rendering.
        var afterAnimationCallback;
        var now = _now();
        var progress;

        //Before actually rendering handle the scroll animation, if any.
        if (_scrollAnimation) {
            //It's over
            if (now >= _scrollAnimation.endTime) {
                renderTop = _scrollAnimation.targetTop;
                afterAnimationCallback = _scrollAnimation.done;
                _scrollAnimation = undefined;
            } else {
                //Map the current progress to the new progress using given easing function.
                progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

                renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
            }

            _instance.setScrollTop(renderTop, true);
        }
        //Smooth scrolling only if there's no animation running and if we're not forcing the rendering.
        else if (!_forceRender) {
            var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

            //The user scrolled, start new smooth scrolling.
            if (smoothScrollingDiff) {
                _smoothScrolling = {
                    startTop: _lastTop,
                    topDiff: renderTop - _lastTop,
                    targetTop: renderTop,
                    startTime: _lastRenderCall,
                    endTime: _lastRenderCall + _smoothScrollingDuration
                };
            }

            //Interpolate the internal scroll position (not the actual scrollbar).
            if (now <= _smoothScrolling.endTime) {
                //Map the current progress to the new progress using easing function.
                progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);

                renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
            }
        }

        //Did the scroll position even change?
        if (_forceRender || _lastTop !== renderTop) {
            //Remember in which direction are we scrolling?
            _direction = (renderTop > _lastTop) ? 'down' : (renderTop < _lastTop ? 'up' : _direction);

            _forceRender = false;

            var listenerParams = {
                curTop: renderTop,
                lastTop: _lastTop,
                maxTop: _maxKeyFrame,
                direction: _direction
            };

            //Tell the listener we are about to render.
            var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

            //The beforerender listener function is able the cancel rendering.
            if (continueRendering !== false) {
                //Now actually interpolate all the styles.
                _calcSteps(renderTop, _instance.getScrollTop());

                //That's were we actually "scroll" on mobile.
                if (_isMobile && _skrollrBody) {
                    //Set the transform ("scroll it").
                    skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
                }

                //Remember when we last rendered.
                _lastTop = renderTop;

                if (_listeners.render) {
                    _listeners.render.call(_instance, listenerParams);
                }
            }

            if (afterAnimationCallback) {
                afterAnimationCallback.call(_instance, false);
            }
        }

        _lastRenderCall = now;
    };

    /**
     * Parses the properties for each key frame of the given skrollable.
     */
    var _parseProps = function(skrollable) {
        //Iterate over all key frames
        var keyFrameIndex = 0;
        var keyFramesLength = skrollable.keyFrames.length;

        for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            var frame = skrollable.keyFrames[keyFrameIndex];
            var easing;
            var value;
            var prop;
            var props = {};

            var match;

            while ((match = rxPropValue.exec(frame.props)) !== null) {
                prop = match[1];
                value = match[2];

                easing = prop.match(rxPropEasing);

                //Is there an easing specified for this prop?
                if (easing !== null) {
                    prop = easing[1];
                    easing = easing[2];
                } else {
                    easing = DEFAULT_EASING;
                }

                //Exclamation point at first position forces the value to be taken literal.
                value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

                //Save the prop for this key frame with his value and easing function
                props[prop] = {
                    value: value,
                    easing: easings[easing]
                };
            }

            frame.props = props;
        }
    };

    /**
     * Parses a value extracting numeric values and generating a format string
     * for later interpolation of the new values in old string.
     *
     * @param val The CSS value to be parsed.
     * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
     * where the first element is the format string later used
     * and all following elements are the numeric value.
     */
    var _parseProp = function(val) {
        var numbers = [];

        //One special case, where floats don't work.
        //We replace all occurences of rgba colors
        //which don't use percentage notation with the percentage notation.
        rxRGBAIntegerColor.lastIndex = 0;
        val = val.replace(rxRGBAIntegerColor, function(rgba) {
            return rgba.replace(rxNumericValue, function(n) {
                return n / 255 * 100 + '%';
            });
        });

        //Handle prefixing of "gradient" values.
        //For now only the prefixed value will be set. Unprefixed isn't supported anyway.
        if (theDashedCSSPrefix) {
            rxGradient.lastIndex = 0;
            val = val.replace(rxGradient, function(s) {
                return theDashedCSSPrefix + s;
            });
        }

        //Now parse ANY number inside this string and create a format string.
        val = val.replace(rxNumericValue, function(n) {
            numbers.push(+n);
            return '{?}';
        });

        //Add the formatstring as first value.
        numbers.unshift(val);

        return numbers;
    };

    /**
     * Fills the key frames with missing left and right hand properties.
     * If key frame 1 has property X and key frame 2 is missing X,
     * but key frame 3 has X again, then we need to assign X to key frame 2 too.
     *
     * @param sk A skrollable.
     */
    var _fillProps = function(sk) {
        //Will collect the properties key frame by key frame
        var propList = {};
        var keyFrameIndex;
        var keyFramesLength;

        //Iterate over all key frames from left to right
        keyFrameIndex = 0;
        keyFramesLength = sk.keyFrames.length;

        for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }

        //Now do the same from right to fill the last gaps

        propList = {};

        //Iterate over all key frames from right to left
        keyFrameIndex = sk.keyFrames.length - 1;

        for (; keyFrameIndex >= 0; keyFrameIndex--) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }
    };

    var _fillPropForFrame = function(frame, propList) {
        var key;

        //For each key frame iterate over all right hand properties and assign them,
        //but only if the current key frame doesn't have the property by itself
        for (key in propList) {
            //The current frame misses this property, so assign it.
            if (!hasProp.call(frame.props, key)) {
                frame.props[key] = propList[key];
            }
        }

        //Iterate over all props of the current frame and collect them
        for (key in frame.props) {
            propList[key] = frame.props[key];
        }
    };

    /**
     * Calculates the new values for two given values array.
     */
    var _calcInterpolation = function(val1, val2, progress) {
        var valueIndex;
        var val1Length = val1.length;

        //They both need to have the same length
        if (val1Length !== val2.length) {
            throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
        }

        //Add the format string as first element.
        var interpolated = [val1[0]];

        valueIndex = 1;

        for (; valueIndex < val1Length; valueIndex++) {
            //That's the line where the two numbers are actually interpolated.
            interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
        }

        return interpolated;
    };

    /**
     * Interpolates the numeric values into the format string.
     */
    var _interpolateString = function(val) {
        var valueIndex = 1;

        rxInterpolateString.lastIndex = 0;

        return val[0].replace(rxInterpolateString, function() {
            return val[valueIndex++];
        });
    };

    /**
     * Resets the class and style attribute to what it was before skrollr manipulated the element.
     * Also remembers the values it had before reseting, in order to undo the reset.
     */
    var _reset = function(elements, undo) {
        //We accept a single element or an array of elements.
        elements = [].concat(elements);

        var skrollable;
        var element;
        var elementsIndex = 0;
        var elementsLength = elements.length;

        for (; elementsIndex < elementsLength; elementsIndex++) {
            element = elements[elementsIndex];
            skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];

            //Couldn't find the skrollable for this DOM element.
            if (!skrollable) {
                continue;
            }

            if (undo) {
                //Reset class and style to the "dirty" (set by skrollr) values.
                element.style.cssText = skrollable.dirtyStyleAttr;
                _updateClass(element, skrollable.dirtyClassAttr);
            } else {
                //Remember the "dirty" (set by skrollr) class and style.
                skrollable.dirtyStyleAttr = element.style.cssText;
                skrollable.dirtyClassAttr = _getClass(element);

                //Reset class and style to what it originally was.
                element.style.cssText = skrollable.styleAttr;
                _updateClass(element, skrollable.classAttr);
            }
        }
    };

    /**
     * Detects support for 3d transforms by applying it to the skrollr-body.
     */
    var _detect3DTransforms = function() {
        _translateZ = 'translateZ(0)';
        skrollr.setStyle(_skrollrBody, 'transform', _translateZ);

        var computedStyle = getStyle(_skrollrBody);
        var computedTransform = computedStyle.getPropertyValue('transform');
        var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
        var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');

        if (!has3D) {
            _translateZ = '';
        }
    };

    /**
     * Set the CSS property on the given element. Sets prefixed properties as well.
     */
    skrollr.setStyle = function(el, prop, val) {
        var style = el.style;

        //Camel case.
        prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

        //Make sure z-index gets a <integer>.
        //This is the only <integer> case we need to handle.
        if (prop === 'zIndex') {
            if (isNaN(val)) {
                //If it's not a number, don't touch it.
                //It could for example be "auto" (#351).
                style[prop] = val;
            } else {
                //Floor the number.
                style[prop] = '' + (val | 0);
            }
        }
        //#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
        else if (prop === 'float') {
            style.styleFloat = style.cssFloat = val;
        } else {
            //Need try-catch for old IE.
            try {
                //Set prefixed property if there's a prefix.
                if (theCSSPrefix) {
                    style[theCSSPrefix + prop.slice(0, 1).toUpperCase() + prop.slice(1)] = val;
                }

                //Set unprefixed.
                style[prop] = val;
            } catch (ignore) {}
        }
    };

    /**
     * Cross browser event handling.
     */
    var _addEvent = skrollr.addEvent = function(element, names, callback) {
        var intermediate = function(e) {
            //Normalize IE event stuff.
            e = e || window.event;

            if (!e.target) {
                e.target = e.srcElement;
            }

            if (!e.preventDefault) {
                e.preventDefault = function() {
                    e.returnValue = false;
                    e.defaultPrevented = true;
                };
            }

            return callback.call(this, e);
        };

        names = names.split(' ');

        var name;
        var nameCounter = 0;
        var namesLength = names.length;

        for (; nameCounter < namesLength; nameCounter++) {
            name = names[nameCounter];

            if (element.addEventListener) {
                element.addEventListener(name, callback, false);
            } else {
                element.attachEvent('on' + name, intermediate);
            }

            //Remember the events to be able to flush them later.
            _registeredEvents.push({
                element: element,
                name: name,
                listener: callback
            });
        }
    };

    var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
        names = names.split(' ');

        var nameCounter = 0;
        var namesLength = names.length;

        for (; nameCounter < namesLength; nameCounter++) {
            if (element.removeEventListener) {
                element.removeEventListener(names[nameCounter], callback, false);
            } else {
                element.detachEvent('on' + names[nameCounter], callback);
            }
        }
    };

    var _removeAllEvents = function() {
        var eventData;
        var eventCounter = 0;
        var eventsLength = _registeredEvents.length;

        for (; eventCounter < eventsLength; eventCounter++) {
            eventData = _registeredEvents[eventCounter];

            _removeEvent(eventData.element, eventData.name, eventData.listener);
        }

        _registeredEvents = [];
    };

    var _emitEvent = function(element, name, direction) {
        if (_listeners.keyframe) {
            _listeners.keyframe.call(_instance, element, name, direction);
        }
    };

    var _reflow = function() {
        var pos = _instance.getScrollTop();

        //Will be recalculated by _updateDependentKeyFrames.
        _maxKeyFrame = 0;

        if (_forceHeight && !_isMobile) {
            //un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
            body.style.height = '';
        }

        _updateDependentKeyFrames();

        if (_forceHeight && !_isMobile) {
            //"force" the height.
            body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
        }

        //The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
        if (_isMobile) {
            _instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
        } else {
            //Remember and reset the scroll pos (#217).
            _instance.setScrollTop(pos, true);
        }

        _forceRender = true;
    };

    /*
     * Returns a copy of the constants object where all functions and strings have been evaluated.
     */
    var _processConstants = function() {
        var viewportHeight = documentElement.clientHeight;
        var copy = {};
        var prop;
        var value;

        for (prop in _constants) {
            value = _constants[prop];

            if (typeof value === 'function') {
                value = value.call(_instance);
            }
            //Percentage offset.
            else if ((/p$/).test(value)) {
                value = (value.slice(0, -1) / 100) * viewportHeight;
            }

            copy[prop] = value;
        }

        return copy;
    };

    /*
     * Returns the height of the document.
     */
    var _getDocumentHeight = function() {
        var skrollrBodyHeight = 0;
        var bodyHeight;

        if (_skrollrBody) {
            skrollrBodyHeight = Math.max(_skrollrBody.offsetHeight, _skrollrBody.scrollHeight);
        }

        bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);

        return bodyHeight - documentElement.clientHeight;
    };

    /**
     * Returns a string of space separated classnames for the current element.
     * Works with SVG as well.
     */
    var _getClass = function(element) {
        var prop = 'className';

        //SVG support by using className.baseVal instead of just className.
        if (window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }

        return element[prop];
    };

    /**
     * Adds and removes a CSS classes.
     * Works with SVG as well.
     * add and remove are arrays of strings,
     * or if remove is ommited add is a string and overwrites all classes.
     */
    var _updateClass = function(element, add, remove) {
        var prop = 'className';

        //SVG support by using className.baseVal instead of just className.
        if (window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }

        //When remove is ommited, we want to overwrite/set the classes.
        if (remove === undefined) {
            element[prop] = add;
            return;
        }

        //Cache current classes. We will work on a string before passing back to DOM.
        var val = element[prop];

        //All classes to be removed.
        var classRemoveIndex = 0;
        var removeLength = remove.length;

        for (; classRemoveIndex < removeLength; classRemoveIndex++) {
            val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
        }

        val = _trim(val);

        //All classes to be added.
        var classAddIndex = 0;
        var addLength = add.length;

        for (; classAddIndex < addLength; classAddIndex++) {
            //Only add if el not already has class.
            if (_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
                val += ' ' + add[classAddIndex];
            }
        }

        element[prop] = _trim(val);
    };

    var _trim = function(a) {
        return a.replace(rxTrim, '');
    };

    /**
     * Adds a space before and after the string.
     */
    var _untrim = function(a) {
        return ' ' + a + ' ';
    };

    var _now = Date.now || function() {
        return +new Date();
    };

    var _keyFrameComparator = function(a, b) {
        return a.frame - b.frame;
    };

    /*
     * Private variables.
     */

    //Singleton
    var _instance;

    /*
    	A list of all elements which should be animated associated with their the metadata.
    	Exmaple skrollable with two key frames animating from 100px width to 20px:

    	skrollable = {
    		element: <the DOM element>,
    		styleAttr: <style attribute of the element before skrollr>,
    		classAttr: <class attribute of the element before skrollr>,
    		keyFrames: [
    			{
    				frame: 100,
    				props: {
    					width: {
    						value: ['{?}px', 100],
    						easing: <reference to easing function>
    					}
    				},
    				mode: "absolute"
    			},
    			{
    				frame: 200,
    				props: {
    					width: {
    						value: ['{?}px', 20],
    						easing: <reference to easing function>
    					}
    				},
    				mode: "absolute"
    			}
    		]
    	};
    */
    var _skrollables;

    var _skrollrBody;

    var _listeners;
    var _forceHeight;
    var _maxKeyFrame = 0;

    var _scale = 1;
    var _constants;

    var _mobileDeceleration;

    //Current direction (up/down).
    var _direction = 'down';

    //The last top offset value. Needed to determine direction.
    var _lastTop = -1;

    //The last time we called the render method (doesn't mean we rendered!).
    var _lastRenderCall = _now();

    //For detecting if it actually resized (#271).
    var _lastViewportWidth = 0;
    var _lastViewportHeight = 0;

    var _requestReflow = false;

    //Will contain data about a running scrollbar animation, if any.
    var _scrollAnimation;

    var _smoothScrollingEnabled;

    var _smoothScrollingDuration;

    //Will contain settins for smooth scrolling if enabled.
    var _smoothScrolling;

    //Can be set by any operation/event to force rendering even if the scrollbar didn't move.
    var _forceRender;

    //Each skrollable gets an unique ID incremented for each skrollable.
    //The ID is the index in the _skrollables array.
    var _skrollableIdCounter = 0;

    var _edgeStrategy;


    //Mobile specific vars. Will be stripped by UglifyJS when not in use.
    var _isMobile = false;

    //The virtual scroll offset when using mobile scrolling.
    var _mobileOffset = 0;

    //If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
    var _translateZ;

    //Will contain data about registered events by skrollr.
    var _registeredEvents = [];

    //Animation frame id returned by RequestAnimationFrame (or timeout when RAF is not supported).
    var _animFrame;

    //Expose skrollr as either a global variable or a require.js module.
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return skrollr;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = skrollr;
    } else {
        window.skrollr = skrollr;
    }

}(window, document));

// svg-pan-zoom v3.5.2
// https://github.com/ariutta/svg-pan-zoom
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        var svgPanZoom = require('./svg-pan-zoom.js');

        // UMD module definition
        (function(window, document) {
            // AMD
            if (typeof define === 'function' && define.amd) {
                define('svg-pan-zoom', function() {
                    return svgPanZoom;
                });
                // CMD
            } else if (typeof module !== 'undefined' && module.exports) {
                module.exports = svgPanZoom;

                // Browser
                // Keep exporting globally as module.exports is available because of browserify
                window.svgPanZoom = svgPanZoom;
            }
        })(window, document)

    }, {
        "./svg-pan-zoom.js": 4
    }],
    2: [function(require, module, exports) {
        var SvgUtils = require('./svg-utilities');

        module.exports = {
            enable: function(instance) {
                    // Select (and create if necessary) defs
                    var defs = instance.svg.querySelector('defs')
                    if (!defs) {
                        defs = document.createElementNS(SvgUtils.svgNS, 'defs')
                        instance.svg.appendChild(defs)
                    }

                    // Check for style element, and create it if it doesn't exist
                    var styleEl = defs.querySelector('style#svg-pan-zoom-controls-styles');
                    if (!styleEl) {
                        var style = document.createElementNS(SvgUtils.svgNS, 'style')
                        style.setAttribute('id', 'svg-pan-zoom-controls-styles')
                        style.setAttribute('type', 'text/css')
                        style.textContent = '.svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }'
                        defs.appendChild(style)
                    }

                    // Zoom Group
                    var zoomGroup = document.createElementNS(SvgUtils.svgNS, 'g');
                    zoomGroup.setAttribute('id', 'svg-pan-zoom-controls');
                    zoomGroup.setAttribute('transform', 'translate(' + (instance.width - 70) + ' ' + (instance.height - 76) + ') scale(0.75)');
                    zoomGroup.setAttribute('class', 'svg-pan-zoom-control');

                    // Control elements
                    zoomGroup.appendChild(this._createZoomIn(instance))
                    zoomGroup.appendChild(this._createZoomReset(instance))
                    zoomGroup.appendChild(this._createZoomOut(instance))

                    // Finally append created element
                    instance.svg.appendChild(zoomGroup)

                    // Cache control instance
                    instance.controlIcons = zoomGroup
                }

                ,
            _createZoomIn: function(instance) {
                    var zoomIn = document.createElementNS(SvgUtils.svgNS, 'g');
                    zoomIn.setAttribute('id', 'svg-pan-zoom-zoom-in');
                    zoomIn.setAttribute('transform', 'translate(30.5 5) scale(0.015)');
                    zoomIn.setAttribute('class', 'svg-pan-zoom-control');
                    zoomIn.addEventListener('click', function() {
                        instance.getPublicInstance().zoomIn()
                    }, false)
                    zoomIn.addEventListener('touchstart', function() {
                        instance.getPublicInstance().zoomIn()
                    }, false)

                    var zoomInBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
                    zoomInBackground.setAttribute('x', '0');
                    zoomInBackground.setAttribute('y', '0');
                    zoomInBackground.setAttribute('width', '1500'); // larger than expected because the whole group is transformed to scale down
                    zoomInBackground.setAttribute('height', '1400');
                    zoomInBackground.setAttribute('class', 'svg-pan-zoom-control-background');
                    zoomIn.appendChild(zoomInBackground);

                    var zoomInShape = document.createElementNS(SvgUtils.svgNS, 'path');
                    zoomInShape.setAttribute('d', 'M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z');
                    zoomInShape.setAttribute('class', 'svg-pan-zoom-control-element');
                    zoomIn.appendChild(zoomInShape);

                    return zoomIn
                }

                ,
            _createZoomReset: function(instance) {
                    // reset
                    var resetPanZoomControl = document.createElementNS(SvgUtils.svgNS, 'g');
                    resetPanZoomControl.setAttribute('id', 'svg-pan-zoom-reset-pan-zoom');
                    resetPanZoomControl.setAttribute('transform', 'translate(5 35) scale(0.4)');
                    resetPanZoomControl.setAttribute('class', 'svg-pan-zoom-control');
                    resetPanZoomControl.addEventListener('click', function() {
                        instance.getPublicInstance().reset()
                    }, false);
                    resetPanZoomControl.addEventListener('touchstart', function() {
                        instance.getPublicInstance().reset()
                    }, false);

                    var resetPanZoomControlBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
                    resetPanZoomControlBackground.setAttribute('x', '2');
                    resetPanZoomControlBackground.setAttribute('y', '2');
                    resetPanZoomControlBackground.setAttribute('width', '182'); // larger than expected because the whole group is transformed to scale down
                    resetPanZoomControlBackground.setAttribute('height', '58');
                    resetPanZoomControlBackground.setAttribute('class', 'svg-pan-zoom-control-background');
                    resetPanZoomControl.appendChild(resetPanZoomControlBackground);

                    var resetPanZoomControlShape1 = document.createElementNS(SvgUtils.svgNS, 'path');
                    resetPanZoomControlShape1.setAttribute('d', 'M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z');
                    resetPanZoomControlShape1.setAttribute('class', 'svg-pan-zoom-control-element');
                    resetPanZoomControl.appendChild(resetPanZoomControlShape1);

                    var resetPanZoomControlShape2 = document.createElementNS(SvgUtils.svgNS, 'path');
                    resetPanZoomControlShape2.setAttribute('d', 'M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z');
                    resetPanZoomControlShape2.setAttribute('class', 'svg-pan-zoom-control-element');
                    resetPanZoomControl.appendChild(resetPanZoomControlShape2);

                    return resetPanZoomControl
                }

                ,
            _createZoomOut: function(instance) {
                    // zoom out
                    var zoomOut = document.createElementNS(SvgUtils.svgNS, 'g');
                    zoomOut.setAttribute('id', 'svg-pan-zoom-zoom-out');
                    zoomOut.setAttribute('transform', 'translate(30.5 70) scale(0.015)');
                    zoomOut.setAttribute('class', 'svg-pan-zoom-control');
                    zoomOut.addEventListener('click', function() {
                        instance.getPublicInstance().zoomOut()
                    }, false);
                    zoomOut.addEventListener('touchstart', function() {
                        instance.getPublicInstance().zoomOut()
                    }, false);

                    var zoomOutBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
                    zoomOutBackground.setAttribute('x', '0');
                    zoomOutBackground.setAttribute('y', '0');
                    zoomOutBackground.setAttribute('width', '1500'); // larger than expected because the whole group is transformed to scale down
                    zoomOutBackground.setAttribute('height', '1400');
                    zoomOutBackground.setAttribute('class', 'svg-pan-zoom-control-background');
                    zoomOut.appendChild(zoomOutBackground);

                    var zoomOutShape = document.createElementNS(SvgUtils.svgNS, 'path');
                    zoomOutShape.setAttribute('d', 'M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z');
                    zoomOutShape.setAttribute('class', 'svg-pan-zoom-control-element');
                    zoomOut.appendChild(zoomOutShape);

                    return zoomOut
                }

                ,
            disable: function(instance) {
                if (instance.controlIcons) {
                    instance.controlIcons.parentNode.removeChild(instance.controlIcons)
                    instance.controlIcons = null
                }
            }
        }

    }, {
        "./svg-utilities": 5
    }],
    3: [function(require, module, exports) {
        var SvgUtils = require('./svg-utilities'),
            Utils = require('./utilities');

        var ShadowViewport = function(viewport, options) {
            this.init(viewport, options)
        }

        /**
         * Initialization
         *
         * @param  {SVGElement} viewport
         * @param  {Object} options
         */
        ShadowViewport.prototype.init = function(viewport, options) {
            // DOM Elements
            this.viewport = viewport
            this.options = options

            // State cache
            this.originalState = {
                zoom: 1,
                x: 0,
                y: 0
            }
            this.activeState = {
                zoom: 1,
                x: 0,
                y: 0
            }

            this.updateCTMCached = Utils.proxy(this.updateCTM, this)

            // Create a custom requestAnimationFrame taking in account refreshRate
            this.requestAnimationFrame = Utils.createRequestAnimationFrame(this.options.refreshRate)

            // ViewBox
            this.viewBox = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
            this.cacheViewBox()

            // Process CTM
            var newCTM = this.processCTM()

            // Update viewport CTM and cache zoom and pan
            this.setCTM(newCTM)

            // Update CTM in this frame
            this.updateCTM()
        }

        /**
         * Cache initial viewBox value
         * If no viewBox is defined, then use viewport size/position instead for viewBox values
         */
        ShadowViewport.prototype.cacheViewBox = function() {
            var svgViewBox = this.options.svg.getAttribute('viewBox')

            if (svgViewBox) {
                var viewBoxValues = svgViewBox.split(/[\s\,]/).filter(function(v) {
                    return v
                }).map(parseFloat)

                // Cache viewbox x and y offset
                this.viewBox.x = viewBoxValues[0]
                this.viewBox.y = viewBoxValues[1]
                this.viewBox.width = viewBoxValues[2]
                this.viewBox.height = viewBoxValues[3]

                var zoom = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height)

                // Update active state
                this.activeState.zoom = zoom
                this.activeState.x = (this.options.width - this.viewBox.width * zoom) / 2
                this.activeState.y = (this.options.height - this.viewBox.height * zoom) / 2

                // Force updating CTM
                this.updateCTMOnNextFrame()

                this.options.svg.removeAttribute('viewBox')
            } else {
                this.simpleViewBoxCache()
            }
        }

        /**
         * Recalculate viewport sizes and update viewBox cache
         */
        ShadowViewport.prototype.simpleViewBoxCache = function() {
            var bBox = this.viewport.getBBox()

            this.viewBox.x = bBox.x
            this.viewBox.y = bBox.y
            this.viewBox.width = bBox.width
            this.viewBox.height = bBox.height
        }

        /**
         * Returns a viewbox object. Safe to alter
         *
         * @return {Object} viewbox object
         */
        ShadowViewport.prototype.getViewBox = function() {
            return Utils.extend({}, this.viewBox)
        }

        /**
         * Get initial zoom and pan values. Save them into originalState
         * Parses viewBox attribute to alter initial sizes
         *
         * @return {CTM} CTM object based on options
         */
        ShadowViewport.prototype.processCTM = function() {
            var newCTM = this.getCTM()

            if (this.options.fit || this.options.contain) {
                var newScale;
                if (this.options.fit) {
                    newScale = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
                } else {
                    newScale = Math.max(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
                }

                newCTM.a = newScale; //x-scale
                newCTM.d = newScale; //y-scale
                newCTM.e = -this.viewBox.x * newScale; //x-transform
                newCTM.f = -this.viewBox.y * newScale; //y-transform
            }

            if (this.options.center) {
                var offsetX = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * newCTM.a) * 0.5,
                    offsetY = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * newCTM.a) * 0.5

                newCTM.e = offsetX
                newCTM.f = offsetY
            }

            // Cache initial values. Based on activeState and fix+center opitons
            this.originalState.zoom = newCTM.a
            this.originalState.x = newCTM.e
            this.originalState.y = newCTM.f

            return newCTM
        }

        /**
         * Return originalState object. Safe to alter
         *
         * @return {Object}
         */
        ShadowViewport.prototype.getOriginalState = function() {
            return Utils.extend({}, this.originalState)
        }

        /**
         * Return actualState object. Safe to alter
         *
         * @return {Object}
         */
        ShadowViewport.prototype.getState = function() {
            return Utils.extend({}, this.activeState)
        }

        /**
         * Get zoom scale
         *
         * @return {Float} zoom scale
         */
        ShadowViewport.prototype.getZoom = function() {
            return this.activeState.zoom
        }

        /**
         * Get zoom scale for pubilc usage
         *
         * @return {Float} zoom scale
         */
        ShadowViewport.prototype.getRelativeZoom = function() {
            return this.activeState.zoom / this.originalState.zoom
        }

        /**
         * Compute zoom scale for pubilc usage
         *
         * @return {Float} zoom scale
         */
        ShadowViewport.prototype.computeRelativeZoom = function(scale) {
            return scale / this.originalState.zoom
        }

        /**
         * Get pan
         *
         * @return {Object}
         */
        ShadowViewport.prototype.getPan = function() {
            return {
                x: this.activeState.x,
                y: this.activeState.y
            }
        }

        /**
         * Return cached viewport CTM value that can be safely modified
         *
         * @return {SVGMatrix}
         */
        ShadowViewport.prototype.getCTM = function() {
            var safeCTM = this.options.svg.createSVGMatrix()

            // Copy values manually as in FF they are not itterable
            safeCTM.a = this.activeState.zoom
            safeCTM.b = 0
            safeCTM.c = 0
            safeCTM.d = this.activeState.zoom
            safeCTM.e = this.activeState.x
            safeCTM.f = this.activeState.y

            return safeCTM
        }

        /**
         * Set a new CTM
         *
         * @param {SVGMatrix} newCTM
         */
        ShadowViewport.prototype.setCTM = function(newCTM) {
            var willZoom = this.isZoomDifferent(newCTM),
                willPan = this.isPanDifferent(newCTM)

            if (willZoom || willPan) {
                // Before zoom
                if (willZoom) {
                    // If returns false then cancel zooming
                    if (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(newCTM.a)) === false) {
                        newCTM.a = newCTM.d = this.activeState.zoom
                        willZoom = false
                    } else {
                        this.updateCache(newCTM);
                        this.options.onZoom(this.getRelativeZoom())
                    }
                }

                // Before pan
                if (willPan) {
                    var preventPan = this.options.beforePan(this.getPan(), {
                            x: newCTM.e,
                            y: newCTM.f
                        })
                        // If prevent pan is an object
                        ,
                        preventPanX = false,
                        preventPanY = false

                    // If prevent pan is Boolean false
                    if (preventPan === false) {
                        // Set x and y same as before
                        newCTM.e = this.getPan().x
                        newCTM.f = this.getPan().y

                        preventPanX = preventPanY = true
                    } else if (Utils.isObject(preventPan)) {
                        // Check for X axes attribute
                        if (preventPan.x === false) {
                            // Prevent panning on x axes
                            newCTM.e = this.getPan().x
                            preventPanX = true
                        } else if (Utils.isNumber(preventPan.x)) {
                            // Set a custom pan value
                            newCTM.e = preventPan.x
                        }

                        // Check for Y axes attribute
                        if (preventPan.y === false) {
                            // Prevent panning on x axes
                            newCTM.f = this.getPan().y
                            preventPanY = true
                        } else if (Utils.isNumber(preventPan.y)) {
                            // Set a custom pan value
                            newCTM.f = preventPan.y
                        }
                    }

                    // Update willPan flag
                    // Check if newCTM is still different
                    if ((preventPanX && preventPanY) || !this.isPanDifferent(newCTM)) {
                        willPan = false
                    } else {
                        this.updateCache(newCTM);
                        this.options.onPan(this.getPan());
                    }
                }

                // Check again if should zoom or pan
                if (willZoom || willPan) {
                    this.updateCTMOnNextFrame()
                }
            }
        }

        ShadowViewport.prototype.isZoomDifferent = function(newCTM) {
            return this.activeState.zoom !== newCTM.a
        }

        ShadowViewport.prototype.isPanDifferent = function(newCTM) {
            return this.activeState.x !== newCTM.e || this.activeState.y !== newCTM.f
        }


        /**
         * Update cached CTM and active state
         *
         * @param {SVGMatrix} newCTM
         */
        ShadowViewport.prototype.updateCache = function(newCTM) {
            this.activeState.zoom = newCTM.a
            this.activeState.x = newCTM.e
            this.activeState.y = newCTM.f
        }

        ShadowViewport.prototype.pendingUpdate = false

        /**
         * Place a request to update CTM on next Frame
         */
        ShadowViewport.prototype.updateCTMOnNextFrame = function() {
            if (!this.pendingUpdate) {
                // Lock
                this.pendingUpdate = true

                // Throttle next update
                this.requestAnimationFrame.call(window, this.updateCTMCached)
            }
        }

        /**
         * Update viewport CTM with cached CTM
         */
        ShadowViewport.prototype.updateCTM = function() {
            var ctm = this.getCTM()

            // Updates SVG element
            SvgUtils.setCTM(this.viewport, ctm, this.defs)

            // Free the lock
            this.pendingUpdate = false

            // Notify about the update
            if (this.options.onUpdatedCTM) {
                this.options.onUpdatedCTM(ctm)
            }
        }

        module.exports = function(viewport, options) {
            return new ShadowViewport(viewport, options)
        }

    }, {
        "./svg-utilities": 5,
        "./utilities": 7
    }],
    4: [function(require, module, exports) {
        var Wheel = require('./uniwheel'),
            ControlIcons = require('./control-icons'),
            Utils = require('./utilities'),
            SvgUtils = require('./svg-utilities'),
            ShadowViewport = require('./shadow-viewport')

        var SvgPanZoom = function(svg, options) {
            this.init(svg, options)
        }

        var optionsDefaults = {
            viewportSelector: '.svg-pan-zoom_viewport' // Viewport selector. Can be querySelector string or SVGElement
                ,
            panEnabled: true // enable or disable panning (default enabled)
                ,
            controlIconsEnabled: false // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
                ,
            zoomEnabled: true // enable or disable zooming (default enabled)
                ,
            dblClickZoomEnabled: true // enable or disable zooming by double clicking (default enabled)
                ,
            mouseWheelZoomEnabled: true // enable or disable zooming by mouse wheel (default enabled)
                ,
            preventMouseEventsDefault: true // enable or disable preventDefault for mouse events
                ,
            zoomScaleSensitivity: 0.1 // Zoom sensitivity
                ,
            minZoom: 0.5 // Minimum Zoom level
                ,
            maxZoom: 10 // Maximum Zoom level
                ,
            fit: true // enable or disable viewport fit in SVG (default true)
                ,
            contain: false // enable or disable viewport contain the svg (default false)
                ,
            center: true // enable or disable viewport centering in SVG (default true)
                ,
            refreshRate: 'auto' // Maximum number of frames per second (altering SVG's viewport)
                ,
            beforeZoom: null,
            onZoom: null,
            beforePan: null,
            onPan: null,
            customEventsHandler: null,
            eventsListenerElement: null,
            onUpdatedCTM: null
        }

        SvgPanZoom.prototype.init = function(svg, options) {
            var that = this

            this.svg = svg
            this.defs = svg.querySelector('defs')

            // Add default attributes to SVG
            SvgUtils.setupSvgAttributes(this.svg)

            // Set options
            this.options = Utils.extend(Utils.extend({}, optionsDefaults), options)

            // Set default state
            this.state = 'none'

            // Get dimensions
            var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(svg)
            this.width = boundingClientRectNormalized.width
            this.height = boundingClientRectNormalized.height

            // Init shadow viewport
            this.viewport = ShadowViewport(SvgUtils.getOrCreateViewport(this.svg, this.options.viewportSelector), {
                svg: this.svg,
                width: this.width,
                height: this.height,
                fit: this.options.fit,
                contain: this.options.contain,
                center: this.options.center,
                refreshRate: this.options.refreshRate
                    // Put callbacks into functions as they can change through time
                    ,
                beforeZoom: function(oldScale, newScale) {
                    if (that.viewport && that.options.beforeZoom) {
                        return that.options.beforeZoom(oldScale, newScale)
                    }
                },
                onZoom: function(scale) {
                    if (that.viewport && that.options.onZoom) {
                        return that.options.onZoom(scale)
                    }
                },
                beforePan: function(oldPoint, newPoint) {
                    if (that.viewport && that.options.beforePan) {
                        return that.options.beforePan(oldPoint, newPoint)
                    }
                },
                onPan: function(point) {
                    if (that.viewport && that.options.onPan) {
                        return that.options.onPan(point)
                    }
                },
                onUpdatedCTM: function(ctm) {
                    if (that.viewport && that.options.onUpdatedCTM) {
                        return that.options.onUpdatedCTM(ctm)
                    }
                }
            })

            // Wrap callbacks into public API context
            var publicInstance = this.getPublicInstance()
            publicInstance.setBeforeZoom(this.options.beforeZoom)
            publicInstance.setOnZoom(this.options.onZoom)
            publicInstance.setBeforePan(this.options.beforePan)
            publicInstance.setOnPan(this.options.onPan)
            publicInstance.setOnUpdatedCTM(this.options.onUpdatedCTM)

            if (this.options.controlIconsEnabled) {
                ControlIcons.enable(this)
            }

            // Init events handlers
            this.lastMouseWheelEventTime = Date.now()
            this.setupHandlers()
        }

        /**
         * Register event handlers
         */
        SvgPanZoom.prototype.setupHandlers = function() {
            var that = this,
                prevEvt = null // use for touchstart event to detect double tap
            ;

            this.eventListeners = {
                // Mouse down group
                mousedown: function(evt) {
                    var result = that.handleMouseDown(evt, prevEvt);
                    prevEvt = evt
                    return result;
                },
                touchstart: function(evt) {
                        var result = that.handleMouseDown(evt, prevEvt);
                        prevEvt = evt
                        return result;
                    }

                    // Mouse up group
                    ,
                mouseup: function(evt) {
                    return that.handleMouseUp(evt);
                },
                touchend: function(evt) {
                        return that.handleMouseUp(evt);
                    }

                    // Mouse move group
                    ,
                mousemove: function(evt) {
                    return that.handleMouseMove(evt);
                },
                touchmove: function(evt) {
                        return that.handleMouseMove(evt);
                    }

                    // Mouse leave group
                    ,
                mouseleave: function(evt) {
                    return that.handleMouseUp(evt);
                },
                touchleave: function(evt) {
                    return that.handleMouseUp(evt);
                },
                touchcancel: function(evt) {
                    return that.handleMouseUp(evt);
                }
            }

            // Init custom events handler if available
            if (this.options.customEventsHandler != null) { // jshint ignore:line
                this.options.customEventsHandler.init({
                    svgElement: this.svg,
                    eventsListenerElement: this.options.eventsListenerElement,
                    instance: this.getPublicInstance()
                })

                // Custom event handler may halt builtin listeners
                var haltEventListeners = this.options.customEventsHandler.haltEventListeners
                if (haltEventListeners && haltEventListeners.length) {
                    for (var i = haltEventListeners.length - 1; i >= 0; i--) {
                        if (this.eventListeners.hasOwnProperty(haltEventListeners[i])) {
                            delete this.eventListeners[haltEventListeners[i]]
                        }
                    }
                }
            }

            // Bind eventListeners
            for (var event in this.eventListeners) {
                // Attach event to eventsListenerElement or SVG if not available
                (this.options.eventsListenerElement || this.svg)
                .addEventListener(event, this.eventListeners[event], false)
            }

            // Zoom using mouse wheel
            if (this.options.mouseWheelZoomEnabled) {
                this.options.mouseWheelZoomEnabled = false // set to false as enable will set it back to true
                this.enableMouseWheelZoom()
            }
        }

        /**
         * Enable ability to zoom using mouse wheel
         */
        SvgPanZoom.prototype.enableMouseWheelZoom = function() {
            if (!this.options.mouseWheelZoomEnabled) {
                var that = this

                // Mouse wheel listener
                this.wheelListener = function(evt) {
                    return that.handleMouseWheel(evt);
                }

                // Bind wheelListener
                Wheel.on(this.options.eventsListenerElement || this.svg, this.wheelListener, false)

                this.options.mouseWheelZoomEnabled = true
            }
        }

        /**
         * Disable ability to zoom using mouse wheel
         */
        SvgPanZoom.prototype.disableMouseWheelZoom = function() {
            if (this.options.mouseWheelZoomEnabled) {
                Wheel.off(this.options.eventsListenerElement || this.svg, this.wheelListener, false)
                this.options.mouseWheelZoomEnabled = false
            }
        }

        /**
         * Handle mouse wheel event
         *
         * @param  {Event} evt
         */
        SvgPanZoom.prototype.handleMouseWheel = function(evt) {
            if (!this.options.zoomEnabled || this.state !== 'none') {
                return;
            }

            if (this.options.preventMouseEventsDefault) {
                if (evt.preventDefault) {
                    evt.preventDefault();
                } else {
                    evt.returnValue = false;
                }
            }

            // Default delta in case that deltaY is not available
            var delta = evt.deltaY || 1,
                timeDelta = Date.now() - this.lastMouseWheelEventTime,
                divider = 3 + Math.max(0, 30 - timeDelta)

            // Update cache
            this.lastMouseWheelEventTime = Date.now()

            // Make empirical adjustments for browsers that give deltaY in pixels (deltaMode=0)
            if ('deltaMode' in evt && evt.deltaMode === 0 && evt.wheelDelta) {
                delta = evt.deltaY === 0 ? 0 : Math.abs(evt.wheelDelta) / evt.deltaY
            }

            delta = -0.3 < delta && delta < 0.3 ? delta : (delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10) / divider

            var inversedScreenCTM = this.svg.getScreenCTM().inverse(),
                relativeMousePoint = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(inversedScreenCTM),
                zoom = Math.pow(1 + this.options.zoomScaleSensitivity, (-1) * delta); // multiplying by neg. 1 so as to make zoom in/out behavior match Google maps behavior

            this.zoomAtPoint(zoom, relativeMousePoint)
        }

        /**
         * Zoom in at a SVG point
         *
         * @param  {SVGPoint} point
         * @param  {Float} zoomScale    Number representing how much to zoom
         * @param  {Boolean} zoomAbsolute Default false. If true, zoomScale is treated as an absolute value.
         *                                Otherwise, zoomScale is treated as a multiplied (e.g. 1.10 would zoom in 10%)
         */
        SvgPanZoom.prototype.zoomAtPoint = function(zoomScale, point, zoomAbsolute) {
            var originalState = this.viewport.getOriginalState()

            if (!zoomAbsolute) {
                // Fit zoomScale in set bounds
                if (this.getZoom() * zoomScale < this.options.minZoom * originalState.zoom) {
                    zoomScale = (this.options.minZoom * originalState.zoom) / this.getZoom()
                } else if (this.getZoom() * zoomScale > this.options.maxZoom * originalState.zoom) {
                    zoomScale = (this.options.maxZoom * originalState.zoom) / this.getZoom()
                }
            } else {
                // Fit zoomScale in set bounds
                zoomScale = Math.max(this.options.minZoom * originalState.zoom, Math.min(this.options.maxZoom * originalState.zoom, zoomScale))
                // Find relative scale to achieve desired scale
                zoomScale = zoomScale / this.getZoom()
            }

            var oldCTM = this.viewport.getCTM(),
                relativePoint = point.matrixTransform(oldCTM.inverse()),
                modifier = this.svg.createSVGMatrix().translate(relativePoint.x, relativePoint.y).scale(zoomScale).translate(-relativePoint.x, -relativePoint.y),
                newCTM = oldCTM.multiply(modifier)

            if (newCTM.a !== oldCTM.a) {
                this.viewport.setCTM(newCTM)
            }
        }

        /**
         * Zoom at center point
         *
         * @param  {Float} scale
         * @param  {Boolean} absolute Marks zoom scale as relative or absolute
         */
        SvgPanZoom.prototype.zoom = function(scale, absolute) {
            this.zoomAtPoint(scale, SvgUtils.getSvgCenterPoint(this.svg, this.width, this.height), absolute)
        }

        /**
         * Zoom used by public instance
         *
         * @param  {Float} scale
         * @param  {Boolean} absolute Marks zoom scale as relative or absolute
         */
        SvgPanZoom.prototype.publicZoom = function(scale, absolute) {
            if (absolute) {
                scale = this.computeFromRelativeZoom(scale)
            }

            this.zoom(scale, absolute)
        }

        /**
         * Zoom at point used by public instance
         *
         * @param  {Float} scale
         * @param  {SVGPoint|Object} point    An object that has x and y attributes
         * @param  {Boolean} absolute Marks zoom scale as relative or absolute
         */
        SvgPanZoom.prototype.publicZoomAtPoint = function(scale, point, absolute) {
            if (absolute) {
                // Transform zoom into a relative value
                scale = this.computeFromRelativeZoom(scale)
            }

            // If not a SVGPoint but has x and y then create a SVGPoint
            if (Utils.getType(point) !== 'SVGPoint') {
                if ('x' in point && 'y' in point) {
                    point = SvgUtils.createSVGPoint(this.svg, point.x, point.y)
                } else {
                    throw new Error('Given point is invalid')
                }
            }

            this.zoomAtPoint(scale, point, absolute)
        }

        SvgPanZoom.prototype.getOriginalState = function() {
            return this.viewport.getOriginalState();
        }
        /**
         * Get zoom scale
         *
         * @return {Float} zoom scale
         */
        SvgPanZoom.prototype.getZoom = function() {
            return this.viewport.getZoom()
        }

        /**
         * Get zoom scale for public usage
         *
         * @return {Float} zoom scale
         */
        SvgPanZoom.prototype.getRelativeZoom = function() {
            return this.viewport.getRelativeZoom()
        }

        /**
         * Compute actual zoom from public zoom
         *
         * @param  {Float} zoom
         * @return {Float} zoom scale
         */
        SvgPanZoom.prototype.computeFromRelativeZoom = function(zoom) {
            return zoom * this.viewport.getOriginalState().zoom
        }

        /**
         * Set zoom to initial state
         */
        SvgPanZoom.prototype.resetZoom = function() {
            var originalState = this.viewport.getOriginalState()

            this.zoom(originalState.zoom, true);
        }

        /**
         * Set pan to initial state
         */
        SvgPanZoom.prototype.resetPan = function() {
            this.pan(this.viewport.getOriginalState());
        }

        /**
         * Set pan and zoom to initial state
         */
        SvgPanZoom.prototype.reset = function() {
            this.resetZoom()
            this.resetPan()
        }

        /**
         * Handle double click event
         * See handleMouseDown() for alternate detection method
         *
         * @param {Event} evt
         */
        SvgPanZoom.prototype.handleDblClick = function(evt) {
            if (this.options.preventMouseEventsDefault) {
                if (evt.preventDefault) {
                    evt.preventDefault()
                } else {
                    evt.returnValue = false
                }
            }

            // Check if target was a control button
            if (this.options.controlIconsEnabled) {
                var targetClass = evt.target.getAttribute('class') || ''
                if (targetClass.indexOf('svg-pan-zoom-control') > -1) {
                    return false
                }
            }

            var zoomFactor

            if (evt.shiftKey) {
                zoomFactor = 1 / ((1 + this.options.zoomScaleSensitivity) * 2) // zoom out when shift key pressed
            } else {
                zoomFactor = (1 + this.options.zoomScaleSensitivity) * 2
            }

            var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.svg.getScreenCTM().inverse())
            this.zoomAtPoint(zoomFactor, point)
        }

        /**
         * Handle click event
         *
         * @param {Event} evt
         */
        SvgPanZoom.prototype.handleMouseDown = function(evt, prevEvt) {
            if (this.options.preventMouseEventsDefault) {
                if (evt.preventDefault) {
                    evt.preventDefault()
                } else {
                    evt.returnValue = false
                }
            }

            Utils.mouseAndTouchNormalize(evt, this.svg)

            // Double click detection; more consistent than ondblclick
            if (this.options.dblClickZoomEnabled && Utils.isDblClick(evt, prevEvt)) {
                this.handleDblClick(evt)
            } else {
                // Pan mode
                this.state = 'pan'
                this.firstEventCTM = this.viewport.getCTM()
                this.stateOrigin = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse())
            }
        }

        /**
         * Handle mouse move event
         *
         * @param  {Event} evt
         */
        SvgPanZoom.prototype.handleMouseMove = function(evt) {
            if (this.options.preventMouseEventsDefault) {
                if (evt.preventDefault) {
                    evt.preventDefault()
                } else {
                    evt.returnValue = false
                }
            }

            if (this.state === 'pan' && this.options.panEnabled) {
                // Pan mode
                var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse()),
                    viewportCTM = this.firstEventCTM.translate(point.x - this.stateOrigin.x, point.y - this.stateOrigin.y)

                this.viewport.setCTM(viewportCTM)
            }
        }

        /**
         * Handle mouse button release event
         *
         * @param {Event} evt
         */
        SvgPanZoom.prototype.handleMouseUp = function(evt) {
            if (this.options.preventMouseEventsDefault) {
                if (evt.preventDefault) {
                    evt.preventDefault()
                } else {
                    evt.returnValue = false
                }
            }

            if (this.state === 'pan') {
                // Quit pan mode
                this.state = 'none'
            }
        }

        /**
         * Adjust viewport size (only) so it will fit in SVG
         * Does not center image
         */
        SvgPanZoom.prototype.fit = function() {
            var viewBox = this.viewport.getViewBox(),
                newScale = Math.min(this.width / viewBox.width, this.height / viewBox.height)

            this.zoom(newScale, true)
        }

        /**
         * Adjust viewport size (only) so it will contain the SVG
         * Does not center image
         */
        SvgPanZoom.prototype.contain = function() {
            var viewBox = this.viewport.getViewBox(),
                newScale = Math.max(this.width / viewBox.width, this.height / viewBox.height)

            this.zoom(newScale, true)
        }

        /**
         * Adjust viewport pan (only) so it will be centered in SVG
         * Does not zoom/fit/contain image
         */
        SvgPanZoom.prototype.center = function() {
            var viewBox = this.viewport.getViewBox(),
                offsetX = (this.width - (viewBox.width + viewBox.x * 2) * this.getZoom()) * 0.5,
                offsetY = (this.height - (viewBox.height + viewBox.y * 2) * this.getZoom()) * 0.5

            this.getPublicInstance().pan({
                x: offsetX,
                y: offsetY
            })
        }

        /**
         * Update content cached BorderBox
         * Use when viewport contents change
         */
        SvgPanZoom.prototype.updateBBox = function() {
            this.viewport.simpleViewBoxCache()
        }

        /**
         * Pan to a rendered position
         *
         * @param  {Object} point {x: 0, y: 0}
         */
        SvgPanZoom.prototype.pan = function(point) {
            var viewportCTM = this.viewport.getCTM()
            viewportCTM.e = point.x
            viewportCTM.f = point.y
            this.viewport.setCTM(viewportCTM)
        }

        /**
         * Relatively pan the graph by a specified rendered position vector
         *
         * @param  {Object} point {x: 0, y: 0}
         */
        SvgPanZoom.prototype.panBy = function(point) {
            var viewportCTM = this.viewport.getCTM()
            viewportCTM.e += point.x
            viewportCTM.f += point.y
            this.viewport.setCTM(viewportCTM)
        }

        /**
         * Get pan vector
         *
         * @return {Object} {x: 0, y: 0}
         */
        SvgPanZoom.prototype.getPan = function() {
            var state = this.viewport.getState()

            return {
                x: state.x,
                y: state.y
            }
        }

        /**
         * Recalculates cached svg dimensions and controls position
         */
        SvgPanZoom.prototype.resize = function() {
            // Get dimensions
            var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(this.svg)
            this.width = boundingClientRectNormalized.width
            this.height = boundingClientRectNormalized.height

            // Recalculate original state
            var viewport = this.viewport
            viewport.options.width = this.width
            viewport.options.height = this.height
            viewport.processCTM()

            // Reposition control icons by re-enabling them
            if (this.options.controlIconsEnabled) {
                this.getPublicInstance().disableControlIcons()
                this.getPublicInstance().enableControlIcons()
            }
        }

        /**
         * Unbind mouse events, free callbacks and destroy public instance
         */
        SvgPanZoom.prototype.destroy = function() {
            var that = this

            // Free callbacks
            this.beforeZoom = null
            this.onZoom = null
            this.beforePan = null
            this.onPan = null
            this.onUpdatedCTM = null

            // Destroy custom event handlers
            if (this.options.customEventsHandler != null) { // jshint ignore:line
                this.options.customEventsHandler.destroy({
                    svgElement: this.svg,
                    eventsListenerElement: this.options.eventsListenerElement,
                    instance: this.getPublicInstance()
                })
            }

            // Unbind eventListeners
            for (var event in this.eventListeners) {
                (this.options.eventsListenerElement || this.svg)
                .removeEventListener(event, this.eventListeners[event], false)
            }

            // Unbind wheelListener
            this.disableMouseWheelZoom()

            // Remove control icons
            this.getPublicInstance().disableControlIcons()

            // Reset zoom and pan
            this.reset()

            // Remove instance from instancesStore
            instancesStore = instancesStore.filter(function(instance) {
                return instance.svg !== that.svg
            })

            // Delete options and its contents
            delete this.options

            // Delete viewport to make public shadow viewport functions uncallable
            delete this.viewport

            // Destroy public instance and rewrite getPublicInstance
            delete this.publicInstance
            delete this.pi
            this.getPublicInstance = function() {
                return null
            }
        }

        /**
         * Returns a public instance object
         *
         * @return {Object} Public instance object
         */
        SvgPanZoom.prototype.getPublicInstance = function() {
            var that = this

            // Create cache
            if (!this.publicInstance) {
                this.publicInstance = this.pi = {
                    // Pan
                    enablePan: function() {
                        that.options.panEnabled = true;
                        return that.pi
                    },
                    disablePan: function() {
                        that.options.panEnabled = false;
                        return that.pi
                    },
                    isPanEnabled: function() {
                        return !!that.options.panEnabled
                    },
                    pan: function(point) {
                        that.pan(point);
                        return that.pi
                    },
                    panBy: function(point) {
                        that.panBy(point);
                        return that.pi
                    },
                    getPan: function() {
                            return that.getPan()
                        }
                        // Pan event
                        ,
                    setBeforePan: function(fn) {
                        that.options.beforePan = fn === null ? null : Utils.proxy(fn, that.publicInstance);
                        return that.pi
                    },
                    setOnPan: function(fn) {
                            that.options.onPan = fn === null ? null : Utils.proxy(fn, that.publicInstance);
                            return that.pi
                        }
                        // Zoom and Control Icons
                        ,
                    enableZoom: function() {
                        that.options.zoomEnabled = true;
                        return that.pi
                    },
                    disableZoom: function() {
                        that.options.zoomEnabled = false;
                        return that.pi
                    },
                    isZoomEnabled: function() {
                        return !!that.options.zoomEnabled
                    },
                    enableControlIcons: function() {
                        if (!that.options.controlIconsEnabled) {
                            that.options.controlIconsEnabled = true
                            ControlIcons.enable(that)
                        }
                        return that.pi
                    },
                    disableControlIcons: function() {
                        if (that.options.controlIconsEnabled) {
                            that.options.controlIconsEnabled = false;
                            ControlIcons.disable(that)
                        }
                        return that.pi
                    },
                    isControlIconsEnabled: function() {
                            return !!that.options.controlIconsEnabled
                        }
                        // Double click zoom
                        ,
                    enableDblClickZoom: function() {
                        that.options.dblClickZoomEnabled = true;
                        return that.pi
                    },
                    disableDblClickZoom: function() {
                        that.options.dblClickZoomEnabled = false;
                        return that.pi
                    },
                    isDblClickZoomEnabled: function() {
                            return !!that.options.dblClickZoomEnabled
                        }
                        // Mouse wheel zoom
                        ,
                    enableMouseWheelZoom: function() {
                        that.enableMouseWheelZoom();
                        return that.pi
                    },
                    disableMouseWheelZoom: function() {
                        that.disableMouseWheelZoom();
                        return that.pi
                    },
                    isMouseWheelZoomEnabled: function() {
                            return !!that.options.mouseWheelZoomEnabled
                        }
                        // Zoom scale and bounds
                        ,
                    setZoomScaleSensitivity: function(scale) {
                        that.options.zoomScaleSensitivity = scale;
                        return that.pi
                    },
                    setMinZoom: function(zoom) {
                        that.options.minZoom = zoom;
                        return that.pi
                    },
                    setMaxZoom: function(zoom) {
                            that.options.maxZoom = zoom;
                            return that.pi
                        }
                        // Zoom event
                        ,
                    setBeforeZoom: function(fn) {
                        that.options.beforeZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance);
                        return that.pi
                    },
                    setOnZoom: function(fn) {
                            that.options.onZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance);
                            return that.pi
                        }
                        // Zooming
                        ,
                    zoom: function(scale) {
                        that.publicZoom(scale, true);
                        return that.pi
                    },
                    zoomBy: function(scale) {
                        that.publicZoom(scale, false);
                        return that.pi
                    },
                    zoomAtPoint: function(scale, point) {
                        that.publicZoomAtPoint(scale, point, true);
                        return that.pi
                    },
                    zoomAtPointBy: function(scale, point) {
                        that.publicZoomAtPoint(scale, point, false);
                        return that.pi
                    },
                    zoomIn: function() {
                        this.zoomBy(1 + that.options.zoomScaleSensitivity);
                        return that.pi
                    },
                    zoomOut: function() {
                        this.zoomBy(1 / (1 + that.options.zoomScaleSensitivity));
                        return that.pi
                    },
                    getZoom: function() {
                        return that.getRelativeZoom()
                    },
                    getOriginalState: function() {
                            return that.getOriginalState()
                        }
                        // CTM update
                        ,
                    setOnUpdatedCTM: function(fn) {
                            that.options.onUpdatedCTM = fn === null ? null : Utils.proxy(fn, that.publicInstance);
                            return that.pi
                        }
                        // Reset
                        ,
                    resetZoom: function() {
                        that.resetZoom();
                        return that.pi
                    },
                    resetPan: function() {
                        that.resetPan();
                        return that.pi
                    },
                    reset: function() {
                            that.reset();
                            return that.pi
                        }
                        // Fit, Contain and Center
                        ,
                    fit: function() {
                        that.fit();
                        return that.pi
                    },
                    contain: function() {
                        that.contain();
                        return that.pi
                    },
                    center: function() {
                            that.center();
                            return that.pi
                        }
                        // Size and Resize
                        ,
                    updateBBox: function() {
                        that.updateBBox();
                        return that.pi
                    },
                    resize: function() {
                        that.resize();
                        return that.pi
                    },
                    getSizes: function() {
                            return {
                                width: that.width,
                                height: that.height,
                                realZoom: that.getZoom(),
                                viewBox: that.viewport.getViewBox()
                            }
                        }
                        // Destroy
                        ,
                    destroy: function() {
                        that.destroy();
                        return that.pi
                    }
                }
            }

            return this.publicInstance
        }

        /**
         * Stores pairs of instances of SvgPanZoom and SVG
         * Each pair is represented by an object {svg: SVGSVGElement, instance: SvgPanZoom}
         *
         * @type {Array}
         */
        var instancesStore = []

        var svgPanZoom = function(elementOrSelector, options) {
            var svg = Utils.getSvg(elementOrSelector)

            if (svg === null) {
                return null
            } else {
                // Look for existent instance
                for (var i = instancesStore.length - 1; i >= 0; i--) {
                    if (instancesStore[i].svg === svg) {
                        return instancesStore[i].instance.getPublicInstance()
                    }
                }

                // If instance not found - create one
                instancesStore.push({
                    svg: svg,
                    instance: new SvgPanZoom(svg, options)
                })

                // Return just pushed instance
                return instancesStore[instancesStore.length - 1].instance.getPublicInstance()
            }
        }

        module.exports = svgPanZoom;

    }, {
        "./control-icons": 2,
        "./shadow-viewport": 3,
        "./svg-utilities": 5,
        "./uniwheel": 6,
        "./utilities": 7
    }],
    5: [function(require, module, exports) {
        var Utils = require('./utilities'),
            _browser = 'unknown';

        // http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
        if ( /*@cc_on!@*/ false || !!document.documentMode) { // internet explorer
            _browser = 'ie';
        }

        module.exports = {
            svgNS: 'http://www.w3.org/2000/svg',
            xmlNS: 'http://www.w3.org/XML/1998/namespace',
            xmlnsNS: 'http://www.w3.org/2000/xmlns/',
            xlinkNS: 'http://www.w3.org/1999/xlink',
            evNS: 'http://www.w3.org/2001/xml-events'

                /**
                 * Get svg dimensions: width and height
                 *
                 * @param  {SVGSVGElement} svg
                 * @return {Object}     {width: 0, height: 0}
                 */
                ,
            getBoundingClientRectNormalized: function(svg) {
                    if (svg.clientWidth && svg.clientHeight) {
                        return {
                            width: svg.clientWidth,
                            height: svg.clientHeight
                        }
                    } else if (!!svg.getBoundingClientRect()) {
                        return svg.getBoundingClientRect();
                    } else {
                        throw new Error('Cannot get BoundingClientRect for SVG.');
                    }
                }

                /**
                 * Gets g element with class of "viewport" or creates it if it doesn't exist
                 *
                 * @param  {SVGSVGElement} svg
                 * @return {SVGElement}     g (group) element
                 */
                ,
            getOrCreateViewport: function(svg, selector) {
                    var viewport = null

                    if (Utils.isElement(selector)) {
                        viewport = selector
                    } else {
                        viewport = svg.querySelector(selector)
                    }

                    // Check if there is just one main group in SVG
                    if (!viewport) {
                        var childNodes = Array.prototype.slice.call(svg.childNodes || svg.children).filter(function(el) {
                            return el.nodeName !== 'defs' && el.nodeName !== '#text'
                        })

                        // Node name should be SVGGElement and should have no transform attribute
                        // Groups with transform are not used as viewport because it involves parsing of all transform possibilities
                        if (childNodes.length === 1 && childNodes[0].nodeName === 'g' && childNodes[0].getAttribute('transform') === null) {
                            viewport = childNodes[0]
                        }
                    }

                    // If no favorable group element exists then create one
                    if (!viewport) {
                        var viewportId = 'viewport-' + new Date().toISOString().replace(/\D/g, '');
                        viewport = document.createElementNS(this.svgNS, 'g');
                        viewport.setAttribute('id', viewportId);

                        // Internet Explorer (all versions?) can't use childNodes, but other browsers prefer (require?) using childNodes
                        var svgChildren = svg.childNodes || svg.children;
                        if (!!svgChildren && svgChildren.length > 0) {
                            for (var i = svgChildren.length; i > 0; i--) {
                                // Move everything into viewport except defs
                                if (svgChildren[svgChildren.length - i].nodeName !== 'defs') {
                                    viewport.appendChild(svgChildren[svgChildren.length - i]);
                                }
                            }
                        }
                        svg.appendChild(viewport);
                    }

                    // Parse class names
                    var classNames = [];
                    if (viewport.getAttribute('class')) {
                        classNames = viewport.getAttribute('class').split(' ')
                    }

                    // Set class (if not set already)
                    if (!~classNames.indexOf('svg-pan-zoom_viewport')) {
                        classNames.push('svg-pan-zoom_viewport')
                        viewport.setAttribute('class', classNames.join(' '))
                    }

                    return viewport
                }

                /**
                 * Set SVG attributes
                 *
                 * @param  {SVGSVGElement} svg
                 */
                ,
            setupSvgAttributes: function(svg) {
                    // Setting default attributes
                    svg.setAttribute('xmlns', this.svgNS);
                    svg.setAttributeNS(this.xmlnsNS, 'xmlns:xlink', this.xlinkNS);
                    svg.setAttributeNS(this.xmlnsNS, 'xmlns:ev', this.evNS);

                    // Needed for Internet Explorer, otherwise the viewport overflows
                    if (svg.parentNode !== null) {
                        var style = svg.getAttribute('style') || '';
                        if (style.toLowerCase().indexOf('overflow') === -1) {
                            svg.setAttribute('style', 'overflow: hidden; ' + style);
                        }
                    }
                }

                /**
                 * How long Internet Explorer takes to finish updating its display (ms).
                 */
                ,
            internetExplorerRedisplayInterval: 300

                /**
                 * Forces the browser to redisplay all SVG elements that rely on an
                 * element defined in a 'defs' section. It works globally, for every
                 * available defs element on the page.
                 * The throttling is intentionally global.
                 *
                 * This is only needed for IE. It is as a hack to make markers (and 'use' elements?)
                 * visible after pan/zoom when there are multiple SVGs on the page.
                 * See bug report: https://connect.microsoft.com/IE/feedback/details/781964/
                 * also see svg-pan-zoom issue: https://github.com/ariutta/svg-pan-zoom/issues/62
                 */
                ,
            refreshDefsGlobal: Utils.throttle(function() {
                    var allDefs = document.querySelectorAll('defs');
                    var allDefsCount = allDefs.length;
                    for (var i = 0; i < allDefsCount; i++) {
                        var thisDefs = allDefs[i];
                        thisDefs.parentNode.insertBefore(thisDefs, thisDefs);
                    }
                }, this.internetExplorerRedisplayInterval)

                /**
                 * Sets the current transform matrix of an element
                 *
                 * @param {SVGElement} element
                 * @param {SVGMatrix} matrix  CTM
                 * @param {SVGElement} defs
                 */
                ,
            setCTM: function(element, matrix, defs) {
                    var that = this,
                        s = 'matrix(' + matrix.a + ',' + matrix.b + ',' + matrix.c + ',' + matrix.d + ',' + matrix.e + ',' + matrix.f + ')';

                    element.setAttributeNS(null, 'transform', s);
                    if ('transform' in element.style) {
                        element.style.transform = s;
                    } else if ('-ms-transform' in element.style) {
                        element.style['-ms-transform'] = s;
                    } else if ('-webkit-transform' in element.style) {
                        element.style['-webkit-transform'] = s;
                    }

                    // IE has a bug that makes markers disappear on zoom (when the matrix "a" and/or "d" elements change)
                    // see http://stackoverflow.com/questions/17654578/svg-marker-does-not-work-in-ie9-10
                    // and http://srndolha.wordpress.com/2013/11/25/svg-line-markers-may-disappear-in-internet-explorer-11/
                    if (_browser === 'ie' && !!defs) {
                        // this refresh is intended for redisplaying the SVG during zooming
                        defs.parentNode.insertBefore(defs, defs);
                        // this refresh is intended for redisplaying the other SVGs on a page when panning a given SVG
                        // it is also needed for the given SVG itself, on zoomEnd, if the SVG contains any markers that
                        // are located under any other element(s).
                        window.setTimeout(function() {
                            that.refreshDefsGlobal();
                        }, that.internetExplorerRedisplayInterval);
                    }
                }

                /**
                 * Instantiate an SVGPoint object with given event coordinates
                 *
                 * @param {Event} evt
                 * @param  {SVGSVGElement} svg
                 * @return {SVGPoint}     point
                 */
                ,
            getEventPoint: function(evt, svg) {
                    var point = svg.createSVGPoint()

                    Utils.mouseAndTouchNormalize(evt, svg)

                    point.x = evt.clientX
                    point.y = evt.clientY

                    return point
                }

                /**
                 * Get SVG center point
                 *
                 * @param  {SVGSVGElement} svg
                 * @return {SVGPoint}
                 */
                ,
            getSvgCenterPoint: function(svg, width, height) {
                    return this.createSVGPoint(svg, width / 2, height / 2)
                }

                /**
                 * Create a SVGPoint with given x and y
                 *
                 * @param  {SVGSVGElement} svg
                 * @param  {Number} x
                 * @param  {Number} y
                 * @return {SVGPoint}
                 */
                ,
            createSVGPoint: function(svg, x, y) {
                var point = svg.createSVGPoint()
                point.x = x
                point.y = y

                return point
            }
        }

    }, {
        "./utilities": 7
    }],
    6: [function(require, module, exports) {
        // uniwheel 0.1.2 (customized)
        // A unified cross browser mouse wheel event handler
        // https://github.com/teemualap/uniwheel

        module.exports = (function() {

            //Full details: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel

            var prefix = "",
                _addEventListener, _removeEventListener, onwheel, support, fns = [];

            // detect event model
            if (window.addEventListener) {
                _addEventListener = "addEventListener";
                _removeEventListener = "removeEventListener";
            } else {
                _addEventListener = "attachEvent";
                _removeEventListener = "detachEvent";
                prefix = "on";
            }

            // detect available wheel event
            support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
                document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
                "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox


            function createCallback(element, callback, capture) {

                var fn = function(originalEvent) {

                    !originalEvent && (originalEvent = window.event);

                    // create a normalized event object
                    var event = {
                        // keep a ref to the original event object
                        originalEvent: originalEvent,
                        target: originalEvent.target || originalEvent.srcElement,
                        type: "wheel",
                        deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                        deltaX: 0,
                        delatZ: 0,
                        preventDefault: function() {
                            originalEvent.preventDefault ?
                                originalEvent.preventDefault() :
                                originalEvent.returnValue = false;
                        }
                    };

                    // calculate deltaY (and deltaX) according to the event
                    if (support == "mousewheel") {
                        event.deltaY = -1 / 40 * originalEvent.wheelDelta;
                        // Webkit also support wheelDeltaX
                        originalEvent.wheelDeltaX && (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
                    } else {
                        event.deltaY = originalEvent.detail;
                    }

                    // it's time to fire the callback
                    return callback(event);

                };

                fns.push({
                    element: element,
                    fn: fn,
                    capture: capture
                });

                return fn;
            }

            function getCallback(element, capture) {
                for (var i = 0; i < fns.length; i++) {
                    if (fns[i].element === element && fns[i].capture === capture) {
                        return fns[i].fn;
                    }
                }
                return function() {};
            }

            function removeCallback(element, capture) {
                for (var i = 0; i < fns.length; i++) {
                    if (fns[i].element === element && fns[i].capture === capture) {
                        return fns.splice(i, 1);
                    }
                }
            }

            function _addWheelListener(elem, eventName, callback, useCapture) {

                var cb;

                if (support === "wheel") {
                    cb = callback;
                } else {
                    cb = createCallback(elem, callback, useCapture);
                }

                elem[_addEventListener](prefix + eventName, cb, useCapture || false);

            }

            function _removeWheelListener(elem, eventName, callback, useCapture) {

                var cb;

                if (support === "wheel") {
                    cb = callback;
                } else {
                    cb = getCallback(elem, useCapture);
                }

                elem[_removeEventListener](prefix + eventName, cb, useCapture || false);

                removeCallback(elem, useCapture);

            }

            function addWheelListener(elem, callback, useCapture) {
                _addWheelListener(elem, support, callback, useCapture);

                // handle MozMousePixelScroll in older Firefox
                if (support == "DOMMouseScroll") {
                    _addWheelListener(elem, "MozMousePixelScroll", callback, useCapture);
                }
            }

            function removeWheelListener(elem, callback, useCapture) {
                _removeWheelListener(elem, support, callback, useCapture);

                // handle MozMousePixelScroll in older Firefox
                if (support == "DOMMouseScroll") {
                    _removeWheelListener(elem, "MozMousePixelScroll", callback, useCapture);
                }
            }

            return {
                on: addWheelListener,
                off: removeWheelListener
            };

        })();

    }, {}],
    7: [function(require, module, exports) {
        module.exports = {
            /**
             * Extends an object
             *
             * @param  {Object} target object to extend
             * @param  {Object} source object to take properties from
             * @return {Object}        extended object
             */
            extend: function(target, source) {
                    target = target || {};
                    for (var prop in source) {
                        // Go recursively
                        if (this.isObject(source[prop])) {
                            target[prop] = this.extend(target[prop], source[prop])
                        } else {
                            target[prop] = source[prop]
                        }
                    }
                    return target;
                }

                /**
                 * Checks if an object is a DOM element
                 *
                 * @param  {Object}  o HTML element or String
                 * @return {Boolean}   returns true if object is a DOM element
                 */
                ,
            isElement: function(o) {
                    return (
                        o instanceof HTMLElement || o instanceof SVGElement || o instanceof SVGSVGElement || //DOM2
                        (o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string')
                    );
                }

                /**
                 * Checks if an object is an Object
                 *
                 * @param  {Object}  o Object
                 * @return {Boolean}   returns true if object is an Object
                 */
                ,
            isObject: function(o) {
                    return Object.prototype.toString.call(o) === '[object Object]';
                }

                /**
                 * Checks if variable is Number
                 *
                 * @param  {Integer|Float}  n
                 * @return {Boolean}   returns true if variable is Number
                 */
                ,
            isNumber: function(n) {
                    return !isNaN(parseFloat(n)) && isFinite(n);
                }

                /**
                 * Search for an SVG element
                 *
                 * @param  {Object|String} elementOrSelector DOM Element or selector String
                 * @return {Object|Null}                   SVG or null
                 */
                ,
            getSvg: function(elementOrSelector) {
                    var element, svg;

                    if (!this.isElement(elementOrSelector)) {
                        // If selector provided
                        if (typeof elementOrSelector === 'string' || elementOrSelector instanceof String) {
                            // Try to find the element
                            element = document.querySelector(elementOrSelector)

                            if (!element) {
                                throw new Error('Provided selector did not find any elements. Selector: ' + elementOrSelector)
                                return null
                            }
                        } else {
                            throw new Error('Provided selector is not an HTML object nor String')
                            return null
                        }
                    } else {
                        element = elementOrSelector
                    }

                    if (element.tagName.toLowerCase() === 'svg') {
                        svg = element;
                    } else {
                        if (element.tagName.toLowerCase() === 'object') {
                            svg = element.contentDocument.documentElement;
                        } else {
                            if (element.tagName.toLowerCase() === 'embed') {
                                svg = element.getSVGDocument().documentElement;
                            } else {
                                if (element.tagName.toLowerCase() === 'img') {
                                    throw new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.');
                                } else {
                                    throw new Error('Cannot get SVG.');
                                }
                                return null
                            }
                        }
                    }

                    return svg
                }

                /**
                 * Attach a given context to a function
                 * @param  {Function} fn      Function
                 * @param  {Object}   context Context
                 * @return {Function}           Function with certain context
                 */
                ,
            proxy: function(fn, context) {
                    return function() {
                        return fn.apply(context, arguments)
                    }
                }

                /**
                 * Returns object type
                 * Uses toString that returns [object SVGPoint]
                 * And than parses object type from string
                 *
                 * @param  {Object} o Any object
                 * @return {String}   Object type
                 */
                ,
            getType: function(o) {
                    return Object.prototype.toString.apply(o).replace(/^\[object\s/, '').replace(/\]$/, '')
                }

                /**
                 * If it is a touch event than add clientX and clientY to event object
                 *
                 * @param  {Event} evt
                 * @param  {SVGSVGElement} svg
                 */
                ,
            mouseAndTouchNormalize: function(evt, svg) {
                    // If no clientX then fallback
                    if (evt.clientX === void 0 || evt.clientX === null) {
                        // Fallback
                        evt.clientX = 0
                        evt.clientY = 0

                        // If it is a touch event
                        if (evt.touches !== void 0 && evt.touches.length) {
                            if (evt.touches[0].clientX !== void 0) {
                                evt.clientX = evt.touches[0].clientX
                                evt.clientY = evt.touches[0].clientY
                            } else if (evt.touches[0].pageX !== void 0) {
                                var rect = svg.getBoundingClientRect();

                                evt.clientX = evt.touches[0].pageX - rect.left
                                evt.clientY = evt.touches[0].pageY - rect.top
                            }
                            // If it is a custom event
                        } else if (evt.originalEvent !== void 0) {
                            if (evt.originalEvent.clientX !== void 0) {
                                evt.clientX = evt.originalEvent.clientX
                                evt.clientY = evt.originalEvent.clientY
                            }
                        }
                    }
                }

                /**
                 * Check if an event is a double click/tap
                 * TODO: For touch gestures use a library (hammer.js) that takes in account other events
                 * (touchmove and touchend). It should take in account tap duration and traveled distance
                 *
                 * @param  {Event}  evt
                 * @param  {Event}  prevEvt Previous Event
                 * @return {Boolean}
                 */
                ,
            isDblClick: function(evt, prevEvt) {
                    // Double click detected by browser
                    if (evt.detail === 2) {
                        return true;
                    }
                    // Try to compare events
                    else if (prevEvt !== void 0 && prevEvt !== null) {
                        var timeStampDiff = evt.timeStamp - prevEvt.timeStamp // should be lower than 250 ms
                            ,
                            touchesDistance = Math.sqrt(Math.pow(evt.clientX - prevEvt.clientX, 2) + Math.pow(evt.clientY - prevEvt.clientY, 2))

                        return timeStampDiff < 250 && touchesDistance < 10
                    }

                    // Nothing found
                    return false;
                }

                /**
                 * Returns current timestamp as an integer
                 *
                 * @return {Number}
                 */
                ,
            now: Date.now || function() {
                    return new Date().getTime();
                }

                // From underscore.
                // Returns a function, that, when invoked, will only be triggered at most once
                // during a given window of time. Normally, the throttled function will run
                // as much as it can, without ever going more than once per `wait` duration;
                // but if you'd like to disable the execution on the leading edge, pass
                // `{leading: false}`. To disable execution on the trailing edge, ditto.
                // jscs:disable
                // jshint ignore:start
                ,
            throttle: function(func, wait, options) {
                    var that = this;
                    var context, args, result;
                    var timeout = null;
                    var previous = 0;
                    if (!options) options = {};
                    var later = function() {
                        previous = options.leading === false ? 0 : that.now();
                        timeout = null;
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    };
                    return function() {
                        var now = that.now();
                        if (!previous && options.leading === false) previous = now;
                        var remaining = wait - (now - previous);
                        context = this;
                        args = arguments;
                        if (remaining <= 0 || remaining > wait) {
                            clearTimeout(timeout);
                            timeout = null;
                            previous = now;
                            result = func.apply(context, args);
                            if (!timeout) context = args = null;
                        } else if (!timeout && options.trailing !== false) {
                            timeout = setTimeout(later, remaining);
                        }
                        return result;
                    };
                }
                // jshint ignore:end
                // jscs:enable

                /**
                 * Create a requestAnimationFrame simulation
                 *
                 * @param  {Number|String} refreshRate
                 * @return {Function}
                 */
                ,
            createRequestAnimationFrame: function(refreshRate) {
                var timeout = null

                // Convert refreshRate to timeout
                if (refreshRate !== 'auto' && refreshRate < 60 && refreshRate > 1) {
                    timeout = Math.floor(1000 / refreshRate)
                }

                if (timeout === null) {
                    return window.requestAnimationFrame || requestTimeout(33)
                } else {
                    return requestTimeout(timeout)
                }
            }
        }

        /**
         * Create a callback that will execute after a given timeout
         *
         * @param  {Function} timeout
         * @return {Function}
         */
        function requestTimeout(timeout) {
            return function(callback) {
                window.setTimeout(callback, timeout)
            }
        }

    }, {}]
}, {}, [1]);

! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }([function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            r = n(1),
            a = (o(r), n(6)),
            u = o(a),
            c = n(7),
            f = o(c),
            s = n(8),
            d = o(s),
            l = n(9),
            p = o(l),
            m = n(10),
            b = o(m),
            v = n(11),
            y = o(v),
            g = n(14),
            h = o(g),
            w = [],
            k = !1,
            x = document.all && !window.atob,
            j = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded"
            },
            O = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w
            },
            S = function() {
                w = (0, h.default)(), O()
            },
            _ = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                })
            },
            E = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
            },
            z = function(e) {
                return j = i(j, e), w = (0, h.default)(), E(j.disable) || x ? _() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
                    O(!0)
                }) : document.addEventListener(j.startEvent, function() {
                    O(!0)
                }), window.addEventListener("resize", (0, f.default)(O, 50, !0)), window.addEventListener("orientationchange", (0, f.default)(O, 50, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, j.once)
                }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                    var t = e.target;
                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, f.default)(S, 50, !0)
                }), (0, d.default)("[data-aos]", S), w)
            };
        e.exports = {
            init: z,
            refresh: O,
            refreshHard: S
        }
    }, function(e, t) {}, , , , , function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function o(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, k = t, g = e.apply(o, n)
                }

                function r(e) {
                    return k = e, h = setTimeout(s, t), S ? o(e) : g
                }

                function a(e) {
                    var n = e - w,
                        o = e - k,
                        i = t - n;
                    return _ ? j(i, y - o) : i
                }

                function c(e) {
                    var n = e - w,
                        o = e - k;
                    return void 0 === w || n >= t || n < 0 || _ && o >= y
                }

                function s() {
                    var e = O();
                    return c(e) ? d(e) : void(h = setTimeout(s, a(e)))
                }

                function d(e) {
                    return h = void 0, E && b ? o(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(O())
                }

                function m() {
                    var e = O(),
                        n = c(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (_) return h = setTimeout(s, t), o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }
                var b, v, y, g, h, w, k = 0,
                    S = !1,
                    _ = !1,
                    E = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return t = u(t) || 0, i(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? x(u(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m
            }

            function o(e, t, o) {
                var r = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }

            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }

            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }

            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }

            function u(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                f = "Expected a function",
                s = NaN,
                d = "[object Symbol]",
                l = /^\s+|\s+$/g,
                p = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                b = /^0o[0-7]+$/i,
                v = parseInt,
                y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                h = y || g || Function("return this")(),
                w = Object.prototype,
                k = w.toString,
                x = Math.max,
                j = Math.min,
                O = function() {
                    return h.Date.now()
                };
            e.exports = o
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function i(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, O = t, g = e.apply(o, n)
                }

                function r(e) {
                    return O = e, h = setTimeout(s, t), S ? i(e) : g
                }

                function u(e) {
                    var n = e - w,
                        o = e - O,
                        i = t - n;
                    return _ ? x(i, y - o) : i
                }

                function f(e) {
                    var n = e - w,
                        o = e - O;
                    return void 0 === w || n >= t || n < 0 || _ && o >= y
                }

                function s() {
                    var e = j();
                    return f(e) ? d(e) : void(h = setTimeout(s, u(e)))
                }

                function d(e) {
                    return h = void 0, E && b ? i(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(j())
                }

                function m() {
                    var e = j(),
                        n = f(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (_) return h = setTimeout(s, t), i(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }
                var b, v, y, g, h, w, O = 0,
                    S = !1,
                    _ = !1,
                    E = !0;
                if ("function" != typeof e) throw new TypeError(c);
                return t = a(t) || 0, o(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? k(a(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m
            }

            function o(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }

            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
            }

            function a(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return f;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                c = "Expected a function",
                f = NaN,
                s = "[object Symbol]",
                d = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                b = parseInt,
                v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                g = v || y || Function("return this")(),
                h = Object.prototype,
                w = h.toString,
                k = Math.max,
                x = Math.min,
                j = function() {
                    return g.Date.now()
                };
            e.exports = n
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            a.push({
                selector: e,
                fn: t
            }), !u && r && (u = new r(o), u.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })), o()
        }

        function o() {
            for (var e, t, n = 0, o = a.length; n < o; n++) {
                e = a[n], t = i.querySelectorAll(e.selector);
                for (var r, u = 0, c = t.length; u < c; u++) r = t[u], r.ready || (r.ready = !0, e.fn.call(r, r))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window.document,
            r = window.MutationObserver || window.WebKitMutationObserver,
            a = [],
            u = void 0;
        t.default = n
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            f = function() {
                function e() {
                    n(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function() {
                        var e = o();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = o();
                        return !(!u.test(e) && !c.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new f
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
            },
            o = function(e, t) {
                var o = window.pageYOffset,
                    i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t)
                })
            };
        t.default = o
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12),
            r = o(i),
            a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
                }), e
            };
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(13),
            r = o(i),
            a = function(e, t) {
                var n = 0,
                    o = 0,
                    i = window.innerHeight,
                    a = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
            };
        t.default = a
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        };
        t.default = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            e = e || document.querySelectorAll("[data-aos]");
            var t = [];
            return [].forEach.call(e, function(e, n) {
                t.push({
                    node: e
                })
            }), t
        };
        t.default = n
    }])
});
//# sourceMappingURL=aos.js.map
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t()
}(this, function() {
    var e = function(t, n) {
        "use strict";
        var o = Object.create(e.prototype),
            r = 0,
            i = 0,
            s = [],
            a = !1,
            l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 60)
            },
            c = window.transformProp || function() {
                var e = document.createElement("div");
                if (null == e.style.transform) {
                    var t = ["Webkit", "Moz", "ms"];
                    for (var n in t)
                        if (void 0 !== e.style[t[n] + "Transform"]) return t[n] + "Transform"
                }
                return "transform"
            }(),
            d = function(e, t, n) {
                return e <= t ? t : e >= n ? n : e
            };
        o.options = {
            speed: -2,
            center: !1,
            round: !0,
            callback: function() {}
        }, n && Object.keys(n).forEach(function(e) {
            o.options[e] = n[e]
        }), o.options.speed = d(o.options.speed, -10, 10), t || (t = ".rellax");
        var u = document.querySelectorAll(t);
        if (!(u.length > 0)) throw new Error("The elements you're trying to select don't exist.");
        o.elems = u;
        var f = function(e) {
                var t = e.dataset.rellaxPercentage,
                    n = e.dataset.rellaxSpeed,
                    r = t || o.options.center ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop : 0,
                    s = r + e.getBoundingClientRect().top,
                    a = e.clientHeight || e.offsetHeight || e.scrollHeight,
                    l = t || (r - s + i) / (a + i);
                o.options.center && (l = .5);
                var c = n ? d(n, -10, 10) : o.options.speed;
                (t || o.options.center) && (c = d(n || o.options.speed, -5, 5));
                var u = p(l, c),
                    f = e.style.cssText,
                    m = "";
                if (f.indexOf("transform") >= 0) {
                    var w = f.indexOf("transform"),
                        v = f.slice(w),
                        g = v.indexOf(";");
                    m = g ? " " + v.slice(11, g).replace(/\s/g, "") : " " + v.slice(11).replace(/\s/g, "")
                }
                return {
                    base: u,
                    top: s,
                    height: a,
                    speed: c,
                    style: f,
                    transform: m
                }
            },
            m = function() {
                var e = r;
                return r = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, e != r
            },
            p = function(e, t) {
                var n = t * (100 * (1 - e));
                return o.options.round ? Math.round(10 * n) / 10 : n
            },
            w = function() {
                m() && !1 === a && v(), l(w)
            },
            v = function() {
                for (var e = 0; e < o.elems.length; e++) {
                    var t = (r - s[e].top + i) / (s[e].height + i),
                        n = p(t, s[e].speed) - s[e].base,
                        a = "translate3d(0," + n + "px,0) " + s[e].transform;
                    o.elems[e].style[c] = a
                }
                o.options.callback(n)
            };
        return o.destroy = function() {
                for (var e = 0; e < o.elems.length; e++) o.elems[e].style.cssText = s[e].style;
                a = !0
            },
            function() {
                i = window.innerHeight, m();
                for (var e = 0; e < o.elems.length; e++) {
                    var t = f(o.elems[e]);
                    s.push(t)
                }
                window.addEventListener("resize", function() {
                    v()
                }), w(), v()
            }(), o
    };
    return e
});

/*!
 * viewport-units-buggyfill v0.6.2
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */

(function() {
    (function(root, factory) {
        'use strict';
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define([], factory);
        } else if (typeof exports === 'object') {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like enviroments that support module.exports,
            // like Node.
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.viewportUnitsBuggyfill = factory();
        }
    }(this, function() {
        'use strict';
        /* global document, window, navigator, location, XMLHttpRequest, XDomainRequest, CustomEvent */

        var initialized = false;
        var options;
        var userAgent = window.navigator.userAgent;
        var viewportUnitExpression = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g;
        var urlExpression = /(https?:)?\/\//
        var forEach = [].forEach;
        var dimensions;
        var declarations;
        var styleNode;
        var isBuggyIE = /MSIE [0-9]\./i.test(userAgent);
        var isOldIE = /MSIE [0-8]\./i.test(userAgent);
        var isOperaMini = userAgent.indexOf('Opera Mini') > -1;

        var isMobileSafari = /(iPhone|iPod|iPad).+AppleWebKit/i.test(userAgent) && (function() {
            // Regexp for iOS-version tested against the following userAgent strings:
            // Example WebView UserAgents:
            // * iOS Chrome on iOS8: "Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/39.0.2171.50 Mobile/12B410 Safari/600.1.4"
            // * iOS Facebook on iOS7: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D201 [FBAN/FBIOS;FBAV/12.1.0.24.20; FBBV/3214247; FBDV/iPhone6,1;FBMD/iPhone; FBSN/iPhone OS;FBSV/7.1.1; FBSS/2; FBCR/AT&T;FBID/phone;FBLC/en_US;FBOP/5]"
            // Example Safari UserAgents:
            // * Safari iOS8: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"
            // * Safari iOS7: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A4449d Safari/9537.53"
            var iOSversion = userAgent.match(/OS (\d+)/);
            // viewport units work fine in mobile Safari and webView on iOS 8+
            return iOSversion && iOSversion.length > 1 && parseInt(iOSversion[1]) < 10;
        })();

        var isBadStockAndroid = (function() {
            // Android stock browser test derived from
            // http://stackoverflow.com/questions/24926221/distinguish-android-chrome-from-stock-browser-stock-browsers-user-agent-contai
            var isAndroid = userAgent.indexOf(' Android ') > -1;
            if (!isAndroid) {
                return false;
            }

            var isStockAndroid = userAgent.indexOf('Version/') > -1;
            if (!isStockAndroid) {
                return false;
            }

            var versionNumber = parseFloat((userAgent.match('Android ([0-9.]+)') || [])[1]);
            // anything below 4.4 uses WebKit without *any* viewport support,
            // 4.4 has issues with viewport units within calc()
            return versionNumber <= 4.4;
        })();

        // added check for IE10, IE11 and Edge < 20, since it *still* doesn't understand vmax
        // http://caniuse.com/#feat=viewport-units
        if (!isBuggyIE) {
            isBuggyIE = !!navigator.userAgent.match(/MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./);
        }

        // Polyfill for creating CustomEvents on IE9/10/11
        // from https://github.com/krambuhl/custom-event-polyfill
        try {
            // eslint-disable-next-line no-new, no-use-before-define
            new CustomEvent('test');
        } catch (e) {
            var CustomEvent = function(event, params) {
                var evt;
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined,
                };

                evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent; // expose definition to window
        }

        function debounce(func, wait) {
            var timeout;
            return function() {
                var context = this;
                var args = arguments;
                var callback = function() {
                    func.apply(context, args);
                };

                clearTimeout(timeout);
                timeout = setTimeout(callback, wait);
            };
        }

        // from http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
        function inIframe() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }

        function initialize(initOptions) {
            if (initialized) {
                return;
            }

            if (initOptions === true) {
                initOptions = {
                    force: true,
                };
            }

            options = initOptions || {};
            options.isMobileSafari = isMobileSafari;
            options.isBadStockAndroid = isBadStockAndroid;

            if (options.ignoreVmax && !options.force && !isOldIE) {
                // modern IE (10 and up) do not support vmin/vmax,
                // but chances are this unit is not even used, so
                // allow overwriting the "hacktivation"
                // https://github.com/rodneyrehm/viewport-units-buggyfill/issues/56
                isBuggyIE = false;
            }

            if (isOldIE || (!options.force && !isMobileSafari && !isBuggyIE && !isBadStockAndroid && !isOperaMini && (!options.hacks || !options.hacks.required(options)))) {
                // this buggyfill only applies to mobile safari, IE9-10 and the Stock Android Browser.
                if (window.console && isOldIE) {
                    console.info('viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below');
                }

                return {
                    init: function() {},
                };
            }

            // fire a custom event that buggyfill was initialize
            window.dispatchEvent(new CustomEvent('viewport-units-buggyfill-init'));

            options.hacks && options.hacks.initialize(options);

            initialized = true;
            styleNode = document.createElement('style');
            styleNode.id = 'patched-viewport';
            document[options.appendToBody ? 'body' : 'head'].appendChild(styleNode);

            // Issue #6: Cross Origin Stylesheets are not accessible through CSSOM,
            // therefore download and inject them as <style> to circumvent SOP.
            importCrossOriginLinks(function() {
                var _refresh = debounce(refresh, options.refreshDebounceWait || 100);
                // doing a full refresh rather than updateStyles because an orientationchange
                // could activate different stylesheets
                window.addEventListener('orientationchange', _refresh, true);
                // orientationchange might have happened while in a different window
                window.addEventListener('pageshow', _refresh, true);

                if (options.force || isBuggyIE || inIframe()) {
                    window.addEventListener('resize', _refresh, true);
                    options._listeningToResize = true;
                }

                options.hacks && options.hacks.initializeEvents(options, refresh, _refresh);

                refresh();
            });
        }

        function updateStyles() {
            styleNode.textContent = getReplacedViewportUnits();
            // move to the end in case inline <style>s were added dynamically
            styleNode.parentNode.appendChild(styleNode);
            // fire a custom event that styles were updated
            window.dispatchEvent(new CustomEvent('viewport-units-buggyfill-style'));
        }

        function refresh() {
            if (!initialized) {
                return;
            }

            findProperties();

            // iOS Safari will report window.innerWidth and .innerHeight as 0 unless a timeout is used here.
            // TODO: figure out WHY innerWidth === 0
            setTimeout(function() {
                updateStyles();
            }, 1);
        }

        // http://stackoverflow.com/a/23613052
        function processStylesheet(ss) {
            // cssRules respects same-origin policy, as per
            // https://code.google.com/p/chromium/issues/detail?id=49001#c10.
            try {
                if (!ss.cssRules) {
                    return;
                }
            } catch (e) {
                if (e.name !== 'SecurityError') {
                    throw e;
                }
                return;
            }
            // ss.cssRules is available, so proceed with desired operations.
            var rules = [];
            for (var i = 0; i < ss.cssRules.length; i++) {
                var rule = ss.cssRules[i];
                rules.push(rule);
            }
            return rules;
        }

        function findProperties() {
            declarations = [];
            forEach.call(document.styleSheets, function(sheet) {
                var cssRules = processStylesheet(sheet);

                if (!cssRules || sheet.ownerNode.id === 'patched-viewport' || sheet.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore') {
                    // skip entire sheet because no rules are present, it's supposed to be ignored or it's the target-element of the buggyfill
                    return;
                }

                if (sheet.media && sheet.media.mediaText && window.matchMedia && !window.matchMedia(sheet.media.mediaText).matches) {
                    // skip entire sheet because media attribute doesn't match
                    return;
                }

                forEach.call(cssRules, findDeclarations);
            });

            return declarations;
        }

        function findDeclarations(rule) {
            if (rule.type === 7) {
                var value;

                // there may be a case where accessing cssText throws an error.
                // I could not reproduce this issue, but the worst that can happen
                // this way is an animation not running properly.
                // not awesome, but probably better than a script error
                // see https://github.com/rodneyrehm/viewport-units-buggyfill/issues/21
                try {
                    value = rule.cssText;
                } catch (e) {
                    return;
                }

                viewportUnitExpression.lastIndex = 0;
                if (viewportUnitExpression.test(value) && !urlExpression.test(value)) {
                    // KeyframesRule does not have a CSS-PropertyName
                    declarations.push([rule, null, value]);
                    options.hacks && options.hacks.findDeclarations(declarations, rule, null, value);
                }

                return;
            }

            if (!rule.style) {
                if (!rule.cssRules) {
                    return;
                }

                forEach.call(rule.cssRules, function(_rule) {
                    findDeclarations(_rule);
                });

                return;
            }

            forEach.call(rule.style, function(name) {
                var value = rule.style.getPropertyValue(name);
                // preserve those !important rules
                if (rule.style.getPropertyPriority(name)) {
                    value += ' !important';
                }

                viewportUnitExpression.lastIndex = 0;
                if (viewportUnitExpression.test(value)) {
                    declarations.push([rule, name, value]);
                    options.hacks && options.hacks.findDeclarations(declarations, rule, name, value);
                }
            });
        }

        function getReplacedViewportUnits() {
            dimensions = getViewport();

            var css = [];
            var buffer = [];
            var open;
            var close;

            declarations.forEach(function(item) {
                var _item = overwriteDeclaration.apply(null, item);
                var _open = _item.selector.length ? (_item.selector.join(' {\n') + ' {\n') : '';
                var _close = new Array(_item.selector.length + 1).join('\n}');

                if (!_open || _open !== open) {
                    if (buffer.length) {
                        css.push(open + buffer.join('\n') + close);
                        buffer.length = 0;
                    }

                    if (_open) {
                        open = _open;
                        close = _close;
                        buffer.push(_item.content);
                    } else {
                        css.push(_item.content);
                        open = null;
                        close = null;
                    }

                    return;
                }

                if (_open && !open) {
                    open = _open;
                    close = _close;
                }

                buffer.push(_item.content);
            });

            if (buffer.length) {
                css.push(open + buffer.join('\n') + close);
            }

            // Opera Mini messes up on the content hack (it replaces the DOM node's innerHTML with the value).
            // This fixes it. We test for Opera Mini only since it is the most expensive CSS selector
            // see https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors
            if (isOperaMini) {
                css.push('* { content: normal !important; }');
            }

            return css.join('\n\n');
        }

        function overwriteDeclaration(rule, name, value) {
            var _value;
            var _selectors = [];

            _value = value.replace(viewportUnitExpression, replaceValues);

            if (options.hacks) {
                _value = options.hacks.overwriteDeclaration(rule, name, _value);
            }

            if (name) {
                // skipping KeyframesRule
                _selectors.push(rule.selectorText);
                _value = name + ': ' + _value + ';';
            }

            var _rule = rule.parentRule;
            while (_rule) {
                if (_rule.media) {
                    _selectors.unshift('@media ' + _rule.media.mediaText);
                } else if (_rule.conditionText) {
                    _selectors.unshift('@supports ' + _rule.conditionText);
                }

                _rule = _rule.parentRule;
            }

            return {
                selector: _selectors,
                content: _value,
            };
        }

        function replaceValues(match, number, unit) {
            var _base = dimensions[unit];
            var _number = parseFloat(number) / 100;
            return (_number * _base) + 'px';
        }

        function getViewport() {
            var vh = window.innerHeight;
            var vw = window.innerWidth;

            return {
                vh: vh,
                vw: vw,
                vmax: Math.max(vw, vh),
                vmin: Math.min(vw, vh),
            };
        }

        function importCrossOriginLinks(next) {
            var _waiting = 0;
            var decrease = function() {
                _waiting--;
                if (!_waiting) {
                    next();
                }
            };

            forEach.call(document.styleSheets, function(sheet) {
                if (!sheet.href || origin(sheet.href) === origin(location.href) || sheet.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore') {
                    // skip <style> and <link> from same origin or explicitly declared to ignore
                    return;
                }

                _waiting++;
                convertLinkToStyle(sheet.ownerNode, decrease);
            });

            if (!_waiting) {
                next();
            }
        }

        function origin(url) {
            return url.slice(0, url.indexOf('/', url.indexOf('://') + 3));
        }

        function convertLinkToStyle(link, next) {
            getCors(link.href, function() {
                var style = document.createElement('style');
                style.media = link.media;
                style.setAttribute('data-href', link.href);
                style.textContent = this.responseText;
                link.parentNode.replaceChild(style, link);
                next();
            }, next);
        }

        function getCors(url, success, error) {
            var xhr = new XMLHttpRequest();
            if ('withCredentials' in xhr) {
                // XHR for Chrome/Firefox/Opera/Safari.
                xhr.open('GET', url, true);
            } else if (typeof XDomainRequest !== 'undefined') {
                // XDomainRequest for IE.
                xhr = new XDomainRequest();
                xhr.open('GET', url);
            } else {
                throw new Error('cross-domain XHR not supported');
            }

            xhr.onload = success;
            xhr.onerror = error;
            xhr.send();
            return xhr;
        }

        return {
            version: '0.6.1',
            findProperties: findProperties,
            getCss: getReplacedViewportUnits,
            init: initialize,
            refresh: refresh,
        };
    }));
})();

/**
 * Swiper 4.1.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 13, 2018
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var e = function(e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function t(t, i) {
        var s = [],
            a = 0;
        if (t && !i && t instanceof e) return t;
        if (t)
            if ("string" == typeof t) {
                var r, n, o = t.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    var l = "div";
                    for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (n = document.createElement(l)).innerHTML = o, a = 0; a < n.childNodes.length; a += 1) s.push(n.childNodes[a])
                } else
                    for (r = i || "#" !== t[0] || t.match(/[ .<>:~]/) ? (i || document).querySelectorAll(t.trim()) : [document.getElementById(t.trim().split("#")[1])], a = 0; a < r.length; a += 1) r[a] && s.push(r[a])
            } else if (t.nodeType || t === window || t === document) s.push(t);
        else if (t.length > 0 && t[0].nodeType)
            for (a = 0; a < t.length; a += 1) s.push(t[a]);
        return new e(s)
    }

    function i(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    t.fn = e.prototype, t.Class = e, t.Dom7 = e;
    "resize scroll".split(" ");
    var s = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else
                    for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e = [], i = arguments.length; i--;) e[i] = arguments[i];
            var s, a = e[0],
                r = e[1],
                n = e[2],
                o = e[3];

            function l(e) {
                var i = e.target;
                if (i) {
                    var s = e.target.dom7EventData || [];
                    if (s.unshift(e), t(i).is(r)) n.apply(i, s);
                    else
                        for (var a = t(i).parents(), o = 0; o < a.length; o += 1) t(a[o]).is(r) && n.apply(a[o], s)
                }
            }

            function d(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), n.apply(this, t)
            }
            "function" == typeof e[1] && (a = (s = e)[0], n = s[1], o = s[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) u.dom7LiveListeners || (u.dom7LiveListeners = []), u.dom7LiveListeners.push({
                        type: a,
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(p[h], l, o);
                else
                    for (h = 0; h < p.length; h += 1) u.dom7Listeners || (u.dom7Listeners = []), u.dom7Listeners.push({
                        type: a,
                        listener: n,
                        proxyListener: d
                    }), u.addEventListener(p[h], d, o)
            }
            return this
        },
        off: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, s = e[0],
                a = e[1],
                r = e[2],
                n = e[3];
            "function" == typeof e[1] && (s = (i = e)[0], r = i[1], n = i[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = 0; d < this.length; d += 1) {
                    var h = this[d];
                    if (a) {
                        if (h.dom7LiveListeners)
                            for (var p = 0; p < h.dom7LiveListeners.length; p += 1) r ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n)
                    } else if (h.dom7Listeners)
                        for (var c = 0; c < h.dom7Listeners.length; c += 1) r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n)
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = e[0].split(" "), s = e[1], a = 0; a < i.length; a += 1)
                for (var r = 0; r < this.length; r += 1) {
                    var n = void 0;
                    try {
                        n = new window.CustomEvent(i[a], {
                            detail: s,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (n = document.createEvent("Event")).initEvent(i[a], !0, !0), n.detail = s
                    }
                    this[r].dom7EventData = e.filter(function(e, t) {
                        return t > 0
                    }), this[r].dispatchEvent(n), this[r].dom7EventData = [], delete this[r].dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function a(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    i = document.body,
                    s = e.clientTop || i.clientTop || 0,
                    a = e.clientLeft || i.clientLeft || 0,
                    r = e === window ? window.scrollY : e.scrollTop,
                    n = e === window ? window.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - s,
                    left: t.left + n - a
                }
            }
            return null
        },
        css: function(e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var s in e) this[i].style[s] = e[s];
                    return this
                }
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(i) {
            var s, a, r = this[0];
            if (!r || void 0 === i) return !1;
            if ("string" == typeof i) {
                if (r.matches) return r.matches(i);
                if (r.webkitMatchesSelector) return r.webkitMatchesSelector(i);
                if (r.msMatchesSelector) return r.msMatchesSelector(i);
                for (s = t(i), a = 0; a < s.length; a += 1)
                    if (s[a] === r) return !0;
                return !1
            }
            if (i === document) return r === document;
            if (i === window) return r === window;
            if (i.nodeType || i instanceof e) {
                for (s = i.nodeType ? [i] : i, a = 0; a < s.length; a += 1)
                    if (s[a] === r) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(t) {
            if (void 0 === t) return this;
            var i, s = this.length;
            return new e(t > s - 1 ? [] : t < 0 ? (i = s + t) < 0 ? [] : [this[i]] : [this[t]])
        },
        append: function() {
            for (var t, i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = 0; a < i.length; a += 1) {
                t = i[a];
                for (var r = 0; r < this.length; r += 1)
                    if ("string" == typeof t) {
                        var n = document.createElement("div");
                        for (n.innerHTML = t; n.firstChild;) this[r].appendChild(n.firstChild)
                    } else if (t instanceof e)
                    for (var o = 0; o < t.length; o += 1) this[r].appendChild(t[o]);
                else this[r].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var i, s;
            for (i = 0; i < this.length; i += 1)
                if ("string" == typeof t) {
                    var a = document.createElement("div");
                    for (a.innerHTML = t, s = a.childNodes.length - 1; s >= 0; s -= 1) this[i].insertBefore(a.childNodes[s], this[i].childNodes[0])
                } else if (t instanceof e)
                for (s = 0; s < t.length; s += 1) this[i].insertBefore(t[s], this[i].childNodes[0]);
            else this[i].insertBefore(t, this[i].childNodes[0]);
            return this
        },
        next: function(i) {
            return this.length > 0 ? i ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(i) ? new e([this[0].nextElementSibling]) : new e([]) : this[0].nextElementSibling ? new e([this[0].nextElementSibling]) : new e([]) : new e([])
        },
        nextAll: function(i) {
            var s = [],
                a = this[0];
            if (!a) return new e([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                i ? t(r).is(i) && s.push(r) : s.push(r), a = r
            }
            return new e(s)
        },
        prev: function(i) {
            if (this.length > 0) {
                var s = this[0];
                return i ? s.previousElementSibling && t(s.previousElementSibling).is(i) ? new e([s.previousElementSibling]) : new e([]) : s.previousElementSibling ? new e([s.previousElementSibling]) : new e([])
            }
            return new e([])
        },
        prevAll: function(i) {
            var s = [],
                a = this[0];
            if (!a) return new e([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                i ? t(r).is(i) && s.push(r) : s.push(r), a = r
            }
            return new e(s)
        },
        parent: function(e) {
            for (var s = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? t(this[a].parentNode).is(e) && s.push(this[a].parentNode) : s.push(this[a].parentNode));
            return t(i(s))
        },
        parents: function(e) {
            for (var s = [], a = 0; a < this.length; a += 1)
                for (var r = this[a].parentNode; r;) e ? t(r).is(e) && s.push(r) : s.push(r), r = r.parentNode;
            return t(i(s))
        },
        closest: function(t) {
            var i = this;
            return void 0 === t ? new e([]) : (i.is(t) || (i = i.parents(t).eq(0)), i)
        },
        find: function(t) {
            for (var i = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(t), r = 0; r < a.length; r += 1) i.push(a[r]);
            return new e(i)
        },
        children: function(s) {
            for (var a = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) s ? 1 === n[o].nodeType && t(n[o]).is(s) && a.push(n[o]) : 1 === n[o].nodeType && a.push(n[o]);
            return new e(i(a))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], i = arguments.length; i--;) e[i] = arguments[i];
            var s, a;
            for (s = 0; s < e.length; s += 1) {
                var r = t(e[s]);
                for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? window.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(s).forEach(function(e) {
        t.fn[e] = s[e]
    });
    var a, r, n, o = "undefined" == typeof window ? {
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {}
            },
            Image: function() {},
            Date: function() {},
            screen: {}
        } : window,
        l = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                var i, s, a;
                void 0 === t && (t = "x");
                var r = o.getComputedStyle(e, null);
                return o.WebKitCSSMatrix ? ((s = r.transform || r.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), a = new o.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = o.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = o.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
            },
            parseUrlQuery: function(e) {
                var t, i, s, a, r = {},
                    n = e || o.location.href;
                if ("string" == typeof n && n.length)
                    for (a = (i = (n = n.indexOf("?") > -1 ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < a; t += 1) s = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                return r
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (void 0 !== a && null !== a)
                        for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                            var d = r[n],
                                h = Object.getOwnPropertyDescriptor(a, d);
                            void 0 !== h && h.enumerable && (l.isObject(i[d]) && l.isObject(a[d]) ? l.extend(i[d], a[d]) : !l.isObject(i[d]) && l.isObject(a[d]) ? (i[d] = {}, l.extend(i[d], a[d])) : i[d] = a[d])
                        }
                }
                return i
            }
        },
        d = "undefined" == typeof document ? {
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return {}
            },
            querySelectorAll: function() {
                return []
            },
            createElement: function() {
                return {
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        h = (n = d.createElement("div"), {
            touch: o.Modernizr && !0 === o.Modernizr.touch || !!("ontouchstart" in o || o.DocumentTouch && d instanceof o.DocumentTouch),
            pointerEvents: !(!o.navigator.pointerEnabled && !o.PointerEvent),
            prefixedPointerEvents: !!o.navigator.msPointerEnabled,
            transition: (r = n.style, "transition" in r || "webkitTransition" in r || "MozTransition" in r),
            transforms3d: o.Modernizr && !0 === o.Modernizr.csstransforms3d || (a = n.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
            flexbox: function() {
                for (var e = n.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                    if (t[i] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in o || "WebkitMutationObserver" in o,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    o.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in o
        }),
        p = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        c = {
            components: {
                configurable: !0
            }
        };
    p.prototype.on = function(e, t) {
        var i = this;
        return "function" != typeof t ? i : (e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e].push(t)
        }), i)
    }, p.prototype.once = function(e, t) {
        var i = this;
        if ("function" != typeof t) return i;
        return i.on(e, function s() {
            for (var a = [], r = arguments.length; r--;) a[r] = arguments[r];
            t.apply(i, a), i.off(e, s)
        })
    }, p.prototype.off = function(e, t) {
        var i = this;
        return e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, a) {
                s === t && i.eventsListeners[e].splice(a, 1)
            })
        }), i
    }, p.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(a, s)
                })
            }
        }), r) : r
    }, p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && l.extend(e, s.params)
        })
    }, p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i],
                a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), s.on && t.on && Object.keys(s.on).forEach(function(e) {
                t.on(e, s.on[e])
            }), s.create && s.create.bind(t)(a)
        })
    }, c.components.set = function(e) {
        this.use && this.use(e)
    }, p.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + l.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
            s.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function(t) {
            s[t] = e.static[t]
        }), e.install && e.install.apply(s, t), s
    }, p.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return s.installModule(e)
        }), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(p, c);
    var u = {
            updateSize: function() {
                var e, t, i = this.$el;
                e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), l.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                }))
            },
            updateSlides: function() {
                var e = this.params,
                    t = this.$wrapperEl,
                    i = this.size,
                    s = this.rtl,
                    a = this.wrongRTL,
                    r = t.children("." + this.params.slideClass),
                    n = this.virtual && e.virtual.enabled ? this.virtual.slides.length : r.length,
                    o = [],
                    d = [],
                    p = [],
                    c = e.slidesOffsetBefore;
                "function" == typeof c && (c = e.slidesOffsetBefore.call(this));
                var u = e.slidesOffsetAfter;
                "function" == typeof u && (u = e.slidesOffsetAfter.call(this));
                var f = n,
                    v = this.snapGrid.length,
                    m = this.snapGrid.length,
                    g = e.spaceBetween,
                    b = -c,
                    w = 0,
                    y = 0;
                if (void 0 !== i) {
                    var x, T;
                    "string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * i), this.virtualSize = -g, s ? r.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : r.css({
                        marginRight: "",
                        marginBottom: ""
                    }), e.slidesPerColumn > 1 && (x = Math.floor(n / e.slidesPerColumn) === n / this.params.slidesPerColumn ? n : Math.ceil(n / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (x = Math.max(x, e.slidesPerView * e.slidesPerColumn)));
                    for (var E, S = e.slidesPerColumn, C = x / S, M = C - (e.slidesPerColumn * C - n), z = 0; z < n; z += 1) {
                        T = 0;
                        var P = r.eq(z);
                        if (e.slidesPerColumn > 1) {
                            var k = void 0,
                                $ = void 0,
                                L = void 0;
                            "column" === e.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, ($ > M || $ === M && L === S - 1) && (L += 1) >= S && (L = 0, $ += 1), k = $ + L * x / S, P.css({
                                "-webkit-box-ordinal-group": k,
                                "-moz-box-ordinal-group": k,
                                "-ms-flex-order": k,
                                "-webkit-order": k,
                                order: k
                            })) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== L && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                        }
                        "none" !== P.css("display") && ("auto" === e.slidesPerView ? (T = this.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0), e.roundLengths && (T = Math.floor(T))) : (T = (i - (e.slidesPerView - 1) * g) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), r[z] && (this.isHorizontal() ? r[z].style.width = T + "px" : r[z].style.height = T + "px")), r[z] && (r[z].swiperSlideSize = T), p.push(T), e.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), y % e.slidesPerGroup == 0 && o.push(b), d.push(b)) : (y % e.slidesPerGroup == 0 && o.push(b), d.push(b), b = b + T + g), this.virtualSize += T + g, w = T, y += 1)
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, i) + u, s && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : t.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * x, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : t.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        }), e.centeredSlides)) {
                        E = [];
                        for (var I = 0; I < o.length; I += 1) o[I] < this.virtualSize + o[0] && E.push(o[I]);
                        o = E
                    }
                    if (!e.centeredSlides) {
                        E = [];
                        for (var D = 0; D < o.length; D += 1) o[D] <= this.virtualSize - i && E.push(o[D]);
                        o = E, Math.floor(this.virtualSize - i) - Math.floor(o[o.length - 1]) > 1 && o.push(this.virtualSize - i)
                    }
                    0 === o.length && (o = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? r.css({
                        marginLeft: g + "px"
                    }) : r.css({
                        marginRight: g + "px"
                    }) : r.css({
                        marginBottom: g + "px"
                    })), l.extend(this, {
                        slides: r,
                        snapGrid: o,
                        slidesGrid: d,
                        slidesSizesGrid: p
                    }), n !== f && this.emit("slidesLengthChange"), o.length !== v && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), d.length !== m && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function() {
                var e, t = [],
                    i = 0;
                if ("auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                        var s = this.activeIndex + e;
                        if (s > this.slides.length) break;
                        t.push(this.slides.eq(s)[0])
                    } else t.push(this.slides.eq(this.activeIndex)[0]);
                for (e = 0; e < t.length; e += 1)
                    if (void 0 !== t[e]) {
                        var a = t[e].offsetHeight;
                        i = a > i ? a : i
                    }
                i && this.$wrapperEl.css("height", i + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this.translate || 0);
                var t = this.params,
                    i = this.slides,
                    s = this.rtl;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var a = -e;
                    s && (a = e), i.removeClass(t.slideVisibleClass);
                    for (var r = 0; r < i.length; r += 1) {
                        var n = i[r],
                            o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                        if (t.watchSlidesVisibility) {
                            var l = -(a - n.swiperSlideOffset),
                                d = l + this.slidesSizesGrid[r];
                            (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass)
                        }
                        n.progress = s ? -o : o
                    }
                }
            },
            updateProgress: function(e) {
                void 0 === e && (e = this.translate || 0);
                var t = this.params,
                    i = this.maxTranslate() - this.minTranslate(),
                    s = this.progress,
                    a = this.isBeginning,
                    r = this.isEnd,
                    n = a,
                    o = r;
                0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), l.extend(this, {
                    progress: s,
                    isBeginning: a,
                    isEnd: r
                }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s)
            },
            updateSlidesClasses: function() {
                var e, t = this.slides,
                    i = this.params,
                    s = this.$wrapperEl,
                    a = this.activeIndex,
                    r = this.realIndex,
                    n = this.virtual && i.virtual.enabled;
                t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                var t, i = this.rtl ? this.translate : -this.translate,
                    s = this.slidesGrid,
                    a = this.snapGrid,
                    r = this.params,
                    n = this.activeIndex,
                    o = this.realIndex,
                    d = this.snapIndex,
                    h = e;
                if (void 0 === h) {
                    for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                    r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
                }
                if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
                    var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                    l.extend(this, {
                        snapIndex: t,
                        realIndex: c,
                        previousIndex: n,
                        activeIndex: h
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange")
                } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"))
            },
            updateClickedSlide: function(e) {
                var i = this.params,
                    s = t(e.target).closest("." + i.slideClass)[0],
                    a = !1;
                if (s)
                    for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === s && (a = !0);
                if (!s || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(t(s).attr("data-swiper-slide-index"), 10) : this.clickedIndex = t(s).index(), i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        },
        f = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    i = this.rtl,
                    s = this.translate,
                    a = this.$wrapperEl;
                if (t.virtualTranslate) return i ? -s : s;
                var r = l.getTranslate(a[0], e);
                return i && (r = -r), r || 0
            },
            setTranslate: function(e, t) {
                var i = this.rtl,
                    s = this.params,
                    a = this.$wrapperEl,
                    r = this.progress,
                    n = 0,
                    o = 0;
                this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;
                var l = this.maxTranslate() - this.minTranslate();
                (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        v = {
            setTransition: function(e, t) {
                this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
            },
            transitionStart: function(e) {
                void 0 === e && (e = !0);
                var t = this.activeIndex,
                    i = this.params,
                    s = this.previousIndex;
                i.autoHeight && this.updateAutoHeight(), this.emit("transitionStart"), e && t !== s && (this.emit("slideChangeTransitionStart"), t > s ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart"))
            },
            transitionEnd: function(e) {
                void 0 === e && (e = !0);
                var t = this.activeIndex,
                    i = this.previousIndex;
                this.animating = !1, this.setTransition(0), this.emit("transitionEnd"), e && t !== i && (this.emit("slideChangeTransitionEnd"), t > i ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd"))
            }
        },
        m = {
            slideTo: function(e, t, i, s) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var a = this,
                    r = e;
                r < 0 && (r = 0);
                var n = a.params,
                    o = a.snapGrid,
                    l = a.slidesGrid,
                    d = a.previousIndex,
                    p = a.activeIndex,
                    c = a.rtl,
                    u = a.$wrapperEl,
                    f = Math.floor(r / n.slidesPerGroup);
                f >= o.length && (f = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                var v = -o[f];
                if (a.updateProgress(v), n.normalizeSlideIndex)
                    for (var m = 0; m < l.length; m += 1) - Math.floor(100 * v) >= Math.floor(100 * l[m]) && (r = m);
                if (a.initialized) {
                    if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (p || 0) !== r) return !1
                }
                return c && -v === a.translate || !c && v === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(v), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i), a.animating || (a.animating = !0, u.transitionEnd(function() {
                    a && !a.destroyed && a.transitionEnd(i)
                }))) : (a.setTransition(0), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i), a.transitionEnd(i)), !0)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var s = this.params,
                    a = this.animating;
                return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
            },
            slidePrev: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var s = this.params,
                    a = this.animating;
                return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
            },
            slideReset: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                return this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClickedSlide: function() {
                var e, i = this,
                    s = i.params,
                    a = i.$wrapperEl,
                    r = "auto" === s.slidesPerView ? i.slidesPerViewDynamic() : s.slidesPerView,
                    n = i.clickedIndex;
                if (s.loop) {
                    if (i.animating) return;
                    e = parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10), s.centeredSlides ? n < i.loopedSlides - r / 2 || n > i.slides.length - i.loopedSlides + r / 2 ? (i.loopFix(), n = a.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function() {
                        i.slideTo(n)
                    })) : i.slideTo(n) : n > i.slides.length - r ? (i.loopFix(), n = a.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function() {
                        i.slideTo(n)
                    })) : i.slideTo(n)
                } else i.slideTo(n)
            }
        },
        g = {
            loopCreate: function() {
                var e = this,
                    i = e.params,
                    s = e.$wrapperEl;
                s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var a = s.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var r = i.slidesPerGroup - a.length % i.slidesPerGroup;
                    if (r !== i.slidesPerGroup) {
                        for (var n = 0; n < r; n += 1) {
                            var o = t(d.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            s.append(o)
                        }
                        a = s.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
                var l = [],
                    h = [];
                a.each(function(i, s) {
                    var r = t(s);
                    i < e.loopedSlides && h.push(s), i < a.length && i >= a.length - e.loopedSlides && l.push(s), r.attr("data-swiper-slide-index", i)
                });
                for (var p = 0; p < h.length; p += 1) s.append(t(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var c = l.length - 1; c >= 0; c -= 1) s.prepend(t(l[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
                var e, t = this.params,
                    i = this.activeIndex,
                    s = this.slides,
                    a = this.loopedSlides,
                    r = this.allowSlidePrev,
                    n = this.allowSlideNext;
                this.allowSlidePrev = !0, this.allowSlideNext = !0, i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0)), this.allowSlidePrev = r, this.allowSlideNext = n
            },
            loopDestroy: function() {
                var e = this.$wrapperEl,
                    t = this.params,
                    i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        b = {
            setGrabCursor: function(e) {
                if (!h.touch && this.params.simulateTouch) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                h.touch || (this.el.style.cursor = "")
            }
        },
        w = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && h.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                    a = s + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1)
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var a, r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                    r = Math.max(r, 0)
                } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        y = function() {
            var e = o.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: o.cordova || o.phonegap,
                    phonegap: o.cordova || o.phonegap
                },
                i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                a = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), s && !i && (t.os = "android", t.osVersion = s[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (a || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || a || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var l = t.osVersion.split("."),
                    h = d.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || n) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return t.pixelRatio = o.devicePixelRatio || 1, t
        }(),
        x = function(e) {
            var i = this.touchEventsData,
                s = this.params,
                a = this.touches,
                r = e;
            if (r.originalEvent && (r = r.originalEvent), i.isTouchEvent = "touchstart" === r.type, (i.isTouchEvent || !("which" in r) || 3 !== r.which) && (!i.isTouched || !i.isMoved))
                if (s.noSwiping && t(r.target).closest("." + s.noSwipingClass)[0]) this.allowClick = !0;
                else if (!s.swipeHandler || t(r).closest(s.swipeHandler)[0]) {
                a.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, a.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                var n = a.currentX,
                    o = a.currentY;
                if (!(y.ios && !y.cordova && s.iOSEdgeSwipeDetection && n <= s.iOSEdgeSwipeThreshold && n >= window.screen.width - s.iOSEdgeSwipeThreshold)) {
                    if (l.extend(i, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), a.startX = n, a.startY = o, i.touchStartTime = l.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== r.type) {
                        var h = !0;
                        t(r.target).is(i.formElements) && (h = !1), d.activeElement && t(d.activeElement).is(i.formElements) && d.activeElement.blur(), h && this.allowTouchMove && r.preventDefault()
                    }
                    this.emit("touchStart", r)
                }
            }
        },
        T = function(e) {
            var i = this.touchEventsData,
                s = this.params,
                a = this.touches,
                r = this.rtl,
                n = e;
            if (n.originalEvent && (n = n.originalEvent), !i.isTouchEvent || "mousemove" !== n.type) {
                var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                    h = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                if (n.preventedByNestedSwiper) return a.startX = o, void(a.startY = h);
                if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (l.extend(a, {
                    startX: o,
                    startY: h,
                    currentX: o,
                    currentY: h
                }), i.touchStartTime = l.now()));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (this.isVertical()) {
                        if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (o < a.startX && this.translate <= this.maxTranslate() || o > a.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && d.activeElement && n.target === d.activeElement && t(n.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", n), !(n.targetTouches && n.targetTouches.length > 1)) {
                    a.currentX = o, a.currentY = h;
                    var p, c = a.currentX - a.startX,
                        u = a.currentY - a.startY;
                    if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > s.touchAngle : 90 - p > s.touchAngle);
                    if (i.isScrolling && this.emit("touchMoveOpposite", n), "undefined" == typeof startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isTouched)
                        if (i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                        this.allowClick = !1, n.preventDefault(), s.touchMoveStopPropagation && !s.nested && n.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", n)), this.emit("sliderMove", n), i.isMoved = !0;
                        var f = this.isHorizontal() ? c : u;
                        a.diff = f, f *= s.touchRatio, r && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                        var v = !0,
                            m = s.resistanceRatio;
                        if (s.touchReleaseOnEdges && (m = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, m))) : f < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, m))), v && (n.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                            if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                        }
                        s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: a[this.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }), i.velocities.push({
                            position: a[this.isHorizontal() ? "currentX" : "currentY"],
                            time: l.now()
                        })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                    }
                }
            }
        },
        E = function(e) {
            var t = this,
                i = t.touchEventsData,
                s = t.params,
                a = t.touches,
                r = t.rtl,
                n = t.$wrapperEl,
                o = t.slidesGrid,
                d = t.snapGrid,
                h = e;
            if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, i.isTouched) {
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = l.now(),
                    u = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = l.nextTick(function() {
                        t && !t.destroyed && t.emit("click", h)
                    }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = l.now(), l.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, void(i.isMoved = !1);
                if (i.isTouched = !1, i.isMoved = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var f = i.velocities.pop(),
                                v = i.velocities.pop(),
                                m = f.position - v.position,
                                g = f.time - v.time;
                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || l.now() - f.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var b = 1e3 * s.freeModeMomentumRatio,
                            w = t.velocity * b,
                            y = t.translate + w;
                        r && (y = -y);
                        var x, T = !1,
                            E = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate();
                        else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate();
                        else if (s.freeModeSticky) {
                            for (var S, C = 0; C < d.length; C += 1)
                                if (d[C] > -y) {
                                    S = C;
                                    break
                                }
                            y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1])
                        }
                        if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (s.freeModeSticky) return void t.slideReset();
                        s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating || (t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                    }(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (M = P, z = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
                    var k = (p - o[M]) / z;
                    if (u > s.longSwipesMs) {
                        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (k >= s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M))
                    } else {
                        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                    }
                }
            }
        },
        S = function() {
            var e = this.params,
                t = this.el;
            if (!t || 0 !== t.offsetWidth) {
                e.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext,
                    s = this.allowSlidePrev;
                if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                    var a = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                    this.setTranslate(a), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
                } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
                this.allowSlidePrev = s, this.allowSlideNext = i
            }
        },
        C = function(e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        };
    var M = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        z = {
            update: u,
            translate: f,
            transition: v,
            slide: m,
            loop: g,
            grabCursor: b,
            manipulation: w,
            events: {
                attachEvents: function() {
                    var e = this.params,
                        t = this.touchEvents,
                        i = this.el,
                        s = this.wrapperEl;
                    this.onTouchStart = x.bind(this), this.onTouchMove = T.bind(this), this.onTouchEnd = E.bind(this), this.onClick = C.bind(this);
                    var a = "container" === e.touchEventsTarget ? i : s,
                        r = !!e.nested;
                    if (h.pointerEvents || h.prefixedPointerEvents) a.addEventListener(t.start, this.onTouchStart, !1), (h.touch ? a : d).addEventListener(t.move, this.onTouchMove, r), (h.touch ? a : d).addEventListener(t.end, this.onTouchEnd, !1);
                    else {
                        if (h.touch) {
                            var n = !("touchstart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            a.addEventListener(t.start, this.onTouchStart, n), a.addEventListener(t.move, this.onTouchMove, h.passiveListener ? {
                                passive: !1,
                                capture: r
                            } : r), a.addEventListener(t.end, this.onTouchEnd, n)
                        }(e.simulateTouch && !y.ios && !y.android || e.simulateTouch && !h.touch && y.ios) && (a.addEventListener("mousedown", this.onTouchStart, !1), d.addEventListener("mousemove", this.onTouchMove, r), d.addEventListener("mouseup", this.onTouchEnd, !1))
                    }(e.preventClicks || e.preventClicksPropagation) && a.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", S)
                },
                detachEvents: function() {
                    var e = this.params,
                        t = this.touchEvents,
                        i = this.el,
                        s = this.wrapperEl,
                        a = "container" === e.touchEventsTarget ? i : s,
                        r = !!e.nested;
                    if (h.pointerEvents || h.prefixedPointerEvents) a.removeEventListener(t.start, this.onTouchStart, !1), (h.touch ? a : d).removeEventListener(t.move, this.onTouchMove, r), (h.touch ? a : d).removeEventListener(t.end, this.onTouchEnd, !1);
                    else {
                        if (h.touch) {
                            var n = !("onTouchStart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            a.removeEventListener(t.start, this.onTouchStart, n), a.removeEventListener(t.move, this.onTouchMove, r), a.removeEventListener(t.end, this.onTouchEnd, n)
                        }(e.simulateTouch && !y.ios && !y.android || e.simulateTouch && !h.touch && y.ios) && (a.removeEventListener("mousedown", this.onTouchStart, !1), d.removeEventListener("mousemove", this.onTouchMove, r), d.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }(e.preventClicks || e.preventClicksPropagation) && a.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", S)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this.activeIndex,
                        t = this.loopedSlides;
                    void 0 === t && (t = 0);
                    var i = this.params,
                        s = i.breakpoints;
                    if (s && (!s || 0 !== Object.keys(s).length)) {
                        var a = this.getBreakpoint(s);
                        if (a && this.currentBreakpoint !== a) {
                            var r = a in s ? s[a] : this.originalParams,
                                n = i.loop && r.slidesPerView !== i.slidesPerView;
                            l.extend(this.params, r), l.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = a, n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", r)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var t = !1,
                            i = [];
                        Object.keys(e).forEach(function(e) {
                            i.push(e)
                        }), i.sort(function(e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var s = 0; s < i.length; s += 1) {
                            var a = i[s];
                            a >= o.innerWidth && !t && (t = a)
                        }
                        return t || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.isLocked;
                    this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function(i) {
                        e.push(t.containerModifierClass + i)
                    }), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, i, s, a, r) {
                    var n;

                    function l() {
                        r && r()
                    }
                    e.complete && a ? l() : t ? ((n = new o.Image).onload = l, n.onerror = l, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : l()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        P = {},
        k = function(e) {
            function i() {
                for (var s, a, r, n = [], o = arguments.length; o--;) n[o] = arguments[o];
                1 === n.length && n[0].constructor && n[0].constructor === Object ? a = n[0] : (s = (r = n)[0], a = r[1]);
                a || (a = {}), a = l.extend({}, a), s && !a.el && (a.el = s), e.call(this, a), Object.keys(z).forEach(function(e) {
                    Object.keys(z[e]).forEach(function(t) {
                        i.prototype[t] || (i.prototype[t] = z[e][t])
                    })
                });
                var d = this;
                void 0 === d.modules && (d.modules = {}), Object.keys(d.modules).forEach(function(e) {
                    var t = d.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            s = t.params[i];
                        if ("object" != typeof s) return;
                        if (!(i in a && "enabled" in s)) return;
                        !0 === a[i] && (a[i] = {
                            enabled: !0
                        }), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
                            enabled: !1
                        })
                    }
                });
                var p = l.extend({}, M);
                d.useModulesParams(p), d.params = l.extend({}, p, P, a), d.originalParams = l.extend({}, d.params), d.passedParams = l.extend({}, a);
                var c = t(d.params.el);
                if (s = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each(function(e, t) {
                            var s = l.extend({}, a, {
                                el: t
                            });
                            u.push(new i(s))
                        }), u
                    }
                    s.swiper = d, c.data("swiper", d);
                    var f, v, m = c.children("." + d.params.wrapperClass);
                    return l.extend(d, {
                        $el: c,
                        el: s,
                        $wrapperEl: m,
                        wrapperEl: m[0],
                        classNames: [],
                        slides: t(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === d.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === d.params.direction
                        },
                        rtl: "horizontal" === d.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === m.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: d.params.allowSlideNext,
                        allowSlidePrev: d.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend"], v = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? v = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), {
                            start: h.touch || !d.params.simulateTouch ? f[0] : v[0],
                            move: h.touch || !d.params.simulateTouch ? f[1] : v[1],
                            end: h.touch || !d.params.simulateTouch ? f[2] : v[2]
                        }),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: l.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: d.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), d.useModules(), d.params.init && d.init(), d
                }
            }
            e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
            var s = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return i.prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    a = this.activeIndex,
                    r = 1;
                if (e.centeredSlides) {
                    for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                } else
                    for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, i.prototype.update = function() {
                var e = this;
                e && !e.destroyed && (e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (t(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || t(), e.emit("update"));

                function t() {
                    var t = e.rtl ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, i.prototype.init = function() {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, i.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    a = i.$el,
                    r = i.$wrapperEl,
                    n = i.slides;
                i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), l.deleteProps(i)), i.destroyed = !0
            }, i.extendDefaults = function(e) {
                l.extend(P, e)
            }, s.extendedDefaults.get = function() {
                return P
            }, s.defaults.get = function() {
                return M
            }, s.Class.get = function() {
                return e
            }, s.$.get = function() {
                return t
            }, Object.defineProperties(i, s), i
        }(p),
        $ = {
            name: "device",
            proto: {
                device: y
            },
            static: {
                device: y
            }
        },
        L = {
            name: "support",
            proto: {
                support: h
            },
            static: {
                support: h
            }
        },
        I = function() {
            return {
                isSafari: (e = o.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(o.navigator.userAgent)
            };
            var e
        }(),
        D = {
            name: "browser",
            proto: {
                browser: I
            },
            static: {
                browser: I
            }
        },
        O = {
            name: "resize",
            create: function() {
                var e = this;
                l.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    o.addEventListener("resize", this.resize.resizeHandler), o.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    o.removeEventListener("resize", this.resize.resizeHandler), o.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        A = {
            func: o.MutationObserver || o.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var i = this,
                    s = new(0, A.func)(function(e) {
                        e.forEach(function(e) {
                            i.emit("observerUpdate", e)
                        })
                    });
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(s)
            },
            init: function() {
                if (h.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: !1
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        H = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1
            },
            create: function() {
                l.extend(this, {
                    observer: {
                        init: A.init.bind(this),
                        attach: A.attach.bind(this),
                        destroy: A.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        N = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    n = t.virtual,
                    o = n.from,
                    d = n.to,
                    h = n.slides,
                    p = n.slidesGrid,
                    c = n.renderSlide,
                    u = n.offset;
                t.updateActiveIndex();
                var f, v, m, g = t.activeIndex || 0;
                f = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top", r ? (v = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (v = s + (a - 1), m = a);
                var b = Math.max((g || 0) - m, 0),
                    w = Math.min((g || 0) + v, h.length - 1),
                    y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

                function x() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (l.extend(t.virtual, {
                        from: b,
                        to: w,
                        offset: y,
                        slidesGrid: t.slidesGrid
                    }), o === b && d === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(f, y + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: y,
                    from: b,
                    to: w,
                    slides: function() {
                        for (var e = [], t = b; t <= w; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void x();
                var T = [],
                    E = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var S = o; S <= d; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < h.length; C += 1) C >= b && C <= w && (void 0 === d || e ? E.push(C) : (C > d && E.push(C), C < o && T.push(C)));
                E.forEach(function(e) {
                    t.$wrapperEl.append(c(h[e], e))
                }), T.sort(function(e, t) {
                    return e < t
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(c(h[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(f, y + "px"), x()
            },
            renderSlide: function(e, i) {
                var s = this.params.virtual;
                if (s.cache && this.virtual.cache[i]) return this.virtual.cache[i];
                var a = s.renderSlide ? t(s.renderSlide.call(this, e, i)) : t('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + i + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", i), s.cache && (this.virtual.cache[i] = a), a
            },
            appendSlide: function(e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            },
            prependSlide: function(e) {
                if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                    var t = this.virtual.cache,
                        i = {};
                    Object.keys(t).forEach(function(e) {
                        i[e + 1] = t[e]
                    }), this.virtual.cache = i
                }
                this.virtual.update(!0), this.slideNext(0)
            }
        },
        X = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null
                }
            },
            create: function() {
                l.extend(this, {
                    virtual: {
                        update: N.update.bind(this),
                        appendSlide: N.appendSlide.bind(this),
                        prependSlide: N.prependSlide.bind(this),
                        renderSlide: N.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {
                            watchSlidesProgress: !0
                        };
                        l.extend(this.params, e), l.extend(this.originalParams, e), this.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        Y = {
            handle: function(e) {
                var t = e;
                t.originalEvent && (t = t.originalEvent);
                var i = t.keyCode || t.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === i || this.isVertical() && 40 === i)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === i || this.isVertical() && 38 === i)) return !1;
                if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (37 === i || 39 === i || 38 === i || 40 === i)) {
                        var s = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var a = o.pageXOffset,
                            r = o.pageYOffset,
                            n = o.innerWidth,
                            l = o.innerHeight,
                            h = this.$el.offset();
                        this.rtl && (h.left -= this.$el[0].scrollLeft);
                        for (var p = [
                                [h.left, h.top],
                                [h.left + this.width, h.top],
                                [h.left, h.top + this.height],
                                [h.left + this.width, h.top + this.height]
                            ], c = 0; c < p.length; c += 1) {
                            var u = p[c];
                            u[0] >= a && u[0] <= a + n && u[1] >= r && u[1] <= r + l && (s = !0)
                        }
                        if (!s) return
                    }
                    this.isHorizontal() ? (37 !== i && 39 !== i || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === i && !this.rtl || 37 === i && this.rtl) && this.slideNext(), (37 === i && !this.rtl || 39 === i && this.rtl) && this.slidePrev()) : (38 !== i && 40 !== i || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === i && this.slideNext(), 38 === i && this.slidePrev()), this.emit("keyPress", i)
                }
            },
            enable: function() {
                this.keyboard.enabled || (t(d).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (t(d).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        G = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                l.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: Y.enable.bind(this),
                        disable: Y.disable.bind(this),
                        handle: Y.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var B = {
            lastScrollTime: l.now(),
            event: o.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel" in d;
                if (!e) {
                    var t = d.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                }
                return !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")), e
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: s,
                    pixelY: a
                }
            },
            handle: function(e) {
                var t = e,
                    i = this,
                    s = i.params.mousewheel;
                t.originalEvent && (t = t.originalEvent);
                var a = 0,
                    r = i.rtl ? -1 : 1,
                    n = B.normalize(t);
                if (s.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                        a = n.pixelX * r
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                        a = n.pixelY
                    }
                else a = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
                if (0 === a) return !0;
                if (s.invert && (a = -a), i.params.freeMode) {
                    var d = i.getTranslate() + a * s.sensitivity,
                        h = i.isBeginning,
                        p = i.isEnd;
                    if (d >= i.minTranslate() && (d = i.minTranslate()), d <= i.maxTranslate() && (d = i.maxTranslate()), i.setTransition(0), i.setTranslate(d), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!h && i.isBeginning || !p && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = l.nextTick(function() {
                            i.slideReset()
                        }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), 0 === d || d === i.maxTranslate()) return !0
                } else {
                    if (l.now() - i.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (i.isEnd && !i.params.loop || i.animating) {
                                if (s.releaseOnEdges) return !0
                            } else i.slideNext(), i.emit("scroll", t);
                    else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (s.releaseOnEdges) return !0
                    } else i.slidePrev(), i.emit("scroll", t);
                    i.mousewheel.lastScrollTime = (new o.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                if (!B.event) return !1;
                if (this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = t(this.params.mousewheel.eventsTarged)), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            },
            disable: function() {
                if (!B.event) return !1;
                if (!this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = t(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        },
        V = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            init: function() {
                var e, i, s = this,
                    a = s.params.navigation;
                (a.nextEl || a.prevEl) && (a.nextEl && (e = t(a.nextEl), s.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === s.$el.find(a.nextEl).length && (e = s.$el.find(a.nextEl))), a.prevEl && (i = t(a.prevEl), s.params.uniqueNavElements && "string" == typeof a.prevEl && i.length > 1 && 1 === s.$el.find(a.prevEl).length && (i = s.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function(e) {
                    e.preventDefault(), s.isEnd && !s.params.loop || s.slideNext()
                }), i && i.length > 0 && i.on("click", function(e) {
                    e.preventDefault(), s.isBeginning && !s.params.loop || s.slidePrev()
                }), l.extend(s.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: i,
                    prevEl: i && i[0]
                }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        R = {
            update: function() {
                var e = this.rtl,
                    i = this.params.pagination;
                if (i.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var s, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        r = this.pagination.$el,
                        n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((s = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (s -= a - 2 * this.loopedSlides), s > n - 1 && (s -= n), s < 0 && "bullets" !== this.params.paginationType && (s = n + s)) : s = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === i.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o = this.pagination.bullets;
                        if (i.dynamicBullets && (this.pagination.bulletSize = o.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", 5 * this.pagination.bulletSize + "px")), o.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), r.length > 1) o.each(function(e, a) {
                            var r = t(a);
                            r.index() === s && (r.addClass(i.bulletActiveClass), i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                        });
                        else {
                            var l = o.eq(s);
                            l.addClass(i.bulletActiveClass), i.dynamicBullets && (l.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), l.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }
                        if (i.dynamicBullets) {
                            var d = Math.min(o.length, 5),
                                h = (this.pagination.bulletSize * d - this.pagination.bulletSize) / 2 - s * this.pagination.bulletSize,
                                p = e ? "right" : "left";
                            o.css(this.isHorizontal() ? p : "top", h + "px")
                        }
                    }
                    if ("fraction" === i.type && (r.find("." + i.currentClass).text(s + 1), r.find("." + i.totalClass).text(n)), "progressbar" === i.type) {
                        var c = (s + 1) / n,
                            u = c,
                            f = 1;
                        this.isHorizontal() || (f = c, u = 1), r.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + u + ") scaleY(" + f + ")").transition(this.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (r.html(i.renderCustom(this, s + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    i = e.params.pagination;
                if (i.el) {
                    var s = t(i.el);
                    0 !== s.length && (e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === e.$el.find(i.el).length && (s = e.$el.find(i.el)), "bullets" === i.type && i.clickable && s.addClass(i.clickableClass), s.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && s.addClass("" + i.modifierClass + i.type + "-dynamic"), i.clickable && s.on("click", "." + i.bulletClass, function(i) {
                        i.preventDefault();
                        var s = t(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (s += e.loopedSlides), e.slideTo(s)
                    }), l.extend(e.pagination, {
                        $el: s,
                        el: s[0]
                    }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        F = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtl,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t && this.isHorizontal() ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                        n[0].style.opacity = 0, n.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        n = r * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), l.extend(e, {
                        trackSize: a,
                        divider: r,
                        moveDivider: n,
                        dragSize: s
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    s = i.$el,
                    a = i.dragSize,
                    r = i.trackSize;
                t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[this.isHorizontal() ? "left" : "top"] - a / 2) / (r - a), t = Math.max(Math.min(t, 1), 0), this.rtl && (t = 1 - t);
                var n = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(n), this.setTranslate(n), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = l.nextTick(function() {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideReset())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar.$el,
                        i = h.touch ? e[0] : document;
                    e.on(this.scrollbar.dragEvents.start, this.scrollbar.onDragStart), t(i).on(this.scrollbar.dragEvents.move, this.scrollbar.onDragMove), t(i).on(this.scrollbar.dragEvents.end, this.scrollbar.onDragEnd)
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar.$el,
                        i = h.touch ? e[0] : document;
                    e.off(this.scrollbar.dragEvents.start), t(i).off(this.scrollbar.dragEvents.move), t(i).off(this.scrollbar.dragEvents.end)
                }
            },
            init: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var i = e.scrollbar,
                        s = e.$el,
                        a = e.touchEvents,
                        r = e.params.scrollbar,
                        n = t(r.el);
                    e.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === s.find(r.el).length && (n = s.find(r.el));
                    var o = n.find(".swiper-scrollbar-drag");
                    0 === o.length && (o = t('<div class="swiper-scrollbar-drag"></div>'), n.append(o)), e.scrollbar.dragEvents = !1 !== e.params.simulateTouch || h.touch ? a : {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    }, l.extend(i, {
                        $el: n,
                        el: n[0],
                        $dragEl: o,
                        dragEl: o[0]
                    }), r.draggable && i.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        W = {
            setTransform: function(e, i) {
                var s = this.rtl,
                    a = t(e),
                    r = s ? -1 : 1,
                    n = a.attr("data-swiper-parallax") || "0",
                    o = a.attr("data-swiper-parallax-x"),
                    l = a.attr("data-swiper-parallax-y"),
                    d = a.attr("data-swiper-parallax-scale"),
                    h = a.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * r + "%" : o * i * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", void 0 !== h && null !== h) {
                    var p = h - (h - 1) * (1 - Math.abs(i));
                    a[0].style.opacity = p
                }
                if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var c = d - (d - 1) * (1 - Math.abs(i));
                    a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var e = this,
                    i = e.$el,
                    s = e.slides,
                    a = e.progress,
                    r = e.snapGrid;
                i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                    e.parallax.setTransform(i, a)
                }), s.each(function(i, s) {
                    var n = s.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(i / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), t(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                        e.parallax.setTransform(i, n)
                    })
                })
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(i, s) {
                    var a = t(s),
                        r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0), a.transition(r)
                })
            }
        },
        j = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function(e) {
                var i = this.params.zoom,
                    s = this.zoom,
                    a = s.gesture;
                if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !h.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    s.fakeGestureTouched = !0, a.scaleStart = j.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = t(this), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = j.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX), this.rtl && (s.startY = -s.startY));
                    var r = s.width * t.scale,
                        n = s.height * t.scale;
                    if (!(r < i.slideWidth && n < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    i.currentX = o, i.currentY = d;
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var i, s, a, r, n, o, l, d, h, p, c, u, f, v, m, g, b = this.zoom,
                    w = this.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || (y.$slideEl = this.clickedSlide ? t(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, s = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = x.touchesStart.x, s = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - i, r = y.$slideEl.offset().top + g / 2 - s, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, f = -(c = Math.min(m / 2 - h / 2, 0)), v = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > f && (n = f), o < u && (o = u), o > v && (o = v)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    i = this.params.zoom,
                    s = e.gesture;
                s.$slideEl || (s.$slideEl = this.clickedSlide ? t(this.clickedSlide) : this.slides.eq(this.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (e.scale = 1, e.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
            },
            enable: function() {
                var e = this,
                    i = e.zoom;
                if (!i.enabled) {
                    i.enabled = !0;
                    var s = e.slides,
                        a = !("touchstart" !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    h.gestures ? (s.on("gesturestart", i.onGestureStart, a), s.on("gesturechange", i.onGestureChange, a), s.on("gestureend", i.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (s.on(e.touchEvents.start, i.onGestureStart, a), s.on(e.touchEvents.move, i.onGestureChange, a), s.on(e.touchEvents.end, i.onGestureEnd, a)), e.slides.each(function(s, a) {
                        var r = t(a);
                        r.find("." + e.params.zoom.containerClass).length > 0 && r.on(e.touchEvents.move, i.onTouchMove)
                    })
                }
            },
            disable: function() {
                var e = this,
                    i = e.zoom;
                if (i.enabled) {
                    e.zoom.enabled = !1;
                    var s = e.slides,
                        a = !("touchstart" !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    h.gestures ? (s.off("gesturestart", i.onGestureStart, a), s.off("gesturechange", i.onGestureChange, a), s.off("gestureend", i.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (s.off(e.touchEvents.start, i.onGestureStart, a), s.off(e.touchEvents.move, i.onGestureChange, a), s.off(e.touchEvents.end, i.onGestureEnd, a)), e.slides.each(function(s, a) {
                        var r = t(a);
                        r.find("." + e.params.zoom.containerClass).length > 0 && r.off(e.touchEvents.move, i.onTouchMove)
                    })
                }
            }
        },
        q = {
            loadInSlide: function(e, i) {
                void 0 === i && (i = !0);
                var s = this,
                    a = s.params.lazy;
                if (void 0 !== e && 0 !== s.slides.length) {
                    var r = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children("." + s.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : s.slides.eq(e),
                        n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                    !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(e, n) {
                        var o = t(n);
                        o.addClass(a.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            h = o.attr("data-srcset"),
                            p = o.attr("data-sizes");
                        s.loadImage(o[0], d || l, h, p, !1, function() {
                            if (void 0 !== s && null !== s && s && (!s || s.params) && !s.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), s.params.loop && i) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(s.params.slideDuplicateClass)) {
                                        var t = s.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + s.params.slideDuplicateClass + ")");
                                        s.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var n = s.$wrapperEl.children("." + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        s.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                s.emit("lazyImageReady", r[0], o[0])
                            }
                        }), s.emit("lazyImageLoad", r[0], o[0])
                    })
                }
            },
            load: function() {
                var e = this,
                    i = e.$wrapperEl,
                    s = e.params,
                    a = e.slides,
                    r = e.activeIndex,
                    n = e.virtual && s.virtual.enabled,
                    o = s.lazy,
                    l = s.slidesPerView;

                function d(e) {
                    if (n) {
                        if (i.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (a[e]) return !0;
                    return !1
                }

                function h(e) {
                    return n ? t(e).attr("data-swiper-slide-index") : t(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) i.children("." + s.slideVisibleClass).each(function(i, s) {
                    var a = n ? t(s).attr("data-swiper-slide-index") : t(s).index();
                    e.lazy.loadInSlide(a)
                });
                else if (l > 1)
                    for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        for (var c = o.loadPrevNextAmount, u = l, f = Math.min(r + u + Math.max(c, u), a.length), v = Math.max(r - Math.max(u, c), 0), m = r + l; m < f; m += 1) d(m) && e.lazy.loadInSlide(m);
                        for (var g = v; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
                    } else {
                        var b = i.children("." + s.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = i.children("." + s.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w))
                    }
            }
        },
        K = {
            LinearSpline: function(e, t) {
                var i, s, a, r, n, o = function(e, t) {
                    for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new K.LinearSpline(this.slidesGrid, e.slidesGrid) : new K.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var i, s, a = this,
                    r = a.controller.control;

                function n(e) {
                    var t = e.rtl && "horizontal" === e.params.direction ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof k && n(r[o]);
                else r instanceof k && t !== r && n(r)
            },
            setTransition: function(e, t) {
                var i, s = this,
                    a = s.controller.control;

                function r(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                        a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof k && r(a[i]);
                else a instanceof k && t !== a && r(a)
            }
        },
        U = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var i = this.params.a11y;
                if (13 === e.keyCode) {
                    var s = t(e.target);
                    this.navigation && this.navigation.$nextEl && s.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(i.lastSlideMessage) : this.a11y.notify(i.nextSlideMessage)), this.navigation && this.navigation.$prevEl && s.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(i.firstSlideMessage) : this.a11y.notify(i.prevSlideMessage)), this.pagination && s.is("." + this.params.pagination.bulletClass) && s[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this,
                    i = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(s, a) {
                    var r = t(a);
                    e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, i.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                })
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        _ = {
            init: function() {
                if (this.params.history) {
                    if (!o.history || !o.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = _.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || o.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || o.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = _.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = o.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var i = this.slides.eq(t),
                        s = _.slugify(i.attr("data-history"));
                    o.location.pathname.includes(e) || (s = e + "/" + s);
                    var a = o.history.state;
                    a && a.value === s || (this.params.history.replaceState ? o.history.replaceState({
                        value: s
                    }, null, s) : o.history.pushState({
                        value: s
                    }, null, s))
                }
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (_.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        Z = {
            onHashCange: function() {
                var e = d.location.hash.replace("#", "");
                e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index())
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var e = this.slides.eq(this.activeIndex),
                            t = e.attr("data-hash") || e.attr("data-history");
                        d.location.hash = t || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var e = d.location.hash.replace("#", "");
                    if (e)
                        for (var i = 0, s = this.slides.length; i < s; i += 1) {
                            var a = this.slides.eq(i);
                            if ((a.attr("data-hash") || a.attr("data-history")) === e && !a.hasClass(this.params.slideDuplicateClass)) {
                                var r = a.index();
                                this.slideTo(r, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && t(o).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && t(o).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        Q = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = l.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, i)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
            },
            stop: function() {
                return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
                    t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                }) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        J = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s, s = 0);
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: r
                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd(function() {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    })
                }
            }
        },
        ee = {
            setTranslate: function() {
                var e, i = this.$el,
                    s = this.$wrapperEl,
                    a = this.slides,
                    r = this.width,
                    n = this.height,
                    o = this.rtl,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow && (h ? (0 === (e = s.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), s.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = t('<div class="swiper-cube-shadow"></div>'), i.append(e)));
                for (var u = 0; u < a.length; u += 1) {
                    var f = a.eq(u),
                        v = u;
                    p && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var m = 90 * v,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(f[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    v % 4 == 0 ? (w = 4 * -g * l, x = 0) : (v - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (v - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (v - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                    var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && b > -1 && (c = 90 * v + 90 * b, o && (c = 90 * -v - 90 * b)), f.transform(T), d.slideShadows) {
                        var E = h ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            S = h ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = t('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), f.append(E)), 0 === S.length && (S = t('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), f.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (s.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            z = d.shadowScale,
                            P = d.shadowScale / M,
                            k = d.shadowOffset;
                        e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
                    }
                var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                s.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        te = {
            setTranslate: function() {
                for (var e = this.slides, i = 0; i < e.length; i += 1) {
                    var s = e.eq(i),
                        a = s[0].progress;
                    this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                    var r = -180 * a,
                        n = 0,
                        o = -s[0].swiperSlideOffset,
                        l = 0;
                    if (this.isHorizontal() ? this.rtl && (r = -r) : (l = o, o = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
                        var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = t('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
                    }
                    s.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(s).transitionEnd(function() {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                        }
                    })
                }
            }
        },
        ie = {
            setTranslate: function() {
                for (var e = this.width, i = this.height, s = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : i / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, f = s.length; u < f; u += 1) {
                    var v = s.eq(u),
                        m = r[u],
                        g = (d - v[0].swiperSlideOffset - m / 2) / m * n.modifier,
                        b = o ? p * g : 0,
                        w = o ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = o ? 0 : n.stretch * g,
                        T = o ? n.stretch * g : 0;
                    Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                    var E = "translate3d(" + T + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                    if (v.transform(E), v[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                        var S = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            C = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = t('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(S)), 0 === C.length && (C = t('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                    }
                }(h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        se = [$, L, D, O, H, X, G, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                l.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: B.enable.bind(this),
                        disable: B.disable.bind(this),
                        handle: B.handle.bind(this),
                        lastScrollTime: l.now()
                    }
                })
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                l.extend(this, {
                    navigation: {
                        init: V.init.bind(this),
                        update: V.update.bind(this),
                        destroy: V.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var i = this.navigation,
                        s = i.$nextEl,
                        a = i.$prevEl;
                    !this.params.navigation.hideOnClick || t(e.target).is(a) || t(e.target).is(s) || (s && s.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    type: "bullets",
                    dynamicBullets: !1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                l.extend(this, {
                    pagination: {
                        init: R.init.bind(this),
                        render: R.render.bind(this),
                        update: R.update.bind(this),
                        destroy: R.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !t(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock"
                }
            },
            create: function() {
                l.extend(this, {
                    scrollbar: {
                        init: F.init.bind(this),
                        destroy: F.destroy.bind(this),
                        updateSize: F.updateSize.bind(this),
                        setTranslate: F.setTranslate.bind(this),
                        setTransition: F.setTransition.bind(this),
                        enableDraggable: F.enableDraggable.bind(this),
                        disableDraggable: F.disableDraggable.bind(this),
                        setDragPosition: F.setDragPosition.bind(this),
                        onDragStart: F.onDragStart.bind(this),
                        onDragMove: F.onDragMove.bind(this),
                        onDragEnd: F.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                l.extend(this, {
                    parallax: {
                        setTransform: W.setTransform.bind(this),
                        setTranslate: W.setTranslate.bind(this),
                        setTransition: W.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.watchSlidesProgress = !0
                },
                init: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                    t[i] = j[i].bind(e)
                }), l.extend(e, {
                    zoom: t
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                l.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: q.load.bind(this),
                        loadInSlide: q.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                l.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: K.getInterpolateFunction.bind(this),
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !1,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                l.extend(e, {
                    a11y: {
                        liveRegion: t('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(U).forEach(function(t) {
                    e.a11y[t] = U[t].bind(e)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                l.extend(this, {
                    history: {
                        init: _.init.bind(this),
                        setHistory: _.setHistory.bind(this),
                        setHistoryPopState: _.setHistoryPopState.bind(this),
                        scrollToSlide: _.scrollToSlide.bind(this),
                        destroy: _.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                l.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: Z.init.bind(this),
                        destroy: Z.destroy.bind(this),
                        setHash: Z.setHash.bind(this),
                        onHashCange: Z.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                l.extend(this, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: Q.run.bind(this),
                        start: Q.start.bind(this),
                        stop: Q.stop.bind(this),
                        pause: Q.pause.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                l.extend(this, {
                    fadeEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        l.extend(this.params, e), l.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                l.extend(this, {
                    cubeEffect: {
                        setTranslate: ee.setTranslate.bind(this),
                        setTransition: ee.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        l.extend(this.params, e), l.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                l.extend(this, {
                    flipEffect: {
                        setTranslate: te.setTranslate.bind(this),
                        setTransition: te.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        l.extend(this.params, e), l.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                l.extend(this, {
                    coverflowEffect: {
                        setTranslate: ie.setTranslate.bind(this),
                        setTransition: ie.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(se), k
});
//# sourceMappingURL=swiper.min.js.map

/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.19
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a);
    } else {
        a(jQuery);
    }
}(function(a) {
    a.fn.addBack = a.fn.addBack || a.fn.andSelf;
    a.fn.extend({
        actual: function(b, l) {
            if (!this[b]) {
                throw '$.actual => The jQuery method "' + b + '" you called does not exist';
            }
            var f = {
                absolute: false,
                clone: false,
                includeMargin: false,
                display: "block"
            };
            var i = a.extend(f, l);
            var e = this.eq(0);
            var h, j;
            if (i.clone === true) {
                h = function() {
                    var m = "position: absolute !important; top: -1000 !important; ";
                    e = e.clone().attr("style", m).appendTo("body");
                };
                j = function() {
                    e.remove();
                };
            } else {
                var g = [];
                var d = "";
                var c;
                h = function() {
                    c = e.parents().addBack().filter(":hidden");
                    d += "visibility: hidden !important; display: " + i.display + " !important; ";
                    if (i.absolute === true) {
                        d += "position: absolute !important; ";
                    }
                    c.each(function() {
                        var m = a(this);
                        var n = m.attr("style");
                        g.push(n);
                        m.attr("style", n ? n + ";" + d : d);
                    });
                };
                j = function() {
                    c.each(function(m) {
                        var o = a(this);
                        var n = g[m];
                        if (n === undefined) {
                            o.removeAttr("style");
                        } else {
                            o.attr("style", n);
                        }
                    });
                };
            }
            h();
            var k = /(outer)/.test(b) ? e[b](i.includeMargin) : e[b]();
            j();
            return k;
        }
    });
}));

/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;
(function(f) {
    "use strict";
    "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
})(function($) {
    "use strict";

    function n(a) {
        return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function h(a) {
        return $.isFunction(a) || $.isPlainObject(a) ? a : {
            top: a,
            left: a
        }
    }
    var p = $.scrollTo = function(a, d, b) {
        return $(window).scrollTo(a, d, b)
    };
    p.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    };
    $.fn.scrollTo = function(a, d, b) {
        "object" === typeof d && (b = d, d = 0);
        "function" === typeof b && (b = {
            onAfter: b
        });
        "max" === a && (a = 9E9);
        b = $.extend({}, p.defaults, b);
        d = d || b.duration;
        var u = b.queue && 1 < b.axis.length;
        u && (d /= 2);
        b.offset = h(b.offset);
        b.over = h(b.over);
        return this.each(function() {
            function k(a) {
                var k = $.extend({}, b, {
                    queue: !0,
                    duration: d,
                    complete: a && function() {
                        a.call(q, e, b)
                    }
                });
                r.animate(f, k)
            }
            if (null !== a) {
                var l = n(this),
                    q = l ? this.contentWindow || window : this,
                    r = $(q),
                    e = a,
                    f = {},
                    t;
                switch (typeof e) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                            e = h(e);
                            break
                        }
                        e = l ? $(e) : $(e, q);
                    case "object":
                        if (e.length === 0) return;
                        if (e.is || e.style) t = (e = $(e)).offset()
                }
                var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
                $.each(b.axis.split(""), function(a, c) {
                    var d = "x" === c ? "Left" : "Top",
                        m = d.toLowerCase(),
                        g = "scroll" + d,
                        h = r[g](),
                        n = p.max(q, c);
                    t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
                    b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
                    !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}))
                });
                k(b.onAfter)
            }
        })
    };
    p.max = function(a, d) {
        var b = "x" === d ? "Width" : "Height",
            h = "scroll" + b;
        if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
        var b = "client" + b,
            k = a.ownerDocument || a.document,
            l = k.documentElement,
            k = k.body;
        return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
    };
    $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
        get: function(a) {
            return $(a.elem)[a.prop]()
        },
        set: function(a) {
            var d = this.get(a);
            if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();
            var b = Math.round(a.now);
            d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a))
        }
    };
    return p
});
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
! function(a, b) {
    a(function() {
        "use strict";

        function a(a, b) {
            return null != a && null != b && a.toLowerCase() === b.toLowerCase()
        }

        function c(a, b) {
            var c, d, e = a.length;
            if (!e || !b) return !1;
            for (c = b.toLowerCase(), d = 0; d < e; ++d)
                if (c === a[d].toLowerCase()) return !0;
            return !1
        }

        function d(a) {
            for (var b in a) i.call(a, b) && (a[b] = new RegExp(a[b], "i"))
        }

        function e(a) {
            return (a || "").substr(0, 500)
        }

        function f(a, b) {
            this.ua = e(a), this._cache = {}, this.maxPhoneWidth = b || 600
        }
        var g = {};
        g.mobileDetectRules = {
            phones: {
                iPhone: "\\biPhone\\b|\\biPod\\b",
                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092",
                Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F",
                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                NokiaLumia: "Lumia [0-9]{3,4}",
                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                Palm: "PalmSource|Palm",
                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                Alcatel: "Alcatel",
                Nintendo: "Nintendo 3DS",
                Amoi: "Amoi",
                INQ: "INQ",
                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            tablets: {
                iPad: "iPad|iPad.*Mobile",
                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
                BlackBerryTablet: "PlayBook|RIM Tablet",
                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-8703F",
                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                IRUTablet: "M702pro",
                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                NokiaLumiaTablet: "Lumia 2520",
                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                FlyTablet: "IQ310|Fly Vision",
                bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L",
                NecTablet: "\\bN-06D|\\bN-08D",
                PantechTablet: "Pantech.*P4100",
                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                NabiTablet: "Android.*\\bNabi",
                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                PlaystationTablet: "Playstation.*(Portable|Vita)",
                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                GalapadTablet: "Android.*\\bG1\\b",
                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                DPSTablet: "DPS Dream 9|DPS Dual 7",
                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                iMobileTablet: "i-mobile i-note",
                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                AMPETablet: "Android.* A78 ",
                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                TecnoTablet: "TECNO P9",
                JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                CaptivaTablet: "CAPTIVA PAD",
                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                JaytechTablet: "TPC-PA762",
                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                UbislateTablet: "UbiSlate[\\s]?7C",
                PocketBookTablet: "Pocketbook",
                KocasoTablet: "\\b(TB-1207)\\b",
                HisenseTablet: "\\b(F5281|E2371)\\b",
                Hudl: "Hudl HT7S3|Hudl 2",
                TelstraTablet: "T-Hub2",
                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b"
            },
            oss: {
                AndroidOS: "Android",
                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                MeeGoOS: "MeeGo",
                MaemoOS: "Maemo",
                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                webOS: "webOS|hpwOS",
                badaOS: "\\bBada\\b",
                BREWOS: "BREW"
            },
            uas: {
                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                Dolfin: "\\bDolfin\\b",
                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                Skyfire: "Skyfire",
                Edge: "Mobile Safari/[.0-9]* Edge",
                IE: "IEMobile|MSIEMobile",
                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                Bolt: "bolt",
                TeaShark: "teashark",
                Blazer: "Blazer",
                Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                UCBrowser: "UC.*Browser|UCWEB",
                baiduboxapp: "baiduboxapp",
                baidubrowser: "baidubrowser",
                DiigoBrowser: "DiigoBrowser",
                Puffin: "Puffin",
                Mercury: "\\bMercury\\b",
                ObigoBrowser: "Obigo",
                NetFront: "NF-Browser",
                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
            },
            props: {
                Mobile: "Mobile/[VER]",
                Build: "Build/[VER]",
                Version: "Version/[VER]",
                VendorID: "VendorID/[VER]",
                iPad: "iPad.*CPU[a-z ]+[VER]",
                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                iPod: "iPod.*CPU[a-z ]+[VER]",
                Kindle: "Kindle/[VER]",
                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                Coast: ["Coast/[VER]"],
                Dolfin: "Dolfin/[VER]",
                Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                Fennec: "Fennec/[VER]",
                Edge: "Edge/[VER]",
                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                NetFront: "NetFront/[VER]",
                NokiaBrowser: "NokiaBrowser/[VER]",
                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                "Opera Mini": "Opera Mini/[VER]",
                "Opera Mobi": "Version/[VER]",
                UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                MQQBrowser: "MQQBrowser/[VER]",
                MicroMessenger: "MicroMessenger/[VER]",
                baiduboxapp: "baiduboxapp/[VER]",
                baidubrowser: "baidubrowser/[VER]",
                SamsungBrowser: "SamsungBrowser/[VER]",
                Iron: "Iron/[VER]",
                Safari: ["Version/[VER]", "Safari/[VER]"],
                Skyfire: "Skyfire/[VER]",
                Tizen: "Tizen/[VER]",
                Webkit: "webkit[ /][VER]",
                PaleMoon: "PaleMoon/[VER]",
                Gecko: "Gecko/[VER]",
                Trident: "Trident/[VER]",
                Presto: "Presto/[VER]",
                Goanna: "Goanna/[VER]",
                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                Android: "Android [VER]",
                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                BREW: "BREW [VER]",
                Java: "Java/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE/[VER]",
                "Windows NT": "Windows NT [VER]",
                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
            },
            utils: {
                Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                DesktopMode: "WPDesktop",
                TV: "SonyDTV|HbbTV",
                WebKit: "(webkit)[ /]([\\w.]+)",
                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                Watch: "SM-V700"
            }
        }, g.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };
        var h, i = Object.prototype.hasOwnProperty;
        return g.FALLBACK_PHONE = "UnknownPhone", g.FALLBACK_TABLET = "UnknownTablet", g.FALLBACK_MOBILE = "UnknownMobile", h = "isArray" in Array ? Array.isArray : function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            function() {
                var a, b, c, e, f, j, k = g.mobileDetectRules;
                for (a in k.props)
                    if (i.call(k.props, a)) {
                        for (b = k.props[a], h(b) || (b = [b]), f = b.length, e = 0; e < f; ++e) c = b[e], j = c.indexOf("[VER]"), j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)), b[e] = new RegExp(c, "i");
                        k.props[a] = b
                    }
                d(k.oss), d(k.phones), d(k.tablets), d(k.uas), d(k.utils), k.oss0 = {
                    WindowsPhoneOS: k.oss.WindowsPhoneOS,
                    WindowsMobileOS: k.oss.WindowsMobileOS
                }
            }(), g.findMatch = function(a, b) {
                for (var c in a)
                    if (i.call(a, c) && a[c].test(b)) return c;
                return null
            }, g.findMatches = function(a, b) {
                var c = [];
                for (var d in a) i.call(a, d) && a[d].test(b) && c.push(d);
                return c
            }, g.getVersionStr = function(a, b) {
                var c, d, e, f, h = g.mobileDetectRules.props;
                if (i.call(h, a))
                    for (c = h[a], e = c.length, d = 0; d < e; ++d)
                        if (f = c[d].exec(b), null !== f) return f[1];
                return null
            }, g.getVersion = function(a, b) {
                var c = g.getVersionStr(a, b);
                return c ? g.prepareVersionNo(c) : NaN
            }, g.prepareVersionNo = function(a) {
                var b;
                return b = a.split(/[a-z._ \/\-]/i), 1 === b.length && (a = b[0]), b.length > 1 && (a = b[0] + ".", b.shift(), a += b.join("")), Number(a)
            }, g.isMobileFallback = function(a) {
                return g.detectMobileBrowsers.fullPattern.test(a) || g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4))
            }, g.isTabletFallback = function(a) {
                return g.detectMobileBrowsers.tabletPattern.test(a)
            }, g.prepareDetectionCache = function(a, c, d) {
                if (a.mobile === b) {
                    var e, h, i;
                    return (h = g.findMatch(g.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h, void(a.phone = null)) : (e = g.findMatch(g.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = e, void(a.tablet = null)) : void(g.isMobileFallback(c) ? (i = f.isPhoneSized(d), i === b ? (a.mobile = g.FALLBACK_MOBILE, a.tablet = a.phone = null) : i ? (a.mobile = a.phone = g.FALLBACK_PHONE, a.tablet = null) : (a.mobile = a.tablet = g.FALLBACK_TABLET, a.phone = null)) : g.isTabletFallback(c) ? (a.mobile = a.tablet = g.FALLBACK_TABLET, a.phone = null) : a.mobile = a.tablet = a.phone = null)
                }
            }, g.mobileGrade = function(a) {
                var b = null !== a.mobile();
                return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2, "C")
            }, g.detectOS = function(a) {
                return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a)
            }, g.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }, f.prototype = {
                constructor: f,
                mobile: function() {
                    return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                },
                phone: function() {
                    return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                },
                tablet: function() {
                    return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                },
                userAgent: function() {
                    return this._cache.userAgent === b && (this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                },
                userAgents: function() {
                    return this._cache.userAgents === b && (this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                },
                os: function() {
                    return this._cache.os === b && (this._cache.os = g.detectOS(this.ua)), this._cache.os
                },
                version: function(a) {
                    return g.getVersion(a, this.ua)
                },
                versionStr: function(a) {
                    return g.getVersionStr(a, this.ua)
                },
                is: function(b) {
                    return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(g.findMatches(g.mobileDetectRules.utils, this.ua), b)
                },
                match: function(a) {
                    return a instanceof RegExp || (a = new RegExp(a, "i")), a.test(this.ua)
                },
                isPhoneSized: function(a) {
                    return f.isPhoneSized(a || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    return this._cache.grade === b && (this._cache.grade = g.mobileGrade(this)), this._cache.grade
                }
            }, "undefined" != typeof window && window.screen ? f.isPhoneSized = function(a) {
                return a < 0 ? b : g.getDeviceSmallerSide() <= a
            } : f.isPhoneSized = function() {}, f._impl = g, f.version = "1.4.1 2017-12-24", f
    })
}(function(a) {
    if ("undefined" != typeof module && module.exports) return function(a) {
        module.exports = a()
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function(a) {
        window.MobileDetect = a()
    };
    throw new Error("unknown environment")
}());
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
! function(t) {
    var e = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function() {
            return !0
        },
        onSlideBefore: function() {
            return !0
        },
        onSlideAfter: function() {
            return !0
        },
        onSlideNext: function() {
            return !0
        },
        onSlidePrev: function() {
            return !0
        },
        onSliderResize: function() {
            return !0
        }
    };
    t.fn.bxSlider = function(n) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).bxSlider(n)
        }), this;
        var s = {},
            o = this,
            r = t(window).width(),
            a = t(window).height();
        if (!t(o).data("bxSlider")) {
            var l = function() {
                    t(o).data("bxSlider") || (s.settings = t.extend({}, e, n), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
                        index: s.settings.startSlide
                    }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" === s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" !== s.settings.mode && function() {
                        for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
                            if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" === s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(s.settings.slideSelector).each(function() {
                        t(this).data("origStyle", t(this).attr("style"))
                    }), d())
                },
                d = function() {
                    var e = s.children.eq(s.settings.startSlide);
                    o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = o.parent(), s.settings.ariaLive && !s.settings.ticker && s.viewport.attr("aria-live", "polite"), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), o.css({
                        width: "horizontal" === s.settings.mode ? 1e3 * s.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), s.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), s.viewport.parent().css({
                        maxWidth: u()
                    }), s.children.css({
                        float: "horizontal" === s.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), s.children.css("width", h()), "horizontal" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" === s.settings.mode && (s.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), s.children.eq(s.settings.startSlide).css({
                        zIndex: s.settings.slideZIndex,
                        display: "block"
                    })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && P(), s.active.last = s.settings.startSlide === f() - 1, s.settings.video && o.fitVids(), ("all" === s.settings.preloadImages || s.settings.ticker) && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.controls && C(), s.settings.auto && s.settings.autoControls && T(), s.settings.pager && w(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), c(e, g)
                },
                c = function(e, i) {
                    var n = e.find('img:not([src=""]), iframe').length,
                        s = 0;
                    return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function() {
                        t(this).one("load error", function() {
                            ++s === n && i()
                        }).each(function() {
                            this.complete && t(this).trigger("load")
                        })
                    })
                },
                g = function() {
                    if (s.settings.infiniteLoop && "fade" !== s.settings.mode && !s.settings.ticker) {
                        var e = "vertical" === s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
                            i = s.children.slice(0, e).clone(!0).addClass("bx-clone"),
                            n = s.children.slice(-e).clone(!0).addClass("bx-clone");
                        s.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n)
                    }
                    s.loader.remove(), m(), "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), o.redrawSlider(), s.settings.onSliderLoad.call(o, s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", Z), s.settings.auto && s.settings.autoStart && (f() > 1 || s.settings.autoSlideForOnePage) && H(), s.settings.ticker && W(), s.settings.pager && I(s.settings.startSlide), s.settings.controls && D(), s.settings.touchEnabled && !s.settings.ticker && N(), s.settings.keyboardEnabled && !s.settings.ticker && t(document).keydown(F)
                },
                p = function() {
                    var e = 0,
                        n = t();
                    if ("vertical" === s.settings.mode || s.settings.adaptiveHeight)
                        if (s.carousel) {
                            var o = 1 === s.settings.moveSlides ? s.active.index : s.active.index * x();
                            for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i))
                        } else n = s.children.eq(s.active.index);
                    else n = s.children;
                    return "vertical" === s.settings.mode ? (n.each(function(i) {
                        e += t(this).outerHeight()
                    }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), "border-box" === s.viewport.css("box-sizing") ? e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" === s.viewport.css("box-sizing") && (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), e
                },
                u = function() {
                    var t = "100%";
                    return s.settings.slideWidth > 0 && (t = "horizontal" === s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t
                },
                h = function() {
                    var t = s.settings.slideWidth,
                        e = s.viewport.width();
                    if (0 === s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" === s.settings.mode) t = e;
                    else if (s.settings.maxSlides > 1 && "horizontal" === s.settings.mode) {
                        if (e > s.maxThreshold) return t;
                        e < s.minThreshold ? t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides : s.settings.shrinkItems && (t = Math.floor((e + s.settings.slideMargin) / Math.ceil((e + s.settings.slideMargin) / (t + s.settings.slideMargin)) - s.settings.slideMargin))
                    }
                    return t
                },
                v = function() {
                    var t = 1,
                        e = null;
                    return "horizontal" === s.settings.mode && s.settings.slideWidth > 0 ? s.viewport.width() < s.minThreshold ? t = s.settings.minSlides : s.viewport.width() > s.maxThreshold ? t = s.settings.maxSlides : (e = s.children.first().width() + s.settings.slideMargin, t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e)) : "vertical" === s.settings.mode && (t = s.settings.minSlides), t
                },
                f = function() {
                    var t = 0,
                        e = 0,
                        i = 0;
                    if (s.settings.moveSlides > 0)
                        if (s.settings.infiniteLoop) t = Math.ceil(s.children.length / x());
                        else
                            for (; e < s.children.length;) ++t, e = i + v(), i += s.settings.moveSlides <= v() ? s.settings.moveSlides : v();
                    else t = Math.ceil(s.children.length / v());
                    return t
                },
                x = function() {
                    return s.settings.moveSlides > 0 && s.settings.moveSlides <= v() ? s.settings.moveSlides : v()
                },
                m = function() {
                    var t, e, i;
                    s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop ? "horizontal" === s.settings.mode ? (e = s.children.last(), t = e.position(), S(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === s.settings.mode && (i = s.children.length - s.settings.minSlides, t = s.children.eq(i).position(), S(-t.top, "reset", 0)) : (t = s.children.eq(s.active.index * x()).position(), s.active.index === f() - 1 && (s.active.last = !0), void 0 !== t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0)))
                },
                S = function(e, i, n, r) {
                    var a, l;
                    s.usingCSS ? (l = "vertical" === s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                        t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), q())
                    }) : q()) : "reset" === i ? o.css(s.animProp, l) : "ticker" === i && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                        t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), S(r.resetValue, "reset", 0), L())
                    }) : (S(r.resetValue, "reset", 0), L()))) : (a = {}, a[s.animProp] = e, "slide" === i ? o.animate(a, n, s.settings.easing, function() {
                        q()
                    }) : "reset" === i ? o.css(s.animProp, e) : "ticker" === i && o.animate(a, n, "linear", function() {
                        S(r.resetValue, "reset", 0), L()
                    }))
                },
                b = function() {
                    for (var e = "", i = "", n = f(), o = 0; o < n; o++) i = "", s.settings.buildPager && t.isFunction(s.settings.buildPager) || s.settings.pagerCustom ? (i = s.settings.buildPager(o), s.pagerEl.addClass("bx-custom-pager")) : (i = o + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + i + "</a></div>";
                    s.pagerEl.html(e)
                },
                w = function() {
                    s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), b()), s.pagerEl.on("click touchend", "a", z)
                },
                C = function() {
                    s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click touchend", E), s.controls.prev.bind("click touchend", k), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
                },
                T = function() {
                    s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", M), s.controls.autoEl.on("click", ".bx-stop", y), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), A(s.settings.autoStart ? "stop" : "start")
                },
                P = function() {
                    s.children.each(function(e) {
                        var i = t(this).find("img:first").attr("title");
                        void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>")
                    })
                },
                E = function(t) {
                    t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
                },
                k = function(t) {
                    t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
                },
                M = function(t) {
                    o.startAuto(), t.preventDefault()
                },
                y = function(t) {
                    o.stopAuto(), t.preventDefault()
                },
                z = function(e) {
                    var i, n;
                    e.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== s.active.index && o.goToSlide(n)))
                },
                I = function(e) {
                    var i = s.children.length;
                    return "short" === s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(i, n) {
                        t(n).find("a").eq(e).addClass("active")
                    }))
                },
                q = function() {
                    if (s.settings.infiniteLoop) {
                        var t = "";
                        0 === s.active.index ? t = s.children.eq(0).position() : s.active.index === f() - 1 && s.carousel ? t = s.children.eq((f() - 1) * x()).position() : s.active.index === s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0))
                    }
                    s.working = !1, s.settings.onSlideAfter.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index)
                },
                A = function(t) {
                    s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                D = function() {
                    1 === f() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 === s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index === f() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
                },
                H = function() {
                    if (s.settings.autoDelay > 0) {
                        setTimeout(o.startAuto, s.settings.autoDelay)
                    } else o.startAuto(), t(window).focus(function() {
                        o.startAuto()
                    }).blur(function() {
                        o.stopAuto()
                    });
                    s.settings.autoHover && o.hover(function() {
                        s.interval && (o.stopAuto(!0), s.autoPaused = !0)
                    }, function() {
                        s.autoPaused && (o.startAuto(!0), s.autoPaused = null)
                    })
                },
                W = function() {
                    var e, i, n, r, a, l, d, c, g = 0;
                    "next" === s.settings.autoDirection ? o.append(s.children.clone().addClass("bx-clone")) : (o.prepend(s.children.clone().addClass("bx-clone")), e = s.children.first().position(), g = "horizontal" === s.settings.mode ? -e.left : -e.top), S(g, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && (s.usingCSS ? (r = "horizontal" === s.settings.mode ? 4 : 5, s.viewport.hover(function() {
                        i = o.css("-" + s.cssPrefix + "-transform"), n = parseFloat(i.split(",")[r]), S(n, "reset", 0)
                    }, function() {
                        c = 0, s.children.each(function(e) {
                            c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        }), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(n))), L(d)
                    })) : s.viewport.hover(function() {
                        o.stop()
                    }, function() {
                        c = 0, s.children.each(function(e) {
                            c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        }), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(o.css(l)))), L(d)
                    })), L()
                },
                L = function(t) {
                    var e, i, n, r = t ? t : s.settings.speed,
                        a = {
                            left: 0,
                            top: 0
                        },
                        l = {
                            left: 0,
                            top: 0
                        };
                    "next" === s.settings.autoDirection ? a = o.find(".bx-clone").first().position() : l = s.children.first().position(), e = "horizontal" === s.settings.mode ? -a.left : -a.top, i = "horizontal" === s.settings.mode ? -l.left : -l.top, n = {
                        resetValue: i
                    }, S(e, "ticker", r, n)
                },
                O = function(e) {
                    var i = t(window),
                        n = {
                            top: i.scrollTop(),
                            left: i.scrollLeft()
                        },
                        s = e.offset();
                    return n.right = n.left + i.width(), n.bottom = n.top + i.height(), s.right = s.left + e.outerWidth(), s.bottom = s.top + e.outerHeight(), !(n.right < s.left || n.left > s.right || n.bottom < s.top || n.top > s.bottom)
                },
                F = function(t) {
                    var e = document.activeElement.tagName.toLowerCase(),
                        i = "input|textarea",
                        n = new RegExp(e, ["i"]),
                        s = n.exec(i);
                    if (null == s && O(o)) {
                        if (39 === t.keyCode) return E(t), !1;
                        if (37 === t.keyCode) return k(t), !1
                    }
                },
                N = function() {
                    s.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, s.viewport.bind("touchstart MSPointerDown pointerdown", X), s.viewport.on("click", ".bxslider a", function(t) {
                        s.viewport.hasClass("click-disabled") && (t.preventDefault(), s.viewport.removeClass("click-disabled"))
                    })
                },
                X = function(t) {
                    if (s.controls.el.addClass("disabled"), s.working) t.preventDefault(), s.controls.el.removeClass("disabled");
                    else {
                        s.touch.originalPos = o.position();
                        var e = t.originalEvent,
                            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
                        s.touch.start.x = i[0].pageX, s.touch.start.y = i[0].pageY, s.viewport.get(0).setPointerCapture && (s.pointerId = e.pointerId, s.viewport.get(0).setPointerCapture(s.pointerId)), s.viewport.bind("touchmove MSPointerMove pointermove", V), s.viewport.bind("touchend MSPointerUp pointerup", R), s.viewport.bind("MSPointerCancel pointercancel", Y)
                    }
                },
                Y = function(t) {
                    S(s.touch.originalPos.left, "reset", 0), s.controls.el.removeClass("disabled"), s.viewport.unbind("MSPointerCancel pointercancel", Y), s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId)
                },
                V = function(t) {
                    var e = t.originalEvent,
                        i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                        n = Math.abs(i[0].pageX - s.touch.start.x),
                        o = Math.abs(i[0].pageY - s.touch.start.y),
                        r = 0,
                        a = 0;
                    3 * n > o && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== s.settings.mode && s.settings.oneToOneTouch && ("horizontal" === s.settings.mode ? (a = i[0].pageX - s.touch.start.x, r = s.touch.originalPos.left + a) : (a = i[0].pageY - s.touch.start.y, r = s.touch.originalPos.top + a), S(r, "reset", 0))
                },
                R = function(t) {
                    s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.controls.el.removeClass("disabled");
                    var e = t.originalEvent,
                        i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                        n = 0,
                        r = 0;
                    s.touch.end.x = i[0].pageX, s.touch.end.y = i[0].pageY, "fade" === s.settings.mode ? (r = Math.abs(s.touch.start.x - s.touch.end.x), r >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === s.settings.mode ? (r = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (r = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 === s.active.index && r > 0 || s.active.last && r < 0) ? S(n, "reset", 200) : Math.abs(r) >= s.settings.swipeThreshold ? (r < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : S(n, "reset", 200)), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId)
                },
                Z = function(e) {
                    if (s.initialized)
                        if (s.working) window.setTimeout(Z, 10);
                        else {
                            var i = t(window).width(),
                                n = t(window).height();
                            r === i && a === n || (r = i, a = n, o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index))
                        }
                },
                B = function(t) {
                    var e = v();
                    s.settings.ariaHidden && !s.settings.ticker && (s.children.attr("aria-hidden", "true"), s.children.slice(t, t + e).attr("aria-hidden", "false"))
                },
                U = function(t) {
                    return t < 0 ? s.settings.infiniteLoop ? f() - 1 : s.active.index : t >= f() ? s.settings.infiniteLoop ? 0 : s.active.index : t
                };
            return o.goToSlide = function(e, i) {
                var n, r, a, l, d = !0,
                    c = 0,
                    g = {
                        left: 0,
                        top: 0
                    },
                    u = null;
                if (s.oldIndex = s.active.index, s.active.index = U(e), !s.working && s.active.index !== s.oldIndex) {
                    if (s.working = !0, d = s.settings.onSlideBefore.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index), "undefined" != typeof d && !d) return s.active.index = s.oldIndex, void(s.working = !1);
                    "next" === i ? s.settings.onSlideNext.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1) : "prev" === i && (s.settings.onSlidePrev.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1)), s.active.last = s.active.index >= f() - 1, (s.settings.pager || s.settings.pagerCustom) && I(s.active.index), s.settings.controls && D(), "fade" === s.settings.mode ? (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({
                        height: p()
                    }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
                        zIndex: 0
                    }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() {
                        t(this).css("zIndex", s.settings.slideZIndex), q()
                    })) : (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({
                        height: p()
                    }, s.settings.adaptiveHeightSpeed), !s.settings.infiniteLoop && s.carousel && s.active.last ? "horizontal" === s.settings.mode ? (u = s.children.eq(s.children.length - 1), g = u.position(), c = s.viewport.width() - u.outerWidth()) : (n = s.children.length - s.settings.minSlides, g = s.children.eq(n).position()) : s.carousel && s.active.last && "prev" === i ? (r = 1 === s.settings.moveSlides ? s.settings.maxSlides - x() : (f() - 1) * x() - (s.children.length - s.settings.maxSlides), u = o.children(".bx-clone").eq(r), g = u.position()) : "next" === i && 0 === s.active.index ? (g = o.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1) : e >= 0 && (l = e * parseInt(x()), g = s.children.eq(l).position()), "undefined" != typeof g ? (a = "horizontal" === s.settings.mode ? -(g.left - c) : -g.top, S(a, "slide", s.settings.speed)) : s.working = !1), s.settings.ariaHidden && B(s.active.index * x())
                }
            }, o.goToNextSlide = function() {
                if (s.settings.infiniteLoop || !s.active.last) {
                    var t = parseInt(s.active.index) + 1;
                    o.goToSlide(t, "next")
                }
            }, o.goToPrevSlide = function() {
                if (s.settings.infiniteLoop || 0 !== s.active.index) {
                    var t = parseInt(s.active.index) - 1;
                    o.goToSlide(t, "prev")
                }
            }, o.startAuto = function(t) {
                s.interval || (s.interval = setInterval(function() {
                    "next" === s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
                }, s.settings.pause), s.settings.autoControls && t !== !0 && A("stop"))
            }, o.stopAuto = function(t) {
                s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && t !== !0 && A("start"))
            }, o.getCurrentSlide = function() {
                return s.active.index
            }, o.getCurrentSlideElement = function() {
                return s.children.eq(s.active.index)
            }, o.getSlideElement = function(t) {
                return s.children.eq(t)
            }, o.getSlideCount = function() {
                return s.children.length
            }, o.isWorking = function() {
                return s.working
            }, o.redrawSlider = function() {
                s.children.add(o.find(".bx-clone")).outerWidth(h()), s.viewport.css("height", p()), s.settings.ticker || m(), s.active.last && (s.active.index = f() - 1), s.active.index >= f() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (b(), I(s.active.index)), s.settings.ariaHidden && B(s.active.index * x())
            }, o.destroySlider = function() {
                s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function() {
                    void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && !s.settings.pagerCustom && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", Z), s.settings.keyboardEnabled && t(document).unbind("keydown", F), t(this).removeData("bxSlider"))
            }, o.reloadSlider = function(e) {
                void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this)
            }, l(), t(o).data("bxSlider", this), this
        }
    }
}(jQuery);