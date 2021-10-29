import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given('I logged into the application', ()=>{
    cy.visit('https://www.oszkar.com/user/account/');
    cy.get('[id=login-input-username]').type('testingoszkar');
    cy.get('[id=login-input-password]').type('testingOszkar2021').type('{enter}');
});

When('Im on the my account page',()=>{

    cy.get('#tab-body-container > h3:nth-child(1)').should('have.text', '\n\tÜdvözlünk Elek\n');
});

Then('I should see all elements are present',()=>{
    cy.get('#main-dropdown-list > ul > li:nth-child(2) > a').should('include.text', 'Keresés');
    cy.get('#main-dropdown-list > ul > li:nth-child(2) > ul > li:nth-child(1) > a').should('include.text', 'Autós hirdetések');
    cy.get('#main-dropdown-list > ul > li:nth-child(2) > ul > li:nth-child(2) > a').should('include.text', 'Utasok hirdetései');
    cy.get('#main-dropdown-list > ul > li.dropdown.hidden-phone > a').should('include.text', 'Személyes');
    cy.get('#main-dropdown-list > ul > li.dropdown.hidden-phone > ul > li:nth-child(1) > a').should('include.text','Utas menü');
    cy.get('#main-dropdown-list > ul > li.dropdown.hidden-phone > ul > li:nth-child(2) > a').should('include.text', 'Autós menü');
    cy.get('#main-dropdown-list > ul > li.dropdown.hidden-phone > ul > li:nth-child(3) > a').should('include.text','Értékelések');
    cy.get('#main-dropdown-list > ul > li.dropdown.hidden-phone > ul > li:nth-child(4) > a').should('include.text','Üzenetek');
    cy.get('#main-dropdown-list > ul > li.dropdown.hidden-phone > ul > li:nth-child(5) > a').should('include.text','Beállítások');
    cy.get('#main-dropdown-list > ul > li.dropdown.hidden-phone > ul > li:nth-child(6) > a').should('include.text','Pénzügyek');
    cy.get('#header-dropdown-forum > a').should('include.text','Közösség');
    cy.get('#header-dropdown-forum > ul > li:nth-child(1) > a').should('include.text', 'Oszkár Bolt');
    cy.get('#header-dropdown-forum > ul > li:nth-child(2) > a').should('include.text', 'Üzenőfal');
    cy.get('#header-dropdown-forum > ul > li:nth-child(3) > a').should('include.text','Blog');
    cy.get('#header-dropdown-forum > ul > li:nth-child(4) > a').should('include.text','Csevegő');
    cy.get('#header-login > li.blue-highlight > a').should('include.text', 'Szabad helyek hirdetése');
    cy.get('#header-login > li:nth-child(2) > a > span').should('have.text', ' kredit');
    cy.get('#header-login > li:nth-child(2) > ul > li:nth-child(1) > a').should('include.text','Egyenlegfeltöltés');
    cy.get('#header-login > li:nth-child(2) > ul > li:nth-child(2) > a').should('include.text','Egyenleg történet');
    cy.get('#header-new-message > a > i').should('have.class', 'flaticon-mail');
    cy.get('#header-login > li:nth-child(4)').should('include.text', '(nahlikdomician)');
    cy.get('#header-login > li:nth-child(4) > a > span.padded-login').click();
    cy.get('#header-login > li.open > ul > li:nth-child(1) > a').should('include.text', 'Helyfoglalásaim');
});