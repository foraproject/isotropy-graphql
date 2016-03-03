/* @flow */
import type { IncomingMessage as IncomingMessageBase, ServerResponse as ServerResponseBase } from "isotropy-interfaces/node/http";

export interface IncomingMessage extends IncomingMessageBase {
  body: Object;
  __getBody: () => Object;
  href: string;
  pathname: string;
  query: Object;
  search: string;
}

export interface ServerResponse extends ServerResponseBase {
}
