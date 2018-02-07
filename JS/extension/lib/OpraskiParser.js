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
  function OpraskiParser() {
    OpraskiParser_instance = this;
    this.firstMap_0 = mapOf([to('bychom', 'byzme'), to('ie', 'ije'), to('m\u011B', 'mn\u011B'), to('js', 's'), to('mn\u011B', 'm\u011B'), to('ch', 'hc'), to('m', 'n'), to('d', 't'), to('t', 'd'), to('n', 'm'), to('i', 'y'), to('y', 'i'), to('\xFD', '\xED'), to('\xED', '\xFD'), to('s', 'z'), to('z', 's'), to('\u017E', '\u0161'), to('\u0161', '\u017E'), to('b', 'p'), to('p', 'b'), to('v', 'f')]);
    this.secondMap_0 = mapOf_0(to('k', 'g'));
  }
  OpraskiParser.prototype.getOpraskiString_61zpoe$ = function (message) {
    var tmp$;
    var mapped = this.applyMap_0(message, this.firstMap_0);
    var arr = ArrayList_init(Regex('\\s+').split_905azu$(mapped, 0));
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
  var unboxChar = Kotlin.unboxChar;
  OpraskiParser.prototype.firstCharToUpperCase_0 = function ($receiver) {
    if ($receiver.length === 0)
      return '';
    var $receiver_0 = $receiver.charCodeAt(0);
    var tmp$ = unboxChar(String.fromCharCode($receiver_0).toUpperCase().charCodeAt(0));
    var other = $receiver.substring(1);
    return String.fromCharCode(tmp$) + other;
  };
  OpraskiParser.prototype.applyMap_0 = function (message, map) {
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
         else if (equals(sub, this.firstCharToUpperCase_0(key))) {
          builder.append_gw00v9$(this.firstCharToUpperCase_0(value));
          i = i + key.length | 0;
          continue loop;
        }
      }
      builder.append_s8itvh$(message.charCodeAt((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0)));
    }
    return builder.toString();
  };
  function OpraskiParser$editWords$connectPrepositions(closure$arr, closure$i) {
    return function () {
      closure$arr.set_wxm5ur$(closure$i.v + 1 | 0, closure$arr.get_za3lpa$(closure$i.v) + closure$arr.get_za3lpa$(closure$i.v + 1 | 0));
      closure$arr.removeAt_za3lpa$(closure$i.v);
    };
  }
  function OpraskiParser$editWords$changeEnding(closure$arr, closure$i) {
    return function () {
      var tmp$ = closure$arr;
      var tmp$_0 = closure$i.v;
      var $receiver = closure$arr.get_za3lpa$(closure$i.v);
      var endIndex = closure$arr.get_za3lpa$(closure$i.v).length - 1 | 0;
      tmp$.set_wxm5ur$(tmp$_0, $receiver.substring(0, endIndex) + '\xED');
    };
  }
  function OpraskiParser$editWords$connectX(closure$arr, closure$i) {
    return function () {
      var tmp$ = closure$arr;
      var tmp$_0 = closure$i.v;
      var $receiver = closure$arr.get_za3lpa$(closure$i.v);
      var endIndex = closure$arr.get_za3lpa$(closure$i.v).length - 1 | 0;
      tmp$.set_wxm5ur$(tmp$_0, $receiver.substring(0, endIndex) + 'x' + closure$arr.get_za3lpa$(closure$i.v + 1 | 0).substring(1));
      closure$arr.removeAt_za3lpa$(closure$i.v + 1 | 0);
    };
  }
  function OpraskiParser$editWords$addHookBefore(closure$arr, closure$i) {
    return function (char, rep) {
      var tmp$;
      var index = indexOf(closure$arr.get_za3lpa$(closure$i.v), char);
      tmp$ = closure$arr.get_za3lpa$(closure$i.v).charCodeAt(index - 1 | 0);
      if (tmp$ === 100) {
        var tmp$_0 = closure$arr;
        var tmp$_1 = closure$i.v;
        var $receiver = closure$arr.get_za3lpa$(closure$i.v);
        var endIndex = index - 1 | 0;
        var tmp$_2 = $receiver.substring(0, endIndex) + String.fromCharCode(toBoxedChar(271)) + rep;
        var $receiver_0 = closure$arr.get_za3lpa$(closure$i.v);
        var startIndex = index + 1 | 0;
        tmp$_0.set_wxm5ur$(tmp$_1, tmp$_2 + $receiver_0.substring(startIndex));
      }
       else if (tmp$ === 116) {
        var tmp$_3 = closure$arr;
        var tmp$_4 = closure$i.v;
        var $receiver_1 = closure$arr.get_za3lpa$(closure$i.v);
        var endIndex_0 = index - 1 | 0;
        var tmp$_5 = $receiver_1.substring(0, endIndex_0) + String.fromCharCode(toBoxedChar(357)) + rep;
        var $receiver_2 = closure$arr.get_za3lpa$(closure$i.v);
        var startIndex_0 = index + 1 | 0;
        tmp$_3.set_wxm5ur$(tmp$_4, tmp$_5 + $receiver_2.substring(startIndex_0));
      }
       else if (tmp$ === 110) {
        var tmp$_6 = closure$arr;
        var tmp$_7 = closure$i.v;
        var $receiver_3 = closure$arr.get_za3lpa$(closure$i.v);
        var endIndex_1 = index - 1 | 0;
        var tmp$_8 = $receiver_3.substring(0, endIndex_1) + String.fromCharCode(toBoxedChar(328)) + rep;
        var $receiver_4 = closure$arr.get_za3lpa$(closure$i.v);
        var startIndex_1 = index + 1 | 0;
        tmp$_6.set_wxm5ur$(tmp$_7, tmp$_8 + $receiver_4.substring(startIndex_1));
      }
    };
  }
  OpraskiParser.prototype.editWords_0 = function (arr) {
    var i = {v: 0};
    var connectPrepositions = OpraskiParser$editWords$connectPrepositions(arr, i);
    var changeEnding = OpraskiParser$editWords$changeEnding(arr, i);
    var connectX = OpraskiParser$editWords$connectX(arr, i);
    var addHookBefore = OpraskiParser$editWords$addHookBefore(arr, i);
    while (i.v < arr.size) {
      if (arr.get_za3lpa$(i.v).length === 1 && i.v !== get_lastIndex(arr))
        connectPrepositions();
      if (endsWith(arr.get_za3lpa$(i.v), '\xE9'))
        changeEnding();
      if (endsWith(arr.get_za3lpa$(i.v), 'k') && i.v !== get_lastIndex(arr) && (startsWith(arr.get_za3lpa$(i.v + 1 | 0), 's') || startsWith(arr.get_za3lpa$(i.v + 1 | 0), 'z')))
        connectX();
      if (indexOf(arr.get_za3lpa$(i.v), '\u011B') > 0) {
        addHookBefore('\u011B', 'e');
      }
      if (indexOf(arr.get_za3lpa$(i.v), '\xED') > 0) {
        addHookBefore('\xED', '\xED');
      }
      i.v = i.v + 1 | 0;
    }
    return arr;
  };
  OpraskiParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OpraskiParser',
    interfaces: []
  };
  var OpraskiParser_instance = null;
  function OpraskiParser_getInstance() {
    if (OpraskiParser_instance === null) {
      new OpraskiParser();
    }
    return OpraskiParser_instance;
  }
  var package$main = _.main || (_.main = {});
  Object.defineProperty(package$main, 'OpraskiParser', {
    get: OpraskiParser_getInstance
  });
  Kotlin.defineModule('OpraskiParser', _);
  return _;
}(typeof OpraskiParser === 'undefined' ? {} : OpraskiParser, kotlin);
