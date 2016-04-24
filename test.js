var should = require('should');
var cc = require('./convertcase');

describe('convertcase', function() {
    describe('toCamelCase()', function() {
        it('should convert foo_bar to fooBar', function() {
            cc.toCamelCase('foo_bar').should.equal('fooBar');
        });
        it('should keep fooBar unchanged', function() {
            cc.toCamelCase('fooBar').should.equal('fooBar');
        });
        it('should convert FOO_BAR to FOOBAR', function() {
            cc.toCamelCase('FOO_BAR').should.equal('FOOBAR');
        });
        it('should convert _foo_bar to _fooBar', function() {
            cc.toCamelCase('_foo_bar').should.equal('_fooBar');
        });
        it('should convert _Foo_Bar to _FooBar', function() {
            cc.toCamelCase('_Foo_Bar').should.equal('_FooBar');
        });
        it('should convert _Foo_bar to _Foobar', function() {
            cc.toCamelCase('_Foo_bar').should.equal('_FooBar');
        });
        it('should keep _FooBar unchanged', function() {
            cc.toCamelCase('_FooBar').should.equal('_FooBar');
        });
    });
    describe('toSnakeCase()', function() {
        it('should convert fooBar to foo_bar', function() {
            cc.toSnakeCase('fooBar').should.equal('foo_bar');
        });
        it('should keep foo_bar unchanged', function() {
            cc.toSnakeCase('foo_bar').should.equal('foo_bar');
        });
        it('should convert FOOBAR to foobar', function() {
            cc.toSnakeCase('FOOBAR').should.equal('foobar');
        });
        it('should convert _fooBar to _foo_bar', function() {
            cc.toSnakeCase('_fooBar').should.equal('_foo_bar');
        });
        it('should convert _FooBar to _foo_bar', function() {
            cc.toSnakeCase('_FooBar').should.equal('_foo_bar');
        });
        it('should convert _Foobar to _foobar', function() {
            cc.toSnakeCase('_Foobar').should.equal('_foobar');
        });
        it('should keep _foobar unchanged', function() {
            cc.toSnakeCase('_foobar').should.equal('_foobar');
        });
    });
    describe('isUpperCase()', function() {
        it('should return true for UPPERCASE', function() {
            cc.isUpperCase('UPPERCASE').should.be.true();
        });
        it('should return false for UpperCase', function() {
            cc.isUpperCase('UpperCase').should.be.false();
        });
    });
    describe('isLowerCase()', function() {
        it('should return true for lowercase', function() {
            cc.isLowerCase('lowercase').should.be.true();
        });
        it('should return false for LowerCase', function() {
            cc.isLowerCase('LowerCase').should.be.false();
        });
    });
});
