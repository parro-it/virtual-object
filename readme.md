# virtual-object

simplified es2015 proxy

[![Travis Build Status](https://img.shields.io/travis/parro-it/virtual-object.svg)](http://travis-ci.org/parro-it/virtual-object)
[![NPM module](https://img.shields.io/npm/v/virtual-object.svg)](https://npmjs.org/package/virtual-object)
[![NPM downloads](https://img.shields.io/npm/dt/virtual-object.svg)](https://npmjs.org/package/virtual-object)

[![Code Climate score](https://img.shields.io/codeclimate/github/parro-it/virtual-object.svg)](https://codeclimate.com/github/parro-it/virtual-object)
[![Tests coverage](https://img.shields.io/codeclimate/coverage/github/parro-it/virtual-object.svg)](https://codeclimate.com/github/parro-it/virtual-object)
[![Dependencies status](https://img.shields.io/requires/github/parro-it/virtual-object.svg)](https://requires.io/github/parro-it/virtual-object/requirements/?branch=master)

## Installation

```bash
npm install --save virtual-object
```

## How it works

## Usage

```javascript
  import VirtualObject from 'virtual-object'

  class Simple extends VirtualObject {

    // if you override get method, it will be called
    // when a property is read on an instance of your class.
    get(name) {

    }

    // if you override set method, it will be called
    // when a property value is written on an instance of your class.
    set(name, value) {

    }

    // if you override delete method, it will be called
    // when a property is deleted on an instance of your class.
    delete(name, value) {

    }

    // if you override keys method, it will be called
    // when a Object.keys is used on an instance of your class.
    keys() {

    }
  }


```

## License

The MIT License (MIT)

Copyright (c) 2015 Andrea Parodi
