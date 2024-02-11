

export class LoguinPage{
    constructor (){
this.lnkLogininit = 'a[href="/login?return_to="]'
this.txtEmailAdress = '#username'
this.txtpassword = 'password'

    }
    init(){
        
        cy.get(this.lnkLogininit).eq(0).click()

        cy.get('.sub-title')
            .contains('Sign in to uTest')
            .should('Sign in to uTest'); 


    }

}

export const loguinPage = new LoguinPage();