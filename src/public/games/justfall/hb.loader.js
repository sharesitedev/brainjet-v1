/* {"build":"3559","commit":"2d577ec549c52248d526999a362f36d0fc0c01f4","date":"2022-07-03T15:41:14Z"} */ ! function() {
    var e = {
            84452: function(e, t, n) {
                var r, o;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WRAPPER_MRKT_SUB_ID = t.SUB_ID_SETTING_FILTERS = t.FAILED_AD_SOURCE_REPEATS = t.DEFAULT_CACHE_TIMEOUT_SEC = t.PRIORITIZED_VIDEO_TYPES = t.RATE_LIMITER_DOMAIN = t.INTERLEAVED_CONFIG_TO_DELETE = t.CAN_PLAY_TYPE_SCORES = t.INTERLEAVED_QUERY_PARAMS_TO_DELETE = t.WITHOUT_CREDENTIALS_LIST = t.WITH_CREDENTIALS_LIST = t.OMIT_DOMAIN_ENVS = t.SETTINGS_TYPES = t.ENV_TYPES = t.AD_SOURCE_TYPES = t.AD_TYPES = t.BREAKPOINTS = t.PLAYER_DIMENSIONS_TYPE = t.WITHOUT_CREDENTIALS_DEFAULT = t.WITH_CREDENTIALS_MOBILE_APP = t.WITH_CREDENTIALS_DEFAULT = t.BL_SCORE_EVENTS = t.IMA_SETTINGS_LOAD_VIDEO_TIMEOUT = t.IMA_SETTINGS_VAST_LOAD_TIMEOUT = t.IMA_SETTINGS_NUM_REDIRECTS = t.EXCLUDED_TRACKING_ACTIONS = t.DISABLE_FLASH_KEY_NAME = t.DYNAMIC_VALUES = t.APS = t.DEFAULT_BILLED_EVENT = t.BITWISE_REPORT_TYPES = t.JS_THIRD_PARTY_PIXEL = t.IFRAME_THIRD_PARTY_PIXEL = t.IMAGE_THIRD_PARTY_PIXEL = t.END_CARD_DEFAULT_TIME = t.END_CARD_EVENTS = t.IMA_FLASH_LOADER_URL = t.IMA_SDK_LOADER_URL = t.MEDIA_FILES = t.WATERFALL_REQUEST_METHOD = t.WATERFALL_OBJECT = t.THIRD_PARTY_TRACKING = t.AD_SOURCE_STATUS = t.SAM_CONFIG = t.VPAID_PROPERTIES = t.VPAID_METHODS = t.EVENTS_BLACKLIST = t.EVENTS_SHORT_VERSION = t.VPAID_TO_VAST_EVENTS = t.ERROR_CATEGORY_RATE_LIMITER = t.ERROR_CATEGORY_VPAID = t.ERROR_CATEGORY_PREBID = t.ERROR_CODES_CATEGORIES = t.ERROR_CODES = t.ERRORS = t.AD_SERVER_REPORTS = t.REPORT_TYPE = t.REPORT_CATEGORIES = t.VIEW_MODE = t.DEFAULT_CHANNEL_TIMEOUT = t.DISABLE_BUFFERING_VAST_CLICK = t.VPAID_AD_IMPRESSION_TIMEOUT = t.VPAID_AD_STARTED_TIMEOUT = t.CUSTOM_SELLER_AD_STARTED_TIMEOUT = t.VPAID_AD_LOADED_TIMEOUT = t.VPAID_RESPONSE_TIMEOUT = t.TRACK_EVENT_CAP = t.WAIT_FOR_DOWNLOADS = t.AD_SOURCE_REQUEST_TO = t.QUERY_PARAMS_SHORT = t.QUERY_PARAMS = t.EVENT_DELAY_BEFORE_DONE = t.VERSION = t.ADS_LOGGER_THRESHOLD = t.LOGZIO_API_TOKEN = t.ADS_LOGGER_TOKEN = t.AUCTION_ENDPOINT = t.ADS_LOGGER_ENDPOINT = t.FLASH_PLAYER_ENDPOINT = t.VPAID_FLASH_ENDPOINT = void 0;
                var i = u(n(23626)),
                    a = u(n(19982));

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function c(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                t.VPAID_FLASH_ENDPOINT = "https://" + a.default.sdk() + "/swf/v1.9/VPAIDFlash.swf", t.FLASH_PLAYER_ENDPOINT = "https://" + a.default.sdk() + "/swf/v1.9/sr.ads.swf", t.ADS_LOGGER_ENDPOINT = "https://vast-logger.streamrail.net/?pt=ads_manager_logs", t.AUCTION_ENDPOINT = "https://api.vidiom.net/fd", t.ADS_LOGGER_TOKEN = "0UV6rcxyirOhAE", t.LOGZIO_API_TOKEN = "NoaDlaiRMdpRnCDtyTklOuHsSKJxByJU", t.ADS_LOGGER_THRESHOLD = 5, t.VERSION = "3559", t.EVENT_DELAY_BEFORE_DONE = 200;
                var l = t.QUERY_PARAMS = {
                        ORGANIZATION: "org",
                        TRAFFIC_CHANNEL: "tc",
                        TRAFFIC_CHANNEL_NAME: "tc_name",
                        COST: "cost",
                        DOMAIN: "domain",
                        AD_POSITION: "pos",
                        PAGE_URL: "page_url",
                        WIDTH: "width",
                        HEIGHT: "height",
                        AUTOPLAY: "autoplay",
                        MUTE: "mute",
                        CONTENT_DURATION: "video_duration",
                        CONTENT_DESCRIPTION: "video_description",
                        CONTENT_URL: "video_url",
                        CONTENT_ID: "video_id",
                        CONTENT_TITLE: "video_title",
                        USER_LATITUDE: "user_lat",
                        USER_LONGITUDE: "user_lon",
                        USER_IP: "ip",
                        USER_AGENT: "ua",
                        PLAYER_ID: "playerid",
                        PLAYER_NAME: "playername",
                        SUB_ID: "sub_id",
                        LOOP: "loop",
                        SAM_JS_VERSION: "sam_js_ver",
                        APP_NAME: "appname",
                        IFA: "ifa",
                        BUNDLE_ID: "bundleid",
                        ENV: "env",
                        DENV: "denv",
                        SID: "sid",
                        TRAFFIC_CHANNEL_DATA: "tc_data",
                        APP_STORE_URL: "app_store_url",
                        APP_CATEGORY: "app_category",
                        COUNTRY_CODE: "cc",
                        STATE: "sta",
                        PLAYER_VERSION: "pv",
                        NEST_LEVEL: "ns",
                        DO_NOT_TRACK: "dnt",
                        USER_CONSENT: "gdpr_consent",
                        GDPR: "gdpr",
                        DEVICE_TYPE: "dt",
                        SUBDIRECTORY: "sd",
                        US_PRIVACY: "us_privacy",
                        DEVICE_USER_ID: "device_user_id",
                        WRAPPER_ID: "wrapperid",
                        WRAPPER_VERSION: "wrapperversion"
                    },
                    s = (t.QUERY_PARAMS_SHORT = {
                        ORGANIZATION: "org",
                        TRAFFIC_CHANNEL: "tc",
                        TRAFFIC_CHANNEL_NAME: "tcn",
                        COST: "tcc",
                        DOMAIN: "domain",
                        AD_POSITION: "pos",
                        PAGE_URL: "u",
                        WIDTH: "w",
                        HEIGHT: "h",
                        AUTOPLAY: "ap",
                        MUTE: "m",
                        CONTENT_DURATION: "vdur",
                        CONTENT_DESCRIPTION: "vdesc",
                        CONTENT_URL: "vurl",
                        CONTENT_ID: "vid",
                        CONTENT_TITLE: "vtitle",
                        USER_LATITUDE: "lat",
                        USER_LONGITUDE: "lon",
                        USER_IP: "ip",
                        USER_AGENT: "ua",
                        PLAYER_ID: "pid",
                        PLAYER_NAME: "pn",
                        SUB_ID: "subid",
                        SAM_JS_VERSION: "sjs",
                        APP_NAME: "app_name",
                        IFA: "ifa",
                        BUNDLE_ID: "bundle_id",
                        ENV: "env",
                        DENV: "denv",
                        SID: "sid",
                        TRAFFIC_CHANNEL_DATA: "tc_data",
                        APP_STORE_URL: "app_store_url",
                        APP_CATEGORY: "app_category",
                        COUNTRY_CODE: "cc",
                        STATE: "sta",
                        PLAYER_VERSION: "pv",
                        NEST_LEVEL: "ns",
                        DO_NOT_TRACK: "dnt",
                        OS: "os",
                        OS_VERSION: "osv",
                        BROWSER: "br",
                        BROWSER_VERSION: "brv",
                        IS_UID: "isu",
                        DEVICE_USER_ID: "dui",
                        WRAPPER_ID: "wri",
                        WRAPPER_VERSION: "wv"
                    }, t.AD_SOURCE_REQUEST_TO = 15e3, t.WAIT_FOR_DOWNLOADS = 2e3, t.TRACK_EVENT_CAP = 100, t.VPAID_RESPONSE_TIMEOUT = 15e3, t.VPAID_AD_LOADED_TIMEOUT = 3e4, t.CUSTOM_SELLER_AD_STARTED_TIMEOUT = 15e3, t.VPAID_AD_STARTED_TIMEOUT = 3e4, t.VPAID_AD_IMPRESSION_TIMEOUT = 1e4, t.DISABLE_BUFFERING_VAST_CLICK = !1, t.DEFAULT_CHANNEL_TIMEOUT = 12e4, t.VIEW_MODE = {
                        NORMAL: "normal",
                        FULLSCREEN: "fullscreen",
                        THUMBNAIL: "thumbnail"
                    }, t.REPORT_CATEGORIES = {
                        AD_SERVER: "adserver",
                        AD_UNIT: "adunit"
                    }, t.REPORT_TYPE = {
                        VPAID_JS: "vpaid-js"
                    }, t.AD_SERVER_REPORTS = {
                        REQUEST: "req",
                        BID: "bid",
                        LOSE: "lose",
                        ERROR: "err",
                        WIN: "win",
                        RELOAD: "rld",
                        SCRIPT_INIT: "am",
                        INIT_ERROR: "no-ad-params"
                    }),
                    d = (t.ERRORS = {
                        INVALID_DOM_CONTAINER_EL: "invalid container HtmlElement",
                        INVALID_DOM_VIDEO_EL: "invalid HTMLVideoElement",
                        MISSING_CALLBACK: "missing valid callback",
                        INVALID_MEDIA_FILE: "invalid MediaFile",
                        NO_ADS: "no ads"
                    }, t.ERROR_CODES = {
                        DEFAULT: 901,
                        UNKNOWN: 999,
                        FLASH_MEDIA_FILE_NOT_FOUND: 100,
                        HANDSHAKE_VERSION_MISMATCH: 101,
                        LOAD_AD_TO: 102,
                        START_AD_TO: 103,
                        VPAID_ERROR: 104,
                        SUPPORTED_MEDIA_FILE_NOT_FOUND: 105,
                        CANNOT_START_FLASH_PLAYER: 106,
                        MISSING_SLOT_OR_VIDEO_SLOT: 107,
                        AD_IMPRESSION_TO: 108,
                        MEDIA_ERROR: 109,
                        EXCEPTION: 110,
                        CHANNEL_TIMEOUT: 111,
                        FLASH_MARKED_AS_DISABLED: 112,
                        LOAD_AD_UNIT_FAILED: 113,
                        LOAD_AD_UNIT_NO_GET_VPAID: 114,
                        LOAD_AD_UNIT_NOT_COMPLAINT: 115,
                        LOAD_AD_UNIT_NO_IFRAME: 116,
                        LOAD_AD_UNIT_TIMEOUT: 117,
                        LOAD_AD_UNIT_JS_ERROR: 118,
                        VPAID_STOPPED_WITHOUT_IMPRESSION: 119,
                        VPAID_EXCEPTION: 120,
                        PLAY_PROMISE_EXCEPTION: 121,
                        ERROR_PARSING_XML: 200,
                        NO_AD_IN_VAST_TREE: 201,
                        VAST_VERSION_NOT_SUPPORTED: 202,
                        INLINE_AND_WRAPPER_IN_RESPONSE: 203,
                        INLINE_AND_WRAPPER_NOT_IN_RESPONSE: 204,
                        MISSING_CREATIVE_AND_VIDEO_IN_INLINE: 205,
                        MISSING_CREATIVE_IN_INLINE: 206,
                        MISSING_VASTADTAGURI_IN_WRAPPER: 207,
                        AD_TYPE_NOT_SUPPORTED: 208,
                        OFFSET_ATTRIBUTE_ERROR: 209,
                        AD_SOURCE_REQUEST_TO: 210,
                        SPOTX_DIRECT_SDK_INTERNAL_ERROR: 211,
                        IMA_ADS_LOAD_ERROR_HANDLER: 300,
                        HTTP_ERROR: 404,
                        NO_ADS: 500,
                        AD_SOURCE_RATE_LIMITED: 678,
                        AD_SOURCE_REPLACED_BY_VAST: 700,
                        AD_SOURCE_NO_FILL_REQUEST_CAP: 802,
                        AD_SOURCE_DETECTED_SIZE_MISS_MATCH: 803,
                        AD_SOURCE_DETECTED_DIMENSIONS_MISS_MATCH: 804
                    }, t.ERROR_CODES_CATEGORIES = {
                        "prebid-error": [200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 404, 999],
                        "targeting-error": [802, 803, 804],
                        "tech-error": [100, 101, 105, 106, 107, 109, 110, 112, 113, 114, 115, 116, 117, 118, 121, 901],
                        "vpaid-error": [104, 119, 120, 300],
                        "timeout-error": [102, 103, 108, 111, 700],
                        "no-ads": [500],
                        "rl-error": [678]
                    }, t.ERROR_CATEGORY_PREBID = "prebid-error", t.ERROR_CATEGORY_VPAID = "vpaid-error", t.ERROR_CATEGORY_RATE_LIMITER = "rl-error", t.VPAID_TO_VAST_EVENTS = {
                        AdStarted: "creativeView",
                        AdSkipped: "skip",
                        AdUnMute: "unmute",
                        AdMute: "mute",
                        AdVideoStart: "start",
                        AdVideoFirstQuartile: "firstQuartile",
                        AdVideoMidpoint: "midpoint",
                        AdVideoThirdQuartile: "thirdQuartile",
                        AdVideoComplete: "complete",
                        AdUserAcceptInvitation: "acceptInvitation",
                        AdUserMinimize: "collapse",
                        AdUserClose: "close",
                        AdPaused: "pause",
                        AdPlaying: "resume",
                        AdError: "error"
                    }, t.EVENTS_SHORT_VERSION = {
                        AdStarted: "as",
                        AdLoaded: "al",
                        AdImpression: "ai",
                        AdClickThru: "ct",
                        AdVideoComplete: "avc",
                        AdVideoStart: "avs",
                        am: "am",
                        win: "win",
                        END_CARD_VIEW: "ecv",
                        END_CARD_CLICK: "ecc",
                        COOKIE_SYNC: "cs"
                    }),
                    f = (t.EVENTS_BLACKLIST = ["req", i.default.AdStopped, i.default.AdPaused, i.default.AdSkipped, i.default.AdSizeChange, i.default.AdLog, i.default.AdLinearChange, i.default.AdUserClose, i.default.AdPlaying, i.default.AdExpandedChange, i.default.AdSkippableStateChange, i.default.AdRemainingTimeChange, i.default.AdVolumeChange, i.default.AdDurationChange, i.default.AdUserAcceptInvitation, i.default.AdInteraction], t.VPAID_METHODS = ["resizeAd", "pauseAd", "resumeAd", "expandAd", "collapseAd", "skipAd"], t.VPAID_PROPERTIES = ["adLinear", "adWidth", "adHeight", "adExpanded", "adSkippableState", "adRemainingTime", "adDuration", "adVolume", "adCompanions", "adIcons"], t.SAM_CONFIG = {
                        QUERY_PARAMS: "qs",
                        CHANNEL_TIMEOUT: "timeout",
                        WATERFALL: "waterfall",
                        CONFIG: "config",
                        HALFPIPE_HOSTNAME: "halfpipe_hostname",
                        MODULE_VERSION: "module_version",
                        DYNAMIC_VALUES: "dynamicValues"
                    }, t.AD_SOURCE_STATUS = {
                        LOADING: "loading",
                        ERROR: "error",
                        SUCCESS: "success"
                    }, t.THIRD_PARTY_TRACKING = {
                        AD_SOURCE_NAME: "[SR_AD_SOURCE_NAME]",
                        AD_SOURCE_ID: "[SR_AD_SOURCE_ID]",
                        AD_SOURCE_RATE: "[SR_AD_SOURCE_RATE]",
                        TRAFFIC_CHANNEL_NAME: "[SR_TRAFFIC_CHANNEL_NAME]",
                        TRAFFIC_CHANNEL_ID: "[SR_TRAFFIC_CHANNEL_ID]",
                        PAGE_URL: "[PAGE_URL]",
                        DOMAIN: "[DOMAIN]",
                        CUSTOM_PARAM: "[SR_CUSTOM_PARAM_IDX]",
                        PLAYER_VERSION: "[PLAYER_VERSION]",
                        SAM_VERSION: "[SAM_VERSION]"
                    }, t.WATERFALL_OBJECT = {
                        TIERS: "tiers",
                        WATERFALL_ID: "waterfallId",
                        WATERFALL_NAME: "waterfallName",
                        REQUEST_METHOD: "requestMethod",
                        WATERFALL_DATA: "waterfall_data"
                    }, t.WATERFALL_REQUEST_METHOD = {
                        SERIAL: "serial",
                        PARALLEL: "parallel"
                    }, t.MEDIA_FILES = {
                        X_FLV: "video/x-flv",
                        FLV: "video/flv",
                        MP4: "video/mp4",
                        X_MP4: "video/x-mp4"
                    }, t.IMA_SDK_LOADER_URL = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", t.IMA_FLASH_LOADER_URL = "https://" + a.default.sdk() + "/swf/v1.9/IMALoader.swf", t.END_CARD_EVENTS = {
                        EndCardView: "EndCardView",
                        EndCardClick: "EndCardClick"
                    }, t.END_CARD_DEFAULT_TIME = 5e3, t.IMAGE_THIRD_PARTY_PIXEL = "img", t.IFRAME_THIRD_PARTY_PIXEL = "iframe", t.JS_THIRD_PARTY_PIXEL = "js", t.BITWISE_REPORT_TYPES = {
                        REQUEST: 1,
                        IMPRESSION: 2,
                        USER_COMPLETE_CAP: 4,
                        USER_IMPRESSION_CAP: 8,
                        IMPRESSION_BETWEEN_FT: 16,
                        COMPLETION: 128,
                        COMPLETION_BETWEEN_FT: 256
                    }, t.DEFAULT_BILLED_EVENT = d[i.default.AdImpression], t.APS = {
                        ANALYTICS: ["an", "analytics"],
                        MODULE_VERSION: ["m", "module_version"],
                        HALFPIPE_HOSTNAME: ["h", "halfpipe_hostname"],
                        WATERFALL: ["w", "waterfall"],
                        WATERFALL_NAME: ["n", "waterfallName"],
                        WATERFALL_ID: ["i", "waterfallId"],
                        TIERS: ["t", "tiers"],
                        TIER: ["t", "tier"],
                        AD_SOURCES: ["a", "adSources"],
                        ID: ["i", "id"],
                        URL: ["u", "url"],
                        BLID: ["bl", "BLId"],
                        REQUEST_METHOD: ["r", "requestMethod"],
                        SIZE: ["s", "size"],
                        CONFIG: ["c", "config"],
                        QUERY_PARAMS: ["qs", "qs"],
                        TIMEOUT: ["t", "timeout"],
                        SERIAL: ["s", "serial"],
                        PARALLEL: ["p", "parallel"],
                        EM_REPORT_TYPE: ["e", "emReportType"],
                        DISPLAY_END_CARD: ["d", "displayEndCard"],
                        MOAT_DATA: ["mt", "moatData"],
                        OMID_DATA: ["omid", "omidData"],
                        END_CARD_TIME: ["et", "endCardTime"],
                        THIRD_PARTY_PIXELS: ["t", "thirdPartyPixels"],
                        DOMAINS: ["do", "domains"],
                        EVENT: ["e", "event"],
                        TYPE: ["t", "type"],
                        CONTENT_TYPE: ["ct", "contentType"],
                        SAMPLE: ["s", "sample"],
                        RATE: ["r", "rate"],
                        COST: ["c", "cost"],
                        FROM_BL: ["f", "fromBL"],
                        NO_FILL_REQUEST_CAP: ["n", "noFillRequestCap"],
                        BILLED_EVENT: ["b", "billedEvent"],
                        DISABLE_BUFFERING_VAST_CLICK: ["dbvc", "disableBufferingVastClick"],
                        BREAKPOINT: ["brp", "breakpoint"],
                        BREAKPOINT_FOR: ["brpf", "breakpointFor"],
                        AD_LOADED_EVENT: ["ale", "adLoadedEvent"],
                        CLICK_THRU_TEXT: ["ctt", "clickThruText"],
                        BL: ["b", "bl"],
                        SID: ["s", "sid"],
                        NESTED: ["ns", "nested"],
                        BUNDLE_ID: ["b", "bundleId"],
                        SER: ["q", "ser"],
                        BL_SCORE: ["bs", "blScore"],
                        BL_FLOW: ["blf", "blFlow"],
                        NESTED_MEDIA_FILE: ["mf", "mediaFiles"],
                        NESTED_AD_PARAMETERS: ["ap", "adParameters"],
                        DYNAMIC_VALUES: ["z", "dynamicValues"],
                        AD_SOURCE_LOGGING: ["l", "adsLogger"],
                        PLAYER_DIMENSIONS: ["pd", "playerDimensions"],
                        PLAYER_DIMENSIONS_REL: ["r", "rel"],
                        PLAYER_DIMENSIONS_VALUES: ["v", "values"],
                        INTERLEAVED_AD_SOURCE_TC_OBJECT: ["of", "of"],
                        PARENT_AD_SOURCE: ["p", "parentAdSource"],
                        END_CARD_CONFIG: "endcard",
                        BUSINESS_MODEL: ["bm", "businessModel"],
                        DETECTED_RATE: ["dr", "detectedRate"],
                        SUB_ID: ["si", "subid"],
                        BAS: ["bas", "bas"],
                        INJECTED_AD_SOURCE: ["iads", "injectedAdSource"],
                        AMAZON_AD_SOURCES: ["aiads", "amazonAdSources"],
                        AD_SOURCE_TTL: ["ttl", "expirationTime"],
                        AD_SOURCE_TYPE: ["ast", "adSourceType"],
                        SAAS_REV_SHARE: ["srs", "saasRevShare"],
                        WRAPPER_VERSION: ["wv", "wrapperVersion"],
                        BAI: ["bai", "bai"],
                        BID_ID: ["bi", "bidId"],
                        EXTERNAL_LOOP: ["el", "externalLoop"],
                        TECH_FEE: ["tf", "techFee"],
                        AUCTION_TYPE: ["aut", "auctionType"]
                    }, t.DYNAMIC_VALUES = {
                        SELLER_TRAFFIC_CHANNEL: "stc"
                    }, t.DISABLE_FLASH_KEY_NAME = "disableFlash", t.EXCLUDED_TRACKING_ACTIONS = {
                        adunit: [i.default.AdRemainingTimeChange, i.default.AdVolumeChange, i.default.AdDurationChange],
                        adserver: []
                    }, t.IMA_SETTINGS_NUM_REDIRECTS = 6, t.IMA_SETTINGS_VAST_LOAD_TIMEOUT = 11e3, t.IMA_SETTINGS_LOAD_VIDEO_TIMEOUT = 12e3, t.BL_SCORE_EVENTS = [s.ERROR, s.BID, s.WIN, s.LOSE, i.default.AdImpression], t.WITH_CREDENTIALS_DEFAULT = "WyJhZC4zNjB5aWVsZC5jb20iLCJhZC5kb3VibGVjbGljay5uZXQiLCJhZC5zeHAuc21hcnRjbGlwLm5ldCIsImFkcy5hZGFwdHYuYWR2ZXJ0aXNpbmcuY29tIiwiYWRzLmNvbnRleHR3ZWIuY29tIiwiYWRzLm5leGFnZS5jb20iLCJhZHMuc3RpY2t5YWRzdHYuY29tIiwiYWRzLnRyZW1vcmh1Yi5jb20iLCJhZHguYWRmb3JtLm5ldCIsImFsdGl0dWRlLWFyZW5hLmNvbSIsImFwLmxpaml0LmNvbSIsImFwaS52aXJhbGl6ZS50diIsImFyZW5hLmFsdGl0dWRlcGxhdGZvcm0uY29tIiwiYXMuZXUuYW5nc3J2ci5jb20iLCJhc2YtdG0uZXZlcmVzdHRlY2gubmV0IiwiYmlkLmcuZG91YmxlY2xpY2submV0IiwiYnMuc2VydmluZy1zeXMuY29tIiwiYnRybGwuY29tIiwiYy5hZGZvcmdlaW5jLmNvbSIsImNhc2FsZW1lZGlhLmNvbSIsImRhbmliZXJpYWFnLnNvbHV0aW9uLndlYm9yYW1hLmZyIiwiZGFzaGJpZGEuY29tIiwiZGVzLnNtYXJ0Y2xpcC5uZXQiLCJmdy5hZHNhZmVwcm90ZWN0ZWQuY29tIiwiaWFkLXVzYWRtbS5kb3RvbWkuY29tIiwiaWIuYWRueHMuY29tIiwiaW1hM3ZwYWlkLmFwcHNwb3QuY29tIiwiaW5zaWdodC5hZHNydnIub3JnIiwiaW9tcy5iZm1pby5jb20iLCJsa3FkLm5ldCIsImxvb3BtZS5tZSIsIm1lZ2EudmFzdC5tZWdhLXRhZ3MuY29tIiwibm9kZS1wMmUtYmM0M2VyLnNpdGVzY291dC5jb20iLCJvcGVueC5uZXQiLCJvcHRpbWF0aWMuY29tIiwib3B0aW1pemVkLWJ5LnJ1Ymljb25wcm9qZWN0LmNvbSIsInAuYWxnb3ZpZC5jb20iLCJwaXhlbC5hZHNhZmVwcm90ZWN0ZWQuY29tIiwicHIueWJwLnlhaG9vLmNvbSIsInByb2QtZS5zcHJ0YWQuY29tIiwicHViYWRzLmcuZG91YmxlY2xpY2submV0IiwicHVibWF0aWMuY29tIiwicXVhc2FyLmNvdWxsLmNvbSIsInJlcS50aWRhbHR2LmNvbSIsInJ0Yi1zZWxsZXIuY29tIiwiY3MucnRiLXNlbGxlci5jb20iLCJ5ZWxsb3dibHVlLmlvIiwiY3MueWVsbG93Ymx1ZS5pbyIsInJ0Yi14di5vcGVueC5uZXQiLCJydGIudHViZW1vZ3VsLmNvbSIsInJ0ci5pbm5vdmlkLmNvbSIsInNlYXJjaC5zcG90eGNoYW5nZS5jb20iLCJzZXJ2ZWRieS5mbGFzaHRhbGtpbmcuY29tIiwic21hcnRhZHNlcnZlci5jb20iLCJzc3AuYW55Y2xpcC1tZWRpYS5jb20iLCJzdC52aWRlb2phbS50diIsInN0cmVhbXJhaWwubmV0Iiwic3VyZi5yb2xsbW9iLmNvbSIsInN2YXN0eC5tb2F0YWRzLmNvbSIsInQuYWR4LmlvIiwidGFncy5ybGxjbGwuY29tIiwidmFzdC5hZHNhZmVwcm90ZWN0ZWQuY29tIiwidmFzdC5kZWxpYWRzLmNvbSIsInZhc3QuZG91YmxldmVyaWZ5LmNvbSIsInZhc3QuZXh0cmVtZXJlYWNoLmlvIiwidmFzdC5tYW5nb21lZGlhYWRzLmNvbSIsInZhc3QubWF0aHRhZy5jb20iLCJ2YXN0LnNwb3RpbS5tYXJrZXQiLCJ2YXN0LnZlcnRhbWVkaWEuY29tIiwidmFzdC52aWRlZS50diIsInZhc3Qudm1zLmNpZ25hbGlvLmNvbSIsInZhc3QueWFzaGkuY29tIiwidmlkLnNwcmluZ3NlcnZlLmNvbSIsInZpZGVvLmJubWxhLmNvbSIsInZva2VuLmV5ZXJldHVybi5jb20iLCJ3bC5xMW1lZGlhLmNvbSIsImEudHJpYmFsZnVzaW9uLmNvbSJd"),
                    _ = t.WITH_CREDENTIALS_MOBILE_APP = "WyJhZC4zNjB5aWVsZC5jb20iLCJhZC5kb3VibGVjbGljay5uZXQiLCJhZC5zeHAuc21hcnRjbGlwLm5ldCIsImFkcy5hZGFwdHYuYWR2ZXJ0aXNpbmcuY29tIiwiYWRzLmNvbnRleHR3ZWIuY29tIiwiYWRzLm5leGFnZS5jb20iLCJhZHMuc3RpY2t5YWRzdHYuY29tIiwiYWR4LmFkZm9ybS5uZXQiLCJhbHRpdHVkZS1hcmVuYS5jb20iLCJhcC5saWppdC5jb20iLCJhcGkudmlyYWxpemUudHYiLCJhcmVuYS5hbHRpdHVkZXBsYXRmb3JtLmNvbSIsImFzLmV1LmFuZ3NydnIuY29tIiwiYXNmLXRtLmV2ZXJlc3R0ZWNoLm5ldCIsImJpZC5nLmRvdWJsZWNsaWNrLm5ldCIsImJzLnNlcnZpbmctc3lzLmNvbSIsImJ0cmxsLmNvbSIsImMuYWRmb3JnZWluYy5jb20iLCJjYXNhbGVtZWRpYS5jb20iLCJkYW5pYmVyaWFhZy5zb2x1dGlvbi53ZWJvcmFtYS5mciIsImRhc2hiaWRhLmNvbSIsImRlcy5zbWFydGNsaXAubmV0IiwiZncuYWRzYWZlcHJvdGVjdGVkLmNvbSIsImlhZC11c2FkbW0uZG90b21pLmNvbSIsImliLmFkbnhzLmNvbSIsImltYTN2cGFpZC5hcHBzcG90LmNvbSIsImluc2lnaHQuYWRzcnZyLm9yZyIsImlvbXMuYmZtaW8uY29tIiwibGtxZC5uZXQiLCJsb29wbWUubWUiLCJtZWdhLnZhc3QubWVnYS10YWdzLmNvbSIsIm5vZGUtcDJlLWJjNDNlci5zaXRlc2NvdXQuY29tIiwib3BlbngubmV0Iiwib3B0aW1hdGljLmNvbSIsIm9wdGltaXplZC1ieS5ydWJpY29ucHJvamVjdC5jb20iLCJwLmFsZ292aWQuY29tIiwicGl4ZWwuYWRzYWZlcHJvdGVjdGVkLmNvbSIsInByLnlicC55YWhvby5jb20iLCJwcm9kLWUuc3BydGFkLmNvbSIsInB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldCIsInB1Ym1hdGljLmNvbSIsInF1YXNhci5jb3VsbC5jb20iLCJyZXEudGlkYWx0di5jb20iLCJydGItc2VsbGVyLmNvbSIsImNzLnJ0Yi1zZWxsZXIuY29tIiwieWVsbG93Ymx1ZS5pbyIsImNzLnllbGxvd2JsdWUuaW8iLCJydGIteHYub3BlbngubmV0IiwicnRiLnR1YmVtb2d1bC5jb20iLCJydHIuaW5ub3ZpZC5jb20iLCJzZWFyY2guc3BvdHhjaGFuZ2UuY29tIiwic2VydmVkYnkuZmxhc2h0YWxraW5nLmNvbSIsInNtYXJ0YWRzZXJ2ZXIuY29tIiwic3NwLmFueWNsaXAtbWVkaWEuY29tIiwic3QudmlkZW9qYW0udHYiLCJzdHJlYW1yYWlsLm5ldCIsInN1cmYucm9sbG1vYi5jb20iLCJzdmFzdHgubW9hdGFkcy5jb20iLCJ0LmFkeC5pbyIsInRhZ3MucmxsY2xsLmNvbSIsInZhc3QuYWRzYWZlcHJvdGVjdGVkLmNvbSIsInZhc3QuZGVsaWFkcy5jb20iLCJ2YXN0LmRvdWJsZXZlcmlmeS5jb20iLCJ2YXN0LmV4dHJlbWVyZWFjaC5pbyIsInZhc3QubWFuZ29tZWRpYWFkcy5jb20iLCJ2YXN0Lm1hdGh0YWcuY29tIiwidmFzdC5zcG90aW0ubWFya2V0IiwidmFzdC52ZXJ0YW1lZGlhLmNvbSIsInZhc3QudmlkZWUudHYiLCJ2YXN0LnZtcy5jaWduYWxpby5jb20iLCJ2YXN0Lnlhc2hpLmNvbSIsInZpZC5zcHJpbmdzZXJ2ZS5jb20iLCJ2aWRlby5ibm1sYS5jb20iLCJ2b2tlbi5leWVyZXR1cm4uY29tIiwid2wucTFtZWRpYS5jb20iLCJhLnRyaWJhbGZ1c2lvbi5jb20iXQ==",
                    p = t.WITHOUT_CREDENTIALS_DEFAULT = "WyJybC5zdHJlYW1yYWlsLm5ldCJd",
                    E = (t.PLAYER_DIMENSIONS_TYPE = {
                        RANGE: "r",
                        EQUAL: "eq",
                        NOT_EQUAL: "neq"
                    }, t.BREAKPOINTS = {
                        MAX: "max",
                        START_AD: "startAd"
                    }, t.AD_TYPES = {
                        IMA: "ima",
                        VPAID: "vpaid",
                        VAST: "vast"
                    }, t.AD_SOURCE_TYPES = {
                        MARKETPLACE: "rise marketplace",
                        TAG: "tag"
                    }, t.ENV_TYPES = {
                        DESKTOP: ["d", "desktop"],
                        MOBILE_WEB: ["mw", "mobile_web"],
                        MOBILE_APP: ["ma", "mobile_app"],
                        CTV: ["c", "ctv"],
                        ALL: "all"
                    });
                t.SETTINGS_TYPES = {
                    MRSS: "mrss"
                }, t.OMIT_DOMAIN_ENVS = E.MOBILE_APP.concat(E.CTV), t.WITH_CREDENTIALS_LIST = (c(r = {}, E.DESKTOP[0], f), c(r, E.MOBILE_WEB[0], f), c(r, E.MOBILE_APP[0], _), c(r, E.CTV[0], _), r), t.WITHOUT_CREDENTIALS_LIST = (c(o = {}, E.DESKTOP[0], p), c(o, E.MOBILE_WEB[0], p), c(o, E.MOBILE_APP[0], p), c(o, E.CTV[0], p), o), t.INTERLEAVED_QUERY_PARAMS_TO_DELETE = [l.ORGANIZATION, l.TRAFFIC_CHANNEL, l.TRAFFIC_CHANNEL_NAME, l.COST, l.PLAYER_ID, l.PLAYER_NAME, l.TRAFFIC_CHANNEL_DATA, l.PLAYER_VERSION, l.NEST_LEVEL], t.CAN_PLAY_TYPE_SCORES = {
                    "": 0,
                    maybe: 1,
                    probably: 2
                }, t.INTERLEAVED_CONFIG_TO_DELETE = [], t.RATE_LIMITER_DOMAIN = "rl.streamrail.net", t.PRIORITIZED_VIDEO_TYPES = ["video/mp4", "video/webm"], t.DEFAULT_CACHE_TIMEOUT_SEC = 600, t.FAILED_AD_SOURCE_REPEATS = 1, t.SUB_ID_SETTING_FILTERS = {
                    wr: ["blf", "bs"]
                }, t.WRAPPER_MRKT_SUB_ID = "wr-mrkt-rtb"
            },
            23626: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = {
                    AdLoaded: "AdLoaded",
                    AdStarted: "AdStarted",
                    AdStopped: "AdStopped",
                    AdSkipped: "AdSkipped",
                    AdLinearChange: "AdLinearChange",
                    AdSizeChange: "AdSizeChange",
                    AdExpandedChange: "AdExpandedChange",
                    AdSkippableStateChange: "AdSkippableStateChange",
                    AdRemainingTimeChange: "AdRemainingTimeChange",
                    AdDurationChange: "AdDurationChange",
                    AdVolumeChange: "AdVolumeChange",
                    AdImpression: "AdImpression",
                    AdVideoStart: "AdVideoStart",
                    AdVideoFirstQuartile: "AdVideoFirstQuartile",
                    AdVideoMidpoint: "AdVideoMidpoint",
                    AdVideoThirdQuartile: "AdVideoThirdQuartile",
                    AdVideoComplete: "AdVideoComplete",
                    AdClickThru: "AdClickThru",
                    AdInteraction: "AdInteraction",
                    AdUserAcceptInvitation: "AdUserAcceptInvitation",
                    AdUserMinimize: "AdUserMinimize",
                    AdUserClose: "AdUserClose",
                    AdPaused: "AdPaused",
                    AdPlaying: "AdPlaying",
                    AdLog: "AdLog",
                    AdError: "AdError",
                    AdUnMute: "AdUnMute",
                    AdMute: "AdMute",
                    AdBufferingClickThru: "AdBufferingClickThru",
                    AdBreakpoint: "AdBreakpoint",
                    AdExpired: "AdExpired",
                    creativeView: "creativeView"
                };
                t.QUARTILE_EVENTS = ["AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete"]
            },
            38186: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e ? a.assetsHost.replace("http:", "").replace("https:", "") : a.assetsHost
                };
                var r = i(n(13663)),
                    o = i(n(19982));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = (0, r.default)(),
                    u = o.default.sdk();
                a.assetsHost = a.assetsHost || u, e.exports = t.default
            },
            38420: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    return new i.default((function(e) {
                        var t = function() {
                                var e = window,
                                    t = void 0,
                                    n = void 0;
                                for (; !t;) {
                                    try {
                                        if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                                            "function" == typeof e.__tcfapi ? (c = 2, n = e.__tcfapi) : (c = 1, n = e.__cmp), t = e;
                                            break
                                        }
                                        if (e.frames.__tcfapiLocator) {
                                            c = 2, t = e;
                                            break
                                        }
                                        if (e.frames.__cmpLocator) {
                                            c = 1, t = e;
                                            break
                                        }
                                    } catch (e) {}
                                    if (e === window.top) break;
                                    e = e.parent
                                }
                                return {
                                    cmpFrame: t,
                                    cmpFunction: n
                                }
                            }(),
                            n = t.cmpFrame,
                            r = t.cmpFunction;

                        function o(t) {
                            var n = {};
                            t && (n.consentString = t.getConsentData ? t.getConsentData.consentData : t.consentData, n.gdprApplies = t.getConsentData ? t.getConsentData.gdprApplies : t.gdprApplies), e(n)
                        }

                        function i(t, n) {
                            var r = {};
                            !n || !1 !== t.gdprApplies && "tcloaded" !== t.eventStatus && "useractioncomplete" !== t.eventStatus || (r.consentString = t.tcString, r.gdprApplies = t.gdprApplies), e(r)
                        }
                        n || e(), "function" == typeof r ? 1 === c ? r("getConsentData", null, o) : 2 === c && r("addEventListener", c, i) : 1 === c ? s("getConsentData", n, o) : 2 === c && s("addEventListener", n, i)
                    }))
                };
                var r, o = n(39057),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };

                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var u = void 0,
                    c = 0,
                    l = {};

                function s(e, t, n) {
                    u = 2 === c ? "__tcfapi" : "__cmp";
                    var r = Math.random() + "",
                        o = u + "Call";
                    2 === c ? (window[u] = function(e, n, i, u) {
                        var c = a({}, o, {
                            callId: r,
                            command: e,
                            parameter: u,
                            version: n
                        });
                        l[r] = i, t.postMessage(c, "*")
                    }, window.addEventListener("message", d, !1), window[u](e, c, n)) : (window[u] = function(e, n, i) {
                        var u = a({}, o, {
                            callId: r,
                            command: e,
                            parameter: n
                        });
                        l[r] = i, t.postMessage(u, "*")
                    }, window.addEventListener("message", d, !1), window[u](e, void 0, n))
                }

                function d(e) {
                    var t = u + "Return",
                        n = "string" == typeof e.data && -1 !== e.data.indexOf(t) ? JSON.parse(e.data) : e.data;
                    if (n[t] && n[t].callId) {
                        var r = n[t];
                        void 0 !== l[r.callId] && l[r.callId](r.returnValue, r.success)
                    }
                    window.removeEventListener("message", d, !1)
                }
                e.exports = t.default
            },
            89852: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    return new i.default((function(e) {
                        var t = function() {
                                var e = window,
                                    t = void 0,
                                    n = void 0;
                                for (; !t;) {
                                    try {
                                        if (e && "function" == typeof e.__uspapi) {
                                            n = e.__uspapi, t = e;
                                            break
                                        }
                                        if (e && e.frames.__uspapiLocator) {
                                            t = e;
                                            break
                                        }
                                    } catch (e) {}
                                    if (e === window.top) break;
                                    e = e.parent
                                }
                                return {
                                    usPrivacyFrame: t,
                                    usPrivacyFunction: n
                                }
                            }(),
                            n = t.usPrivacyFrame,
                            r = t.usPrivacyFunction;

                        function o(t, n) {
                            n && t.uspString && e(t.uspString), e()
                        }
                        n ? "function" == typeof r ? r("getUSPData", 1, o) : function(e, t, n) {
                            function r(e) {
                                var t = e && e.data && e.data.__uspapiReturn;
                                t && t.callId && void 0 !== a[t.callId] && (a[t.callId](t.returnValue, t.success), delete a[t.callId])
                            }
                            window.__uspapi = function(e, n, r) {
                                var o = Math.random() + "",
                                    i = {
                                        __uspapiCall: {
                                            command: e,
                                            version: n,
                                            callId: o
                                        }
                                    };
                                a[o] = r, t.postMessage(i, "*")
                            }, window.addEventListener("message", r, !1), window.__uspapi(e, 1, n)
                        }("getUSPData", n, o) : e()
                    }))
                };
                var r, o = n(39057),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                var a = {};
                e.exports = t.default
            },
            54017: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t) {
                    e && (e.classList ? e.classList.add(t) : e.className += " " + t)
                }, e.exports = t.default
            },
            67968: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return t(document.head) || t(document.body) || t(document);

                    function t(t) {
                        var n = "";
                        return Array.prototype.forEach.call(t.querySelectorAll("script"), (function(t) {
                            t.src && t.src.indexOf(e) > -1 && (n = t.src)
                        })), n
                    }
                }, e.exports = t.default
            },
            97822: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(39057)),
                    o = i(n(63168));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = "data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
                    u = "https://sdk.streamrail.com/test/media/sample.mp3";
                t.default = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.document || window.document,
                        n = function(e) {
                            return navigator.userAgent.match(/(iPhone|iPod)/g) && "playsInline" in e.createElement("video")
                        };
                    return new r.default((function(r) {
                        var i = !1,
                            c = void 0,
                            l = void 0,
                            s = void 0,
                            d = function(e) {
                                i || (i = !0, c && (c.ontimeupdate = c.onerror = null, c = null), s = null, clearTimeout(l), r(e))
                            };
                        s = function(e, n) {
                            var r = !1;
                            (c = t.createElement("video")).ontimeupdate = function() {
                                0 !== c.currentTime && d(!0)
                            }, c.onerror = function() {
                                r ? d(!1) : (r = !0, c.src = n, c.load(), c.play())
                            }, c.muted = !0, c.setAttribute("webkit-playsinline", "webkit-playsinline"), c.setAttribute("playsinline", "playsinline"), c.src = e, c.load(), c.play()
                        }, (0, o.default)() ? n(t) ? d(!0) : (s(a, u), l = setTimeout((function() {
                            d(!1)
                        }), e.timeout || 400)) : d(!0)
                    }))
                }, e.exports = t.default
            },
            88686: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n, r) {
                    var o = document.createElement("iframe");
                    return o.src = r || "about:blank", o.width = isNaN(t) ? "100%" : t + "px", o.height = isNaN(n) ? "100%" : n + "px", o.style.border = "none", e && o.setAttribute("id", e), o.setAttribute("SCROLLING", "NO"), o.setAttribute("allow", "autoplay"), o
                }, e.exports = t.default
            },
            29019: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    var e = window;
                    try {
                        for (;
                            (0, r.default)(e) && (0, o.default)(e);) e = e.parent
                    } catch (t) {
                        return e
                    }
                    return e
                };
                var r = i(n(34771)),
                    o = i(n(6891));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            34771: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    e = e || window;
                    try {
                        return e.self !== e.parent
                    } catch (e) {
                        return !0
                    }
                }, e.exports = t.default
            },
            6891: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    e = e || window;
                    try {
                        return e.parent.document.getElementById("x"), !0
                    } catch (e) {
                        return !1
                    }
                }, e.exports = t.default
            },
            37279: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t) {
                    var n = e.contentDocument;
                    return !!n && (n.open(), n.write(t), n.close(), !0)
                }, e.exports = t.default
            },
            59805: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                t.default = function(e, t) {
                    return Object.keys(t).forEach((function(r) {
                        var o = "object" === (void 0 === o ? "undefined" : n(o)) ? JSON.stringify(t[r]) : t[r];
                        e = e.replace(new RegExp("{{" + r + "}}", "g"), o)
                    })), e
                }, e.exports = t.default
            },
            39057: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.reject = t.resolve = t.race = t.all = t.Promise = void 0;
                var r = n(43765),
                    o = {},
                    i = n(12950);
                o.Promise = i, o.all = i.all.bind(i), o.race = i.race.bind(i), o.resolve = i.resolve.bind(i), o.reject = i.reject.bind(i);
                var a = {
                    Promise: void 0,
                    all: void 0,
                    race: void 0,
                    resolve: void 0,
                    reject: void 0
                };
                "function" == typeof r.Promise ? (a.Promise = r.Promise, a.all = r.all.bind(r.Promise), a.race = r.race.bind(r.Promise), a.resolve = r.resolve.bind(r.Promise), a.reject = r.reject.bind(r.Promise)) : (a.Promise = o.Promise, a.all = o.all, a.race = o.race, a.resolve = o.resolve, a.reject = o.reject);
                var u = t.Promise = a.Promise;
                t.all = a.all, t.race = a.race, t.resolve = a.resolve, t.reject = a.reject;
                t.default = u
            },
            43765: function(e, t, n) {
                var r = n(59560);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = {
                    Promise: void 0,
                    all: void 0,
                    race: void 0,
                    resolve: void 0,
                    reject: void 0
                };
                if ("true" === r.env.PREFER_NATIVE_PROMISE && "function" == typeof window.Promise) {
                    var i = window.Promise;
                    void 0 === i.prototype.timeout && (i.prototype.timeout = function(e, t) {
                        var n = this;
                        return new i((function(r, o) {
                            var i = setTimeout((function() {
                                t && "string" != typeof t || ((t = new Error(t || "Timed out after " + e + " ms")).code = "ETIMEDOUT"), o(t)
                            }), e);
                            n.then((function(e) {
                                clearTimeout(i), r(e)
                            }), (function(e) {
                                clearTimeout(i), o(e)
                            }))
                        }))
                    }, i.prototype.finally = function(e) {
                        return this.then((function(t) {
                            return i.resolve(e()).then((function() {
                                return t
                            }))
                        }), (function(t) {
                            return i.resolve(e()).then((function() {
                                throw t
                            }))
                        }))
                    }), o.Promise = i, o.all = i.all.bind(i), o.race = i.race.bind(i), o.resolve = i.resolve.bind(i), o.reject = i.reject.bind(i)
                }
                var a = t.Promise = o.Promise;
                t.all = o.all, t.race = o.race, t.resolve = o.resolve, t.reject = o.reject;
                t.default = a
            },
            12950: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(50556)),
                    o = i(n(42200));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function a(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function u(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function(e, t) {
                        for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                            var o = n[r],
                                i = Object.getOwnPropertyDescriptor(t, o);
                            i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i)
                        }
                    }(e, t))
                }
                var c = function() {},
                    l = function e(t) {
                        t && ("function" != typeof t._onFulfilled || t._onFulfilled._isFinally || (t._onFulfilled = c), "function" != typeof t._onRejected || t._onRejected._isFinally || (t._onRejected = c), e(t[0]))
                    },
                    s = function(e) {
                        function t(n) {
                            if (function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), "function" == typeof n && 3 === n.length) {
                                var r = void 0,
                                    o = void 0,
                                    i = function(e) {
                                        o = function() {
                                            e(), l(u), r(), r = o = null
                                        }
                                    };
                                (u = a(this, e.call(this, (function(e, t) {
                                    r = t, n(e, t, i)
                                }))))._onCancel = o
                            } else var u = a(this, e.call(this, n));
                            return a(u)
                        }
                        return u(t, e), t.prototype.cancel = function() {
                            "function" == typeof this._onCancel && this._onCancel()
                        }, t.prototype.timeout = function(e, t) {
                            var n = t;
                            return n && "string" != typeof n || ((n = new Error(n || "Timed out after " + e + " ms")).code = "ETIMEDOUT"), (0, o.default)(this, e, n)
                        }, t.prototype.finally = function(e) {
                            var t = function(t) {
                                    return r.default.resolve(e()).then((function() {
                                        return t
                                    }))
                                },
                                n = function(t) {
                                    return r.default.resolve(e()).then((function() {
                                        throw t
                                    }))
                                };
                            return t._isFinally = n._isFinally = !0, this.then(t, n)
                        }, t
                    }(r.default);
                t.default = s, e.exports = t.default
            },
            45502: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t) {
                    if (!e || !t) return null;
                    var n = e * t;
                    return n <= i.default.SMALL.SIZE ? i.default.SMALL.LABEL : n >= i.default.LARGE.SIZE ? i.default.LARGE.LABEL : i.default.MEDIUM.LABEL
                };
                var r, o = n(50638),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                e.exports = t.default
            },
            50638: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = PLAYER_SIZE = {
                    SMALL: {
                        LABEL: "small",
                        SIZE: 76800
                    },
                    MEDIUM: {
                        LABEL: "medium"
                    },
                    LARGE: {
                        LABEL: "large",
                        SIZE: 248832
                    }
                }, e.exports = t.default
            },
            93015: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "",
                    r = !1,
                    o = "general",
                    i = "#A0368E",
                    a = "#FFFFFF",
                    u = function() {
                        var e = !1;
                        try {
                            e = !!window.top.document
                        } catch (t) {
                            e = !1
                        }
                        return e
                    },
                    c = u(),
                    l = function() {
                        return c && u()
                    },
                    s = f();

                function d(e) {
                    var t = window[e];
                    return void 0 === t && l() && (t = window.top[e]), t
                }

                function f(e) {
                    var t = d("debugSrInternals");
                    return t || (t = window.location.search && (window.location.search.indexOf("forceConsole") > -1 || window.location.search.indexOf("debugSrInternals") > -1)), !t && l() && (t = window.top.location.search && (window.top.location.search.indexOf("forceConsole") > -1 || window.top.location.search.indexOf("debugSrInternals") > -1)), t && e && (d("debugSrInternalsTargetsWhiteList") && (t = -1 !== d("debugSrInternalsTargetsWhiteList").indexOf(e)), t && d("debugSrInternalsTargetsBlackList") && (t = -1 === d("debugSrInternalsTargetsBlackList").indexOf(e))), window.console && !!t
                }

                function _(e) {
                    var t = d("debugSrInternals");
                    return t && (d("debugSrInternalsRegExpWhiteList") && (t = d("debugSrInternalsRegExpWhiteList").some((function(t) {
                        return t.test(e)
                    }))), t && d("debugSrInternalsRegExpBlackList") && (t = d("debugSrInternalsRegExpBlackList").every((function(t) {
                        return !t.test(e)
                    })))), t
                }

                function p(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i,
                        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a;
                    s && f(t) && _(e) && window.console.log("%cSR::" + (n ? n + "::" : "") + t + ":: " + e, "color: " + r + "; background: " + u)
                }

                function E(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i,
                        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a;
                    s && f(t) && _(e) && window.console.debug("%cSR::" + (n ? n + "::" : "") + t + ":: " + e, "color: " + r + "; background: " + u)
                }

                function v(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i,
                        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a;
                    s && f(t) && _(e) && window.console.warn("%cSR::" + (n ? n + "::" : "") + t + ":: " + e, "color: " + r + "; background: " + u)
                }

                function b(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i,
                        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a;
                    s && f(t) && _(e) && window.console.error("%cSR::" + (n ? n + "::" : "") + t + ":: " + e, "color: " + r + "; background: " + u)
                }

                function m(e) {
                    e && !r && (n = e, r = !0)
                }
                t.log = p, t.debug = E, t.warn = v, t.error = b, t.setGlobalTarget = m;
                var A = function() {
                    function e(t) {
                        var n = t.target,
                            r = t.color,
                            o = t.bgColor,
                            i = t.globalTarget;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this._target = n, this._color = r, this._bgColor = o, m(i)
                    }
                    return e.prototype.debug = function(e) {
                        E(e, this._target, this._color, this._bgColor)
                    }, e.prototype.log = function(e) {
                        p(e, this._target, this._color, this._bgColor)
                    }, e.prototype.warn = function(e) {
                        v(e, this._target, this._color, this._bgColor)
                    }, e.prototype.error = function(e) {
                        b(e, this._target, this._color, this._bgColor)
                    }, e.setGlobalTarget = function(e) {
                        m(e)
                    }, e.isEnabled = function() {
                        return f()
                    }, e
                }();
                t.default = A
            },
            35136: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return (e || window.location.search).split(/&|\?/).filter((function(e) {
                        return !!e
                    })).reduce((function(e, t) {
                        var n = t.split("="),
                            r = void 0,
                            o = void 0;
                        return 1 === n.length ? (r = n[0], o = !0) : 2 === n.length && (r = n[0], o = n[1]), e[r] = o, e
                    }), {}) || {}
                }, e.exports = t.default
            },
            4196: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    streamlytics.info(e)
                };
                var r, o = n(60335),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                streamlytics = new i.default, e.exports = t.default
            },
            84255: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    var e = new i.default(window.navigator.userAgent).getResult();
                    return a[e.device.type] || a.desktop
                };
                var r, o = n(39434),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                var a = {
                    desktop: "d",
                    mobile: "mw",
                    tablet: "mw",
                    embedded: "mw",
                    console: "c",
                    wearable: "c",
                    smarttv: "c"
                };
                e.exports = t.default
            },
            63168: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    var e = new i.default(window.navigator.userAgent).getResult(),
                        t = e.device.type;
                    if (window.location.href.indexOf("nomobile=1") > -1) return !1;
                    if (window.location.href.indexOf("forcemobile=1") > -1) return !0;
                    if (t && "null" !== t) return !0;
                    var n = e.os ? e.os.name : "";
                    if (["android", "ios", "windows phone", "blackberry"].indexOf(n.toLowerCase()) > -1) return !0;
                    var r = !1;
                    return function(e) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (r = !0)
                    }(navigator.userAgent || navigator.vendor || window.opera), r
                };
                var r, o = n(39434),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                e.exports = t.default
            },
            65455: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    return "IE" === i.browser.name && i.browser.version < 10
                };
                var r, o = n(39434);
                var i = new((r = o) && r.__esModule ? r : {
                    default: r
                }).default(window.navigator.userAgent).getResult();
                e.exports = t.default
            },
            76424: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = (0, i.default)(e);
                    if (!t) return; - 1 === t.indexOf("://") && (t = "http://" + t);
                    var n = document.createElement("a");
                    return n.href = t, n.hostname
                };
                var r, o = n(21916),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                e.exports = t.default
            },
            21916: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    if (!e) return e;
                    var t = e;
                    try {
                        for (; t !== decodeURIComponent(t);) t = decodeURIComponent(t)
                    } catch (e) {}
                    return t
                }, e.exports = t.default
            },
            9597: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e && 0 === e.indexOf("www.") ? e.replace("www.", "") : e
                }, e.exports = t.default
            },
            86470: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    try {
                        return (0, i.default)() ? e.replace(/^(http|https):/, window.location.protocol) : "https:" === window.location.protocol && 0 === e.indexOf("http:") ? e.replace("http", "https") : e
                    } catch (t) {
                        return e
                    }
                };
                var r, o = n(65455),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                e.exports = t.default
            },
            93188: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    if (void 0 !== e.location.ancestorOrigins && e.location.ancestorOrigins.length > 0) {
                        var t = e.location.ancestorOrigins,
                            n = t[t.length - 1];
                        if (n && "string" == typeof n && (n = n.split("?")[0]) && "string" == typeof n && n.length > 0) return n
                    }
                    if ((e = (0, i.default)(e)) !== e.top && e.document.referrer) return e.document.referrer.split("?")[0];
                    return e.location.href.split("?")[0]
                };
                var r, o = n(29019),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                e.exports = t.default
            },
            9201: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.headers,
                        r = t.withCredentials;
                    n && Object.keys(n).forEach((function(t) {
                        void 0 !== n[t] && e.setRequestHeader(t, n[t])
                    }));
                    r && (e.withCredentials = !0)
                }, e.exports = t.default
            },
            92862: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.XMLHttpRequestConstructor = void 0, t.default = u;
                var r, o = n(65455),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                var a = [function() {
                    return new XMLHttpRequest
                }, function() {
                    return new window.ActiveXObject("Msxml2.XMLHTTP")
                }, function() {
                    return new window.ActiveXObject("Msxml3.XMLHTTP")
                }, function() {
                    return new window.ActiveXObject("Microsoft.XMLHTTP")
                }];

                function u() {
                    var e = function() {
                        for (var e = !1, t = 0; t < a.length; t++) {
                            try {
                                e = a[t]()
                            } catch (e) {
                                continue
                            }
                            break
                        }
                        return e
                    }();
                    if ((0, i.default)() || !e) {
                        if (!window.XDomainRequest) throw new Error("ERR_NO_XDOMAIN_REQUEST");
                        (e = new window.XDomainRequest).onprogress = function() {}
                    }
                    return e
                }
                t.XMLHttpRequestConstructor = u().constructor
            },
            35487: function(e, t) {
                function n(e, t) {
                    var n = "",
                        r = window && window.location && window.location.href;
                    e && e.statusText ? n = e.statusText : e && e.status && (n = e.status.toString()), this.message = "XHRError: " + (n ? n + ", " : "") + "req: " + t + ", current: " + r, this.xhr = e, e && e.status && (this.code = e.status, this.status = e.status)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), n.prototype = new Error, n.prototype.name = "XHRError", t.default = n, e.exports = t.default
            },
            27738: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n, a, u) {
                    return function() {
                        if ((0, i.default)() || e.readyState === (r.XMLHttpRequestConstructor.DONE || 4))
                            if ((0, i.default)() || e.status >= 200 && e.status < 400) {
                                var c = e.responseText;
                                if (u) c = e;
                                else try {
                                    c = JSON.parse(c)
                                } catch (t) {
                                    c = e.responseText
                                }
                                n(c)
                            } else a(new o.default(e, t))
                    }
                };
                var r = n(92862),
                    o = a(n(35487)),
                    i = a(n(65455));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            54926: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new i.default((function(n, i, s) {
                        var d = (0, l.default)(e),
                            f = (0, r.default)();
                        f.open("GET", d, !0), (0, a.default)(f, t), f[(0, u.default)() ? "onload" : "onreadystatechange"] = (0, o.default)(f, d, n, i, t.includeHeaders), f.onerror = function() {
                            i(new c.default(f, d))
                        }, f.url = d, f.send(), s((function() {
                            return f.abort()
                        }))
                    }))
                };
                var r = s(n(92862)),
                    o = s(n(27738)),
                    i = s(n(39057)),
                    a = s(n(9201)),
                    u = s(n(65455)),
                    c = s(n(35487)),
                    l = s(n(86470));

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            5260: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return (0, i.default)(e).then((function() {
                        return !1
                    })).catch((function(e) {
                        return 0 === e.xhr.status
                    }))
                };
                var r, o = n(54926),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                e.exports = t.default
            },
            13356: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return new i.default((function(i, l) {
                        var s = (0, r.default)();
                        s.open("POST", e, !0), (0, a.default)(s, n), s[(0, u.default)() ? "onload" : "onreadystatechange"] = (0, o.default)(s, e, i, l), s.onerror = function() {
                            l(new c.default(s, e))
                        }, s.url = e, s.send(JSON.stringify(t))
                    }))
                };
                var r = l(n(92862)),
                    o = l(n(27738)),
                    i = l(n(39057)),
                    a = l(n(9201)),
                    u = l(n(65455)),
                    c = l(n(35487));

                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            14153: function(e) {
                e.exports = {
                    sdk: "c2RrLnN0cmVhbXJhaWwuY29t",
                    collector: "ay5zdHJlYW1yYWlsLmNvbS94",
                    collectorBulk: "ay5zdHJlYW1yYWlsLmNvbS9t",
                    remoteConfig1: "cGxheWEuc3RyZWFtcmFpbC5jb20=",
                    remoteConfig2: "cmMuc3RyZWFtcmFpbC5uZXQ=",
                    ssp: "c3NwLnN0cmVhbXJhaWwubmV0",
                    ff: "ZmYuc3RyZWFtcmFpbC5uZXQ=",
                    ffcdn: "ZmZjZG4uc3RyZWFtcmFpbC5uZXQ=",
                    eventManager: "ZXZlbnRzLnN0cmVhbXJhaWwubmV0L3NycGxheWVy"
                }
            },
            19982: function(e, t, n) {
                var r = n(59560),
                    o = n(14153),
                    i = n(67577),
                    a = i.retrieveDomain,
                    u = i.init,
                    c = function(e) {
                        var t = a(e) || o[e];
                        return t && (t = atob(t)), 0 !== t.indexOf("https") && 0 === t.indexOf("http") ? t = t.replace("http", "https") : 0 !== t.indexOf("http") && (t = "https://" + t), t
                    },
                    l = c("collectorBulk"),
                    s = atob("YXBpLnZpZGlvbS5uZXQ="),
                    d = r.env.REMOTE_CONFIG1_DOMAIN || o.remoteConfig1,
                    f = r.env.SSP_DOMAIN || o.ssp;
                e.exports = {
                    sdk: function() {
                        return c("sdk")
                    },
                    collector: function() {
                        return c("collector")
                    },
                    collectorBulk: l,
                    remoteConfig1: d,
                    remoteConfig2: s,
                    ssp: f,
                    ff: function() {
                        return c("ff")
                    },
                    ffcdn: function() {
                        return c("ffcdn")
                    },
                    eventManager: function() {
                        return c("eventManager")
                    },
                    init: u
                }
            },
            67577: function(e, t, n) {
                var r = n(13663),
                    o = function(e) {
                        if (!e) return null;
                        var t = {};
                        return t.eventManager = e.e, t.collector = e.c, t.ff = e.f, t.ffcdn = e.fm, t.sdk = e.d, t
                    };
                e.exports = {
                    init: function(e) {
                        r(null, window, !0).domains = o(e)
                    },
                    retrieveDomain: function(e) {
                        var t = r(null, window, !0);
                        return t.domains && t.domains[e] ? btoa(t.domains[e]) : null
                    }
                }
            },
            60335: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(13663)),
                    o = i(n(22334));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = (0, r.default)();
                a && (a.Streamlytics = o.default), t.default = o.default, e.exports = t.default
            },
            22334: function(e, t, n) {
                "use strict";
                var r = n(59560);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    i = d(n(13663)),
                    a = d(n(13356)),
                    u = d(n(31031)),
                    c = d(n(93015)),
                    l = d(n(19982)),
                    s = d(n(40040));

                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function f(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var _ = (0, i.default)(),
                    p = r.env.STREAMLYTICS_EXCLUDED_ACTIONS || [],
                    E = r.env.STREAMLYTICS_EXCLUDED_KEYS_BY_ENV || {
                        all: ["dpageurl", "browserversionfull", "type", "position"],
                        mobile_app: ["domain", "ddomain"],
                        ctv: ["domain", "ddomain"],
                        ma: ["domain", "ddomain"],
                        c: ["domain", "ddomain"]
                    },
                    v = r.env.STREAMLYTICS_LOWERCASE_KEYS || ["action", "category", "domain", "browser", "browserversion", "os", "osversion", "pageurl", "bundleid", "ddomain", "appname"],
                    b = "maxBufferSize",
                    m = "maxBufferTime",
                    A = "noBufferEvents",
                    h = "endpoint",
                    T = {
                        adclickthru: "ct",
                        adstopped: "ast",
                        adpaused: "ap",
                        adskipped: "ask",
                        adloadtimeout: "to",
                        advideocomplete: "avc",
                        advideothirdquartile: "avt",
                        advideomidpoint: "avm",
                        advideofirstquartile: "avf",
                        advideostart: "avs",
                        aderror: "err",
                        adrequest: "req",
                        adresponse: "res",
                        adloaded: "al",
                        adimpression: "ai",
                        adstarted: "as",
                        adbreakpoint: "abp",
                        player: "p",
                        playerload: "pl",
                        multiplayer: "mp",
                        contentstart: "cs"
                    },
                    S = {
                        category: "ca",
                        action: "a",
                        cc: "cc",
                        sd: "sd",
                        ic: "ic",
                        stat: "sta",
                        component: "co",
                        tier: "t",
                        dwidth: "dw",
                        sid: "s",
                        osversion: "ov",
                        bl: "bl",
                        blscore: "bs",
                        blflow: "blf",
                        adsourceid: "ai",
                        halfpipe_hostname: "hh",
                        tc: "tc",
                        env: "en",
                        denv: "den",
                        rank: "r",
                        module_version: "mv",
                        adtype: "at",
                        org: "or",
                        os: "os",
                        loadtime: "lt",
                        tierlength: "tl",
                        waterfallname: "wn",
                        label1: "l1",
                        browserversion: "bv",
                        version: "v",
                        dheight: "dh",
                        pageurl: "pageurl",
                        browser: "b",
                        waterfallid: "wi",
                        dplayersize: "ds",
                        domain: "d",
                        player_ver: "pl",
                        h2h: "h2h",
                        med_app_id: "mai",
                        pv: "pv",
                        height: "h",
                        adsourcerate: "ar",
                        ddomain: "dd",
                        subid: "si",
                        loop: "l",
                        playersize: "ps",
                        width: "w",
                        cost: "c",
                        error: "e",
                        errorcode: "ec",
                        duration: "du",
                        playerid: "pi",
                        playername: "pn",
                        wrapperid: "wri",
                        wrapperversion: "wv",
                        adapterid: "bai",
                        externalloop: "el",
                        techfee: "tf",
                        adsourcetype: "as",
                        rtbconnectionid: "rci",
                        nest: "ns",
                        frombl: "fb",
                        param0: "p0",
                        param1: "p1",
                        param2: "p2",
                        param3: "p3",
                        param4: "p4",
                        param5: "p5",
                        param6: "p6",
                        param7: "p7",
                        param8: "p8",
                        param9: "p9"
                    },
                    I = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            f(this, e), this.options = t, this.console = new c.default({
                                target: "streamlytics"
                            }), this.object = "Object"
                        }
                        return e.prototype.setBuffering = function(e) {
                            e && (this.bufferConfig = e, this.eventsBuffer = [], setInterval(this._dispatchBuffer.bind(this), this.bufferConfig[m]), window.addEventListener("beforeunload", this._beforeunloadListener.bind(this), !0))
                        }, e.prototype.getEndPoint = function() {
                            return l.default.collector()
                        }, e.prototype.info = function(e) {
                            e.type = "info", this._log(e) && this._write(e)
                        }, e.prototype.warn = function(e) {
                            e.type = "warn", this._log(e) && this._write(e)
                        }, e.prototype.error = function(e) {
                            e.type = "error", this._log(e) && this._write(e)
                        }, e.prototype._log = function(e) {
                            if (!e) return this.console.error("cannot write empty log"), !1;
                            if (0 === (0, u.default)(e).length) return this.console.error("cannot write empty log"), !1;
                            if (e.sid = e.sid || _.srSessionID, e.component = e.component || this.options.component, e.version = e.version || this.options.version, "info" === e.type) {
                                var t = e.sampleRate || this.options.sampleRate;
                                if (t && t < Math.random()) return !1
                            }
                            return e.tags = e.partnerID, !0
                        }, e.prototype._write = function(e) {
                            if (e && ("Object" == typeof e || "object" === (void 0 === e ? "undefined" : o(e))) && "playa" !== e.component) {
                                var t = this._getCompressedAction(e.action); - 1 === p.indexOf(t) && (e.action = t, e = this._stringifyData(e), this.bufferConfig ? this._writeBufferedEvents(e) : this._writeLeanEvent(e))
                            }
                        }, e.prototype._stringifyData = function(e) {
                            var t = this,
                                n = {},
                                r = {},
                                o = e.env;
                            (0, u.default)(e).forEach((function(i, a) {
                                var u = i.toString().toLowerCase(),
                                    c = e[i],
                                    l = S[u] || u,
                                    s = "";
                                if ("string" != typeof c) try {
                                    s = c.toString()
                                } catch (e) {}
                                null != c && "null" !== c && "undefined" !== c && "" !== c && ("string" == typeof(s = c) && v.indexOf(u) > -1 && (s = s.toLowerCase()), (l.indexOf(".") > -1 || l.indexOf(" ") > -1) && (l = l.replace(/./g, "_").replace(/ /g, "_")), t._isKeyAllowed(u, o) && (n[l] = encodeURIComponent(s), r[u] = s))
                            }));
                            var i = JSON.stringify(r);
                            return this.console.log("streamlytics data = " + i), _.events && _.events.push((0, s.default)({
                                endpoint: this.getEndPoint()
                            }, r)), n
                        }, e.prototype._writeLeanEvent = function(e) {
                            var t = void 0;
                            e.dd && (t = e.dd.replace(/'/g, "%27"), delete e.dd);
                            var n = this._createQueryString(e).replace(/'/g, "%27"),
                                r = ("" + n + this.object).toLowerCase(),
                                o = this._fnv32a(r),
                                i = "" + this.getEndPoint() + n + "&p=" + o + "&rand=" + Math.ceil(1e10 * Math.random());
                            (new Image).src = t ? i + "&dd=" + t : i
                        }, e.prototype._writeSingleEvent = function(e) {
                            (new Image).src = this.getEndPoint() + "?p=" + encodeURIComponent(btoa(encodeURIComponent(JSON.stringify(e)))) + "&" + Math.random()
                        }, e.prototype._writeBufferedEvents = function(e) {
                            var t = e.a || e.action,
                                n = ("" + this._createQueryString(e).replace(/'/g, "%27") + this.object).toLowerCase();
                            e.p = this._fnv32a(n).toString(), e.rand = Math.ceil(1e10 * Math.random()).toString(), this.eventsBuffer.push(e), (this.bufferConfig[b] === this.eventsBuffer.length || this.bufferConfig[A] && this.bufferConfig[A].indexOf(t) > -1) && this._dispatchBuffer()
                        }, e.prototype._dispatchBuffer = function() {
                            this.eventsBuffer.length > 0 && ((0, a.default)(this.bufferConfig[h], {
                                e: this.eventsBuffer
                            }), this.eventsBuffer = [])
                        }, e.prototype._dispatchBufferOnUnload = function() {
                            if (window.navigator && window.navigator.sendBeacon) {
                                if (this.eventsBuffer.length > 0) {
                                    var e = JSON.stringify({
                                        e: this.eventsBuffer
                                    });
                                    window.navigator.sendBeacon(this.bufferConfig[h], e), this.eventsBuffer = []
                                }
                            } else this._dispatchBuffer()
                        }, e.prototype._getCompressedAction = function(e) {
                            return e ? T[e.toLowerCase()] || e : ""
                        }, e.prototype._ISODateString = function(e) {
                            try {
                                return e.getUTCFullYear() + "-" + this._pad(e.getUTCMonth() + 1) + "-" + this._pad(e.getUTCDate()) + "T" + this._pad(e.getUTCHours()) + ":" + this._pad(e.getUTCMinutes()) + ":" + this._pad(e.getUTCSeconds()) + "Z"
                            } catch (e) {}
                        }, e.prototype._pad = function(e) {
                            return e < 10 ? "0" + e : e
                        }, e.prototype._fnv32a = function(e) {
                            for (var t = 2166136261, n = 0; n < e.length; ++n) t ^= e.charCodeAt(n), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                            return t >>> 0
                        }, e.prototype._createQueryString = function(e) {
                            var t = "?";
                            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + e[n] + "&");
                            return t = t.slice(0, -1)
                        }, e.prototype._isKeyAllowed = function(e, t) {
                            if (e && E) {
                                if (E.all && E.all.indexOf(e) > -1) return !1;
                                if (t && E[t] && E[t].indexOf(e) > -1) return !1
                            }
                            return !0
                        }, e.prototype._beforeunloadListener = function(e) {
                            e.stopPropagation(), window.removeEventListener("beforeunload", this._beforeunloadListener), this.eventsBuffer && this.eventsBuffer.length && this._dispatchBufferOnUnload()
                        }, e
                    }();
                t.default = I, e.exports = t.default
            },
            31031: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                t.default = function(e) {
                    return e && e.forEach ? e : Object.keys(e || {})
                }, Object.keys || (Object.keys = function() {
                    "use strict";
                    var e = Object.prototype.hasOwnProperty,
                        t = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        o = r.length;
                    return function(i) {
                        if ("object" !== (void 0 === i ? "undefined" : n(i)) && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
                        var a, u, c = [];
                        for (a in i) e.call(i, a) && c.push(a);
                        if (t)
                            for (u = 0; u < o; u++) e.call(i, r[u]) && c.push(r[u]);
                        return c
                    }
                }()), e.exports = t.default
            },
            13663: function(e, t, n) {
                var r, o = n(84247),
                    i = "SR_NS";

                function a(e) {
                    e = e || window;
                    try {
                        return e.parent.document.getElementById("x"), !0
                    } catch (e) {
                        return !1
                    }
                }

                function u(e) {
                    e = e || window;
                    try {
                        return e.self !== e.parent
                    } catch (e) {
                        return !0
                    }
                }
                r = "undefined" != typeof window ? window : {}, e.exports = function(e, t, n) {
                    var c, l, s;
                    if (t = t || r, e = e ? "SR_NS." + e : i, n) {
                        var d = function(e, t) {
                            var n, r = e;
                            try {
                                for (n = o(r, t); u(r) && a(r);) {
                                    var i = o(r, t);
                                    i && Object.keys(i).length && (n = i), r = r.parent
                                }
                            } catch (e) {
                                return n
                            }
                            return n
                        }(t, e);
                        if (d) return d
                    }
                    if (!t) return !1;
                    for (l = (c = e.split(".")).shift(); l;) s = t[l] || {}, t = t[l] = s, l = c.shift();
                    return s
                }
            },
            40040: function(e) {
                "use strict";
                var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    n = Object.prototype.hasOwnProperty,
                    r = Object.prototype.toString,
                    o = Object.defineProperty,
                    i = Object.getOwnPropertyDescriptor,
                    a = function(e) {
                        return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === r.call(e)
                    },
                    u = function(e) {
                        if (!e || "[object Object]" !== r.call(e)) return !1;
                        var t, o = n.call(e, "constructor"),
                            i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
                        if (e.constructor && !o && !i) return !1;
                        for (t in e);
                        return void 0 === t || n.call(e, t)
                    },
                    c = function(e, t) {
                        o && "__proto__" === t.name ? o(e, t.name, {
                            enumerable: !0,
                            configurable: !0,
                            value: t.newValue,
                            writable: !0
                        }) : e[t.name] = t.newValue
                    },
                    l = function(e, t) {
                        if ("__proto__" === t) {
                            if (!n.call(e, t)) return;
                            if (i) return i(e, t).value
                        }
                        return e[t]
                    };
                e.exports = function e() {
                    var n, r, o, i, s, d, f = arguments[0],
                        _ = 1,
                        p = arguments.length,
                        E = !1;
                    for ("boolean" == typeof f && (E = f, f = arguments[1] || {}, _ = 2), (null == f || "object" !== (void 0 === f ? "undefined" : t(f)) && "function" != typeof f) && (f = {}); _ < p; ++_)
                        if (null != (n = arguments[_]))
                            for (r in n) o = l(f, r), f !== (i = l(n, r)) && (E && i && (u(i) || (s = a(i))) ? (s ? (s = !1, d = o && a(o) ? o : []) : d = o && u(o) ? o : {}, c(f, {
                                name: r,
                                newValue: e(E, d, i)
                            })) : void 0 !== i && c(f, {
                                name: r,
                                newValue: i
                            }));
                    return f
                }
            },
            84247: function(e, t, n) {
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = "__lodash_hash_undefined__",
                    i = "[object Function]",
                    a = "[object GeneratorFunction]",
                    u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    c = /^\w*$/,
                    l = /^\./,
                    s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    d = /\\(\\)?/g,
                    f = /^\[object .+?Constructor\]$/,
                    _ = "object" == (void 0 === n.g ? "undefined" : r(n.g)) && n.g && n.g.Object === Object && n.g,
                    p = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                    E = _ || p || Function("return this")();
                var v, b = Array.prototype,
                    m = Function.prototype,
                    A = Object.prototype,
                    h = E["__core-js_shared__"],
                    T = (v = /[^.]+$/.exec(h && h.keys && h.keys.IE_PROTO || "")) ? "Symbol(src)_1." + v : "",
                    S = m.toString,
                    I = A.hasOwnProperty,
                    y = A.toString,
                    R = RegExp("^" + S.call(I).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    w = E.Symbol,
                    O = b.splice,
                    g = k(E, "Map"),
                    L = k(Object, "create"),
                    N = w ? w.prototype : void 0,
                    P = N ? N.toString : void 0;

                function C(e) {
                    var t = -1,
                        n = e ? e.length : 0;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function D(e) {
                    var t = -1,
                        n = e ? e.length : 0;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function M(e) {
                    var t = -1,
                        n = e ? e.length : 0;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function U(e, t) {
                    for (var n, r, o = e.length; o--;)
                        if ((n = e[o][0]) === (r = t) || n != n && r != r) return o;
                    return -1
                }

                function x(e, t) {
                    var n;
                    t = function(e, t) {
                        if (B(e)) return !1;
                        var n = void 0 === e ? "undefined" : r(e);
                        if ("number" == n || "symbol" == n || "boolean" == n || null == e || G(e)) return !0;
                        return c.test(e) || !u.test(e) || null != t && e in Object(t)
                    }(t, e) ? [t] : B(n = t) ? n : F(n);
                    for (var o = 0, i = t.length; null != e && o < i;) e = e[W(t[o++])];
                    return o && o == i ? e : void 0
                }

                function Y(e) {
                    if (!H(e) || (t = e, T && T in t)) return !1;
                    var t, n = function(e) {
                        var t = H(e) ? y.call(e) : "";
                        return t == i || t == a
                    }(e) || function(e) {
                        var t = !1;
                        if (null != e && "function" != typeof e.toString) try {
                            t = !!(e + "")
                        } catch (e) {}
                        return t
                    }(e) ? R : f;
                    return n.test(function(e) {
                        if (null != e) {
                            try {
                                return S.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    }(e))
                }

                function V(e, t) {
                    var n, o, i = e.__data__;
                    return ("string" == (o = void 0 === (n = t) ? "undefined" : r(n)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
                }

                function k(e, t) {
                    var n = function(e, t) {
                        return null == e ? void 0 : e[t]
                    }(e, t);
                    return Y(n) ? n : void 0
                }
                C.prototype.clear = function() {
                    this.__data__ = L ? L(null) : {}
                }, C.prototype.delete = function(e) {
                    return this.has(e) && delete this.__data__[e]
                }, C.prototype.get = function(e) {
                    var t = this.__data__;
                    if (L) {
                        var n = t[e];
                        return n === o ? void 0 : n
                    }
                    return I.call(t, e) ? t[e] : void 0
                }, C.prototype.has = function(e) {
                    var t = this.__data__;
                    return L ? void 0 !== t[e] : I.call(t, e)
                }, C.prototype.set = function(e, t) {
                    return this.__data__[e] = L && void 0 === t ? o : t, this
                }, D.prototype.clear = function() {
                    this.__data__ = []
                }, D.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = U(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : O.call(t, n, 1), !0)
                }, D.prototype.get = function(e) {
                    var t = this.__data__,
                        n = U(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }, D.prototype.has = function(e) {
                    return U(this.__data__, e) > -1
                }, D.prototype.set = function(e, t) {
                    var n = this.__data__,
                        r = U(n, e);
                    return r < 0 ? n.push([e, t]) : n[r][1] = t, this
                }, M.prototype.clear = function() {
                    this.__data__ = {
                        hash: new C,
                        map: new(g || D),
                        string: new C
                    }
                }, M.prototype.delete = function(e) {
                    return V(this, e).delete(e)
                }, M.prototype.get = function(e) {
                    return V(this, e).get(e)
                }, M.prototype.has = function(e) {
                    return V(this, e).has(e)
                }, M.prototype.set = function(e, t) {
                    return V(this, e).set(e, t), this
                };
                var F = j((function(e) {
                    var t;
                    e = null == (t = e) ? "" : function(e) {
                        if ("string" == typeof e) return e;
                        if (G(e)) return P ? P.call(e) : "";
                        var t = e + "";
                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                    }(t);
                    var n = [];
                    return l.test(e) && n.push(""), e.replace(s, (function(e, t, r, o) {
                        n.push(r ? o.replace(d, "$1") : t || e)
                    })), n
                }));

                function W(e) {
                    if ("string" == typeof e || G(e)) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }

                function j(e, t) {
                    if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                    var n = function n() {
                        var r = arguments,
                            o = t ? t.apply(this, r) : r[0],
                            i = n.cache;
                        if (i.has(o)) return i.get(o);
                        var a = e.apply(this, r);
                        return n.cache = i.set(o, a), a
                    };
                    return n.cache = new(j.Cache || M), n
                }
                j.Cache = M;
                var B = Array.isArray;

                function H(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return !!e && ("object" == t || "function" == t)
                }

                function G(e) {
                    return "symbol" == (void 0 === e ? "undefined" : r(e)) || function(e) {
                        return !!e && "object" == (void 0 === e ? "undefined" : r(e))
                    }(e) && "[object Symbol]" == y.call(e)
                }
                e.exports = function(e, t, n) {
                    var r = null == e ? void 0 : x(e, t);
                    return void 0 === r ? n : r
                }
            },
            78972: function(e, t, n) {
                var r = n(78285),
                    o = n(75267),
                    i = n(70525),
                    a = n(71720),
                    u = n(75533);

                function c(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, e.exports = c
            },
            81160: function(e, t, n) {
                var r = n(12392),
                    o = n(49749),
                    i = n(75345),
                    a = n(5840),
                    u = n(84775);

                function c(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, e.exports = c
            },
            56990: function(e, t, n) {
                var r = n(60800)(n(85170), "Map");
                e.exports = r
            },
            93916: function(e, t, n) {
                var r = n(18432),
                    o = n(10481),
                    i = n(24771),
                    a = n(20531),
                    u = n(44592);

                function c(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = u, e.exports = c
            },
            80567: function(e, t, n) {
                var r = n(85170).Symbol;
                e.exports = r
            },
            47311: function(e) {
                e.exports = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
                    return o
                }
            },
            23103: function(e, t, n) {
                var r = n(49197);
                e.exports = function(e, t) {
                    for (var n = e.length; n--;)
                        if (r(e[n][0], t)) return n;
                    return -1
                }
            },
            56323: function(e, t, n) {
                var r = n(14727),
                    o = n(80939);
                e.exports = function(e, t) {
                    for (var n = 0, i = (t = r(t, e)).length; null != e && n < i;) e = e[o(t[n++])];
                    return n && n == i ? e : void 0
                }
            },
            50916: function(e, t, n) {
                var r = n(80567),
                    o = n(9522),
                    i = n(97056),
                    a = r ? r.toStringTag : void 0;
                e.exports = function(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e)
                }
            },
            91922: function(e, t, n) {
                var r = n(13401),
                    o = n(83596),
                    i = n(90966),
                    a = n(20530),
                    u = /^\[object .+?Constructor\]$/,
                    c = Function.prototype,
                    l = Object.prototype,
                    s = c.toString,
                    d = l.hasOwnProperty,
                    f = RegExp("^" + s.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                e.exports = function(e) {
                    return !(!i(e) || o(e)) && (r(e) ? f : u).test(a(e))
                }
            },
            36929: function(e, t, n) {
                var r = n(80567),
                    o = n(47311),
                    i = n(80991),
                    a = n(34973),
                    u = r ? r.prototype : void 0,
                    c = u ? u.toString : void 0;
                e.exports = function e(t) {
                    if ("string" == typeof t) return t;
                    if (i(t)) return o(t, e) + "";
                    if (a(t)) return c ? c.call(t) : "";
                    var n = t + "";
                    return "0" == n && 1 / t == -Infinity ? "-0" : n
                }
            },
            14727: function(e, t, n) {
                var r = n(80991),
                    o = n(41816),
                    i = n(1716),
                    a = n(51177);
                e.exports = function(e, t) {
                    return r(e) ? e : o(e, t) ? [e] : i(a(e))
                }
            },
            27869: function(e, t, n) {
                var r = n(85170)["__core-js_shared__"];
                e.exports = r
            },
            68908: function(e, t, n) {
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = "object" == (void 0 === n.g ? "undefined" : r(n.g)) && n.g && n.g.Object === Object && n.g;
                e.exports = o
            },
            20666: function(e, t, n) {
                var r = n(78369);
                e.exports = function(e, t) {
                    var n = e.__data__;
                    return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                }
            },
            60800: function(e, t, n) {
                var r = n(91922),
                    o = n(81606);
                e.exports = function(e, t) {
                    var n = o(e, t);
                    return r(n) ? n : void 0
                }
            },
            9522: function(e, t, n) {
                var r = n(80567),
                    o = Object.prototype,
                    i = o.hasOwnProperty,
                    a = o.toString,
                    u = r ? r.toStringTag : void 0;
                e.exports = function(e) {
                    var t = i.call(e, u),
                        n = e[u];
                    try {
                        e[u] = void 0;
                        var r = !0
                    } catch (e) {}
                    var o = a.call(e);
                    return r && (t ? e[u] = n : delete e[u]), o
                }
            },
            81606: function(e) {
                e.exports = function(e, t) {
                    return null == e ? void 0 : e[t]
                }
            },
            78285: function(e, t, n) {
                var r = n(49434);
                e.exports = function() {
                    this.__data__ = r ? r(null) : {}, this.size = 0
                }
            },
            75267: function(e) {
                e.exports = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }
            },
            70525: function(e, t, n) {
                var r = n(49434),
                    o = Object.prototype.hasOwnProperty;
                e.exports = function(e) {
                    var t = this.__data__;
                    if (r) {
                        var n = t[e];
                        return "__lodash_hash_undefined__" === n ? void 0 : n
                    }
                    return o.call(t, e) ? t[e] : void 0
                }
            },
            71720: function(e, t, n) {
                var r = n(49434),
                    o = Object.prototype.hasOwnProperty;
                e.exports = function(e) {
                    var t = this.__data__;
                    return r ? void 0 !== t[e] : o.call(t, e)
                }
            },
            75533: function(e, t, n) {
                var r = n(49434);
                e.exports = function(e, t) {
                    var n = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
                }
            },
            41816: function(e, t, n) {
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = n(80991),
                    i = n(34973),
                    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    u = /^\w*$/;
                e.exports = function(e, t) {
                    if (o(e)) return !1;
                    var n = void 0 === e ? "undefined" : r(e);
                    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || (u.test(e) || !a.test(e) || null != t && e in Object(t))
                }
            },
            78369: function(e) {
                var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                e.exports = function(e) {
                    var n = void 0 === e ? "undefined" : t(e);
                    return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e
                }
            },
            83596: function(e, t, n) {
                var r, o = n(27869),
                    i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
                e.exports = function(e) {
                    return !!i && i in e
                }
            },
            12392: function(e) {
                e.exports = function() {
                    this.__data__ = [], this.size = 0
                }
            },
            49749: function(e, t, n) {
                var r = n(23103),
                    o = Array.prototype.splice;
                e.exports = function(e) {
                    var t = this.__data__,
                        n = r(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
                }
            },
            75345: function(e, t, n) {
                var r = n(23103);
                e.exports = function(e) {
                    var t = this.__data__,
                        n = r(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }
            },
            5840: function(e, t, n) {
                var r = n(23103);
                e.exports = function(e) {
                    return r(this.__data__, e) > -1
                }
            },
            84775: function(e, t, n) {
                var r = n(23103);
                e.exports = function(e, t) {
                    var n = this.__data__,
                        o = r(n, e);
                    return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
                }
            },
            18432: function(e, t, n) {
                var r = n(78972),
                    o = n(81160),
                    i = n(56990);
                e.exports = function() {
                    this.size = 0, this.__data__ = {
                        hash: new r,
                        map: new(i || o),
                        string: new r
                    }
                }
            },
            10481: function(e, t, n) {
                var r = n(20666);
                e.exports = function(e) {
                    var t = r(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }
            },
            24771: function(e, t, n) {
                var r = n(20666);
                e.exports = function(e) {
                    return r(this, e).get(e)
                }
            },
            20531: function(e, t, n) {
                var r = n(20666);
                e.exports = function(e) {
                    return r(this, e).has(e)
                }
            },
            44592: function(e, t, n) {
                var r = n(20666);
                e.exports = function(e, t) {
                    var n = r(this, e),
                        o = n.size;
                    return n.set(e, t), this.size += n.size == o ? 0 : 1, this
                }
            },
            80798: function(e, t, n) {
                var r = n(12527);
                e.exports = function(e) {
                    var t = r(e, (function(e) {
                            return 500 === n.size && n.clear(), e
                        })),
                        n = t.cache;
                    return t
                }
            },
            49434: function(e, t, n) {
                var r = n(60800)(Object, "create");
                e.exports = r
            },
            97056: function(e) {
                var t = Object.prototype.toString;
                e.exports = function(e) {
                    return t.call(e)
                }
            },
            85170: function(e, t, n) {
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = n(68908),
                    i = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                    a = o || i || Function("return this")();
                e.exports = a
            },
            1716: function(e, t, n) {
                var r = n(80798),
                    o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    i = /\\(\\)?/g,
                    a = r((function(e) {
                        var t = [];
                        return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function(e, n, r, o) {
                            t.push(r ? o.replace(i, "$1") : n || e)
                        })), t
                    }));
                e.exports = a
            },
            80939: function(e, t, n) {
                var r = n(34973);
                e.exports = function(e) {
                    if ("string" == typeof e || r(e)) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -Infinity ? "-0" : t
                }
            },
            20530: function(e) {
                var t = Function.prototype.toString;
                e.exports = function(e) {
                    if (null != e) {
                        try {
                            return t.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }
            },
            49197: function(e) {
                e.exports = function(e, t) {
                    return e === t || e != e && t != t
                }
            },
            47957: function(e, t, n) {
                var r = n(56323);
                e.exports = function(e, t, n) {
                    var o = null == e ? void 0 : r(e, t);
                    return void 0 === o ? n : o
                }
            },
            80991: function(e) {
                var t = Array.isArray;
                e.exports = t
            },
            13401: function(e, t, n) {
                var r = n(50916),
                    o = n(90966);
                e.exports = function(e) {
                    if (!o(e)) return !1;
                    var t = r(e);
                    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                }
            },
            90966: function(e) {
                var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                e.exports = function(e) {
                    var n = void 0 === e ? "undefined" : t(e);
                    return null != e && ("object" == n || "function" == n)
                }
            },
            61662: function(e) {
                var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                e.exports = function(e) {
                    return null != e && "object" == (void 0 === e ? "undefined" : t(e))
                }
            },
            34973: function(e, t, n) {
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = n(50916),
                    i = n(61662);
                e.exports = function(e) {
                    return "symbol" == (void 0 === e ? "undefined" : r(e)) || i(e) && "[object Symbol]" == o(e)
                }
            },
            12527: function(e, t, n) {
                var r = n(93916);

                function o(e, t) {
                    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                    var n = function n() {
                        var r = arguments,
                            o = t ? t.apply(this, r) : r[0],
                            i = n.cache;
                        if (i.has(o)) return i.get(o);
                        var a = e.apply(this, r);
                        return n.cache = i.set(o, a) || i, a
                    };
                    return n.cache = new(o.Cache || r), n
                }
                o.Cache = r, e.exports = o
            },
            51177: function(e, t, n) {
                var r = n(36929);
                e.exports = function(e) {
                    return null == e ? "" : r(e)
                }
            },
            59560: function(e) {
                var t, n, r = e.exports = {};

                function o() {
                    throw new Error("setTimeout has not been defined")
                }

                function i() {
                    throw new Error("clearTimeout has not been defined")
                }

                function a(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (n) {
                        try {
                            return t.call(null, e, 0)
                        } catch (n) {
                            return t.call(this, e, 0)
                        }
                    }
                }! function() {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : o
                    } catch (e) {
                        t = o
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        n = i
                    }
                }();
                var u, c = [],
                    l = !1,
                    s = -1;

                function d() {
                    l && u && (l = !1, u.length ? c = u.concat(c) : s = -1, c.length && f())
                }

                function f() {
                    if (!l) {
                        var e = a(d);
                        l = !0;
                        for (var t = c.length; t;) {
                            for (u = c, c = []; ++s < t;) u && u[s].run();
                            s = -1, t = c.length
                        }
                        u = null, l = !1,
                            function(e) {
                                if (n === clearTimeout) return clearTimeout(e);
                                if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function _(e, t) {
                    this.fun = e, this.array = t
                }

                function p() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    c.push(new _(e, t)), 1 !== c.length || l || a(f)
                }, _.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
                    return []
                }, r.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }, r.cwd = function() {
                    return "/"
                }, r.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }, r.umask = function() {
                    return 0
                }
            },
            39434: function(e, t, n) {
                var r;
                e = n.nmd(e);
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                ! function(i, a) {
                    "use strict";
                    var u = "function",
                        c = "undefined",
                        l = "object",
                        s = "string",
                        d = "model",
                        f = "name",
                        _ = "type",
                        p = "vendor",
                        E = "version",
                        v = "architecture",
                        b = "console",
                        m = "mobile",
                        A = "tablet",
                        h = "smarttv",
                        T = "wearable",
                        S = "embedded",
                        I = "Amazon",
                        y = "Apple",
                        R = "ASUS",
                        w = "BlackBerry",
                        O = "Firefox",
                        g = "Google",
                        L = "Huawei",
                        N = "LG",
                        P = "Microsoft",
                        C = "Motorola",
                        D = "Opera",
                        M = "Samsung",
                        U = "Sony",
                        x = "Xiaomi",
                        Y = "Zebra",
                        V = "Facebook",
                        k = function(e) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                            return t
                        },
                        F = function(e, t) {
                            return (void 0 === e ? "undefined" : o(e)) === s && -1 !== W(t).indexOf(W(e))
                        },
                        W = function(e) {
                            return e.toLowerCase()
                        },
                        j = function(e, t) {
                            if ((void 0 === e ? "undefined" : o(e)) === s) return e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), (void 0 === t ? "undefined" : o(t)) === c ? e : e.substring(0, 255)
                        },
                        B = function(e, t) {
                            for (var n, r, i, c, s, d, f = 0; f < t.length && !s;) {
                                var _ = t[f],
                                    p = t[f + 1];
                                for (n = r = 0; n < _.length && !s;)
                                    if (s = _[n++].exec(e))
                                        for (i = 0; i < p.length; i++) d = s[++r], (void 0 === (c = p[i]) ? "undefined" : o(c)) === l && c.length > 0 ? 2 === c.length ? o(c[1]) == u ? this[c[0]] = c[1].call(this, d) : this[c[0]] = c[1] : 3 === c.length ? o(c[1]) !== u || c[1].exec && c[1].test ? this[c[0]] = d ? d.replace(c[1], c[2]) : a : this[c[0]] = d ? c[1].call(this, d, c[2]) : a : 4 === c.length && (this[c[0]] = d ? c[3].call(this, d.replace(c[1], c[2])) : a) : this[c] = d || a;
                                f += 2
                            }
                        },
                        H = function(e, t) {
                            for (var n in t)
                                if (o(t[n]) === l && t[n].length > 0) {
                                    for (var r = 0; r < t[n].length; r++)
                                        if (F(t[n][r], e)) return "?" === n ? a : n
                                } else if (F(t[n], e)) return "?" === n ? a : n;
                            return e
                        },
                        G = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        Z = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [E, [f, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [E, [f, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [f, E],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [E, [f, "Opera Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [E, [f, D]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [f, E],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [E, [f, "UCBrowser"]],
                                [/\bqbcore\/([\w\.]+)/i],
                                [E, [f, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [E, [f, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [E, [f, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [E, [f, "IE"]],
                                [/yabrowser\/([\w\.]+)/i],
                                [E, [f, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 Secure Browser"], E
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [E, [f, "Firefox Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [E, [f, "Opera Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [E, [f, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [E, [f, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [E, [f, "Opera Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [E, [f, "MIUI Browser"]],
                                [/fxios\/([-\w\.]+)/i],
                                [E, [f, O]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [f, "360 Browser"]
                                ],
                                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 Browser"], E
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [f, /_/g, " "], E
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [f, E],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                                [f],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [f, V], E
                                ],
                                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                [f, E],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [E, [f, "GSA"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [E, [f, "Chrome Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [f, "Chrome WebView"], E
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [E, [f, "Android Browser"]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [f, E],
                                [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                                [E, [f, "Mobile Safari"]],
                                [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                                [E, f],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [f, [E, H, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [f, E],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [f, "Netscape"], E
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [E, [f, "Firefox Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                [f, E]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [v, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [v, W]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [v, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [v, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [v, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [v, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [v, /ower/, "", W]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [v, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [v, W]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [d, [p, M],
                                    [_, A]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [d, [p, M],
                                    [_, m]
                                ],
                                [/\((ip(?:hone|od)[\w ]*);/i],
                                [d, [p, y],
                                    [_, m]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [d, [p, y],
                                    [_, A]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [d, [p, L],
                                    [_, A]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                                [d, [p, L],
                                    [_, m]
                                ],
                                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [p, x],
                                    [_, m]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [p, x],
                                    [_, A]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [d, [p, "OPPO"],
                                    [_, m]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [d, [p, "Vivo"],
                                    [_, m]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [d, [p, "Realme"],
                                    [_, m]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [d, [p, C],
                                    [_, m]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [d, [p, C],
                                    [_, A]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [d, [p, N],
                                    [_, A]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [d, [p, N],
                                    [_, m]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [d, [p, "Lenovo"],
                                    [_, A]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [d, /_/g, " "],
                                    [p, "Nokia"],
                                    [_, m]
                                ],
                                [/(pixel c)\b/i],
                                [d, [p, g],
                                    [_, A]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [d, [p, g],
                                    [_, m]
                                ],
                                [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [d, [p, U],
                                    [_, m]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [d, "Xperia Tablet"],
                                    [p, U],
                                    [_, A]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [d, [p, "OnePlus"],
                                    [_, m]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [d, [p, I],
                                    [_, A]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [d, /(.+)/g, "Fire Phone $1"],
                                    [p, I],
                                    [_, m]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [d, p, [_, A]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [d, [p, w],
                                    [_, m]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [d, [p, R],
                                    [_, A]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [d, [p, R],
                                    [_, m]
                                ],
                                [/(nexus 9)/i],
                                [d, [p, "HTC"],
                                    [_, A]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                                [p, [d, /_/g, " "],
                                    [_, m]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [d, [p, "Acer"],
                                    [_, A]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [d, [p, "Meizu"],
                                    [_, m]
                                ],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [d, [p, "Sharp"],
                                    [_, m]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [p, d, [_, m]],
                                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [p, d, [_, A]],
                                [/(surface duo)/i],
                                [d, [p, P],
                                    [_, A]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [d, [p, "Fairphone"],
                                    [_, m]
                                ],
                                [/(u304aa)/i],
                                [d, [p, "AT&T"],
                                    [_, m]
                                ],
                                [/\bsie-(\w*)/i],
                                [d, [p, "Siemens"],
                                    [_, m]
                                ],
                                [/\b(rct\w+) b/i],
                                [d, [p, "RCA"],
                                    [_, A]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [d, [p, "Dell"],
                                    [_, A]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [d, [p, "Verizon"],
                                    [_, A]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [d, [p, "Barnes & Noble"],
                                    [_, A]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [d, [p, "NuVision"],
                                    [_, A]
                                ],
                                [/\b(k88) b/i],
                                [d, [p, "ZTE"],
                                    [_, A]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [d, [p, "ZTE"],
                                    [_, m]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [d, [p, "Swiss"],
                                    [_, m]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [d, [p, "Swiss"],
                                    [_, A]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [d, [p, "Zeki"],
                                    [_, A]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [p, "Dragon Touch"], d, [_, A]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [d, [p, "Insignia"],
                                    [_, A]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [d, [p, "NextBook"],
                                    [_, A]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [p, "Voice"], d, [_, m]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [p, "LvTel"], d, [_, m]
                                ],
                                [/\b(ph-1) /i],
                                [d, [p, "Essential"],
                                    [_, m]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [d, [p, "Envizen"],
                                    [_, A]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [d, [p, "MachSpeed"],
                                    [_, A]
                                ],
                                [/\btu_(1491) b/i],
                                [d, [p, "Rotor"],
                                    [_, A]
                                ],
                                [/(shield[\w ]+) b/i],
                                [d, [p, "Nvidia"],
                                    [_, A]
                                ],
                                [/(sprint) (\w+)/i],
                                [p, d, [_, m]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [d, /\./g, " "],
                                    [p, P],
                                    [_, m]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [d, [p, Y],
                                    [_, A]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [d, [p, Y],
                                    [_, m]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [p, d, [_, b]],
                                [/droid.+; (shield) bui/i],
                                [d, [p, "Nvidia"],
                                    [_, b]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [d, [p, U],
                                    [_, b]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [d, [p, P],
                                    [_, b]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [p, [_, h]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [d, /^/, "SmartTV"],
                                    [p, M],
                                    [_, h]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [p, N],
                                    [_, h]
                                ],
                                [/(apple) ?tv/i],
                                [p, [d, "Apple TV"],
                                    [_, h]
                                ],
                                [/crkey/i],
                                [
                                    [d, "Chromecast"],
                                    [p, g],
                                    [_, h]
                                ],
                                [/droid.+aft(\w)( bui|\))/i],
                                [d, [p, I],
                                    [_, h]
                                ],
                                [/\(dtv[\);].+(aquos)/i],
                                [d, [p, "Sharp"],
                                    [_, h]
                                ],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                [
                                    [p, j],
                                    [d, j],
                                    [_, h]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [_, h]
                                ],
                                [/((pebble))app/i],
                                [p, d, [_, T]],
                                [/droid.+; (glass) \d/i],
                                [d, [p, g],
                                    [_, T]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [d, [p, Y],
                                    [_, T]
                                ],
                                [/(quest( 2)?)/i],
                                [d, [p, V],
                                    [_, T]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [p, [_, S]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [d, [_, m]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [d, [_, A]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [_, A]
                                ],
                                [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                                [
                                    [_, m]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [d, [p, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [E, [f, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [E, [f, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                [f, E],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [E, f]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [f, E],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [f, [E, H, G]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [f, "Windows"],
                                    [E, H, G]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [E, /_/g, "."],
                                    [f, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [f, "Mac OS"],
                                    [E, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                                [E, f],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [f, E],
                                [/\(bb(10);/i],
                                [E, [f, w]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [E, [f, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [E, [f, "Firefox OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [E, [f, "webOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [E, [f, "Chromecast"]],
                                [/(cros) [\w]+ ([\w\.]+\w)/i],
                                [
                                    [f, "Chromium OS"], E
                                ],
                                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [f, E],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [f, "Solaris"], E
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                [f, E]
                            ]
                        },
                        q = function e(t, n) {
                            if ((void 0 === t ? "undefined" : o(t)) === l && (n = t, t = a), !(this instanceof e)) return new e(t, n).getResult();
                            var r = t || ((void 0 === i ? "undefined" : o(i)) !== c && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                                u = n ? function(e, t) {
                                    var n = {};
                                    for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                                    return n
                                }(Z, n) : Z;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t.name = a, t.version = a, B.call(t, r, u.browser), t.major = (void 0 === (e = t.version) ? "undefined" : o(e)) === s ? e.replace(/[^\d\.]/g, "").split(".")[0] : a, t
                            }, this.getCPU = function() {
                                var e = {};
                                return e.architecture = a, B.call(e, r, u.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e.vendor = a, e.model = a, e.type = a, B.call(e, r, u.device), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e.name = a, e.version = a, B.call(e, r, u.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e.name = a, e.version = a, B.call(e, r, u.os), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return r
                            }, this.setUA = function(e) {
                                return r = (void 0 === e ? "undefined" : o(e)) === s && e.length > 255 ? j(e, 255) : e, this
                            }, this.setUA(r), this
                        };
                    q.VERSION = "0.7.31", q.BROWSER = k([f, E, "major"]), q.CPU = k([v]), q.DEVICE = k([d, p, _, b, m, h, A, T, S]), q.ENGINE = q.OS = k([f, E]), o(t) !== c ? (o(e) !== c && e.exports && (t = e.exports = q), t.UAParser = q) : o(n.amdD) === u && n.amdO ? (r = function() {
                        return q
                    }.call(t, n, t, e)) === a || (e.exports = r) : (void 0 === i ? "undefined" : o(i)) !== c && (i.UAParser = q);
                    var z = (void 0 === i ? "undefined" : o(i)) !== c && (i.jQuery || i.Zepto);
                    if (z && !z.ua) {
                        var J = new q;
                        z.ua = J.getResult(), z.ua.get = function() {
                            return J.getUA()
                        }, z.ua.set = function(e) {
                            J.setUA(e);
                            var t = J.getResult();
                            for (var n in t) z.ua[n] = t[n]
                        }
                    }
                }("object" === ("undefined" == typeof window ? "undefined" : o(window)) ? window : void 0)
            },
            22538: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(20566);
                Object.defineProperty(t, "v1", {
                    enumerable: !0,
                    get: function() {
                        return f(r).default
                    }
                });
                var o = n(32887);
                Object.defineProperty(t, "v3", {
                    enumerable: !0,
                    get: function() {
                        return f(o).default
                    }
                });
                var i = n(23398);
                Object.defineProperty(t, "v4", {
                    enumerable: !0,
                    get: function() {
                        return f(i).default
                    }
                });
                var a = n(75726);
                Object.defineProperty(t, "v5", {
                    enumerable: !0,
                    get: function() {
                        return f(a).default
                    }
                });
                var u = n(9788);
                Object.defineProperty(t, "NIL", {
                    enumerable: !0,
                    get: function() {
                        return f(u).default
                    }
                });
                var c = n(42441);
                Object.defineProperty(t, "version", {
                    enumerable: !0,
                    get: function() {
                        return f(c).default
                    }
                });
                var l = n(62172);
                Object.defineProperty(t, "validate", {
                    enumerable: !0,
                    get: function() {
                        return f(l).default
                    }
                });
                var s = n(81213);
                Object.defineProperty(t, "stringify", {
                    enumerable: !0,
                    get: function() {
                        return f(s).default
                    }
                });
                var d = n(29613);

                function f(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "parse", {
                    enumerable: !0,
                    get: function() {
                        return f(d).default
                    }
                })
            },
            67342: function(e, t) {
                function n(e) {
                    return 14 + (e + 64 >>> 9 << 4) + 1
                }

                function r(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }

                function o(e, t, n, o, i, a) {
                    return r((u = r(r(t, e), r(o, a))) << (c = i) | u >>> 32 - c, n);
                    var u, c
                }

                function i(e, t, n, r, i, a, u) {
                    return o(t & n | ~t & r, e, t, i, a, u)
                }

                function a(e, t, n, r, i, a, u) {
                    return o(t & r | n & ~r, e, t, i, a, u)
                }

                function u(e, t, n, r, i, a, u) {
                    return o(t ^ n ^ r, e, t, i, a, u)
                }

                function c(e, t, n, r, i, a, u) {
                    return o(n ^ (t | ~r), e, t, i, a, u)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    if ("string" == typeof e) {
                        var t = unescape(encodeURIComponent(e));
                        e = new Uint8Array(t.length);
                        for (var o = 0; o < t.length; ++o) e[o] = t.charCodeAt(o)
                    }
                    return function(e) {
                        for (var t = [], n = 32 * e.length, r = "0123456789abcdef", o = 0; o < n; o += 8) {
                            var i = e[o >> 5] >>> o % 32 & 255,
                                a = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(15 & i), 16);
                            t.push(a)
                        }
                        return t
                    }(function(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[n(t) - 1] = t;
                        for (var o = 1732584193, l = -271733879, s = -1732584194, d = 271733878, f = 0; f < e.length; f += 16) {
                            var _ = o,
                                p = l,
                                E = s,
                                v = d;
                            o = i(o, l, s, d, e[f], 7, -680876936), d = i(d, o, l, s, e[f + 1], 12, -389564586), s = i(s, d, o, l, e[f + 2], 17, 606105819), l = i(l, s, d, o, e[f + 3], 22, -1044525330), o = i(o, l, s, d, e[f + 4], 7, -176418897), d = i(d, o, l, s, e[f + 5], 12, 1200080426), s = i(s, d, o, l, e[f + 6], 17, -1473231341), l = i(l, s, d, o, e[f + 7], 22, -45705983), o = i(o, l, s, d, e[f + 8], 7, 1770035416), d = i(d, o, l, s, e[f + 9], 12, -1958414417), s = i(s, d, o, l, e[f + 10], 17, -42063), l = i(l, s, d, o, e[f + 11], 22, -1990404162), o = i(o, l, s, d, e[f + 12], 7, 1804603682), d = i(d, o, l, s, e[f + 13], 12, -40341101), s = i(s, d, o, l, e[f + 14], 17, -1502002290), o = a(o, l = i(l, s, d, o, e[f + 15], 22, 1236535329), s, d, e[f + 1], 5, -165796510), d = a(d, o, l, s, e[f + 6], 9, -1069501632), s = a(s, d, o, l, e[f + 11], 14, 643717713), l = a(l, s, d, o, e[f], 20, -373897302), o = a(o, l, s, d, e[f + 5], 5, -701558691), d = a(d, o, l, s, e[f + 10], 9, 38016083), s = a(s, d, o, l, e[f + 15], 14, -660478335), l = a(l, s, d, o, e[f + 4], 20, -405537848), o = a(o, l, s, d, e[f + 9], 5, 568446438), d = a(d, o, l, s, e[f + 14], 9, -1019803690), s = a(s, d, o, l, e[f + 3], 14, -187363961), l = a(l, s, d, o, e[f + 8], 20, 1163531501), o = a(o, l, s, d, e[f + 13], 5, -1444681467), d = a(d, o, l, s, e[f + 2], 9, -51403784), s = a(s, d, o, l, e[f + 7], 14, 1735328473), o = u(o, l = a(l, s, d, o, e[f + 12], 20, -1926607734), s, d, e[f + 5], 4, -378558), d = u(d, o, l, s, e[f + 8], 11, -2022574463), s = u(s, d, o, l, e[f + 11], 16, 1839030562), l = u(l, s, d, o, e[f + 14], 23, -35309556), o = u(o, l, s, d, e[f + 1], 4, -1530992060), d = u(d, o, l, s, e[f + 4], 11, 1272893353), s = u(s, d, o, l, e[f + 7], 16, -155497632), l = u(l, s, d, o, e[f + 10], 23, -1094730640), o = u(o, l, s, d, e[f + 13], 4, 681279174), d = u(d, o, l, s, e[f], 11, -358537222), s = u(s, d, o, l, e[f + 3], 16, -722521979), l = u(l, s, d, o, e[f + 6], 23, 76029189), o = u(o, l, s, d, e[f + 9], 4, -640364487), d = u(d, o, l, s, e[f + 12], 11, -421815835), s = u(s, d, o, l, e[f + 15], 16, 530742520), o = c(o, l = u(l, s, d, o, e[f + 2], 23, -995338651), s, d, e[f], 6, -198630844), d = c(d, o, l, s, e[f + 7], 10, 1126891415), s = c(s, d, o, l, e[f + 14], 15, -1416354905), l = c(l, s, d, o, e[f + 5], 21, -57434055), o = c(o, l, s, d, e[f + 12], 6, 1700485571), d = c(d, o, l, s, e[f + 3], 10, -1894986606), s = c(s, d, o, l, e[f + 10], 15, -1051523), l = c(l, s, d, o, e[f + 1], 21, -2054922799), o = c(o, l, s, d, e[f + 8], 6, 1873313359), d = c(d, o, l, s, e[f + 15], 10, -30611744), s = c(s, d, o, l, e[f + 6], 15, -1560198380), l = c(l, s, d, o, e[f + 13], 21, 1309151649), o = c(o, l, s, d, e[f + 4], 6, -145523070), d = c(d, o, l, s, e[f + 11], 10, -1120210379), s = c(s, d, o, l, e[f + 2], 15, 718787259), l = c(l, s, d, o, e[f + 9], 21, -343485551), o = r(o, _), l = r(l, p), s = r(s, E), d = r(d, v)
                        }
                        return [o, l, s, d]
                    }(function(e) {
                        if (0 === e.length) return [];
                        for (var t = 8 * e.length, r = new Uint32Array(n(t)), o = 0; o < t; o += 8) r[o >> 5] |= (255 & e[o / 8]) << o % 32;
                        return r
                    }(e), 8 * e.length))
                }, e.exports = t.default
            },
            9788: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = "00000000-0000-0000-0000-000000000000", e.exports = t.default
            },
            29613: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n(62172),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                t.default = function(e) {
                    if (!(0, i.default)(e)) throw TypeError("Invalid UUID");
                    var t, n = new Uint8Array(16);
                    return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
                }, e.exports = t.default
            },
            35564: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, e.exports = t.default
            },
            49255: function(e, t) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function() {
                    if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return n(r)
                };
                var r = new Uint8Array(16);
                e.exports = t.default
            },
            28349: function(e, t) {
                function n(e, t, n, r) {
                    switch (e) {
                        case 0:
                            return t & n ^ ~t & r;
                        case 1:
                        case 3:
                            return t ^ n ^ r;
                        case 2:
                            return t & n ^ t & r ^ n & r
                    }
                }

                function r(e, t) {
                    return e << t | e >>> 32 - t
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = [1518500249, 1859775393, 2400959708, 3395469782],
                        o = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" == typeof e) {
                        var i = unescape(encodeURIComponent(e));
                        e = [];
                        for (var a = 0; a < i.length; ++a) e.push(i.charCodeAt(a))
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    for (var u = e.length / 4 + 2, c = Math.ceil(u / 16), l = new Array(c), s = 0; s < c; ++s) {
                        for (var d = new Uint32Array(16), f = 0; f < 16; ++f) d[f] = e[64 * s + 4 * f] << 24 | e[64 * s + 4 * f + 1] << 16 | e[64 * s + 4 * f + 2] << 8 | e[64 * s + 4 * f + 3];
                        l[s] = d
                    }
                    l[c - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), l[c - 1][14] = Math.floor(l[c - 1][14]), l[c - 1][15] = 8 * (e.length - 1) & 4294967295;
                    for (var _ = 0; _ < c; ++_) {
                        for (var p = new Uint32Array(80), E = 0; E < 16; ++E) p[E] = l[_][E];
                        for (var v = 16; v < 80; ++v) p[v] = r(p[v - 3] ^ p[v - 8] ^ p[v - 14] ^ p[v - 16], 1);
                        for (var b = o[0], m = o[1], A = o[2], h = o[3], T = o[4], S = 0; S < 80; ++S) {
                            var I = Math.floor(S / 20),
                                y = r(b, 5) + n(I, m, A, h) + T + t[I] + p[S] >>> 0;
                            T = h, h = A, A = r(m, 30) >>> 0, m = b, b = y
                        }
                        o[0] = o[0] + b >>> 0, o[1] = o[1] + m >>> 0, o[2] = o[2] + A >>> 0, o[3] = o[3] + h >>> 0, o[4] = o[4] + T >>> 0
                    }
                    return [o[0] >> 24 & 255, o[0] >> 16 & 255, o[0] >> 8 & 255, 255 & o[0], o[1] >> 24 & 255, o[1] >> 16 & 255, o[1] >> 8 & 255, 255 & o[1], o[2] >> 24 & 255, o[2] >> 16 & 255, o[2] >> 8 & 255, 255 & o[2], o[3] >> 24 & 255, o[3] >> 16 & 255, o[3] >> 8 & 255, 255 & o[3], o[4] >> 24 & 255, o[4] >> 16 & 255, o[4] >> 8 & 255, 255 & o[4]]
                }, e.exports = t.default
            },
            81213: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n(62172),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                for (var a = [], u = 0; u < 256; ++u) a.push((u + 256).toString(16).substr(1));
                t.default = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = (a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]).toLowerCase();
                    if (!(0, i.default)(n)) throw TypeError("Stringified UUID is invalid");
                    return n
                }, e.exports = t.default
            },
            20566: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o, i = u(n(49255)),
                    a = u(n(81213));

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var c = 0,
                    l = 0;
                t.default = function(e, t, n) {
                    var u = t && n || 0,
                        s = t || new Array(16),
                        d = (e = e || {}).node || r,
                        f = void 0 !== e.clockseq ? e.clockseq : o;
                    if (null == d || null == f) {
                        var _ = e.random || (e.rng || i.default)();
                        null == d && (d = r = [1 | _[0], _[1], _[2], _[3], _[4], _[5]]), null == f && (f = o = 16383 & (_[6] << 8 | _[7]))
                    }
                    var p = void 0 !== e.msecs ? e.msecs : Date.now(),
                        E = void 0 !== e.nsecs ? e.nsecs : l + 1,
                        v = p - c + (E - l) / 1e4;
                    if (v < 0 && void 0 === e.clockseq && (f = f + 1 & 16383), (v < 0 || p > c) && void 0 === e.nsecs && (E = 0), E >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    c = p, l = E, o = f;
                    var b = (1e4 * (268435455 & (p += 122192928e5)) + E) % 4294967296;
                    s[u++] = b >>> 24 & 255, s[u++] = b >>> 16 & 255, s[u++] = b >>> 8 & 255, s[u++] = 255 & b;
                    var m = p / 4294967296 * 1e4 & 268435455;
                    s[u++] = m >>> 8 & 255, s[u++] = 255 & m, s[u++] = m >>> 24 & 15 | 16, s[u++] = m >>> 16 & 255, s[u++] = f >>> 8 | 128, s[u++] = 255 & f;
                    for (var A = 0; A < 6; ++A) s[u + A] = d[A];
                    return t || (0, a.default)(s)
                }, e.exports = t.default
            },
            32887: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(81085)),
                    o = i(n(67342));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = (0, r.default)("v3", 48, o.default);
                t.default = a, e.exports = t.default
            },
            81085: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.URL = t.DNS = void 0, t.default = function(e, t, n) {
                    function i(e, i, a, u) {
                        if ("string" == typeof e && (e = function(e) {
                                e = unescape(encodeURIComponent(e));
                                for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                                return t
                            }(e)), "string" == typeof i && (i = (0, o.default)(i)), 16 !== i.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                        var c = new Uint8Array(16 + e.length);
                        if (c.set(i), c.set(e, i.length), (c = n(c))[6] = 15 & c[6] | t, c[8] = 63 & c[8] | 128, a) {
                            u = u || 0;
                            for (var l = 0; l < 16; ++l) a[u + l] = c[l];
                            return a
                        }
                        return (0, r.default)(c)
                    }
                    try {
                        i.name = e
                    } catch (e) {}
                    return i.DNS = a, i.URL = u, i
                };
                var r = i(n(81213)),
                    o = i(n(29613));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = t.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
                    u = t.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
            },
            23398: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(49255)),
                    o = i(n(81213));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.default = function(e, t, n) {
                    var i = (e = e || {}).random || (e.rng || r.default)();
                    if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
                        n = n || 0;
                        for (var a = 0; a < 16; ++a) t[n + a] = i[a];
                        return t
                    }
                    return (0, o.default)(i)
                }, e.exports = t.default
            },
            75726: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i(n(81085)),
                    o = i(n(28349));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = (0, r.default)("v5", 80, o.default);
                t.default = a, e.exports = t.default
            },
            62172: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n(35564),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                t.default = function(e) {
                    return "string" == typeof e && i.default.test(e)
                }, e.exports = t.default
            },
            42441: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n(62172),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                t.default = function(e) {
                    if (!(0, i.default)(e)) throw TypeError("Invalid UUID");
                    return parseInt(e.substr(14, 1), 16)
                }, e.exports = t.default
            },
            10080: function(e, t, n) {
                var r = n(52245);
                e.exports = {
                    extendPrototype: function(e, t) {
                        for (var n in t) e.prototype[n] = t[n];
                        return e
                    },
                    isFunction: function(e) {
                        return "function" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    Promise: r,
                    slice: [].slice
                }
            },
            42200: function(e, t, n) {
                var r = n(10080);
                e.exports = function(e, t, n) {
                    return void 0 === n && (n = new Error("time out")), new r.Promise((function(o, i) {
                        setTimeout(i, t, n), r.Promise.resolve(e).then(o, i)
                    }))
                }
            },
            50556: function(e, t, n) {
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                ! function() {
                    "use strict";
                    var t, o, i, a = null,
                        u = "object" === ("undefined" == typeof self ? "undefined" : r(self)),
                        c = u ? self : n.g,
                        l = c.Promise,
                        s = c.process,
                        d = Array,
                        f = "Invalid argument",
                        _ = "rejectionHandled",
                        p = "unhandledRejection",
                        E = {
                            e: a
                        },
                        v = function() {},
                        b = c.Symbol || {},
                        m = u ? function(e) {
                            l ? new l((function(e) {
                                e()
                            })).then(e) : setTimeout(e)
                        } : s.nextTick,
                        A = function(e) {
                            var n, r = this;
                            if (!T(r) || r._s !== t) throw g("Invalid this");
                            if (r._s = 2, e !== v) {
                                if (!S(e)) throw g(f);
                                (n = R(e)(M(r, 1), M(r, 0))) === E && Y(r, 0, n.e)
                            }
                        };

                    function h() {
                        return b.species || "Symbol(species)"
                    }

                    function T(e) {
                        return e && "object" === (void 0 === e ? "undefined" : r(e))
                    }

                    function S(e) {
                        return "function" == typeof e
                    }

                    function I(e, t, n) {
                        if (!t(e)) throw g(n)
                    }

                    function y() {
                        try {
                            return o.apply(i, arguments)
                        } catch (e) {
                            return E.e = e, E
                        }
                    }

                    function R(e, t) {
                        return o = e, i = t, y
                    }

                    function w(e, n) {
                        var r = d(e),
                            o = 0;

                        function i() {
                            for (var i = 0; i < o;) n(r[i], r[i + 1]), r[i++] = t, r[i++] = t;
                            o = 0, r.length > e && (r.length = e)
                        }
                        return function(e, t) {
                            r[o++] = e, r[o++] = t, 2 === o && m(i)
                        }
                    }

                    function O(e, t) {
                        var n, r, o, i, a = 0;
                        if (!e) throw g(f);
                        var u = e[b.iterator];
                        if (S(u)) r = u.call(e);
                        else {
                            if (!S(e.next)) {
                                if (e instanceof d) {
                                    for (n = e.length; a < n;) t(e[a], a++);
                                    return a
                                }
                                throw g(f)
                            }
                            r = e
                        }
                        for (; !(o = r.next()).done;)
                            if ((i = R(t)(o.value, a++)) === E) throw S(r.return) && r.return(), i.e;
                        return a
                    }

                    function g(e) {
                        return new TypeError(e)
                    }
                    A.default = A,
                        function(e, t) {
                            for (var n in t) e.prototype[n] = t[n]
                        }(A, {
                            then: function(e, t) {
                                if (void 0 === this._s) throw g();
                                return function(e, t, n, r) {
                                    S(n) && (t._onFulfilled = n);
                                    S(r) && (e._uh && P(_, e), t._onRejected = r);
                                    e[e._pCount++] = t, 2 !== e._s && L(e, t);
                                    return t
                                }(this, D((n = A, (r = this.constructor) && r[h()] || n)), e, t);
                                var n, r
                            },
                            catch: function(e) {
                                return this.then(t, e)
                            },
                            finally: function(e) {
                                return this.then((function(t) {
                                    return A.resolve(e()).then((function() {
                                        return t
                                    }))
                                }), (function(t) {
                                    return A.resolve(e()).then((function() {
                                        throw t
                                    }))
                                }))
                            },
                            _pCount: 0,
                            _pre: a,
                            _Yaku: 1
                        }), A.resolve = function(e) {
                            return C(e) ? e : V(D(this), e)
                        }, A.reject = function(e) {
                            return Y(D(this), 0, e)
                        }, A.race = function(e) {
                            var t = this,
                                n = D(t),
                                r = function(e) {
                                    Y(n, 1, e)
                                },
                                o = function(e) {
                                    Y(n, 0, e)
                                },
                                i = R(O)(e, (function(e) {
                                    t.resolve(e).then(r, o)
                                }));
                            return i === E ? t.reject(i.e) : n
                        }, A.all = function(e) {
                            var t, n = this,
                                r = D(n),
                                o = [];

                            function i(e) {
                                Y(r, 0, e)
                            }
                            return (t = R(O)(e, (function(e, a) {
                                n.resolve(e).then((function(e) {
                                    o[a] = e, --t || Y(r, 1, o)
                                }), i)
                            }))) === E ? n.reject(t.e) : (t || Y(r, 1, []), r)
                        }, A.allSettled = function(e) {
                            var t, n = this,
                                r = D(n),
                                o = [];
                            return (t = R(O)(e, (function(e, i) {
                                n.resolve(e).then((function(e) {
                                    o[i] = {
                                        status: "fulfilled",
                                        value: e
                                    }, --t || Y(r, 1, o)
                                }), (function(e) {
                                    o[i] = {
                                        status: "rejected",
                                        reason: e
                                    }, --t || Y(r, 1, o)
                                }))
                            }))) === E ? n.reject(t.e) : (t || Y(r, 1, []), r)
                        }, R((function() {
                            Object.defineProperty(A, h(), {
                                get: function() {
                                    return this
                                }
                            })
                        }))(), A._Yaku = 1;
                    var L = w(999, (function(e, n) {
                            var r, o;
                            (o = e._s ? n._onFulfilled : n._onRejected) !== t ? (r = R(x)(o, e._v)) !== E ? V(n, r) : Y(n, 0, r.e) : Y(n, e._s, e._v)
                        })),
                        N = w(9, (function(e) {
                            U(e) || (e._uh = 1, P(p, e))
                        }));

                    function P(e, t) {
                        var n = "on" + e.toLowerCase(),
                            r = c[n];
                        s && s.listeners(e).length ? e === p ? s.emit(e, t._v, t) : s.emit(e, t) : r && r({
                            reason: t._v,
                            promise: t
                        })
                    }

                    function C(e) {
                        return e && e._Yaku
                    }

                    function D(e) {
                        return C(e) ? new e(v) : (t = new e((function(e, o) {
                            if (t) throw g();
                            n = e, r = o
                        })), I(n, S), I(r, S), t);
                        var t, n, r
                    }

                    function M(e, t) {
                        var n = !1;
                        return function(r) {
                            n || (n = !0, 1 === t ? V(e, r) : Y(e, t, r))
                        }
                    }

                    function U(e) {
                        if (e._umark) return !0;
                        e._umark = !0;
                        for (var t, n = 0, r = e._pCount; n < r;)
                            if ((t = e[n++])._onRejected || U(t)) return !0
                    }

                    function x(e, t) {
                        return e(t)
                    }

                    function Y(e, t, n) {
                        var r = 0,
                            o = e._pCount;
                        if (2 === e._s)
                            for (e._s = t, e._v = n, 0 === t && N(e); r < o;) L(e, e[r++]);
                        return e
                    }

                    function V(e, t) {
                        if (t === e && t) return Y(e, 0, g("Chaining cycle detected for promise")), e;
                        if (t !== a && (S(t) || T(t))) {
                            var n = R(k)(t);
                            if (n === E) return Y(e, 0, n.e), e;
                            S(n) ? C(t) ? F(e, t, n) : m((function() {
                                F(e, t, n)
                            })) : Y(e, 1, t)
                        } else Y(e, 1, t);
                        return e
                    }

                    function k(e) {
                        return e.then
                    }

                    function F(e, t, n) {
                        var r = R(n, t)((function(n) {
                            t && (t = a, V(e, n))
                        }), (function(n) {
                            t && (t = a, Y(e, 0, n))
                        }));
                        r === E && t && (Y(e, 0, r.e), t = a)
                    }
                    try {
                        e.exports = A
                    } catch (e) {
                        c.Yaku = A
                    }
                }()
            },
            52245: function(e, t, n) {
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                ! function() {
                    "use strict";
                    var t, o, i, a = null,
                        u = "object" === ("undefined" == typeof self ? "undefined" : r(self)),
                        c = u ? self : n.g,
                        l = c.Promise,
                        s = c.process,
                        d = c.console,
                        f = !1,
                        _ = Array,
                        p = Error,
                        E = "_pt",
                        v = "Invalid argument",
                        b = "rejectionHandled",
                        m = "unhandledRejection",
                        A = {
                            e: a
                        },
                        h = function() {},
                        T = /^.+\/node_modules\/yaku\/.+\n?/gm,
                        S = function(e) {
                            var n, r = this;
                            if (!y(r) || r._s !== t) throw C("Invalid this");
                            if (r._s = 3, f && (r._pt = D()), e !== h) {
                                if (!R(e)) throw C(v);
                                (n = L(e)(k(r, 2), k(r, 1))) === A && B(r, 1, n.e)
                            }
                        };

                    function I() {
                        return S.Symbol.species || "Symbol(species)"
                    }

                    function y(e) {
                        return e && "object" === (void 0 === e ? "undefined" : r(e))
                    }

                    function R(e) {
                        return "function" == typeof e
                    }

                    function w(e, t) {
                        return e instanceof t
                    }

                    function O(e, t, n) {
                        if (!t(e)) throw C(n)
                    }

                    function g() {
                        try {
                            return o.apply(i, arguments)
                        } catch (e) {
                            return A.e = e, A
                        }
                    }

                    function L(e, t) {
                        return o = e, i = t, g
                    }

                    function N(e, n) {
                        var r = _(e),
                            o = 0;

                        function i() {
                            for (var i = 0; i < o;) n(r[i], r[i + 1]), r[i++] = t, r[i++] = t;
                            o = 0, r.length > e && (r.length = e)
                        }
                        return function(e, t) {
                            r[o++] = e, r[o++] = t, 2 === o && S.nextTick(i)
                        }
                    }

                    function P(e, t) {
                        var n, r, o, i, a = 0;
                        if (!e) throw C(v);
                        var u = e[S.Symbol.iterator];
                        if (R(u)) r = u.call(e);
                        else {
                            if (!R(e.next)) {
                                if (w(e, _)) {
                                    for (n = e.length; a < n;) t(e[a], a++);
                                    return a
                                }
                                throw C(v)
                            }
                            r = e
                        }
                        for (; !(o = r.next()).done;)
                            if ((i = L(t)(o.value, a++)) === A) throw R(r.return) && r.return(), i.e;
                        return a
                    }

                    function C(e) {
                        return new TypeError(e)
                    }

                    function D(e) {
                        return (e ? "" : "\nFrom previous ") + (new p).stack
                    }
                    S.default = S,
                        function(e, t) {
                            for (var n in t) e[n] = t[n]
                        }(S.prototype, {
                            then: function(e, t) {
                                if (void 0 === this._s) throw C();
                                return function(e, t, n, r) {
                                    R(n) && (t._onFulfilled = n);
                                    R(r) && (e._uh && x(b, e), t._onRejected = r);
                                    f && (t._p = e);
                                    e[e._c++] = t, 3 !== e._s && M(e, t);
                                    return t
                                }(this, V(S.speciesConstructor(this, S)), e, t)
                            },
                            catch: function(e) {
                                return this.then(t, e)
                            },
                            finally: function(e) {
                                return this.then((function(t) {
                                    return S.resolve(e()).then((function() {
                                        return t
                                    }))
                                }), (function(t) {
                                    return S.resolve(e()).then((function() {
                                        throw t
                                    }))
                                }))
                            },
                            _c: 0,
                            _p: a
                        }), S.resolve = function(e) {
                            return Y(e) ? e : H(V(this), e)
                        }, S.reject = function(e) {
                            return B(V(this), 1, e)
                        }, S.race = function(e) {
                            var t = this,
                                n = V(t),
                                r = function(e) {
                                    B(n, 2, e)
                                },
                                o = function(e) {
                                    B(n, 1, e)
                                },
                                i = L(P)(e, (function(e) {
                                    t.resolve(e).then(r, o)
                                }));
                            return i === A ? t.reject(i.e) : n
                        }, S.all = function(e) {
                            var t, n = this,
                                r = V(n),
                                o = [];

                            function i(e) {
                                B(r, 1, e)
                            }
                            return (t = L(P)(e, (function(e, a) {
                                n.resolve(e).then((function(e) {
                                    o[a] = e, --t || B(r, 2, o)
                                }), i)
                            }))) === A ? n.reject(t.e) : (t || B(r, 2, []), r)
                        }, S.allSettled = function(e) {
                            var t, n = this,
                                r = V(n),
                                o = [];
                            return (t = L(P)(e, (function(e, i) {
                                n.resolve(e).then((function(e) {
                                    o[i] = {
                                        status: "fulfilled",
                                        value: e
                                    }, --t || B(r, 2, o)
                                }), (function(e) {
                                    o[i] = {
                                        status: "rejected",
                                        reason: e
                                    }, --t || B(r, 2, o)
                                }))
                            }))) === A ? n.reject(t.e) : (t || B(r, 2, []), r)
                        }, S.Symbol = c.Symbol || {}, L((function() {
                            Object.defineProperty(S, I(), {
                                get: function() {
                                    return this
                                }
                            })
                        }))(), S.speciesConstructor = function(e, t) {
                            var n = e.constructor;
                            return n && n[I()] || t
                        }, S.unhandledRejection = function(e, t) {
                            d && d.error("Uncaught (in promise)", f ? t.longStack : W(e, t))
                        }, S.rejectionHandled = h, S.enableLongStackTrace = function() {
                            f = !0
                        }, S.nextTick = u ? function(e) {
                            l ? new l((function(e) {
                                e()
                            })).then(e) : setTimeout(e)
                        } : s.nextTick, S._s = 1;
                    var M = N(999, (function(e, n) {
                            var r, o;
                            (o = 1 !== e._s ? n._onFulfilled : n._onRejected) !== t ? (r = L(j)(o, e._v)) !== A ? H(n, r) : B(n, 1, r.e) : B(n, e._s, e._v)
                        })),
                        U = N(9, (function(e) {
                            F(e) || (e._uh = 1, x(m, e))
                        }));

                    function x(e, t) {
                        var n = "on" + e.toLowerCase(),
                            r = c[n];
                        s && s.listeners(e).length ? e === m ? s.emit(e, t._v, t) : s.emit(e, t) : r ? r({
                            reason: t._v,
                            promise: t
                        }) : S[e](t._v, t)
                    }

                    function Y(e) {
                        return e && e._s
                    }

                    function V(e) {
                        return Y(e) ? new e(h) : (t = new e((function(e, o) {
                            if (t) throw C();
                            n = e, r = o
                        })), O(n, R), O(r, R), t);
                        var t, n, r
                    }

                    function k(e, t) {
                        var n = !1;
                        return function(r) {
                            n || (n = !0, f && (e._st = D(!0)), 2 === t ? H(e, r) : B(e, t, r))
                        }
                    }

                    function F(e) {
                        if (e._umark) return !0;
                        e._umark = !0;
                        for (var t, n = 0, r = e._c; n < r;)
                            if ((t = e[n++])._onRejected || F(t)) return !0
                    }

                    function W(e, t) {
                        var n = [];

                        function r(e) {
                            return n.push(e.replace(/^\s+|\s+$/g, ""))
                        }
                        return f && (t._st && r(t._st), function e(t) {
                            t && E in t && (e(t._next), r(t._pt + ""), e(t._p))
                        }(t)), (e && e.stack ? e.stack : e) + ("\n" + n.join("\n")).replace(T, "")
                    }

                    function j(e, t) {
                        return e(t)
                    }

                    function B(e, t, n) {
                        var r = 0,
                            o = e._c;
                        if (3 === e._s)
                            for (e._s = t, e._v = n, 1 === t && (f && w(n, p) && (n.longStack = W(n, e)), U(e)); r < o;) M(e, e[r++]);
                        return e
                    }

                    function H(e, t) {
                        if (t === e && t) return B(e, 1, C("Chaining cycle detected for promise")), e;
                        if (t !== a && (R(t) || y(t))) {
                            var n = L(G)(t);
                            if (n === A) return B(e, 1, n.e), e;
                            R(n) ? (f && Y(t) && (e._next = t), Y(t) ? Z(e, t, n) : S.nextTick((function() {
                                Z(e, t, n)
                            }))) : B(e, 2, t)
                        } else B(e, 2, t);
                        return e
                    }

                    function G(e) {
                        return e.then
                    }

                    function Z(e, t, n) {
                        var r = L(n, t)((function(n) {
                            t && (t = a, H(e, n))
                        }), (function(n) {
                            t && (t = a, B(e, 1, n))
                        }));
                        r === A && t && (B(e, 1, r.e), t = a)
                    }
                    try {
                        e.exports = S
                    } catch (e) {
                        c.Yaku = S
                    }
                }()
            },
            62200: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LOCAL_BLADEX_SERVER = t.LOGZIO_API_TOKEN = t.PAYMENT_METHOD = t.MAX_MOBILE_PORTRAIT_WIDTH = t.FLOATING_HEADER_ZINDEX = t.FLOATING_HEADER_VIDEO_RATIO = t.RATE_LISTENER_FORMATS = t.STICKY_TYPES = t.AUCTION_TYPES = t.AUCTION_ENDPOINT = t.APS_PARAMS = t.AUCTION_EVENTS = t.AD_POD_EVENTS = t.APS_EVENTS = t.BULK_REPORT_SETTINGS = t.REPORTED_PLAYER_MACROS = t.MOBILE_CLASS = t.DEFAULT_STICKY_MOBILE_HEIGHT = t.DEFAULT_STICKY_MOBILE_WIDTH = t.DEFAULT_STICKY_DESKTOP_HEIGHT = t.DEFAULT_STICKY_DESKTOP_WIDTH = t.ENVIRONMENTS = t.PLAYER_TYPE = t.DEVICE_TYPE = t.STATE_CLASSES = t.VOLUME_RATIO = t.PLAYER_DURATION_MAX_INTERVAL_AMOUNT = t.PLAYER_DURATION_INTERVAL_MS = t.MAX_CONTENT_TITLE_LENGTH = t.HLS_CONTENT_TYPE = t.MIN_TIME_SHOW_CONTROL_BAR = t.UNKNOWN_TIME = t.MAX_LOOPS = t.KNOWN_FLASH_AD_VOLUME_METHODS = t.DEFAULT_IN_SLIDE_CLOSE_BUTTON_STYLE = t.CUSTOM_IN_SLIDE_CLOSE_BUTTON_STYLES = t.DEFAULT_SKIP_TIME = t.DEFAULT_SKIP_TEXT = t.DEFAULT_SKIP_COUNTING_TEXT = t.AD_BLOCK_DETECT_URL = t.ADAPTER_PARAMS = t.PBJS_ADAPTER_TYPES = t.IN_HOUSE_BIDDERS = t.CONTAINER_TYPES = t.AD_UNIT_PROPS = t.WRAPPER_DEFAULT_MIMES = t.WRAPPER_DEFAULT_CMP_TIMEOUT = t.WRAPPER_DEFAULT_CMP_API = t.WRAPPER_DEFAULT_CONTEXT = t.WRAPPER_DEFAULT_LOOP_COUNT = t.WRAPPER_MAX_FLOOR = t.WRAPPER_MIN_FLOOR = t.WRAPPER_DEFAULT_TIME_BETWEEN_LOOPS = t.WRAPPER_DEFAULT_BIDDER_TIMEOUT = t.WRAPPER_DEFAULT_HEIGHT = t.WRAPPER_DEFAULT_WIDTH = t.WRAPPER_LOADER_HOST = t.WRAPPER_HOST = t.WRAPPER_AD_SOURCE_TYPES = t.WRAPPER_MRKT_RTB_SUB_ID = t.WRAPPER_DEFAULT_SUB_ID = t.WRAPPER_DEFAULT_PLAYER_SUB_ID = t.PREBID_LIBRARY_EVENTS = t.PREBID_MODULES_NAMES = t.WRAPPER_EVENTS = t.WRAPPER_REPORT_EVENTS = t.BID_CACHE_VALUE_MAPPING = t.REQUIRED_AD_TAG_PARAMS = t.SCHEDULING_TYPES = t.PLUGINS_EVENTS = t.PLAYER_EVENTS = t.CONTENT_PLAYER_EVENTS = t.END_CARD_EVENTS = t.ADS_PLAYER_EVENTS = t.SKIP_BUTTON_EVENTS = t.CONTROL_BAR_EVENTS = t.PLAYER_VERSION = void 0;
                var r, o = n(19982),
                    i = (r = o) && r.__esModule ? r : {
                        default: r
                    };
                t.PLAYER_VERSION = "3559", t.CONTROL_BAR_EVENTS = {
                    playControlClicked: "playControlClicked",
                    pauseControlClicked: "pauseControlClicked",
                    prevControlClicked: "prevControlClicked",
                    nextControlClicked: "nextControlClicked",
                    muteControlClick: "muteControlClick",
                    unmuteControlClick: "unmuteControlClick",
                    volumeControlChange: "volumeControlChange",
                    progressBarClick: "progressBarClick",
                    fullScreenControlClick: "fullScreenControlClick",
                    fullScreenChange: "fullScreenChange",
                    screenOrientationChange: "screenOrientationChange"
                }, t.SKIP_BUTTON_EVENTS = {
                    skipButtonClicked: "skipButtonClicked",
                    skippableStateChange: "skippableStateChange"
                }, t.ADS_PLAYER_EVENTS = {
                    loopend: "loopend",
                    adpodend: "adpodend"
                }, t.END_CARD_EVENTS = {
                    EndCardView: "EndCardView",
                    EndCardClick: "EndCardClick"
                }, t.CONTENT_PLAYER_EVENTS = {
                    contentloopend: "contentloopend",
                    contentend: "contentend",
                    contentstart: "contentstart"
                }, t.PLAYER_EVENTS = {
                    playerDone: "playerDone",
                    playerReady: "playerReady",
                    playerNoAds: "playerNoAds",
                    playerAdBlock: "playerAdBlock",
                    playerContentDone: "playerContentDone",
                    closeButtonClick: "closeButtonClick"
                }, t.PLUGINS_EVENTS = {
                    viewportchange: "viewportchange",
                    viewabilitychange: "viewabilitychange",
                    viewable: "viewable",
                    nonviewable: "nonviewable",
                    intextreveal: "intextreveal",
                    intextfold: "intextfold",
                    stickychange: "stickychange",
                    stick: "stick",
                    unstick: "unstick",
                    slideChange: "slidechange",
                    slideIn: "slidein",
                    slideOut: "slideout",
                    interstitialReady: "interstitialready",
                    interstitialComplete: "interstitialcomplete",
                    interstitialExpired: "interstitialexpired",
                    interstitialNoFill: "interstitialnofill",
                    clickToPlayThumbnailCreated: "clicktoplaythumbnailcreated",
                    clickToPlayDisposed: "clicktoplaydisposed"
                }, t.SCHEDULING_TYPES = {
                    breakingAds: "breakingAds",
                    adsOnly: "",
                    preRoll: "preRoll"
                }, t.REQUIRED_AD_TAG_PARAMS = ["id", "url", "rate", "cost", "sub"], t.BID_CACHE_VALUE_MAPPING = {
                    cost: "c",
                    demand: "bas",
                    id: "i",
                    rate: "r",
                    sub: "si",
                    ttl: "ttl",
                    type: "ast",
                    url: "u",
                    bidId: "bi",
                    wrapperVersion: "wv",
                    adapterId: "bai",
                    blscore: "bs",
                    blflow: "blf",
                    externalLoop: "el",
                    parentAdSource: "p",
                    of: "of",
                    auctionType: "aut"
                }, t.WRAPPER_REPORT_EVENTS = {
                    auctionStart: "wam",
                    bidRequest: "wreq",
                    bid: "wbid",
                    noBid: "wnobid",
                    bidTimeout: "wtimeout",
                    bidWin: "wwin"
                }, t.WRAPPER_EVENTS = {
                    prebidInit: "prebidInit",
                    auctionStart: "auctionStart",
                    auctionEnd: "auctionEnd",
                    bid: "bid",
                    noBid: "noBid",
                    bidWin: "bidWin",
                    bidTimeout: "bidTimeout",
                    bidRequest: "bidRequest"
                }, t.PREBID_MODULES_NAMES = {
                    yahooAdapter: "yahoossp"
                }, t.PREBID_LIBRARY_EVENTS = {
                    auctionDebug: "auctionDebug",
                    auctionInit: "auctionInit",
                    auctionEnd: "auctionEnd",
                    bidderDone: "bidderDone",
                    bidWon: "bidWon",
                    bidTimeout: "bidTimeout",
                    bidRequested: "bidRequested"
                }, t.WRAPPER_DEFAULT_PLAYER_SUB_ID = "wr-mrkt", t.WRAPPER_DEFAULT_SUB_ID = "wr", t.WRAPPER_MRKT_RTB_SUB_ID = "wr-mrkt-rtb", t.WRAPPER_AD_SOURCE_TYPES = {
                    ADAPTER: "adapter",
                    IN_HOUSE: "rise marketplace"
                }, t.WRAPPER_HOST = "https://" + i.default.remoteConfig2 + "/wrapper", t.WRAPPER_LOADER_HOST = "streamrail", t.WRAPPER_DEFAULT_WIDTH = 640, t.WRAPPER_DEFAULT_HEIGHT = 480, t.WRAPPER_DEFAULT_BIDDER_TIMEOUT = 3e3, t.WRAPPER_DEFAULT_TIME_BETWEEN_LOOPS = 2, t.WRAPPER_MIN_FLOOR = .5, t.WRAPPER_MAX_FLOOR = 500, t.WRAPPER_DEFAULT_LOOP_COUNT = 5e3, t.WRAPPER_DEFAULT_CONTEXT = "instream", t.WRAPPER_DEFAULT_CMP_API = "iab", t.WRAPPER_DEFAULT_CMP_TIMEOUT = 3e3, t.WRAPPER_DEFAULT_MIMES = ["application/javascript", "video/mp4", "video/quicktime"], t.AD_UNIT_PROPS = {
                    POSITION: "position",
                    PLACEMENT: "placement",
                    LINEARITY: "linearity",
                    SKIP: "skip",
                    MIMES: "mimes"
                }, t.CONTAINER_TYPES = {
                    CLASS: "class",
                    ID: "id"
                }, t.IN_HOUSE_BIDDERS = {
                    rise: "rise"
                }, t.PBJS_ADAPTER_TYPES = {
                    MRKT: 1,
                    SAAS: 0
                }, t.ADAPTER_PARAMS = {
                    TYPE: "type",
                    ADAPTER_ID: "adapterID",
                    SCORE: "score",
                    REPORT: "report",
                    PARENT: "parent"
                }, t.AD_BLOCK_DETECT_URL = "hi", t.DEFAULT_SKIP_COUNTING_TEXT = "Skip in", t.DEFAULT_SKIP_TEXT = "Skip Ad", t.DEFAULT_SKIP_TIME = 5, t.CUSTOM_IN_SLIDE_CLOSE_BUTTON_STYLES = {
                    "5ae6dc69487bb70002000001": "sr-bladex-in-slide-close-button-redbrick",
                    "6196700b1a087d00017b6f05": "sr-bladex-in-slide-close-button-redbrick"
                }, t.DEFAULT_IN_SLIDE_CLOSE_BUTTON_STYLE = "sr-bladex-in-slide-close-button", t.KNOWN_FLASH_AD_VOLUME_METHODS = ["lkqdSetAdVolume", "videe_setAdVolume"], t.MAX_LOOPS = 1 / 0, t.UNKNOWN_TIME = -2, t.MIN_TIME_SHOW_CONTROL_BAR = 3e3, t.HLS_CONTENT_TYPE = "application/vnd.apple.mpegurl", t.MAX_CONTENT_TITLE_LENGTH = 80, t.PLAYER_DURATION_INTERVAL_MS = 15e3, t.PLAYER_DURATION_MAX_INTERVAL_AMOUNT = 20, t.VOLUME_RATIO = 100, t.STATE_CLASSES = {
                    VOLUME_MUTE: "sr-blade-mute",
                    VOLUME_UNMUTE: "sr-blade-volume",
                    VIDEO_PLAY: "sr-blade-play",
                    VIDEO_PAUSE: "sr-blade-pause",
                    FLOATING_STICKY: "sr-floating-sticky"
                }, t.DEVICE_TYPE = {
                    mobile: "mw",
                    console: "ctv",
                    tablet: "mw",
                    smarttv: "ctv",
                    wearable: "ctv",
                    undefined: "d"
                }, t.PLAYER_TYPE = {
                    ADS: "ads",
                    CONTENT: "content"
                }, t.ENVIRONMENTS = {
                    DESKTOP: "d",
                    MOBILE: "mw"
                }, t.DEFAULT_STICKY_DESKTOP_WIDTH = 400, t.DEFAULT_STICKY_DESKTOP_HEIGHT = 225, t.DEFAULT_STICKY_MOBILE_WIDTH = 300, t.DEFAULT_STICKY_MOBILE_HEIGHT = 169, t.MOBILE_CLASS = "-mobile", t.REPORTED_PLAYER_MACROS = {
                    param0: "p0",
                    param1: "p1",
                    param2: "p2",
                    param3: "p3",
                    param4: "p4",
                    param5: "p5",
                    param6: "p6",
                    param7: "p7",
                    param8: "p8",
                    param9: "p9"
                }, t.BULK_REPORT_SETTINGS = {
                    endpoint: i.default.collectorBulk,
                    noBufferEvents: ["ai"],
                    maxBufferTime: 5e3,
                    maxBufferSize: 25
                }, t.APS_EVENTS = {
                    noBid: "aNoBid",
                    bidTimeout: "aTimeout",
                    bidRequest: "aam",
                    bid: "abid"
                }, t.AD_POD_EVENTS = {
                    clearCurrent: "clearCurrent"
                }, t.AUCTION_EVENTS = {
                    playerAuctionStart: "playerAuctionStart",
                    playerAuctionEnd: "playerAuctionEnd"
                }, t.APS_PARAMS = {
                    ENDPOINT_URL: "//c.amazon-adsystem.com/aax2/apstag.js",
                    DEBUG_PARAM: "amzn_debug_mode=1",
                    TIMEOUT: 3e3,
                    PRE_ROLL: "preroll",
                    VIDEO_MEDIA_TYPE: "video",
                    TIME_BETWEEN_LOOPS: 2,
                    AD_SOURCE_TYPE: "aps",
                    VIDEO_AD_SERVER: "DFP",
                    COMPONENT: "aps",
                    SUB_ID: "wr-aps",
                    TTL: 1800,
                    BASE_VAST_URL: "https://aax.amazon-adsystem.com/e/dtb/vast",
                    DEFAULT_LOOP_COUNT: 5e3,
                    DEBUG_SLOT_ID: "videoSlot",
                    DEBUG_PLAYER_SIZE_ARRAY: [640, 390],
                    DEFAULT_PLAYER_WIDTH: 640,
                    DEFAULT_PLAYER_HEIGHT: 390,
                    BAS: "amazon",
                    DEMAND: "amazon"
                }, t.AUCTION_ENDPOINT = "https://api.vidiom.net/fd", t.AUCTION_TYPES = {
                    AMAZON: "aps",
                    PREBID: "pb",
                    WATERFALL: "wf"
                }, t.STICKY_TYPES = {
                    REGULAR: "rglr",
                    FLOATING_HEADER: "fh"
                }, t.RATE_LISTENER_FORMATS = {
                    ADITUDE: "aditude",
                    DEFAULT: "default"
                }, t.FLOATING_HEADER_VIDEO_RATIO = "16:9", t.FLOATING_HEADER_ZINDEX = 99999999999, t.MAX_MOBILE_PORTRAIT_WIDTH = 480, t.PAYMENT_METHOD = {
                    FIXED_PRICE: "fixed",
                    REV_SHARE: "revShare"
                }, t.LOGZIO_API_TOKEN = "NoaDlaiRMdpRnCDtyTklOuHsSKJxByJU", t.LOCAL_BLADEX_SERVER = "http://localhost:9002"
            },
            64358: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.formatTime = t.createControl = t.safeMediaMethod = t.waitForEvent = t.canAutoplay = void 0, t.createContainerWithStyles = function(e) {
                    var t = document.createElement("div");
                    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.width = "100%", t.style.height = "100%", t.style.zIndex = 0, e && (0, r.default)(t, e);
                    return t
                }, t.createPlayerOutsideIframe = function(e, t) {
                    return new l.default((function(n) {
                        var r = window.top,
                            o = window,
                            i = (0, m.v1)(),
                            a = L(e),
                            u = document.createElement("script");
                        if (u.src = a, r.srAsyncInit = function() {
                                var e = r.SR(t),
                                    n = o["sr_player_cb_" + i];
                                "function" == typeof n && n(e)
                            }, "function" == typeof t.getElementById) {
                            var c = "sr_player_getElementById_" + i,
                                l = "sr_player_getElementById_" + i;
                            window[c] = t.getElementById, window[l] = t.querySelector, t = (0, h.default)(!0, t, {
                                getElementById: "window.top.document." + c,
                                querySelector: "window.top.document." + l
                            })
                        }
                        window["sr_player_cb_" + i] = function(e) {
                            e.then((function(e) {
                                n(e)
                            }))
                        }, r.document.body.appendChild(u)
                    }))
                }, t.createPlayerInIframe = function(e, t, n) {
                    return new l.default((function(r, o) {
                        var i = t.getElementById(t.containerID);
                        if (t.containerID && n && !i) o(new Error("Cannot find an element with id: " + t.containerID));
                        else {
                            i = i || document.body;
                            var l = L(e),
                                d = (0, m.v1)(),
                                f = (0, a.default)(d, t.width, t.height);
                            if ("function" == typeof t.getElementById) {
                                var _ = "sr_player_getElementById_" + d;
                                window[_] = t.getElementById, t = (0, h.default)(!0, t, {
                                    getElementById: "parent." + _
                                })
                            }
                            var p = {
                                srJsPath: l,
                                iframeID: d,
                                options: JSON.stringify(t)
                            };
                            window["sr_player_cb_" + d] = function(e) {
                                e.then((function(e) {
                                    f.width = e.width, f.height = e.height, r(e)
                                }))
                            }, i.innerHTML = "", i.appendChild(f), (0, u.default)(f, (0, c.default)(s.default, p))
                        }
                    }))
                }, t.createSamIframe = function(e) {
                    var t = e.width,
                        n = e.height,
                        r = e.scriptNamePrefix,
                        o = e.container,
                        i = e.loadSrVideo;
                    return new l.default((function(e) {
                        var l = "";
                        if (i) {
                            var s = L(r);
                            l = '<script src="' + (s.substring(0, s.lastIndexOf("/")) + "/srv.js") + '"><\/script>'
                        }
                        var f = (0, m.v1)(),
                            _ = (0, a.default)(f, t, n),
                            p = {
                                srvScriptTag: l,
                                iframeID: f
                            };
                        window["sam_cb_" + f] = function() {
                            e(_), delete window["sam_cb_" + f], _ = null
                        }, o.appendChild(_), (0, u.default)(_, (0, c.default)(d.default, p))
                    }))
                }, t.htmlDecode = function(e) {
                    var t = document.createElement("a");
                    return t.innerHTML = e, t.textContent
                }, t.findIFrames = function e(t, n) {
                    n = n || [], t && t.querySelectorAll && Array.prototype.slice.call(t.querySelectorAll("iframe"), 0).forEach((function(t) {
                        try {
                            t && t.contentDocument && (n.push(t.contentDocument), e(t.contentDocument, n))
                        } catch (e) {}
                    }));
                    return n
                }, t.silenceNoisyElements = function(e) {
                    e && e.querySelectorAll && (Array.prototype.slice.call(e.querySelectorAll("object"), 0).forEach((function(e) {
                        f.KNOWN_FLASH_AD_VOLUME_METHODS.forEach((function(t) {
                            "function" == typeof e[t] && e[t](0)
                        }))
                    })), Array.prototype.slice.call(e.querySelectorAll("video, sr-video, audio"), 0).forEach((function(e) {
                        e.volume = 0, e.muted = !0, e.setAttribute("muted", "muted")
                    })))
                }, t.oneTimeCall = function(e) {
                    var t = !1,
                        n = e.name || "oneTimeWrapped";
                    return function(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n;
                        return e
                    }({}, n, (function() {
                        t || (t = !0, e.apply(void 0, arguments))
                    }))[n]
                }, t.rafify = function(e) {
                    return e.reverse().reduce((function(e, t) {
                        return function() {
                            return requestAnimationFrame((function() {
                                t(), e()
                            }))
                        }
                    }), (function() {}))()
                }, t.getStyle = function(e, t) {
                    t ? t.forEach || (t = Object.keys(t)) : t = [];
                    return t.reduce((function(t, n) {
                        return t[n] = e.style[n], t
                    }), {})
                }, t.setStyle = function(e, t) {
                    Object.keys(t).forEach((function(n) {
                        void 0 === t[n] || null === t[n] || "" === t[n] ? e.style[n] = null : e.style[n] = t[n]
                    }))
                }, t.clearStyle = function(e, t) {
                    t && (t.forEach || (t = Object.keys(t)), t.forEach((function(t) {
                        e.style[t] = null
                    })))
                }, t.proxify = function(e) {
                    if ("function" == typeof window.Proxy) return new window.Proxy(e, {
                        get: function(e, t) {
                            return e[t]
                        },
                        set: function(e, t, n) {
                            return e[t] = n, !0
                        }
                    });
                    return e
                }, t.createCloseButton = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.position,
                        o = t.floating,
                        i = document.createElement("div"),
                        a = "";
                    a = "left" === n ? "sr-blade-close-button-left" : "sr-blade-close-button-right", (0, r.default)(i, "sr-blade-close-button"), (0, r.default)(i, a), o && (0, r.default)(i, "sr-blade-close-button-floating");
                    e && (0, r.default)(i, e);
                    return i
                }, t.addRemoveListener = function(e, t, n, r) {
                    "add" === e && n.forEach((function(e) {
                        return t.addEventListener(e, r)
                    }));
                    "remove" === e && n.forEach((function(e) {
                        return t.removeEventListener(e, r)
                    }))
                }, t.getUserOs = function() {
                    var e = new A.default(window.navigator.userAgent).getResult();
                    return e.os ? e.os.name : ""
                }, t.getUserBrowser = function() {
                    return new A.default(window.navigator.userAgent).getBrowser()
                }, t.getUserAgentData = N, t.createNewEvent = function(e) {
                    var t;
                    "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0);
                    return t
                }, t.checkEnvCompatibility = function(e) {
                    var t = f.DEVICE_TYPE[N().device.type];
                    if (e.includes(t)) return !0;
                    return console.log("currEnv: " + t + ", injectedEnvs: " + e.toString()), !1
                }, t.setAdSource = function(e, t) {
                    var n = window.risePlayerInstances && window.risePlayerInstances[t];
                    if (n) return void n.loadAdTag(e);
                    window.riseScheduledAdSources || (window.riseScheduledAdSources = {});
                    window.riseScheduledAdSources[t] || (window.riseScheduledAdSources[t] = []);
                    window.riseScheduledAdSources[t].push(e)
                }, t.getCurrentPlayerSize = function(e) {
                    var t = {
                            width: f.APS_PARAMS.DEFAULT_PLAYER_WIDTH,
                            height: f.APS_PARAMS.DEFAULT_PLAYER_HEIGHT
                        },
                        n = window.risePlayerInstances && window.risePlayerInstances[e];
                    n && (t.width = n.currentWidth, t.height = n.currentHeight);
                    return t
                }, t.loadExternalLibrariesToPage = function() {
                    var e = [];
                    ["/games/justfall/IIQUniversalID.js"].forEach((function(t) {
                        document.querySelectorAll('script[src="' + t + '"]').length || e.push(t)
                    })), e.forEach((function(e) {
                        var t = document.createElement("script");
                        t.type = "text/javascript", t.setAttribute("async", !1), t.src = e, document.head.appendChild(t)
                    }))
                }, t.onVisibilityChange = function(e) {
                    var t = "",
                        n = "";
                    void 0 !== document.hidden ? (t = "hidden", n = "visibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", n = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", n = "webkitvisibilitychange");
                    document.addEventListener(n, (function() {
                        e(t)
                    }))
                }, t.doAmazonAuction = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return new l.default((function(r) {
                        var o = [].concat(O(t), O(n)),
                            i = P(t, n),
                            a = f.AUCTION_ENDPOINT + "/" + e;
                        (0, T.default)(a, i).then((function(e) {
                            var t = o.find((function(t) {
                                return t.bi === e.i || t.i === e.i || t.id === e.i
                            }));
                            e && e.i ? (e.c && (t.c = e.c), e.dc && (t.dr = e.dc), r(t)) : r()
                        }))
                    }))
                }, t.initTracker = function(e) {
                    var t = (0, b.default)(),
                        n = (0, v.default)((0, E.default)(t)),
                        r = (0, S.default)(e, "ads.schedule[0].server.tag.adParams.qs") || {},
                        o = (0, S.default)(e, "ads.schedule[0].server.tag.adParams.m"),
                        i = (0, S.default)(e, "ads.schedule[0].server.tag.adParams.z.ts"),
                        a = new I.default;
                    a.setBuffering(f.BULK_REPORT_SETTINGS);
                    var u = {
                        browser: r.br,
                        browserversion: r.brv,
                        env: r.env,
                        denv: r.denv || (0, _.default)(),
                        dt: r[y.QUERY_PARAMS.DEVICE_TYPE],
                        domain: n,
                        ddomain: n,
                        org: e.apiKey,
                        os: r.os,
                        osversion: r.osv,
                        pageurl: t,
                        player_ver: e.playerVersion,
                        playerid: e.playerId,
                        pv: e.pv,
                        sd: r[y.QUERY_PARAMS.SUBDIRECTORY],
                        sid: e.sessionID,
                        stat: r[y.QUERY_PARAMS.STATE],
                        width: e.width,
                        height: e.height,
                        playersize: (0, R.default)(e.width, e.height),
                        dwidth: e.width,
                        dheight: e.height,
                        dplayersize: (0, R.default)(e.width, e.height),
                        module_version: o,
                        tc: (0, S.default)(e, "ads.schedule[0].server.tag.tc") || "",
                        ts: i,
                        wri: r[y.QUERY_PARAMS.WRAPPER_ID],
                        wv: e.wrapperVersion,
                        version: f.PLAYER_VERSION
                    };
                    return {
                        track: function(e) {
                            a.info((0, h.default)(u, e))
                        }
                    }
                }, t.getContainerBySelectorType = function(e) {
                    if (e.containerType === f.CONTAINER_TYPES.CLASS) return e.querySelector ? e.querySelector("." + e.containerID) : document.querySelector("." + e.containerID);
                    return window.__SR_IFRAME_BY_OPTIONS__ || !e.getElementById ? document.getElementById(e.containerID) : e.getElementById(e.containerID)
                }, t.reportAuctionEvent = function(e, t, n, r, o) {
                    var i = "https://listener.logz.io:8071/?type=auction&token=" + f.LOGZIO_API_TOKEN,
                        a = new A.default(window.navigator.userAgent),
                        u = a.getBrowser(),
                        c = u.name,
                        l = u.major,
                        s = a.getOS().name,
                        d = {
                            action: e,
                            denv: (0, S.default)(t, "ads.schedule[0].server.tag.v.qs.denv") || (0, _.default)(),
                            org: t.apiKey,
                            playerId: t.playerId,
                            sid: t.sessionID,
                            playerVer: t.playerVersion,
                            loop: n.globalLoop,
                            pv: t.pv,
                            scheduling: t.scheduling,
                            wv: t.wrapperVersion,
                            os: s,
                            browser: c,
                            bv: l
                        };
                    r && (d.auctionType = r.type, d.adSourceId = r.adSourceId, d.subId = r.subId, d.rate = isNaN(parseFloat(r.rate)) ? 0 : r.rate);
                    o && (d.msg = o);
                    (0, T.default)(i, d).then((function() {})).catch((function() {}))
                };
                var r = w(n(54017)),
                    o = w(n(67968)),
                    i = w(n(38186)),
                    a = w(n(88686)),
                    u = w(n(37279)),
                    c = w(n(59805)),
                    l = w(n(39057)),
                    s = w(n(39058)),
                    d = w(n(40320)),
                    f = n(62200),
                    _ = w(n(84255)),
                    p = w(n(97822)),
                    E = w(n(76424)),
                    v = w(n(9597)),
                    b = w(n(93188)),
                    m = n(22538),
                    A = w(n(39434)),
                    h = w(n(40040)),
                    T = w(n(13356)),
                    S = w(n(47957)),
                    I = w(n(60335)),
                    y = n(84452),
                    R = w(n(45502));

                function w(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function O(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                var g;
                t.canAutoplay = (g = void 0, function(e) {
                    return "boolean" == typeof g ? l.default.resolve(g) : (0, p.default)(e).then((function(e) {
                        return g = e, e
                    }))
                }), t.waitForEvent = function(e) {
                    var t = e.element,
                        n = e.event,
                        r = e.timeout;
                    return new l.default((function(e) {
                        var o = !1,
                            i = null,
                            a = function() {
                                o || (o = !0, clearInterval(i), t.removeEventListener(n, a), e(), a = null)
                            };
                        i = setTimeout(a, r), t.addEventListener(n, a, {
                            once: !0
                        })
                    }))
                }, t.safeMediaMethod = function(e, t) {
                    var n = e[t]();
                    return n && n.catch && n.catch((function() {})), n
                }, t.createControl = function() {
                    var e = document.createElement("div");
                    return (0, r.default)(e, "sr-blade-control"), e
                }, t.formatTime = function(e) {
                    try {
                        e = parseInt(e, 10);
                        var t = parseInt(e / 60, 10) % 60;
                        if (isNaN(e) || isNaN(t)) return "0:00";
                        var n = e % 60;
                        return t + ":" + (n = n > 9 ? n.toString() : 0 !== n ? "0" + n : "00")
                    } catch (e) {
                        return "0:00"
                    }
                };

                function L(e) {
                    return (0, o.default)(e) || function(e) {
                        return (0, i.default)() + "/blade/" + e + ("." !== e[e.length - 1] ? "." : "") + "js"
                    }(e)
                }

                function N() {
                    return new A.default(window.navigator.userAgent).getResult()
                }

                function P(e, t) {
                    var n = e.map((function(e) {
                        return {
                            i: e.bi || e.id,
                            r: e.r || e.rate,
                            t: 1
                        }
                    }));
                    return t && t.length && t.forEach((function(e) {
                        n.push({
                            i: e.id,
                            r: e.rate.toString()
                        })
                    })), n
                }
            },
            39058: function(e, t, n) {
                "use strict";
                n.r(t), t.default = '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <style>\n        html, body {\n            height: 100%;\n            width: 100%;\n        }\n        body {\n            margin: 0;\n            padding: 0;\n        }\n    </style>\n</head>\n<body>\n<script>\n    window.__SR_IFRAME_BY_OPTIONS__ = true;\n    window.srAsyncInit = function() {\n        var player = SR({{options}});\n        var parentCallback = parent["sr_player_cb_{{iframeID}}"];\n\n\t\tif (typeof parentCallback === \'function\'){\n\t\t\tparentCallback(player);\n\t\t}\n    };\n<\/script>\n<script type="text/javascript" src="{{srJsPath}}"><\/script>\n</body>\n</html>\n'
            },
            40320: function(e, t, n) {
                "use strict";
                n.r(t), t.default = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <style>\n        html,\n        body {\n            height: 100%;\n            width: 100%;\n        }\n\n        body {\n            margin: 0;\n            padding: 0;\n        }\n\n        video::-webkit-media-controls-start-playback-button {\n            display: none !important;\n        }\n\n        video::-webkit-media-controls {\n            display: none !important;\n            -webkit-appearance: none !important;\n        }\n    </style>\n</head>\n\n<body>\n    <div id=\"sambladeslot\"></div>\n\n    {{srvScriptTag}}\n\n    <script>\n        (function(){\n            var parentCallback = parent[\"sam_cb_{{iframeID}}\"];\n            if (typeof parentCallback === 'function') {\n                parentCallback(window);\n            }\n            window.sam_cb_resizeVideoSlot = function(width, height, isFullScreen) {\n                var video = this.querySelector('video, sr-video')\n                if (video) {\n                    video.style.width = isFullScreen ? '100%' : width + 'px';\n                    video.style.height = isFullScreen ? '100%' : height + 'px';\n                    video.width = isFullScreen ? '100%' : width;\n                    video.height = isFullScreen ? '100%' : height;\n                }\n            }.bind(document)\n        })()\n    <\/script>\n\n    <script>\n        var LOGGER_ENDPOINT = 'https://listener.logz.io:8071/?type=heavy-ads';\n        var srAdSource = null;\n        var srToken = null;\n\n        function sendHeavyAdsReport(reports) {\n            for (var i = 0; i <= reports.length; i++) {\n                var report = reports[i];\n                if (report) {\n                    var adSourceData = srAdSource;\n                    adSourceData.msg = report.body.message\n\n                    var adSourceDataBlob = JSON.stringify(adSourceData);\n                    var loggerUrl = LOGGER_ENDPOINT + \"&token=\" + srToken;\n                    parent.navigator.sendBeacon(loggerUrl, adSourceDataBlob);\n                }\n            }\n        }\n\n        if (isReportingAPISupported()) {\n            var observer = new ReportingObserver(function (reports) {\n                sendHeavyAdsReport(reports);\n            }, { types: ['intervention'], buffered: true });\n\n            observer.observe();\n\n            window.addEventListener('unload', processUnload);\n            window.addEventListener('message', processMessage)\n\n            function processUnload() {\n                var reports = observer.takeRecords();\n                sendHeavyAdsReport(reports);\n                window.removeEventListener('unload', processUnload);\n                window.removeEventListener('message', processMessage);\n            }\n\n            function processMessage(event) {\n                if (event.data && event.data.srAdSource && event.data.token) {\n                    srAdSource = event.data.adSource;\n                    srToken = event.data.token;\n                }\n            }\n        }\n\n        function isReportingAPISupported() {\n            return 'ReportingObserver' in window;\n        }\n\n\n    <\/script>\n</body>\n\n</html>\n"
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r](i, i.exports, n), i.loaded = !0, i.exports
    }
    n.amdD = function() {
            throw new Error("define cannot be used indirect")
        }, n.amdO = {}, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                t = function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = n(22538),
                o = b(n(39434)),
                i = b(n(35136)),
                a = b(n(9597)),
                u = b(n(93188)),
                c = b(n(76424)),
                l = b(n(5260)),
                s = b(n(84255)),
                d = b(n(39057)),
                f = b(n(89852)),
                _ = b(n(38420)),
                p = b(n(4196)),
                E = n(62200),
                v = n(64358);

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var m, A, h, T = (m = function() {
                    var e = x().src;
                    if (!e) throw new Error("Cannot load wrapper loader script");
                    return e.split("?").pop()
                }(), (0, i.default)(m)),
                S = T.org,
                I = T.wrapper_id,
                y = T.player_callbacks,
                R = T.player_settings,
                w = T.player_ver,
                O = T.prebid_config,
                g = T.rate_callback,
                L = T.print_settings,
                N = T.local_bladex,
                P = T.wv || "3559",
                C = (A = "{{.TestModeUrl}}", T.testModeUrl || (A.includes("{.TestModeUrl}") ? "" : A)),
                D = void 0,
                M = void 0,
                U = void 0;

            function x() {
                return document.currentScript ? document.currentScript : function() {
                    for (var e = {}, t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) - 1 === t[n].src.indexOf(E.WRAPPER_LOADER_HOST) && -1 === t[n].src.indexOf("localhost") || (e = t[n]);
                    return e
                }()
            }

            function Y(t) {
                return t ? "?" + ("object" === (void 0 === t ? "undefined" : e(t)) ? function(e) {
                    var t = "";
                    for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                    return t = t.replace(/&$/, "")
                }(t) : t) : ""
            }(0, v.loadExternalLibrariesToPage)(), (h = [(0, l.default)(E.AD_BLOCK_DETECT_URL), (0, f.default)(), (0, _.default)()].map((function(e) {
                return e.catch((function() {
                    return null
                }))
            })), d.default.all(h)).then((function(e) {
                var n, i, l, d, f, _, v, b = t(e, 3),
                    m = b[0],
                    A = b[1],
                    h = b[2];
                if (m) return n = (0, u.default)(), i = (0, a.default)((0, c.default)(n)), l = new o.default(window.navigator.userAgent), d = l.getBrowser(), f = d.name, _ = d.major, v = l.getOS().name, void(0, p.default)({
                    component: "adsmanager",
                    browser: f,
                    browserversion: _,
                    denv: (0, s.default)(),
                    os: v,
                    org: S,
                    wrapperid: I,
                    wrapperversion: P,
                    pageurl: n,
                    ddomain: i,
                    sid: (0, r.v1)(),
                    action: "wabd",
                    code: 1001,
                    category: "wrapper-error",
                    si: E.WRAPPER_DEFAULT_SUB_ID
                });
                A && (D = A), h && (M = h),
                    function() {
                        if (!S || !I) return void window.console.log("%cSR::wrapper:: Missing parameters org or wrapper_id", "color: #A0368E;");
                        (function() {
                            var e = x();
                            if (!e || e.parentElement === document.head) return;
                            var t = document.createElement("div"),
                                n = "wrapper-" + I;
                            t.id = n, U = n, e.parentNode.insertBefore(t, e.nextSibling)
                        })(),
                        function(e) {
                            var t = document.createElement("script"),
                                n = document.getElementById(U) || document.head;
                            t.src = e, n.appendChild(t)
                        }((e = function() {
                            var e = (0, u.default)(),
                                t = (0, a.default)((0, c.default)(e)),
                                n = {};
                            return n.page_url = e, n.domain = t, n.ddomain = t, n.sub_id = E.WRAPPER_DEFAULT_PLAYER_SUB_ID, n.org = S, n.wrapper_id = I, n.wv = P, R && (n.player_settings = R), y && (n.player_callbacks = y), O && (n.prebid_config = O), w && (n.player_ver = w), g && (n.rate_callback = g), D && (n.us_privacy = D), M && (n.gdpr = M.gdprApplies, n.gdpr_consent = M.consentString), U && (n.wrapper_container_id = U), L && (n.print_settings = L), N && (n.local_bladex = N), n
                        }(), C ? decodeURIComponent(C) + Y(e) : E.WRAPPER_HOST + "/" + S + "/" + I + Y(e)));
                        var e
                    }()
            }))
        }()
}();