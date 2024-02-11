
import users from '../fixtures/users.json'

export class InitialScreenPage{

        constructor(){

        this.PagInit={
            lnkWhyUtest:'a[href="/why-utest"]',
            lnkAboutUs:'a[href="/about-us"]',
            lnkProjects:'a[href="/projects"]',
            lnkLogin:'a[href="/login?return_to="',
            btnJoin:  'a[href="/signup/personal"]',
            btnBecomeTester:'a[href="/signup"]',

        }
        this.StepOne={
            txtFirstName:'#firstName',
            txtLastName:'#lastName',
            txtEmail:'#email',
            LtBirthMonth:'#birthMonth',
            LtBirthDay:'#birthDay',
            LtBirthYear:'#birthYear',
            txtLanguagesSpoken:'#languages',
            btnNext:'.text-right > .btn'
            

        }
        this.StepTwo={
            txtcity:'#city',
            txtZip:'#zip',
            txtCountry:'div[name="countryId"]',
            inputCountry:':nth-child(1) > .ui-select-container > .ui-select-search',
            txtAssertAlert:'span[class ="check-mark"]',
            btnNextDevices:'a[href="#"]'
            

        }
       
        this.btnBack = 'a[aria-label="Back"]'

        this.StepThree={
            
            ListComputer:'div[placeholder="Select OS"]',
            inputComputer:'#web-device > :nth-child(1) > .ui-select-box > .ui-select-container > .ui-select-search',
            ListVersion:'div[placeholder="Select a Version"]',
            inputVersion:'#web-device > :nth-child(2) > .ui-select-box > .ui-select-container > .ui-select-search',
            ListLanguage:'div[placeholder="Select OS language"]',
            inputLanguage:'#web-device > :nth-child(3) > .ui-select-box > .ui-select-container > .ui-select-search',
            ListMobileDevice:'div[placeholder="Select Brand"]',
            inputMobile:'ul li span[class="ui-select-choices-row-inner"]',
            ListModel:'div[placeholder="Select a Model"]',
            ListOperatingSystem:'div[placeholder="Select OS"]',
            btnNextSystem:'.next-step > .btn'
           
    
        }

        this.StepFourt={
            txtPassword:'#password',
            txtRepeatPassword:'#confirmPassword',
            chkTerm:'#termOfUse',
            chkAcept:'#privacySetting',
            btnCompleteSetup:'a[aria-label="Complete Setup"]'
            

        }

        this.RegisterSucces={
            lnkLoguin:'a[href="/login?return_to="]',
    
        }


        }

        InitialRegister(){
            cy.get(this.PagInit.btnJoin).eq(0).click()
        }

        RegisterStepOne(){
          
            cy.get('.sub-title')
            .contains('Tell us about yourself').should('contain', 'Tell us about yourself')
            
                cy.fixture('users').as('usersJson') 

                let month = Number(users.birthMonth)
                let day = Number(users.birthDay)
                let year= String(users.birthYear)

                        
                         cy.get('span[id="firstNameError"]').should('not.be.visible')
                        cy.get(this.StepOne.txtFirstName).type(users.first_Name)
                        cy.get(this.StepOne.txtLastName).type(users.last_Name)
                        cy.get(this.StepOne.txtEmail).type(users.email)
                        cy.get(this.StepOne.LtBirthMonth).select(month)
                        cy.get(this.StepOne.LtBirthDay).select(day)
                        cy.get(this.StepOne.LtBirthYear).select(16,'year')
                        cy.log(year,'aquiiiiii')
                        cy.get(this.StepOne.btnNext).click()
                       
        

         }

        RegisterStepTwo(){
            
            
            let city = (users.city)
            let zip = Number(users.zip)
            let country = String(users.country)
            let alertVisible = Boolean( cy.get(this.StepTwo.txtAssertAlert).eq(0).should('to.be.visible'))

            cy.get('.sub-title')
            .contains('Add your address').should('contain', 'Add your address')
            cy.get(this.StepTwo.txtAssertAlert).should('to.exist')
        

            if (alertVisible === false)
            
                {
                   
                     cy.get(this.StepTwo.btnNextDevices).eq(0).click();

            } else {
                
                     cy.get(this.StepTwo.txtcity).type(city);
                     cy.get(this.StepTwo.txtZip).type(zip);
                     cy.get(this.StepTwo.txtCountry).eq(0).click();
                     cy.get(this.StepTwo.inputCountry).type(country,'{enter}')
                     cy.get(this.StepTwo.btnNextDevices).eq(0).click();
                
        }

        }
        
        RegisterStepThree(){
    
                let computer = (users.computerOS1)
                let version = (users.version1)
                let language = (users.languages1)
               
    
                cy.get('.sub-title')
                .contains('Tell us about your devices').should('contain', 'Tell us about your devices');

                cy.get(this.StepThree.ListComputer).eq(0).click()
                cy.get(this.StepThree.inputComputer).type(computer,'{enter}')
                cy.get(this.StepThree.ListVersion).click()
                cy.get(this.StepThree.inputVersion).type(version,'{enter}')
                cy.get(this.StepThree.ListLanguage).click()
                cy.get(this.StepThree.inputLanguage).type(language,'{enter}')
                //inputs mobile
                cy.get(this.StepThree.ListMobileDevice).click()
                cy.get(this.StepThree.inputMobile).eq(1).click()
                cy.get(this.StepThree.ListModel).click();
                cy.get(this.StepThree.inputMobile).eq(1).click()
                cy.get(this.StepThree.ListOperatingSystem).eq(1).click();
                cy.get(this.StepThree.inputMobile).eq(0).click()
                cy.get(this.StepThree.btnNextSystem).click()
      
        }

        RegisterStepFourt(){
    
            let pass = (users.pass)
             
            cy.get('.sub-title')
            .contains('The last step').should('contain', 'The last step');

            cy.get(this.StepFourt.txtPassword).type(pass)
            cy.get(this.StepFourt.txtRepeatPassword).type(pass)
            cy.get(this.StepFourt.chkTerm).check()
            cy.get(this.StepFourt.chkAcept).check()
            cy.get(this.StepFourt.btnNextSystem).click()       
    
        } 

        RegisterSucces(){
    
 
            cy.get('.sub-title')
            .contains('Welcome to the worlds largest community of freelance software testers!')
            .should('contain', 'Welcome to the worlds largest community of freelance software testers!');      
    
        }           
}

export const initialScreenPage = new InitialScreenPage()