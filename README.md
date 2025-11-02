# 🚀 Cypress Automation Exercise

Projeto de automação E2E com **Cypress** para o site [Automation Exercise](https://automationexercise.com).

---

## 📋 Casos de Teste Implementados

✅ **Test Case 1:** Register User  
✅ **Test Case 2:** Login User with correct email and password  
✅ **Test Case 3:** Login User with incorrect email and password  
✅ **Test Case 4:** Logout User  
✅ **Test Case 5:** Register User with existing email  
✅ **Test Case 6:** Contact Us Form  
✅ **Test Case 8:** Verify All Products and product detail page  
✅ **Test Case 9:** Search Product  
✅ **Test Case 10:** Verify Subscription in home page  
✅ **Test Case 15:** Place Order: Register before Checkout  

---

## 🛠️ Tecnologias Utilizadas

- **Cypress v13.6.2** – Framework de testes E2E  
- **@faker-js/faker** – Geração de dados de teste  
- **cypress-mochawesome-reporter** – Relatórios de teste  
- **Node.js v18+** – Runtime JavaScript  

---

## 📁 Estrutura do Projeto

```bash
cypress-automation-exercise/
├── .github/
│   └── workflows/
│       └── ci.yml                  
├── cypress/
│   ├── e2e/                        
│   │   ├── test-case-01.cy.js
│   │   ├── test-case-02.cy.js
│   │   ├── test-case-03.cy.js
│   │   ├── test-case-04.cy.js
│   │   ├── test-case-05.cy.js
│   │   ├── test-case-06.cy.js
│   │   ├── test-case-08.cy.js
│   │   ├── test-case-09.cy.js
│   │   ├── test-case-10.cy.js
│   │   └── test-case-15.cy.js
│   ├── fixtures/                  
│   │   ├── users.json
│   │   └── testfile.txt
│   ├── support/
│   │   ├── commands.js             
│   │   ├── e2e.js                 
│   │   └── pages/                  
│   │       ├── HomePage.js
│   │       ├── LoginPage.js
│   │       ├── SignupPage.js
│   │       ├── AccountPage.js
│   │       ├── ContactUsPage.js
│   │       └── ProductsPage.js
│   ├── screenshots/               
│   ├── videos/                    
│   └── reports/                   
├── cypress.config.js              
├── package.json
├── .gitignore
└── README.md
