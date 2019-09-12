(function () {
  'use strict';

  function throttle(fn, threshold, scope) {
    threshold = threshold || 250;
    var last, deferTimer;
    return function throttled() {
      var context = scope || this;
      var now = +new Date(),
          args = arguments;

      if (last && now < last + threshold) {
        window.clearTimeout(deferTimer);
        deferTimer = window.setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  var ads = {};
  var validAds = ["panorama", "bottom", "module", "articlemodule"];
  function init(Bau) {
    Bau.events.subscribe("resize", resizeAd);
    window.addEventListener("resize", throttle(resizeAds, 50));
  }

  function resizeAds() {
    Object.keys(ads).forEach(function (id) {
      return resizeAd(ads[id]);
    });
  }

  function resizeAd(adData) {
    if (!adData || !adData.name || validAds.indexOf(adData.name) === -1) return;
    var adId = adData.id;
    ads[adId] = adData;
    if (adData.isEmpty) return;
    var element = document.getElementById(adId);
    if (!element) return;
    var inner = element.firstElementChild;
    if (!inner) return;
    var _adData$size = adData.size,
        width = _adData$size.width,
        height = _adData$size.height;
    var maxWidth = element.parentElement.offsetWidth;
    if (isNaN(maxWidth)) return;

    if (width <= maxWidth) {
      inner.style.removeProperty("webkitTransform");
      inner.style.removeProperty("transform");
      element.style.height = "auto";
      return;
    }

    var scale = maxWidth / width;
    var adHeight = height * scale;
    inner.style.webkitTransformOrigin = inner.style.transformOrigin = "left top";
    inner.style.webkitTransform = inner.style.transform = "scale(".concat(scale, ")");
    element.style.height = "".concat(adHeight, "px");
    element.style.minHeight = "auto";
  }

  var STICKY_MENU_HEIGHT = 50;

  var supported = supportsPassive();
  function passiveIfPossible() {
    var passive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return supported ? {
      passive: passive
    } : false;
  } // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection

  function supportsPassive() {
    // Test via a getter in the options object to see if the passive property is accessed
    var supportPassiveCalled = false;

    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get() {
          supportPassiveCalled = true;
          return true;
        }
      });
      window.addEventListener("testpassive", null, opts);
    } catch (e) {
      return false;
    }

    return supportPassiveCalled;
  }

  var innerHeight = window.innerHeight;
  window.addEventListener("resize", throttle(onResize));
  function getWindowInnerHeight() {
    return innerHeight;
  }

  function onResize() {
    innerHeight = window.innerHeight;
  }

  var scrollBehaviorSupported;
  function isScrollBehaviorSupported() {
    if (scrollBehaviorSupported === undefined) {
      scrollBehaviorSupported = "scrollBehavior" in document.documentElement.style;
    }

    return scrollBehaviorSupported;
  }

  var listeningToScroll = false;
  var scrollListeners = [];
  var lastScrollX = window.pageXOffset;
  var lastScrollY = window.pageYOffset;
  var scroll = {
    add: addScrollListener,
    remove: removeScrollListener,
    isContainerInView: isContainerInView,
    getScrollX: getScrollX,
    getScrollY: getScrollY,
    tween: tween,
    smoothY: smoothY
  };

  function scroll$1() {
    var scrollX = window.pageXOffset;
    var scrollY = window.pageYOffset;
    var currentListeners = scrollListeners.slice();

    for (var i = 0; i < currentListeners.length; ++i) {
      currentListeners[i]({
        scrollX: scrollX,
        lastScrollX: lastScrollX,
        scrollY: scrollY,
        lastScrollY: lastScrollY
      });
    }

    lastScrollX = scrollX;
    lastScrollY = scrollY;
  }

  function scrollListenerExists(fn) {
    return scrollListeners.indexOf(fn) > -1;
  }

  function removeScrollListener(fn) {
    var index = scrollListeners.indexOf(fn);
    if (index === -1) return;
    scrollListeners.splice(index, 1);
  }

  function addScrollListener(fn, immediate) {
    if (scrollListenerExists(fn)) return;
    scrollListeners.push(fn);

    if (immediate) {
      fn(lastScrollY, lastScrollY);
    }

    if (listeningToScroll) return;
    listeningToScroll = true;
    window.addEventListener("scroll", throttle(scroll$1, 70), passiveIfPossible());
  }

  function isContainerInView(container) {
    if (container) {
      var containerMiddle = container.getBoundingClientRect().top + container.offsetHeight / 2;

      if (containerMiddle > 0 && containerMiddle < getWindowInnerHeight()) {
        return true;
      }
    }

    return false;
  }

  function getScrollX() {
    return lastScrollX;
  }

  function getScrollY() {
    return lastScrollY;
  }

  function smoothY(y) {
    if (isScrollBehaviorSupported()) {
      window.scrollBy(null, y);
    } else {
      tween(window.pageYOffset, y, function (value) {
        window.scroll(null, value);
      });
    }
  }

  function tween(initial, target, fn, callback) {
    var SCROLL_DURATION = 30;
    var stepX = Math.PI / SCROLL_DURATION;
    var stepCount = 0;
    window.requestAnimationFrame(step);

    function step() {
      if (stepCount < SCROLL_DURATION) {
        stepCount++;
        var value = initial + target * 0.25 * Math.pow(1 - Math.cos(stepX * stepCount), 2);
        fn(Math.round(value));
        window.requestAnimationFrame(step);
      } else if (callback) {
        return callback();
      }
    }
  }

  var handlers = {};

  function publish(name, data) {
    var event = new window.CustomEvent(name, {
      detail: data
    });
    window.dispatchEvent(event);
  }

  function subscribe(name, handler) {
    var internalHandler = function internalHandler(_ref) {
      var detail = _ref.detail;
      return handler(detail);
    };

    handlers[name] = handlers[name] || [];
    handlers[name].push({
      handler: handler,
      internalHandler: internalHandler
    });
    window.addEventListener(name, internalHandler);
  }

  function unsubscribe(name, handler) {
    if (!handlers[name]) return;
    var handlerIndex = handlers[name].findIndex(function (x) {
      return x.handler === handler;
    });
    if (handlerIndex === -1) return;
    window.removeEventListener(name, handlers[name][handlerIndex].internalHandler);
    handlers[name].splice(handlerIndex, 1);
  }

  var pubsub = {
    publish: publish,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  };

  var STATE = {
    NONE: 0,
    BOTTOM_ALIGNED: 1,
    FIXED: 2
  };
  function outsiderAds() {
    var outsiderElements = Array.from(document.getElementsByClassName("outsider-ad"));
    if (outsiderElements.length === 0) return;
    var outsiders = outsiderElements.map(function (element) {
      return {
        ad: element.firstElementChild,
        ctx: element,
        state: STATE.NONE
      };
    });
    pubsub.subscribe("hideOutsiders", hideOutsiders);
    if (supportsSticky()) return;
    outsiderElements.forEach(transformToFallback);
    outsiderElements[0].classList.add("outsider-ad-fallback--first");
    scroll.add(checkOutsiders, true);

    function hideOutsiders(hide) {
      outsiders.forEach(function (outsider) {
        if (hide) {
          outsider.ad.classList.add("hidden");
        } else {
          outsider.ad.classList.remove("hidden");
        }
      });
    }

    function checkOutsiders() {
      var lastIndex = outsiders.length - 1;
      outsiders.forEach(function (outsider, index) {
        outsider.top = outsider.ctx.getBoundingClientRect().top;
        if (index !== lastIndex) outsider.adHeight = outsider.ad.getBoundingClientRect().height;
      });
      outsiders.forEach(function (outsider, index) {
        var followingOutsider = index === lastIndex ? null : outsiders[index + 1];
        var state = getOutsiderState(outsider, followingOutsider);
        setState(outsider, state);
      });
    }

    function getOutsiderState(outsider, followingOutsider) {
      if (followingOutsider && followingOutsider.top <= outsider.adHeight + STICKY_MENU_HEIGHT) {
        return STATE.BOTTOM_ALIGNED;
      }

      if (outsider.top <= STICKY_MENU_HEIGHT) {
        return STATE.FIXED;
      }

      return STATE.NONE;
    }

    function setState(outsider, state) {
      if (outsider.state === state) return;

      if (state === STATE.NONE) {
        outsider.ad.classList.remove("outsider-ad__fixed");
        outsider.ctx.classList.remove("outsider-ad-fallback--bottom-aligned");
      } else if (state === STATE.FIXED) {
        outsider.ad.classList.add("outsider-ad__fixed");
        outsider.ctx.classList.remove("outsider-ad-fallback--bottom-aligned");
      } else if (state === STATE.BOTTOM_ALIGNED) {
        outsider.ad.classList.remove("outsider-ad__fixed");
        outsider.ctx.classList.add("outsider-ad-fallback--bottom-aligned");
      }

      outsider.state = state;
    }
  }
  function reloadOutsider(number) {
    var stickyContext = document.getElementsByClassName("outsider-ad")[number - 1];
    if (!stickyContext) return;
    var adSlot = stickyContext.firstElementChild;
    if (!adSlot) return;
    var loadedAd = adSlot.firstElementChild;
    if (loadedAd) adSlot.removeChild(loadedAd);

    if (window.Bau) {
      if (window.Bau.displayAds) {
        window.Bau.displayAds(adSlot);
      } else if (window.DN.Raven) {
        window.DN.Raven.captureMessage("displayAds missing in window.Bau", {
          level: "error",
          stacktrace: true,
          extra: {
            bau: JSON.stringify(window.Bau),
            abt: window.DN.abt
          }
        });
      }
    }
  }

  function supportsSticky() {
    var testNode = document.createElement("div");
    return ["", "-webkit-", "-moz-", "-ms-"].some(function (prefix) {
      try {
        testNode.style.position = "".concat(prefix, "sticky");
      } catch (e) {// ignore
      }

      return testNode.style.position != ""; // eslint-disable-line eqeqeq
    });
  }

  function transformToFallback(context) {
    context.firstElementChild.classList.remove("outsider-ad__sticky");
    context.classList.remove("outsider-ad--first");
    context.classList.remove("outsider-ad--second");
    context.classList.add("outsider-ad-fallback");
  }

  var loadOffset = 400;
  var useObserver = "IntersectionObserver" in window;
  function lazyLoadAds(scope, infinityScroll) {
    if (!scope) return;
    window.Bau.push(function () {
      window.Bau.events.subscribe("slotRenderEnded", handleEmptyAds);
    });
    var config = {
      infinityScroll: infinityScroll
    };
    var adSlots = scope.getElementsByClassName("bam-ad-slot");
    var slotLength = adSlots.length;
    var observer = setupObserver();

    for (var i = 0; i < adSlots.length; i++) {
      lazyLoadAd(adSlots[i]);
    }

    function lazyLoadAd(adSlot) {
      if (observer) {
        return observer.observe(adSlot);
      }

      scroll.add(handleScroll, true);

      function handleScroll() {
        var bottomOffset = getWindowInnerHeight() + loadOffset;

        var _adSlot$getBoundingCl = adSlot.getBoundingClientRect(),
            top = _adSlot$getBoundingCl.top,
            bottom = _adSlot$getBoundingCl.bottom;

        if (bottom >= -loadOffset && top <= bottomOffset) {
          scroll.remove(handleScroll);
          displayAd(adSlot);
        }
      }
    }

    function setupObserver() {
      if (!useObserver) return;
      return new window.IntersectionObserver(viewPortUpdate, {
        rootMargin: "".concat(loadOffset, "px 0px")
      });

      function viewPortUpdate(entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);
            --slotLength;
            displayAd(entry.target);
            if (slotLength <= 0) observer.disconnect();
          }
        });
      }
    }

    function displayAd(adSlot) {
      var useInfinityScroll = config.infinityScroll;
      config.infinityScroll = undefined;
      window.Bau.push(function () {
        window.Bau.displayAds(adSlot, {
          infinityScroll: useInfinityScroll
        });
      });
    }

    function handleEmptyAds(adData) {
      if (!adData || !adData.name || adData.name.indexOf("rich_media") >= 0 || !adData.isEmpty) return;
      var element = document.getElementById(adData.id);
      if (!element) return;
      var adContainer = element.closest(".ad");
      adContainer.parentElement.removeChild(adContainer);
    }
  }

  window.Bau = window.Bau || [];
  function init$1(bamData) {
    if (!bamData || !window.DN.abt) return;
    var siteBody = document.getElementsByClassName("site-body")[0];

    if (!CHANNEL_MOBILE) {
      adResizer();
    }

    if (CHANNEL_RESPONSIVE) {
      outsiderAds();
    } else if (CHANNEL_DESKTOP) {
      outsiderAds();
    }

    lazyLoadAds(siteBody);

    function adResizer() {
      window.Bau.push(function () {
        init(window.Bau);
      });
    }
  }

  function init$2(selector) {
    if (isPreloadSupported()) return;
    var links = document.head.getElementsByClassName(selector);

    for (var i = 0; i < links.length; ++i) {
      var link = links[i];
      link.setAttribute("onload", "");
      link.rel = "stylesheet";
    }
  }

  function isPreloadSupported() {
    try {
      return document.createElement("link").relList.supports("preload");
    } catch (e) {
      return false;
    }
  }

  function setup() {
    var images = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!images.length) return;
    var loadOffset = getWindowInnerHeight();

    if ("IntersectionObserver" in window) {
      setupIntersectionObserver(images, loadOffset);
    } else {
      setupScrollListener(images, loadOffset);
    }
  }

  function loadImage(image) {
    var noscript = image.getElementsByTagName("noscript")[0];
    if (!noscript) return;
    image.insertAdjacentHTML("beforeend", noscript.textContent);
    noscript.parentElement.removeChild(noscript);
  }

  function setupIntersectionObserver(images, loadOffset) {
    var observer = new window.IntersectionObserver(viewPortUpdate, {
      rootMargin: "".concat(loadOffset, "px 0px"),
      threshold: 0.01
    });

    for (var i = 0; i < images.length; ++i) {
      observer.observe(images[i]);
    }

    function viewPortUpdate(entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
          loadImage(entry.target);
        }
      });
    }
  }

  function setupScrollListener(elements, loadOffset) {
    var viewportHeight = getWindowInnerHeight();
    var initialScrollPosition = window.pageYOffset;
    var scrolledDistance = {
      startPosition: initialScrollPosition,
      highest: initialScrollPosition,
      lowest: initialScrollPosition
    };
    var pendingImages = {};
    init();

    function init() {
      var images = [];

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        var _element$getBoundingC = element.getBoundingClientRect(),
            top = _element$getBoundingC.top,
            bottom = _element$getBoundingC.bottom;

        images.push({
          element: element,
          top: top,
          bottom: bottom
        });
      }

      sortImages(images);
      scroll.add(handleScroll);
    }

    function reset(scrollPosition) {
      var scrollPositionDelta = scrolledDistance.startPosition - scrollPosition;
      scrolledDistance.startPosition = scrollPosition;
      scrolledDistance.highest = scrollPosition;
      scrolledDistance.lowest = scrollPosition;
      var allPendingImages = pendingImages.above.concat(pendingImages.below);
      var images = [];

      for (var i = 0; i < allPendingImages.length; ++i) {
        var _allPendingImages$i = allPendingImages[i],
            element = _allPendingImages$i.element,
            top = _allPendingImages$i.top,
            bottom = _allPendingImages$i.bottom;
        images.push({
          element: element,
          top: top + scrollPositionDelta,
          bottom: bottom + scrollPositionDelta
        });
      }

      sortImages(images);
    }

    function sortImages(images) {
      var above = [];
      var below = [];

      for (var i = 0; i < images.length; ++i) {
        var image = images[i];
        var viewportDelta = signViewportDelta(image.top, image.bottom);

        if (!viewportDelta) {
          loadImage(image.element);
        } else if (viewportDelta > 0) {
          below.push(image);
        } else {
          above.push(image);
        }
      }

      pendingImages.above = above.sort(function (a, b) {
        return a.top - b.top;
      });
      pendingImages.below = below.sort(function (a, b) {
        return b.bottom - a.bottom;
      });
    }

    function signViewportDelta(top, bottom) {
      var value = 0;
      if (bottom < -loadOffset) --value;
      if (top > loadOffset + viewportHeight) ++value;
      return Math.sign(value);
    }

    function handleScroll(_ref) {
      var scrollY = _ref.scrollY,
          lastScrollY = _ref.lastScrollY;
      if (alreadyVisited(scrollY)) return;
      var scrollingDown = scrollY > lastScrollY;
      var unexpectedDelta = scrollingDown ? -1 : 1;
      var collection = scrollingDown ? pendingImages.below : pendingImages.above;
      var firstLoopIndex = collection.length - 1;

      for (var i = firstLoopIndex; i >= 0; --i) {
        var element = collection[i].element;

        var _element$getBoundingC2 = element.getBoundingClientRect(),
            top = _element$getBoundingC2.top,
            bottom = _element$getBoundingC2.bottom;

        var viewportDelta = signViewportDelta(top, bottom);
        if (i === firstLoopIndex && viewportDelta === unexpectedDelta) return reset(scrollY);
        if (viewportDelta) return;
        loadImage(element);
        collection.pop();
      }

      if (!pendingImages.above.length && !pendingImages.below.length) {
        scroll.remove(handleScroll);
      }
    }

    function alreadyVisited(currentPosition) {
      var lowest = Math.min(currentPosition, scrolledDistance.lowest);

      if (lowest === currentPosition) {
        scrolledDistance.lowest = lowest;
        return false;
      }

      var highest = Math.max(currentPosition, scrolledDistance.highest);

      if (highest === currentPosition) {
        scrolledDistance.highest = highest;
        return false;
      }

      return true;
    }
  }

  function isElementInViewport(element, offset) {
    var rect = element.getBoundingClientRect();
    return !(rect.bottom < 0 - offset || rect.top > window.innerHeight + offset);
  }

  function getUserId() {
    if (window.DN && window.DN.userInfo) {
      return "splus.".concat(window.DN.userInfo.userId);
    }

    return window.DN.randomSplusId;
  }

  function fetchPersonalized(contentId) {
    return window.fetch("".concat(window.DN.meta.bangPersonalizedUrl, "/recommendations/").concat(getUserId(), "?entityId=").concat(contentId), {
      method: "POST"
    }).then(function (response) {
      return response.json();
    }).catch(function () {});
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var initiatedScripts = [];
  var loadedScripts = [];
  var sources = []; // example data: [{src:"twitter.js", queue:[tweet1,tweet2,tweet3]}, {src:"arkku.js", queue:[arkku1]}]

  function scriptLoader(src) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var queueItem = {};
    var promise = new Promise(function (resolve, reject) {
      queueItem.resolve = resolve;
      queueItem.reject = reject;
    });
    var source = sources.find(function (x) {
      return x.src === src;
    });

    if (source) {
      source.queue.push(queueItem);
    } else {
      sources.push({
        src: src,
        queue: [queueItem]
      });
    }

    if (loadedScripts.indexOf(src) > -1) {
      consumeQueue();
    } else if (initiatedScripts.indexOf(src) === -1) {
      initiatedScripts.push(src);
      loadScript().then(function () {
        loadedScripts.push(src);
        consumeQueue();
      }).catch(function () {
        initiatedScripts.splice(initiatedScripts.indexOf(src), 1);
        queueItem.reject();
      });
    }

    return promise;

    function consumeQueue() {
      var queue = sources.find(function (x) {
        return x.src === src;
      }).queue;

      while (queue.length) {
        var item = queue.shift();
        item.resolve();
      }
    }

    function loadScript() {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        script.setAttribute("async", "async");
        Object.keys(options.attributes || []).forEach(function (key) {
          return script.setAttribute(key, options.attributes[key]);
        });
        document.body.appendChild(script);
      });
    }
  }

  function getQueryParam(param) {
    if (!window.location.search) return;
    var match = new RegExp("[?&]".concat(param, "=([^&]*)"), "i").exec(window.location.search);
    return match && match[1].replace(/\+/g, " ");
  }

  var knownReferrers = [{
    url: "facebook.com",
    utmTag: "facebook"
  }, {
    url: "www.facebook.com",
    utmTag: "facebook"
  }];
  var userInfo = window.DN.userInfo || {};
  function paywall(article) {
    var paywallEl = article.getElementsByClassName("paywall")[0];
    return new Promise(init);

    function init(resolve) {
      if (!paywallEl) return;
      var enabled = enableScript(); // This is for making the paywall testable :p

      paywallEl.setAttribute("data-load", enabled);

      if (!enabled) {
        pubsub.publish("paywall:showPremiumContent");
        return resolve(false);
      }

      var $;
      var timeout;
      injectScript();

      function injectScript() {
        var trackingData = buildTrackingData();
        timeout = window.setTimeout(onFail, 15000);
        scriptLoader(window.DN.jQuery).then(function () {
          $ = window.$;
          addExternalEventListeners();
          var _paywallEl$dataset = paywallEl.dataset,
              scriptTagId = _paywallEl$dataset.scriptTagId,
              scriptSrc = _paywallEl$dataset.scriptSrc,
              appId = _paywallEl$dataset.appId,
              resourceId = _paywallEl$dataset.resourceId,
              clientId = _paywallEl$dataset.clientId,
              articleType = _paywallEl$dataset.articleType,
              articleWrapper = _paywallEl$dataset.articleWrapper,
              paywallHolder = _paywallEl$dataset.paywallHolder,
              paywallName = _paywallEl$dataset.paywallName,
              loginUrl = _paywallEl$dataset.loginUrl,
              fallbackBuyUrl = _paywallEl$dataset.fallbackBuyUrl,
              forceHit = _paywallEl$dataset.forceHit;
          return scriptLoader(scriptSrc, {
            attributes: {
              id: scriptTagId,
              "data-appid": appId,
              "data-resourceid": resourceId,
              "data-clientid": clientId,
              "data-idtoken": userInfo.idToken || "",
              "data-article-type": articleType,
              "data-wrapper": articleWrapper,
              "data-holder": paywallHolder,
              "data-tags": JSON.stringify(trackingData),
              "data-paywall": paywallName,
              "data-loginurl": loginUrl,
              "data-fallback-buyurl": fallbackBuyUrl,
              "data-forcehit": forceHit
            }
          });
        }).catch(onFail);
      }

      function enableScript() {
        var paywallName = paywallEl.getAttribute("data-paywall-name");
        if (getQueryParam("forceScript") === "1" && getQueryParam("variantType") === paywallName) return true;
        if (getQueryParam("hidePromo")) return false; // TODO: Quick fix until app login works again

        var accessRestriction = paywallEl.getAttribute("data-access");
        var userIsAuthenticated = window.DN && window.DN.hasAccessToken;
        if (!userIsAuthenticated) return accessRestriction === "limited" || accessRestriction === "locked";
        var userHasFullAccess = window.DN && window.DN.userInfo && window.DN.userInfo.accountLevel !== "Gratis";
        if (userHasFullAccess) return false;
        var shouldShowLimitedPaywall = accessRestriction === "limited" && !userHasFullAccess;
        var shouldShowLockedPaywall = accessRestriction === "locked" && !userHasFullAccess;
        return shouldShowLimitedPaywall || shouldShowLockedPaywall;
      }

      function onFail() {
        removeExternalEventListeners();
        resolve(false);
      }

      function getHostnameFromUrl(url) {
        var urlElement = document.createElement("a");
        urlElement.href = url;
        return urlElement.hostname;
      }

      function buildTrackingData() {
        var trackingData = {
          referrer: document.referrer,
          utmTag: ""
        };

        if (getQueryParam("utm_source")) {
          trackingData.utmTag = window.location.href;
        } else {
          var referrerHostname = getHostnameFromUrl(trackingData.referrer);
          var referrer = knownReferrers.find(function (r) {
            return r.url === referrerHostname;
          });

          if (referrer) {
            trackingData.utmTag = referrer.utmTag; // This is sent to S+ to enable different paywalls if the user comes from a known referrer.
          }
        }

        return trackingData;
      }

      function addExternalEventListeners() {
        $(document).on("hidePremiumContent", onPaywallResult);
        $(document).on("showPremiumContent", onPaywallResult);
      }

      function removeExternalEventListeners() {
        if (!$) return;
        $(document).off("hidePremiumContent", onPaywallResult);
        $(document).off("showPremiumContent", onPaywallResult);
      }

      function onPaywallResult(ev) {
        window.clearTimeout(timeout);

        if (ev.type === "hidePremiumContent") {
          pubsub.publish("paywall:hidePremiumContent");
          resolve(true);
        } else if (ev.type === "showPremiumContent") {
          pubsub.publish("paywall:showPremiumContent");
          resolve(false);
        }
      }
    }
  }

  var scrollPosition;
  function disableScroll() {
    scrollPosition = window.pageYOffset;

    if (isScrollBehaviorSupported()) {
      document.documentElement.style.scrollBehavior = "unset";
    }

    document.body.style.position = "fixed";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflowY = "scroll";
    document.body.style.top = "".concat(-scrollPosition, "px");
  }
  function enableScroll() {
    document.body.style.position = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflowY = "";
    document.body.style.top = "";
    window.scroll(0, scrollPosition);

    if (isScrollBehaviorSupported()) {
      document.documentElement.style.scrollBehavior = "";
    }
  }

  function slider(container) {
    if (!container) return;
    var itemContainer = container.getElementsByClassName("slideshow__items")[0];
    var items = itemContainer && itemContainer.children;
    if (!items) return;
    var itemsCount = items.length;
    var defaultDuration = 300;
    var currentIndex = 0;
    var measurementsTaken = false;
    var itemContainerWidth = itemContainer.getBoundingClientRect().width;
    var lastItemOffset;
    var isFullscreen = false;
    var keyPressed = false;
    var _slider = {
      itemsCount: itemsCount,
      slideToNext: slideToNext,
      slideToPrevious: slideToPrevious,
      slideToIndex: slideToIndex,
      toggleFullscreen: toggleFullscreen,
      addKeyListener: addKeyListener,
      removeKeyListener: removeKeyListener
    };
    init();
    return _slider;

    function init() {
      initSwipeControls();
      itemContainer.addEventListener("click", function (e) {
        if (e.target.closest(".video__container")) return;
        toggleUI();
      });
      itemContainer.style.webkitTransitionDuration = itemContainer.style.transitionDuration = "".concat(defaultDuration, "ms");

      if (CHANNEL_RESPONSIVE) {
        window.addEventListener("channelchange", invalidateMeasurements);
      }
    }

    function slideToNext() {
      slideToIndex(currentIndex + 1);
    }

    function slideToPrevious() {
      slideToIndex(currentIndex - 1);
    }

    function slideToIndex(index) {
      var targetIndex = clampIndex(index);
      handleSingleItemInView(targetIndex);
      var previousIndex = currentIndex;
      currentIndex = targetIndex;

      if (isFullscreen) {
        toggleCurrentImageSource(currentIndex);
      }

      pubsub.publish("slideChange", {
        index: currentIndex,
        currentSlide: items[currentIndex],
        previousSlide: items[previousIndex]
      });
    }

    function handleSingleItemInView(index) {
      var targetPosition = getPosition(index);
      itemContainer.style.webkitTransform = itemContainer.style.transform = "translateX(".concat(targetPosition, "%)");
    }

    function getPosition(index) {
      var position = -(index * 100);

      if (isLastIndex(index)) {
        takeMeasurements();
        return position + lastItemOffset;
      }

      return position;
    }

    function isLastIndex(index) {
      return index === itemsCount - 1;
    }

    function clampIndex(index) {
      if (index >= itemsCount) return 0;
      if (index < 0) return itemsCount - 1;
      return index;
    }

    function invalidateMeasurements() {
      measurementsTaken = false;
    }

    function takeMeasurements() {
      if (measurementsTaken) return;
      measurementsTaken = true;
      lastItemOffset = getLastItemOffset();

      function getLastItemOffset() {
        itemContainerWidth = itemContainer.getBoundingClientRect().width;
        var containerWidth = container.getBoundingClientRect().width;
        if (containerWidth <= itemContainerWidth) return 0;
        var marginWidth = parseInt(window.getComputedStyle(items[items.length - 1]).getPropertyValue("border-right-width"));
        return (containerWidth - (itemContainerWidth - marginWidth)) / itemContainerWidth * 100;
      }
    }

    function toggleFullscreen() {
      container.classList.toggle("slideshow--fullscreen");
      container.classList.remove("slideshow--hide-ui");
      isFullscreen = !isFullscreen;

      if (isFullscreen) {
        disableScroll();
        toggleLazyImageSources();
        toggleCurrentImageSource(currentIndex);
        addKeyListener();
      } else {
        enableScroll();
        removeKeyListener();
      }
    }

    function handleKeyDown(ev) {
      ev.stopPropagation();
      if (keyPressed) return; // second option is IE specific

      if (ev.key === "Escape" || ev.key === "Esc") {
        toggleFullscreen();
      } else if (ev.key === "ArrowRight" || ev.key === "Right") {
        keyPressed = true;
        slideToNext();
      } else if (ev.key === "ArrowLeft" || ev.key === "Left") {
        keyPressed = true;
        slideToPrevious();
      }
    }

    function handleKeyUp() {
      keyPressed = false;
    }

    function toggleLazyImageSources() {
      var noscripts = itemContainer.getElementsByTagName("noscript");
      if (!noscripts.length) return;

      for (var i = 0; i < noscripts.length; i++) {
        var noscript = noscripts[i];
        var imageContainer = noscript.closest(".slideshow__image");
        var originalSource = imageContainer.getAttribute("data-original-src");
        imageContainer.classList.add(imageContainer.getAttribute("data-image-parent-class"));
        noscript.textContent = "<img class=\"".concat(imageContainer.getAttribute("data-image-class"), "\" src=\"").concat(originalSource, "\">");
      }
    }

    function toggleCurrentImageSource(index) {
      var item = items[index];
      var imageContainer = item.getElementsByClassName("slideshow__image")[0];
      if (!imageContainer) return;
      var originalSource = imageContainer.getAttribute("data-original-src");
      if (!originalSource) return;
      imageContainer.removeAttribute("data-original-src");
      var images = imageContainer.getElementsByTagName("img");

      var _loop = function _loop(i) {
        var image = images[i];
        var tempImage = document.createElement("img");
        tempImage.addEventListener("load", function () {
          image.src = originalSource;
          image.removeAttribute("srcset");
        });
        tempImage.src = originalSource;
      };

      for (var i = 0; i < images.length; i++) {
        _loop(i);
      }
    }

    function toggleUI() {
      if (isFullscreen) {
        container.classList.toggle("slideshow--hide-ui");
      }
    }

    function initSwipeControls() {
      var start;
      var delta;
      var notPassive = passiveIfPossible(false);
      itemContainer.addEventListener("touchstart", onStart, notPassive);

      function onStart(event) {
        var touchEvent = event.touches ? event.touches[0] : event;
        start = {
          x: touchEvent.pageX,
          y: touchEvent.pageY,
          position: getPosition(currentIndex),
          time: Date.now()
        };
        window.addEventListener("touchmove", onFirstMove, notPassive);
      }

      function onFirstMove(event) {
        window.removeEventListener("touchmove", onFirstMove, notPassive); // ensure swiping with one touch and not pinching

        if (event.touches.length > 1 || event.scale && event.scale !== 1) return;
        var touchEvent = event.touches[0];
        var isScrolling = Math.abs(touchEvent.pageX - start.x) < Math.abs(touchEvent.pageY - start.y);
        if (isScrolling) return;
        event.preventDefault();
        window.addEventListener("touchmove", onMove, notPassive);
        window.addEventListener("touchend", onEnd);
        itemContainer.style.webkitTransitionDuration = itemContainer.style.transitionDuration = "0s";
      }

      function onMove(event) {
        event.preventDefault(); // prevent native scrolling
        // measure change in x and y

        var touchEvent = event.touches[0];
        delta = touchEvent.pageX - start.x; // we add an edge slide resistance to swipe

        if (isPastBounds()) {
          delta = delta / (Math.abs(delta) / itemContainerWidth + 1);
        }

        var targetPosition = start.position + delta / itemContainerWidth * 100;
        itemContainer.style.webkitTransform = itemContainer.style.transform = "translateX(".concat(targetPosition, "%)");
      }

      function onEnd() {
        window.removeEventListener("touchmove", onMove, notPassive);
        window.removeEventListener("touchend", onEnd);
        var direction = !isSwipe() || isPastBounds() ? 0 : Math.sign(delta);
        var duration = Math.min(Date.now() - start.time, 300);
        itemContainer.style.webkitTransitionDuration = itemContainer.style.transitionDuration = "".concat(duration, "ms");
        slideToIndex(currentIndex - direction);
        start = undefined;
        delta = undefined;
      }

      function isSwipe() {
        if (!delta) return false;
        var duration = Date.now() - start.time;
        var isQuickSwipe = parseInt(duration, 10) < 250 && Math.abs(delta) > 40;
        var isLongSwipe = Math.abs(delta) > itemContainerWidth / 2;
        return isQuickSwipe || isLongSwipe;
      }

      function isPastBounds() {
        if (delta > 0 && currentIndex === 0) return true;
        return delta < 0 && currentIndex === itemsCount - 1;
      }
    }

    function addKeyListener() {
      if (CHANNEL_DESKTOP) {
        if (!isFullscreen) return;
        window.addEventListener("keydown", handleKeyDown, true);
        window.addEventListener("keyup", handleKeyUp);
      }
    }

    function removeKeyListener() {
      if (CHANNEL_DESKTOP) {
        window.removeEventListener("keydown", handleKeyDown, true);
        window.removeEventListener("keyup", handleKeyUp);
      }
    }
  }

  var CURRENT_CLASS = "slideshow__bullet--current";
  function sliderBullets(bulletContainer) {
    if (!bulletContainer) return;
    var bullets = bulletContainer && bulletContainer.children;
    if (!bullets) return;
    pubsub.subscribe("slideChange", setCurrent);

    function setCurrent(_ref) {
      var index = _ref.index;

      for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];

        if (i === index) {
          bullet.classList.add(CURRENT_CLASS);
        } else {
          bullet.classList.remove(CURRENT_CLASS);
        }
      }
    }
  }

  function parseCookie(cookie) {
    return cookie.split(";").reduce(function (acc, part) {
      var _part$split = part.split("="),
          _part$split2 = _slicedToArray(_part$split, 2),
          key = _part$split2[0],
          val = _part$split2[1];

      acc[key.trim()] = val === undefined ? true : val;
      return acc;
    }, {});
  }

  var burtSegmentsLocalStorageKey = "burtSegments";
  var player;
  function screen9Player(screen9) {
    if (player) return player;
    player = init$3(screen9);
    return player;
  }

  function init$3(screen9) {
    return {
      getBurtSegments: function getBurtSegments() {
        if (!window.DN.hasLocalStorage) return "";
        return window.localStorage.getItem(burtSegmentsLocalStorageKey) || "";
      },
      getSettingsValue: function getSettingsValue(_ref) {
        var mediaId = _ref.mediaId,
            title = _ref.title;
        return "".concat(encodeURIComponent(mediaId), ",").concat(encodeURIComponent(title), ",").concat(this.getBurtSegments());
      },
      getAdSettings: function getAdSettings(options) {
        return {
          ooyala: {
            tags: [this.getSettingsValue(options)]
          }
        };
      },
      getVastSettings: function getVastSettings(article) {
        var custParams = [];
        var ta = parseCookie(document.cookie)._ta_ || getQueryParam("_ta_");

        if (ta) {
          custParams.push("_ta_=".concat(ta));
        }

        var burtSegments = this.getBurtSegments();

        if (burtSegments) {
          custParams.push("bi=".concat(burtSegments));
        }

        var descriptionUrl = article ? encodeURIComponent("https://www.dn.se".concat(article.getAttribute("data-url"))) : "";
        return {
          extraParams: {
            "cust_params": encodeURIComponent(custParams.join("&")),
            "description_url": descriptionUrl
          }
        };
      },
      embed: function embed(item, onSuccess, onFail) {
        var article = item.closest(".article");
        var mediaId = item.getAttribute("data-media-id");
        var title = item.getAttribute("data-title");
        var autoPlay = item.getAttribute("data-auto-play");
        var poster = item.getAttribute("data-poster");
        var isNative = item.getAttribute("data-is-native");
        var ratio = item.getAttribute("data-ratio") || 9 / 16;
        var authToken = isNative ? window.DN.meta.screen9.nativeToken : window.DN.meta.screen9.token;
        var options = {
          mediaid: mediaId,
          containerid: item.id,
          autoplay: autoPlay === "true",
          ajaxauth: authToken,
          poster: poster || "",
          ratio: ratio,
          muted: autoPlay === "true",
          vastSettings: this.getVastSettings(article),
          adSettings: this.getAdSettings({
            mediaId: mediaId,
            title: title
          })
        };
        screen9.api.embed(options, function (data) {
          if (onSuccess) onSuccess(data);
        }, onFail);
      }
    };
  }

  var selectors = {
    container: "video",
    player: "video__player"
  };
  var screen9;
  var id = 0;
  var players = [];
  function videoPlayer(article) {
    var videos = Array.from(article.getElementsByClassName(selectors.container));
    if (!videos.length) return;
    var embedPromises = videos.map(embed);
    Promise.all(embedPromises).then(function () {
      pubsub.publish("articleVideosLoaded");
    });

    function embed(container) {
      return new Promise(function (resolve) {
        var playerElement = container.getElementsByClassName(selectors.player)[0];
        if (!playerElement) resolve();
        scriptLoader(window.DN.screen9).then(function () {
          if (!screen9) screen9 = screen9Player(window.screen9);
          playerElement.id = "video-".concat(++id);
          screen9.embed(playerElement, function (data) {
            var player = data.player;

            if (player) {
              players.push({
                playerElementId: playerElement.id,
                player: player
              });
              bindFullscreenEvents(player);
            }

            resolve();
          });
        }).catch();
      });

      function bindFullscreenEvents(player) {
        player.bind(window.screen9.player.Event.PLAYER_FULLSCREEN, function () {
          pubsub.publish("articleVideoFullscreenEnter");
        });
        player.bind(window.screen9.player.Event.PLAYER_FULLSCREEN_EXIT, function () {
          pubsub.publish("articleVideoFullscreenExit");
        });
      }
    }
  }
  function togglePaused(playerElementId) {
    var player = players.find(function (p) {
      return p.playerElementId === playerElementId;
    }).player;

    if (player && player.api) {
      player.api.pause();
    }
  }

  function setup$1(context) {
    var containers = context.getElementsByClassName("slideshow");
    if (!containers.length) return;

    for (var i = 0; i < containers.length; ++i) {
      slideshow(containers[i]);
    }
  }
  function slideshow(container) {
    var _slider = slider(container);

    if (!_slider) return;
    pubsub.subscribe("slideChange", toggleVideoStates);
    pubsub.subscribe("articleVideoFullscreenEnter", function () {
      _slider.removeKeyListener();
    });
    pubsub.subscribe("articleVideoFullscreenExit", function () {
      _slider.addKeyListener();
    });
    sliderBullets(container.getElementsByClassName("slideshow__bullets")[0]);
    slideshowControls(container.getElementsByClassName("slideshow__arrow"), _slider);
    slideshowFullscreen(container.getElementsByClassName("slideshow__fullscreen-button")[0], _slider);
    slideshowFullscreen(container.getElementsByClassName("slideshow__close")[0], _slider);
    return _slider;

    function toggleVideoStates(_ref) {
      var currentSlide = _ref.currentSlide,
          previousSlide = _ref.previousSlide;
      var currentSlidePlayerId = getScreen9PlayerId(currentSlide);
      var previousSlidePlayerId = getScreen9PlayerId(previousSlide);
      if (currentSlidePlayerId) togglePaused(currentSlidePlayerId);
      if (previousSlidePlayerId) togglePaused(previousSlidePlayerId);
    }

    function getScreen9PlayerId(element) {
      if (!element) return null;
      var videoWrapper = element.getElementsByClassName("video-wrapper")[0];
      if (!videoWrapper) return null;
      var screen9player = videoWrapper.getElementsByClassName("s9-modern")[0];
      if (!screen9player) return null;
      return screen9player.id;
    }
  }

  function slideshowControls(buttons, _slider) {
    if (buttons.length !== 2) return;
    buttons[0].addEventListener("click", _slider.slideToPrevious);
    buttons[1].addEventListener("click", _slider.slideToNext);
  }

  function slideshowFullscreen(button, _slider) {
    if (!button) return;
    button.addEventListener("click", _slider.toggleFullscreen);
  }

  var selector = "fact-box";
  function setup$2(scope) {
    var factBoxes = scope.getElementsByClassName(selector);
    if (!factBoxes.length) return;

    for (var i = 0, len = factBoxes.length; i < len; i++) {
      var factBox = factBoxes[i];

      if (validFactBox(factBox)) {
        init$4(factBox);
      }
    }

    function validFactBox(factBox) {
      if (factBox.classList.contains("".concat(selector, "--expanded"))) {
        return false;
      }

      var container = factBox.getElementsByClassName("".concat(selector, "__container"))[0];
      return container && container.getBoundingClientRect().height > 500;
    }
  }

  function init$4(factBox) {
    var controls = factBox.getElementsByClassName("".concat(selector, "__controls"))[0];
    var button = controls.getElementsByTagName("button")[0];
    if (!button || !controls) return;
    controls.classList.remove("hidden");
    var buttonText = button.getElementsByTagName("span")[0];
    var expandedClass = "".concat(selector, "--expanded");
    var expanded = false;
    button.addEventListener("click", function () {
      expanded = !expanded;

      if (expanded) {
        factBox.classList.add(expandedClass);
      } else {
        factBox.classList.remove(expandedClass);
      }

      buttonText.innerHTML = getButtonText(expanded);
    });

    function getButtonText(state) {
      return state ? "Visa mindre" : "Visa mer";
    }
  }

  var othersAreReadingMarkup = function othersAreReadingMarkup(articlesMarkup) {
    return "\n  <div class=\"others-are-reading\">\n    <h2>Andra l\xE4ser.</h2>\n    ".concat(articlesMarkup, "\n  </div>\n");
  };

  function setup$3(personalized, articleEl) {
    if (!personalized || !personalized.dividerIds) return;
    var article = articleEl || document.getElementsByClassName("article")[0];

    if (!article || article.getAttribute("data-content-type") === "nativead") {
      return;
    }

    fetchDividerArticles().then(function (dividerArticles) {
      if (dividerArticles.length < 3) {
        return;
      }

      var articlesMarkup = "";
      dividerArticles.forEach(function (articleMarkup) {
        articlesMarkup += articleMarkup;
      });
      article.insertAdjacentHTML("beforeend", othersAreReadingMarkup(articlesMarkup));
    });

    function fetchDividerArticles() {
      var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (personalized.dividerIds.length === 0) {
        return Promise.resolve(results);
      }

      var idsToFetch = personalized.dividerIds.slice(0, 3 - results.length);
      personalized.dividerIds = personalized.dividerIds.slice(3 - results.length);
      var articleRequests = idsToFetch.map(function (articleId) {
        return fetchDividerArticle(articleId);
      });
      return Promise.all(articleRequests).then(function (articleResults) {
        articleResults.forEach(function (articleResult) {
          if (articleResult) {
            results.push(articleResult);
          }
        });

        if (results.length === 3) {
          return results;
        }

        return fetchDividerArticles(results);
      });
    }
  }

  function fetchDividerArticle(articleId) {
    return window.fetch("/others-are-reading-article/".concat(articleId, "?v=").concat(window.DN.meta.version), {
      credentials: "same-origin"
    }).then(function (response) {
      if (response.status < 400) {
        return response.text();
      }

      return null;
    }).catch(function () {});
  }

  var nativeTopBarClassName = "article__native-top-bar-wrapper";
  var stickyClass = "".concat(nativeTopBarClassName, "--sticky");
  var nativeDisclaimerClassName = "article__disclaimer";
  function stickyNativeTopBar(article) {
    var nativeTopBar = article.getElementsByClassName(nativeTopBarClassName)[0];
    if (!nativeTopBar) return;
    var disclaimer = article.getElementsByClassName(nativeDisclaimerClassName)[0];
    var nativeArticleInViewport;
    setupScrollListener();

    function hideOutsider(hide) {
      if (nativeArticleInViewport === hide) return;
      nativeArticleInViewport = hide;
      pubsub.publish("hideOutsiders", hide);
    }

    function setupScrollListener() {
      scroll.add(handleScroll, true);

      function handleScroll() {
        setStickyTopBar(nativeTopBar.getBoundingClientRect());
        checkDisclaimer(disclaimer.getBoundingClientRect());
        hideOutsider(isInViewport(article.getBoundingClientRect()));
      }
    }

    function isInViewport(_ref) {
      var top = _ref.top,
          bottom = _ref.bottom;
      return bottom > STICKY_MENU_HEIGHT && top < getWindowInnerHeight();
    }

    function setStickyTopBar(_ref2) {
      var top = _ref2.top;

      if (topBarShouldBeSticky(top)) {
        nativeTopBar.classList.add(stickyClass);
      } else {
        nativeTopBar.classList.remove(stickyClass);
      }
    }

    function topBarShouldBeSticky(top) {
      return top <= STICKY_MENU_HEIGHT;
    }

    function checkDisclaimer(_ref3) {
      var bottom = _ref3.bottom;

      if (bottom <= getWindowInnerHeight()) {
        nativeTopBar.classList.remove(stickyClass);
      }
    }
  }

  var twttr;
  function twitter(article) {
    var tweets = Array.from(article.getElementsByClassName("tweet"));
    if (!tweets.length) return;
    scriptLoader(window.DN.twttr).then(function () {
      twttr = window.twttr;
      tweets.forEach(embed);
    }).catch();

    function embed(item) {
      if (!twttr) {
        return;
      }

      var href = item.getAttribute("href");
      var matches = href.match(/https:\/\/(?:www.)?twitter\.com\/([/|\w]*)/);
      var split = matches[1].split("/");
      if (!split.length) return;
      var id = split[split.length - 1];
      twttr.widgets.createTweet(id, item).then(function () {
        var span = item.getElementsByTagName("span")[0];
        item.removeChild(span);
      }).catch();
    }
  }

  function facebook(article) {
    var facebookEmbeds = article.getElementsByClassName("facebook-embed");
    if (!facebookEmbeds.length) return;
    /* note: facebook embeds require that the script has the id "facebook-jssdk" */

    var options = {
      attributes: {
        id: "facebook-jssdk"
      }
    };
    scriptLoader("https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v3.0", options).catch();
  }

  function instagram(article) {
    var instagramEmbeds = article.getElementsByClassName("instagram");
    if (!instagramEmbeds.length) return;
    scriptLoader("https://www.instagram.com/embed.js").catch();
  }

  function scribble(article) {
    var scribbles = Array.from(article.getElementsByClassName("scribble"));
    if (!scribbles.length) return;
    var options = {
      attributes: {
        id: "scrbbl-js"
      }
    }; // this id is required because the official Scribble embed.js does `getElementById("scrbbl-js")`

    scriptLoader("https://embed.scribblelive.com/widgets/embed.js", options).then(function () {
      scribbles.forEach(embed);
    }).catch();

    function embed(item) {
      var iframe = item.getElementsByTagName("iframe")[0];
      if (!iframe) return;

      iframe.onload = function (ev) {
        ev.target.parentElement.classList.add("embed-widget--iframe-loaded");
      };
    }
  }

  var iFrameResize;
  var loadOffset$1 = 25;
  var iframeRatios = [];
  function arkku(article) {
    var arkkuWidgets = Array.from(article.getElementsByClassName("arkku"));
    if (!arkkuWidgets.length) return;
    scriptLoader("https://ext.dn.se/qs/widgets/arkku2.0/iframeresizer/iframeResizer.min.js").then(function () {
      iFrameResize = window.iFrameResize;
      arkkuWidgets.forEach(embed);
      bindListeners();
    }).catch();

    function embed(widget) {
      if (!iFrameResize) return;
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", widget.getAttribute("data-src"));
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("allowvr", "true");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("style", "border: 0; min-width: 100%; width: 100px;");

      iframe.onload = function (ev) {
        ev.target.parentElement.classList.add("embed-widget--iframe-loaded");
        bindScrollListener(widget, ev.target);
      };

      widget.appendChild(iframe);
      iFrameResize({
        log: false,
        checkOrigin: false
      }, iframe);
    }

    function bindListeners() {
      if (!iFrameResize) return;
      window.addEventListener("message", function (ev) {
        if (!ev.data.ratio || !ev.data.location) return;
        arkkuWidgets.forEach(function (item) {
          if (item.getAttribute("data-src") === ev.data.location) {
            setIframeHeight(item, ev.data);
            iframeRatios[ev.data.location] = ev.data;
          }
        });
      });
      window.addEventListener("resize", throttle(function () {
        if (!iframeRatios.length) return;
        arkkuWidgets.forEach(function (item) {
          var iframeData = iframeRatios[item.getAttribute("data-src")];
          if (iframeData) setIframeHeight(item, iframeData);
        });
      }));
    }

    function setIframeHeight(widget, iframeData) {
      widget.getElementsByTagName("iframe")[0].height = Math.round(iframeData.ratio * widget.offsetWidth);
    }

    function bindScrollListener(widget, iframe) {
      scroll.add(handleScroll, true);
      var hasScrolledIntoView;

      function handleScroll() {
        var contentWindow = iframe.contentWindow;
        if (!contentWindow) return;

        if (!hasScrolledIntoView && isScrolledIntoView(widget)) {
          hasScrolledIntoView = true;
          contentWindow.postMessage({
            isScrolledIntoView: hasScrolledIntoView
          }, "*");
        } else if (hasScrolledIntoView && isScrolledOutOfView(widget)) {
          hasScrolledIntoView = false;
          contentWindow.postMessage({
            isScrolledIntoView: hasScrolledIntoView
          }, "*");
        }
      }
    }

    function isScrolledIntoView(element) {
      var bottomOffset = getWindowInnerHeight() + loadOffset$1;

      var _element$getBoundingC = element.getBoundingClientRect(),
          top = _element$getBoundingC.top,
          bottom = _element$getBoundingC.bottom;

      return bottom >= 0 && top <= bottomOffset;
    }

    function isScrolledOutOfView(element) {
      var bottomOffset = getWindowInnerHeight() + loadOffset$1;

      var _element$getBoundingC2 = element.getBoundingClientRect(),
          top = _element$getBoundingC2.top,
          bottom = _element$getBoundingC2.bottom;

      return bottom < 0 || top > bottomOffset;
    }
  }

  function facebook$1(article) {
    var infograms = article.getElementsByClassName("infogram");
    if (!infograms.length) return;
    /* infogram-script requires id `infogram-async` for embedding to function.
    The script must be loaded from the same domain as infogram's content, because it uses relative links */

    var options = {
      attributes: {
        id: "infogram-async"
      }
    };
    scriptLoader("https://e.infogram.com/js/dist/embed-loader-min.js", options).catch();
  }

  function iframeLoader(item, iframeOptions) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", item.getAttribute("data-src"));
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    Object.keys(iframeOptions || []).forEach(function (key) {
      return iframe.setAttribute(key, iframeOptions[key]);
    });

    iframe.onload = function (ev) {
      ev.target.parentElement.classList.add("embed-widget--iframe-loaded");
    };

    item.appendChild(iframe);
  }

  function spotify(article) {
    var spotifyWidgets = Array.from(article.getElementsByClassName("spotify"));
    spotifyWidgets.forEach(function (widget) {
      return iframeLoader(widget, {
        allow: "encrypted-media",
        style: "border: 0; width: 100%; height: 380px;"
      });
    });
  }

  function trackWatchlistEvent() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var tagId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var tagLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var watchlistEvent = {
      event: "Watchlist",
      eventInfo: {
        action: action,
        tagId: tagId,
        tagLabel: tagLabel
      }
    };
    window.dataLayer.push(watchlistEvent);
  }

  function trackMenuClick() {
    var linkType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var linkLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var menuClickEvent = {
      event: "Menu Click",
      eventInfo: {
        linkType: linkType,
        linkLabel: linkLabel
      }
    };
    window.dataLayer.push(menuClickEvent);
  }

  function trackSocialEvent() {
    var socialNetwork = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var socialAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var socialTarget = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var socialEvent = {
      event: "Social Event",
      eventInfo: {
        socialNetwork: socialNetwork,
        socialAction: socialAction,
        socialTarget: socialTarget
      }
    };
    window.dataLayer.push(socialEvent);
  }

  function trackWatchlistClickEvent() {
    var linkPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var linkType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var linkContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var linkContentLabel = arguments.length > 3 ? arguments[3] : undefined;
    var linkContentId = arguments.length > 4 ? arguments[4] : undefined;
    var followableLabel = arguments.length > 5 ? arguments[5] : undefined;
    var followableId = arguments.length > 6 ? arguments[6] : undefined;
    var throwInsOnStartPageEvent = {
      event: "Watchlist Click",
      eventInfo: {
        linkPosition: linkPosition,
        linkType: linkType,
        linkContext: linkContext,
        linkContentLabel: linkContentLabel,
        linkContentId: linkContentId,
        linkTagLabel: followableLabel,
        linkTagId: followableId
      }
    };
    window.dataLayer.push(throwInsOnStartPageEvent);
  }

  function trackWatchlistLinkEvent() {
    var eventLabel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var watchlistLinkEvent = {
      event: "Google Analytics Event",
      eventInfo: {
        eventCategory: "Interaction",
        eventAction: "Start Page Carousel",
        eventLabel: eventLabel,
        nonInteraction: false
      }
    };
    window.dataLayer.push(watchlistLinkEvent);
  }

  function trackLoginModalClick() {
    var eventCategory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var eventAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var eventLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var nonInteraction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var loginModalEvent = {
      event: "Google Analytics Event",
      eventInfo: {
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel,
        nonInteraction: nonInteraction
      }
    };
    window.dataLayer.push(loginModalEvent);
  }

  function trackFollowLinks(container, target) {
    if (!container) return;
    var facebookLink = container.getElementsByClassName("sharing__facebook")[0];
    var twitterLink = container.getElementsByClassName("sharing__twitter")[0];
    var emailLink = container.getElementsByClassName("sharing__email")[0];
    var commentLink = container.getElementsByClassName("sharing__comment")[0];

    if (facebookLink) {
      facebookLink.addEventListener("click", function () {
        trackSocialEvent("Facebook", "Share", target);
      });
    }

    if (twitterLink) {
      twitterLink.addEventListener("click", function () {
        trackSocialEvent("Twitter", "Share", target);
      });
    }

    if (emailLink) {
      emailLink.addEventListener("click", function () {
        trackSocialEvent("Email", "Share", target);
      });
    }

    if (commentLink) {
      commentLink.addEventListener("click", function () {
        trackSocialEvent("Ifrågasätt", "Comment", target);
      });
    }
  }

  function sharing (article) {
    trackEvents();
    var commentsDisclaimer = article.getElementsByClassName("comments-disclaimer")[0];
    if (!commentsDisclaimer) return;
    var commentButtons = Array.from(article.getElementsByClassName("sharing__comment"));
    if (!commentButtons.length) return;
    commentButtons.forEach(init);

    function init(el) {
      el.addEventListener("click", function () {
        var target = commentsDisclaimer.getBoundingClientRect().top - STICKY_MENU_HEIGHT;
        scroll.smoothY(target);
      });
    }

    function trackEvents() {
      var articleSharings = Array.from(article.getElementsByClassName("sharing"));
      articleSharings.forEach(function (articleSharing) {
        trackFollowLinks(articleSharing, "Article");
      });
    }
  }

  function radioPlay(article) {
    var radioPlayWidgets = Array.from(article.getElementsByClassName("embed-widget--radioplay"));
    radioPlayWidgets.forEach(function (widget) {
      return iframeLoader(widget, {
        style: "border: 0; width: 100%;"
      });
    });
  }

  function dataLayerPush(data) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }

  var userAgent = window.navigator && window.navigator.userAgent;
  function getDeviceOS() {
    if (!userAgent) return;

    if (/iPhone/i.test(userAgent) || /iPad/i.test(userAgent)) {
      return "ios";
    } else if (/android/i.test(userAgent)) {
      return "android";
    }
  }

  var LOCAL_STORAGE_KEY = "openInApp";
  function openInApp(article) {
    var container = article.getElementsByClassName("open-in-app")[0];
    if (!container) return;
    var item = getLocalStorage() || {};
    if (shouldHide(item)) return removeContainer();
    var device = getDeviceOS();
    if (!device) return removeContainer();
    var content = article.getElementsByClassName("article__content")[0];
    var articleId = container.getAttribute("data-article-id");
    var visibleClass = "open-in-app--visible";
    init();

    function init() {
      var button = container.getElementsByClassName("open-in-app__close")[0];
      button.addEventListener("click", function () {
        container.classList.remove(visibleClass);
        window.setTimeout(function () {
          removeContainer();
        }, 1000);
        setLocalStorage();
        dataLayerPush({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Interaction",
            eventAction: "Mobil Öppna i appen-knapp",
            eventLabel: "Öppna i appen - Stäng",
            nonInteraction: false
          }
        });
      });
      var link = container.getElementsByClassName("open-in-app__link")[0];
      link.addEventListener("click", function () {
        dataLayerPush({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Interaction",
            eventAction: "Mobil Öppna i appen-knapp",
            eventLabel: "Öppna i appen - Öppna",
            nonInteraction: false
          }
        });
      });
      link.setAttribute("href", getLinkUrl());

      if ("IntersectionObserver" in window) {
        setupIntersectionObserver();
      } else {
        setupScrollListener();
      }

      function setupIntersectionObserver() {
        var observer = new window.IntersectionObserver(viewPortUpdate, {
          rootMargin: "0px"
        });
        observer.observe(content);

        function viewPortUpdate(entries) {
          entries.forEach(function (entry) {
            setVisibility(entry.intersectionRatio > 0);
          });
        }
      }

      function setupScrollListener() {
        scroll.add(handleScroll, true);
        var wasIntersecting = false;

        function handleScroll() {
          var _content$getBoundingC = content.getBoundingClientRect(),
              top = _content$getBoundingC.top,
              bottom = _content$getBoundingC.bottom;

          var topIntersecting = top >= 0 && top <= getWindowInnerHeight();
          var bottomIntersecting = bottom >= 0 && bottom <= getWindowInnerHeight();
          var isIntersecting = topIntersecting || bottomIntersecting;

          if (wasIntersecting !== isIntersecting) {
            wasIntersecting = isIntersecting;
            setVisibility(isIntersecting);
          }
        }
      }

      function setVisibility(show) {
        if (show) {
          container.classList.add(visibleClass);
        } else {
          container.classList.remove(visibleClass);
        }
      }

      function getLinkUrl() {
        if (device === "ios") {
          return "dagensnyheter://article?origin=dnweb&id=".concat(articleId, "&ct=open-in-app-button-1");
        } else if (device === "android") {
          return "intent://article?origin=dnweb&id=".concat(articleId, "#Intent;scheme=dagensnyheter;package=se.dn;end");
        }
      }

      function setLocalStorage() {
        if (!window.DN.hasLocalStorage) return;
        var clickCount = item.clickCount ? item.clickCount + 1 : 1;
        var date = new Date();
        var hideUntil = new Date(date.setDate(date.getDate() + 5)).toISOString();
        var storage = JSON.stringify({
          clickCount: clickCount,
          hideUntil: hideUntil
        });

        try {
          window.DN.setLocalStorageItem(LOCAL_STORAGE_KEY, storage);
        } catch (error) {// ignore
        }
      }
    }

    function removeContainer() {
      container.parentElement.removeChild(container);
    }

    function getLocalStorage() {
      if (!window.DN.hasLocalStorage) return;
      return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || null);
    }

    function shouldHide(_ref) {
      var hideUntil = _ref.hideUntil;
      return hideUntil >= new Date().toISOString();
    }
  }

  function comments(article) {
    var commentContainer = article.getElementsByClassName("comments-container")[0];
    if (!commentContainer) return;
    var scriptSrc = commentContainer.getAttribute("data-script-src");
    scriptLoader(scriptSrc).catch();
  }

  function setup$4(context) {
    var bodyImageSlideShows = Array.from(document.getElementsByClassName("slideshow--inline"));
    if (!bodyImageSlideShows.length) return;

    var _slideshow = slideshow(bodyImageSlideShows[0]);

    var articleImages = Array.from(context.getElementsByClassName("article__img--body"));
    articleImages.forEach(function (articleImage) {
      articleImage.addEventListener("click", function (e) {
        e.preventDefault();
        var targetImage = e.target.closest(".article__img");

        _slideshow.slideToIndex(articleImages.indexOf(targetImage));

        _slideshow.toggleFullscreen();
      });
    });
  }

  // Sets vh on IOS excluding address bar
  // Use calc(var(--vh, 1vh) * 100) in CSS where you wanna use it
  function mobileVh() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
  }

  function setup$5(container) {
    var players = Array.from(container.getElementsByClassName("audio"));
    if (!players.length) return;
    players.forEach(function (player) {
      audioPlayer(player);
    });
  }
  /*
    About the implementation:
    Range-sliders can't use decimal values, so our range-sliders uses ints (0-100)
    The audio-element uses decimal values (0-1)

    The variable names should reflect this. Example:
    - volumeDecimal is a float between 0 to 1, where half is 0.5
    - volumeInt is an integer between 0 to 100 where half is 50
  */

  function audioPlayer(playerElement) {
    var player = playerElement,
        playToggleButton = player.querySelector(".audio__toggle-play-pause"),
        muteToggleButton = player.querySelector(".audio__mute-toggle"),
        volumeSlider = player.querySelector(".audio__slider--volume"),
        timeSlider = player.querySelector(".audio__slider--time"),
        elapsedTimeEl = player.querySelector(".audio__time-current"),
        totalTimeEl = player.querySelector(".audio__time-total"),
        settings = {
      volumeDecimal: 0.7
    },
        playerInternals = {
      isLoaded: false,
      startPlaybackAtPercentage: 0,
      currentDurationSecond: 0
    };
    var audio = new Audio();
    audio.preload = "none";
    audio.src = player.getAttribute("data-audio-src");
    audio.addEventListener("timeupdate", audioElementTimeUpdated);
    audio.addEventListener("ended", audioEnded);
    audio.addEventListener("playing", playingEventHandler);
    var shouldUpdateProgressBarColorWithJs = !isMozillaOrMicrosoft();
    playToggleButton.addEventListener("click", playToggle); // There are tons of browser-bugs regarding range slider events.
    // The keep-it-simple solution is to support both
    // IE11 needs the "change" event
    // Chrome needs the "input" event

    timeSlider.addEventListener("input", timeSliderRangeChanged, false);
    timeSlider.addEventListener("change", timeSliderRangeChanged, false);

    if (volumeSlider) {
      volumeSlider.addEventListener("input", volumeSliderRangeChanged);
      muteToggleButton.addEventListener("click", muteToggle);
      audio.volume = settings.volumeDecimal;
      setRangeProgress(volumeSlider, audio.volume);
    }

    function volumeSliderRangeChanged(e) {
      var volumePercentInt = e.target.value;
      var volumeDecimal = volumePercentInt / 100;
      settings.volumeDecimal = volumeDecimal;

      if (volumeDecimal <= 0.01) {
        audio.volume = 0;
        volumeSlider.value = 0;
        muteToggleButton.classList.add("audio__mute-toggle--muted");
      } else {
        if (audio.muted) audio.muted = false;
        audio.volume = volumeDecimal;
        muteToggleButton.classList.remove("audio__mute-toggle--muted");
      }

      setRangeProgress(volumeSlider, volumeDecimal, true);
    }

    function timeSliderRangeChanged(rangeEvent) {
      var timePercentInt = rangeEvent.target.value;

      var canPlayThroughEventHandler = function canPlayThroughEventHandler() {
        if (playerInternals.startPlaybackAtPercentage > 0) {
          //Skip to a future time
          audio.currentTime = audio.duration * (playerInternals.startPlaybackAtPercentage / 100);
          playerInternals.startPlaybackAtPercentage = null;
          audio.removeEventListener("canplaythrough", canPlayThroughEventHandler, false);
          updateDurationTimestamp();
        }
      };

      if (audio.currentTime) {
        // Ensure audio has loaded
        audio.currentTime = audio.duration * (timePercentInt / 100);
      } else {
        playerInternals.startPlaybackAtPercentage = timePercentInt;
        audio.load();
        audio.addEventListener("canplaythrough", canPlayThroughEventHandler, false);
      }

      setRangeProgress(rangeEvent.target, rangeEvent.target.value / 100, true);
    } // Can be used for multiple sliders (both the volume-slider and time-slider)


    function setRangeProgress(target, decimalValue) {
      var hasAlreadySetValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!target || decimalValue < 0.0 || decimalValue > 1.0) {
        return;
      }

      if (shouldUpdateProgressBarColorWithJs) {
        target.style.setProperty("--audioTimeProgress", +decimalValue); // updates the color of the progress-bar
      } //If the caller has already changed the range-slider's value (like during an onChange event) - there's no need to do it again


      if (!hasAlreadySetValue) {
        var integerValue = decimalValue * 100;
        target.value = integerValue; // changes the placement of the thumb
      }
    }

    function muteToggle() {
      var volumePercentDecimal = 0;

      if (audio.muted) {
        audio.muted = false;
        volumePercentDecimal = settings.volumeDecimal;
        muteToggleButton.classList.remove("audio__mute-toggle--muted");
      } else {
        audio.muted = true;
        muteToggleButton.classList.add("audio__mute-toggle--muted");
      }

      setRangeProgress(volumeSlider, volumePercentDecimal);
    }

    function playToggle() {
      if (audio.paused) {
        audio.play();

        if (playerInternals.isLoaded) {
          playToggleButton.classList.add("audio__toggle-play-pause--playing");
        } else {
          //first switch to loading icon, then switch again during the event when the playback starts
          playToggleButton.classList.add("audio__toggle-play-pause--loading");
        }
      } else {
        audio.pause();
        playToggleButton.classList.remove("audio__toggle-play-pause--playing");
      }
    }

    function updateDurationTimestamp() {
      var mins = Math.floor(audio.duration / 60);
      var secs = Math.floor(audio.duration - mins * 60);
      secs < 10 && (secs = "0".concat(secs));
      totalTimeEl.innerHTML = "".concat(mins, ":").concat(secs);
    }

    function audioElementTimeUpdated(e) {
      if (audio.readyState === 0) {
        return;
      }

      var currentSecond = Math.floor(audio.currentTime);

      if (playerInternals.currentDurationSecond !== currentSecond) {
        updateProgressTimestamp();
        var progressPercentage = e.target.currentTime / e.target.duration;
        setRangeProgress(timeSlider, progressPercentage);
      }

      playerInternals.currentDurationSecond = currentSecond;
    }

    function updateProgressTimestamp() {
      var elapsedMinutes = Math.floor(audio.currentTime / 60);
      var elapsedSeconds = Math.floor(audio.currentTime - elapsedMinutes * 60);
      elapsedSeconds < 10 && (elapsedSeconds = "0".concat(elapsedSeconds));
      elapsedTimeEl.innerHTML = "".concat(elapsedMinutes, ":").concat(elapsedSeconds);
    }

    function audioEnded() {
      playToggleButton.classList.remove("audio__toggle-play-pause--playing");
    }

    function playingEventHandler() {
      if (playerInternals.isLoaded) return;
      playToggleButton.classList.remove("audio__toggle-play-pause--loading");
      playToggleButton.classList.add("audio__toggle-play-pause--playing");
      playerInternals.isLoaded = true;
    }

    function isMozillaOrMicrosoft() {
      //The progress bar is colored with CSS only for moz-range-track and ms-track, so we only need to color it with JS for other browsers
      var isFirefox = typeof InstallTrigger !== "undefined";
      if (isFirefox) return true;
      var isIE =
      /*@cc_on!@*/
      !!document.documentMode;
      if (isIE) return true;
      var isEdge = !isIE && !!window.StyleMedia;
      if (isEdge) return true;
      return false;
    }
  }

  function setup$6(article, personalized) {
    setup$1(article);
    videoPlayer(article);
    setup$2(article);
    twitter(article);
    facebook(article);
    instagram(article);
    scribble(article);
    arkku(article);
    facebook$1(article);
    radioPlay(article);
    spotify(article);
    sharing(article);
    comments(article);
    setup$5(article);
    var lead = article.getElementsByClassName("article__lead")[0];
    var premiumContent = article.getElementsByClassName("article__premium-content")[0];
    pubsub.subscribe("paywall:hidePremiumContent", function () {
      if (lead) lead.parentElement.classList.add("article__content--locked");
      if (premiumContent) premiumContent.classList.add("hidden");
    });
    pubsub.subscribe("paywall:showPremiumContent", function () {
      if (lead) lead.parentElement.classList.remove("article__content--locked");
      if (premiumContent) premiumContent.classList.remove("hidden");
    });
    if (!CHANNEL_DESKTOP) openInApp(article);

    if (article.getAttribute("data-content-type") === "nativead") {
      stickyNativeTopBar(article);
    }

    if (article.classList.contains("article--long-read")) {
      setup$4(article);

      if (CHANNEL_MOBILE) {
        mobileVh(article);
        var gdprHeader = document.getElementsByClassName("gdpr-header")[0];

        if (gdprHeader) {
          document.documentElement.style.setProperty("--headerHeight", "286px");
        } else {
          document.documentElement.style.setProperty("--headerHeight", "177px");
        }
      }
    }

    if (personalized) {
      setup$3(personalized, article);
    } else {
      return paywall(article);
    }
  }

  function pageView(gtmData) {
    if (!gtmData) {
      return;
    }

    var testGroupEl = document.getElementsByClassName("pumba");

    if (testGroupEl.length > 0) {
      gtmData.testGroups = testGroupEl[0].getAttribute("data-test-group");
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(gtmData);
  }

  function handleWithRaven(error) {
    if (window.DN.Raven) {
      window.DN.Raven.captureException(error);
    }
  }

  function dateFromDays(days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }

  function triggerAccessTokenRefresh() {
    document.cookie = "accessToken$expires=".concat(Date.now(), "; path=/; expires=").concat(dateFromDays(365).toUTCString());
  }

  function getEnvironment() {
    return window.DN && window.DN.meta && window.DN.meta.environment;
  }

  function isFailover() {
    return getEnvironment() === "failover";
  }

  var localStorageFallback;
  var promise;
  function getPersonalized() {
    if (!promise) {
      promise = updatePersonalized().then(function () {
        var personalized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        promise = null;
        var querySegments = getQueryParam("userSegments");

        if (querySegments) {
          personalized.userSegments = personalized.userSegments.concat(querySegments.split(","));
        }

        return personalized;
      });
    }

    return promise;
  }

  function updatePersonalized() {
    if (!window.DN.userInfo) {
      return Promise.resolve();
    }

    if (!localStorageFallback) {
      localStorageFallback = {
        userId: window.DN.userInfo.userId,
        bookmarks: [],
        watching: [],
        userSegments: []
      };
    }

    var personalizedFromLocalStorage = getPersonalizedFromLocalStorage();
    if (!hasExpired(personalizedFromLocalStorage) || isFailover()) return Promise.resolve(personalizedFromLocalStorage);
    var eTag = personalizedFromLocalStorage && personalizedFromLocalStorage.eTag;
    var headers = eTag ? {
      "If-None-Match": eTag
    } : {};
    var options = {
      method: "GET",
      credentials: "include",
      headers: headers
    };
    return window.fetch("".concat(window.DN.meta.bangPersonalizedUrl, "/user/splus.").concat(window.DN.userInfo.userId), options).then(function (response) {
      if (response.status === 304) return null;
      if (response.status === 404) return null; // Expected when new user is not synced to NAV yet.

      if (response.status === 401) return triggerAccessTokenRefresh();
      if (response.ok) return response.json();

      if (window.DN.Raven) {
        window.DN.Raven.captureMessage("".concat(response.status, " GET personalized"), {
          level: "error",
          stacktrace: false,
          extra: {
            url: "".concat(window.DN.meta.bangPersonalizedUrl, "/user/splus.{userId}")
          }
        });
      }
    }).then(function (personalized) {
      if (personalized) {
        personalized.bookmarks = personalized.bookmarks.map(function (_ref) {
          var entityId = _ref.entityId;
          return entityId;
        });
        personalized.watching = personalized.watching.map(function (_ref2) {
          var entityIds = _ref2.entityIds,
              watchId = _ref2.watchId;
          return {
            entityId: entityIds[0],
            watchId: watchId
          };
        });
        personalized.userSegments = personalized.userSegments.map(function (_ref3) {
          var segmentId = _ref3.segmentId;
          return segmentId;
        });
      } else {
        personalized = personalizedFromLocalStorage;
      }

      personalized.updated = Date.now();
      storePersonalized(personalized);
      return personalized;
    }).catch(handleWithRaven);
  }

  function postWatchToApi(watch) {
    return postToApi("".concat(window.DN.meta.bangPersonalizedUrl, "/watch/splus.").concat(window.DN.userInfo.userId), watch);
  }
  function postBookmarkToApi(bookmark) {
    return postToApi("".concat(window.DN.meta.bangPersonalizedUrl, "/bookmark/splus.").concat(window.DN.userInfo.userId), bookmark);
  }

  function postToApi(url, data) {
    var options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    return window.fetch(url, options).then(function (response) {
      if (response.status === 202) return;
      if (response.ok) return response.json();

      if (window.DN.Raven) {
        window.DN.Raven.captureMessage("".concat(response.status, " POST personalized"), {
          level: "error",
          stacktrace: false,
          extra: {
            url: response.url.replace(window.DN.userInfo.userId, "{userId}")
          }
        });
      }
    }).catch(handleWithRaven);
  }

  function storePersonalized(personalized) {
    if (!window.DN.hasLocalStorage) {
      localStorageFallback = personalized;
      return;
    }

    try {
      window.DN.setLocalStorageItem("personalized", JSON.stringify(personalized));
    } catch (error) {
      localStorageFallback = personalized;
    }
  }
  function getPersonalizedFromLocalStorage() {
    if (!window.DN.hasLocalStorage) return localStorageFallback;

    try {
      var personalized = JSON.parse(window.localStorage.getItem("personalized"));

      if (!personalized.bookmarks) {
        personalized.bookmarks = [];
      }

      if (!personalized.watching) {
        personalized.watching = [];
      }

      if (!personalized.userSegments) {
        personalized.userSegments = [];
      }

      return personalized;
    } catch (error) {
      return localStorageFallback;
    }
  }

  function hasExpired(personalized) {
    if (!personalized || !personalized.updated) return true;
    return Date.now() - personalized.updated >= 5 * 60 * 1000;
  }

  function clearPersonalized() {
    try {
      window.localStorage.removeItem("personalized");
    } catch (error) {// ignore
    }
  }

  var uiElements = [];

  function watchlistInit(personalized, triggerElements) {
    if (!triggerElements || triggerElements.length === 0) return;
    uiElements = uiElements.concat(triggerElements);
    syncUiElements(personalized);
  }

  function toggleWatch(element) {
    var entityId = element.getAttribute("data-entity-id");
    if (!entityId) return Promise.resolve();
    var watchId = element.getAttribute("data-watch-id");
    var personalized = getPersonalizedFromLocalStorage();
    var entityTagLabel = element.getAttribute("data-tag");
    var entitynNewsletterLabel = element.getAttribute("data-newsletter");
    var entityAuthorLabel = element.getAttribute("data-author");

    if (watchId) {
      trackUnfollowEvent();
      return removeWatch();
    }

    if (!hasEntityId()) {
      trackFollowEvent();
      return addNewWatch();
    }

    return Promise.resolve();

    function trackUnfollowEvent() {
      if (entityTagLabel) {
        trackWatchlistEvent("Unfollow Subject", entityId, entityTagLabel);
      } else if (entityAuthorLabel) {
        trackWatchlistEvent("Unfollow Author", entityId, entityAuthorLabel);
      } else if (entitynNewsletterLabel) {
        trackWatchlistEvent("Unfollow Newsletter", entityId, entitynNewsletterLabel);
      }
    }

    function trackFollowEvent() {
      if (entityTagLabel) {
        trackWatchlistEvent("Follow Subject", entityId, entityTagLabel);
      } else if (entityAuthorLabel) {
        trackWatchlistEvent("Follow Author", entityId, entityAuthorLabel);
      } else if (entitynNewsletterLabel) {
        trackWatchlistEvent("Follow Newsletter", entityId, entitynNewsletterLabel);
      }
    }

    function addNewWatch() {
      if (isFailover()) return Promise.reject();
      return postWatchToApi({
        entityIds: [entityId],
        notifyOptions: []
      }).then(addToLocalStorage).then(syncUiElements);
    }

    function removeWatch() {
      if (isFailover()) return Promise.reject();
      return postWatchToApi({
        watchId: watchId,
        entityIds: [],
        notifyOptions: []
      }).then(removeFromLocalStorage).then(syncUiElements);
    }

    function hasEntityId() {
      if (!personalized) return false;
      return personalized.watching.some(function (watch) {
        return watch.entityId === entityId;
      });
    }

    function addToLocalStorage(watch) {
      if (!watch || !watch.watchId || !watch.entityIds || !personalized) return Promise.reject();
      personalized.watching.push({
        entityId: watch.entityIds[0],
        watchId: watch.watchId
      });
      personalized.watchCount = personalized.watching.length;
      storePersonalized(personalized);
      return personalized;
    }

    function removeFromLocalStorage() {
      if (!personalized) return Promise.reject();
      var currentWatch = personalized.watching.find(function (watch) {
        return watch.watchId === watchId;
      });

      if (currentWatch) {
        personalized.watching.splice(personalized.watching.indexOf(currentWatch), 1);
        personalized.watchCount = personalized.watching.length;
        storePersonalized(personalized);
      }

      return personalized;
    }
  }

  function syncUiElements(personalized) {
    if (!personalized) return;

    if (window.DN.updateFollowButtons) {
      window.DN.updateFollowButtons(personalized, uiElements);
      updateWatchCountElement(personalized.watchCount);
    }
  }

  function updateWatchCountElement(watchCount) {
    if (typeof watchCount === "undefined" || watchCount === null) return;
    var followWatchCount = Array.from(document.getElementsByClassName("watch-count"));
    followWatchCount.forEach(function (item) {
      item.innerHTML = "(".concat(watchCount, ")");
    });
  }

  var uiElements$1 = [];

  function bookmarksInit(personalized, triggerElements) {
    if (!triggerElements || triggerElements.length === 0) return;
    uiElements$1 = uiElements$1.concat(triggerElements);
    syncUiElements$1(personalized);
  }

  function toggleBookmark(element) {
    var entityId = element.getAttribute("data-entity-id");
    var entityLabel = element.getAttribute("data-title");
    if (!entityId) return Promise.resolve();
    var personalized = getPersonalizedFromLocalStorage();

    if (isBookmarked()) {
      trackWatchlistEvent("Unsave Article", entityId, entityLabel);
      return removeBookmark();
    }

    trackWatchlistEvent("Save Article", entityId, entityLabel);
    return addNewBookmark();

    function isBookmarked() {
      if (!personalized) return false;
      return personalized.bookmarks.indexOf(entityId) > -1;
    }

    function addNewBookmark() {
      if (isFailover()) return Promise.reject();
      return postBookmarkToApi({
        entityId: entityId,
        operation: "add"
      }).then(addToLocalStorage).then(syncUiElements$1).catch(function () {});
    }

    function removeBookmark() {
      if (isFailover()) return Promise.reject();
      return postBookmarkToApi({
        entityId: entityId,
        operation: "remove"
      }).then(removeFromLocalStorage).then(syncUiElements$1).catch(function () {});
    }

    function addToLocalStorage(bookmark) {
      if (!bookmark || !bookmark.entityId) return Promise.reject();
      if (!personalized) return Promise.reject();
      personalized.bookmarks.unshift(bookmark.entityId); // Most recently saved should be listed first

      storePersonalized(personalized);
      return personalized;
    }

    function removeFromLocalStorage() {
      if (!personalized) return Promise.reject();
      var existingIndex = personalized.bookmarks.indexOf(entityId);
      if (existingIndex < 0) return;
      personalized.bookmarks.splice(existingIndex, 1);
      storePersonalized(personalized);
      return personalized;
    }
  }

  function syncUiElements$1(personalized) {
    if (!personalized) return;

    if (window.DN.updateBookmarkButtons) {
      window.DN.updateBookmarkButtons(personalized, uiElements$1);
    }
  }

  var follow = {
    init: init$5,
    setupFollowButtons: setupFollowButtons
  };

  function init$5() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    if (!window.DN || !window.DN.hasAccessToken || !window.DN.userInfo || !window.DN.userInfo.userId) return;
    var followButtons = Array.from(context.getElementsByClassName("button--follow"));
    var bookmarkButtons = Array.from(context.getElementsByClassName("bookmark--save"));
    if (followButtons.length + bookmarkButtons.length === 0) return;
    getPersonalized().then(function (personalized) {
      watchlistInit(personalized, followButtons);
      bookmarksInit(personalized, bookmarkButtons);
      setupFollowButtons(followButtons);
      bookmarkButtons.forEach(function (element) {
        var bookmarkDone = function bookmarkDone() {
          element.removeAttribute("disabled");
          if (!element.classList.contains("bookmark--saved")) return;
          pubsub.publish("setToasterMessage", {
            message: "Artikel sparad. ",
            linkText: "Gå till sparade artiklar",
            link: "/sparade-artiklar"
          });
        };

        var bookmarkRejected = function bookmarkRejected() {
          element.removeAttribute("disabled");
          pubsub.publish("setToasterMessage", {
            message: "Det går just nu inte att spara artiklar.",
            error: true
          });
        };

        element.addEventListener("click", function () {
          element.setAttribute("disabled", "disabled");
          toggleBookmark(element).then(bookmarkDone, bookmarkRejected);
        });
      });
    });
  }

  function setupFollowButtons(followButtons) {
    if (followButtons.length === 0) return;
    getPersonalized().then(function (personalized) {
      watchlistInit(personalized, followButtons);
      followButtons.forEach(function (element) {
        var followDone = function followDone() {
          element.removeAttribute("disabled");
          if (!element.classList.contains("button--following")) return;
          var author = element.getAttribute("data-author");

          if (author) {
            return pubsub.publish("setToasterMessage", {
              message: "Du f\xF6ljer nu skribenten ".concat(author.toUpperCase(), ".")
            });
          }

          var tag = element.getAttribute("data-tag");

          if (tag) {
            return pubsub.publish("setToasterMessage", {
              message: "Du f\xF6ljer nu \xE4mnet ".concat(tag.toUpperCase(), ".")
            });
          }
        };

        var followRejected = function followRejected() {
          element.removeAttribute("disabled");
          var author = element.getAttribute("data-author");

          if (author) {
            return pubsub.publish("setToasterMessage", {
              message: "Det går just nu inte att följa skribenter.",
              error: true
            });
          }

          var tag = element.getAttribute("data-tag");

          if (tag) {
            return pubsub.publish("setToasterMessage", {
              message: "Det går just nu inte att följa ämnen.",
              error: true
            });
          }
        };

        element.addEventListener("click", function () {
          element.setAttribute("disabled", "disabled");
          toggleWatch(element).then(followDone, followRejected);
        });
      });
    });
  }

  function initModal(modalEl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$disableScroll = _ref.disableScroll,
        disableScroll$1 = _ref$disableScroll === void 0 ? true : _ref$disableScroll;

    if (!modalEl) return;
    var containerEl = modalEl.getElementsByClassName("modal__container")[0] || modalEl.firstElementChild;
    containerEl.addEventListener("click", function (e) {
      return e.stopPropagation();
    });
    var closeEl = Array.from(containerEl.getElementsByClassName("modal__close"));
    var elements = closeEl.concat(modalEl);
    return {
      open: open,
      close: close
    };

    function open() {
      modalEl.classList.remove("hidden");
      if (disableScroll$1) disableScroll();
      elements.forEach(function (el) {
        return el.addEventListener("click", close);
      });
      if (CHANNEL_DESKTOP) window.addEventListener("keyup", keyClose);
    }

    function close(event) {
      if (event) event.stopPropagation();
      elements.forEach(function (el) {
        return el.removeEventListener("click", close);
      });
      if (CHANNEL_DESKTOP) window.removeEventListener("keyup", keyClose);
      enableScroll();
      modalEl.classList.add("hidden");
      pubsub.publish("modal.closed", {
        event: event
      });
    }

    function keyClose(event) {
      if (event.key === "Escape") close();
    }
  }

  var activeElements = [];
  var modal;
  function alertModal() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    if (window.DN && window.DN.hasAccessToken) return;

    if (!modal) {
      var modalEl = context.getElementsByClassName("alert-modal")[0];
      modal = initModal(modalEl);
    }

    openModalOnClick();

    function openModalOnClick() {
      var bookmark = Array.from(context.getElementsByClassName("bookmark--save"));
      var tagArticle = Array.from(context.getElementsByClassName("button--follow"));
      var triggerElements = bookmark.concat(tagArticle);
      triggerElements.forEach(function (element) {
        if (activeElements.includes(element)) return;
        element.addEventListener("click", function (event) {
          event.preventDefault();
          modal.open();
          trackClickInModal();
        });
        activeElements.push(element);
      });
    }

    function trackClickInModal() {
      var actionButtons = Array.from(document.getElementsByClassName("button"));
      actionButtons.forEach(function (button) {
        var eventAction;

        if (button.classList.contains("button--login")) {
          eventAction = "Login Click";
        } else if (button.classList.contains("button--create-account")) {
          eventAction = "Create Account Click";
        } else if (button.classList.contains("button--order")) {
          eventAction = "Get Subscription Click";
        } else {
          return;
        }

        addClickListener(button, eventAction);
      });

      function addClickListener(element, eventAction) {
        element.addEventListener("click", function () {
          trackLoginModalClick("Interaction", eventAction, "Login Modal", false);
        });
      }
    }
  }

  function init$6() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var articlePreview = Array.from(context.getElementsByClassName("next-article-preview"));
    articlePreview.forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToArticle(element);
      });
    });
  }

  function scrollToArticle(element) {
    var nextArticleId = element.getAttribute("data-id");
    var nextArticle = document.getElementById(nextArticleId);
    var nextArticlePosition = nextArticle.getBoundingClientRect().top - STICKY_MENU_HEIGHT;
    scroll.smoothY(nextArticlePosition);
  }

  var path = window.location.pathname;
  function continuousScroll(personalized) {
    if (!personalized || !personalized.scrollIds || !personalized.nativeAdScrollIds) return;
    var scrollIds = shouldShowNativeAd() ? personalized.nativeAdScrollIds.concat(personalized.scrollIds) : personalized.scrollIds;
    var storedScrollIds = scrollIds.slice(0);
    var container = document.getElementById("lazy-container");
    if (!container) return;
    var topArticle = document.getElementsByClassName("article")[0];
    if (!topArticle) return;
    topArticle.classList.add("article--focus");
    if (isPrinting()) return;
    if (!window.fetch) return;
    var currentArticleLinkUrl = path;

    var visitedArticles = _defineProperty({}, topArticle.id, true);

    loadNextArticle();
    scroll.add(handleScroll(topArticle));

    function loadNextArticle() {
      fetchNextArticle().then(function (articleMarkup) {
        if (!articleMarkup) {
          return;
        }

        var allArticles = document.getElementsByClassName("article");
        var latestArticle = allArticles[allArticles.length - 1];
        container.insertAdjacentHTML("beforeend", articleMarkup);
        var articleElement = container.children[container.children.length - 1];
        var lazyImages = articleElement.getElementsByClassName("lazy-image");
        appendArticlePreview(articleElement, latestArticle);
        setup$6(articleElement, personalized);
        lazyLoadAds(articleElement, true);
        setup(lazyImages);
        follow.init(articleElement);
        scroll.add(handleScroll(articleElement));
        alertModal(articleElement);
        init$6(latestArticle);
      });
    }

    function appendArticlePreview(nextArticle, previousArticle) {
      var preview = nextArticle.getElementsByClassName("article__next-preview-template")[0];
      var nextPreview = previousArticle.getElementsByClassName("article__next-preview")[0];

      if (preview && nextPreview) {
        nextPreview.innerHTML = preview.textContent;
      }
    }

    function fetchNextArticle() {
      var nextArticleId = scrollIds.shift();
      if (!nextArticleId) return Promise.resolve();
      return fetchArticle(nextArticleId).then(function (articleMarkup) {
        if (!articleMarkup) {
          return fetchNextArticle();
        }

        return articleMarkup;
      });
    }

    function fetchArticle(articleId) {
      return window.fetch("/partial-article/".concat(articleId), {
        credentials: "same-origin"
      }).then(function (response) {
        if (response.status >= 400) return null;
        return response.text();
      }).catch(function () {});
    }

    function shouldShowNativeAd() {
      if (!window.DN.hasSessionStorage) return true;

      try {
        var counter = JSON.parse(window.sessionStorage.getItem("nativeAdCounter")) || 0;
        window.DN.setSessionStorageItem("nativeAdCounter", counter + 1);
        return counter % 4 === 0;
      } catch (e) {// ignore
      }

      return true;
    }

    function handleScroll(articleElement) {
      var linkUrl = articleElement.getAttribute("data-url");
      var screenHeight = getWindowInnerHeight();
      return function () {
        var _articleElement$getBo = articleElement.getBoundingClientRect(),
            articleTop = _articleElement$getBo.top,
            articleBottom = _articleElement$getBo.bottom;

        if (articleBottom < 0) return;

        if (linkUrl !== currentArticleLinkUrl) {
          var realArticleTop = articleTop - STICKY_MENU_HEIGHT;
          var entireArticleVisible = realArticleTop >= 0 && articleBottom <= screenHeight;
          var articleCoversScreen = realArticleTop <= 0 && articleBottom >= screenHeight;

          if (entireArticleVisible || articleCoversScreen) {
            if (!visitedArticles[articleElement.id] && articleElement.getAttribute("data-content-type") !== "nativead") {
              reloadOutsider(2);
            }

            window.history.replaceState(null, null, linkUrl);
            visitedArticles[articleElement.id] = true;
            var seoTitle = articleElement.getAttribute("data-seo-title");

            if (seoTitle) {
              document.title = seoTitle;
            }

            currentArticleLinkUrl = linkUrl;
            var articles = Array.from(document.getElementsByClassName("article"));
            articles.forEach(function (articleEl) {
              articleEl.classList.remove("article--focus");
            });
            articleElement.classList.add("article--focus");
            var gtmData = articleElement.getAttribute("data-gtm");

            if (gtmData) {
              gtmData = JSON.parse(gtmData);

              if (gtmData.pageInfo && gtmData.pageInfo.pageId) {
                gtmData.pageInfo.articleIndex = storedScrollIds.indexOf(gtmData.pageInfo.pageId) + 1;
                /* Since the original article uses index 0, the continousScroll-articles have to start at index 1  */
              }

              pageView(gtmData);
            }

            if (scrollIds.length > 0) {
              loadNextArticle();
            }
          }
        }
      };
    }

    function isPrinting() {
      return window.matchMedia("print").matches;
    }
  }

  function horizontalScrolling(params) {
    var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var scope = params.scope || document;
    var container = scope.getElementsByClassName(params.container)[0];
    if (!container) return;

    var _Array$from = Array.from(scope.getElementsByClassName(params.buttons)),
        _Array$from2 = _slicedToArray(_Array$from, 2),
        left = _Array$from2[0],
        right = _Array$from2[1];

    var items = Array.from(container.children);
    var containerWidth = container.offsetWidth;
    var scrolling;
    window.addEventListener("resize", throttle(function () {
      containerWidth = container.offsetWidth;
      onScroll();
    }, 100));
    container.addEventListener("scroll", throttle(onScroll, 50), passiveIfPossible());
    left.addEventListener("click", scrollToLeft);
    right.addEventListener("click", scrollToRight);

    function onScroll() {
      if (container.scrollLeft === 0) {
        left.classList.add("hidden");
      } else {
        left.classList.remove("hidden");
      }

      if (container.scrollLeft + container.offsetWidth + 1 >= container.scrollWidth) {
        right.classList.add("hidden");
      } else {
        right.classList.remove("hidden");
      }
    }

    function scrollToLeft() {
      if (scrolling) return;
      scrolling = true;
      var item = items.slice(0).reverse().find(function (x) {
        return x.getBoundingClientRect().left - container.getBoundingClientRect().left < 0;
      });
      var scrollValue = (item ? item.getBoundingClientRect().right - container.getBoundingClientRect().left : 0) - containerWidth;
      scrollTo(scrollValue);
    }

    function scrollToRight() {
      if (scrolling) return;
      scrolling = true;
      var item = items.find(function (x) {
        return x.getBoundingClientRect().right - container.getBoundingClientRect().left > containerWidth;
      });
      var scrollValue = item ? item.getBoundingClientRect().left - container.getBoundingClientRect().left : containerWidth;
      scrollTo(scrollValue - margin);
    }

    function scrollTo(scrollValue) {
      scroll.tween(container.scrollLeft, scrollValue, function (value) {
        container.scrollLeft = value;
      }, function () {
        scrolling = false;
      });
    }
  }

  function yourSavedArticles(bookmarks) {
    if (!window.DN || !window.DN.hasLocalStorage || !window.DN.hasAccessToken) return;
    setupYourSavedArticlesHeader();
    fetchSavedArticles(bookmarks).then(function (savedArticles) {
      if (!savedArticles.length) return;
      setupSavedArticlesContainer(savedArticles, bookmarks);
    });

    function setupYourSavedArticlesHeader() {
      var headers = Array.from(document.getElementsByClassName("throw-in-area__header--articles"));
      headers.forEach(function (header) {
        header.classList.remove("hidden");
      });
    }

    function setupSavedArticlesContainer(savedArticles) {
      var arrows = Array.from(document.getElementsByClassName("throw-in-area__arrow"));

      if (savedArticles.length < 4) {
        arrows.forEach(function (arrow) {
          arrow.classList.add("hidden");
        });
      }

      var containers = Array.from(document.getElementsByClassName("throw-in-area__container"));
      if (!containers.length) return;
      containers.forEach(function (container) {
        setupSavedArticlesContent(savedArticles, container);
        var bookmarksCount = Array.from(document.getElementsByClassName("bookmarks-count"));
        bookmarksCount.forEach(function (bookmarkCount) {
          var bookmarksLength = "(".concat(bookmarks.length, ")");
          bookmarkCount.innerHTML = bookmarksLength;
        });
        var savedArticleCards = Array.from(container.getElementsByClassName("throw-in-area__article"));
        trackYourSavedArticles(savedArticleCards);
        var savedArticlesContainers = Array.from(document.getElementsByClassName("throw-in-area"));
        savedArticlesContainers.forEach(function (el) {
          el.closest(".throw-in-area").classList.remove("throw-in-area--placeholder");

          if (CHANNEL_DESKTOP || CHANNEL_RESPONSIVE) {
            horizontalScrolling({
              scope: el,
              container: "throw-in-area__container",
              buttons: "throw-in-area__arrow"
            });
          }
        });
        var images = container.getElementsByClassName("lazy-image");
        setup(images);
      });

      if (window.dataLayer && window.dataLayer.push) {
        window.dataLayer.push({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Impression",
            eventAction: "Start Page Carousel",
            eventLabel: "Your Saved Articles",
            nonInteraction: true
          }
        });
      }
    }

    function setupSavedArticlesContent(savedArticles, container) {
      var articlesMarkup = "";
      var lastCardMarkup = "\n          <a href=\"/sparade-artiklar\" class=\"teaser-grouped throw-in-area__article throw-in-area__article--last-card hidden-tablet hidden-desktop\">\n            <div>\n              <svg width=\"24\" height=\"24\" class=\"icon icon--bookmark-border-outline\">\n                <use xlink:href=\"#bookmark-border-outline\"></use>\n              </svg>\n              G\xE5 till <br>min l\xE4slista\n            </div>\n          </a>";
      savedArticles.forEach(function (articleMarkup) {
        articlesMarkup += articleMarkup;
      });
      container.innerHTML = articlesMarkup + lastCardMarkup;
    }

    function trackYourSavedArticles(savedArticleCards) {
      savedArticleCards.forEach(function (savedArticle) {
        savedArticle.addEventListener("click", function () {
          var linkContentLabel = savedArticle.getAttribute("link-content-label");
          var linkContentId = savedArticle.getAttribute("link-content-id");
          trackWatchlistClickEvent("Start Page Carousel", "Article", "Saved Articles", linkContentLabel, linkContentId, undefined, undefined);
        });
      });
      var lastCardLinks = Array.from(document.getElementsByClassName("throw-in-area__article--last-card"));
      lastCardLinks.forEach(function (lastCardLink) {
        lastCardLink.addEventListener("click", function () {
          trackWatchlistLinkEvent("Go to Saved Articles (End of Carousel)");
        });
      });
      var headerLinks = Array.from(document.getElementsByClassName("throw-in-area__header-link"));
      headerLinks.forEach(function (headerLink) {
        headerLink.addEventListener("click", function () {
          trackWatchlistLinkEvent("Go to Saved Articles");
        });
      });
    }

    function fetchSavedArticles(bookmarkIds) {
      var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (bookmarkIds.length === 0) {
        return Promise.resolve(results);
      }

      var sliceBookmarks = bookmarkIds.slice(0, 11);
      var savedArticleRequests = sliceBookmarks.map(function (savedArticleId) {
        return fetchArticle(savedArticleId);
      });
      return Promise.all(savedArticleRequests).then(function (savedArticleResults) {
        savedArticleResults.forEach(function (savedArticleResult) {
          if (savedArticleResult) {
            results.push(savedArticleResult);
          }
        });
        return results;
      });
    }
  }

  function fetchArticle(savedArticleId) {
    return window.fetch("/ajax/your-saved-article/".concat(savedArticleId), {
      credentials: "same-origin"
    }).then(function (response) {
      if (response.status < 400) {
        return response.text();
      }

      return null;
    }).catch(function () {});
  }

  function findTagsToFollow() {
    setupFindTagsToFollowHeader();
    setupFindTagsToFollowFooter();
    fetchCurrentTags();

    function setupFindTagsToFollowHeader() {
      var headers = Array.from(document.getElementsByClassName("throw-in-area__header--tags"));
      headers.forEach(function (header) {
        header.classList.remove("hidden");
      });
    }

    function setupFindTagsToFollowFooter() {
      var footers = Array.from(document.getElementsByClassName("throw-in-area__footer"));
      footers.forEach(function (footer) {
        footer.classList.remove("hidden");
      });
    }

    function setupCurrentTagsContainer(currentTags) {
      var arrows = Array.from(document.getElementsByClassName("throw-in-area__arrow"));

      if (currentTags.length < 4) {
        arrows.forEach(function (arrow) {
          arrow.classList.add("hidden");
        });
      }

      var containers = Array.from(document.getElementsByClassName("throw-in-area__container"));
      if (!containers.length) return;
      containers.forEach(function (container) {
        setupFollowButtons(container);
        trackFindTagsToFollow();
        var currentTagsContainer = Array.from(document.getElementsByClassName("throw-in-area"));
        currentTagsContainer.forEach(function (el) {
          if (CHANNEL_DESKTOP || CHANNEL_RESPONSIVE) {
            horizontalScrolling({
              scope: el,
              container: "throw-in-area__container",
              buttons: "throw-in-area__arrow"
            });
          }
        });
        var images = container.getElementsByClassName("lazy-image");
        setup(images);
      });

      if (window.dataLayer && window.dataLayer.push) {
        window.dataLayer.push({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Impression",
            eventAction: "Start Page Carousel",
            eventLabel: "Find Tags",
            nonInteraction: true
          }
        });
      }
    }

    function setupFollowButtons(container) {
      alertModal();

      if (window.DN.hasAccessToken) {
        follow.setupFollowButtons(Array.from(container.getElementsByClassName("button--follow")));
      }
    }

    function trackFindTagsToFollow() {
      var lastCardLinks = Array.from(document.getElementsByClassName("throw-in-area__tag--last-card"));
      lastCardLinks.forEach(function (lastCardLink) {
        lastCardLink.addEventListener("click", function () {
          trackWatchlistLinkEvent("Go to More Subjects (End of Carousel)");
        });
      });
      var headerLinks = Array.from(document.getElementsByClassName("throw-in-area__header-link"));
      headerLinks.forEach(function (headerLink) {
        headerLink.addEventListener("click", function () {
          trackWatchlistLinkEvent("Go to More Subjects");
        });
      });
      var showMoreButtons = Array.from(document.getElementsByClassName("throw-in-area__footer"));
      showMoreButtons.forEach(function (showMoreButton) {
        showMoreButton.addEventListener("click", function () {
          trackWatchlistLinkEvent("Go to More Subjects");
        });
      });
    }

    function fetchCurrentTags() {
      Promise.all([fetchTags()]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            tagResponse = _ref2[0];

        var currentTagsContainer = Array.from(document.getElementsByClassName("throw-in-area__container"));
        tagResponse.text().then(function (text) {
          currentTagsContainer.forEach(function (container) {
            container.innerHTML = text;
            container.closest(".throw-in-area").classList.remove("throw-in-area--placeholder");
          });
          setupCurrentTagsContainer(text);
        });
      }).catch(handleWithRaven);
    }
  }

  function fetchTags() {
    return window.fetch("/ajax/get-tag-suggestions-html", {
      method: "GET"
    });
  }

  function throwInsOnStartPage() {
    var noPersonalizationPossible = !window.DN || !window.DN.hasLocalStorage || !window.DN.hasAccessToken;

    if (noPersonalizationPossible) {
      findTagsToFollow();
    } else {
      getPersonalized().then(function (_ref) {
        var bookmarks = _ref.bookmarks;
        if (!bookmarks) return findTagsToFollow();
        var hoursWhenSavedArticlesAreShown = [7, 8, 9, 10, 21, 22, 23];
        var hasEnoughBookmarks = bookmarks && bookmarks.length > 2;
        var shouldShowSavedArticles = hasEnoughBookmarks && hoursWhenSavedArticlesAreShown.includes(new Date().getHours());

        if (shouldShowSavedArticles) {
          yourSavedArticles(bookmarks);
        } else {
          findTagsToFollow();
        }
      });
    }
  }

  function getPersonalizedContent() {
    var contentId = window.DN && window.DN.meta && window.DN.meta.contentId;
    if (!contentId) return;
    if (window.DN.meta.contentType === "nativead") return;
    if (window.DN.meta.showRecommendations === false) return;
    return fetchPersonalized(contentId);
  }

  function articlePersonalized() {
    var personalized = getPersonalizedContent();
    if (!personalized) return;
    personalized.then(continuousScroll);
    personalized.then(setup$3);
  }
  function personalizedThrowIns() {
    if (Array.from(document.getElementsByClassName("throw-in-area")).length === 0) return;
    var personalized = getPersonalizedContent();
    if (!personalized) return;
    personalized.then(throwInsOnStartPage);
  }

  var loadOffset$2 = 400;
  var useObserver$1 = "IntersectionObserver" in window;
  function lazyLoadThrowInAreas(throwInAreas) {
    if (!throwInAreas) return;
    var slotLength = throwInAreas.length;
    var observer = setupObserver();

    for (var i = 0; i < throwInAreas.length; i++) {
      observeThrowIn(throwInAreas[i]);
    }

    function observeThrowIn(throwInArea) {
      if (observer) {
        return observer.observe(throwInArea);
      }

      scroll.add(handleScroll, true);

      function handleScroll() {
        if (isElementInViewport(throwInArea, loadOffset$2)) {
          scroll.remove(handleScroll);
          personalizedThrowIns();
        }
      }
    }

    function setupObserver() {
      if (!useObserver$1) return;
      return new window.IntersectionObserver(viewPortUpdate, {
        rootMargin: "".concat(loadOffset$2, "px 0px")
      });

      function viewPortUpdate(entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);
            --slotLength;
            personalizedThrowIns();
            if (slotLength <= 0) observer.disconnect();
          }
        });
      }
    }
  }

  function hasRichMediaPremium() {
    return document.getElementsByClassName("fullpage-ad").length > 0;
  }

  function stickyHeader() {
    var sticky = document.getElementsByClassName("sticky-header")[0];
    var stickyTrigger = document.getElementsByClassName("site-header__logo-row")[0];
    var hideEl = document.getElementsByClassName("site-header__nav-sub")[0];
    if (!sticky || !stickyTrigger) return;

    if ("IntersectionObserver" in window) {
      setupIntersectionObserver();
    } else {
      setupScrollListener();
    }

    function setupIntersectionObserver() {
      var observer = new window.IntersectionObserver(viewPortUpdate, {
        rootMargin: "-8px 0px 0px"
      });
      observer.observe(stickyTrigger);

      function viewPortUpdate(entries) {
        var hasRichMedia = hasRichMediaPremium();
        entries.forEach(function (entry) {
          var isIntersecting = entry.isIntersecting !== undefined ? entry.isIntersecting // This seems to be most sensitive to fine movements
          : entry.intersectionRatio > 0; // This polyfills for Edge 15, which does not have isIntersecting

          var showSticky = !isIntersecting;

          if (showSticky && hasRichMedia) {
            // Only show sticky if RMP has been closed or scrolled passed.
            // 300 is not an exact value just large enough to be sure the menu was pushed down by the ad
            showSticky = entry.boundingClientRect.bottom < 300;
          }

          setStickyVisibility(showSticky);
        });
      }
    }

    function setupScrollListener() {
      scroll.add(handleScroll, true);

      function handleScroll() {
        var _stickyTrigger$getBou = stickyTrigger.getBoundingClientRect(),
            bottom = _stickyTrigger$getBou.bottom;

        setStickyVisibility(bottom <= 7);
      }
    }

    function setStickyVisibility(showSticky) {
      setVisibility(sticky, showSticky);

      if (hideEl) {
        setVisibility(hideEl, !showSticky);
      }

      pubsub.publish("changeStickyMenu", {
        isSticky: showSticky
      });
    }
  }

  function setVisibility(el, show) {
    if (show) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  }

  function hideFadeOnMenu() {
    var elements = Array.from(document.getElementsByClassName("nav-scroll"));
    elements.forEach(function (element) {
      element.addEventListener("scroll", function () {
        var elementWidth = element.offsetWidth;
        var elementScrollWidth = element.scrollWidth;
        var elementScroll = element.scrollLeft;
        var headerFade = element.parentElement.getElementsByClassName("header-utils")[0];

        if (elementScroll >= elementScrollWidth - elementWidth) {
          headerFade.classList.remove("header-utils--fade");
        } else {
          headerFade.classList.add("header-utils--fade");
        }
      });
    });
  }

  function hasExpired$1() {
    if (!window.DN.userInfo || !window.DN.userInfo.updated) return true;

    try {
      return Date.now() - window.DN.userInfo.updated >= 5 * 60 * 1000;
    } catch (err) {
      return true;
    }
  }

  function removeUserInfoCookie() {
    var date = new Date();
    date.setTime(date.getTime() - 24 * 60 * 60 * 1000);
    document.cookie = "userInfo=; expires=".concat(date.toGMTString(), "; path=/");
  }

  function clearUserInfo() {
    if (window.DN.hasLocalStorage) {
      window.localStorage.removeItem("userInfo");
      window.localStorage.removeItem("dn-alma:is-user-authenticated:local-storage");
    }

    if (window.DN.hasSessionStorage) {
      window.sessionStorage.removeItem("dn-alma:user-context-metadata:session-storage");
    }
  }
  function moveUserInfoCookieToLocalStorage() {
    if (window.DN.userInfoCookieJson && window.DN.hasLocalStorage) {
      try {
        window.DN.setLocalStorageItem("userInfo", window.DN.userInfoCookieJson);
        removeUserInfoCookie();
      } catch (err) {// Ignore
      }
    }
  }
  function updateExpiredUserInfo() {
    if (!hasExpired$1() || isFailover()) return Promise.resolve();
    var cacheBustId = window.DN.getRandomGuid();
    return window.fetch("/ajax/userinfo/".concat(cacheBustId), {
      credentials: "same-origin"
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        return triggerAccessTokenRefresh();
      }

      throw new Error("Got response ".concat(response.status, " when trying to fetch userInfo"));
    }).then(function (userInfo) {
      if (window.DN && window.DN.userInfo && window.DN.userInfo.userId && window.DN.userInfo.userId !== userInfo.userId) {
        logMismatch();
      }

      window.DN.userInfo = Object.assign({}, window.DN.userInfo, userInfo, {
        updated: Date.now()
      });
      storeUserInfo();
      updateUserInfoInHeader();
    }).catch(function () {//  Ignore
    });
  }
  function ensureIdTokenInUserInfo() {
    if (!window.DN.userInfo || window.DN.userInfo.idToken) return;
    var cookies = parseCookie(document.cookie);

    if (cookies["bip-idtoken"]) {
      window.DN.userInfo.idToken = cookies["bip-idtoken"];
    }

    storeUserInfo();
  }

  function storeUserInfo() {
    var userInfoJson = encodeURIComponent(JSON.stringify(window.DN.userInfo));

    try {
      window.DN.setLocalStorageItem("userInfo", userInfoJson);
      return;
    } catch (err) {// Ignore
    }

    if (!window.DN.hasLocalStorage) {
      document.cookie = "userInfo=".concat(userInfoJson);
    }
  }

  function updateUserInfoInHeader() {
    if (!window.DN || !window.DN.initUserInfo) return;
    window.DN.initUserInfo("site-header");
    window.DN.initUserInfo("sticky-header");
  }

  function logMismatch() {
    // Fire and forget
    window.fetch("/ajax/log-userinfo-mismatch", {
      method: "HEAD",
      credentials: "same-origin"
    }).then(function () {
      return;
    });
  }

  function getSubscriptionName(level) {
    if (level === "Bas") {
      return "DN Digital Bas";
    } else if (level === "Premium") {
      return "DN Digital";
    }

    return "";
  }

  function buddyMenu() {
    var menuEl = document.getElementsByClassName("buddy-menu")[0];
    if (!menuEl) return;
    var nameEl = menuEl.getElementsByClassName("buddy-menu__name")[0];
    var levelEl = menuEl.getElementsByClassName("buddy-menu__level")[0];
    var logoutEl = menuEl.getElementsByClassName("buddy-menu__logout")[0];
    var modalEl = menuEl.getElementsByClassName("logout-modal")[0];
    var modal = initModal(modalEl);
    var userInfo = window.DN.userInfo || {};
    nameEl.textContent = userInfo.givenName || "";
    levelEl.textContent = getSubscriptionName(userInfo.accountLevel);
    var triggerElements = Array.from(document.getElementsByClassName("user-info__action"));
    triggerElements.forEach(function (el) {
      el.addEventListener("click", openMenu);
    });
    logoutEl.addEventListener("click", function (event) {
      event.preventDefault();
      modal.open();
    });
    var menuLinks = Array.from(menuEl.getElementsByClassName("buddy-menu__links")[0].children);
    menuLinks.forEach(function (menuLink) {
      menuLink.addEventListener("click", function (e) {
        trackMenuClick("Buddy Menu", e.target.innerHTML);
      });
    });
    var logoutElements = Array.from(document.getElementsByClassName("button--logout-confirm"));
    logoutElements.forEach(function (el) {
      el.addEventListener("click", function () {
        clearUserInfo();
        clearPersonalized();
      });
    });
    pubsub.subscribe("changeStickyMenu", function (data) {
      if (data.isSticky) {
        menuEl.classList.remove("buddy-menu--site");
        menuEl.classList.add("buddy-menu--sticky");
      } else {
        menuEl.classList.remove("buddy-menu--sticky");
        menuEl.classList.add("buddy-menu--site");
      }
    });

    function closeMenu(event) {
      if (!menuEl.contains(event.target) && !menuEl.classList.contains("hidden")) {
        menuEl.classList.add("hidden");
        document.body.removeEventListener("click", closeMenu);
      }
    }

    function openMenu(event) {
      if (menuEl.classList.contains("hidden")) {
        event.stopPropagation();
        menuEl.classList.remove("hidden");
        document.body.addEventListener("click", closeMenu);
        pubsub.publish("buddyMenu.open");
        trackMenuClick("Other Header Menu", "Buddy");
      }
    }
  }

  function productMenu() {
    var menuEl = document.getElementsByClassName("site-header__nav-products-menu")[0];
    var menuTrigger = document.getElementsByClassName("site-header__nav-products-menu-trigger")[0];
    if (!menuTrigger || !menuEl) return;
    menuTrigger.addEventListener("click", openMenu);

    function closeMenu(event) {
      if (!menuEl.contains(event.target) && !menuEl.classList.contains("hidden")) {
        menuEl.classList.add("hidden");
        document.body.removeEventListener("click", closeMenu);
      }
    }

    function openMenu(event) {
      if (menuEl.classList.contains("hidden")) {
        event.stopPropagation();
        menuEl.classList.remove("hidden");
        document.body.addEventListener("click", closeMenu);
      }
    }
  }

  var modalEl;
  function productModal() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var triggerElements = Array.from(context.getElementsByClassName("button--open-modal"));
    triggerElements.forEach(function (element) {
      element.addEventListener("click", function (event) {
        event.preventDefault();
        modalEl = element.parentElement.getElementsByClassName("modal")[0];
        var modal = initModal(modalEl);
        modal.open();
      });
    });
  }

  function weather() {
    var hasTriggeredInitialLoad = false;
    var toggleButton = document.getElementsByClassName("weather-preview")[0];
    if (!toggleButton) return;
    var dropdown = document.getElementsByClassName("weather-forecast")[0];
    if (!dropdown) return;
    toggleButton.addEventListener("click", toggleDropdown);
    var isExpanded = false;

    function toggleDropdown() {
      if (isExpanded) {
        closeDropdown();
        return;
      }

      toggleButton.classList.add("weather-preview--triggered");

      if (hasTriggeredInitialLoad) {
        dropdown.classList.remove("hidden");
        isExpanded = true;
      } else {
        trackMenuClick("Other Header Menu", "Weather"); //This should only be triggered once per pageview

        fetchForecast(); //Don't show the dropdown until after fetch is complete

        hasTriggeredInitialLoad = true;
      }
    }

    function closeDropdown() {
      toggleButton.classList.remove("weather-preview--triggered");
      dropdown.classList.add("hidden");
      isExpanded = false;
    }

    function initDropdown() {
      var close = dropdown.getElementsByTagName("button")[0];
      var select = dropdown.getElementsByTagName("select")[0];
      if (!select || !close) return;
      close.addEventListener("click", closeDropdown);
      select.addEventListener("change", function () {
        var option = select.options[select.selectedIndex];
        var location = dropdown.getElementsByClassName("weather-forecast__location")[0];
        location.textContent = option.textContent;
        fetchForecast(option.value);
      });
    }

    function fetchForecast(locationId) {
      if (!locationId) {
        var cookies = parseCookie(document.cookie);
        var weatherLocation = cookies.weatherLocation;
        locationId = weatherLocation || 2673730; //fallback to Stockholm
      }

      window.fetch("/ajax/forecast?locationId=".concat(locationId), {
        credentials: "same-origin"
      }).then(function (response) {
        if (response.ok) {
          return response.text();
        }

        throw new Error("Got response ".concat(response.status, " when trying to fetch weather forecast for location: ").concat(locationId, "."));
      }).then(function (response) {
        dropdown.innerHTML = response;
        initDropdown();

        if (!isExpanded) {
          dropdown.classList.remove("hidden");
          isExpanded = true;
        }

        updatePreview();
      }).catch(function () {
        throw new Error("Exception when trying to fetch weather forecast for location: ".concat(locationId, "."));
      });

      function updatePreview() {
        var _getFirstDayData = getFirstDayData(),
            icon = _getFirstDayData.icon,
            temperature = _getFirstDayData.temperature;

        var svg = toggleButton.getElementsByTagName("svg")[0];
        toggleButton.insertAdjacentHTML("afterbegin", icon);
        toggleButton.removeChild(svg);
        var tempEl = toggleButton.getElementsByClassName("weather-preview__temperature")[0];
        if (!tempEl) return;
        tempEl.innerHTML = temperature;

        function getFirstDayData() {
          var forecastContainer = document.getElementsByClassName("weather-forecast__container")[0];
          var firstDay = forecastContainer.getElementsByClassName("weather-forecast__day")[0];
          return {
            icon: forecastContainer.getElementsByTagName("noscript")[0].textContent,
            temperature: firstDay.getElementsByTagName("span")[0].textContent
          };
        }
      }
    }
  }

  function setup$7(quizEl) {
    if (!quizEl) {
      return;
    }

    var questions = Array.from(quizEl.getElementsByClassName("quiz-question")).filter(function (x) {
      return x.getAttribute("data-question");
    });
    questions.forEach(initQuestion);
    var userAnswers = new Array(questions.length).fill({});
    var correctAnswers = JSON.parse(quizEl.getAttribute("data-quiz-answers"));
    var showResultButton = quizEl.getElementsByClassName("button--show-results")[0];
    var resultContainer = quizEl.getElementsByClassName("quiz-result")[0];
    var answeredCountEl = quizEl.getElementsByClassName("quiz__answer-count")[0];
    var solutions = Array.from(resultContainer.getElementsByClassName("quiz-question"));
    showResultButton.addEventListener("click", showTotalResults);

    function initQuestion(question, questionIndex) {
      Array.from(question.getElementsByTagName("input")).forEach(function (el) {
        return el.addEventListener("click", answerQuestion);
      });
      var nextQuestionButtonEl = question.getElementsByClassName("button--next-question")[0];

      if (nextQuestionButtonEl) {
        nextQuestionButtonEl.addEventListener("click", clickNextQuestion);
      }

      function answerQuestion(e) {
        var radio = e.target;
        setYourAnswer(radio);
        var correctIndex = parseInt(correctAnswers[questionIndex], 10);
        var answerIndex = parseInt(radio.value, 10);
        var isCorrect = answerIndex === correctIndex;
        var answer = {
          answerIndex: answerIndex,
          isCorrect: isCorrect
        };
        userAnswers[questionIndex] = answer;
        answeredCountEl.innerText = userAnswers.filter(function (x) {
          return typeof x.answerIndex !== "undefined";
        }).length;
      }

      function setYourAnswer(radio) {
        var answerText = radio.parentElement.innerText;
        var solution = solutions.find(function (s) {
          return s.getAttribute("data-question-number") === (questionIndex + 1).toString();
        });
        var yourAnswer = solution.getElementsByClassName("quiz-question__your-answer")[0];
        yourAnswer.getElementsByTagName("span")[0].innerText = answerText.trim();
        yourAnswer.classList.remove("hidden");
      }

      function clickNextQuestion(e) {
        e.preventDefault();
        var nextElementId = e.target.getAttribute("data-next-element-id");
        scrollToElement(document.getElementById(nextElementId));
      }
    }

    function disableQuestion(question) {
      var alternatives = Array.from(question.getElementsByClassName("quiz-question__alternative"));
      alternatives.forEach(function (el) {
        el.classList.add("quiz-question__alternative--unclickable");
        var radio = el.getElementsByTagName("input")[0];
        radio.disabled = true;
      });
    }

    function showTotalResults(e) {
      e.preventDefault();
      showResultButton.removeEventListener("click", showTotalResults);
      questions.forEach(disableQuestion);
      var correctAnswerCount = userAnswers.filter(function (answer) {
        return answer.isCorrect;
      }).length;
      displayResult(correctAnswerCount);
      addScoreArrow(correctAnswerCount);
      resultContainer.classList.remove("hidden");
      scrollToElement(showResultButton);
      var answeredQuestions = userAnswers.filter(function (answer) {
        return typeof answer.answerIndex !== "undefined";
      });
      var hasAnsweredAllQuestions = answeredQuestions.length === questions.length;

      if (hasAnsweredAllQuestions) {
        // niklas & mib decided that the stats shouldn't be polluted by submissions with unanswered questions
        postResult();
      }
    }

    function displayResult(correctAnswerCount) {
      var header = resultContainer.getElementsByTagName("h1")[0];
      header.getElementsByTagName("span")[0].innerHTML = correctAnswerCount;
      var betterThanPercentage = correctAnswerCount > 0 ? JSON.parse(quizEl.getAttribute("data-quiz-scores")).slice(0, correctAnswerCount).reduce(function (acc, curr) {
        return acc + Math.round(curr);
      }, 0) : 0; //Round the numbers so that they match the numbers displayed in the nunjucks view

      var reviewText = "";

      if (betterThanPercentage === 100) {
        reviewText = "Bra jobbat! Du fick flest rätt hittills!";
      } else if (betterThanPercentage >= 50) {
        reviewText = "Bra jobbat! Du fick fler r\xE4tt \xE4n <strong class=\"quiz-result__better-than\">".concat(Math.ceil(betterThanPercentage), "%</strong> av dina medt\xE4vlande.");
      } else if (betterThanPercentage >= 25) {
        reviewText = "Du fick fler r\xE4tt \xE4n <strong class=\"quiz-result__better-than\">".concat(Math.ceil(betterThanPercentage), "%</strong> av dina medt\xE4vlande.");
      } else {
        return; //We haven't come up with a good text for the worst players
      }

      quizEl.getElementsByClassName("quiz-result__review-text")[0].innerHTML = reviewText;
    }

    function addScoreArrow(correctAnswerCount) {
      var scoreArrow = document.createElement("span");
      scoreArrow.classList.add("quiz-score__indicator");
      var scores = quizEl.getElementsByClassName("quiz-score");

      if (scores.length > 0 && scores.length > correctAnswerCount) {
        scores[correctAnswerCount].appendChild(scoreArrow);
      }
    }

    function postResult() {
      var contentId = window.DN.meta.contentId;
      window.fetch("/quiz-proxy/".concat(contentId), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userAnswers: userAnswers
        })
      }).catch();
    }

    function scrollToElement(el) {
      var target = el.getBoundingClientRect().top - STICKY_MENU_HEIGHT;
      scroll.smoothY(target);
    }
  }

  function gdprHeader() {
    var container = document.getElementsByClassName("gdpr-header")[0];
    if (!container) return;
    var cookies = parseCookie(document.cookie);
    if (cookies.gdprHeaderClosed) return closeHeader();
    bindCloseButton();

    function bindCloseButton() {
      var closeButton = container.getElementsByClassName("gdpr-header__button--close")[0];
      closeButton.addEventListener("click", closeHeader);
    }

    function closeHeader() {
      var expires = new Date();
      expires.setFullYear(expires.getFullYear() + 10);
      document.cookie = "gdprHeaderClosed=".concat(Date.now(), "; expires=").concat(expires.toUTCString(), "; path=/");
      container.parentNode.removeChild(container);
    }
  }

  var IMAGE_MARGIN = 10;
  function gallery() {
    var galleries = Array.from(document.getElementsByClassName("gallery"));
    if (!galleries.length) return;
    galleries.forEach(init);

    function init(el) {
      var container = el.getElementsByClassName("gallery__items")[0];
      var items = Array.from(container.children);
      toggleFullscreen();

      if (CHANNEL_DESKTOP) {
        horizontalScrolling({
          scope: el,
          container: "gallery__items",
          buttons: "gallery__arrow"
        }, IMAGE_MARGIN);
      } else if (CHANNEL_RESPONSIVE) {
        horizontalScrolling({
          scope: el,
          container: "gallery__items",
          buttons: "gallery__arrow"
        }, IMAGE_MARGIN);
      }

      function toggleFullscreen() {
        var _slideShow = slideshow(el.getElementsByClassName("slideshow")[0]);

        container.addEventListener("click", function (e) {
          e.preventDefault();
          var link = e.target.closest(".gallery__item");

          if (link) {
            _slideShow.slideToIndex(items.indexOf(link));

            _slideShow.toggleFullscreen();
          }
        });
      }
    }
  }

  function newsList() {
    var newsLists = document.getElementsByClassName("news-list");
    if (!newsLists.length) return;

    for (var i = 0, len = newsLists.length; i < len; i++) {
      init(newsLists[i]);
    }

    function init(el) {
      if (CHANNEL_MOBILE) {
        expander();
      }

      if (CHANNEL_RESPONSIVE) {
        expander();
      }

      if (!CHANNEL_MOBILE) {
        scroller();
      }

      function scroller() {
        if (!el.classList.contains("news-list--flexible")) return;
        var container = el.getElementsByClassName("news-list__container")[0];
        if (!container) return;
        container.addEventListener("scroll", throttle(evaluate, 100), passiveIfPossible());

        function evaluate() {
          if (container.scrollTop + container.offsetHeight + 1 >= container.scrollHeight) {
            el.classList.add("news-list--bottom");
          } else {
            el.classList.remove("news-list--bottom");
          }
        }
      }

      function expander() {
        var showMore = el.getElementsByClassName("news-list__show-more")[0];
        if (!showMore) return;
        var button = showMore.getElementsByTagName("button")[0];
        button.addEventListener("click", function () {
          el.classList.remove("news-list--collapsed");
          el.removeChild(showMore);
        });
      }
    }
  }

  var userInfo$1 = window.DN.userInfo || {};
  function adBlock() {
    /* When a user makes a purchase and Splus wants to show a receipt, they perform a redirect to dn.se
    The redirect-URL contains queryparams which indicate we must show the same paywall again,
    even if we normally would not show the same user the same paywall twice. */
    var variantType = getQueryParam("variantType");
    var forceScript = getQueryParam("forceScript");
    var forceAdblockPaywall = typeof variantType === "string" && variantType.toLowerCase() === "adblocker" && forceScript === "1";

    if (!forceAdblockPaywall) {
      if (window.DN.hasAccessToken) return;
      if (window.DN.abt) return;
      if (window.DN.hasSessionStorage && JSON.parse(window.sessionStorage.getItem("adBlockTracked"))) return;
    }

    var container = document.getElementsByClassName("adblock")[0];
    if (!container) return;
    var _container$dataset = container.dataset,
        scriptTagId = _container$dataset.scriptTagId,
        appId = _container$dataset.appId,
        scriptSrc = _container$dataset.scriptSrc,
        clientId = _container$dataset.clientId,
        resourceId = _container$dataset.resourceId,
        loginUrl = _container$dataset.loginUrl;
    scriptLoader(window.DN.jQuery).then(function () {
      return scriptLoader(scriptSrc, {
        attributes: {
          id: scriptTagId,
          "data-appid": appId,
          "data-clientid": clientId,
          "data-resourceid": resourceId,
          "data-idtoken": userInfo$1.idToken || "",
          "data-init-ad": false,
          "data-variant-type": "ADBLOCKER",
          "data-loginurl": loginUrl,
          "data-forcehit": forceAdblockPaywall
        }
      }).then(function () {
        if (window.DN.hasSessionStorage) {
          try {
            window.DN.setSessionStorageItem("adBlockTracked", true);
          } catch (error) {// ignore
          }
        }
      });
    }).catch(function () {});
  }

  var navigationClass = "contact-page-navigation";
  var itemClass = "".concat(navigationClass, "__item");
  var itemClassActive = "".concat(itemClass, "--active");
  function contactPage() {
    var page = document.getElementsByClassName("contact-page")[0];
    if (!page) return;
    var menus = Array.from(page.getElementsByClassName(navigationClass));
    menus.forEach(function (menu) {
      var isSubMenu = menu.classList.contains("contact-page-navigation--sub-menu");
      var activeSectionClass = isSubMenu ? "contact-page__sub-section--active" : "contact-page__section--active";
      menu.addEventListener("click", function (evt) {
        var menuItem = evt.target.closest(".".concat(itemClass));
        if (!menuItem) return;
        if (menuItem.classList.contains(itemClassActive)) return;
        setActiveMenuItem();
        setActivePartial();

        function setActiveMenuItem() {
          var previouslyActiveMenuItem = menu.getElementsByClassName(itemClassActive)[0];
          previouslyActiveMenuItem.classList.remove(itemClassActive);
          menuItem.classList.add(itemClassActive);
        }

        function setActivePartial() {
          var target = menuItem.getAttribute("data-target");
          var activePartial = document.getElementById(target);
          var previouslyActivePartial = page.getElementsByClassName(activeSectionClass)[0];
          previouslyActivePartial.classList.remove(activeSectionClass);
          activePartial.classList.add(activeSectionClass);
        }
      });
    });
    var managementLinks = Array.from(page.getElementsByClassName("contact-page-management__high-res-link"));
    managementLinks.forEach(function (managementLink) {
      managementLink.addEventListener("click", function (evt) {
        var targetId = evt.target.getAttribute("data-target");
        toggleSection();
        setActiveProfile(targetId);
        scrollIntoView();
      });
    });
    var backButton = document.getElementsByClassName("contact-page-management__return")[0];
    backButton.addEventListener("click", toggleSection);

    function toggleSection() {
      var sections = Array.from(document.getElementsByClassName("contact-page-management"));
      sections.forEach(function (section) {
        if (section.classList.contains("contact-page-management--active")) {
          section.classList.remove("contact-page-management--active");
        } else {
          section.classList.add("contact-page-management--active");
        }
      });
    }

    function setActiveProfile(targetId) {
      var profiles = Array.from(document.getElementsByClassName("contact-page-management__profile"));
      profiles.forEach(function (profile) {
        profile.classList.remove("contact-page-management__profile--active");
      });
      var target = document.getElementById(targetId);
      target.classList.add("contact-page-management__profile--active");
    }

    function scrollIntoView() {
      var _page$getBoundingClie = page.getBoundingClientRect(),
          top = _page$getBoundingClie.top;

      scroll.smoothY(top + 100);
    }
  }

  function init$7() {
    var toasters = document.getElementsByClassName("toaster");
    if (!(toasters && toasters.length)) return;
    var toaster = toasters[0];
    var toasterClose = toaster.getElementsByClassName("toaster__close")[0];
    var timeoutId;
    pubsub.subscribe("changeStickyMenu", function (data) {
      if (data.isSticky) {
        toaster.classList.add("toaster--below-menu");
      } else {
        toaster.classList.remove("toaster--below-menu");
      }
    });
    pubsub.subscribe("setToasterMessage", function (data) {
      var toasterMessage = toaster.getElementsByTagName("span")[0];
      toasterMessage.innerHTML = data.message;

      if (data.linkText && data.link) {
        var a = document.createElement("a");
        a.setAttribute("href", data.link);
        a.innerHTML = data.linkText;
        toasterMessage.appendChild(a);
      }

      if (data.error) {
        toaster.classList.add("toaster--error");
      } else {
        toaster.classList.remove("toaster--error");
      }

      window.requestAnimationFrame(function () {
        toaster.classList.add("toaster--hidden");
        window.requestAnimationFrame(function () {
          toaster.classList.add("toaster--opened");
        });
      });
      timeoutId = setTimeout(closeToaster, 4000);
    });
    toasterClose.addEventListener("click", closeToaster);

    function closeToaster() {
      toaster.addEventListener("transitionend", transitionEndHandler);
      toaster.classList.remove("toaster--opened");

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }

    function transitionEndHandler() {
      toaster.classList.remove("toaster--hidden");
      toaster.removeEventListener("transitionend", transitionEndHandler);
    }
  }

  function localStorageCleanup() {
    if (!window.DN.hasLocalStorage) return;
    var keys = ["fontFormat", "/fonts/criticalFonts.format.css", "/fonts/additionalFonts.format.css"];
    keys.forEach(function (key) {
      window.localStorage.removeItem(key);
    });
  }

  function comicsPage() {
    var page = document.getElementsByClassName("comics-page")[0];
    if (!page) return;

    var _slideshow = slideshow(page.getElementsByClassName("slideshow--comic")[0]);

    var comics = Array.from(page.getElementsByClassName("comic")).map(function (comic) {
      var images = comic.getElementsByClassName("comic__image");
      return images[0];
    });
    comics.forEach(clickComic);

    function clickComic(comic) {
      comic.addEventListener("click", function (e) {
        e.preventDefault();
        var image = e.target.closest(".comic__image");

        _slideshow.slideToIndex(comics.indexOf(image));

        _slideshow.toggleFullscreen();
      });
    }

    if (CHANNEL_MOBILE) {
      var scrollWrappers = Array.from(page.getElementsByClassName("comic__scroll-wrap"));
      scrollWrappers.forEach(function (el) {
        var button = el.getElementsByClassName("comic__button")[0];

        function removeButton() {
          button.parentElement.removeChild(button);
          el.removeEventListener("scroll", removeButton);
          el.removeEventListener("click", removeButton);
        }

        el.addEventListener("scroll", removeButton);
        el.addEventListener("click", removeButton);
        button.addEventListener("click", function (e) {
          e.stopPropagation();
          removeButton();
          var imageWrapper = el.getElementsByClassName("comic__image-wrap")[0];
          scroll.tween(0, imageWrapper.offsetWidth, function (x) {
            el.scrollLeft = x;
          });
        });
      });
    }
  }

  var CHARS_ALLOWED = 80;
  var READ_MORE_TEXT = "Läs mer";
  var READ_LESS_TEXT = "Läs mindre";
  function readMore() {
    if (!CHANNEL_RESPONSIVE) {
      if (CHANNEL_TABLET) return;
      if (CHANNEL_DESKTOP) return;
    }

    var elements = Array.from(document.getElementsByClassName("read-more"));
    elements.forEach(init);

    function init(el) {
      var textEl = el.firstElementChild;
      if (textEl.textContent.length <= CHARS_ALLOWED) return;
      var state = false;
      var fullText = textEl.textContent;
      var toggleEl = createToggleEl();
      toggleEl.addEventListener("click", function () {
        toggle(!state);
      });
      el.appendChild(toggleEl);
      toggle(state);
      el.classList.remove("read-more--hidden");

      function toggle(showText) {
        if (showText) {
          textEl.textContent = fullText;
          toggleEl.textContent = READ_LESS_TEXT;
        } else {
          textEl.textContent = "".concat(fullText.slice(0, CHARS_ALLOWED), "\u2026");
          toggleEl.textContent = READ_MORE_TEXT;
        }

        state = showText;
      }
    }

    function createToggleEl() {
      var toggle = document.createElement("button");
      toggle.type = "button";
      toggle.classList.add("read-more__toggle");
      return toggle;
    }
  }

  function sudoku() {
    var sudokuEl = document.getElementsByClassName("adhoc-page__sudoku")[0];
    if (!sudokuEl) return;
    var iframe = sudokuEl.getElementsByTagName("iframe")[0];
    if (!iframe) return;

    iframe.onload = function () {
      var width = window.innerWidth;

      if (width < 600) {
        iframe.style.width = "".concat(width, "px");
      }
    };
  }

  function insertHtml(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.getElementsByTagName("script")).forEach(function (script) {
      var newScript = document.createElement("script");
      Array.from(script.attributes).forEach(function (_ref) {
        var name = _ref.name,
            value = _ref.value;
        return newScript.setAttribute(name, value);
      });
      newScript.appendChild(document.createTextNode(script.innerHTML));
      script.parentElement.replaceChild(newScript, script);
    });
  }

  function containsAny() {
    var arr1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arr2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return arr1.some(function (value) {
      return arr2.includes(value);
    });
  }

  // If cookie fallback is used make sure to write tests for it.

  function Storage() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "dn";
    return {
      getItem: getItem,
      setItem: setItem,
      removeItem: removeItem,
      clean: clean
    };

    function getName(key) {
      return [prefix, key].join(".");
    }

    function getItem(key) {
      var fallbackToCookies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var prefixedKey = getName(key);
      var value = getLocalStorage(prefixedKey);

      if (!value && fallbackToCookies) {
        value = getCookie(prefixedKey);
      }

      return value;
    }

    function setItem(key, value) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          expires = _ref.expires,
          _ref$fallbackToCookie = _ref.fallbackToCookies,
          fallbackToCookies = _ref$fallbackToCookie === void 0 ? false : _ref$fallbackToCookie;

      var prefixedKey = getName(key);

      if (!setLocalStorage(prefixedKey, value, expires) && fallbackToCookies) {
        setCookie(prefixedKey, value, expires);
      }
    }

    function removeItem(key) {
      var fallbackToCookies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var prefixedKey = getName(key);
      if (window.DN.hasLocalStorage) window.localStorage.removeItem(prefixedKey);
      if (window.DN.hasSessionStorage) window.sessionStorage.removeItem(prefixedKey);
      if (fallbackToCookies) removeCookie(prefixedKey);
    }

    function clean() {
      if (window.DN.hasLocalStorage) {
        for (var i = 0; i < window.localStorage.length; i++) {
          var key = window.localStorage.key([i]);
          getLocalStorage(key);
        }
      }
    }

    function getLocalStorage(key) {
      if (window.DN.hasLocalStorage) {
        try {
          var data = JSON.parse(window.localStorage.getItem(key));

          if (!data) {
            return deserializeValue(window.sessionStorage.getItem(key));
          }

          var value = data.value,
              expires = data.expires;

          if (expires) {
            if (expires > Date.now()) return value;
            window.localStorage.removeItem(key);
            return null;
          } else {
            return value;
          }
        } catch (error) {// ignore
        }
      }

      return null;
    }

    function setLocalStorage(key, value, expires) {
      if (!expires && window.DN.hasSessionStorage) {
        try {
          window.DN.setSessionStorageItem(key, serializeValue(value));
        } catch (error) {// ignore
        }
      }

      if (expires && window.DN.hasLocalStorage) {
        try {
          window.DN.setLocalStorageItem(key, JSON.stringify({
            value: value,
            expires: expires.getTime()
          }));
          return true;
        } catch (error) {// ignore
        }
      }

      return false;
    }

    function getCookie(key) {
      try {
        var cookies = parseCookie(document.cookie);
        return deserializeValue(cookies[key] || null);
      } catch (error) {// ignore
      }

      return null;
    }

    function setCookie(key, value, expires) {
      var cookie = "".concat(key, "=").concat(serializeValue(value), "; path=/");

      if (expires) {
        cookie = "".concat(cookie, "; expires=").concat(expires.toUTCString());
      }

      document.cookie = cookie;
    }

    function removeCookie(key) {
      var d = new Date(); //Create an date object

      d.setTime(d.getTime() - 1000 * 60 * 60 * 24); //Set the time to the past. 1000 milliseonds = 1 second

      var expires = "expires=".concat(d.toUTCString()); //Compose the expirartion date

      document.cookie = "".concat(key, "=; ").concat(expires); //Set the cookie with name and the expiration date
    }

    function serializeValue(value) {
      switch (_typeof(value)) {
        case "string":
          return value;

        default:
          return JSON.stringify(value);
      }
    }

    function deserializeValue(value) {
      try {
        return JSON.parse(value);
      } catch (e) {// ignore
      }

      return value;
    }
  }
  var storage = new Storage();

  function hasSeenTakeover() {
    return storage.getItem("hasSeenTakeover");
  }

  function campaignCta(selector, prefix, modalFunction) {
    var el = document.getElementsByClassName(selector)[0];
    if (!el) return;
    pubsub.subscribe("".concat(prefix, ".show"), showCta);
    pubsub.subscribe("".concat(prefix, ".hide"), hideCta);
    return el;

    function hideCta(event) {
      pubsub.unsubscribe("".concat(prefix, ".show"), showCta);
      pubsub.unsubscribe("".concat(prefix, ".hide"), hideCta);
      if (event) event.stopPropagation();
      el.parentElement.removeChild(el);
      var badges = Array.from(document.getElementsByClassName("notification-badge"));
      badges.forEach(function (badge) {
        return badge.classList.add("hidden");
      });
      var timesClosed = (storage.getItem("".concat(prefix, ".timesClosed")) || 0) + 1;
      storage.setItem("".concat(prefix, ".timesClosed"), timesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (timesClosed < 2) {
        storage.setItem("".concat(prefix, ".hideCta"), true, {
          expires: dateFromDays(7)
        });
      }
    }

    function showCta() {
      var closeBtn = el.getElementsByClassName("campaign-cta__close-button")[0];
      if (closeBtn) closeBtn.addEventListener("click", hideCta);
      var moreBtn = el.getElementsByClassName("campaign-cta__readmore-button")[0];
      if (moreBtn) moreBtn.addEventListener("click", openModal);
      el.classList.remove("hidden");
      var badges = Array.from(document.getElementsByClassName("notification-badge"));
      badges.forEach(function (badge) {
        return badge.classList.remove("hidden");
      });
    }

    function openModal() {
      pubsub.publish("modal.open");
      modalFunction();
    }
  }

  /* global SPLUS */
  function autogiroUpsale(contextEl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$klarnaParams = _ref.klarnaParams,
        klarnaParams = _ref$klarnaParams === void 0 ? {} : _ref$klarnaParams;

    var upsaleEl = contextEl.getElementsByClassName("autogiro-upsale")[0];
    var continueButton = upsaleEl.getElementsByClassName("autogiro-upsale__continue-button")[0];
    if (continueButton) continueButton.addEventListener("click", showForm);
    var cancelButton = upsaleEl.getElementsByClassName("autogiro-upsale__cancel-button")[0];
    if (cancelButton) cancelButton.addEventListener("click", function () {
      return pubsub.publish("autogiroUpsale:canceled");
    });
    loadSdk();

    function showForm() {
      var form = upsaleEl.getElementsByClassName("autogiro-upsale__form")[0];
      if (form) form.classList.remove("hidden");
      if (continueButton) continueButton.classList.add("hidden");
      pubsub.publish("autogiroUpsale:showForm");
    }

    function loadSdk() {
      if (window.DN.meta && window.DN.meta.splus) {
        var meta = window.DN.meta.splus;
        setupSdk(meta);
        scriptLoader("".concat(meta.sdkBaseUrl, "/public/javascripts/splus.js"), {
          attributes: {
            id: "splusSdk"
          }
        });
      }
    }

    function setupSdk(_ref2) {
      var baseKlarnaParams = _ref2.klarnaParams,
          sdkBaseUrl = _ref2.sdkBaseUrl;
      var params = Object.assign({
        isEmbedded: true,
        id_token: window.DN.userInfo && window.DN.userInfo.idToken,
        // eslint-disable-line
        callback: "https://www.dn.se"
      }, baseKlarnaParams, klarnaParams);

      window.splusInit = function () {
        SPLUS.init({
          baseUrl: sdkBaseUrl,
          appId: "dagensnyheter.se",
          initApi: "true"
        });
        SPLUS.api.changePaymentMethod.load(params).then(function (response) {
          var wrapper = document.getElementsByClassName("autogiro-upsale-wrapper")[0];
          if (wrapper) insertHtml(wrapper, response.data);
        });
      };

      window.splusKlarnaReceiptCallback = function () {
        upsaleEl.parentElement.removeChild(upsaleEl);
        pubsub.publish("autogiroUpsale:completed");
      };
    }
  }

  function bottomBar(bottomBarEl, options) {
    if (!bottomBarEl) return;
    var isVisible = false;
    if (!options.shouldAppear()) return;
    setupEventListeners();
    setupScrollListener();
    setupIntersectionObserver();
    pubsub.subscribe("modal.open", hideBottomBar);
    return {
      showBottomBar: showBottomBar,
      hideBottomBar: hideBottomBar,
      closeBottomBar: closeBottomBar
    };

    function showBottomBar() {
      isVisible = true;
      bottomBarEl.classList.remove("hidden");
      bottomBarEl.classList.add("bottom-bar--visible");
    }

    function hideBottomBar() {
      isVisible = false;
      bottomBarEl.classList.remove("bottom-bar--visible");
    }

    function closeBottomBar() {
      bottomBarEl.parentElement.removeChild(bottomBarEl);
      options.handleClose();
      trackClick("Stäng");
    }

    function setupEventListeners() {
      var closeButton = bottomBarEl.getElementsByClassName("bottom-bar__close-button")[0];
      closeButton.addEventListener("click", closeBottomBar);
    }

    function setupScrollListener() {
      var SCROLL_THRESHOLD = 50;
      var isScrollLocked = true;
      window.setTimeout(function () {
        return isScrollLocked = false;
      }, 4000);
      scroll.add(handleScroll);

      function handleScroll(event) {
        if (isScrollLocked) return;
        var direction = Math.sign(event.scrollY - event.lastScrollY);
        var delta = Math.abs(event.scrollY - event.lastScrollY);

        if (delta >= SCROLL_THRESHOLD) {
          if (direction > 0 && !isVisible) {
            showBottomBar();
          } else if (direction < 0 && isVisible) {
            hideBottomBar();
          }
        }
      }
    }

    function setupIntersectionObserver() {
      var siteBody = document.getElementsByClassName("site-body")[0];
      if (!siteBody) return;

      if ("IntersectionObserver" in window) {
        var observer = new window.IntersectionObserver(handleIntersection);
        observer.observe(siteBody);
      } else {
        scroll.add(handleScroll, true);
      }

      function handleIntersection(entries) {
        entries.forEach(function (_ref) {
          var intersectionRatio = _ref.intersectionRatio;
          return setVisibility(intersectionRatio > 0);
        });
      }

      var wasIntersecting = false;

      function handleScroll() {
        var _siteBody$getBounding = siteBody.getBoundingClientRect(),
            top = _siteBody$getBounding.top;

        var isIntersecting = getWindowInnerHeight() > top;

        if (wasIntersecting !== isIntersecting) {
          wasIntersecting = isIntersecting;
          setVisibility(isIntersecting);
        }
      }

      function setVisibility(isIntersecting) {
        if (isIntersecting && !isVisible) {
          showBottomBar();
        } else if (!isIntersecting && isVisible) {
          hideBottomBar();
        }
      }
    }

    function trackClick(label) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Bottombar-Click";
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Interaction",
          eventAction: action,
          eventLabel: label,
          nonInteraction: false
        }
      });
    }
  }

  function summerExtensionCampaign(_ref) {
    var userSegments = _ref.userSegments;
    var modalEl = document.getElementsByClassName("summer-extension-modal")[0];

    if (modalEl) {
      summerExtensionCta({
        userSegments: userSegments
      });
      summerExtensionModal({
        userSegments: userSegments
      });
      return true;
    }
  }

  function summerExtensionCta() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$userSegments = _ref2.userSegments,
        userSegments = _ref2$userSegments === void 0 ? [] : _ref2$userSegments;

    var ctaEl = campaignCta("summer-extension-cta", "summerExtensionCta", function () {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Förlängning sommarkampanj 2019",
          promoCreative: "Buddy",
          promoPosition: "Buddy",
          promoAction: "Click"
        }
      });
      summerExtensionModal({
        force: true,
        expanded: true,
        userSegments: userSegments
      });
    });
    pubsub.subscribe("buddyMenu.open", trackImpression);

    function trackImpression() {
      var isCtaVisible = ctaEl && ctaEl.parentElement && !ctaEl.classList.contains("hidden");

      if (isCtaVisible) {
        dataLayerPush({
          event: "Internal Promotion",
          promoInfo: {
            promoId: undefined,
            promoName: "Förlängning sommarkampanj 2019",
            promoCreative: "Buddy",
            promoPosition: "Buddy",
            promoAction: "Impression"
          }
        });
      }
    }
  }

  function summerExtensionBottomBar() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$userSegments = _ref3.userSegments,
        userSegments = _ref3$userSegments === void 0 ? [] : _ref3$userSegments;

    var bottomBarEl = document.getElementsByClassName("summer-extension-bottom-bar")[0];
    if (!bottomBarEl) return;

    var _bottomBar = bottomBar(bottomBarEl, {
      shouldAppear: shouldAppear,
      handleClose: handleClose
    }),
        hideBottomBar = _bottomBar.hideBottomBar;

    dataLayerPush({
      event: "Internal Promotion",
      promoInfo: {
        promoId: undefined,
        promoName: "Förlängning sommarkampanj 2019",
        promoCreative: "Bottombar",
        promoPosition: "Bottombar",
        promoAction: "Impression"
      }
    });
    var continueButton = bottomBarEl.getElementsByClassName("button--subscribe")[0];

    if (continueButton) {
      continueButton.addEventListener("click", function () {
        hideBottomBar();
        dataLayerPush({
          event: "Internal Promotion",
          promoInfo: {
            promoId: undefined,
            promoName: "Förlängning sommarkampanj 2019",
            promoCreative: "Bottombar",
            promoPosition: "Bottombar",
            promoAction: "Click"
          }
        });
        summerExtensionModal({
          force: true,
          expanded: true,
          userSegments: userSegments
        });
      });
    }

    function shouldAppear() {
      return !storage.getItem("hasSeenBottomBar");
    }

    function handleClose() {
      storage.setItem("hasSeenBottomBar", true);
    }
  }

  function summerExtensionModal() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$force = _ref4.force,
        force = _ref4$force === void 0 ? false : _ref4$force,
        _ref4$expanded = _ref4.expanded,
        expanded = _ref4$expanded === void 0 ? false : _ref4$expanded,
        _ref4$userSegments = _ref4.userSegments,
        userSegments = _ref4$userSegments === void 0 ? [] : _ref4$userSegments;

    if (shouldNotAppear()) {
      if (!hasClosedCta()) {
        pubsub.publish("summerExtensionCta.show");
        summerExtensionBottomBar({
          userSegments: userSegments
        });
      }

      return false;
    }

    var modalEl = document.getElementsByClassName("summer-extension-modal")[0];
    if (!modalEl) return false;
    var offerRedeemed;
    pubsub.subscribe("modal.closed", modalClosed);
    var modal = initModal(modalEl);
    modal.open(); //storage.setItem("hasSeenTakeover", true);

    var continueButton = modalEl.getElementsByClassName("summer-extension-modal__continue-button")[0];
    if (continueButton) continueButton.addEventListener("click", showContent);

    if (!expanded) {
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Förlängning sommarkampanj 2019",
          flowName: "Non-Campaigner Popup",
          stepName: "Start",
          stepVariant: undefined,
          flowVariant: undefined,
          period: undefined,
          product: undefined
        }
      });
    }

    dataLayerPush({
      event: "trackEvent",
      gtmCategory: "AB-test",
      gtmAction: "DN sommarkampanj Kvitto",
      gtmLabel: "Original"
    });
    var topEl = modalEl.getElementsByClassName("summer-extension-modal__top")[0];
    var actionsEl = modalEl.getElementsByClassName("summer-extension-modal__actions")[0];
    var barEl = modalEl.getElementsByClassName("summer-extension-modal__bar")[0];
    var upsaleEl = modalEl.getElementsByClassName("summer-extension-modal__upsale")[0];
    var contentEl = modalEl.getElementsByClassName("summer-extension-modal__content")[0];
    var logosEl = modalEl.getElementsByClassName("summer-extension-modal__logos")[0];
    if (expanded) showContent();
    return true;

    function shouldNotAppear() {
      return !force && (hasClosedModal() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function modalClosed() {
      history.replaceState(null, null, " ");
      if (offerRedeemed) return;
      pubsub.publish("summerExtensionCta.show");
      pubsub.unsubscribe("modal.closed", modalClosed);
      var modalTimesClosed = (storage.getItem("summerExtensionModal.timesClosed") || 0) + 1;
      storage.setItem("summerExtensionModal.timesClosed", modalTimesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (modalTimesClosed < 2) {
        storage.setItem("summerExtensionModal.hideModal", true, {
          expires: dateFromDays(3)
        });
      }
    }

    function showContent() {
      modalEl.classList.add("summer-extension-modal--expanded");
      if (logosEl) logosEl.classList.add("hidden");
      if (actionsEl) actionsEl.classList.add("hidden");
      if (contentEl) contentEl.classList.remove("hidden");
      Promise.resolve().then(loadIframeResizer).then(loadPaywall);
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Förlängning sommarkampanj 2019",
          flowName: "Non-Campaigner Popup",
          stepName: "Payment",
          stepVariant: undefined,
          flowVariant: undefined,
          period: undefined,
          product: "DN Digital Bas"
        }
      });
    }

    function showUpsale(event, originalOrderId) {
      offerRedeemed = true;
      pubsub.subscribe("autogiroUpsale:completed", function () {
        return showReceipt();
      });
      pubsub.subscribe("autogiroUpsale:canceled", function () {
        return modal.close();
      });
      if (topEl) topEl.classList.add("hidden");
      if (upsaleEl) upsaleEl.classList.remove("hidden");
      if (barEl) barEl.classList.remove("hidden");
      if (logosEl) logosEl.classList.remove("hidden");
      if (contentEl) contentEl.parentElement.removeChild(contentEl);
      storage.setItem("summerExtensionModal.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("summerExtensionCta.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("summerExtensionCta.hide");
      window.fetch("/ajax/splus/klarna-params?originalOrderId=".concat(originalOrderId)).then(function (response) {
        return response.json();
      }).then(function (klarnaParams) {
        pubsub.subscribe("autogiroUpsale:showForm", function upsaleImpression() {
          dataLayerPush({
            event: "Flow Impression",
            flowInfo: {
              flowId: "Förlängning sommarkampanj 2019",
              flowName: "Non-Campaigner Popup",
              stepName: "Autogiro Information",
              stepVariant: undefined,
              flowVariant: undefined,
              period: undefined,
              product: "DN Digital Bas"
            }
          });
          pubsub.unsubscribe("autogiroUpsale:showForm", upsaleImpression);
        });
        autogiroUpsale(modalEl, {
          userSegments: userSegments,
          klarnaParams: klarnaParams
        });
      });
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Förlängning sommarkampanj 2019",
          flowName: "Non-Campaigner Popup",
          stepName: "Purchase Receipt",
          stepVariant: "Autogiro",
          flowVariant: undefined,
          period: undefined,
          product: "DN Digital Bas"
        },
        ecommerce: {
          currencyCode: "SEK",
          purchase: {
            actionField: {
              id: originalOrderId,
              // Transaction ID (Required)
              affiliation: "DN"
            },
            products: [{
              name: "DN Digital Bas",
              id: "DN Digital Bas",
              // If there is no product ID then use the same value as in the product name.
              brand: "DN",
              // Static value
              category: "Subscriptions",
              // Static value
              quantity: 1,
              // Number of subscriptions.
              period: undefined,
              purchaseType: "Purchase",
              paymentType: undefined
            }]
          }
        }
      });
    }

    function showReceipt() {
      var receiptEl = modalEl.getElementsByClassName("summer-extension-modal__receipt")[0];
      var step1 = receiptEl.getElementsByClassName("step1")[0];
      var step2 = receiptEl.getElementsByClassName("step2")[0];
      var button = receiptEl.getElementsByClassName("button")[0];
      if (step1) step1.classList.add("hidden");
      if (step2) step2.classList.remove("hidden");
      if (button) button.classList.remove("hidden");
      storage.setItem("summerExtensionModal.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("summerExtensionCta.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("summerExtensionCta.hide");
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Förlängning sommarkampanj 2019",
          flowName: "Non-Campaigner Popup",
          stepName: "Autogiro Confirmation",
          stepVariant: undefined,
          flowVariant: undefined,
          period: undefined,
          product: "DN Digital Bas"
        }
      });
    }

    function loadPaywall() {
      if (window.DN.meta && window.DN.meta.splus) {
        var meta = window.DN.meta.splus;
        var userInfo = window.DN.userInfo || {};
        return scriptLoader("".concat(meta.sdkBaseUrl, "/assets/check-paywall-v3.js?plain=true"), {
          attributes: {
            id: "serviceplusPaywall4",
            "data-appId": "dagensnyheter.se",
            "data-resourceId": "dn.se-election",
            "data-forceHit": true,
            "data-custom-css": true,
            "data-blurheight": 0,
            "data-articleId": 0,
            "data-paywall": "modal-leads",
            "data-clientId": meta.clientId || "",
            "data-idToken": userInfo.idToken || "",
            "data-wrapper": ".resub-wrapper",
            "data-holder": ".resub-wrapper",
            "data-loginUrl": "/login?redirectToUrl=".concat(encodeURIComponent(window.location.href)),
            "data-tags": JSON.stringify({
              referrer: "",
              utmTag: "modal",
              backendPaywall: "false"
            })
          }
        }).then(function () {
          window.$(document).on("offerRedeemed", showUpsale);
        });
      }

      return Promise.resolve();
    }

    function loadIframeResizer() {
      if (window.DN.meta && window.DN.meta.splus) {
        return scriptLoader(window.DN.jQuery).then(function () {
          return scriptLoader("https://ext.dn.se/qs/widgets/arkku2.0/iframeresizer/iframeResizer.min.js");
        });
      }

      return Promise.resolve();
    }
  }

  function hasClosedModal() {
    var timesClosed = storage.getItem("summerExtensionModal.timesClosed") || 0;
    return storage.getItem("summerExtensionModal.hideModal") || timesClosed > 1;
  }

  function hasClosedCta() {
    var timesClosed = storage.getItem("summerExtensionCta.timesClosed") || 0;
    return storage.getItem("summerExtensionCta.hideCta") || timesClosed > 1;
  }

  function youngVoterCampaign(_ref) {
    var userSegments = _ref.userSegments;
    var modalEl = document.getElementsByClassName("young-voter-modal")[0];

    if (modalEl && userSegments) {
      var shouldShowModal = true;

      if (userSegments.includes("DN_UNGA_2018_FNY_B")) {
        modalEl.classList.add("segment-bas");
      } else if (userSegments.includes("DN_UNGA_2018_FNY_U")) {
        modalEl.classList.add("segment-ung");
      } else {
        shouldShowModal = false;
      }

      if (!shouldShowModal) return;
      youngVoterCta({
        userSegments: userSegments
      });
      youngVoterModal({
        userSegments: userSegments
      });
      return true;
    }
  }

  function youngVoterCta() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$userSegments = _ref2.userSegments,
        userSegments = _ref2$userSegments === void 0 ? [] : _ref2$userSegments;

    var ctaEl = campaignCta("young-voter-cta", "youngVoterCta", function () {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Unga Väljare Förnyelse 2019",
          promoCreative: "Buddy",
          promoPosition: "Buddy",
          promoAction: "Click"
        }
      });
      youngVoterModal({
        force: true,
        expanded: true,
        userSegments: userSegments
      });
    });
    pubsub.subscribe("buddyMenu.open", trackImpression);

    function trackImpression() {
      var isCtaVisible = ctaEl && ctaEl.parentElement && !ctaEl.classList.contains("hidden");

      if (isCtaVisible) {
        dataLayerPush({
          event: "Internal Promotion",
          promoInfo: {
            promoId: undefined,
            promoName: "Unga Väljare Förnyelse 2019",
            promoCreative: "Buddy",
            promoPosition: "Buddy",
            promoAction: "Impression"
          }
        });
      }
    }
  }

  function youngVoterBottomBar() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$userSegments = _ref3.userSegments,
        userSegments = _ref3$userSegments === void 0 ? [] : _ref3$userSegments;

    var bottomBarEl = document.getElementsByClassName("young-voter-bottom-bar")[0];
    if (!bottomBarEl) return;

    var _bottomBar = bottomBar(bottomBarEl, {
      shouldAppear: shouldAppear,
      handleClose: handleClose
    }),
        hideBottomBar = _bottomBar.hideBottomBar;

    var continueButton = bottomBarEl.getElementsByClassName("button--subscribe")[0];

    if (continueButton) {
      continueButton.addEventListener("click", function () {
        hideBottomBar();
        dataLayerPush({
          event: "Internal Promotion",
          promoInfo: {
            promoId: undefined,
            promoName: "Unga Väljare Förnyelse 2019",
            promoCreative: "Bottombar",
            promoPosition: "Bottombar",
            promoAction: "Click"
          }
        });
        youngVoterModal({
          force: true,
          expanded: true,
          userSegments: userSegments
        });
      });
    }

    function shouldAppear() {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Unga Väljare Förnyelse 2019",
          promoCreative: "Bottombar",
          promoPosition: "Bottombar",
          promoAction: "Impression"
        }
      });
      return !hasClosedBottomBar() && (hasClosedModal$1() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function handleClose() {
      var timesClosed = (storage.getItem("youngVoterBottomBar.timesClosed") || 0) + 1;
      storage.setItem("youngVoterBottomBar.timesClosed", timesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (timesClosed < 3) {
        storage.setItem("youngVoterBottomBar.hideBottomBar", true, {
          expires: dateFromDays(7)
        });
      }
    }
  }

  function youngVoterModal() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$force = _ref4.force,
        force = _ref4$force === void 0 ? false : _ref4$force,
        _ref4$expanded = _ref4.expanded,
        expanded = _ref4$expanded === void 0 ? false : _ref4$expanded,
        _ref4$userSegments = _ref4.userSegments,
        userSegments = _ref4$userSegments === void 0 ? [] : _ref4$userSegments;

    if (shouldNotAppear()) {
      if (!hasClosedCta$1()) {
        pubsub.publish("youngVoterCta.show");
        youngVoterBottomBar({
          userSegments: userSegments
        });
      }

      return false;
    }

    var modalEl = document.getElementsByClassName("young-voter-modal")[0];
    if (!modalEl) return false;
    var offerRedeemed;
    pubsub.subscribe("modal.closed", modalClosed);
    var modal = initModal(modalEl);
    modal.open(); //storage.setItem("hasSeenTakeover", true);

    var continueButton = modalEl.getElementsByClassName("young-voter-modal__continue-button")[0];
    if (continueButton) continueButton.addEventListener("click", showContent);

    if (!expanded) {
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Unga Väljare Förnyelse 2019",
          flowName: "Popup Purchase Flow",
          stepName: "Start",
          stepVariant: undefined,
          flowVariant: userSegments.join(","),
          period: undefined,
          product: "DN Digital Bas"
        }
      });
    }

    var topEl = modalEl.getElementsByClassName("young-voter-modal__top")[0];
    var actionsEl = modalEl.getElementsByClassName("young-voter-modal__actions")[0];
    var barEl = modalEl.getElementsByClassName("young-voter-modal__bar")[0];
    var upsaleEl = modalEl.getElementsByClassName("young-voter-modal__upsale")[0];
    var contentEl = modalEl.getElementsByClassName("young-voter-modal__content")[0];
    var segmentInfoEl = modalEl.getElementsByClassName("young-voter-modal__top__segment-info")[0];
    var logosEl = modalEl.getElementsByClassName("young-voter-modal__logos")[0];
    if (expanded) showContent();
    return true;

    function shouldNotAppear() {
      return !force && (hasClosedModal$1() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function modalClosed() {
      history.replaceState(null, null, " ");
      if (offerRedeemed) return;
      pubsub.publish("youngVoterCta.show");
      pubsub.unsubscribe("modal.closed", modalClosed);
      var modalTimesClosed = (storage.getItem("youngVoterModal.timesClosed") || 0) + 1;
      storage.setItem("youngVoterModal.timesClosed", modalTimesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (modalTimesClosed < 3) {
        storage.setItem("youngVoterModal.hideModal", true, {
          expires: dateFromDays(3)
        });
      }
    }

    function showContent() {
      modalEl.classList.add("young-voter-modal--expanded");
      if (logosEl) logosEl.classList.add("hidden");
      if (actionsEl) actionsEl.classList.add("hidden");
      if (contentEl) contentEl.classList.remove("hidden");
      if (segmentInfoEl) segmentInfoEl.classList.remove("hidden");
      Promise.resolve().then(loadIframeResizer).then(loadPaywall);
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Unga Väljare Förnyelse 2019",
          flowName: "Popup Purchase Flow",
          stepName: "Payment",
          stepVariant: undefined,
          flowVariant: userSegments.join(","),
          period: undefined,
          product: "DN Digital Bas"
        }
      });
    }

    function showUpsale(event, originalOrderId) {
      offerRedeemed = true;
      pubsub.subscribe("autogiroUpsale:completed", function () {
        return showReceipt();
      });
      pubsub.subscribe("autogiroUpsale:canceled", function () {
        return modal.close();
      });
      if (topEl) topEl.classList.add("hidden");
      if (upsaleEl) upsaleEl.classList.remove("hidden");
      if (barEl) barEl.classList.remove("hidden");
      if (logosEl) logosEl.classList.remove("hidden");
      if (contentEl) contentEl.parentElement.removeChild(contentEl);
      if (segmentInfoEl) segmentInfoEl.parentElement.removeChild(segmentInfoEl);
      storage.setItem("youngVoterModal.timesClosed", 3, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("youngVoterCta.timesClosed", 3, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("youngVoterBottomBar.timesClosed", 3, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("youngVoterCta.hide");
      window.fetch("/ajax/splus/klarna-params?originalOrderId=".concat(originalOrderId)).then(function (response) {
        return response.json();
      }).then(function (klarnaParams) {
        pubsub.subscribe("autogiroUpsale:showForm", function upsaleImpression() {
          dataLayerPush({
            event: "Flow Impression",
            flowInfo: {
              flowId: "Unga Väljare Förnyelse 2019",
              flowName: "Popup Purchase Flow",
              stepName: "Autogiro Information",
              stepVariant: undefined,
              flowVariant: userSegments.join(","),
              period: undefined,
              product: "DN Digital Bas"
            }
          });
          pubsub.unsubscribe("autogiroUpsale:showForm", upsaleImpression);
        });
        autogiroUpsale(modalEl, {
          userSegments: userSegments,
          klarnaParams: klarnaParams
        });
      });
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Unga Väljare Förnyelse 2019",
          flowName: "Popup Purchase Flow",
          stepName: "Purchase Receipt",
          stepVariant: "Autogiro",
          flowVariant: userSegments.join(","),
          period: undefined,
          product: "DN Digital Bas"
        },
        ecommerce: {
          currencyCode: "SEK",
          purchase: {
            actionField: {
              id: originalOrderId,
              // Transaction ID (Required)
              affiliation: "DN"
            },
            products: [{
              name: "DN Digital Bas",
              id: "DN Digital Bas",
              // If there is no product ID then use the same value as in the product name.
              brand: "DN",
              // Static value
              category: "Subscriptions",
              // Static value
              quantity: 1,
              // Number of subscriptions.
              period: undefined,
              purchaseType: "Purchase",
              paymentType: undefined
            }]
          }
        }
      });
    }

    function showReceipt() {
      var receiptEl = modalEl.getElementsByClassName("young-voter-modal__receipt")[0];
      var step1 = receiptEl.getElementsByClassName("step1")[0];
      var step2 = receiptEl.getElementsByClassName("step2")[0];
      var button = receiptEl.getElementsByClassName("button")[0];
      if (step1) step1.classList.add("hidden");
      if (step2) step2.classList.remove("hidden");
      if (button) button.classList.remove("hidden");
      storage.setItem("youngVoterModal.timesClosed", 3, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("youngVoterCta.timesClosed", 3, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("youngVoterBottomBar.timesClosed", 3, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("youngVoterCta.hide");
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Unga Väljare Förnyelse 2019",
          flowName: "Popup Purchase Flow",
          stepName: "Autogiro Confirmation",
          stepVariant: undefined,
          flowVariant: userSegments.join(","),
          period: undefined,
          product: "DN Digital Bas"
        }
      });
    }

    function loadPaywall() {
      if (window.DN.meta && window.DN.meta.splus) {
        var meta = window.DN.meta.splus;
        var userInfo = window.DN.userInfo || {};
        var paywall = "";

        if (userSegments.includes("DN_UNGA_2018_FNY_U")) {
          paywall = "modal-youth1";
        } else if (userSegments.includes("DN_UNGA_2018_FNY_B")) {
          paywall = "modal-youth2";
        }

        return scriptLoader("".concat(meta.sdkBaseUrl, "/assets/check-paywall-v3.js?plain=true"), {
          attributes: {
            id: "serviceplusPaywall4",
            "data-appId": "dagensnyheter.se",
            "data-resourceId": "dn.se-election",
            // use fake ID to allow the user to buy something they already own.
            "data-forceHit": true,
            "data-custom-css": true,
            "data-blurheight": 0,
            "data-articleId": 0,
            "data-paywall": paywall,
            "data-clientId": meta.clientId || "",
            "data-idToken": userInfo.idToken || "",
            "data-wrapper": ".resub-wrapper",
            "data-holder": ".resub-wrapper",
            "data-loginUrl": "/login?redirectToUrl=".concat(encodeURIComponent(window.location.href)),
            "data-tags": JSON.stringify({
              referrer: "",
              utmTag: "modal",
              backendPaywall: "false"
            })
          }
        }).then(function () {
          window.$(document).on("offerRedeemed", showUpsale);
        });
      }

      return Promise.resolve();
    }

    function loadIframeResizer() {
      if (window.DN.meta && window.DN.meta.splus) {
        return scriptLoader(window.DN.jQuery).then(function () {
          return scriptLoader("https://ext.dn.se/qs/widgets/arkku2.0/iframeresizer/iframeResizer.min.js");
        });
      }

      return Promise.resolve();
    }
  }

  function hasClosedModal$1() {
    var timesClosed = storage.getItem("youngVoterModal.timesClosed") || 0;
    return storage.getItem("youngVoterModal.hideModal") || timesClosed > 2;
  }

  function hasClosedCta$1() {
    var timesClosed = storage.getItem("youngVoterCta.timesClosed") || 0;
    return storage.getItem("youngVoterCta.hideCta") || timesClosed > 2;
  }

  function hasClosedBottomBar() {
    var timesClosed = storage.getItem("youngVoterBottomBar.timesClosed") || 0;
    return storage.getItem("youngVoterBottomBar.hideBottomBar") || timesClosed > 2;
  }

  function afterChurnCampaign(_ref) {
    var userSegments = _ref.userSegments;
    var afterChurnEl = document.getElementsByClassName("after-churn-modal")[0];

    if (afterChurnEl) {
      if (userSegments.includes("FORL_BAS_19_E")) {
        afterChurnEl.classList.add("variant-a");
      } else if (userSegments.includes("FORL_DIG_19_E")) {
        afterChurnEl.classList.add("variant-b");
      }

      afterChurnCta({
        userSegments: userSegments
      });
      afterChurnModal({
        userSegments: userSegments
      });
      return true;
    }
  }

  function afterChurnCta() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$userSegments = _ref2.userSegments,
        userSegments = _ref2$userSegments === void 0 ? [] : _ref2$userSegments;

    var ctaEl = campaignCta("after-churn-cta", "afterChurnCta", function () {
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Interaction",
          eventAction: "User Profile Popover Meny",
          eventLabel: "Subscription Renewal - After Churn-BAS",
          //'Subscription Renewal - After Churn-DIG'
          nonInteraction: false
        }
      });
      afterChurnModal({
        force: true,
        expanded: true,
        userSegments: userSegments
      });
    });
    pubsub.subscribe("buddyMenu.open", trackImpression);

    function trackImpression() {
      var isCtaVisible = ctaEl && ctaEl.parentElement && !ctaEl.classList.contains("hidden");

      if (isCtaVisible) {
        dataLayerPush({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Impression",
            eventAction: "User Profile Popover Meny",
            eventLabel: "Subscription Renewal - After Churn-BAS",
            //"Subscription Renewal - After Churn-DIG"
            nonInteraction: true
          }
        });
      }
    }
  }

  function afterChurnModal() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$force = _ref3.force,
        force = _ref3$force === void 0 ? false : _ref3$force,
        _ref3$expanded = _ref3.expanded,
        expanded = _ref3$expanded === void 0 ? false : _ref3$expanded,
        userSegments = _ref3.userSegments;

    if (shouldNotAppear()) {
      if (!hasClosedCta$2()) pubsub.publish("afterChurnCta.show");
      return false;
    }

    var modalEl = document.getElementsByClassName("after-churn-modal")[0];
    if (!modalEl) return false;
    var variant;

    if (userSegments.includes("FORL_BAS_19_E")) {
      variant = "a";
    } else if (userSegments.includes("FORL_DIG_19_E")) {
      variant = "b";
    }

    var offerRedeemed;
    pubsub.subscribe("modal.closed", modalClosed);
    var modal = initModal(modalEl);
    modal.open();
    storage.setItem("hasSeenTakeover", true);
    var continueButton = modalEl.getElementsByClassName("after-churn-modal__continue-button")[0];
    if (continueButton) continueButton.addEventListener("click", showContent);
    dataLayerPush({
      event: "Google Analytics Event",
      eventInfo: {
        eventCategory: "Impression",
        eventAction: variant === "a" ? "Subscription Renewal - After Churn-BAS" : "Subscription Renewal - After Churn-DIG",
        eventLabel: "Offer",
        nonInteraction: true
      }
    });
    var topEl = modalEl.getElementsByClassName("after-churn-modal__top")[0];
    var barEl = modalEl.getElementsByClassName("after-churn-modal__bar")[0];
    var contentEl = modalEl.getElementsByClassName("after-churn-modal__content")[0];
    var logosEl = modalEl.getElementsByClassName("after-churn-modal__logos")[0];
    if (expanded) showContent();
    return true;

    function shouldNotAppear() {
      return !force && (hasClosedModal$2() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function modalClosed() {
      if (offerRedeemed) return;
      pubsub.publish("afterChurnCta.show");
      pubsub.unsubscribe("modal.closed", modalClosed);
      var modalTimesClosed = (storage.getItem("afterChurnModal.timesClosed") || 0) + 1;
      storage.setItem("afterChurnModal.timesClosed", modalTimesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (modalTimesClosed < 2) {
        storage.setItem("afterChurnModal.hideModal", true, {
          expires: dateFromDays(3)
        });
      }
    }

    function showContent() {
      modalEl.classList.add("after-churn-modal--expanded");
      if (topEl) topEl.classList.add("hidden");
      if (logosEl) logosEl.classList.add("hidden");
      if (barEl) barEl.classList.remove("hidden");
      if (contentEl) contentEl.classList.remove("hidden");
      Promise.resolve().then(loadIframeResizer).then(loadPaywall);
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Impression",
          eventAction: variant === "a" ? "Subscription Renewal - After Churn-BAS" : "Subscription Renewal - After Churn-DIG",
          eventLabel: "Registration",
          nonInteraction: true
        }
      });
    }

    function showReceipt() {
      offerRedeemed = true;
      modalEl.classList.remove("after-churn-modal--expanded");
      var receiptEl = modalEl.getElementsByClassName("after-churn-modal__receipt")[0];
      if (receiptEl) receiptEl.classList.remove("hidden");
      if (logosEl) logosEl.classList.remove("hidden");
      if (barEl) barEl.classList.add("hidden");
      if (contentEl) contentEl.classList.add("hidden");
      storage.setItem("afterChurnModal.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("afterChurnCta.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("afterChurnCta.hide");
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Impression",
          eventAction: variant === "a" ? "Subscription Renewal - After Churn-BAS" : "Subscription Renewal - After Churn-DIG",
          eventLabel: "Receipt",
          nonInteraction: true
        }
      });
    }

    function loadPaywall() {
      if (window.DN.meta && window.DN.meta.splus) {
        var meta = window.DN.meta.splus;
        var userInfo = window.DN.userInfo || {};
        return scriptLoader("".concat(meta.sdkBaseUrl, "/assets/check-paywall-v3.js?plain=true"), {
          attributes: {
            id: "serviceplusPaywall4",
            "data-appId": "dagensnyheter.se",
            "data-resourceId": "dn.se-election",
            "data-forceHit": true,
            "data-custom-css": true,
            "data-blurheight": 0,
            "data-articleId": 0,
            "data-paywall": variant === "a" ? "modal" : "modal-digital",
            "data-clientId": meta.clientId || "",
            "data-idToken": userInfo.idToken || "",
            "data-wrapper": ".resub-wrapper",
            "data-holder": ".resub-wrapper",
            "data-loginUrl": "/login?redirectToUrl=".concat(encodeURIComponent(window.location.href)),
            "data-tags": JSON.stringify({
              referrer: "",
              utmTag: variant === "a" ? "modal" : "modal-digital",
              backendPaywall: "false"
            })
          }
        }).then(function () {
          window.$(document).on("offerRedeemed", showReceipt);
        });
      }

      return Promise.resolve();
    }

    function loadIframeResizer() {
      if (window.DN.meta && window.DN.meta.splus) {
        return scriptLoader(window.DN.jQuery).then(function () {
          return scriptLoader("https://ext.dn.se/qs/widgets/arkku2.0/iframeresizer/iframeResizer.min.js");
        });
      }

      return Promise.resolve();
    }
  }

  function hasClosedModal$2() {
    var timesClosed = storage.getItem("afterChurnModal.timesClosed") || 0;
    return storage.getItem("afterChurnModal.hideModal") || timesClosed > 1;
  }

  function hasClosedCta$2() {
    var timesClosed = storage.getItem("afterChurnCta.timesClosed") || 0;
    return storage.getItem("afterChurnCta.hideCta") || timesClosed > 1;
  }

  function diCrossSaleCampaign(_ref) {
    var userSegments = _ref.userSegments;
    var diCrossSaleEl = document.getElementsByClassName("di-cross-sale-modal")[0];

    if (diCrossSaleEl) {
      diCrossSaleCta({
        userSegments: userSegments
      });
      diCrossSaleBottomBar({
        userSegments: userSegments
      });
      diCrossSaleModal({
        userSegments: userSegments
      });
      return true;
    }
  }

  function diCrossSaleCta() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$userSegments = _ref2.userSegments,
        userSegments = _ref2$userSegments === void 0 ? [] : _ref2$userSegments;

    var ctaEl = campaignCta("di-cross-sale-cta", "diCrossSaleCta", function () {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Cross Sales - DI Offer",
          promoCreative: "Buddy",
          promoPosition: "Buddy",
          promoAction: "Click"
        }
      });
      diCrossSaleModal({
        force: true,
        expanded: true,
        userSegments: userSegments
      });
    });
    pubsub.subscribe("buddyMenu.open", trackImpression);

    function trackImpression() {
      var isCtaVisible = ctaEl && ctaEl.parentElement && !ctaEl.classList.contains("hidden");

      if (isCtaVisible) {
        dataLayerPush({
          event: "Internal Promotion",
          promoInfo: {
            promoId: undefined,
            promoName: "Cross Sales - DI Offer",
            promoCreative: "Buddy",
            promoPosition: "Buddy",
            promoAction: "Impression"
          }
        });
      }
    }
  }

  function diCrossSaleBottomBar() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$userSegments = _ref3.userSegments,
        userSegments = _ref3$userSegments === void 0 ? [] : _ref3$userSegments;

    var bottomBarEl = document.getElementsByClassName("di-cross-sale-bottom-bar")[0];
    if (!bottomBarEl) return;
    bottomBarEl.classList.remove("hidden");
    var continueButton = bottomBarEl.getElementsByClassName("di-cross-sale-bottom-bar__button")[0];
    if (continueButton) continueButton.addEventListener("click", handleClick);
    bottomBar(bottomBarEl, {
      shouldAppear: shouldAppear,
      handleClose: handleClose
    });

    function shouldAppear() {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Cross Sales - DI Offer",
          promoCreative: "Bottombar",
          promoPosition: "Bottombar",
          promoAction: "Impression"
        }
      });
      return !hasClosedBottomBar$1() && (hasClosedModal$3() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function handleClose() {
      var timesClosed = (storage.getItem("diCrossSaleBottomBar.timesClosed") || 0) + 1;
      storage.setItem("diCrossSaleBottomBar.timesClosed", timesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (timesClosed < 2) {
        storage.setItem("diCrossSaleBottomBar.hideBottomBar", true, {
          expires: dateFromDays(7)
        });
      }
    }

    function handleClick() {
      diCrossSaleModal({
        force: true,
        expanded: true,
        userSegments: userSegments
      });
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Cross Sales - DI Offer",
          promoCreative: "Bottombar",
          promoPosition: "Bottombar",
          promoAction: "Click"
        }
      });
      bottomBarEl.classList.add("hidden");
      handleClose();
    }
  }

  function diCrossSaleModal() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$force = _ref4.force,
        force = _ref4$force === void 0 ? false : _ref4$force,
        _ref4$expanded = _ref4.expanded,
        expanded = _ref4$expanded === void 0 ? false : _ref4$expanded,
        _ref4$userSegments = _ref4.userSegments,
        userSegments = _ref4$userSegments === void 0 ? [] : _ref4$userSegments;

    if (shouldNotAppear()) {
      if (!hasClosedCta$3()) pubsub.publish("diCrossSaleCta.show");
      return false;
    }

    var modalEl = document.getElementsByClassName("di-cross-sale-modal")[0];
    if (!modalEl) return false;
    var offerRedeemed;
    pubsub.subscribe("modal.closed", modalClosed);
    var modal = initModal(modalEl);
    modal.open();
    storage.setItem("hasSeenTakeover", true);
    var continueButton = modalEl.getElementsByClassName("di-cross-sale-modal__continue-button")[0];
    if (continueButton) continueButton.addEventListener("click", showContent);

    if (!expanded) {
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Cross Sales - DI Offer",
          flowName: "Popup Purchase Flow",
          stepName: "Start",
          stepVariant: undefined,
          flowVariant: userSegments.join(","),
          period: undefined,
          product: "Di Digitalt" // Di Total, Di Helg

        }
      });
    }

    var startEl = modalEl.getElementsByClassName("di-cross-sale-modal__start")[0];
    var paymentEl = modalEl.getElementsByClassName("di-cross-sale-modal__payment")[0];
    if (expanded) showContent();
    return true;

    function shouldNotAppear() {
      return !force && (hasClosedModal$3() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function modalClosed(_ref5) {
      var event = _ref5.event;
      history.replaceState(null, null, " ");
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Popup Purchase Flow",
          eventAction: "Cross Sales - DI Offer - Interaction",
          eventLabel: event.target.matches(".button") ? "Nej tack" : "Stäng",
          nonInteraction: false
        }
      });
      if (offerRedeemed) return;
      pubsub.publish("diCrossSaleCta.show");
      pubsub.unsubscribe("modal.closed", modalClosed);
      var modalTimesClosed = (storage.getItem("diCrossSaleModal.timesClosed") || 0) + 1;
      storage.setItem("diCrossSaleModal.timesClosed", modalTimesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (modalTimesClosed < 2) {
        storage.setItem("diCrossSaleModal.hideModal", true, {
          expires: dateFromDays(3)
        });
      }
    }

    function showContent() {
      if (startEl) startEl.classList.add("hidden");
      if (paymentEl) paymentEl.classList.remove("hidden");

      if (!expanded) {
        dataLayerPush({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Popup Purchase Flow",
            eventAction: "Cross Sales - DI Offer - Interaction",
            eventLabel: "Gå vidare",
            nonInteraction: false
          }
        });
      }

      Promise.resolve().then(loadIframeResizer).then(loadPaywall);
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Cross Sales - DI Offer",
          flowName: "Popup Purchase Flow",
          stepName: "Payment",
          stepVariant: undefined,
          flowVariant: userSegments.join(","),
          period: undefined,
          product: "Di Digitalt" // Di Total, Di Helg

        }
      });
    }

    function showReceipt(event, orderId) {
      offerRedeemed = true;
      modalEl.classList.remove("di-cross-sale-modal--expanded");
      var confirmationEl = modalEl.getElementsByClassName("di-cross-sale-modal__confirmation")[0];
      if (confirmationEl) confirmationEl.classList.remove("hidden");
      if (paymentEl) paymentEl.classList.add("hidden");
      storage.setItem("diCrossSaleModal.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("diCrossSaleCta.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("diCrossSaleCta.hide");
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Cross Sales - DI Offer",
          flowName: "Popup Purchase Flow",
          stepName: "Purchase Receipt",
          stepVariant: undefined,
          flowVariant: userSegments.join(","),
          period: undefined,
          product: "Di Digitalt" // Di Total, Di Helg

        },
        ecommerce: {
          currencyCode: "SEK",
          purchase: {
            actionField: {
              id: orderId,
              affiliation: "DN"
            },
            products: [{
              name: "Di Digitalt",
              // Di Total, Di Helg
              id: "Di Digitalt",
              // If there is no product ID then use the same value as in the product name.
              brand: "DI",
              // Static value
              category: "Subscriptions",
              // Static value
              quantity: 1,
              // Number of subscriptions.
              period: undefined,
              purchaseType: "Purchase",
              paymentType: undefined
            }]
          }
        }
      });
    }

    function loadPaywall() {
      if (window.DN.meta && window.DN.meta.splus) {
        var meta = window.DN.meta.splus;
        var userInfo = window.DN.userInfo || {};
        var variantType = "CROSS-LARGE";
        return scriptLoader(meta.diPaywallScript, {
          attributes: {
            id: "serviceplusPaywall4",
            "data-appId": "di.se",
            "data-resourceId": "di.se",
            "data-forceHit": true,
            "data-custom-css": true,
            "data-blurheight": 0,
            "data-articleId": 0,
            "data-paywall": variantType,
            "data-clientId": meta.clientId || "",
            "data-idToken": userInfo.idToken || "",
            "data-wrapper": ".cross-sale-paywall-wrapper",
            "data-holder": ".cross-sale-paywall-wrapper",
            "data-loginUrl": "/login?redirectToUrl=".concat(encodeURIComponent(window.location.href)),
            "data-tags": JSON.stringify({
              referrer: "",
              utmTag: variantType,
              backendPaywall: "false",
              dnUserId: userInfo.userId,
              dnUserSegments: userSegments.join(",")
            })
          }
        }).then(function () {
          window.$(document).on("offerRedeemed", showReceipt);
        });
      }

      return Promise.resolve();
    }

    function loadIframeResizer() {
      if (window.DN.meta && window.DN.meta.splus) {
        return scriptLoader(window.DN.jQuery).then(function () {
          return scriptLoader("https://ext.dn.se/qs/widgets/arkku2.0/iframeresizer/iframeResizer.min.js");
        });
      }

      return Promise.resolve();
    }
  }

  function hasClosedModal$3() {
    var timesClosed = storage.getItem("diCrossSaleModal.timesClosed") || 0;
    return storage.getItem("diCrossSaleModal.hideModal") || timesClosed > 1;
  }

  function hasClosedCta$3() {
    var timesClosed = storage.getItem("diCrossSaleCta.timesClosed") || 0;
    return storage.getItem("diCrossSaleCta.hideCta") || timesClosed > 1;
  }

  function hasClosedBottomBar$1() {
    var timesClosed = storage.getItem("diCrossSaleBottomBar.timesClosed") || 0;
    return storage.getItem("diCrossSaleBottomBar.hideBottomBar") || timesClosed > 1;
  }

  function autogiroCampaign(_ref) {
    var userInfo = _ref.userInfo,
        userSegments = _ref.userSegments;
    if (!userInfo) return;
    var autogiroEl = document.getElementsByClassName("ag-modal")[0];

    if (autogiroEl) {
      autogiroCta({
        userSegments: userSegments
      });
      autogiroModal({
        userSegments: userSegments
      });
      return true;
    }
  }

  function autogiroCta() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$userSegments = _ref2.userSegments,
        userSegments = _ref2$userSegments === void 0 ? [] : _ref2$userSegments;

    campaignCta("autogiro-cta", "autogiroCta", function () {
      autogiroModal({
        force: true,
        expanded: true,
        userSegments: userSegments
      });
    });
  }

  function autogiroModal() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$force = _ref3.force,
        force = _ref3$force === void 0 ? false : _ref3$force,
        _ref3$expanded = _ref3.expanded,
        expanded = _ref3$expanded === void 0 ? false : _ref3$expanded,
        _ref3$userSegments = _ref3.userSegments,
        userSegments = _ref3$userSegments === void 0 ? [] : _ref3$userSegments;

    var autogiroEl = document.getElementsByClassName("ag-modal")[0];
    if (!autogiroEl) return false;
    getSubscriberInfo().then(function (response) {
      if (response === null) {
        return Promise.reject();
      }
    }).then(function () {
      return scriptLoader("https://ext.dn.se/qs/widgets/arkku2.0/iframeresizer/iframeResizer.min.js");
    }).then(function () {
      var iFrameResize = window.iFrameResize;

      if (!iFrameResize) {
        return;
      }

      if (window.DN.meta && window.DN.meta.splus) {
        setTimeout(function () {
          var iframe = document.getElementsByClassName("splus-subscribe-frame")[0];
          iFrameResize({
            checkOrigin: false,
            log: true,
            heightCalculationMethod: "bodyScroll"
          }, iframe);
        }, 10);
      }
    }).then(initAutogiroModal).catch(handleWithRaven);

    function initAutogiroModal() {
      if (shouldNotAppear()) {
        if (!hasClosedCta()) pubsub.publish("autogiroCta.show");
        return false;
      }
      pubsub.subscribe("modal.closed", modalClosed);
      var agForm = document.getElementById("subscribe-input-form");
      var modal = initModal(autogiroEl);
      agForm.submit();
      modal.open();
      storage.setItem("hasSeenTakeover", true);
      var continueButton = autogiroEl.getElementsByClassName("autogiro-modal__continue-button")[0];
      if (continueButton) continueButton.addEventListener("click", showContent);
      var topEl = autogiroEl.getElementsByClassName("autogiro-modal__top")[0];
      var contentEl = autogiroEl.getElementsByClassName("autogiro-modal__content")[0];
      var logosEl = autogiroEl.getElementsByClassName("autogiro-modal__logos")[0];

      if (expanded) {
        showContent();
      }

      dataLayerPush({
        event: "Overlay",
        eventInfo: {
          action: "Impression",
          flowName: "Change to Autogiro - New Purchase Flow",
          stepName: "Autogiro Offer",
          segmentId: userSegments
        }
      });
      return true;

      function modalClosed() {
        pubsub.publish("autogiroCta.show");
        pubsub.unsubscribe("modal.closed", modalClosed);
        var modalTimesClosed = (storage.getItem("autogiroModal.timesClosed") || 0) + 1;
        storage.setItem("autogiroModal.timesClosed", modalTimesClosed, {
          expires: dateFromDays(5 * 365)
        });

        if (modalTimesClosed < 2) {
          storage.setItem("autogiroModal.hideModal", true, {
            expires: dateFromDays(3)
          });
        }
      }

      function showContent() {
        autogiroEl.classList.add("autogiro-modal--expanded");
        var actionsEl = topEl.getElementsByClassName("autogiro-modal__actions")[0];
        if (actionsEl) actionsEl.parentElement.removeChild(actionsEl);
        if (logosEl) logosEl.classList.add("hidden");
        if (contentEl) contentEl.classList.remove("hidden");
        dataLayerPush({
          event: "Overlay",
          eventInfo: {
            action: "Impression",
            flowName: "Change to Autogiro - New Purchase Flow",
            stepName: "Autogiro Activation"
          }
        });
      }
    }

    function shouldNotAppear() {
      return !force && (hasClosedModal() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function getSubscriberInfo() {
      return window.fetch("/ajax/subscriberinfo/").then(function (response) {
        if (response.status < 400) {
          response.json().then(function (json) {
            var agForm = document.getElementById("subscribe-input-form");
            var agFormElements = agForm.elements;
            agFormElements.subscriberId.value = json.subscriberId;
            agFormElements.subscriptionId.value = json.subscriptionId;
            agFormElements.originatingSystem.value = json.originatingSystem;
          });
          return;
        }

        return null;
      }).catch(function (ex) {
        console.log(ex); //eslint-disable-line
      });
    }

    function hasClosedModal() {
      var timesClosed = storage.getItem("autogiroModal.timesClosed") || 0;
      return storage.getItem("autogiroModal.hideModal") || timesClosed > 1;
    }

    function hasClosedCta() {
      var timesClosed = storage.getItem("autogiroCta.timesClosed") || 0;
      return storage.getItem("autogiroCta.hideCta") || timesClosed > 1;
    }
  }

  function churnCampaign(_ref) {
    var userSegments = _ref.userSegments;
    var churnEl = document.getElementsByClassName("churn-modal")[0];

    if (churnEl) {
      churnCta({
        userSegments: userSegments
      });
      churnModal({
        userSegments: userSegments
      });
      return true;
    }
  }

  function churnCta() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$userSegments = _ref2.userSegments,
        userSegments = _ref2$userSegments === void 0 ? [] : _ref2$userSegments;

    var ctaEl = campaignCta("churn-cta", "churnCta", modalOpener);
    pubsub.subscribe("buddyMenu.open", trackImpression);

    function modalOpener() {
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Interaction",
          eventAction: "User Profile Popover Meny",
          eventLabel: "Subscription Renewal - Click",
          nonInteraction: false
        }
      });
      churnModal({
        force: true,
        expanded: true,
        userSegments: userSegments
      });
    }

    function trackImpression() {
      var isCtaVisible = ctaEl && ctaEl.parentElement && !ctaEl.classList.contains("hidden");

      if (isCtaVisible) {
        dataLayerPush({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Impression",
            eventAction: "User Profile Popover Meny",
            eventLabel: "Subscription Renewal",
            nonInteraction: true
          }
        });
      }
    }
  }

  function churnModal() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$force = _ref3.force,
        force = _ref3$force === void 0 ? false : _ref3$force,
        _ref3$expanded = _ref3.expanded,
        expanded = _ref3$expanded === void 0 ? false : _ref3$expanded,
        _ref3$userSegments = _ref3.userSegments,
        userSegments = _ref3$userSegments === void 0 ? [] : _ref3$userSegments;

    if (shouldNotAppear()) {
      if (!hasClosedCta$4()) pubsub.publish("churnCta.show");
      return false;
    }

    var churnEl = document.getElementsByClassName("churn-modal")[0];
    if (!churnEl) return false;
    var churnRedeemed;
    pubsub.subscribe("modal.closed", modalClosed);
    var modal = initModal(churnEl);
    modal.open();
    storage.setItem("hasSeenTakeover", true);
    var continueButton = churnEl.getElementsByClassName("churn-modal__continue-button")[0];
    if (continueButton) continueButton.addEventListener("click", showContent);
    dataLayerPush({
      event: "Google Analytics Event",
      eventInfo: {
        eventCategory: "Impression",
        eventAction: "Subscription Renewal",
        eventLabel: "Offer",
        nonInteraction: true
      }
    });
    var topEl = churnEl.getElementsByClassName("churn-modal__top")[0];
    var barEl = churnEl.getElementsByClassName("churn-modal__bar")[0];
    var contentEl = churnEl.getElementsByClassName("churn-modal__content")[0];
    var logosEl = churnEl.getElementsByClassName("churn-modal__logos")[0];
    if (expanded) showContent();
    return true;

    function shouldNotAppear() {
      return !force && (hasClosedModal$4() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function modalClosed() {
      if (churnRedeemed) return;
      pubsub.publish("churnCta.show");
      pubsub.unsubscribe("modal.closed", modalClosed);
      var modalTimesClosed = (storage.getItem("churnModal.timesClosed") || 0) + 1;
      storage.setItem("churnModal.timesClosed", modalTimesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (modalTimesClosed < 2) {
        storage.setItem("churnModal.hideModal", true, {
          expires: dateFromDays(3)
        });
      }
    }

    function showContent() {
      churnEl.classList.add("churn-modal--expanded");
      if (topEl) topEl.classList.add("hidden");
      if (logosEl) logosEl.classList.add("hidden");
      if (barEl) barEl.classList.remove("hidden");
      if (contentEl) contentEl.classList.remove("hidden");
      loadIframe();
      window.addEventListener("message", handleMessage);
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Impression",
          eventAction: "Subscription Renewal",
          eventLabel: "Registration",
          nonInteraction: true
        }
      });
    }

    function handleMessage(event) {
      if (event.data === "close") {
        modal.close();
        window.removeEventListener("message", handleMessage);
      }

      if (event.data === "receipt") {
        handleReceipt();
        window.removeEventListener("message", handleMessage);
      }
    }

    function handleReceipt() {
      churnRedeemed = true;
      storage.setItem("churnModal.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("churnCta.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("churnCta.hide");
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Impression",
          eventAction: "Subscription Renewal",
          eventLabel: "Receipt",
          nonInteraction: true
        }
      });
    }

    function loadIframe() {
      var style = "border: 0; min-width: 100%; width: 100px; height: 100%";
      var src;

      if (userSegments && userSegments.includes("FORL_BAS_19")) {
        src = "https://prenumerera.dn.se/basforlang/?iframe";
      } else if (userSegments && userSegments.includes("FORL_DIG_19")) {
        src = "https://prenumerera.dn.se/digforlang/?iframe";
      } else if (userSegments && userSegments.includes("FORL_JAN19")) {
        src = "https://prenumerera.dn.se/janforlang/?iframe";
      }

      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", src);
      iframe.setAttribute("scrolling", "yes");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("style", style);

      while (contentEl.firstElementChild) {
        contentEl.removeChild(contentEl.firstElementChild);
      }

      contentEl.appendChild(iframe);
    }
  }

  function hasClosedModal$4() {
    var timesClosed = storage.getItem("churnModal.timesClosed") || 0;
    return storage.getItem("churnModal.hideModal") || timesClosed > 1;
  }

  function hasClosedCta$4() {
    var timesClosed = storage.getItem("churnCta.timesClosed") || 0;
    return storage.getItem("churnCta.hideCta") || timesClosed > 1;
  }

  /* globals SPLUS */
  function klarnaCampaign(_ref) {
    var userSegments = _ref.userSegments;
    var klarnaEl = document.getElementsByClassName("klarna-modal")[0];

    if (klarnaEl && userSegments) {
      var shouldShowModal = true;

      if (userSegments.includes("DN_AG_DIG_BET")) {
        klarnaEl.classList.add("test-a");
      } else if (userSegments.includes("DN_AG_DIG_EBET")) {
        klarnaEl.classList.add("test-b");
      } else if (userSegments.includes("DN_AG_BAS_BET")) {
        klarnaEl.classList.add("test-c");
      } else if (userSegments.includes("DN_AG_BAS_EBET")) {
        klarnaEl.classList.add("test-d");
      } else {
        shouldShowModal = false;
      }

      if (!shouldShowModal) return;
      klarnaCta({
        userSegments: userSegments
      });
      klarnaModal({
        userSegments: userSegments
      });
      return true;
    }
  }

  function klarnaCta(_ref2) {
    var userSegments = _ref2.userSegments;
    campaignCta("klarna-cta", "klarnaCta", function () {
      return klarnaModal({
        force: true,
        userSegments: userSegments
      });
    });
  }

  function klarnaModal() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$force = _ref3.force,
        force = _ref3$force === void 0 ? false : _ref3$force,
        _ref3$userSegments = _ref3.userSegments,
        userSegments = _ref3$userSegments === void 0 ? [] : _ref3$userSegments;

    if (shouldNotAppear()) {
      if (!hasClosedCta$5()) pubsub.publish("klarnaCta.show");
      return false;
    }

    var klarnaEl = document.getElementsByClassName("klarna-modal")[0];
    if (!klarnaEl) return false;
    var offerRedeemed;
    pubsub.subscribe("modal.closed", modalClosed);
    var modal = initModal(klarnaEl);
    modal.open();
    storage.setItem("hasSeenTakeover", true);
    loadSdk();
    var continueButton = klarnaEl.getElementsByClassName("klarna-modal__continue-button")[0];
    if (continueButton) continueButton.addEventListener("click", showContent);
    var topEl = klarnaEl.getElementsByClassName("klarna-modal__top")[0];
    var contentEl = klarnaEl.getElementsByClassName("klarna-modal__content")[0];
    var logosEl = klarnaEl.getElementsByClassName("klarna-modal__logos")[0];
    return true;

    function shouldNotAppear() {
      return !force && (hasClosedModal$5() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function modalClosed() {
      if (offerRedeemed) return;
      pubsub.publish("klarnaCta.show");
      pubsub.unsubscribe("modal.closed", modalClosed);
      var modalTimesClosed = (storage.getItem("klarnaModal.timesClosed") || 0) + 1;
      storage.setItem("klarnaModal.timesClosed", modalTimesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (modalTimesClosed < 2) {
        storage.setItem("klarnaModal.hideModal", true, {
          expires: dateFromDays(3)
        });
      }
    }

    function showContent() {
      klarnaEl.classList.add("klarna-modal--expanded");
      var actionsEl = topEl.getElementsByClassName("klarna-modal__actions")[0];
      if (actionsEl) actionsEl.parentElement.removeChild(actionsEl);
      if (logosEl) logosEl.classList.add("hidden");
      if (contentEl) contentEl.classList.remove("hidden");
      dataLayerPush({
        event: "Overlay",
        eventInfo: {
          action: "Impression",
          flowName: "Change to Autogiro",
          stepName: "Autogiro Activation"
        }
      });
    }

    function showReceipt() {
      offerRedeemed = true;
      klarnaEl.classList.remove("klarna-modal--expanded");
      var receiptEl = klarnaEl.getElementsByClassName("klarna-modal__receipt")[0];
      if (receiptEl) receiptEl.classList.remove("hidden");
      if (logosEl) logosEl.classList.remove("hidden");
      if (topEl) topEl.parentElement.removeChild(topEl);
      if (contentEl) contentEl.parentElement.removeChild(contentEl);
      storage.setItem("klarnaModal.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("klarnaCta.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("klarnaCta.hide");
      dataLayerPush({
        event: "Overlay",
        eventInfo: {
          action: "Impression",
          flowName: "Change to Autogiro",
          stepName: "Autogiro Receipt"
        }
      });
    }

    function loadSdk() {
      if (window.DN.meta && window.DN.meta.splus) {
        var meta = window.DN.meta.splus;
        setupSdk(meta);
        scriptLoader("".concat(meta.sdkBaseUrl, "/public/javascripts/splus.js"), {
          attributes: {
            id: "splusSdk"
          }
        });
      }

      dataLayerPush({
        event: "Overlay",
        eventInfo: {
          action: "Impression",
          flowName: "Change to Autogiro",
          stepName: "Autogiro Offer",
          segmentId: userSegments
        }
      });
    }

    function setupSdk(_ref4) {
      var klarnaParams = _ref4.klarnaParams,
          sdkBaseUrl = _ref4.sdkBaseUrl;
      var params = Object.assign({
        isEmbedded: true,
        id_token: window.DN.userInfo && window.DN.userInfo.idToken,
        // eslint-disable-line
        callback: "https://www.dn.se"
      }, klarnaParams);

      window.splusInit = function () {
        SPLUS.init({
          baseUrl: sdkBaseUrl,
          appId: "dagensnyheter.se",
          initApi: "true"
        });
        SPLUS.api.changePaymentMethod.load(params).then(function (response) {
          var klarnaWrapper = document.getElementsByClassName("klarna-wrapper")[0];
          if (klarnaWrapper) insertHtml(klarnaWrapper, response.data);
        });
      };

      window.splusKlarnaReceiptCallback = showReceipt;
    }
  }

  function hasClosedModal$5() {
    var timesClosed = storage.getItem("klarnaModal.timesClosed") || 0;
    return storage.getItem("klarnaModal.hideModal") || timesClosed > 1;
  }

  function hasClosedCta$5() {
    var timesClosed = storage.getItem("klarnaCta.timesClosed") || 0;
    return storage.getItem("klarnaCta.hideCta") || timesClosed > 1;
  }

  function printCampaign(_ref) {
    var userSegments = _ref.userSegments;
    var printEl = document.getElementsByClassName("print-modal")[0];

    if (printEl) {
      printCta({
        userSegments: userSegments
      });
      printModal({
        userSegments: userSegments
      });
      return true;
    }
  }

  function printCta() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$userSegments = _ref2.userSegments,
        userSegments = _ref2$userSegments === void 0 ? [] : _ref2$userSegments;

    var ctaEl = campaignCta("print-cta", "printCta", modalOpener);
    pubsub.subscribe("buddyMenu.open", trackImpression);
    ctaEl.classList.add("test-a");

    function modalOpener() {
      dataLayerPush({
        event: "Google Analytics Event",
        eventInfo: {
          eventCategory: "Interaction",
          eventAction: "User Profile Popover Meny",
          eventLabel: "Antichurn Print - Click",
          nonInteraction: false
        }
      });
      printModal({
        force: true,
        expanded: true,
        userSegments: userSegments
      });
    }

    function trackImpression() {
      var isCtaVisible = ctaEl && ctaEl.parentElement && !ctaEl.classList.contains("hidden");

      if (isCtaVisible) {
        dataLayerPush({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Impression",
            eventAction: "User Profile Popover Meny",
            eventLabel: "Antichurn Print",
            nonInteraction: true
          }
        });
      }
    }
  }

  function printModal() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$force = _ref3.force,
        force = _ref3$force === void 0 ? false : _ref3$force,
        _ref3$expanded = _ref3.expanded,
        expanded = _ref3$expanded === void 0 ? false : _ref3$expanded,
        _ref3$userSegments = _ref3.userSegments,
        userSegments = _ref3$userSegments === void 0 ? [] : _ref3$userSegments;

    if (shouldNotAppear()) {
      if (!hasClosedCta$6()) pubsub.publish("printCta.show");
      return false;
    }

    var modalEl = document.getElementsByClassName("print-modal")[0];
    if (!modalEl) return false;
    var offerRedeemed;
    pubsub.subscribe("modal.closed", modalClosed);
    modalEl.classList.add("test-a");
    var modal = initModal(modalEl);
    modal.open();
    storage.setItem("hasSeenTakeover", true);
    var continueButton = modalEl.getElementsByClassName("print-modal__continue-button")[0];
    if (continueButton) continueButton.addEventListener("click", showContent);

    if (!expanded) {
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Antichurn Print",
          flowName: "UC Popup",
          stepName: "Start",
          stepVariant: undefined,
          flowVariant: userSegments.join(","),
          period: undefined,
          product: undefined
        }
      });
    }

    var topEl = modalEl.getElementsByClassName("print-modal__top")[0];
    var barEl = modalEl.getElementsByClassName("print-modal__bar")[0];
    var contentEl = modalEl.getElementsByClassName("print-modal__content")[0];
    var logosEl = modalEl.getElementsByClassName("print-modal__logos")[0];
    if (expanded) showContent();
    return true;

    function shouldNotAppear() {
      return !force && (hasClosedModal$6() || hasSeenTakeover() || hasRichMediaPremium());
    }

    function modalClosed() {
      if (offerRedeemed) return;
      pubsub.publish("printCta.show");
      pubsub.unsubscribe("modal.closed", modalClosed);
      var modalTimesClosed = (storage.getItem("printModal.timesClosed") || 0) + 1;
      storage.setItem("printModal.timesClosed", modalTimesClosed, {
        expires: dateFromDays(5 * 365)
      });

      if (modalTimesClosed < 2) {
        storage.setItem("printModal.hideModal", true, {
          expires: dateFromDays(3)
        });
      }
    }

    function showContent() {
      modalEl.classList.add("print-modal--expanded");
      if (topEl) topEl.classList.add("hidden");
      if (logosEl) logosEl.classList.add("hidden");
      if (barEl) barEl.classList.remove("hidden");
      if (contentEl) contentEl.classList.remove("hidden");
      loadIframe();
      window.addEventListener("message", handleMessage);
      dataLayerPush({
        event: "Flow Impression",
        flowInfo: {
          flowId: "Antichurn Print",
          flowName: "UC Popup",
          stepName: "Payment",
          stepVariant: undefined,
          flowVariant: userSegments.join(","),
          period: undefined,
          product: undefined
        }
      });
    }

    function handleMessage(event) {
      if (event.data === "close") {
        modal.close();
        window.removeEventListener("message", handleMessage);
      }

      if (event.data === "receipt") {
        handleReceipt();
        window.removeEventListener("message", handleMessage);
      }
    }

    function handleReceipt() {
      offerRedeemed = true;
      storage.setItem("printModal.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      storage.setItem("printCta.timesClosed", 2, {
        expires: dateFromDays(5 * 365)
      });
      pubsub.publish("printCta.hide");
    }

    function loadIframe() {
      var style = "border: 0; min-width: 100%; width: 100px; height: 100%";
      var src;

      if (userSegments && userSegments.includes("FORNY_3MPLUS_ONSITE")) {
        src = "https://campaigner.dn.se/prenumerera/uc-paper/?offer_id=56f420eb-45ed-4a9c-9dcc-4ba03e6909e2-1030&product_id=054fd90b-b58b-4463-a01a-cb2873c7f61d&iframe=1";
      } else if (userSegments && userSegments.includes("NARAVTAGNA_ONSITE_TB")) {
        src = "https://campaigner.dn.se/prenumerera/uc-paper/?offer_id=205a0dba-612c-468b-8b42-67c2dc648c68-1032&product_id=840fa7ef-cb2d-4bfe-87ff-16dd4625d064&iframe=1";
      } else if (userSegments && userSegments.includes("NARAVTAGNA_ONSITE_TV")) {
        src = "https://campaigner.dn.se/prenumerera/uc-paper/?offer_id=205a0dba-612c-468b-8b42-67c2dc648c68-1031&product_id=840fa7ef-cb2d-4bfe-87ff-16dd4625d064&iframe=1";
      } else if (userSegments && userSegments.includes("FORNY_UPPSAGDA_ONSITE")) {
        src = "https://campaigner.dn.se/prenumerera/uc-paper/?offer_id=56f420eb-45ed-4a9c-9dcc-4ba03e6909e2-1039&product_id=054fd90b-b58b-4463-a01a-cb2873c7f61d&iframe=1";
      }

      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", src);
      iframe.setAttribute("scrolling", "yes");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("style", style);

      while (contentEl.firstElementChild) {
        contentEl.removeChild(contentEl.firstElementChild);
      }

      contentEl.appendChild(iframe);
    }
  }

  function hasClosedModal$6() {
    var timesClosed = storage.getItem("printModal.timesClosed") || 0;
    return storage.getItem("printModal.hideModal") || timesClosed > 1;
  }

  function hasClosedCta$6() {
    var timesClosed = storage.getItem("printCta.timesClosed") || 0;
    return storage.getItem("printCta.hideCta") || timesClosed > 1;
  }

  function autumnBottomBar(bottomBarEl) {
    bottomBarEl = bottomBarEl || document.getElementsByClassName("autumn-bottom-bar")[0];
    if (!bottomBarEl) return;
    bottomBarEl.classList.remove("hidden");
    var continueButton = bottomBarEl.getElementsByClassName("autumn-bottom-bar__button")[0];
    if (continueButton) continueButton.addEventListener("click", trackClick);
    bottomBar(bottomBarEl, {
      shouldAppear: shouldAppear,
      handleClose: handleClose
    });

    function shouldAppear() {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Höstkampanj 2019",
          promoCreative: "Bottombar",
          promoPosition: "Bottombar",
          promoAction: "Impression"
        }
      });
      return !storage.getItem("hasSeenBottomBar");
    }

    function handleClose() {
      storage.setItem("hasSeenBottomBar", true);
    }

    function trackClick() {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Höstkampanj 2019",
          promoCreative: "Bottombar",
          promoPosition: "Bottombar",
          promoAction: "Click"
        }
      });
    }
  }

  function autumnCampaign() {
    var modalEl = document.getElementsByClassName("autumn-modal")[0];

    if (modalEl) {
      if (!autumnModal()) autumnBottomBar();
      return true;
    }
  }

  function autumnModal() {
    if (hasSeenTakeover() || hasRichMediaPremium()) return false;
    var takeoverEl = document.getElementsByClassName("autumn-modal")[0];
    if (!takeoverEl) return;
    var continueButtons = Array.from(takeoverEl.getElementsByClassName("autumn-modal__continue-button"));
    if (continueButtons.length) continueButtons.forEach(function (button) {
      return button.addEventListener("click", trackClick);
    });
    var modal = initModal(takeoverEl);
    modal.open();
    storage.setItem("hasSeenTakeover", true);
    dataLayerPush({
      event: "Internal Promotion",
      promoInfo: {
        promoId: undefined,
        promoName: "Höstkampanj 2019",
        promoCreative: "Popup",
        promoPosition: "Popup",
        promoAction: "Impression"
      }
    });
    return true;

    function trackClick() {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Höstkampanj 2019",
          promoCreative: "Popup",
          promoPosition: "Popup",
          promoAction: "Click"
        }
      });
    }
  }

  function animatePosition(elm, callback) {
    // First: get the current bounds
    var first = elm.getBoundingClientRect(); // execute the script that causes layout change

    callback(); // Last: get the final bounds

    var last = elm.getBoundingClientRect(); // Determine the delta between the
    // first and last bounds to invert the element

    var deltaX = first.left - last.left;
    var deltaY = first.top - last.top;
    return new Promise(function (resolve) {
      // Invert the styles
      elm.style.transform = "translate(".concat(deltaX, "px, ").concat(deltaY, "px)"); // Wait for the next frame so we
      // know all the style changes have
      // taken hold.

      window.requestAnimationFrame(function () {
        // Switch on animations.
        elm.classList.add("animate"); // GO GO GOOOOOO!

        elm.style.transform = "";
      }); // Capture the end with transitionend

      elm.addEventListener("transitionend", function () {
        elm.classList.remove("animate");
        resolve();
      });
    });
  }

  function slideUpPrintCampaign() {
    var modalEl = document.getElementsByClassName("slide-up-print-modal")[0];
    var forceScript = getQueryParam("forceScript") === "1" && getQueryParam("variantType") === "modal";

    if (modalEl) {
      if ((CHANNEL_MOBILE || forceScript) && !hasRichMediaPremium()) slideUpModal({
        forceScript: forceScript
      });
      if (!CHANNEL_MOBILE || CHANNEL_RESPONSIVE) slideUpBar();
      return true;
    }
  }

  function slideUpBar() {
    var barEl = document.getElementsByClassName("slide-up-print-bar")[0];
    if (!barEl) return;
    barEl.classList.remove("hidden");
    var closeButton = document.getElementsByClassName("slide-up-print-bar__close-button")[0];

    if (closeButton) {
      closeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        closeBar();
      });
    }

    if (!CHANNEL_MOBILE) {
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Slide-up Paywall - Print",
          promoCreative: "Top Bar",
          promoPosition: "Top Bar",
          promoAction: "Impression"
        }
      });
    }

    barEl.addEventListener("click", function () {
      slideUpModal();
      dataLayerPush({
        event: "Internal Promotion",
        promoInfo: {
          promoId: undefined,
          promoName: "Slide-up Paywall - Print",
          promoCreative: "Top Bar",
          promoPosition: "Top Bar",
          promoAction: "Click"
        }
      });
    });
    pubsub.subscribe("paywall:hidePremiumContent", function () {
      barEl.parentElement.removeChild(barEl);
    });

    function closeBar() {
      setClosedCookie();
      barEl.parentElement.removeChild(barEl);
    }
  }

  function setClosedCookie() {
    var expires = new Date();
    expires.setFullYear(expires.getFullYear() + 10);
    document.cookie = "slideUpPrintBarClosed=".concat(Date.now(), "; path=/");
  }

  function slideUpModal() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$forceScript = _ref.forceScript,
        forceScript = _ref$forceScript === void 0 ? false : _ref$forceScript;

    var cookies = parseCookie(document.cookie);
    if (CHANNEL_MOBILE && cookies.slideUpPrintBarClosed) return;
    var modalEl = document.getElementsByClassName("slide-up-print-modal")[0];
    if (!modalEl) return false;
    pubsub.subscribe("modal.closed", modalClosed);
    var modal = initModal(modalEl, {
      disableScroll: CHANNEL_DESKTOP || forceScript
    });
    modal.open();
    var drawerEl = modalEl.getElementsByClassName("slide-up-print-drawer__container")[0];
    var paywallEl = modalEl.getElementsByClassName("slide-up-print-modal__paywall")[0];
    showContent();
    return true;

    function modalClosed() {
      history.replaceState(null, null, " "); //On desktop, closing the modal shouldn't affect the top-bar.
      //On mobile, there is on only one element, the bottombar IS a modal. So it must close itself.

      if (CHANNEL_MOBILE) {
        setClosedCookie();
      }
    }

    function showContent() {
      if (CHANNEL_MOBILE) {
        if (forceScript) {
          modalEl.classList.remove("slide-up-print-modal--closed");
          modalEl.classList.add("slide-up-print-modal--expanded");
        } else {
          window.requestAnimationFrame(function () {
            animatePosition(drawerEl.parentElement, function () {
              return modalEl.classList.remove("slide-up-print-modal--closed");
            });
            dataLayerPush({
              event: "Internal Promotion",
              promoInfo: {
                promoId: undefined,
                promoName: "Slide-up Paywall - Print",
                // TODO: Update flowId
                promoCreative: "Slide-up Paywall",
                promoPosition: "Slide-up Paywall",
                promoAction: "Impression"
              }
            });
          });
        }
      }

      if (CHANNEL_MOBILE || CHANNEL_RESPONSIVE) {
        drawerEl.addEventListener("click", function () {
          if (modalEl.classList.contains("slide-up-print-modal--expanded")) {
            enableScroll();
            animatePosition(drawerEl.parentElement, function () {
              return modalEl.classList.remove("slide-up-print-modal--expanded");
            });
          } else {
            disableScroll();
            animatePosition(drawerEl.parentElement, function () {
              return modalEl.classList.add("slide-up-print-modal--expanded");
            });
            dataLayerPush({
              event: "Internal Promotion",
              promoInfo: {
                promoId: undefined,
                promoName: "Slide-up Paywall - Print",
                // TODO: Update flowId
                promoCreative: "Slide-up Paywall",
                promoPosition: "Slide-up Paywall",
                promoAction: "Click"
              }
            });
          }

          Promise.resolve().then(loadIframeResizer).then(function () {
            return loadIframe(paywallEl);
          }).then(function () {
            var spinner = document.getElementsByClassName("loading-screen")[0];
            if (spinner) spinner.parentElement.removeChild(spinner);
            dataLayerPush({
              event: "Flow Impression",
              flowInfo: {
                flowId: "Slide-up Paywall - Print",
                flowName: "Slide-up Paywall",
                stepName: "Start",
                stepVariant: undefined,
                flowVariant: undefined,
                period: undefined,
                product: "DN Print Weekly"
              }
            });
          });
        });
      }

      if (!CHANNEL_MOBILE && CHANNEL_RESPONSIVE) modalEl.classList.remove("slide-up-print-modal--closed");
      if (!CHANNEL_MOBILE && CHANNEL_RESPONSIVE) modalEl.classList.add("slide-up-print-modal--expanded");

      if (!CHANNEL_MOBILE) {
        Promise.resolve().then(loadIframeResizer).then(function () {
          return loadIframe(paywallEl);
        }).then(function () {
          dataLayerPush({
            event: "Flow Impression",
            flowInfo: {
              flowId: "Slide-up Paywall - Print",
              flowName: "Popup Purchase Flow",
              stepName: "Start",
              stepVariant: undefined,
              flowVariant: undefined,
              period: undefined,
              product: "DN Print Weekly"
            }
          });
        });
      }
    }

    function loadIframeResizer() {
      return scriptLoader("https://ext.dn.se/qs/widgets/arkku2.0/iframeresizer/iframeResizer.min.js");
    }
  }

  function loadIframe(targetEl) {
    return new Promise(function (resolve) {
      var style = "width: 1px;min-width: 100%;";
      var src = "https://campaigner.dn.se/prenumerera/uc/wizard/2/?single_product_id=84d1535b-2c46-4a3f-ac93-1e3d3b6f4a7f&offer_id=e1b4d623-cc82-4024-805f-13fe3b3fd4fc-1042&product_id=84d1535b-2c46-4a3f-ac93-1e3d3b6f4a7f&flowId=slide-up-paywall-print";
      var iframe = document.createElement("iframe");
      iframe.addEventListener("load", resolve);
      iframe.setAttribute("src", src);
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("style", style);

      while (targetEl.firstElementChild) {
        targetEl.removeChild(targetEl.firstElementChild);
      }

      targetEl.appendChild(iframe);
      window.iFrameResize({
        log: true
      }, iframe);
    });
  }

  var isStartPage = window.DN && window.DN.meta && window.DN.meta.contentId === "dn.section.nyheter";
  var isArticlePage = window.DN && window.DN.meta && window.DN.meta.contentType === "article";
  function afterChurnCampaignLoader(_ref) {
    var userSegments = _ref.userSegments;
    if (!isStartPage) return;

    if (containsAny(userSegments, ["FORL_BAS_19_E", "FORL_DIG_19_E"])) {
      return {
        init: afterChurnCampaign,
        name: "afterChurn"
      };
    }
  }
  function diCrossSaleCampaignLoader(_ref2) {
    var userSegments = _ref2.userSegments;
    if (!isStartPage) return;

    if (containsAny(userSegments, ["DN_DI_CROSS"])) {
      return {
        init: diCrossSaleCampaign,
        name: "diCrossSale"
      };
    }
  }
  function autogiroCampaignLoader(_ref3) {
    var userSegments = _ref3.userSegments;
    if (!isStartPage) return;

    if (containsAny(userSegments, ["DNSEAGDN1MAN"])) {
      return {
        init: autogiroCampaign,
        name: "autogiro"
      };
    }
  }
  function churnCampaignLoader(_ref4) {
    var userSegments = _ref4.userSegments;
    if (!isStartPage) return;

    if (containsAny(userSegments, ["FORL_BAS_19", "FORL_DIG_19", "FORL_JAN19"])) {
      return {
        init: churnCampaign,
        name: "churn"
      };
    }
  } // This campaign should only run on the startPage now that the autumnSticker element doesn't exist on the articlePage

  function autumnCampaignLoader(_ref5) {
    var userInfo = _ref5.userInfo;
    if (!isStartPage || isInSlideUpStartPageTestGroup()) return;
    var showForFreeUsers = userInfo && userInfo.accountLevel === "Gratis";
    var showForAnonUsers = !userInfo;

    if (showForFreeUsers || showForAnonUsers) {
      return {
        init: autumnCampaign,
        name: "autumn"
      };
    }
  }
  function summerExtensionCampaignLoader(_ref6) {
    var userSegments = _ref6.userSegments;
    if (!isStartPage) return;

    if (containsAny(userSegments, ["DN_SOMMAR_LEADS_FORNY"])) {
      return {
        init: summerExtensionCampaign,
        name: "summerExtension"
      };
    }
  }
  function youngVoterCampaignLoader(_ref7) {
    var userSegments = _ref7.userSegments;
    if (!isStartPage) return;
    var youngVoterSegments = ["DN_UNGA_2018_FNY_B", "DN_UNGA_2018_FNY_U"];

    if (containsAny(userSegments, youngVoterSegments)) {
      return {
        init: youngVoterCampaign,
        name: "youngVoter"
      };
    }
  }
  function klarnaCampaignLoader(_ref8) {
    var userSegments = _ref8.userSegments;
    if (!isStartPage) return;
    var klarnaSegments = ["DN_AG_DIG_BET", "DN_AG_DIG_EBET", "DN_AG_BAS_BET", "DN_AG_BAS_EBET"];

    if (containsAny(userSegments, klarnaSegments)) {
      return {
        init: klarnaCampaign,
        name: "klarna"
      };
    }
  }
  function printCampaignLoader(_ref9) {
    var userSegments = _ref9.userSegments;
    if (!isStartPage) return;
    var printSegments = ["FORNY_3MPLUS_ONSITE", "NARAVTAGNA_ONSITE_TB", "NARAVTAGNA_ONSITE_TV", "FORNY_UPPSAGDA_ONSITE"];
    if (!containsAny(userSegments, printSegments)) return;
    return {
      init: printCampaign,
      name: "printModal"
    };
  } // export function slideUpDigitalCampaignLoader({ userInfo }) {
  //   if (!isArticlePage) return;
  //   const forceScript = getQueryParam("forceScript") === "1" && getQueryParam("variantType") === "modal";
  //   const showForFreeUsers = userInfo && userInfo.accountLevel === "Gratis";
  //   const showForAnonUsers = !userInfo;
  //   if (forceScript || showForFreeUsers || showForAnonUsers) {
  //     return {
  //       init: slideUpDigitalCampaign,
  //       name: "slideUpDigital"
  //     };
  //   }
  // }
  // SlideUp on articlePages can be seen by all free users
  // SlideUp on startPage should only be seen by members of the testGroup (who are also free users)

  function slideUpPrintCampaignLoader(_ref10) {
    var userInfo = _ref10.userInfo;
    var cookies = parseCookie(document.cookie);
    var testSlideUpOnStartPage = isInSlideUpStartPageTestGroup();
    var showOnStartPage = isStartPage && testSlideUpOnStartPage;
    if (!showOnStartPage && !isArticlePage || cookies.slideUpPrintBarClosed) return;
    var showForFreeUsers = userInfo && userInfo.accountLevel === "Gratis";
    var showForAnonUsers = !userInfo;

    if (showForFreeUsers || showForAnonUsers) {
      return {
        init: slideUpPrintCampaign,
        name: "slideUpPrint"
      };
    }
  }

  function isInSlideUpStartPageTestGroup() {
    return Array.from(document.getElementsByClassName("pumba")).some(function (testGroupEl) {
      var test = JSON.parse(decodeURIComponent(testGroupEl.getAttribute("data-test-group")));
      return test.name === "dnEttanSlideUpCampaignTest" && test.group === "slideUp";
    });
  }

  function campaignManager() {
    var campaignHolder = document.getElementsByClassName("campaign-holder")[0];
    if (!campaignHolder) return;
    Promise.all([getUserInfo(), getUserSegments()]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          userInfo = _ref2[0],
          userSegments = _ref2[1];

      var campaigns = [diCrossSaleCampaignLoader, slideUpPrintCampaignLoader, autumnCampaignLoader, summerExtensionCampaignLoader, youngVoterCampaignLoader, printCampaignLoader, churnCampaignLoader, klarnaCampaignLoader, autogiroCampaignLoader, afterChurnCampaignLoader];
      campaigns.find(function (campaignLoader) {
        return shouldLoadCampaign(campaignLoader, {
          userInfo: userInfo,
          userSegments: userSegments
        });
      });
    }).catch(handleWithRaven);
  }

  function shouldLoadCampaign(campaignLoader, data) {
    var campaign = campaignLoader(data);
    if (!campaign) return;
    var campaignHolder = document.getElementsByClassName("campaign-holder")[0];
    window.fetch("/ajax/campaign/".concat(campaign.name)).then(function (response) {
      if (response.status !== 200) return;
      response.text().then(function (html) {
        insertHtml(campaignHolder, html);
        campaign.init(data);
      });
    }).catch(handleWithRaven);
    return true;
  }
  /**
   * Get the user info. Returns null if unauthenticated.
   */


  function getUserInfo() {
    return Promise.resolve(window.DN.hasAccessToken ? updateExpiredUserInfo().then(function () {
      return window.DN.userInfo;
    }) : null);
  }
  /**
   * Get the user segments. Returns an empty array if unauthenticated.
   */


  function getUserSegments() {
    return Promise.resolve(window.DN.hasAccessToken ? getPersonalized().then(function (_ref3) {
      var userSegments = _ref3.userSegments;
      return userSegments;
    }) : []);
  }

  function trackMenuLinks() {
    var siteHeader = document.getElementsByClassName("site-header")[0];
    if (!siteHeader) return;
    var mainMenu = siteHeader.getElementsByClassName("site-header__nav-main")[0];
    var subMenu = siteHeader.getElementsByClassName("site-header__nav-sub")[0];
    var productMenu = siteHeader.getElementsByClassName("site-header__nav-products")[0];
    var stickyHeader = document.getElementsByClassName("sticky-header")[0];
    var searchLinks = Array.from(siteHeader.getElementsByClassName("search-link"));
    var siteFooter = document.getElementsByClassName("site-footer")[0];
    var moreMenuLinks = Array.from(document.getElementsByClassName("more-link"));
    var moreMenuPage = document.getElementsByClassName("menu-page")[0];
    var subscribeButtonMain = siteHeader.getElementsByClassName("button--subscribe")[0];
    var subscribeButtonSticky = stickyHeader.getElementsByClassName("button--subscribe")[0];
    var siteHeaderFollowLink = siteHeader.getElementsByClassName("site-header__foljer")[0];
    var stickyHeaderFollowLink = stickyHeader.getElementsByClassName("sticky-header__foljer")[0];

    if (mainMenu) {
      var mainMenuElements = Array.from(mainMenu.children);
      mainMenuElements.forEach(function (menuLink, index) {
        if (index !== mainMenuElements.length - 1) {
          // Ignore more menu link - should have other tracking data
          addClickListener("Header Main Menu", menuLink);
        }
      });
    }

    if (stickyHeader) {
      var stickyHeaderMenu = stickyHeader.getElementsByClassName("sticky-header__nav-main")[0];

      if (stickyHeaderMenu) {
        var stickyHeaderMenuLinks = Array.from(stickyHeaderMenu.children);
        stickyHeaderMenuLinks.forEach(function (menuLink, index) {
          if (index !== stickyHeaderMenuLinks.length - 1) {
            // Ignore more menu link - should have other tracking data
            addClickListener("Sticky Header Menu", menuLink);
          }
        });
      }
    }

    if (productMenu) {
      var productMenuLinks = Array.from(document.getElementsByClassName("menu-content__link"));
      productMenuLinks.forEach(function (menuLink) {
        addClickListener("Product Menu", menuLink);
      });
    }

    if (subMenu) {
      var subMenuElements = Array.from(subMenu.children);
      subMenuElements.forEach(function (menuLink) {
        var mainMenuLabel = mainMenu.getElementsByClassName("site-header__nav-main-active")[0].innerHTML;
        addClickListener("Header Sub Menu", menuLink, mainMenuLabel);
      });
    }

    if (siteFooter) {
      var footerMenuLinks = Array.from(document.getElementsByClassName("site-footer__navigation")[0].getElementsByClassName("site-footer__links"));
      footerMenuLinks.forEach(function (menuList) {
        var menuLinks = Array.from(menuList.children);
        menuLinks.forEach(function (menuLink) {
          addClickListener("Footer Menu", menuLink);
        });
      });
      var footerSocialLinks = Array.from(document.getElementsByClassName("site-footer__social-media-links"));
      footerSocialLinks.forEach(function (element) {
        var socialLinks = Array.from(element.children);
        socialLinks.forEach(function (socialLink) {
          var linkText = socialLink.getElementsByClassName("visually-hidden")[0];
          addClickListener("Footer Menu", socialLink, null, linkText.innerHTML.trim());
        });
      });
    }

    if (moreMenuPage) {
      var menuListTitle;
      var menuListItems;
      var menuLists = Array.from(moreMenuPage.getElementsByClassName("sections-list"));
      menuLists.forEach(function (menuList, index) {
        if (index !== menuLists.length - 1) {
          menuListTitle = menuList.firstElementChild.innerHTML.replace(/&amp;/g, "&");
          menuListItems = Array.from(menuList.getElementsByClassName("sections-list__items")[0].children);
        } else {
          return;
        }

        menuListItems.forEach(function (menuLink) {
          addClickListener("More Menu", menuLink, menuListTitle);
        });
      });
    }

    if (siteHeaderFollowLink) {
      siteHeaderFollowLink.addEventListener("click", function () {
        trackMenuClick("Other Header Menu", "Följer");
      });
    }

    if (stickyHeaderFollowLink) {
      stickyHeaderFollowLink.addEventListener("click", function () {
        trackMenuClick("Other Header Menu", "Följer");
      });
    }

    if (subscribeButtonMain) {
      addClickListener("Other Header Menu", subscribeButtonMain, null, "Subscribe Link");
    }

    if (subscribeButtonSticky) {
      addClickListener("Other Header Menu", subscribeButtonSticky, null, "Subscribe Link");
    }

    if (searchLinks) {
      loopElements(searchLinks, null, "Search Link");
    }

    if (moreMenuLinks) {
      loopElements(moreMenuLinks, null, "More Link");
    }

    function loopElements(elements, mainMenuLabel, linkLabel) {
      elements.forEach(function (element) {
        addClickListener("Other Header Menu", element, mainMenuLabel, linkLabel);
      });
    }

    function addClickListener(linkType, element, mainMenuLabel, linkLabel) {
      element.addEventListener("click", function (e) {
        if (mainMenuLabel) {
          trackMenuClick(linkType, "".concat(mainMenuLabel.trim(), " > ").concat(e.target.innerHTML.trim()));
        } else if (linkLabel) {
          trackMenuClick(linkType, linkLabel);
        } else {
          trackMenuClick(linkType, e.target.innerHTML.trim());
        }
      });
    }
  }

  function appTeaser(section) {
    var containers = Array.from(section.getElementsByClassName("custom-teaser--app"));
    if (!containers) return;
    containers.forEach(function (container) {
      container.addEventListener("click", function (e) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "Google Analytics Event",
          eventInfo: {
            eventCategory: "Interaction",
            eventAction: "Puff",
            eventLabel: "Lyssna på DN i appen",
            nonInteraction: false
          }
        });
        var mobileLink = getAppLink();

        if (mobileLink) {
          e.preventDefault();
          e.stopPropagation();
          window.location = mobileLink;
          return false;
        }
      });
    });

    function getAppLink() {
      var device = getDeviceOS();

      if (device === "ios") {
        return "dagensnyheter://article?origin=dnweb&id=dn.epi.2289029&ct=open-in-app-button-1";
      } else if (device === "android") {
        return "intent://article?origin=dnweb&id=dn.epi.2289029#Intent;scheme=dagensnyheter;package=se.dn;end";
      }
    }
  }

  var mainInit = function mainInit() {
    init$1(window.DN && window.DN.bamData);

    if (!CHANNEL_MOBILE) {
      adBlock();
    }

    init$2("lazy-stylesheet");
    var lazyImages = document.getElementsByClassName("lazy-image");
    setup(lazyImages);
    var throwInAreas = document.getElementsByClassName("throw-in-area");
    lazyLoadThrowInAreas(throwInAreas);

    if (window.DN && window.DN.hasAccessToken) {
      moveUserInfoCookieToLocalStorage();
      updateExpiredUserInfo().then(function () {
        ensureIdTokenInUserInfo();
        buddyMenu();
        getPersonalized().then(function (personalized) {
          if (!personalized) return;
          updateWatchCountElement(personalized.watchCount);
        });
      });
    }

    campaignManager();
    var articles = document.getElementsByClassName("article");

    if (articles.length) {
      setup$6(articles[0]).then(function (paywallEnabled) {
        if (paywallEnabled) return;
        articlePersonalized();
      });
    }

    var quizzes = document.getElementsByClassName("quiz");

    if (quizzes.length) {
      setup$7(quizzes[0]);
    }

    var sections = Array.from(document.getElementsByClassName("section"));
    sections.forEach(function (element) {
      arkku(element);
    });
    appTeaser(document.body);
    var bauta = Array.from(document.getElementsByClassName("section__column-bauta"));
    bauta.forEach(function (element) {
      arkku(element);
    });
    stickyHeader();
    readMore();
    gallery();
    comicsPage();
    weather();
    gdprHeader();
    newsList();
    alertModal();
    follow.init();
    init$7();
    localStorageCleanup();
    contactPage();
    productModal();
    sudoku();
    trackMenuLinks();

    if (!CHANNEL_DESKTOP) {
      hideFadeOnMenu();
    }

    if (!CHANNEL_DESKTOP) {
      productMenu();
    }
  };

  if (window.DN && window.DN.Raven && window.DN.Raven.context) {
    window.DN.Raven.context({
      tags: {
        errorSource: "main"
      }
    }, mainInit);
  } else {
    mainInit();
  }

}());
//# sourceMappingURL=main.responsive__c97f67ae2abc2d20ff3544b394401a36c.js.map
