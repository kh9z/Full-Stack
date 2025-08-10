// Polyfill for Next.js API route tests in Jest
// These are minimal mocks to allow importing API handlers in Node.js

global.Request = class {
  constructor() {}
};
global.NextRequest = class extends global.Request {
  constructor() { super(); }
};
global.NextResponse = class {
  static json(data, init) {
    return { json: () => Promise.resolve(data), status: (init && init.status) || 200 };
  }
  constructor() {}
};
global.Response = class {
  constructor(body, init) {
    this.body = body;
    this.status = (init && init.status) || 200;
  }
  json() {
    return Promise.resolve(this.body);
  }
  static json(data, init) {
    return { json: () => Promise.resolve(data), status: (init && init.status) || 200 };
  }
};

// Mock Edge runtime cookies symbol to prevent getSetCookie error and related issues
const edgeCookiesSymbol = Symbol.for('edge-runtime.cookies');
globalThis[edgeCookiesSymbol] = {
  getSetCookie: () => [],
  set: () => {},
  get: () => undefined,
  delete: () => {},
  getAll: () => [],
  serialize: () => '',
  toString: () => '',
};

jest.mock("jose");

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = require("util").TextEncoder;
}
if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = require("util").TextDecoder;
}
