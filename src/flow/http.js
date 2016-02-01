/* @flow */
export type IncomingMessage = {
  headers: Object;
  httpVersion: string;
  method: string;
  trailers: Object;
  setTimeout: (msecs: number, callback: Function) => void;
  statusCode: number;
  url: string;
  pipe: (to: any) => void;
  body: any;
  url: string;
  href: string;
  pathname: string;
  query: Object;
  search: string;
}

export type ServerResponse = {
  statusCode: number;
  statusMessage: string;
  setHeader: (name: string, val: string) => void;
  writeHead: (code: number, headers: Object) => void;
  write: (data: string) => void;
  end: () => void;
}
