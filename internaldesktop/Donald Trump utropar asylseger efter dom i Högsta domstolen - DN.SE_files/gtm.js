
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"105",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof burtApi})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mediaid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return screen9.player.controllersList[0].config.mediainfo.title}catch(a){return ",["escape",["macro",1],8,16],"}})();"]
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.uniqueEventId"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_pageCounter\");a=a?JSON.parse(a):{latest:void 0,history:{}};var c=String(",["escape",["macro",4],8,16],");var b=",["escape",["macro",5],8,16],";\"pageview beta\"===b\u0026\u0026\"undefined\"===typeof a.history[c]?(b=\"undefined\"===typeof a.latest?0:a.history[a.latest]+1,a.history[c]=b,a.latest=c,google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_pageCounter\",JSON.stringify(a))):b=a.history[a.latest];return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_originalPageType\");if(\"undefined\"===typeof a||\"(not set)\"===a)a=",["escape",["macro",7],8,16],",google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_originalPageType\",a);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.page"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_originalPage\");if(\"undefined\"===typeof a||\"(not set)\"===a)a=",["escape",["macro",9],8,16],",google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_originalPage\",a);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_physicalPageId\");if(\"undefined\"===typeof a){for(a=\"\";6\u003Ea.length;)a=Math.floor(36*Math.random()).toString(36)+a;a=a.substring(0,6).toLowerCase();var b=Math.floor(Date.now()\/1E3).toString(36).toLowerCase();a=b+a;google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_physicalPageId\",a)}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.segmentId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",13],8,16],".join(\", \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(b,a){for(var c in b)if(b[c])for(var d in a)b[c].hasOwnProperty(a[d].name.toString())\u0026\u0026(b[c][\"dimension\".concat(a[d].index.toString())]=b[c].hasOwnProperty(a[d].name.toString())?b[c][a[d].name.toString()]:void 0,delete b[c][a[d].name.toString()]);return b}return function(b){var a=",["escape",["macro",15],8,16],";if(a){a=JSON.parse(JSON.stringify(a));for(var c in a)a[c].hasOwnProperty(\"products\")\u0026\u0026(a[c].products=e(a[c].products,b));a.hasOwnProperty(\"impressions\")\u0026\u0026(a.impressions=e(a.impressions,\nb));a.currencyCode=a.currencyCode||\"SEK\";return{ecommerce:a}}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleTagLabelList"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".join(\", \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.flowName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"One-Click Campaigner Popup;Non-Campaigner Popup;UC Popup;Campaigner Popup;Subscription Page;Business Subscription Page;Campaigner;Adblock Paywall;Article Paywall;Popup Purchase Flow;Slide-up Paywall\".split(\";\");return a.includes(",["escape",["macro",19],8,16],")?",["escape",["macro",19],8,16],":\"Unnamed Flow\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoInfo.promoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoInfo.promoName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoInfo.promoCreative"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoInfo.promoPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoInfo.promoAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=void 0,b={id:",["escape",["macro",21],8,16],",name:",["escape",["macro",22],8,16],",creative:",["escape",["macro",23],8,16],",position:",["escape",["macro",24],8,16],"};\"Impression\"===",["escape",["macro",25],8,16],"?(a={ecommerce:{promoView:{promotions:[]}}},a.ecommerce.promoView.promotions.push(b)):\"Click\"===",["escape",["macro",25],8,16],"\u0026\u0026(a={ecommerce:{promoClick:{promotions:[]}}},a.ecommerce.promoClick.promotions.push(b));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b={startpage:\"Start Page\",homepage:\"Start Page\",sectionpage:\"Article List Page\",nyhetsdygn:\"Article List Page\",article:\"Article Page\",articlepage:\"Article Page\",inlinearticlepage:\"Article Page\",cnavarticlepagedata:\"Article Page\",comicspage:\"Comics List Page\",adhocpage:\"Ad Hoc Page\",authorpage:\"Article List Page\",nativead:\"Native Ad Page\",fullpage:\"Navigation Page\",meny:\"Navigation Page\",tagpage:\"Article List Page\",alltags:\"Tag List Page\",\"error-page\":\"Error Page\",\nbors:\"Stock Overview Page\",stockpage:\"Stock Page\",kalendariet:\"Event List Page\",kalendarietevent:\"Event Page\",calendarmainpage:\"Event List Page\",calendaritempage:\"Event Page\",login:\"Login Page\",quiz:\"Quiz Page\",quizpage:\"Quiz Page\",search:\"Search Page\",searchpage:\"Search Page\",sokpage:\"Search Page\",\"search overlay\":\"Search Page\",other:\"Information Page\",productpage:\"Information Page\",\"account page\":\"Account Settings Page\",settingspage:\"Account Settings Page\",newsletterlist:\"Newsletter List Page\",\nnewsletterspage:\"Newsletter List Page\",listoffers:\"Offer List Page\",feedpage:\"Article List Page\",foretag:\"Information Page\",telemarketing:\"Telemarketing Page\"};\"string\"!==typeof a||\"\"===a?a=\"(not set)\":\"undefined\"!=typeof b[a.toLowerCase()]\u0026\u0026(a=b[a.toLowerCase()]);return a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userInfo.anonymousGuid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userInfo.userId"
    },{
      "function":"__j",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var g=\"https:\/\/tracking.bonnier.news\/v1\/collect\/\",c=\"_\"+b.get(\"trackingId\")+\"_sendHitTask\",h=window[c]=window[c]||b.get(\"sendHitTask\");for(i=\"\";6\u003Ei.length;)i=Math.floor(36*Math.random()).toString(36)+i;eventId=i.substring(0,6).toLowerCase()+Math.floor(Date.now()\/1E3).toString(36).toLowerCase();google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_hitId\",eventId);\"Pageview\"!==",["escape",["macro",5],8,16],"\u0026\u0026\"pageview beta\"!==",["escape",["macro",5],8,16],"||google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_pageId\",\neventId);b.set(\"dimension78\",google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_pageId\"));b.set(\"sendHitTask\",function(c){var d=c.get(\"hitPayload\"),f={anonymous_user_id:",["escape",["macro",28],8,16],",user_id:",["escape",["macro",29],8,16],"};for(a in f)if(f.hasOwnProperty(a)){var e=f[a];\"\"!==e\u0026\u0026\"(not set)\"!==e\u0026\u0026\"undefined\"!==typeof e\u0026\u0026(d=d+\"\\x26\"+a+\"\\x3d\"+e)}var a=",["escape",["macro",30],8,16],".toLowerCase();a=\/samsungbrowser|crios|edge|gsa|instagram|fban|fbios\/.test(a);(a=navigator.sendBeacon\u0026\u0026!a)?navigator.sendBeacon(g,\nd):(a=new XMLHttpRequest,a.open(\"POST\",g,!0),a.send(d));if(\"true\"===b.get(\"doNotSendToGA\"))throw\"Aborted tracking for test user.\";h(c)})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.pageTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var a=[{pattern:\/^\\\/brandstudio\\\/.+\/,pageType:\"Native Ad Page\",mainSection:\"Brandstudio\",subsection:void 0},{pattern:\/^\\\/om\\\/$\/,pageType:\"Tag List Page\",mainSection:\"Om\",subsection:void 0},{pattern:\/^\\\/om\\\/.+\/,pageType:\"Article List Page\",mainSection:\"Om\",subsection:",["escape",["macro",32],8,16],"},{pattern:\/^\\\/av\\\/$\/,pageType:\"Profile List Page\",mainSection:\"Av\",subsection:void 0},{pattern:\/^\\\/av\\\/.+\/,pageType:\"Article List Page\",mainSection:\"Av\",subsection:",["escape",["macro",32],8,16],"},\n{pattern:\/^\\\/sok\\\/$\/,pageType:\"Search Page\",mainSection:\"S\\u00f6k\",subsection:void 0},{pattern:\/^\\\/orderverifieringtm\\\/.+\/,pageType:\"Telemarketing Page\",mainSection:\"Telemarketing\",subsection:void 0},{pattern:\/^\\\/foretag\\\/$\/,pageType:\"Subscription Promotion Page\",mainSection:\"Prenumeration\",subsection:\"F\\u00f6retag\"},{pattern:\/^\\\/app\\\/$\/,pageType:\"Information Page\",mainSection:\"Appar\",subsection:void 0},{pattern:\/^\\\/ekonomi\\\/sok-utbildning\\\/$\/,pageType:\"Education Overview Page\",mainSection:\"Ekonomi\",\nsubsection:\"S\\u00f6k utbildning\"},{pattern:\/^\\\/familj\\\/dodsannonser\\\/$\/,pageType:\"Obituary Page\",mainSection:\"Familj\",subsection:\"D\\u00f6dsannonser\"},{pattern:\/^\\\/kontakt\\\/$\/,pageType:\"Information Page\",mainSection:\"Kontakt\",subsection:void 0},{pattern:\/^\\\/utbud\\\/$\/,pageType:\"Navigation Page\",mainSection:\"Utbud\",subsection:void 0},{pattern:\/^\\\/val\\\/$\/,pageType:\"Ad Hoc Page\",mainSection:\"Val\",subsection:void 0},{pattern:\/^\\\/webbspel\\\/ord-pa-ord\\\/$\/,pageType:\"Game Page\",mainSection:\"Webbspel\",subsection:\"Ord p\\u00e5 ord\"},\n{pattern:\/^\\\/webbspel\\\/sudoku\\\/$\/,pageType:\"Game Page\",mainSection:\"Webbspel\",subsection:\"Sudoku\"},{pattern:\/^\\\/meny\\\/$\/,pageType:\"Navigation Page\",mainSection:\"Meny\",subsection:void 0},{pattern:\/^\\\/nyhetsbrev\\\/$\/,pageType:\"Newsletter List Page\",mainSection:\"Nyhetsbrev\",subsection:void 0},{pattern:\/^\\\/ekonomi\\\/bors\\\/$\/,pageType:\"Stock Overview Page\",mainSection:\"Ekonomi\",subsection:\"B\\u00f6rs\\u00f6versikt\"}];return a.find(function(a){return a.pattern.test(b)})}})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"gtmCategory"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"UNDEFINED",
      "vtp_name":"articleUrl"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",37],
      "vtp_defaultValue":["template","?",["macro",37]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",36],
      "vtp_defaultValue":["template",["macro",36],["macro",38]],
      "vtp_map":["list",["map","key","UNDEFINED","value","UNDEFINED"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",39],
      "vtp_name":"url"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",40],
      "vtp_defaultValue":["macro",40],
      "vtp_map":["list",["map","key","UNDEFINED","value",["template",["macro",41],["macro",38]]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",33],8,16],"(window.location.pathname);return a=\"undefined\"!==typeof a?a.pageType:",["escape",["macro",27],8,16],"(",["escape",["macro",7],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleAccessLevel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.isAutorefresh"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.authors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articlePublishDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.browserHasAdblocker"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",48],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","Unknown","value","Searching"],["map","key","Yes","value","Active"],["map","key","No","value","Not found"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.pageId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.brandLine"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"userInfo.loggedIn"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","true","value","Logged In"],["map","key","false","value","Logged Out"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.brandName"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"DNApp"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"DNAppVersion"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",55],
      "vtp_defaultValue":"N\/A",
      "vtp_map":["list",["map","key","tablet","value",["macro",56]],["map","key","mobile","value",["macro",56]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.isFailover"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleIndex"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"userInfo.hasSubscription"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",60],
      "vtp_map":["list",["map","key","true","value","Subscriber"],["map","key","false","value","Non-Subscriber"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","false","value","Logged Out"],["map","key","true","value",["macro",61]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.displayEvent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.environment"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",64],
      "vtp_defaultValue":["macro",64],
      "vtp_map":["list",["map","key","production","value","Production"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.mainSectionLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",66],8,16],",b=",["escape",["macro",33],8,16],"(window.location.pathname);return a=\"undefined\"!==typeof b?b.mainSection:a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.subSectionLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",68],8,16],",b=",["escape",["macro",33],8,16],"(window.location.pathname);a=\"undefined\"!==typeof b?b.subsection:a;\"undefined\"===typeof a\u0026\u0026(a=\"(not set)\");return a})();"]
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-6629581-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","page","value",["macro",42]],["map","fieldName","customTask","value",["macro",31]],["map","fieldName","dataSource","value","web"]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",43]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",44]],["map","index","7","dimension",["macro",45]],["map","index","8","dimension",["macro",46]],["map","index","9","dimension",["macro",47]],["map","index","10","dimension",["macro",49]],["map","index","11","dimension",["macro",50]],["map","index","15","dimension",["macro",12]],["map","index","22","dimension",["macro",51]],["map","index","23","dimension",["macro",53]],["map","index","24","dimension",["macro",54]],["map","index","27","dimension",["macro",12]],["map","index","30","dimension",["macro",57]],["map","index","31","dimension",["macro",58]],["map","index","32","dimension",["macro",59]],["map","index","35","dimension",["macro",43]],["map","index","37","dimension",["macro",62]],["map","index","38","dimension",["macro",18]],["map","index","41","dimension",["macro",12]],["map","index","42","dimension",["macro",63]],["map","index","44","dimension",["macro",3]],["map","index","45","dimension",["macro",5]],["map","index","46","dimension",["macro",12]],["map","index","69","dimension",["macro",65]],["map","index","70","dimension",["macro",67]],["map","index","76","dimension",["macro",69]],["map","index","77","dimension",["macro",70]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"gtmAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"gtmLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"eventInfo.nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video.time"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",80],
      "vtp_defaultValue":"Resume",
      "vtp_map":["list",["map","key","0","value","Play"],["map","key","-1","value","Preroll Play"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",79],
      "vtp_defaultValue":["macro",79],
      "vtp_map":["list",["map","key","resume","value",["macro",81]],["map","key","pause","value","Paused"],["map","key","finish","value","Finished"],["map","key","before-seek","value","seeked"]]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",84],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","true","value","1"],["map","key","false","value","0"]]
    },{
      "function":"__c",
      "vtp_value":["template",["macro",34],":",["macro",73]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_defaultValue":["macro",73],
      "vtp_map":["list",["map","key","Köp - Betalvägg","value","Köp - Betalvägg"],["map","key","Påtvingad Köp - Betalvägg","value","Köp - Påtvingad Betalvägg"],["map","key","köp - betalvägg","value","Köp - Betalvägg"],["map","key","påtvingad köp - betalvägg","value","Köp - Påtvingad Betalvägg"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.flowName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.stepName"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",92],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","Autogiro Offer","value","true"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.experimentName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.experimentVariation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.stepName"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",97],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","Start","value","1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",97],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","Purchase Receipt","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.product"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.flowId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.stepVariant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.flowVariant"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",16],8,16],"([{name:\"purchaseType\",index:54}])})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.context"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.paymentModule"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.timingVariable"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.paywallId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.timingValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.socialNetwork"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",25],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","Impression","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.tagLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.tagId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkContext"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkTagId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkContentId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.timeEngaged"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.pageId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.mainSectionURISegment"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",41],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"BI_News",
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key","^\/kultur-noje\/","value","BI_ArtsEntertainment"],["map","key","^\/ekonomi\/motor\/","value","BI_Automotive"],["map","key","^\/ekonomi\/jobb-karriar\/","value","BI_Career"],["map","key","^\/ekonomi\/sokjobb\/","value","BI_Career"],["map","key","^\/ekonomi\/sok-utbildning\/","value","BI_Education"],["map","key","^\/ekonomi\/","value","BI_Business"],["map","key","^\/mat-dryck\/","value","BI_FoodDrink"],["map","key","^\/ledare\/","value","BI_LawGovermentPolitics"],["map","key","^\/debatt\/","value","BI_LawGovermentPolitics"],["map","key","^\/sport\/","value","BI_Sport"],["map","key","^\/resor\/","value","BI_Travel"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",48],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","Yes","value","true"],["map","key","No","value","false"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",64],
      "vtp_defaultValue":"true",
      "vtp_map":["list",["map","key","production","value","false"],["map","key","(not set)","value","(not set)"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",44],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","none","value","free"],["map","key","free","value","free"],["map","key","limited","value","limited"],["map","key","locked","value","locked"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"okänt",
      "vtp_name":"loggedIn"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"weight"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleIsNative"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articlePublishTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleTagIdList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"environmentInfo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.httpStatusCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageInfo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.subSectionURISegment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.isStandalone"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"userInfo"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_defaultValue":["macro",73],
      "vtp_map":["list",["map","key","Gått in i betalväggen","value","Hit the Paywall"],["map","key","Påtvingad Gått in i betalväggen","value","Forced Hit the Paywall"],["map","key","Köp - betalvägg","value","Paywall purchase"],["map","key","Påtvingad Köp - betalvägg","value","Forced Paywall purchase"],["map","key","Påbörjat köp","value","Initiated purchase"],["map","key","Påtvingad Påbörjat köp","value","Forced Initiated purchase"],["map","key","Besökt låst artikel","value","Visited locked article"],["map","key","Påtvingad Besökt låst artikel","value","Forced Visited locked article"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",60],
      "vtp_defaultValue":"partialaccess",
      "vtp_map":["list",["map","key","true","value","fullaccess"],["map","key","false","value","partialaccess"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"userInfo.isAutoSsoLogin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.period"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",103],":",["macro",97]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",149],
      "vtp_map":["list",["map","key","Frequence Locked:Start","value","Hit the Paywall"],["map","key","Hard Locked:Start","value","Forced Hit the Paywall"],["map","key","Frequence Locked:Purchase Receipt","value","Paywall purchase"],["map","key","Hard Locked:Purchase Receipt","value","Forced Paywall purchase"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"flowInfo"
    }],
  "tags":[{
      "function":"__html",
      "priority":99999,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{document.gtmEngagement.previousPageId=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_pageId\"),document.gtmEngagement.virtualPageView(),console.log(document.gtmEngagement.previousPageId)}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__ua",
      "priority":9999,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","3","metric",["macro",87]]],
      "vtp_gaSettings":["macro",72],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Page View - All Pages"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":77
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",34],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",73],
      "vtp_eventLabel":["macro",74],
      "vtp_dimension":["list",["map","index","46","dimension","GA - AB Test"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",75],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",76],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",78],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Event Passthrough"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":60
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"]],
      "vtp_eventCategory":"OTHER",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"eCommerce",
      "vtp_eventLabel":"eCommerce",
      "vtp_dimension":["list",["map","index","46","dimension","GA - E-commerce Forward"]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",82],
      "vtp_eventLabel":["macro",2],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Video"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template","Click to ",["macro",86]],
      "vtp_eventLabel":["macro",84],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Outbound Links"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Konvertering",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",89],
      "vtp_eventLabel":["template","Betalvägg - ",["macro",74]],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Paywall - Conversion"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Inventory",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",73],
      "vtp_eventLabel":["template","Betalvägg - ",["macro",74]],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Paywall - Inventory"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",90]]],
      "vtp_trackType":"TRACK_TRANSACTION",
      "vtp_gaSettings":["macro",72],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Paywall - Transaction"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTransaction":true,
      "tag_id":81
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",93],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Account Settings",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",91]," - ",["macro",94]],
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Account Settings - Overlay"],["map","index","50","dimension",["macro",14]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"AB-test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",95],
      "vtp_eventLabel":["macro",96],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Experiment"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":101
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Article Paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric",["macro",98]],["map","index","4","metric",["macro",99]]],
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Article Paywall - Impression"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",104],
      "vtp_eventCategory":"Article Paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric",["macro",98]],["map","index","4","metric",["macro",99]]],
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Article Paywall - Impression with Ecommerce"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",105]," ",["macro",106]],
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Interaction"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",101]," - Impression"],
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Popup Impression"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",104],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",101]," - Impression"],
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Popup Impression with Ecommerce"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":107
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","sampleRate","value","1"]],
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",107],
      "vtp_gaSettings":["macro",72],
      "vtp_timingCategory":"Paywall Performance",
      "vtp_timingVar":["macro",108],
      "vtp_dimension":["list",["map","index","27","dimension",["macro",109]],["map","index","46","dimension","GA - Paywall Performance"]],
      "vtp_timingValue":["macro",110],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":110
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Impression"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",104],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Impression with Ecommerce"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":112
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",111]," Click"],
      "vtp_eventLabel":["macro",112],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Menu Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":114
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",113]," ",["macro",114]],
      "vtp_eventLabel":["macro",115],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Social"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":115
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",26],
      "vtp_eventCategory":"Internal Promotion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["template",["macro",24]," ",["macro",25]],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Internal Promotion"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Watchlist",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",117],
      "vtp_eventLabel":["macro",118],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",119]],["map","index","46","dimension","GA - Watchlist - Save Article"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":117
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Watchlist",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template","Article Link Click - ",["macro",120]],
      "vtp_eventLabel":["macro",121],
      "vtp_dimension":["list",["map","index","75","dimension",["macro",122]],["map","index","80","dimension",["macro",123]],["map","index","46","dimension","GA - Watchlist Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":118
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","doNotSendToGA","value","true"]],
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Active Duration",
      "vtp_eventLabel":["macro",124],
      "vtp_dimension":["list",["map","index","78","dimension",["macro",125]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":120
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Watchlist",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",117],
      "vtp_eventLabel":["macro",118],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Watchlist - Follow Subject or Author"],["map","index","75","dimension",["macro",119]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8977820_86",
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg style=\"display: none\" src=\"https:\/\/inviso.rampanel.com\/ram\/Inviso?i=15799\u0026amp;c=80\u0026amp;n=dnse\u0026amp;cg=1\u0026amp;r=1\u0026amp;rdir=1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _cInfo=_cInfo||[];(function(){if(null===document.cookie.match(\"__codnt\")){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/analytics.codigo.se\/j\/ec4d2cb730074fc6b0f285b35d1346df.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _cInfo=_cInfo||[];(function(){var b=",["escape",["macro",67],8,16],",c=",["escape",["macro",69],8,16],",a=\"\/error\";\"Error Page\"==",["escape",["macro",43],8,16],"?a=\"\/404\":\"string\"===typeof b\u0026\u0026\"(not set)\"!==b\u0026\u0026(a=\"\/\"+b,\"string\"===typeof c\u0026\u0026\"(not set)\"!==c\u0026\u0026(a+=\"\/\"+c));null===document.cookie.match(\"__codnt\")\u0026\u0026window._cInfo.push({cmd:\"_trackContentPath\",val:a},{cmd:\"_executeTracking\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _cInfo=_cInfo||[];(function(){null===document.cookie.match(\"__codnt\")\u0026\u0026window._cInfo.push({cmd:\"_trackContentPath\",val:\"\/playtv\/\"+",["escape",["macro",126],8,16],"},{cmd:\"_executeTracking\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function a(a){return\"undefined\"!==typeof a\u0026\u0026\"(not set)\"!==a\u0026\u0026\"(not_set)\"!==a?String(a):\"\"}function c(a,b,c,d){\"\"!==c\u0026\u0026\"{}\"!==c\u0026\u0026d.annotate(a,b,c)}function k(a){var b={};a.forEach(function(a){for(var c in a)if(a.hasOwnProperty(c)){var e=a[c];\"\"!==e\u0026\u0026(b[c]=e)}});return b}function h(a){return a.toLowerCase().replace(\/\\u00e5\/g,\"a\").replace(\/\\u00e4\/g,\"a\").replace(\/\\u00f6\/g,\"o\").replace(\/[^a-z0-9_]\/g,\"_\")}window.burtApi=window.burtApi||[];try{window.burtApi.push(function(g){\"Page load\"!==",["escape",["macro",63],8,16],"\u0026\u0026\ng.stopTracking();g.startTracking(function(b){b.setTrackingKey(\"DN059BPN618Z\",\"dn\");b.setDomain(\"dn.se\");b.addCloudKey(\"INS8GFMRVMI1\");b.setDemographicsProvider(\"cint\");var g=a(",["escape",["macro",27],8,16],"(",["escape",["macro",7],8,16],")),d=\"\",e=\"\",f=\"\",l=\"\";a(",["escape",["macro",66],8,16],")\u0026\u0026(d=h(",["escape",["macro",66],8,16],"),\"nyheter\"===d\u0026\u0026\"\/\"===",["escape",["macro",41],8,16],"\u0026\u0026(d=\"frontpage\"),\"kultur\"===d\u0026\u0026(d=\"kultur-noje\"),f=\"dn|dn_se|\"+d,a(",["escape",["macro",68],8,16],")\u0026\u0026(e=h(",["escape",["macro",68],8,16],"),l=f+\"|\"+e));c(\"burt.content\",\"tags\",[",["escape",["macro",127],8,16],",\n\"dn\",\"dn|dn_se\",f,l].filter(Boolean),b);f=a(",["escape",["macro",29],8,16],");\"\"!==f\u0026\u0026\"{}\"!==f\u0026\u0026b.connect(\"burt.beacon\",\"serviceplus-id\",f);b.setCategory(d,e);0\u003C=g.indexOf(\"Article Page\")\u0026\u0026b.connect(\"bonnier.content\",\"nerd-article-id\",a(",["escape",["macro",50],8,16],"),b);c(\"content\",\"brand\",JSON.stringify(k([{brand_parent:\"dn\"},{brand_child:\"dn_se\"}])),b);c(\"content\",\"id\",JSON.stringify(k([{content_id:a(",["escape",["macro",50],8,16],")},{content_desc:a(",["escape",["macro",50],8,16],")?\"nav\":\"\"}])),b);c(\"client\",\"logged_in_data\",JSON.stringify(k([{login_id:a(",["escape",["macro",29],8,16],")},\n{login_system:a(",["escape",["macro",29],8,16],")?\"serviceplus\":\"\"}])),b);c(\"client\",\"adblock\",a(",["escape",["macro",128],8,16],"),b);c(\"client\",\"anonymous_user_id\",a(",["escape",["macro",28],8,16],"),b);c(\"content\",\"is_test_env\",a(",["escape",["macro",129],8,16],"),b);c(\"client\",\"is_subscriber\",a(",["escape",["macro",60],8,16],"),b);c(\"content\",\"category\",d,b);c(\"content\",\"sub_category\",e,b);c(\"content\",\"page_type\",h(g),b);c(\"client\",\"user_logged_in\",a(",["escape",["macro",52],8,16],"),b);c(\"content\",\"content_access_restriction\",h(a(",["escape",["macro",130],8,16],")),\nb);Number.isInteger(",["escape",["macro",59],8,16],")\u0026\u0026c(\"content\",\"page_index\",String(",["escape",["macro",59],8,16],"+1),b)})})}catch(g){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"\";\"Hard Locked\"===",["escape",["macro",103],8,16],"?a=\"Forced Hit the Paywall\":\"Frequence Locked\"===",["escape",["macro",103],8,16],"\u0026\u0026(a=\"Hit the Paywall\");window.burtApi=window.burtApi||[];window.burtApi.push(function(b){b.annotate(\"content\",\"paywall_impression\",JSON.stringify({paywall_id:a,paywall_type:a+\" - \"+",["escape",["macro",101],8,16],"}))})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"\";\"Hard Locked\"===",["escape",["macro",103],8,16],"?a=\"Forced Paywall purchase\":\"Frequence Locked\"===",["escape",["macro",103],8,16],"\u0026\u0026(a=\"Paywall purchase\");window.burtApi=window.burtApi||[];window.burtApi.push(function(b){b.annotate(\"content\",\"paywall_result\",JSON.stringify({paywall_id:a,paywall_type:a+\" - \"+",["escape",["macro",101],8,16],"}))})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c,e,h,f,g,d,k,l=function(){c=!0;e=h=f=g=d=k=void 0;clearTimeout(h)},a=function(a,b){window.addEventListener?window.addEventListener(a,b):window.attachEvent\u0026\u0026window.attachEvent(\"on\"+a,b)},m=function(a){c||(f=(new Date).getTime(),g=f-e,\"number\"===typeof g\u0026\u00260\u003Cg\u0026\u002611E3\u003Ef-k\u0026\u0026window.dataLayer.push({event:\"Engaged Time\",eventInfo:{idleStartTime:f,timeEngaged:g,eventType:a,engagedStartTime:e,pageId:\"virtual pageview\"===a?document.gtmEngagement.previousPageId:google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_pageId\")}}));\nl();c=!0},b=function(a){d=(new Date).getTime();\"visibilitychange\"===a.type\u0026\u0026\"hidden\"===document.visibilityState?m(a.type):(c?(e=d,c=!1):1E4\u003Cd-k\u0026\u0026(l(),e=d,c=!1),clearTimeout(h),h=window.setTimeout(m,1E4,a.type),k=d)};document.gtmEngagement={};document.gtmEngagement.virtualPageView=function(){m(\"virtual pageview\");l()};l();a(\"mousedown\",b);a(\"keydown\",b);a(\"scroll\",b);a(\"mousemove\",b);a(\"beforeunload\",b);a(\"visibilitychange\",b);a(\"popstate\",b);a(\"pushstate\",b);a(\"wheel\",b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":119
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"AB-test"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Google Analytics Event"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"eCommerceAction"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"video-action"
    },{
      "function":"_eq",
      "arg0":["macro",79],
      "arg1":"seek"
    },{
      "function":"_re",
      "arg0":["macro",83],
      "arg1":"^https?:\\\/\\\/([^\\\/\\.]*\\.)?dn\\.se.*"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":".*javascript:void.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^https?:\\\/\\\/([^\\\/\\.]*\\.)?dn\\.se.*",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",84],
      "arg1":"mailto:"
    },{
      "function":"_sw",
      "arg0":["macro",84],
      "arg1":"javascript:"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^\\\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":".*[a-zA-Z].*"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"(^$|((^|,)8977820_86($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Pageview"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"Konvertering:.*Köp - betalvägg",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"Inventory:.*(Gått in i betalväggen|Besökt låst artikel)"
    },{
      "function":"_cn",
      "arg0":["macro",91],
      "arg1":"Change to Autogiro"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Overlay"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"AB-test"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"Article Paywall"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Flow Impression"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"OCU Confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"Purchase Receipt"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Flow Interaction"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"Popup"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Paywall Performance"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Menu Click"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Social Event"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Internal Promotion"
    },{
      "function":"_re",
      "arg0":["macro",117],
      "arg1":"Save Article",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Watchlist"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Watchlist Click"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Engaged Time"
    },{
      "function":"_re",
      "arg0":["macro",117],
      "arg1":"follow",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Critical Content Loaded"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"Virtual"
    },{
      "function":"_cn",
      "arg0":["macro",82],
      "arg1":"Play"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"Start"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"Flow Impression"
    }],
  "rules":[
    [["if",0,1],["add",2]],
    [["if",2],["add",3]],
    [["if",3],["add",4]],
    [["if",4],["add",5]],
    [["if",6,12,13,14],["unless",7,8,9,10,11],["add",6]],
    [["if",15],["add",1,32,35]],
    [["if",1,16],["add",7,9]],
    [["if",1,17],["add",8]],
    [["if",18,19],["add",10]],
    [["if",20],["add",11]],
    [["if",21,22],["add",12],["block",18,19]],
    [["if",21,22,24],["add",13]],
    [["if",21,22,23],["add",13]],
    [["if",25],["add",14]],
    [["if",22,26],["add",15],["block",18,19]],
    [["if",22,24,26],["add",16]],
    [["if",27],["add",17]],
    [["if",22],["add",18]],
    [["if",22,24],["add",19],["block",12,15,18]],
    [["if",28],["add",20]],
    [["if",29],["add",21]],
    [["if",30],["add",22]],
    [["if",31,32],["add",23]],
    [["if",33],["add",24]],
    [["if",34],["add",25]],
    [["if",32,35],["add",26]],
    [["if",36],["add",27]],
    [["if",37],["add",28,29,30]],
    [["if",15,38],["add",30,0]],
    [["if",4,39],["add",31]],
    [["if",21,22,40],["add",33]],
    [["if",21,24,41],["add",34]],
    [["if",4,5],["block",5]],
    [["if",22,23],["block",12]]]
},
"runtime":[
[],[]
]



};
var aa,da=this||self,ea=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},pa=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},qa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},sa=function(a,b){for(var c=new ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},ra=function(){this.prefix="gtm.";this.values={}};ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};ra.prototype.get=function(a){return this.values[this.prefix+a]};ra.prototype.contains=function(a){return void 0!==this.get(a)};
var za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Aa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ea=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Fa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ja=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},f=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ja(e)?(Ja(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};
var Ka=[],La={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ma=function(a){return La[a]},Na=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ua=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Va={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Wa=function(a){return Va[a]};
Ka[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ua,Wa)+"'"}};var db=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,eb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},fb=function(a){return eb[a]};Ka[16]=function(a){return a};var ib=[],jb=[],kb=[],lb=[],mb=[],ob={},pb,qb,rb,sb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},tb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!ob[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?ob[c](e):(void 0)(c,e,b)},vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ub(a[e],b,c));return d},
wb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ob[b];return c?c.priorityOverride||0:0},ub=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ub(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Bc(h))return;c[g]=!0;try{var k=vb(h,b,c);k.vtp_gtmEventId=b.id;d=tb(k,b);rb&&(d=rb.Ff(d,k))}catch(w){b.be&&b.be(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ub(a[l],b,c)]=ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=ub(a[n],b,c);qb&&(m=m||q===qb.xb);d.push(q)}return qb&&m?qb.If(d):d.join("");case "escape":d=ub(a[1],b,c);if(qb&&ma(a[1])&&"macro"===a[1][0]&&qb.jg(a))return qb.vg(d);d=String(d);for(var t=2;t<a.length;t++)Ka[a[t]]&&(d=Ka[a[t]](d));return d;case "tag":var p=a[1];if(!lb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Od:a[2],index:p};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=xb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},xb=function(a,b,c){try{return pb(vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var yb=function(){var a=function(b){return{toString:function(){return b}}};return{ed:a("convert_case_to"),fd:a("convert_false_to"),gd:a("convert_null_to"),hd:a("convert_true_to"),jd:a("convert_undefined_to"),dh:a("debug_mode_metadata"),la:a("function"),Te:a("instance_name"),Ue:a("live_only"),Ve:a("malware_disabled"),We:a("metadata"),fh:a("original_vendor_template_id"),Xe:a("once_per_event"),Cd:a("once_per_load"),Dd:a("setup_tags"),Ed:a("tag_id"),Fd:a("teardown_tags")}}();var zb=null,Cb=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];zb=Ab(a);for(var e=0;e<jb.length;e++){var g=jb[e],h=Bb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<lb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=zb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Ab=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=xb(kb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
for(var Fb="floor ceil round max min abs pow sqrt".split(" "),Gb=0;Gb<Fb.length;Gb++)Math.hasOwnProperty(Fb[Gb]);var u=window,C=document,Hb=navigator,Ib=C.currentScript&&C.currentScript.src,Jb=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=da.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},D=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){u.setTimeout(a,0)},Qb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Rb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Sb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Tb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ub=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={$b:"event_callback",Na:"event_timeout",W:"gtag.config",P:"allow_ad_personalization_signals",S:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var ic=/[A-Z]+/,jc=/\s/,kc=function(a){if(ka(a)&&(a=xa(a),!jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],N:d}}}}},mc=function(a){for(var b={},c=0;c<a.length;++c){var d=kc(a[c]);d&&(b[d.id]=d)}lc(b);var e=[];ta(b,function(g,h){e.push(h)});return e};
function lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.N[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var nc={},oc=null,pc=Math.random();nc.i="GTM-PZ2FZGR";nc.Bb="941";var qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},rc="www.googletagmanager.com/gtm.js";var sc=rc,tc=null,uc=null,vc=null,wc="//www.googletagmanager.com/a?id="+nc.i+"&cv=105",xc={},zc={},Ac=function(){var a=oc.sequence||0;oc.sequence=a+1;return a};var Bc={},Cc=function(a,b){Bc[a]=Bc[a]||[];Bc[a][b]=!0},Dc=function(a){for(var b=[],c=Bc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Ec=function(){return"&tc="+lb.filter(function(a){return a}).length},Nc=function(){Fc&&(u.clearTimeout(Fc),Fc=void 0);void 0===Gc||Hc[Gc]&&!Ic||(Jc[Gc]||Kc.lg()||0>=Lc--?(Cc("GTM",1),Jc[Gc]=!0):(Kc.Gg(),Ob(Mc()),Hc[Gc]=!0,Ic=""))},Mc=function(){var a=Gc;if(void 0===a)return"";var b=Dc("GTM"),c=Dc("TAGGING");return[Oc,Hc[a]?"":"&es=1",Pc[a],b?"&u="+b:"",c?"&ut="+c:"",Ec(),Ic,"&z=0"].join("")},Qc=function(){return[wc,"&v=3&t=t","&pid="+qa(),"&rv="+nc.Bb].join("")},Rc="0.005000">
Math.random(),Oc=Qc(),Sc=function(){Oc=Qc()},Hc={},Ic="",Gc=void 0,Pc={},Jc={},Fc=void 0,Kc=function(a,b){var c=0,d=0;return{lg:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},Gg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Lc=1E3,Tc=function(a,b){if(Rc&&!Jc[a]&&Gc!==a){Nc();Gc=a;Ic="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Pc[a]="&e="+c+"&eid="+a;Fc||(Fc=u.setTimeout(Nc,500))}},Uc=function(a,b,c){if(Rc&&!Jc[a]&&b){a!==Gc&&(Nc(),Gc=a);var d=String(b[yb.la]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Ic=Ic?Ic+"."+e:"&tr="+e;Fc||(Fc=u.setTimeout(Nc,500));2022<=Mc().length&&Nc()}};var Vc={},Wc=new ra,Xc={},Yc={},bd={name:"dataLayer",set:function(a,b){f(Zc(a,b),Xc);$c()},get:function(a){return ad(a,2)},reset:function(){Wc=new ra;Xc={};$c()}},ad=function(a,b){if(2!=b){var c=Wc.get(a);if(Rc){var d=cd(a);c!==d&&Cc("GTM",5)}return c}return cd(a)},cd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:ed(d)},ed=function(a){for(var b=Xc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var hd=function(a,b){Yc.hasOwnProperty(a)||(Wc.set(a,b),f(Zc(a,b),Xc),$c())},Zc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},$c=function(a){ta(Yc,function(b,c){Wc.set(b,c);f(Zc(b,void 0),Xc);f(Zc(b,c),Xc);a&&delete Yc[b]})},id=function(a,b,c){Vc[a]=Vc[a]||{};var d=1!==c?cd(b):Wc.get(b);"array"===Ha(d)||"object"===Ha(d)?Vc[a][b]=f(d):Vc[a][b]=d},jd=function(a,b){if(Vc[a])return Vc[a][b]};var kd=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===ld()||d||"http:"!=u.location.protocol?a:b)+c},ld=function(){var a=Mb(),b;if(1===a)a:{var c=sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var zd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ad={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Bd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Cd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ed=function(a){var b=ad("gtm.whitelist");b&&Cc("GTM",9);var c=b&&Fa(wa(b),Ad),d=ad("gtm.blacklist");d||(d=ad("tagTypeBlacklist"))&&Cc("GTM",3);
d?Cc("GTM",8):d=[];Dd()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=oa(wa(d),"google")&&Cc("GTM",2);var e=d&&Fa(wa(d),Bd),g={};return function(h){var k=h&&h[yb.la];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
oa(c,l[q])){Cc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=oa(e,k);if(p)t=p;else{var r=sa(e,l||[]);r&&Cc("GTM",10);t=r}}var v=!m||t;v||!(0<=oa(l,"sandboxedScripts"))||c&&-1!==oa(c,"sandboxedScripts")||(v=sa(e,Cd));return g[k]=v}},Dd=function(){return zd.test(u.location&&u.location.hostname)};var Fd={Ff:function(a,b){b[yb.ed]&&"string"===typeof a&&(a=1==b[yb.ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(yb.gd)&&null===a&&(a=b[yb.gd]);b.hasOwnProperty(yb.jd)&&void 0===a&&(a=b[yb.jd]);b.hasOwnProperty(yb.hd)&&!0===a&&(a=b[yb.hd]);b.hasOwnProperty(yb.fd)&&!1===a&&(a=b[yb.fd]);return a}};var Gd={active:!0,isWhitelisted:function(){return!0}},Hd=function(a){var b=oc.zones;!b&&a&&(b=oc.zones=a());return b};var Id=!1,Jd=0,Kd=[];function Ld(a){if(!Id){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Id=!0;for(var e=0;e<Kd.length;e++)G(Kd[e])}Kd.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Md(){if(!Id&&140>Jd){Jd++;try{C.documentElement.doScroll("left"),Ld()}catch(a){u.setTimeout(Md,50)}}}var Nd=function(a){Id?a():Kd.push(a)};var Od={},Pd={},Qd=function(a,b,c,d){if(!Pd[a]||qc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Pd[a].tags.push(e)-1},Rd=function(a,b,c,d){if(Pd[a]){var e=Pd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Sd(a){for(var b=Od[a]||[],c=0;c<b.length;c++)b[c]();Od[a]={push:function(d){d(nc.i,Pd[a])}}}
var Vd=function(a,b,c){Pd[a]={tags:[]};ja(b)&&Td(a,b);c&&u.setTimeout(function(){return Sd(a)},Number(c));return Ud(a)},Td=function(a,b){Od[a]=Od[a]||[];Od[a].push(Aa(function(){return G(function(){b(nc.i,Pd[a])})}))};function Ud(a){var b=0,c=0,d=!1;return{add:function(){c++;return Aa(function(){b++;d&&b>=c&&Sd(a)})},pf:function(){d=!0;b>=c&&Sd(a)}}};var Wd=function(){function a(d){return!la(d)||0>d?0:d}if(!oc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=la(bd.get("gtm.start"))?bd.get("gtm.start"):0;oc._li={cst:a(c-b),cbt:a(uc-b)}}};var $d=!1,ae=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},be=!1;
var ce=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||Cc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}Wd();return u[b]},de=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ae();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var fe=function(){},ee=function(){return u.GoogleAnalyticsObject||"ga"};var he=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ie=/:[0-9]+$/,je=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ke(a.protocol)||ke(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(ie,"").toLowerCase());var g=b,h,k=ke(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=le(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(ie,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Cc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=oa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=je(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ke=function(a){return a?a.replace(":","").toLowerCase():""},le=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
ne=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Cc("TAGGING",1),c="/"+c);var d=b.hostname.replace(ie,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var te=function(a){};function se(a,b){a.containerId=nc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ue(a,b,c,d){var e=lb[a],g=ve(a,b,c,d);if(!g)return null;var h=ub(e[yb.Dd],c,[]);if(h&&h.length){var k=h[0];g=ue(k.index,{J:g,U:1===k.Od?b.terminate:g,terminate:b.terminate},c,d)}return g}
function ve(a,b,c,d){function e(){if(g[yb.Ve])k();else{var w=vb(g,c,[]),x=Qd(c.id,String(g[yb.la]),Number(g[yb.Ed]),w[yb.We]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var B=ya()-z;Uc(c.id,lb[a],"5");Rd(c.id,x,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var B=ya()-z;Uc(c.id,lb[a],"6");Rd(c.id,x,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Uc(c.id,g,"1");var A=function(B){var E=ya()-z;te(B);Uc(c.id,g,"7");Rd(c.id,x,"exception",E);y||(y=!0,k())};var z=ya();try{tb(w,c)}catch(B){A(B)}}}var g=lb[a],h=b.J,k=b.U,l=b.terminate;if(c.Bc(g))return null;var m=ub(g[yb.Fd],c,[]);if(m&&m.length){var n=m[0],q=ue(n.index,{J:h,U:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Od?l:q}if(g[yb.Cd]||g[yb.Xe]){var t=g[yb.Cd]?mb:c.Qg,p=h,r=k;if(!t[a]){e=Aa(e);var v=we(a,t,e);h=v.J;k=v.U}return function(){t[a](p,r)}}return e}
function we(a,b,c){var d=[],e=[];b[a]=xe(d,e,c);return{J:function(){b[a]=ye;for(var g=0;g<d.length;g++)d[g]()},U:function(){b[a]=ze;for(var g=0;g<e.length;g++)e[g]()}}}function xe(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ye(a){a()}function ze(a,b){b()};var Ce=function(a,b){for(var c=[],d=0;d<lb.length;d++)if(a.cb[d]){var e=lb[d];var g=b.add();try{var h=ue(d,{J:g,U:g,terminate:g},a,d);h?c.push({te:d,ie:wb(e),Qf:h}):(Ae(d,a),g())}catch(l){g()}}b.pf();c.sort(Be);for(var k=0;k<c.length;k++)c[k].Qf();return 0<c.length};function Be(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.te,k=b.te;g=h>k?1:h<k?-1:0}return g}
function Ae(a,b){if(!Rc)return;var c=function(d){var e=b.Bc(lb[d])?"3":"4",g=ub(lb[d][yb.Dd],b,[]);g&&g.length&&c(g[0].index);Uc(b.id,lb[d],e);var h=ub(lb[d][yb.Fd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var De=!1,Ee=function(a,b,c,d,e){if("gtm.js"==b){if(De)return!1;De=!0}Tc(a,b);var g=Vd(a,d,e);id(a,"event",1);id(a,"ecommerce",1);id(a,"gtm");var h={id:a,name:b,Bc:Ed(c),cb:[],Qg:[],be:function(n){Cc("GTM",6);te(n)}};h.cb=Cb(h);var k=Ce(h,g);"gtm.js"!==b&&"gtm.sync"!==b||fe();if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=
lb[l];if(m&&!qc[String(m[yb.la])])return!0}return!1};var Ge=function(a,b,c,d){var e=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.globalConfig=d||{};this.getWithConfig=function(g){if(e.eventModel.hasOwnProperty(g))return e.eventModel[g];if(e.targetConfig.hasOwnProperty(g))return e.targetConfig[g];if(e.containerConfig.hasOwnProperty(g))return e.containerConfig[g];if(e.globalConfig.hasOwnProperty(g))return e.globalConfig[g]}};function He(){var a=oc;return a.gcq=a.gcq||new Ie}
var Je=function(a,b){He().register(a,b)},Ke=function(a,b,c,d){He().push("event",[b,a],c,d)},Le=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.je=null;this.Yd=!1},Me=function(a,b,c,d,e){this.type=a;this.Vg=b;this.O=c||"";this.Eb=d;this.defer=e},Ie=function(){this.Kd={};this.Td={};this.Xa=[]},Ne=function(a,b){var c=kc(b);return a.Kd[c.containerId]=a.Kd[c.containerId]||new Le},Oe=function(a,b,c,d){if(d.O){var e=Ne(a,d.O),g=e.je;if(g){var h=f(c),k=f(e.targetConfig[d.O]),l=
f(e.containerConfig),m=f(a.Td),n=new Ge(h,k,l,m);try{g(b,d.Vg,n)}catch(q){}}}};Ie.prototype.register=function(a,b){3!==Ne(this,a).status&&(Ne(this,a).je=b,Ne(this,a).status=3,this.flush())};
Ie.prototype.push=function(a,b,c,d){var e=Math.floor(ya()/1E3);if(c){var g=kc(c);if(g&&1===Ne(this,c).status&&(Ne(this,c).status=2,this.push("require",[],g.containerId),!kd())){var h=encodeURIComponent(g.containerId);Lb(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+h+"&l=dataLayer&cx=c"))}}this.Xa.push(new Me(a,e,c,b,d));d||this.flush()};
Ie.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Ne(this,c.O).status&&!a)return;break;case "set":ta(c.Eb[0],function(l,m){b.Td[l]=m});break;case "config":var d=c.Eb[0],e=!!d[H.vb];delete d[H.vb];var g=Ne(this,c.O),h=kc(c.O),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.O]={});g.Yd&&e||Oe(this,H.W,d,c);g.Yd=!0;k?f(d,g.containerConfig):f(d,g.targetConfig[c.O]);break;case "event":Oe(this,
c.Eb[1],c.Eb[0],c)}this.Xa.shift()}};var Pe=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Se=function(a,b,c,d){var e=Qe(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Re(e,function(g){return g.Jb},b);if(1===e.length)return e[0].id;e=Re(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function Te(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Pe(b,e).indexOf(c)}
var Xe=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,t=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(t=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=Ue(),w=0;w<v.length;++w){var x="none"!=v[w]?v[w]:void 0;if(!We(x,t)&&Te(m+(x?"; domain="+x:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!We(q,t)&&Te(m,a,l)}return k};function Re(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Qe(a,b){for(var c=[],d=Pe(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Jb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var Ye=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ze=/(^|\.)doubleclick\.net$/i,We=function(a,b){return Ze.test(document.location.hostname)||"/"===b&&Ye.test(a)},Ue=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ze.test(e)||Ye.test(e)||a.push("none");return a};var $e=new function(){this.Nc={}};var af=null,bf={},cf={},df,ef=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.$b]&&(c.eventCallback=b[H.$b]),b[H.Na]&&(c.eventTimeout=b[H.Na]));return c};
var lf={config:function(a){},event:function(a){var b=a[1];if(ka(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ja(a[2]))return;c=a[2]}var d=ef(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];$e.Nc[b]?$e.Nc[b].push(c):$e.Nc[b]=[c]}},set:function(a){var b;2==a.length&&Ja(a[1])?b=f(a[1]):3==a.length&&ka(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},mf={policy:!0};var of=function(a){return nf?C.querySelectorAll(a):null},pf=function(a,b){if(!nf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qf=!1;if(C.querySelectorAll)try{var rf=C.querySelectorAll(":root");rf&&1==rf.length&&rf[0]==C.documentElement&&(qf=!0)}catch(a){}var nf=qf;var yf=function(a){if(xf(a))return a;this.Yg=a};yf.prototype.Xf=function(){return this.Yg};var xf=function(a){return!a||"object"!==Ha(a)||Ja(a)?!1:"getUntrustedUpdateValue"in a};yf.prototype.getUntrustedUpdateValue=yf.prototype.Xf;var zf=!1,Af=[];function Bf(){if(!zf){zf=!0;for(var a=0;a<Af.length;a++)G(Af[a])}}var Cf=function(a){zf?G(a):Af.push(a)};var Df=[],Ef=!1,Ff=function(a){return u["dataLayer"].push(a)},Gf=function(a){var b=oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},If=function(a){var b=a._clear;ta(a,function(g,h){"_clear"!==g&&(b&&hd(g,void 0),hd(g,h))});tc||(tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,hd("gtm.uniqueEventId",d));vc=c;var e=Hf(a);
vc=null;switch(c){case "gtm.init":Cc("GTM",19),e&&Cc("GTM",20)}return e};function Hf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=oc.zones;d=e?e.checkState(nc.i,c):Gd;return d.active?Ee(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Jf=function(){for(var a=!1;!Ef&&0<Df.length;){Ef=!0;delete Xc.eventModel;$c();var b=Df.shift();if(null!=b){var c=xf(b);if(c){var d=b;b=xf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ad(h,1);if(ma(k)||Ja(k))k=f(k);Yc[h]=k}}try{if(ja(b))try{b.call(bd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=ad(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&ka(b[0])){var r=lf[b[0]];if(r&&(!c||!mf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ef=!1;continue}}a=If(b)||a}}finally{c&&$c(!0)}}Ef=!1}
return!a},Kf=function(){var a=Jf();try{var b=nc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Lf=function(){var a=Jb("dataLayer",[]),b=Jb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Nd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Cf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new yf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Df.push.apply(Df,d);if(300<this.length)for(Cc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Jf()&&h};Df.push.apply(Df,a.slice(0));G(Kf)};var Mf;var hg={};hg.xb=new String("undefined");
var ig=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===hg.xb?b:a[d]);return c.join("")}};ig.prototype.toString=function(){return this.resolve("undefined")};ig.prototype.valueOf=ig.prototype.toString;hg.Ze=ig;hg.kc={};hg.If=function(a){return new ig(a)};var jg={};hg.Hg=function(a,b){var c=Ac();jg[c]=[a,b];return c};hg.Ld=function(a){var b=a?0:1;return function(c){var d=jg[c];if(d&&"function"===typeof d[b])d[b]();jg[c]=void 0}};hg.jg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};hg.vg=function(a){if(a===hg.xb)return a;var b=Ac();hg.kc[b]=a;return'google_tag_manager["'+nc.i+'"].macro('+b+")"};hg.ng=function(a,b,c){a instanceof hg.Ze&&(a=a.resolve(hg.Hg(b,c)),b=ia);return{zc:a,J:b}};var kg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Qb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},lg=function(a){oc.hasOwnProperty("autoEventsSettings")||(oc.autoEventsSettings={});var b=oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mg=function(a,b,c){lg(a)[b]=c},ng=function(a,b,c,d){var e=lg(a),g=za(e,b,d);e[b]=c(g)},og=function(a,b,c){var d=lg(a);return za(d,b,c)};var pg=function(){for(var a=Hb.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},sg=function(a,b,c,d){var e=qg(b);return Se(a,e,rg(c),d)},tg=function(a,b,c,d){var e=""+qg(c),g=rg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},qg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},rg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ug=["1"],vg={},zg=function(a,b,c,d){var e=wg(a);vg[e]||xg(e,b,c)||(yg(e,pg(),b,c,d),xg(e,b,c))};function yg(a,b,c,d,e){var g=tg(b,"1",d,c);Xe(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function xg(a,b,c){var d=sg(a,b,c,ug);d&&(vg[a]=d);return d}function wg(a){return(a||"_gcl")+"_au"};var Ag=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Yc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Yc]||(g[a[h].Yc]=[]),g[a[h].Yc].push({timestamp:k[1],Uf:k[2]}))}return g};function Bg(){for(var a=Cg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Dg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Cg,Eg,Fg=function(a){Cg=Cg||Dg();Eg=Eg||Bg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Cg[l],Cg[m],Cg[n],Cg[q])}return b.join("")},Gg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Eg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Cg=Cg||Dg();Eg=Eg||
Bg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Hg;function Ig(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Mg=function(){var a=Jg,b=Kg,c=Lg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){D(C,"mousedown",d);D(C,"keyup",d);D(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Lg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ng=/(.*?)\*(.*?)\*(.*)/,Og=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Pg=/^(?:www\.|m\.|amp\.)+/,Qg=/([^?#]+)(\?[^#]*)?(#.*)?/,Rg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Tg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Fg(String(d))))}var e=b.join("*");return["1",Sg(e),e].join("*")},Sg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Hg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Hg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Hg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Vg=function(){return function(a){var b=ne(u.location.href),c=b.search.replace("?",""),d=je(c,"_gl",!0)||"";a.query=Ug(d)||{};var e=me(b,"fragment").match(Rg);a.fragment=Ug(e&&e[3]||
"")||{}}},Wg=function(){var a=Vg(),b=Lg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Da(c,d.query),Da(c,d.fragment));return c},Ug=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Ng.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Sg(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=Gg(t[p+1]);return q}}}}catch(r){}};
function Xg(a,b,c){function d(m){var n=m,q=Rg.exec(n),t=n;if(q){var p=q[2],r=q[4];t=q[1];r&&(t=t+p+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Qg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Yg(a,b,c){for(var d={},e={},g=Lg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Ig(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Ea(d)){var l=Tg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,t=0;t<n.length;t++){var p=n[t];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Xg(l,a.action);he.test(v)&&(a.action=v)}}}else Zg(l,a,!1)}if(!c&&Ea(e)){var w=Tg(e);Zg(w,a,!0)}}function Zg(a,b,c){if(b.href){var d=Xg(a,b.href,void 0===c?!1:c);he.test(d)&&(b.href=d)}}
var Jg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Yg(e,e.hostname,!1)}}catch(h){}},Kg=function(a){try{if(a.action){var b=me(ne(a.action),"host");Yg(a,b,!0)}}catch(c){}},$g=function(a,b,c,d){Mg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Lg().decorators.push(e)},ah=function(){var a=C.location.hostname,b=Og.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Pg,""),l=e.replace(Pg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bh=function(a,b){return!1===a?!1:a||b||ah()};var ch={};var dh=/^\w+$/,eh=/^[\w-]+$/,fh=/^~?[\w-]+$/,gh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function hh(a){return a&&"string"==typeof a&&a.match(dh)?a:"_gcl"}var jh=function(){var a=ne(u.location.href),b=me(a,"query",!1,void 0,"gclid"),c=me(a,"query",!1,void 0,"gclsrc"),d=me(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||je(e,"gclid",void 0);c=c||je(e,"gclsrc",void 0)}return ih(b,c,d)};
function ih(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(eh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==ch.gtm_3pds?0:ch.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var lh=function(a){var b=jh();kh(b,a)};
function kh(a,b,c){function d(q,t){var p=mh(q,e);p&&Xe(p,t,h,g,l,!0)}b=b||{};var e=hh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ic?7776E3:b.Ic;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Ch?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var oh=function(a,b,c,d,e){for(var g=Wg(),h=hh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==gh[l]){var m=mh(l,h),n=g[m];if(n){var q=Math.min(nh(n),ya()),t;b:{for(var p=q,r=Pe(m,C.cookie),v=0;v<r.length;++v)if(nh(r[v])>p){t=!0;break b}t=!1}t||Xe(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};kh(ih(g.gclid,g.gclsrc),w)},mh=function(a,b){var c=gh[a];if(void 0!==c)return b+c},nh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ph(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var qh=function(a,b,c,d,e){if(ma(b)){var g=hh(e);$g(function(){for(var h={},k=0;k<a.length;++k){var l=mh(a[k],g);if(l){var m=Pe(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},rh=function(a){return a.filter(function(b){return fh.test(b)})},sh=function(a){for(var b=["aw","dc"],c=hh(a&&a.prefix),d={},e=0;e<b.length;e++)gh[b[e]]&&(d[b[e]]=gh[b[e]]);ta(d,function(g,h){var k=Pe(c+h,C.cookie);if(k.length){var l=k[0],m=nh(l),n={};n[g]=[ph(l)];kh(n,a,m)}})};var th=/^\d+\.fls\.doubleclick\.net$/;function uh(a){var b=ne(u.location.href),c=me(b,"host",!1);if(c&&c.match(th)){var d=me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function vh(a,b){if("aw"==a||"dc"==a){var c=uh("gcl"+a);if(c)return c.split(".")}var d=hh(b);if("_gcl"==d){var e;e=jh()[a]||[];if(0<e.length)return e}var g=mh(a,d),h;if(g){var k=[];if(C.cookie){var l=Pe(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=ph(l[m]);n&&-1===oa(k,n)&&k.push(n)}h=rh(k)}else h=k}else h=k}else h=[];return h}
var wh=function(){var a=uh("gac");if(a)return decodeURIComponent(a);var b=Ag(),c=[];ta(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Uf);g=rh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},xh=function(a,b,c,d,e){zg(b,c,d,e);var g=vg[wg(b)],h=jh().dc||[],k=!1;if(g&&0<h.length){var l=oc.joined_au=oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",t=q=q+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(t)||Ob(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=wg(b),r=vg[p];r&&yg(p,r,c,d,e)}};var yh;if(3===nc.Bb.length)yh="g";else{var zh="G";yh=zh}
var Ah={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:yh,OPT:"o"},Bh=function(a){var b=nc.i.split("-"),c=b[0].toUpperCase(),d=Ah[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===nc.Bb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+nc.Bb+e};var Hh=["input","select","textarea"],Ih=["button","hidden","image","reset","submit"],Jh=function(a){var b=a.tagName.toLowerCase();return!pa(Hh,function(c){return c===b})||"input"===b&&pa(Ih,function(c){return c===a.type.toLowerCase()})?!1:!0},Kh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Tb(a,["form"],100)},Lh=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Jh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Oh=!!u.MutationObserver,Ph=void 0,Qh=function(a){if(!Ph){var b=function(){var c=C.body;if(c)if(Oh)(new MutationObserver(function(){for(var e=0;e<Ph.length;e++)G(Ph[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;D(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Ph.length;e++)G(Ph[e])}))})}};Ph=[];C.body?b():G(b)}Ph.push(a)};var ri=u.clearTimeout,si=u.setTimeout,K=function(a,b,c){if(kd()){b&&G(b)}else return Lb(a,b,c)},ti=function(){return u.location.href},ui=function(a){return me(ne(a),"fragment")},vi=function(a){return le(ne(a))},wi=null;
var xi=function(a,b){return ad(a,b||2)},yi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ff(a)},zi=function(a,b){u[a]=b},W=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},Ai=function(a,b,c){return Pe(a,b,void 0===c?!0:!!c)},Bi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Ic:d};lh(e);sh(e)},Ci=function(a,b,c,d,e){oh(a,b,c,d,e);},Di=function(a,b,c,d,e){
qh(a,b,c,d,e);},Ei=function(a,b){if(kd()){b&&G(b)}else Nb(a,b)},Fi=function(a){return!!og(a,"init",!1)},Gi=function(a){mg(a,"init",!0)},Hi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":sc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Ii=function(a,b){var c=a[b];
return c};
var Ki=hg.ng;var Li=new ra,Mi=function(a,b){function c(h){var k=ne(h),l=me(k,"protocol"),m=me(k,"host",!0),n=me(k,"port"),q=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Ni=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Ni({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=oa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,r=Li.get(p);r||(r=new RegExp(c,t),Li.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Mi(b,c)}return!1};var Pi={},Qi=function(){if(u._gtmexpgrp&&u._gtmexpgrp.hasOwnProperty(1))return u._gtmexpgrp[1];void 0===Pi[1]&&(Pi[1]=Math.floor(2*Math.random()));return Pi[1]};var Ri=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Si={},Ti=encodeURI,Y=encodeURIComponent,Ui=Ob;var Vi=function(a,b){if(!a)return!1;var c=me(ne(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Wi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Si.kg=function(){var a=!1;return a};var vj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||qa();return a.hid};var ek=window,fk=document,gk=function(a){var b=ek._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ek["ga-disable-"+a])return!0;try{var c=ek.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Pe("AMP_TOKEN",fk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return fk.getElementById("__gaOptOutExtension")?!0:!1};var lk=function(a,b,c){Ke(b,c,a)},mk=function(a,b,c){Ke(b,c,a,!0)},ok=function(a,b){},nk=function(a,b){},
pk=function(a){return"_"===a.charAt(0)},qk=function(a){ta(a,function(c){pk(c)&&delete a[c]});var b=a[H.wb]||{};ta(b,function(c){pk(c)&&delete b[c]})};var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(jd(a.vtp_gtmEventId,"event"))})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ai(a.vtp_name,xi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return qa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:xi("gtm.url",1))||ti();var d=b[a("vtp_component")];if(!d||"URL"==d)return vi(String(c));var e=ne(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=me(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=xi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(Wi(n.vtp_fieldsToSet,"fieldName","value"),g);f(Wi(n.vtp_contentGroup,"index","group"),h);f(Wi(n.vtp_dimension,"index","dimension"),k);f(Wi(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=f(n);d=f(d,q)}f(Wi(d.vtp_fieldsToSet,"fieldName","value"),g);f(Wi(d.vtp_contentGroup,
"index","group"),h);f(Wi(d.vtp_dimension,"index","dimension"),k);f(Wi(d.vtp_metric,"index","metric"),l);var t=ce(d.vtp_functionName);if(ja(t)){var p="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,p=r+"."):(r="gtm"+Ac(),p=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},x=function(T){var O=[].slice.call(arguments,0);O[0]=p+O[0];t.apply(window,O)},y=function(T,O){return void 0===O?O:T(O)},A=function(T,O){if(O)for(var na in O)O.hasOwnProperty(na)&&x("set",T+na,O[na])},z=function(){
var T=function(Ak,Ch,Bk){if(!Ja(Ch))return!1;for(var yc=za(Object(Ch),Bk,[]),Ve=0;yc&&Ve<yc.length;Ve++)x(Ak,yc[Ve]);return!!yc&&0<yc.length},O;if(d.vtp_useEcommerceDataLayer){var na=!1;na||(O=xi("ecommerce",1))}else d.vtp_ecommerceMacroData&&(O=d.vtp_ecommerceMacroData.ecommerce);if(!Ja(O))return;O=Object(O);var Ra=za(g,"currencyCode",O.currencyCode);
void 0!==Ra&&x("set","&cu",Ra);T("ec:addImpression",O,"impressions");if(T("ec:addPromo",O[O.promoClick?"promoClick":"promoView"],"promotions")&&O.promoClick){x("ec:setAction","promo_click",O.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Sa="refund purchase remove checkout checkout_option add click detail".split(" "),Ta=0;Ta<Ba.length;Ta++){var gb=O[Ba[Ta]];if(gb){T("ec:addProduct",gb,"products");x("ec:setAction",Ba[Ta],gb.actionField);
if(Rc)for(var nb=0;nb<Sa.length;nb++){var Wb=O[Sa[nb]];if(Wb){Wb!==gb&&Cc("GTM",13);break}}break}}},B=function(T,O,na){var Ra=0;if(T)for(var Ba in T)if(T.hasOwnProperty(Ba)&&(na&&v[Ba]||!na&&void 0===v[Ba])){var Sa=w[Ba]?va(T[Ba]):T[Ba];"anonymizeIp"!=Ba||Sa||(Sa=void 0);O[Ba]=Sa;Ra++}return Ra},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",Bh(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(T,O){void 0!==d[O]&&x("set",T,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&x("set",F);var M;
d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var T=g&&g.hitCallback;ja(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(ua,d.vtp_eventValue||
e.value)};B(M,Q,!1);x("send",Q);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){
x("require","ecommerce","//www.google-analytics.com/plugins/ua/ecommerce.js");var U=function(T){return xi("transaction"+T,1)},P=U("Id");x("ecommerce:addTransaction",{id:P,affiliation:U("Affiliation"),revenue:U("Total"),shipping:U("Shipping"),tax:U("Tax")});for(var N=U("Products")||[],L=0;L<N.length;L++){var I=N[L];x("ecommerce:addItem",{id:P,sku:I.sku,name:I.name,category:I.category,price:I.price,quantity:I.quantity})}x("ecommerce:send");}else if("TRACK_TIMING"==
d.vtp_trackType){var R={hitType:"timing",timingCategory:String(d.vtp_timingCategory||e.category),timingVar:String(d.vtp_timingVar||e.name),timingValue:ua(d.vtp_timingValue||e.value),timingLabel:y(String,d.vtp_timingLabel||e.label)};B(M,R,!1);x("send",R);}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var X=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ba="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:ba})}M?x("send","pageview",M):x("send","pageview");}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ca=J("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);K(Ca,function(){var T=ae();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return nc.i})}();

Z.a.aev=["google"],function(){function a(p,r){var v=jd(p,"gtm");if(v)return v[r]}function b(p,r,v,w){w||(w="element");var x=p+"."+r,y;if(n.hasOwnProperty(x))y=n[x];else{var A=a(p,w);if(A&&(y=v(A),n[x]=y,q.push(x),35<q.length)){var z=q.shift();delete n[z]}}return y}function c(p,r,v){var w=a(p,t[r]);return void 0!==w?w:v}function d(p,r){if(!p)return!1;var v=e(ti());ma(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<r.length;x++)if(r[x]instanceof RegExp){if(r[x].test(p))return!1}else{var y=
r[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!Vi(p,w)}function e(p){m.test(p)||(p="http://"+p);return me(ne(p),"HOST",!0)}function g(p,r,v){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(r,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(r,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return Qb(p,"value");case "button":return Rb(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,v=0;v<p.elements.length;v++)Jh(p.elements[v])&&r++;return r}}function l(p,r,v){var w=a(p,"interactedFormField");return w&&Qb(w,r)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var r=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(r,"element");return x&&x.tagName||
v;case "TEXT":return b(r,w,Rb)||v;case "URL":var y;a:{var A=String(a(r,"elementUrl")||v||""),z=ne(A),B=String(p.vtp_component||"URL");switch(B){case "URL":y=A;break a;case "IS_OUTBOUND":y=d(A,p.vtp_affiliatedDomains);break a;default:y=me(z,B,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,v);else{var F=p.vtp_attribute,M=a(r,"element");E=M&&Qb(M,F)||v||""}return E;case "MD":var Q=p.vtp_mdValue,S=b(r,"MD",di);return Q&&S?gi(S,Q)||
v:S||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=f(a),c=b;c[yb.la]=null;c[yb.Te]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Wi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Ki(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.zc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Sb(h),k,e)()}else si(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Tb(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=og("lcl",k?"nv.mwt":"mwt",0),m;m=k?og("lcl","nv.ids",[]):og("lcl","ids",[]);if(m.length){var n=kg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var q=W((Ii(h,"target")||"_self").substring(1)),t=!0;if(yi(n,Gf(function(){t&&q&&(q.location.href=Ii(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else yi(n,function(){},l||2E3);return!0}}};D(c,"click",e,!1);D(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Ii(d,"href"),h=g.indexOf("#"),k=Ii(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=vi(g),m=vi(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};ng("lcl","mwt",k,0);e||ng("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};ng("lcl","ids",l,[]);e||ng("lcl","nv.ids",l,[]);Fi("lcl")||(a(),Gi("lcl"));G(c.vtp_gtmOnSuccess)})}();

var zk={};zk.macro=function(a){if(hg.kc.hasOwnProperty(a))return hg.kc[a]},zk.onHtmlSuccess=hg.Ld(!0),zk.onHtmlFailure=hg.Ld(!1);zk.dataLayer=bd;zk.callback=function(a){xc.hasOwnProperty(a)&&ja(xc[a])&&xc[a]();delete xc[a]};zk.uf=function(){oc[nc.i]=zk;Da(zc,Z.a);qb=qb||hg;rb=Fd};
zk.fg=function(){ch.gtm_3pds=!0;oc=u.google_tag_manager=u.google_tag_manager||{};if(oc[nc.i]){var a=oc.zones;a&&a.unregisterChild(nc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)lb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)kb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);jb.push(q)}ob=Z;pb=Ni;zk.uf();Lf();Id=!1;Jd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Ld();else{D(C,"DOMContentLoaded",Ld);D(C,"readystatechange",Ld);if(C.createEventObject&&C.documentElement.doScroll){var p=!0;try{p=!u.frameElement}catch(x){}p&&Md()}D(u,"load",Ld)}zf=!1;"complete"===C.readyState?Bf():
D(u,"load",Bf);a:{if(!Rc)break a;u.setInterval(Sc,864E5);}
uc=(new Date).getTime();}};(0,zk.fg)();

})()
