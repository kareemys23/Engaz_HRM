import type { ChainablePromiseElement } from 'webdriverio';
import { addAttachment, step } from '@wdio/allure-reporter';

export default class Actions {

    // ── Locator Resolution ───────────────────────────────────────────────────

    // Unlike Playwright's web Locator objects, WebdriverIO + Appium native-app
    // locators can't be resolved synchronously — browser.findElement() is
    // inherently async. This method centralizes that one unavoidable async
    // resolution step so locator files themselves can stay clean, framework-
    // agnostic data instead of each field carrying its own async lookup.
    protected async resolve(locator: { using: string; value: string }) {
        const el = await browser.findElement(locator.using, locator.value);
        return $(el);
    }

    // Builds a full LocatorDescriptor from a generated key (see keyGenerator.ts),
    // defaulting to the '-flutter key' strategy the app's key convention is built on.
    protected byKey(key: string): { using: string; value: string } {
        return { using: '-flutter key', value: key };
    }

    // ── Mouse & Keyboard ──────────────────────────────────────────────────────

    protected async click(element: ChainablePromiseElement) {
        await element.click();
    }

    protected async doubleClick(element: ChainablePromiseElement) {
        await element.doubleClick();
    }

    // Touch devices have no right-click; long-press is the nearest mobile equivalent.
    protected async longPress(element: ChainablePromiseElement, duration: number = 1000) {
        await browser.action('pointer', { parameters: { pointerType: 'touch' } })
            .move({ origin: element, x: 0, y: 0 })
            .down()
            .pause(duration)
            .up()
            .perform();
    }

    protected async dragAndDrop(source: ChainablePromiseElement, target: ChainablePromiseElement) {
        await source.dragAndDrop(target);
    }

    // ── Text Input ────────────────────────────────────────────────────────────

    protected async enterText(element: ChainablePromiseElement, text: string) {
        await element.setValue(text);
    }

    protected async clearAndType(element: ChainablePromiseElement, text: string) {
        await element.clearValue();
        await element.setValue(text);
    }

    // ── Keyboard ──────────────────────────────────────────────────────────────

    // Appium throws if hideKeyboard() is called while no keyboard is shown —
    // swallow that case so callers can always call this defensively.
    protected async hideKeyboard() {
        try {
            await browser.hideKeyboard();
        } catch {
            // No keyboard was visible — nothing to hide.
        }
    }

    // ── State Checks ──────────────────────────────────────────────────────────

    protected async getText(element: ChainablePromiseElement): Promise<string> {
        return await element.getText();
    }

    protected async getInputValue(element: ChainablePromiseElement): Promise<string> {
        return await element.getValue();
    }

    protected async getAttribute(element: ChainablePromiseElement, attr: string): Promise<string | null> {
        return await element.getAttribute(attr);
    }

    protected async isVisible(element: ChainablePromiseElement): Promise<boolean> {
        return await element.isDisplayed();
    }

    protected async isEnabled(element: ChainablePromiseElement): Promise<boolean> {
        return await element.isEnabled();
    }

    protected async isDisabled(element: ChainablePromiseElement): Promise<boolean> {
        return !(await element.isEnabled());
    }

    // ── Waiting & Synchronization ─────────────────────────────────────────────

    protected async waitForElement(element: ChainablePromiseElement, timeout: number = 10000) {
        await element.waitForDisplayed({ timeout });
    }

    protected async waitForElementHidden(element: ChainablePromiseElement, timeout: number = 10000) {
        await element.waitForDisplayed({ timeout, reverse: true });
    }

    // ── Scroll ────────────────────────────────────────────────────────────────

    protected async scrollIntoView(element: ChainablePromiseElement) {
        await element.scrollIntoView();
    }

    // ── Gestures ──────────────────────────────────────────────────────────────

    // touchAction (JSONWP) is deprecated in WebdriverIO 8+ in favor of the W3C
    // Actions API — browser.action('pointer', { parameters: { pointerType: 'touch' } }).
    // If this dependency is upgraded and that API changes, this is the method to revisit.
    protected async swipe(
        direction: 'up' | 'down' | 'left' | 'right',
        element?: ChainablePromiseElement,
    ) {
        let startX: number;
        let startY: number;
        let endX: number;
        let endY: number;

        if (element) {
            const location = await element.getLocation();
            const size = await element.getSize();
            const centerX = location.x + size.width / 2;
            const centerY = location.y + size.height / 2;

            switch (direction) {
                case 'up':
                    startX = centerX;
                    startY = location.y + size.height * 0.8;
                    endX = centerX;
                    endY = location.y + size.height * 0.2;
                    break;
                case 'down':
                    startX = centerX;
                    startY = location.y + size.height * 0.2;
                    endX = centerX;
                    endY = location.y + size.height * 0.8;
                    break;
                case 'left':
                    startX = location.x + size.width * 0.8;
                    startY = centerY;
                    endX = location.x + size.width * 0.2;
                    endY = centerY;
                    break;
                case 'right':
                    startX = location.x + size.width * 0.2;
                    startY = centerY;
                    endX = location.x + size.width * 0.8;
                    endY = centerY;
                    break;
            }
        } else {
            const { width, height } = await browser.getWindowSize();
            const centerX = width / 2;
            const centerY = height / 2;

            switch (direction) {
                case 'up':
                    startX = centerX;
                    startY = height * 0.8;
                    endX = centerX;
                    endY = height * 0.2;
                    break;
                case 'down':
                    startX = centerX;
                    startY = height * 0.2;
                    endX = centerX;
                    endY = height * 0.8;
                    break;
                case 'left':
                    startX = width * 0.8;
                    startY = centerY;
                    endX = width * 0.2;
                    endY = centerY;
                    break;
                case 'right':
                    startX = width * 0.2;
                    startY = centerY;
                    endX = width * 0.8;
                    endY = centerY;
                    break;
            }
        }

        await browser.action('pointer', { parameters: { pointerType: 'touch' } })
            .move({ x: Math.round(startX), y: Math.round(startY) })
            .down()
            .pause(100)
            .move({ duration: 400, x: Math.round(endX), y: Math.round(endY) })
            .up()
            .perform();
    }

    // ── Screenshot ────────────────────────────────────────────────────────────

    protected async takeScreenshot(name: string) {
        await browser.saveScreenshot(`screenshots/${name}.png`);
    }

    // ── Assertions ────────────────────────────────────────────────────────────

    protected async assertStep<T>(stepName: string, assertion: () => Promise<T>): Promise<T> {
        return await step(stepName, async () => {
            try {
                return await assertion();
            } finally {
                const screenshot = await browser.takeScreenshot();
                await addAttachment(`${stepName} - screenshot`, Buffer.from(screenshot, 'base64'), 'image/png');
            }
        });
    }
}
