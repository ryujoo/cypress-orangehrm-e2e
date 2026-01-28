# Cypress OrangeHRM E2E Project

## 📌 Overview

This project demonstrates end‑to‑end (E2E) and API testing using **Cypress** against the OrangeHRM demo application. It includes:

* UI smoke tests designed for CI stability
* Full local E2E tests for critical workflows
* API‑only tests for fast backend validation
* GitHub Actions CI integration using the official Cypress action

The goal is to showcase **real‑world test strategy**, not just test scripts.

---

## 🧪 Test Strategy

### 1️⃣ CI Smoke Tests (Fast & Stable)

Used in GitHub Actions to avoid flakiness from demo environments.

* Login validation
* Dashboard UI validation
* Logout validation

File:

```
cypress/e2e/ci-smoke.cy.js
```

### 2️⃣ Full E2E Tests (Local)

Run locally for deeper coverage.

* Login scenarios
* Add Employee flow

Files:

```
cypress/e2e/loginTest.cy.js
cypress/e2e/addEmployee.cy.js
```

### 3️⃣ API Tests

Fast, UI‑independent validation.

* API login test

File:

```
cypress/e2e/api-login.cy.js
```

---

## ⚙️ Tech Stack

* **Cypress** (E2E & API testing)
* **JavaScript**
* **GitHub Actions** (CI)
* **Node.js 18**

---

## 🚀 Running Tests Locally

Install dependencies:

```bash
npm install
```

Open Cypress Test Runner:

```bash
npx cypress open
```

Run tests headlessly:

```bash
npx cypress run
```

---

## 🔄 Continuous Integration (CI)

This project uses **GitHub Actions** with the official Cypress GitHub Action.

CI runs:

* UI smoke test
* API login test

Workflow file:

```
.github/workflows/cypress.yml
```

CI Strategy:

> Only stable smoke tests run in CI to ensure fast feedback and avoid flaky failures from demo environments.

---

## 🧠 Key QA Concepts Demonstrated

* Smoke vs Full E2E testing strategy
* Custom Cypress commands (`login`, `logout`)
* Fixture‑based test data
* Handling known demo‑app JS exceptions safely
* CI stability and performance optimization

---

## 📎 Demo Application

Tests run against:

> [https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)

⚠️ This is a public demo site and may occasionally behave inconsistently.

---

## 👤 Author

Created as a hands‑on Cypress + CI learning project with a focus on **resume‑ready practices**.

---

## ✅ Status

🟢 CI Passing | 🟢 Smoke Tests Stable | 🟢 API Tests Passing
