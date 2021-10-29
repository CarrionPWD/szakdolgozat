import {Given,And, When} from "cypress-cucumber-preprocessor/steps";

Given('I logged into the application and Im on the search page', ()=>{
    cy.visit('https://www.oszkar.com/user/account/');
    cy.get('[id=login-input-username]').type('testingoszkar');
    cy.get('[id=login-input-password]').type('testingOszkar2021').type('{enter}');
    cy.get('#main-dropdown-list > ul > li:nth-child(2) > a').click();
});

When('The user fills the departure and destination search fields', ()=>{
    cy.get('#search-from-g').type("Szeged");
    cy.get('#search-to-g').type("Budapest");
});

And('Clicks on the refresh button', ()=>{
    cy.reload();
});

Then('The form should be empty', ()=>{
    cy.get('#search-from-g').should('be.empty');
    cy.get('#search-to-g').should('be.empty');
    cy.get('#searchdate').should('be.empty');
});

When('The user fills the departure, destination and date fields',()=>{
    cy.get('#search-from-g').type("Szeged");
    cy.get('#search-to-g').type("Budapest");
    cy.get('#searchdate').type('2021-10-25');
});

And('Clicks on the search button', ()=>{
    cy.get('#main-search-box > span > button.btn.btn-large.green-button').click();
});

Then('Results should be displayed',()=>{
    cy.get('#search-result-list > div.mobile-table > h3').should('include.text', "2021. október 25, Hétfő");
    cy.url().should('eq', "https://utitars.oszkar.com/date-2021-10-25/honnan-Szeged/hova-Budapest/");
    cy.get('#search-result-list > div.mobile-table > div:nth-child(3) > div.span8.cursor-ponter > a').should('include.text', "Szeged");
    cy.get('#search-result-list > div.mobile-table > div:nth-child(3) > div.span8.cursor-ponter > a').should('include.text', "Budapest");

});

When('The user clicks on the detailed search button and fills the form', ()=>{
    cy.get('#show-advanced-search-options').click();
    cy.get('#search-from-g').type("Szeged");
    cy.get('#search-to-g').type("Budapest");
    cy.get('#searchdate').type('2021-10-25');
    cy.get('#search-hour').type('8');
    cy.get('#th').type('20');
    cy.get('#search-sofor').type("Hkory");
});

And('Clicks on the advanced search button',()=>{
    cy.get('#detailed-search-submit').click();
});

Then('I should see the correct results',()=>{
    cy.get('#search-result-list > div.mobile-table > h3').should('include.text', "2021. október 25, Hétfő");
    cy.url().should('eq', "https://utitars.oszkar.com/date-2021-10-25/fh-8/honnan-Szeged/hova-Budapest/sofor-Hkory/th-20/");
    cy.get('#search-result-list > div.mobile-table > div:nth-child(2) > div.span4 > div > a:nth-child(2) > span:nth-child(4)').should('include.text', "Hkory");
});