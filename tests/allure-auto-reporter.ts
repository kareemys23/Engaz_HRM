import { Reporter, FullResult } from '@playwright/test/reporter';
import { execSync, spawn } from 'child_process';

class AllureAutoReporter implements Reporter {
    onEnd(_result: FullResult) {
        try {
            execSync('npx allure generate allure-results --clean -o allure-report', { stdio: 'inherit' });
            const child = spawn('npx', ['allure', 'open', 'allure-report'], {
                detached: true,
                stdio: 'ignore',
                shell: true,
            });
            child.unref();
        } catch (e) {
            console.error('Allure report generation failed:', e);
        }
    }
}

export default AllureAutoReporter;
