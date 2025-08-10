export async function processEmail(body: any) {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid body");
  }
  return body;
}
