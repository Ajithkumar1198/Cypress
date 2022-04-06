import ItAutomationPage from "../pages/ItAutomtionPage";
import { Given,Then,And} from "cypress-cucumber-preprocessor/steps";
Given('open Testleaf url',()=>{
    //const h=new ItAutomationPage()
    //yvyvygvygy
     ItAutomationPage.visit()
})
Then('click the alert option',()=>
{
ItAutomationPage.clickAlertoption()
})
And('click alert button',()=>
{
ItAutomationPage.clickNAlert()
})
And('click confirmalert',()=>{
    ItAutomationPage.clickCAlert()
})



