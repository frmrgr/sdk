dart_library.library('language/async_await_syntax_test_none_multi', null, /* Imports */[
  'dart_sdk'
], function load__async_await_syntax_test_none_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const async_await_syntax_test_none_multi = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  async_await_syntax_test_none_multi.yield = 0;
  async_await_syntax_test_none_multi.await = 0;
  dart.copyProperties(async_await_syntax_test_none_multi, {
    get st() {
      return async.Stream.fromIterable([]);
    }
  });
  async_await_syntax_test_none_multi.B = class B extends core.Object {};
  async_await_syntax_test_none_multi.C = class C extends async_await_syntax_test_none_multi.B {
    new() {
    }
  };
  dart.setSignature(async_await_syntax_test_none_multi.C, {
    constructors: () => ({new: dart.definiteFunctionType(async_await_syntax_test_none_multi.C, [])})
  });
  async_await_syntax_test_none_multi.method1 = function() {
  };
  dart.fn(async_await_syntax_test_none_multi.method1, VoidTodynamic());
  async_await_syntax_test_none_multi.method2 = function() {
  };
  dart.fn(async_await_syntax_test_none_multi.method2, VoidTodynamic());
  async_await_syntax_test_none_multi.main = function() {
    let a = null;
    let c = new async_await_syntax_test_none_multi.C();
    async_await_syntax_test_none_multi.method1();
    async_await_syntax_test_none_multi.method2();
  };
  dart.fn(async_await_syntax_test_none_multi.main, VoidTovoid());
  // Exports:
  exports.async_await_syntax_test_none_multi = async_await_syntax_test_none_multi;
});
