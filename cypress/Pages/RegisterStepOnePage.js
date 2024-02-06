export class RegisterStepOnePage{

    constructor (){
        this.txtOption= "span[ng-show='currentStep.number > 0 && currentStep.number < 5']";
        
    }
  
}
export const registerStepOnePage = new RegisterStepOnePage()