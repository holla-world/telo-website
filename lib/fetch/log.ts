/*
 * @Author: yejiahao-hg
 * @Date: 2023-03-09 14:25:21
 * @Last Modified by: yejiahao-hg
 * @Last Modified time: 2024-06-04 16:37:04
 * 日志收集
 */
import env from '@lib/env';
// import { initAPM } from '@lib/report/apm';

type LogErrorParams = {
  name?: string;
  level?: LogLevel;
  source?: string;
  params?: { [key: string]: string | number };
  dedupe?: boolean;
  originError?: any;
};

export enum LogLevel {
  trace = 'trace',
  debug = 'debug',
  info = 'info',
  warn = 'warn',
  error = 'error',
  fatal = 'fatal'
}

const defaultLogErrorConfig = {
  level: LogLevel.error,
  source: 'Uncatch error',
  dedupe: true
};

export class LogError extends Error {
  dedupe: boolean = true;
  originError?: Error;

  protected href: string = window.location.href;
  protected timestamp = new Date().toString();
  protected deviceLevel = env.deviceLevel;

  level: LogLevel;
  source: string;
  params?: { [key: string]: string | number };

  constructor(message: string | Error, paramsConfig: LogErrorParams = {}) {
    super(message instanceof Error ? message.message : message);
    const config = { ...defaultLogErrorConfig, ...paramsConfig };

    if (message instanceof Error) {
      this.stack = message.stack;
    }
    this.name = paramsConfig.name ?? 'LogError';
    this.level = config.level;
    this.source = config.source;
    this.params = config.params;
    this.dedupe = config.dedupe;
    this.originError = config.originError;
  }

  getExtra() {
    let extra: { [key: string]: string } = {
      href: this.href,
      timestamp: this.timestamp,
      deviceLevel: this.deviceLevel ?? '',
      level: this.level,
      source: this.source,
      name: this.name,
      message: this.message,
      appVersion: env.appVersion ?? ''
    };
    if (this.params) {
      for (const [key, value] of Object.entries(this.params)) {
        extra[key] = value ? value.toString() : 'null';
      }
      // extra.params = JSON.stringify(this.params);
    }
    if (this.stack) {
      extra.stack = this.stack.toString();
    }
    return extra;
  }

  print() {
    console.group(`%c----- ${this.name}Extra ${this.source} -----`, 'color: blue');
    console.error(this);
    console.log(this.getExtra());
    console.groupEnd();
  }
}

// let isLogVersion = true;
// if (env.isiOS) {
//   isLogVersion = !!(
//     env.appVersion && compareVersions(env.appVersion, '1.16.0') >= 0
//   );
// } else if (env.isAndroid) {
//   isLogVersion = !!(
//     env.appVersion && compareVersions(env.appVersion, '1.18.5') >= 0
//   );
// }

export function log(error: any, params: LogErrorParams = {}) {
  if (error === null || error === undefined) {
    return console.error('cant create a empty error message log');
  }
  let logErrorInstance: LogError;
  if (error instanceof LogError) {
    logErrorInstance = error;
  } else if (typeof error === 'string' || error instanceof Error) {
    logErrorInstance = new LogError(error, params);
  } else {
    logErrorInstance = new LogError(error.toString(), params);
  }

  logErrorInstance.print();
  // if (env.isProduction) {
  //   let browserClient = initAPM();
  //   browserClient('on', 'init', () => {
  //     let extra = logErrorInstance.getExtra();
  //     browserClient('captureException', logErrorInstance, extra);
  //   });
  // }
}

window.addEventListener('error', function (errorEvent) {
  log(errorEvent.error);
});

window.addEventListener('unhandledrejection', function (rejectEvent) {
  if (rejectEvent.reason) {
    log(rejectEvent.reason);
  } else {
    console.error('no reason reject');
  }
});
