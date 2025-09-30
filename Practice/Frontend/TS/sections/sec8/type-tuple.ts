// An array of fixed numbers (3);
const color: [number, number, number] = [255, 0, 255];

type HTTPResponse = [number, string];

const okRes: HTTPResponse = [200, "OK"];
const notFoundRes: HTTPResponse = [404, "Not Found"];
const serverErrRes: HTTPResponse = [500, "Server Error"];
