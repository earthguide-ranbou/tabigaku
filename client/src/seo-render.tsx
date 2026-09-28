import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
import { Router } from 'wouter';
import App from './App';
export { site, pages } from './seo-config';
export { seoHead, seoForPath } from './seo';

/** Render public routes only. Effects, API calls and browser event handlers do not run. */
export function renderPage(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    output.setEncoding('utf8');
    let body = '';
    output.on('data', part => { body += part.toString(); });
    output.on('end', () => resolve(body));
    output.on('error', reject);
    const stream = renderToPipeableStream(<Router ssrPath={path}><App /></Router>, {
      onAllReady() { stream.pipe(output); },
      onError(error) { reject(error); },
      onShellError(error) { reject(error); },
    });
  });
}
