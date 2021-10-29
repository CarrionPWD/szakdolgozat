import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';



Given('I navigate to the login page', ()=> {
    cy.visit('https://www.oszkar.com/user/account/');
});

When('I type in the valid {string} and {string}', (username, password)=> {
    cy.get('[id=login-input-username]').type(username);
    cy.get('[id=login-input-password]').type(password).type('{enter}');
});


Then('The application should take me to my account screen', () => {
    cy.get('#tab-body-container > h3:nth-child(1)').should('have.text', '\n\tÜdvözlünk Elek!\n');
});

When('I type in the invalid {string} and {string}', (invusername, password)=>{
    cy.get('[id=login-input-username]').type(invusername);
    cy.get('[id=login-input-password]').type(password).type('{enter}');
});

Then('I should see an error message', ()=>{
    cy.get('[id=login-form]').should('include.text', 'Hibás felhasználónév vagy jelszó');
});