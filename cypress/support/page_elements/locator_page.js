



// cypress/support/elements.js
const elements = {
  buttons: {
      buttonFindaShowroom: '//a[contains(.,"Find a showroom")]',
      buttonRequestNow: '//button[contains(text(), "REQUEST NOW")]',
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
      racFormSubmited:'Thank you for submitting your contact information'

  },

  checkbox: {
     checkboxGetService: 'input[type="radio"][value="Get Service & Repair"]'
}
};

export default elements;




    
