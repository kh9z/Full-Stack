module.exports = {
  JWTPayload: {},
  SignJWT: class {
    setProtectedHeader() { return this; }
    setIssuedAt() { return this; }
    setExpirationTime() { return this; }
    sign() { return Promise.resolve("mocked.jwt.token"); }
  },
  jwtVerify: (token) => {
    if (token === "badtoken") throw new Error("Invalid token");
    return Promise.resolve({ payload: { userId: "123" } });
  },
};
