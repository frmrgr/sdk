dart_library.library('language/execute_finally4_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__execute_finally4_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const execute_finally4_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  execute_finally4_test.Helper = class Helper extends core.Object {
    new() {
      this.i = 0;
    }
    f1() {
      try {
        let j = null;
        j = execute_finally4_test.Helper.func();
        this.i = 1;
      } finally {
        this.i = dart.notNull(this.i) + 10;
      }
      return dart.notNull(this.i) + 200;
      try {
        let j = null;
        j = execute_finally4_test.Helper.func();
      } finally {
        this.i = dart.notNull(this.i) + 10;
      }
    }
    static func() {
      let i = 0;
      while (i < 10) {
        i++;
      }
      return i;
    }
  };
  dart.setSignature(execute_finally4_test.Helper, {
    constructors: () => ({new: dart.definiteFunctionType(execute_finally4_test.Helper, [])}),
    methods: () => ({f1: dart.definiteFunctionType(core.int, [])}),
    statics: () => ({func: dart.definiteFunctionType(core.int, [])}),
    names: ['func']
  });
  execute_finally4_test.ExecuteFinally4Test = class ExecuteFinally4Test extends core.Object {
    static testMain() {
      let obj = new execute_finally4_test.Helper();
      expect$.Expect.equals(211, obj.f1());
      expect$.Expect.equals(11, obj.i);
    }
  };
  dart.setSignature(execute_finally4_test.ExecuteFinally4Test, {
    statics: () => ({testMain: dart.definiteFunctionType(dart.dynamic, [])}),
    names: ['testMain']
  });
  execute_finally4_test.main = function() {
    execute_finally4_test.ExecuteFinally4Test.testMain();
  };
  dart.fn(execute_finally4_test.main, VoidTodynamic());
  // Exports:
  exports.execute_finally4_test = execute_finally4_test;
});
