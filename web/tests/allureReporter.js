const { spawnSync, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

class AllureReporter {
    onEnd() {
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
    }
}

module.exports = AllureReporter;
