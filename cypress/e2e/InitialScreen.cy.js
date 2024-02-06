
import { initialScreenPage } from "../Pages/InitialScreenPage.js"

describe ("Initial Screen and search button join today",function (){
  beforeEach(() => {
       
    initialScreenPage.Visit()
    })

    it("Join Today", function (){
       initialScreenPage.Visit()
      initialScreenPage.InitialRegister()
      initialScreenPage.ValidationPage()

    })
  
})