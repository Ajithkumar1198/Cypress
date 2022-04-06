//const Turl = 'http://www.leafground.com/home.html'
//const ED = '//h5[text()="Edit"]'
const Email="//input[@id='email']"
const mail='email'
const logo="//img[@alt='logo Testleaf']"
const alert='Alert'
const nalert="//button[@onclick='normalAlert()']"
//const nalert='Alert Box'
//const palert='Prompt Box'
const calert='Confirm Box'
//const logo='logo Testleaf'
const rbutoption='Radio Button'
const YN="//input[@id='yes']"

class ItAutomationPage{
   
static visit()
{
 cy.visit(Cypress.env("url")) 
}
static Gettitle()
{
 cy.title().should("eq","TestLeaf - Selenium Playground");
}
static ClickEdit()
{
cy.contains("Edit").click();
//cy.get(ED).click
//cy.wait(3000);
}
 static enteremail(value)
 {
 cy.contains(mail).type(value)
 return this
 }
 static checkthevisibleLogo ()
 {
//cy.contains(logo).click();
//cy.wait(4000);
cy.xpath(logo).should("be.visible")
 }
 static clickAlertoption()
{
cy.contains(alert).click();
}
static clickNAlert()
{
// cypress automatically handle the alerts    
cy.xpath(nalert).click();
 cy.on('window:alert',function(alerttext){
     expect(alerttext).eq('I am an alert box!')
 })
}
static clickCAlert()
{
    
    cy.on('window:confirm',function(confirmtext)
     {
    //  this return method is click cancel button in confirm alert    
     return false
     })
     cy.contains(calert).click();
}
static clickRadiobut()
{
    cy.contains(rbutoption).click();
}
static YesorNoOption()
{
    cy.xpath(YN).should('be.visible').should('not.be.checked').click();
}
}
export default ItAutomationPage