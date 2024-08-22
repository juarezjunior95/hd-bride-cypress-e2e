



// cypress/support/elements.js
const elements = {
  buttons: {
      buttonFindaShowroom: '//a[contains(.,"Find a showroom")]',
      buttonRequestNow: '.flex-col-reverse > :nth-child(2) > .MuiButtonBase-root',
      buttonSubmited: 'button[type="submit"][form="rac-form"]'
      
  },
  fields: {
      inputDealer: '[id*="Rbpra"]',
      inputById: '//input[contains(@id,":Rbpra:")]',
      inputFirstName: '//input[@name="firstName"]',
      inputLastName: '#\\:r7\\:',
      inputZipCode:  '#\\:r9\\:',
      inputPhone: 'input[name="phone"]',
      emailField: 'input[name="email"]',
      textArea: 'textarea[name="projectDescription"]',


  },
  messages: {
      titleHome: 'How to buy Hunter Douglas Window Treatments',
      titleRacForm: 'REQUEST A CONSULTATION',
      racFormSubmited:'Thank you for submitting your contact information',
      ERROR_MESSAGE_EMAIL: 'p.MuiFormHelperText-root.Mui-error',
      EXPECTED_ERROR_MESSAGE_EMAIL: 'Enter a valid email address'

  },

  checkbox: {
     checkboxGetService: 'input[type="radio"][value="Get Service & Repair"]'
}
};

export default elements;




    
