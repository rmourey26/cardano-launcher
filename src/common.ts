// Copyright © 2020 IOHK
// License: Apache-2.0

/**
 * Common types.
 *
 * @packageDocumentation
 */

/** Type alias to indicate the path of a file. */
export type FilePath = string;
/** Type alias to indicate the path of a directory. */
export type DirPath = string;

export type PoolMetadataSource = 'none' | 'direct' | { smashUrl: string };

/**
 * Use this with `.catch()` on promises where the error condition is
 * already handled elsewhere (e.g. by an event or another promise).
 *
 * It will debug log the `Error` and a stack trace of the "floating
 * promise".
 */
export function passthroughErrorLogger(err: Error): void {
  console.debug(
    'Caught an unhandled promise rejection. The promise location is:\n' +
      new Error().stack +
      '\n\nThe error follows:'
  );
  console.debug(err);
}

/**
 * Use this with `.catch()` on promises where the error is already
 * handled elsewhere. This handler does nothing except prevent an
 * eslint warning from appearing.
 */
export function ignorePromiseRejection(_: Error): void {} // eslint-disable-line
