// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scroll.js":[function(require,module,exports) {
jQuery(function ($) {
  $(this).impulse();
  $(".site-primary").impulse({
    effect: "easeOutBack",
    fluid: false
  });
}); // ataredo.com/morphology/lucidscroll - documentation

(function ($, nib) {
  $.fn.impulse = function (options) {
    var set = $.extend({}, $.fn.impulse.default, options),
        gate = $(nib),
        vessel = this,
        object = $(set.target),
        area = {},
        edge = [],
        fad = {},
        entity,
        brink = [],
        outset = [],
        quit = [],
        morph,
        way,
        speed,
        destined = [],
        pour = "requestAnimationFrame",
        use = $.extend({
      novel: pour in nib,
      turned: 0
    }, set);
    elementAnalysis();
    vessel.each(function (hit) {
      use = $.extend({}, use);
      $(this).data("impulse", use).on("wheel.excite", function (act, info) {
        if (!use.keen && !act.mien) return;

        if (act.mien) {
          fad = $.extend({}, use, info);
          use.annul = fad.delay == true;
          var loom = act.mien;
          fad.fluid = false;
        } else {
          if (use.annul) return;
          fad = use;
          loom = act.originalEvent.deltaY;
        }

        loom = loom / Math.abs(loom);

        if (use.crux) {
          entity = $(this);
          brink[0] = edge[hit];
        } else {
          entity = object;
          brink = edge;
        }

        $.each({
          range: "orbit",
          tempo: "pace"
        }, function (slot, mate) {
          if (typeof fad[slot] === "function") fad[mate] = fad[slot]();else fad[mate] = fad[slot];
        });
        if (loom != use.zeal || act.mien) use.turned = 1;else use.turned = Math.min(use.curb, use.turned + 1);
        if (!fad.delay && fad.fluid && use.turned == 1) morph = "curve";else morph = fad.effect;
        way = loom * fad.orbit * Math.pow(use.leap, use.turned - 1);
        speed = fad.pace * Math.pow(use.sloth, use.turned - 1) || 1;
        use.zeal = loom;
        entity.each(function (part) {
          outset[part] = $(this).scrollTop();
          destined[part] = outset[part] + way;
          quit[part] = onFringe(this, part, outset[part]);
        });
        use.waive = ceaseOperation();
        if (!way) speed = 1;

        if (use.novel) {
          if (use.motion) {
            cancelAnimationFrame(use.motion);
            use.initial = use.present;
          } else use.initial = Date.now();

          use.motion = nib[pour](streamCore);
        } else inciteSource();
      });
      this.addEventListener("wheel", function (tick) {
        if (!use.keen) return;
        if (use.annul) return denyRise(tick);else if (fad.delay == true && !use.waive) use.annul = true;
        if (!(use.waive && use.occur)) denyRise(tick);
      }, hasQuiet() ? {
        passive: false
      } : false);
    });
    $.easing["curve"] = $.easing["easeInOutSine"];
    gate.resize(function () {
      clearTimeout(use.bound);
      use.bound = setTimeout(detectOverflow, 100);
    });
    return this;

    function streamCore() {
      use.present = Date.now();
      var advance = Math.min(use.present - use.initial, speed) / speed,
          increase = $.easing[morph](advance);
      entity.each(function (key) {
        if (!quit[key]) {
          $(this).scrollTop(outset[key] + increase * way);
          checkLimits(this, key, advance);
        }
      });
      if (advance < 1 && !use.waive) use.motion = nib[pour](streamCore);else hindStage();
    }

    function inciteSource() {
      entity.each(function (beat) {
        if (!quit[beat]) {
          $(this).stop().animate({
            scrollTop: destined[beat]
          }, {
            duration: speed,
            easing: morph,
            progress: function progress(current, sequence) {
              checkLimits(this, beat, sequence);
            },
            complete: hindStage
          });
        }
      });
    }

    function checkLimits(essence, rank, factor) {
      if (100 * factor >= fad.reset) use.turned = 0;

      if (onFringe(essence, rank)) {
        quit[rank] = true;
        if (!use.novel) $(essence).stop(true, true);
        use.waive = ceaseOperation();
      }
    }

    function onFringe(matter, cue, genesis) {
      var put = Math.round(genesis || $(matter).scrollTop()),
          above = destined[cue] < 0 && !put,
          below = destined[cue] > brink[cue] && put == brink[cue] && fad.orbit > 0;
      return above || below;
    }

    function ceaseOperation() {
      return quit.every(function (flag) {
        return flag;
      });
    }

    function hindStage() {
      use.turned = use.annul = use.motion = 0;
    }

    function denyRise(jab) {
      jab.preventDefault();
      jab.stopPropagation();
    }

    function elementAnalysis() {
      var item = $();

      if (!object.length) {
        use.crux = true;
        object = vessel;
      }

      object.each(function () {
        if ($.zenith(this)) {
          if (!use.main) {
            if (use.novel) use.main = nib;else use.main = baseTag();
            item = item.add(use.main);
          }
        } else item = item.add(this);
      });
      use.target = object = item;
      object.each(function (zest) {
        if ($.zenith(this)) area[zest] = "hub";else area[zest] = "sub";
      });
      if (use.crux && use.main) vessel = object;
      detectOverflow();
    }

    function baseTag() {
      var origin = gate.scrollTop();
      gate.scrollTop(1);
      if ($("html").scrollTop()) var root = "html";else if ($("body").scrollTop()) root = "body";else root = "html, body";
      gate.scrollTop(origin);
      return root;
    }

    function detectOverflow() {
      object.each(function (peg) {
        if (area[peg] == "hub") var teem = $(document).height() - gate.height();else teem = this.scrollHeight - $(this).height();
        edge[peg] = Math.round(teem);
      });
    }

    function hasQuiet() {
      var cold = false,
          hike = function hike() {};

      try {
        var aid = Object.defineProperty({}, "passive", {
          get: function get() {
            cold = true;
          }
        });
        nib.addEventListener("test", hike, aid);
        nib.removeEventListener("test", hike, aid);
      } catch (e) {}

      return cold;
    }
  };

  $.zenith = function (sample) {
    var peak = [nib, document, "HTML", "BODY"],
        facet;
    if (sample) return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1;
    $.each(peak, function (spot, detail) {
      facet = $(detail).data("impulse");
      if (facet) return false;
    });
    return facet;
  };

  $.fn.impulse.default = {
    target: "",
    range: 270,
    leap: 1.35,
    tempo: 900,
    sloth: 1.1,
    curb: 5,
    reset: 85,
    effect: "easeOutSine",
    keen: true,
    delay: false,
    occur: true,
    fluid: true
  };

  $.fn.demit = function () {
    return this.each(function () {
      if ($.zenith(this)) var habit = $.zenith();else habit = $(this).data("impulse");

      if (habit) {
        if (habit.novel) cancelAnimationFrame(habit.motion);else habit.target.stop();
        habit.turned = habit.annul = habit.motion = 0;
      }
    });
  };

  $.fn.amend = function (gist) {
    return this.each(function () {
      if ($.zenith(this)) var quirk = $.zenith();else quirk = $(this).data("impulse");

      if (quirk) {
        $.each(gist, function (sign, rate) {
          if (sign in quirk) quirk[sign] = rate;
        });
      }
    });
  };

  $.fn.evoke = function (unit) {
    var lot = $.Event("wheel.excite", {
      mien: true
    }),
        bulk;
    return this.each(function () {
      if ($.zenith(this)) {
        if (!bulk) {
          bulk = $.zenith();
          if (bulk) $(bulk.main).trigger(lot, unit);
        }
      } else $(this).trigger(lot, unit);
    });
  };
})(jQuery, window);

