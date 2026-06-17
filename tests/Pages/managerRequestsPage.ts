import { Page, expect } from "@playwright/test";
import Actions from "../Utils/actionsUtils";
import { ManagerRequestsLocators } from "../Locators/managerRequestsLocators";

export class ManagerRequestsPage extends Actions {
    private readonly locators: ManagerRequestsLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new ManagerRequestsLocators(page);
    }

    async navigateToManagerRequests() {
        await this.click(this.locators.requestsTab);
        await this.waitForElement(this.locators.managerRequestsTab);
        await this.click(this.locators.managerRequestsTab);
        await expect(this.locators.pageHeader).toBeVisible();
        await this.page.waitForLoadState('networkidle');
    }

    async createNewRequestFunction() {
        await this.waitForElement(this.locators.createRequestButton);
        await this.click(this.locators.createRequestButton);
        await expect(this.locators.createRequestPopupHeader).toBeVisible();
        await this.waitForElement(this.locators.requestTypeList);
        await this.click(this.locators.requestTypeList);
    }
    async createNewMaternityRequest(requestType: string, notes: string) {
        await this.click(this.locators.maternityRequestTypeOption);
        await this.click(this.locators.employeeNamefield);
        await this.click(this.locators.employeeNameSelector);
        await this.click(this.locators.requestDate);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.click(this.locators.monthSelection);
        await this.waitForElement(this.locators.firstDaySelection);
        await this.click(this.locators.firstDaySelection);
        await this.waitForElement(this.locators.secondDaySelection);
        await this.click(this.locators.secondDaySelection);
        await this.click(this.locators.requestDeliveryDate);
        await this.waitForElement(this.locators.deliveryDatePicker);
        await this.click(this.locators.deliveryDatePicker);
        await this.enterText(this.locators.requestNotes, notes);
        await this.click(this.locators.continueRequestButton);
    }
    async submitRequest() {
        await this.click(this.locators.submitRequestButton);
    }
    async rejectRequest() {
        //Reject the request to make new request creation possible in next test run
        await this.page.waitForTimeout(2000);
        await this.click(this.locators.rejectRequestButton);
        await this.click(this.locators.rejectionReasonField);
        await this.click(this.locators.rejectionReasonOption);
        await this.enterText(this.locators.rejectionReasonNotesField, "Test rejection");
        await this.click(this.locators.rejectionReasonconfirmButton);
        await this.waitForElement(this.locators.rejectSuccessLabel);
        await expect(this.locators.rejectSuccessLabel).toBeVisible();
    }
}