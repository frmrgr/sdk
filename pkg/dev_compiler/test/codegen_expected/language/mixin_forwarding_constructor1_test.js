dart_library.library('language/mixin_forwarding_constructor1_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__mixin_forwarding_constructor1_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const mixin_forwarding_constructor1_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  mixin_forwarding_constructor1_test.Mixin1 = class Mixin1 extends core.Object {
    new() {
      this.mixin1Field = 1;
    }
  };
  mixin_forwarding_constructor1_test.Mixin2 = class Mixin2 extends core.Object {
    new() {
      this.mixin2Field = 2;
    }
  };
  mixin_forwarding_constructor1_test.A = class A extends core.Object {
    new(foo) {
      this.superField = foo;
    }
  };
  dart.setSignature(mixin_forwarding_constructor1_test.A, {
    constructors: () => ({new: dart.definiteFunctionType(mixin_forwarding_constructor1_test.A, [dart.dynamic])})
  });
  mixin_forwarding_constructor1_test.B = class B extends dart.mixin(mixin_forwarding_constructor1_test.A, mixin_forwarding_constructor1_test.Mixin1, mixin_forwarding_constructor1_test.Mixin2) {
    new(unused) {
      this.field = 4;
      super.new(3);
    }
  };
  dart.setSignature(mixin_forwarding_constructor1_test.B, {
    constructors: () => ({new: dart.definiteFunctionType(mixin_forwarding_constructor1_test.B, [dart.dynamic])})
  });
  mixin_forwarding_constructor1_test.main = function() {
    let b = new mixin_forwarding_constructor1_test.B(null);
    expect$.Expect.equals(1, b.mixin1Field);
    expect$.Expect.equals(2, b.mixin2Field);
    expect$.Expect.equals(3, b.superField);
    expect$.Expect.equals(4, b.field);
  };
  dart.fn(mixin_forwarding_constructor1_test.main, VoidTodynamic());
  // Exports:
  exports.mixin_forwarding_constructor1_test = mixin_forwarding_constructor1_test;
});
