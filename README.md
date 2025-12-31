#  Pastebin Lite (with TTL)

A lightweight **Pastebin-like application** built using **Next.js (App Router)** with **file-based storage**, supporting **TTL (Time To Live)** for paste expiration.

---

## Features

- Create text pastes
- Generate shareable paste URLs
- TTL (Time To Live) support
- Paste expiration handling
- File-based storage (no paid database)
- Simple and beginner-friendly

---

## Tech Stack

- **Next.js (App Router)**
- **JavaScript**
- **Node.js**
- **File-based storage (JSON)**

---

## Project Structure
pastebin-lite/ │ ├── app/ │   ├── api/ │   │   └── pastes/ │   │       ├── route.js        # Create paste API │   │       └── [id]/route.js   # Get paste API │   │ │   ├── p/ │   │   └── [id]/page.js        # Paste view page │   │ │   ├── lib/ │   │   └── store.js            # Storage + TTL logic │   │ │   ├── page.js                 # Home page │   └── layout.js │ ├── data/ │   └── pastes.json             # Stored pastes │ ├── package.json └── README.md
---

##  TTL (Time To Live)

- TTL is provided while creating a paste
- Stored as an `expiresAt` timestamp
- On every paste request:
  - Current time is compared with `expiresAt`
  - If expired, the paste is not accessible
  - User sees **“Paste expired”**

---

## Example Paste Data

```json
{
  "content": "Hello World",
  "createdAt": 1720000000000,
  "expiresAt": 1720000060000,
  "status": "ACTIVE"
}
# run locally
Bash

npm install
npm run dev

----
## open in Browser

http://localhost:3000
-----
## Create paste API
Post/api/pastes

Json

{
    "content":"My Paste Text",
    "ttlSeconds":60
}

------
## View Paste

http://localhost:3000/p/{pasteid}

-------
## Future Enhancements

Auto-delete expired pastes
Max view limit
Password-protected pastes
Syntax highlighting
Database / Redis support
Deployment to Vercel

-------

Author
-------
Padmavathi Pandi
Frontend/Full Stack Developer

--------