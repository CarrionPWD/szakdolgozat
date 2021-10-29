import {Given,And, When} from "cypress-cucumber-preprocessor/steps";

Given('I logged into the application and Im on the passenger advert page', ()=>{
    cy.visit('https://www.oszkar.com/user/account/');
    cy.get('[id=login-input-username]').type('testingoszkar');
    cy.get('[id=login-input-password]').type('testingOszkar2021').type('{enter}');
    cy.get('#main-content > ul > li:nth-child(1) > a').click();
    cy.get('#ul-submenu > li:nth-child(3) > a').click();
});

When('The user doesnt fill the destination',()=>{


    cy.get('#startdate').type("2021-10-25");
    cy.get('#enddate').type("2021-10-25");
    cy.get('#departure_city_gautocomplete').type("Szeged");
});

And('Clicks on the post button',()=> {

        cy.get('#tab-body-container > form > div.center > input').click();

});

Then('An error message should be displayed', ()=>{
    cy.get('#tab-body-container > div > div').should('include.text', 'Érkezési település: Kötelező');
});

When('The user chooses a past date',()=>{

    cy.get('#startdate').type("2021-10-22");
    cy.get('#enddate').type("2021-10-22");
    cy.get('#departure_city_gautocomplete').type("Szeged");
    cy.get('#arrival_city_gautocomplete').type("Budapest");
});

Then('A date error message should be displayed', ()=>{
    cy.get('#tab-body-container > div > div').should('include.text', 'Indulási dátum: Múltbéli idő nem lehet');
});

When('The user fills the departure and destination fields',()=>{

    cy.get('#departure_city_gautocomplete').type("Szeged");
    cy.get('#arrival_city_gautocomplete').type("Budapest");
});

And('Clicks on the Oszkar logo button', ()=>{
    cy.get('#header-dropdown-mainpage > a > img').click();
});

Then('I should see the main menu', ()=>{
    cy.get('#mbx > h1').should('include.text', 'Spórolj az utazáson!');
});

