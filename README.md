# Card Validation API

A REST API that validates card numbers using the **Luhn algorithm**, built with Node.js, Express, and TypeScript.

---

## Tech Stack

- **Node.js** — Runtime environment
- **Express.js** — HTTP framework
- **TypeScript** — Strict type safety (`strict: true`)
- **Jest + ts-jest** — Testing

- ## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

```bash
git clone https://github.com/ememuo/cardValidation-api.git
cd cardValidation-api
npm install
```

### Running the Server

```bash
npm start
```

Server runs on **http://localhost:3000**

### Running Tests

```bash
npm test
```


---

## Design Decisions

**Why Luhn?**
The Luhn algorithm is the industry standard checksum used by all major card networks. It validates card number integrity without any external API calls or dependencies — the right fit for this scope.


**Why separate middleware?**
Error handlers live in `middleware/errorHandler.ts` to keep `app.ts` clean — each file has one clear job.

**Why does an invalid card return 200?**
The request was valid and processed successfully — `valid: false` communicates the outcome. A `400` is reserved for bad requests where input is missing or malformed.
