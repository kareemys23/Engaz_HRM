import { Locator, Page } from "@playwright/test";
import { attachment, ContentType, step } from "allure-js-commons";

export default class Actions {
    protected readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // ── Mouse & Keyboard ──────────────────────────────────────────────────────

    protected async click(element: Locator) {
        await element.click();
    }

    protected async doubleClick(element: Locator) {
        await element.dblclick();
    }

    protected async rightClick(element: Locator) {
        await element.click({ button: 'right' });
    }

    protected async hover(element: Locator) {
        await element.hover();
    }

    protected async pressKey(element: Locator, key: string) {
        await element.press(key);
    }

    protected async dragAndDrop(source: Locator, target: Locator) {
        await source.dragTo(target);
    }

    // ── Text Input ────────────────────────────────────────────────────────────

    protected async enterText(element: Locator, text: string) {
        await element.fill(text);
    }

    protected async clearAndType(element: Locator, text: string) {
        await element.clear();
        await element.fill(text);
    }

    // ── State Checks ──────────────────────────────────────────────────────────

    protected async getText(element: Locator): Promise<string> {
        return await element.textContent() || '';
    }

    protected async getInputValue(element: Locator): Promise<string> {
        return await element.inputValue();
    }

    protected async getAttribute(element: Locator, attr: string): Promise<string | null> {
        return await element.getAttribute(attr);
    }

    protected async isVisible(element: Locator): Promise<boolean> {
        return await element.isVisible();
    }

    protected async isEnabled(element: Locator): Promise<boolean> {
        return await element.isEnabled();
    }

    protected async isDisabled(element: Locator): Promise<boolean> {
        return await element.isDisabled();
    }

    protected async isChecked(element: Locator): Promise<boolean> {
        return await element.isChecked();
    }

    // ── Waiting & Synchronization ─────────────────────────────────────────────

    protected async waitForElement(element: Locator, timeout: number = 10000) {
        await element.waitFor({ state: 'visible', timeout });
    }

    protected async waitForElementHidden(element: Locator, timeout: number = 10000) {
        await element.waitFor({ state: 'hidden', timeout });
    }

    protected async waitForURL(url: string | RegExp) {
        await this.page.waitForURL(url);
    }

    protected async waitForNetworkIdle() {
        await this.page.waitForLoadState('networkidle');
    }

    // ── Navigation & Page ─────────────────────────────────────────────────────

    protected async navigate(url: string) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    protected async reload() {
        await this.page.reload();
    }

    protected async goBack() {
        await this.page.goBack();
    }

    protected async getTitle(): Promise<string> {
        return await this.page.title();
    }

    protected async getCurrentURL(): Promise<string> {
        return this.page.url();
    }

    // ── Form Controls ─────────────────────────────────────────────────────────

    protected async selectOption(element: Locator, option: string) {
        await element.selectOption(option);
    }

    /** Selects an option from a PrimeNG p-select dropdown by its trigger placeholder text and option label. */
    protected async selectDropdownOption(triggerText: string, optionText: string) {
        await this.page.getByText(triggerText, { exact: true }).click();
        await this.page.getByRole('option', { name: optionText, exact: true }).click();
    }

    /** Navigates a PrimeNG p-datepicker to the given day/month/year and selects it. */
    protected async pickCalendarDate(datepickerInput: Locator, day: number, monthShort: string, year: number) {
        await datepickerInput.click();
        await this.page.locator('.p-datepicker-select-year').click();
        for (let i = 0; i < 20; i++) {
            const yearTexts = await this.page.locator('.p-datepicker-year').allInnerTexts();
            if (yearTexts.includes(String(year))) break;
            const firstYear = parseInt(yearTexts[0], 10);
            await this.page.locator(year < firstYear ? '.p-datepicker-prev-button' : '.p-datepicker-next-button').click();
        }
        await this.page.locator('.p-datepicker-year', { hasText: String(year) }).click();
        await this.page.locator('.p-datepicker-month', { hasText: monthShort }).click();
        await this.page.locator('.p-datepicker-day:not(.p-datepicker-other-month)', { hasText: new RegExp(`^${day}$`) }).first().click();
    }

    protected async check(element: Locator) {
        await element.check();
    }

    protected async uncheck(element: Locator) {
        await element.uncheck();
    }

    protected async uploadFile(element: Locator, filePath: string) {
        await element.setInputFiles(filePath);
    }

    // ── Scroll ────────────────────────────────────────────────────────────────

    protected async scrollIntoView(element: Locator) {
        await element.scrollIntoViewIfNeeded();
    }

    // ── Screenshot ────────────────────────────────────────────────────────────

    protected async takeScreenshot(name: string) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

    // ── Assertions ────────────────────────────────────────────────────────────

    protected async assertStep<T>(stepName: string, assertion: () => Promise<T>): Promise<T> {
        return await step(stepName, async () => {
            try {
                return await assertion();
            } finally {
                const screenshot = await this.page.screenshot();
                await attachment(`${stepName} - screenshot`, screenshot, ContentType.PNG);
            }
        });
    }
}