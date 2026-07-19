export interface LocatorDescriptor {
    using: string;
    value: string;
}

export const loginLocators: Record<string, LocatorDescriptor> = {
    subdomainField:     { using: '-flutter key', value: 'subdomain_field' },
    emailField:         { using: '-flutter key', value: 'email_field' },
    passwordField:      { using: '-flutter key', value: 'password_field' },
    loginButton:        { using: '-flutter text containing', value: 'Login' },
    // PLACEHOLDER — no confirmed locator yet, see note below
    errorMessage:       { using: '-flutter type', value: 'ErrorText' },
    pageTitle:          { using: '-flutter text containing', value: 'Sign in to your Account' },
    homePageButton:       { using: '-flutter text containing', value: 'Home' },
};
