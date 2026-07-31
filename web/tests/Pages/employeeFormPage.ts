import { Page, expect } from "@playwright/test";
import Actions from "../Utils/actionsUtils";
import { EmployeeFormLocators } from "../Locators/employeeFormLocators";
import { EmployeeData } from "../../../testData/employeeData";

export class EmployeeFormPage extends Actions {
    private readonly locators: EmployeeFormLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new EmployeeFormLocators(page);
    }

    async navigateToEmployeeForm() {
        await this.click(this.locators.employeeManagementTab);
        await this.assertStep('Employee form header is visible', () => expect(this.locators.employeeFormHeader).toBeVisible());
        await this.page.waitForLoadState('networkidle');
    }

    async AddEmployeeForm() {
        await this.navigateToEmployeeForm();
        await this.click(this.locators.addEmployeeBtn);
        await this.assertStep('Create Employee form is visible', () => expect(this.locators.createEmployeeHeader).toBeVisible());
    }

    async fillPersonalInformation(data: EmployeeData) {
        await this.enterText(this.locators.legalFullNameInput, data.legalFullNameArabic);
        await this.enterText(this.locators.firstNameInput, data.firstName);
        await this.enterText(this.locators.lastNameInput, data.lastName);
        await this.selectDropdownOption('Select Nationality', data.nationality);
        await this.selectDropdownOption('Select ID type', data.idType);
        await this.enterText(this.locators.nationalIdInput, data.nationalId);
        await this.pickCalendarDate(this.locators.nationalIdExpiryDatepicker, data.nationalIdExpiry.day, data.nationalIdExpiry.monthShort, data.nationalIdExpiry.year);
        await this.pickCalendarDate(this.locators.birthdayDatepicker, data.dateOfBirth.day, data.dateOfBirth.monthShort, data.dateOfBirth.year);
        await this.selectDropdownOption('Select gender', data.gender);
        await this.selectDropdownOption('Select marital status', data.maritalStatus);
        await this.selectDropdownOption('Select religion', data.religion);
        if (data.gender === 'Male') {
            await this.selectDropdownOption('Select military status', data.militaryStatus);
        }
        await this.click(this.locators.nextButton);
    }

    async fillContactInformation(data: EmployeeData) {
        await this.enterText(this.locators.personalEmailInput, data.personalEmail);
        await this.enterText(this.locators.personalPhoneInput, data.personalPhone);
        await this.enterText(this.locators.workEmailInput, data.workEmail);
        await this.enterText(this.locators.workPhoneInput, data.workPhone);
        await this.enterText(this.locators.addressInput, data.address);
        await this.enterText(this.locators.emergencyContactNameInput, data.emergencyContactName);
        await this.enterText(this.locators.emergencyContactPhoneInput, data.emergencyContactPhone);
        await this.click(this.locators.nextButton);
    }

    /**
     * TODO: Employment Details, Financials & Payroll, System Access and Assets & Documents
     * (steps 3-6) are not implemented yet. Step 3's required "Parent Manager" dropdown
     * returns "No results found" for every Department/Position combination available in
     * this QA environment - automating the rest of the wizard is blocked until a
     * Department/Position with a real assigned manager is identified.
     */
}
