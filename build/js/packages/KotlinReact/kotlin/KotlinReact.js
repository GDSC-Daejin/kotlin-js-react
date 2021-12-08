(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-dom', 'kotlin-react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinReact'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinReact'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'KotlinReact'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'KotlinReact'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'KotlinReact'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'KotlinReact'.");
    }root.KotlinReact = factory(typeof KotlinReact === 'undefined' ? {} : KotlinReact, kotlin, this['kotlin-react-dom'], this['kotlin-react']);
  }
}(this, function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var fc = $module$kotlin_react.react.fc_4mavxa$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function app$lambda$lambda$lambda$lambda($receiver) {
    $receiver.users = listOf(new User('Harry'));
    return Unit;
  }
  function app$lambda$lambda$lambda($receiver) {
    $receiver.attrs_37755u$(app$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function app$lambda($receiver, it) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Hello Kotlin React');
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    $receiver_0_0.child_1mw94g$(userList, void 0, app$lambda$lambda$lambda);
    $receiver.child_30b5ua$($receiver_0_0.create());
    return Unit;
  }
  var app;
  function main$lambda($receiver) {
    $receiver.child_1mw94g$(app);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function User(name) {
    this.name = name;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  User.prototype.component1 = function () {
    return this.name;
  };
  User.prototype.copy_61zpoe$ = function (name) {
    return new User(name === void 0 ? this.name : name);
  };
  User.prototype.toString = function () {
    return 'User(name=' + Kotlin.toString(this.name) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function userList$lambda($receiver, props) {
    var tmp$;
    tmp$ = props.users.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(p$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$(element.toString());
      $receiver.child_30b5ua$($receiver_0.create());
    }
    return Unit;
  }
  var userList;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  Object.defineProperty(_, 'app', {
    get: function () {
      return app;
    }
  });
  _.main = main;
  _.User = User;
  Object.defineProperty(_, 'userList', {
    get: function () {
      return userList;
    }
  });
  app = fc(app$lambda);
  userList = fc(userList$lambda);
  main();
  Kotlin.defineModule('KotlinReact', _);
  return _;
}));

//# sourceMappingURL=KotlinReact.js.map
