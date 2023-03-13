import 'should';
import { isLowerCase, isUpperCase, toCamelCase, toKebabCase, toSnakeCase } from './convertcase.js';

describe('convertcase', function () {
  describe('toCamelCase()', function () {
    it('should convert foo_bar to fooBar', function () {
      toCamelCase('foo_bar').should.equal('fooBar');
    });
    it('should keep fooBar unchanged', function () {
      toCamelCase('fooBar').should.equal('fooBar');
    });
    it('should convert FOO_BAR to FOOBAR', function () {
      toCamelCase('FOO_BAR').should.equal('FOOBAR');
    });
    it('should convert _foo_bar to _fooBar', function () {
      toCamelCase('_foo_bar').should.equal('_fooBar');
    });
    it('should convert _Foo_Bar to _FooBar', function () {
      toCamelCase('_Foo_Bar').should.equal('_FooBar');
    });
    it('should convert _Foo_bar to _Foobar', function () {
      toCamelCase('_Foo_bar').should.equal('_FooBar');
    });
    it('should keep _FooBar unchanged', function () {
      toCamelCase('_FooBar').should.equal('_FooBar');
    });
  });
  describe('toSnakeCase()', function () {
    it('should convert fooBar to foo_bar', function () {
      toSnakeCase('fooBar').should.equal('foo_bar');
    });
    it('should keep foo_bar unchanged', function () {
      toSnakeCase('foo_bar').should.equal('foo_bar');
    });
    it('should convert FOOBAR to foobar', function () {
      toSnakeCase('FOOBAR').should.equal('foobar');
    });
    it('should convert _fooBar to _foo_bar', function () {
      toSnakeCase('_fooBar').should.equal('_foo_bar');
    });
    it('should convert _FooBar to _foo_bar', function () {
      toSnakeCase('_FooBar').should.equal('_foo_bar');
    });
    it('should convert _Foobar to _foobar', function () {
      toSnakeCase('_Foobar').should.equal('_foobar');
    });
    it('should convert _Foo-dash-BarDone to _foo_dash_bar_done', function () {
      toSnakeCase('_Foo-dash-BarDone').should.equal('_foo_dash_bar_done');
    });
    it('should convert ---fooBar to ___foo_bar', function () {
      toSnakeCase('---fooBar').should.equal('___foo_bar');
    });
    it('should keep _foobar unchanged', function () {
      toSnakeCase('_foobar').should.equal('_foobar');
    });
  });
  describe('toKebabCase()', function () {
    it('should convert fooBar to foo-bar', function () {
      toKebabCase('fooBar').should.equal('foo-bar');
    });
    it('should keep foo-bar unchanged', function () {
      toKebabCase('foo-bar').should.equal('foo-bar');
    });
    it('should convert FOOBAR to foobar', function () {
      toKebabCase('FOOBAR').should.equal('foobar');
    });
    it('should convert _fooBar to -foo-bar', function () {
      toKebabCase('_fooBar').should.equal('-foo-bar');
    });
    it('should convert _FooBar to -foo-bar', function () {
      toKebabCase('_FooBar').should.equal('-foo-bar');
    });
    it('should convert _Foobar to -foobar', function () {
      toKebabCase('_Foobar').should.equal('-foobar');
    });
    it('should convert _Foo-dash-BarDone to -foo-dash-bar-done', function () {
      toKebabCase('_Foo-dash-BarDone').should.equal('-foo-dash-bar-done');
    });
    it('should convert ___fooBar to ---foo_bar', function () {
      toKebabCase('___fooBar').should.equal('---foo-bar');
    });
    it('should keep -foobar unchanged', function () {
      toKebabCase('-foobar').should.equal('-foobar');
    });
  });
  describe('isUpperCase()', function () {
    it('should return true for UPPERCASE', function () {
      isUpperCase('UPPERCASE').should.be.true();
    });
    it('should return false for UpperCase', function () {
      isUpperCase('UpperCase').should.be.false();
    });
  });
  describe('isLowerCase()', function () {
    it('should return true for lowercase', function () {
      isLowerCase('lowercase').should.be.true();
    });
    it('should return false for LowerCase', function () {
      isLowerCase('LowerCase').should.be.false();
    });
  });
});
