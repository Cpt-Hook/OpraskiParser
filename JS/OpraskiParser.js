if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'OpraskiParser'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'OpraskiParser'.");
}
var OpraskiParser = function (_, Kotlin) {
  'use strict';
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var equals = Kotlin.equals;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function OpraskiParser() {
    OpraskiParser$Companion_getInstance();
  }
  function OpraskiParser$Companion() {
    OpraskiParser$Companion_instance = this;
    this.firstMap_0 = mapOf([to('ie', 'je'), to('m\u011B', 'mn\u011B'), to('js', 's'), to('mn\u011B', 'm\u011B'), to('ch', 'hc'), to('m', 'n'), to('n', 'm'), to('i', 'y'), to('y', 'i'), to('s', 'z'), to('z', 's'), to('\u017E', '\u0161'), to('\u0161', '\u017E'), to('b', 'p'), to('p', 'b'), to('v', 'f')]);
    this.secondMap_0 = mapOf_0(to('k', 'g'));
  }
  OpraskiParser$Companion.prototype.getOpraskiString_61zpoe$ = function (message) {
    var tmp$;
    var mapped1 = this.applyMap_0.call(this, message.toLowerCase(), this.firstMap_0);
    var arr = ArrayList_init(Regex('\\s+').split_905azu$(mapped1, 0));
    arr = this.editWords_0(arr);
    var builder = new StringBuilder();
    tmp$ = arr.iterator();
    while (tmp$.hasNext()) {
      var word = tmp$.next();
      builder.append_gw00v9$(word);
      builder.append_s8itvh$(32);
    }
    return this.applyMap_0(builder.toString(), this.secondMap_0);
  };
  OpraskiParser$Companion.prototype.applyMap_0 = function (message, map) {
    var tmp$, tmp$_0;
    var builder = new StringBuilder();
    var i = 0;
    loop: while (i < message.length) {
      tmp$ = map.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_1 = tmp$.next();
        var key = tmp$_1.key;
        var value = tmp$_1.value;
        var tmp$_2;
        if ((i + key.length | 0) < message.length) {
          var startIndex = i;
          var endIndex = i + key.length | 0;
          tmp$_2 = message.substring(startIndex, endIndex);
        }
         else {
          var startIndex_0 = i;
          tmp$_2 = message.substring(startIndex_0);
        }
        var sub = tmp$_2;
        if (equals(sub, key)) {
          builder.append_gw00v9$(value);
          i = i + key.length | 0;
          continue loop;
        }
      }
      builder.append_s8itvh$(message.charCodeAt((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0)));
    }
    return builder.toString();
  };
  function OpraskiParser$Companion$editWords$connectPrepositions(closure$arr) {
    return function (i) {
      closure$arr.set_wxm5ur$(i + 1 | 0, closure$arr.get_za3lpa$(i) + closure$arr.get_za3lpa$(i + 1 | 0));
      closure$arr.removeAt_za3lpa$(i);
    };
  }
  function OpraskiParser$Companion$editWords$changeEnding(closure$arr) {
    return function (i) {
      var tmp$ = closure$arr;
      var $receiver = closure$arr.get_za3lpa$(i);
      var endIndex = closure$arr.get_za3lpa$(i).length - 1 | 0;
      tmp$.set_wxm5ur$(i, $receiver.substring(0, endIndex) + '\xED');
    };
  }
  function OpraskiParser$Companion$editWords$connectX(closure$arr) {
    return function (i) {
      var tmp$ = closure$arr;
      var $receiver = closure$arr.get_za3lpa$(i);
      var endIndex = closure$arr.get_za3lpa$(i).length - 1 | 0;
      tmp$.set_wxm5ur$(i, $receiver.substring(0, endIndex) + 'x' + closure$arr.get_za3lpa$(i + 1 | 0).substring(1));
      closure$arr.removeAt_za3lpa$(i + 1 | 0);
    };
  }
  function OpraskiParser$Companion$editWords$addHookBefore(closure$arr) {
    return function (char, rep, i) {
      var tmp$;
      var index = indexOf(closure$arr.get_za3lpa$(i), char);
      tmp$ = closure$arr.get_za3lpa$(i).charCodeAt(index - 1 | 0);
      if (tmp$ === 100) {
        var tmp$_0 = closure$arr;
        var $receiver = closure$arr.get_za3lpa$(i);
        var endIndex = index - 1 | 0;
        var tmp$_1 = $receiver.substring(0, endIndex) + String.fromCharCode(toBoxedChar(271)) + rep;
        var $receiver_0 = closure$arr.get_za3lpa$(i);
        var startIndex = index + 1 | 0;
        tmp$_0.set_wxm5ur$(i, tmp$_1 + $receiver_0.substring(startIndex));
      }
       else if (tmp$ === 116) {
        var tmp$_2 = closure$arr;
        var $receiver_1 = closure$arr.get_za3lpa$(i);
        var endIndex_0 = index - 1 | 0;
        var tmp$_3 = $receiver_1.substring(0, endIndex_0) + String.fromCharCode(toBoxedChar(357)) + rep;
        var $receiver_2 = closure$arr.get_za3lpa$(i);
        var startIndex_0 = index + 1 | 0;
        tmp$_2.set_wxm5ur$(i, tmp$_3 + $receiver_2.substring(startIndex_0));
      }
       else if (tmp$ === 110) {
        var tmp$_4 = closure$arr;
        var $receiver_3 = closure$arr.get_za3lpa$(i);
        var endIndex_1 = index - 1 | 0;
        var tmp$_5 = $receiver_3.substring(0, endIndex_1) + String.fromCharCode(toBoxedChar(328)) + rep;
        var $receiver_4 = closure$arr.get_za3lpa$(i);
        var startIndex_1 = index + 1 | 0;
        tmp$_4.set_wxm5ur$(i, tmp$_5 + $receiver_4.substring(startIndex_1));
      }
    };
  }
  OpraskiParser$Companion.prototype.editWords_0 = function (arr) {
    var connectPrepositions = OpraskiParser$Companion$editWords$connectPrepositions(arr);
    var changeEnding = OpraskiParser$Companion$editWords$changeEnding(arr);
    var connectX = OpraskiParser$Companion$editWords$connectX(arr);
    var addHookBefore = OpraskiParser$Companion$editWords$addHookBefore(arr);
    var i = 0;
    while (i < arr.size) {
      if (arr.get_za3lpa$(i).length === 1 && i !== get_lastIndex(arr))
        connectPrepositions(i);
      if (endsWith(arr.get_za3lpa$(i), '\xE9'))
        changeEnding(i);
      if (endsWith(arr.get_za3lpa$(i), 'k') && (startsWith(arr.get_za3lpa$(i + 1 | 0), 's') || startsWith(arr.get_za3lpa$(i + 1 | 0), 'z')))
        connectX(i);
      if (indexOf(arr.get_za3lpa$(i), '\u011B') > 0) {
        addHookBefore('\u011B', 'e', i);
      }
      if (indexOf(arr.get_za3lpa$(i), '\xED') > 0) {
        addHookBefore('\xED', '\xED', i);
      }
      i = i + 1 | 0;
    }
    return arr;
  };
  OpraskiParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OpraskiParser$Companion_instance = null;
  function OpraskiParser$Companion_getInstance() {
    if (OpraskiParser$Companion_instance === null) {
      new OpraskiParser$Companion();
    }
    return OpraskiParser$Companion_instance;
  }
  OpraskiParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpraskiParser',
    interfaces: []
  };
  Object.defineProperty(OpraskiParser, 'Companion', {
    get: OpraskiParser$Companion_getInstance
  });
  var package$main = _.main || (_.main = {});
  package$main.OpraskiParser = OpraskiParser;
  Kotlin.defineModule('OpraskiParser', _);
  return _;
}(typeof OpraskiParser === 'undefined' ? {} : OpraskiParser, kotlin);
