 
export class InitialScreenPage{

        constructor(){
         this.buttonJoin =  'a[href="/signup/personal"]'
       

        }
        Visit(){
            cy.visit('/')
        }

        InitialRegister(){
            cy.get(this.buttonJoin).eq(0).click()
        }
        
        ValidationPage(){
       
            cy.get('.sub-title')
            .contains('Tell us about yourself').should('contain', 'Tell us about yourself')
        }
}

export const initialScreenPage = new InitialScreenPage()