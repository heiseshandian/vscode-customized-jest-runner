import Config from './config';
import * as vscode from 'vscode';

const opn = require('opn');

/**
 * get standardized browser name
 * @param name String
 */
export const standardizedBrowserName = (name = ''): string => {
  const _name = name.toLowerCase();
  const browser = Config.browsers.find((item) => {
    return item.acceptName.indexOf(_name) !== -1;
  });

  return browser ? browser.standardName : '';
};

/**
 * get default browser name
 */
export const defaultBrowser = (): string => {
  const config = vscode.workspace.getConfiguration(Config.app);
  return config ? config.default : '';
};

export const open = (path: string, browser = '') => {
  opn(path, { app: browser }).catch((err: any) => {
    vscode.window.showErrorMessage(
      `Open browser failed!! Please check if you have installed the browser ${browser} correctly!`
    );
  });
};

/**
 * open default browser
 * if you have specified browser in configuration file,
 * the browser you specified will work.
 * else the system default browser will work.
 */
export const openDefaultBrowser = (path: string): void => {
  const browser = standardizedBrowserName(defaultBrowser());
  open(path, browser);
};
