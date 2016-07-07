dart_library.library('language/if_null_behavior_test_none_multi', null, /* Imports */[
  'dart_sdk'
], function load__if_null_behavior_test_none_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const if_null_behavior_test_none_multi = Object.create(null);
  let VoidToB = () => (VoidToB = dart.constFn(dart.definiteFunctionType(if_null_behavior_test_none_multi.B, [])))();
  let VoidToC = () => (VoidToC = dart.constFn(dart.definiteFunctionType(if_null_behavior_test_none_multi.C, [])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  if_null_behavior_test_none_multi.A = class A extends core.Object {
    new(a) {
      this.a = a;
    }
  };
  dart.setSignature(if_null_behavior_test_none_multi.A, {
    constructors: () => ({new: dart.definiteFunctionType(if_null_behavior_test_none_multi.A, [core.String])})
  });
  if_null_behavior_test_none_multi.B = class B extends if_null_behavior_test_none_multi.A {
    new(v) {
      this.b = v;
      super.new(v);
    }
  };
  dart.setSignature(if_null_behavior_test_none_multi.B, {
    constructors: () => ({new: dart.definiteFunctionType(if_null_behavior_test_none_multi.B, [core.String])})
  });
  if_null_behavior_test_none_multi.C = class C extends if_null_behavior_test_none_multi.A {
    new(v) {
      this.c = v;
      super.new(v);
    }
  };
  dart.setSignature(if_null_behavior_test_none_multi.C, {
    constructors: () => ({new: dart.definiteFunctionType(if_null_behavior_test_none_multi.C, [core.String])})
  });
  if_null_behavior_test_none_multi.nullB = function() {
    return null;
  };
  dart.fn(if_null_behavior_test_none_multi.nullB, VoidToB());
  if_null_behavior_test_none_multi.nullC = function() {
    return null;
  };
  dart.fn(if_null_behavior_test_none_multi.nullC, VoidToC());
  if_null_behavior_test_none_multi.noMethod = function(e) {
    return core.NoSuchMethodError.is(e);
  };
  dart.fn(if_null_behavior_test_none_multi.noMethod, dynamicTodynamic());
  if_null_behavior_test_none_multi.main = function() {
    let _ = (() => {
      let l = null;
      return l != null ? l : null;
    })();
  };
  dart.fn(if_null_behavior_test_none_multi.main, VoidTodynamic());
  // Exports:
  exports.if_null_behavior_test_none_multi = if_null_behavior_test_none_multi;
});
