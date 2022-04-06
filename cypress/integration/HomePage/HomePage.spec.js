// <reference types="Cypress"/>
//import HomePage from '../pages/HomePage'
import ItAutomationPage from '../pages/ItAutomtionPage'
import { Given, Then,And} from "cypress-cucumber-preprocessor/steps";
//describe('Test Suite',function(){
//it('login homepage', function () {
    //const h=new HomePage()
    //h.visit()

    

//})
//})


Given('open Testleaf url',()=>{
   //const h=new ItAutomationPage()
    ItAutomationPage.visit()
})
Then('Check the page Title',()=>{
  ItAutomationPage.Gettitle()
})
And('click edit view',()=>{
  ItAutomationPage.ClickEdit()

})
And('check the Testleaflogo',()=>{
  ItAutomationPage.checkthevisibleLogo()
})
 And('enter email id {string}', (value) => {
 ItAutomationPage. enteremail(value);
 })
 

