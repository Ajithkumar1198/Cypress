import ItAutomationPage from "../pages/ItAutomtionPage";
import { Given,Then,And} from "cypress-cucumber-preprocessor/steps";
Given('open Testleaf url',()=>{
    //const h=new ItAutomationPage()
     ItAutomationPage.visit()
})
Then('radiobutton option',()=>
{
ItAutomationPage.clickRadiobut()
})
And ('click yes or no option',()=>
{
ItAutomationPage.YesorNoOption()
})
