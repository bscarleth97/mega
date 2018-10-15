@mega
Feature: Mega

    As a client I should be able to create and account

    Scenario: A client must be able to create and account
        Given a client is on the home page
        Then click on "#startholder > div.bottom-page.scroll-block.startpage > div.top-head > div > div.top-buttons > a.default-white-button.small.no-hover.red-bg.create-account-button"
        When values are properly set
        And click on "#register-check-registerpage2"
        And click on "#register_form > div.big-red-button.height-48.register-button.right.active"
        When confirmation window appears
        Then click on "#bodyel > div.fm-dialog.registration-success.registration-page-success.special > div.reg-success-special > div.reg-resend-email > div.reg-resend-button-bl > div"
        