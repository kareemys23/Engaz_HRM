# ReportPortal Setup

Integrate this project with ReportPortal for AI-powered test observability.

Official docs: https://reportportal.io/docs/log-data-in-reportportal/test-framework-integration/JavaScript/Playwright/

## Quick Start

### 1. Fill in your `.env` file

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `RP_ENDPOINT` | Your ReportPortal API URL, e.g. `https://reportportal.example.com/api/v1` |
| `RP_API_KEY` | Your personal API key — found in **Profile → API Keys** in the ReportPortal UI |
| `RP_PROJECT` | The project name in ReportPortal to send results to |
| `RP_LAUNCH_NAME` | Display name for this test run in ReportPortal (e.g. `Playwright Tests`) |

### 2. Run tests with ReportPortal reporting

```bash
npm run test:rp
```

Results are sent to ReportPortal in real time. Open your project dashboard to view the launch.

### 3. Regular test run (Allure only)

```bash
npm test
```

> **Note:** ReportPortal reporting is opt-in — it only activates when `RP_ENDPOINT` is set in your environment. If the variable is absent, tests run normally with Allure reporting only.

## CI/CD

Set the four `RP_*` variables as secrets/environment variables in your CI pipeline. The `npm run test:rp` script will pick them up automatically.
