import { ChainablePromiseElement } from 'webdriverio';

export class LoginLocators {
    readonly subdomainField: ChainablePromiseElement;
    readonly emailField:     ChainablePromiseElement;
    readonly passwordField:  ChainablePromiseElement;
    readonly loginButton:    ChainablePromiseElement;
    readonly errorMessage:   ChainablePromiseElement;
    readonly pageTitle:      ChainablePromiseElement;
    readonly dashboardIndicator: ChainablePromiseElement;

    constructor() {
        this.subdomainField = $(async () => browser.findElement('-flutter key', 'subdomain_field'));
        this.emailField     = $(async () => browser.findElement('-flutter key', 'email_field'));
        this.passwordField  = $(async () => browser.findElement('-flutter key', 'password_field'));
        this.loginButton    = $(async () => browser.findElement('-flutter text containing', 'Login'));
        this.errorMessage   = $(async () => browser.findElement('-flutter type', 'ErrorText')); // PLACEHOLDER — no confirmed locator yet, see note below
        this.pageTitle      = $(async () => browser.findElement('-flutter text containing', 'Sign in to your Account'));
        this.dashboardIndicator = $(async () => browser.findElement('-flutter text containing', 'Dashboard')); // PLACEHOLDER — no confirmed post-login element yet; verify via Appium Inspector against a real successful login, or get a dev-provided key.
    }
}
