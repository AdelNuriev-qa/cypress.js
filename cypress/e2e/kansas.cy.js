describe('Автотесты для покупки нового автара', function () {
    it('Успешная покупка', function () {
         cy.visit('https://pokemonbattle.me/login');
         cy.get(':nth-child(1) > .auth__input').type('adel.nuri3v@yandex.ru');
         cy.get('#password').type('61alemodA008');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(2) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ADEL NURIEV');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
         cy.get('.payment__adv').click()
        }),

         it('Не верный код из смс', function () {
            cy.visit('https://pokemonbattle.me/login');
            cy.get(':nth-child(1) > .auth__input').type('adel.nuri3v@yandex.ru');
            cy.get('#password').type('61alemodA008');
            cy.get('.auth__button').click();
            cy.get('.header__btns > [href="/shop"]').click();
            cy.get(':nth-child(3) > .shop__button').click();
            cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
            cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
            cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
            cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ADEL NURIEV');
            cy.get('.pay-btn').click();
            cy.get('#cardnumber').type('58555');
            cy.get('.payment__submit-button').click();
            cy.get('.payment__mistake').contains('Не совпадает с отправленным кодом');
            cy.get('.payment__defolt-decline').click();
            cy.get('.pay__comeback-button').click()
})
})