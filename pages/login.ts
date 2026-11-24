import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly url = 'https://www.saucedemo.com/';
    readonly user: Locator;
    readonly pass: Locator;
    readonly submit: Locator;
    
constructor (page: Page) {
    this.page = page;
    this.user = page.locator('[data-test="username"]');
    this.pass = page.locator ('[data-test="password"]');
    this.submit = page.locator ('[data-test="login-button"]');

}

async goto () {
    await this.page.goto(this.url);

}

async login (user: string, pass: string) {
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.submit.click();
}

}
