import { Locator, Page } from "@playwright/test";

export class MyRequestsLocators {
    readonly requestsTab: Locator;
    readonly myRequestsTab: Locator;
    readonly createRequestButton: Locator;
    readonly requestTypeList: Locator;
    readonly requestTypeOption: Locator;
    readonly requestDate: Locator;
    readonly monthSelection: Locator;
    readonly firstDaySelection: Locator;
    readonly secondDaySelection: Locator;
    readonly requestDeliveryDate: Locator;
    readonly deliveryDatePicker: Locator;
    readonly requestNotes: Locator;
    readonly requestAttachments: Locator;
    readonly continueRequestButton: Locator;
    readonly submitRequestButton: Locator;
    readonly successMessage: Locator;
    readonly previewRequestButton: Locator;
    readonly cancelRequestButton: Locator;
    readonly confirmCancelButton: Locator;
    readonly cancelSuccessMessage: Locator;

    constructor(page: Page) {
        this.requestsTab = page.getByText('Requests', { exact: true });
        this.myRequestsTab = page.getByText('My Request', { exact: true });
        this.createRequestButton = page.getByRole('button', { name: 'Create New Request' }).first();
        this.requestTypeList = page.getByRole('combobox', { name: 'Select request type' });
        this.requestTypeOption = page.getByRole('option', { name: /Maternity/i });
        this.requestDate = page.locator('.date-picker-icon > svg > path').first();
        this.monthSelection = page.locator('.calendar-header > button:nth-child(3)');
        this.firstDaySelection = page.getByText('21', { exact: true });
        this.secondDaySelection = page.getByText('24', { exact: true });
        this.requestDeliveryDate = page.locator('.date-picker-icon > svg').nth(1);
        this.deliveryDatePicker = page.locator('div').filter({ hasText: /^28$/ }).nth(1);
        this.requestNotes = page.locator('#reason');
        this.requestAttachments = page.getByRole('img', { name: 'upload' });
        this.continueRequestButton = page.getByRole('button', { name: 'Continue' });
        this.submitRequestButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.getByText('Sep 21 - Sep 24,').first();
        this.previewRequestButton = page.getByRole('button', { name: 'View' }).first();
        this.cancelRequestButton = page.getByRole('button', { name: 'cancel Cancel Request' });
        this.confirmCancelButton = page.getByRole('button', { name: 'Yes, Cancel Request' });
        this.cancelSuccessMessage = page.getByText('Request canceled successfully.');
    }
}