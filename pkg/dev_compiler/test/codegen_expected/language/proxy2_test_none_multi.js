dart_library.library('language/proxy2_test_none_multi', null, /* Imports */[
  'dart_sdk'
], function load__proxy2_test_none_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const proxy2_test_none_multi = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  proxy2_test_none_multi.Fake = class Fake extends core.Object {
    new() {
    }
  };
  dart.setSignature(proxy2_test_none_multi.Fake, {
    constructors: () => ({new: dart.definiteFunctionType(proxy2_test_none_multi.Fake, [])})
  });
  proxy2_test_none_multi.proxy = dart.const(new proxy2_test_none_multi.Fake());
  proxy2_test_none_multi.WrongProxy = class WrongProxy extends core.Object {};
  proxy2_test_none_multi.PrefixProxy = class PrefixProxy extends core.Object {};
  proxy2_test_none_multi.main = function() {
  };
  dart.fn(proxy2_test_none_multi.main, VoidTodynamic());
  // Exports:
  exports.proxy2_test_none_multi = proxy2_test_none_multi;
});
