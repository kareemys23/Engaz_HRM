# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\login.spec.ts >> Login >> valid credentials → successful login and correct redirect
- Location: tests\specs\login.spec.ts:13:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="email"]')

```

# Test source

```ts
  1   | import { Locator, Page } from "@playwright/test";
  2   | 
  3   | export default class Actions {
  4   |     protected readonly page: Page;
  5   |     constructor(page: Page) {
  6   |         this.page = page;
  7   |     }
  8   | 
  9   |     // ── Mouse & Keyboard ──────────────────────────────────────────────────────
  10  | 
  11  |     protected async click(element: Locator) {
  12  |         await element.click();
  13  |     }
  14  | 
  15  |     protected async doubleClick(element: Locator) {
  16  |         await element.dblclick();
  17  |     }
  18  | 
  19  |     protected async rightClick(element: Locator) {
  20  |         await element.click({ button: 'right' });
  21  |     }
  22  | 
  23  |     protected async hover(element: Locator) {
  24  |         await element.hover();
  25  |     }
  26  | 
  27  |     protected async pressKey(element: Locator, key: string) {
  28  |         await element.press(key);
  29  |     }
  30  | 
  31  |     protected async dragAndDrop(source: Locator, target: Locator) {
  32  |         await source.dragTo(target);
  33  |     }
  34  | 
  35  |     // ── Text Input ────────────────────────────────────────────────────────────
  36  | 
  37  |     protected async enterText(element: Locator, text: string) {
> 38  |         await element.fill(text);
      |                       ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  39  |     }
  40  | 
  41  |     protected async clearAndType(element: Locator, text: string) {
  42  |         await element.clear();
  43  |         await element.fill(text);
  44  |     }
  45  | 
  46  |     // ── State Checks ──────────────────────────────────────────────────────────
  47  | 
  48  |     protected async getText(element: Locator): Promise<string> {
  49  |         return await element.textContent() || '';
  50  |     }
  51  | 
  52  |     protected async getInputValue(element: Locator): Promise<string> {
  53  |         return await element.inputValue();
  54  |     }
  55  | 
  56  |     protected async getAttribute(element: Locator, attr: string): Promise<string | null> {
  57  |         return await element.getAttribute(attr);
  58  |     }
  59  | 
  60  |     protected async isVisible(element: Locator): Promise<boolean> {
  61  |         return await element.isVisible();
  62  |     }
  63  | 
  64  |     protected async isEnabled(element: Locator): Promise<boolean> {
  65  |         return await element.isEnabled();
  66  |     }
  67  | 
  68  |     protected async isDisabled(element: Locator): Promise<boolean> {
  69  |         return await element.isDisabled();
  70  |     }
  71  | 
  72  |     protected async isChecked(element: Locator): Promise<boolean> {
  73  |         return await element.isChecked();
  74  |     }
  75  | 
  76  |     // ── Waiting & Synchronization ─────────────────────────────────────────────
  77  | 
  78  |     protected async waitForElement(element: Locator, timeout: number = 5000) {
  79  |         await element.waitFor({ state: 'visible', timeout });
  80  |     }
  81  | 
  82  |     protected async waitForElementHidden(element: Locator, timeout: number = 5000) {
  83  |         await element.waitFor({ state: 'hidden', timeout });
  84  |     }
  85  | 
  86  |     protected async waitForURL(url: string | RegExp) {
  87  |         await this.page.waitForURL(url);
  88  |     }
  89  | 
  90  |     protected async waitForNetworkIdle() {
  91  |         await this.page.waitForLoadState('networkidle');
  92  |     }
  93  | 
  94  |     // ── Navigation & Page ─────────────────────────────────────────────────────
  95  | 
  96  |     protected async navigate(url: string) {
  97  |         await this.page.goto(url);
  98  |     }
  99  | 
  100 |     protected async reload() {
  101 |         await this.page.reload();
  102 |     }
  103 | 
  104 |     protected async goBack() {
  105 |         await this.page.goBack();
  106 |     }
  107 | 
  108 |     protected async getTitle(): Promise<string> {
  109 |         return await this.page.title();
  110 |     }
  111 | 
  112 |     protected async getCurrentURL(): Promise<string> {
  113 |         return this.page.url();
  114 |     }
  115 | 
  116 |     // ── Form Controls ─────────────────────────────────────────────────────────
  117 | 
  118 |     protected async selectOption(element: Locator, option: string) {
  119 |         await element.selectOption(option);
  120 |     }
  121 | 
  122 |     protected async check(element: Locator) {
  123 |         await element.check();
  124 |     }
  125 | 
  126 |     protected async uncheck(element: Locator) {
  127 |         await element.uncheck();
  128 |     }
  129 | 
  130 |     protected async uploadFile(element: Locator, filePath: string) {
  131 |         await element.setInputFiles(filePath);
  132 |     }
  133 | 
  134 |     // ── Scroll ────────────────────────────────────────────────────────────────
  135 | 
  136 |     protected async scrollIntoView(element: Locator) {
  137 |         await element.scrollIntoViewIfNeeded();
  138 |     }
```