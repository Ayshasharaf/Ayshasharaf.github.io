/* Project case-study copy and media.
 * Keys must match data-project="..." on cards in index.html.
 * To add a project: add a card in #work, then add a matching key here.
 */
window.Portfolio = window.Portfolio || {};
window.Portfolio.PROJECTS = {
  "bank-dashboard": {
    kicker: "Intellect Design Arena · 2025",
    title: "Bank Monitoring Dashboard",
    tags: ["Java", "Spring Boot", "REST API", "Angular", "TypeScript", "Oracle SQL"],
    sections: [
      {
        heading: "Overview",
        text: "The bank had no real-time visibility into daily operations. Tracking Feed/EOD files was a manual struggle, and payment failures (like DuitNow) often went unnoticed until a customer complained. Built a centralized dashboard to fix that, end-to-end, during a fintech internship at Intellect Design Arena.",
      },
      {
        heading: "What it does",
        items: [
          "Analytics page: daily trends across transactions, new users, and digital payment growth.",
          "Monitoring page: live Feed/EOD file-processing status with failure alerts, so issues surface before customers notice.",
          "Full stack: UI designed in Figma → frontend in Angular/TypeScript → Spring Boot server exposing RESTful APIs → Oracle SQL for data retrieval, a standard request/response loop from frontend to server to storage and back.",
        ],
      },
    ],
  },
  "ai-agent": {
    kicker: "HackerRank Orchestrate · Sep 2026",
    title: "AI Financial Agent: “Buy or Wait?”",
    tags: ["Python", "Gemini-3.6-flash", "Agents"],
    sections: [
      {
        heading: "Overview",
        text: "A 24-hour hackathon agent that decides if a purchase is affordable (pay in full, split, wait, or don’t) by simulating each user’s cash position day-by-day for 90 days. No hardcoded answers. Finished #401 of 3,062 (top 13%).",
      },
      {
        heading: "What it does",
        items: [
          "Splits the work by trust: Gemini only extracts facts from messages/receipts (never does math); Python owns every number (FX, conflict resolution, recurrence, the 90-day solvency simulation, and ranking).",
          "Simulates day-by-day cash flow against a minimum-balance floor to find the largest safe payment today, not just current balance minus expenses.",
          "Ranks candidate plans (full / partial / installments / wait) and only proposes cutting flexible spending if nothing else clears the deadline.",
        ],
      },
    ],
  },
  splitsmart: {
    kicker: "Final Year Project · MMU 2025",
    title: "SplitSmart: Shared Expense Tracker",
    tags: ["Flutter", "Dart", "Firebase Firestore"],
    images: [
      { src: "assets/projects/fyp1.png", alt: "SplitSmart friends, settle up, groups, and split screens" },
      { src: "assets/projects/fyp2.png", alt: "SplitSmart trip expenses, balances, report, and settings" },
    ],
    sections: [
      {
        heading: "Overview",
        text: "A cross-platform shared expense tracker for logging group spend, simplifying debts, and settling with the fewest transactions. Shipped as an Android APK and a web app.",
      },
      {
        heading: "What it does",
        items: [
          "Logs shared expenses and splits them equally or with custom ratios.",
          "Simplifies who-owes-whom so groups settle in fewer transactions.",
          "Keeps balances live via Firestore, including friends, personal totals, and profile settings.",
        ],
      },
    ],
  },
  "student-management": {
    kicker: "OOP & Data Structures · MMU 2024",
    title: "Student Management System",
    tags: ["Java", "Scene Builder", "XAMPP"],
    images: [
      { src: "assets/projects/management1.png", alt: "Student management admin course screen" },
      { src: "assets/projects/management2.png", alt: "Student management semester planning screen" },
    ],
    sections: [
      {
        heading: "Overview",
        text: "A Java desktop system with separate portals for students, lecturers, and admins.",
      },
      {
        heading: "What it does",
        items: [
          "Students view subjects, plan semesters, and register for courses.",
          "Admins add students, manage subjects, and assign lecturers.",
          "Lecturers see who’s enrolled in their subjects.",
        ],
      },
    ],
  },
  "student-enrollment": {
    kicker: "Object-Oriented Analysis & Design · MMU 2024",
    title: "Student Enrollment System",
    tags: ["Java", "Swing", "Figma"],
    images: [{ src: "assets/projects/enrollment.png", alt: "Enrollment screens for login, profile, courses, billing, and admin" }],
    sections: [
      {
        heading: "Overview",
        text: "A Java Swing enrollment product covering profiles, registration, and billing, designed first in Figma.",
      },
      {
        heading: "What it does",
        items: [
          "Students create and update profiles, then select and register for courses in one flow.",
          "Automates fee calculation, discounts, and invoice generation.",
        ],
      },
    ],
  },
  "web-services": {
    kicker: "Enterprise Application Integration · CIT6324",
    title: "Web Services & Integration",
    tags: ["ASP.NET Core", "REST", "HTML", "CSS", "JavaScript"],
    sections: [
      {
        heading: "Overview",
        text: "A food-ordering system (SSHBites) connecting customer, kitchen, and admin flows through web APIs, built to practice enterprise application integration.",
      },
      {
        heading: "What it does",
        items: [
          "Backend logic in ASP.NET Core Web API, documented and tested with Swagger.",
          "Frontend in HTML/CSS/JS consuming those APIs.",
          "Deployed live: API on Render, site on GitHub Pages.",
        ],
      },
    ],
  },
  booksy: {
    kicker: "STAI · Inter-school · 2021",
    title: "Ebook App",
    tags: ["WordPress", "Android"],
    videos: [{ src: "assets/projects/ebook-1.mp4", label: "Ebook app walkthrough" }],
    sections: [
      {
        heading: "Overview",
        text: "A digital library app for reading, audiobooks, and publishing requests, built with WordPress (Astra theme) and Android Studio.",
      },
      {
        heading: "What it does",
        items: [
          "Users read books and listen to audiobooks.",
          "Authors can submit a book to admin for publishing.",
          "Readers can request titles not yet in the library.",
        ],
      },
    ],
  },
  wireframe: {
    kicker: "Enbaar, Oman",
    title: "Website Wireframe",
    tags: ["Figma", "WordPress"],
    images: [{ src: "assets/projects/wireframe.jpg", alt: "Restaurant IT services website layouts for POS, menus, and surveillance" }],
    sections: [
      {
        heading: "Overview",
        text: "A website wireframe and WordPress build for restaurant IT services (POS, digital menus, surveillance) for Enbaar in Oman.",
      },
      {
        heading: "What it does",
        items: [
          "Maps the actual services a restaurant buys",
          "Moves from Figma wireframe into a live WordPress page.",
        ],
      },
    ],
  },
};
