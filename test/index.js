'use strict';
const httpMock = require('node-mocks-http');
const sinon = require('sinon');
const assert = require('assert');
const expect = require('chai').expect;
const mockery = require('mockery');

const Tako = require('../index.js');


describe('TakoKun', function() {

  let tako;

  beforeEach(function() {
    tako = new Tako({
      cfgPath : '../test/tako.json'
    });
  });

  // ------------- LOADER
  it('Should return a promise on tako init ', function() {
    let promise = tako.init();
    expect(promise).to.be.an.instanceof(Promise);
  });

  // ------------- CONFIG
  it('Should load config from a default location', function() {
    expect(false).to.be(true);
  });

  it('Should load config from a location specified in a config option', function() {
    expect(false).to.be(true);
  });

  it('Should throw an exception if config file not found ', function() {
    expect(false).to.be(true);
  });

  it('Should respond with correct config JSON', function() {
    expect(false).to.be(true);
  });

  it('Should throw an exception if json not parsable', function() {
    expect(false).to.be(true);
  });

  it('Should throw an exception if no application name', function() {
    expect(false).to.be(true);
  });

  it('Should ', function() {
    expect(false).to.be(true);
  });

  // --------------- REQ HANDLING
  it('Should respond with correct options', function() {
    expect(false).to.be(true);
  });

  it('Should decorate tag payload with md5 signature hash', function() {
    expect(false).to.be(true);
  });

  it('Should provide a socket handler ', function() {
    expect(false).to.be(true);
  });

  // --------------- EVENT LOGGING
  it('Should log unmodified request headers to default logger', function() {
    expect(false).to.be(true);
  });

  it('Should log request to custom logger', function() {
    expect(false).to.be(true);
  });
});