(function ($) {
  var b = {};
  $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (i, n) {
    b[n] = function (p) {
      return Math.pow(p, i + 2);
    };
  });
  $.extend(b, {
    Sine: function Sine(p) {
      return 1 - Math.cos(p * Math.PI / 2);
    },
    Circ: function Circ(p) {
      return 1 - Math.sqrt(1 - p * p);
    },
    Elastic: function Elastic(p) {
      return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
    },
    Back: function Back(p) {
      return p * p * (3 * p - 2);
    },
    Bounce: function Bounce(p) {
      var f,
          h = 4;

      while (p < ((f = Math.pow(2, --h)) - 1) / 11) {}

      return 1 / Math.pow(4, 3 - h) - 7.5625 * Math.pow((f * 3 - 2) / 22 - p, 2);
    }
  });
  $.each(b, function (n, e) {
    $.easing["easeIn" + n] = e;

    $.easing["easeOut" + n] = function (p) {
      return 1 - e(1 - p);
    };

    $.easing["easeInOut" + n] = function (p) {
      return p < 0.5 ? e(p * 2) / 2 : 1 - e(p * -2 + 2) / 2;
    };
  });
})(jQuery);
},{}],"C:/Users/namhy/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "11679" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/namhy/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scroll.js"], null)
//# sourceMappingURL=/scroll.62f5c327.js.map