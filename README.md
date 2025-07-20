# 📅 Recurring Date Picker Component

A minimal, user-friendly React component that lets users create and preview **recurring dates** — similar to how apps like **TickTick** or **Google Calendar** handle repeat tasks or events.

---

## 🌟 Features

- 🌀 **Recurrence Types**: Daily, Weekly, Monthly, Yearly
- ⚙️ **Customization**:
  - Every X days/weeks/months/years
  - Choose specific days (like Mon/Wed/Fri)
  - Monthly patterns like "Second Friday of every month"
- 📅 **Date Range**: Set start and optional end date
- 👀 **Live Preview**: Mini-calendar preview of upcoming recurring dates
- 💨 **Smooth UX**: Includes subtle animations using Framer Motion
- 🧠 **Modular & Clean Code**: Built with reusable React components and context

---

## 🔧 Tech Stack

- ⚛️ **React** (with Create React App)
- 🎨 **Bootstrap** & Bootstrap Icons for styling
- 🧠 **React Context API** for state
- 🗓 **date-fns** for date calculations
- 🎞 **Framer Motion** for subtle animations

---

## 📸 Screenshots

<img width="1343" height="617" alt="Screenshot 2025-07-20 222811" src="https://github.com/user-attachments/assets/87d3bc04-4a58-4770-abff-356fe2d3a41a" />




## 🚀 Live Demo

Try it live in a cloud IDE:



---

## 🛠️ Getting Started (Run Locally)

```bash
git clone the repo
cd datepicker
npm install
npm start

💡 How It Works
Choose a recurrence type: daily, weekly, etc.

Customize it: interval, days of week, or patterns like “last Monday”

Pick a start and (optional) end date

🎉 Preview the upcoming recurring dates instantly in a calendar-like format

Example: “Repeat every 2 weeks on Monday & Thursday, starting July 1st”
→ You’ll instantly see the next 20 dates following that pattern

📁 Project Structure
bash
Copy
Edit
src/
├── components/          # All UI parts (RecurrenceOptions, CalendarPreview, etc.)
├── context/             # Global recurrence state using React Context
├── utils/               # Date generation logic using date-fns
├── tests/               # Unit and integration tests (optional)
├── App.js               # Root component
└── index.js             # Entry point
📽 Loom Video Walkthrough
🎥 Watch the Video Demo

Covers:

Functionality in action

Thought process and code walkthrough

My face explaining it :)

🙌 Author
Made with care by Sucharita
