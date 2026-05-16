import { Page } from "@playwright/test";
import Actions from "../Utils/actionsUtils";
import { MyRequestsLocators } from "../Locators/myRequestsLocators";

export class MyRequestsPage extends Actions {
    private readonly locators: MyRequestsLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new MyRequestsLocators(page);
    }

    async navigateToMyRequests() {
        await this.click(this.locators.requestsTab);
        await this.click(this.locators.myRequestsTab);
    }

    async createNewRequest(requestType: string, notes: string) {
        await this.click(this.locators.createRequestButton);
        await this.click(this.locators.requestTypeList);
        await this.click(this.locators.requestTypeOption.filter({ hasText: requestType }));
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
        await this.click(this.locators.submitRequestButton);
        //Cancel the request to make new request creation possible in next test run
        await this.page.waitForTimeout(2000);
        await this.click(this.locators.previewRequestButton);
        await this.click(this.locators.cancelRequestButton);
        await this.click(this.locators.confirmCancelButton);
    }

    async getSuccessMessage(): Promise<string> {
        return await this.getText(this.locators.successMessage);
    }

    async getCancelSuccessMessage(): Promise<string> {
        return await this.getText(this.locators.cancelSuccessMessage);
    }
}