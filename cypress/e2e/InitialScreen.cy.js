

import { initialScreenPage } from "../Pages/InitialScreenPage.js"

describe ("Initial Screen and search button join today",function (){


    it("Join Today, Register personal", function (){
      cy.visit('/')
      initialScreenPage.InitialRegister()
      initialScreenPage.RegisterStepOne()
      initialScreenPage.RegisterStepTwo()
      initialScreenPage.RegisterStepThree()
      initialScreenPage.RegisterStepFourt()

    })

    it("Login", function (){
      cy.visit('/')
     

    })
   
  

})