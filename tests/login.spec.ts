import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';

test ('Primer Login', async({page}) => {
const login = new LoginPage(page);
await login.goto();
await login.login('standard_user', 'secret_sauce');
await expect(page).toHaveURL(/inventory/);

})

test ('Login fallido', async({page}) => {
const login = new LoginPage(page);
await login.goto();
await login.login('standard_user', 'wrong_secret_sauce');
await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
})

