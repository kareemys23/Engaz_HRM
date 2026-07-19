import dotenv from 'dotenv';
import { spawnSync, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const config: WebdriverIO.Config = {
  runner: 'local',

  port: 4723,

  specs: ['./specs/**/*.ts'],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'FlutterIntegration',
      'appium:deviceName': 'Engaz',
      'appium:app': 'D:\\Engaz HR\\Android build\\app-debug.apk',
      'appium:noReset': false,
      'appium:autoGrantPermissions': true,
    },
  ],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 300000,
  connectionRetryCount: 3,

  services: ['appium'],

  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverScreenshotsReporting: false,
      disableWebdriverStepsReporting: false,
    }],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  onComplete: function () {
    const root = process.cwd();
    const isWin = process.platform === 'win32';
    const binName = isWin ? 'allure.cmd' : 'allure';
    const allureBin = path.join(root, 'node_modules', '.bin', binName);
    const resultsDir = path.join(root, 'allure-results');
    const reportDir = path.join(root, 'allure-report');

    if (!fs.existsSync(allureBin)) {
      console.error('[AllureReporter] allure binary not found at:', allureBin);
      return;
    }

    const cmd = isWin ? 'cmd' : allureBin;
    const args = isWin
      ? ['/c', allureBin, 'generate', resultsDir, '-o', reportDir, '--clean']
      : ['generate', resultsDir, '-o', reportDir, '--clean'];

    const generate = spawnSync(cmd, args, { cwd: root, encoding: 'utf8' });

    if (generate.status !== 0) {
      console.error('[AllureReporter] Generate failed.');
      console.error('  status:', generate.status);
      console.error('  stdout:', generate.stdout);
      console.error('  stderr:', generate.stderr);
      console.error('  error:', generate.error && generate.error.message);
      return;
    }

    const openArgs = isWin
      ? ['/c', allureBin, 'open', reportDir]
      : ['open', reportDir];

    spawn(cmd, openArgs, {
      stdio: 'ignore',
      detached: true,
      cwd: root,
    }).unref();

    console.log('[AllureReporter] Report generated and opened.');
  },
};
