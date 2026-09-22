/* Project case-study copy and media.
 * Keys must match data-project="..." on cards in index.html.
 * To add a project: add a card in #work, then add a matching key here.
 */
window.Portfolio = window.Portfolio || {};
window.Portfolio.PROJECTS = {
  "bank-dashboard": {
    kicker: "Intellect Design Arena · 2025",
    title: "Bank Monitoring Dashboard",
    tags: ["Java", "Spring Boot", "Angular", "Oracle SQL", "JWT"],
    sections: [
      {
        heading: "Overview",
        text: "A live operations view of transaction status, file-processing events, and payment failures — so teams stop hunting through logs. Built during my fintech internship at Intellect Design Arena.",
      },
      {
        heading: "What it does",
        items: [
          "Surfaces payment and file events as they happen, instead of burying them in server logs.",
          "Helps operations see failures quickly and follow them back to the processing step.",
          "Sits alongside the work I did mapping the FPX online payment lifecycle into flowcharts and sequence diagrams.",
        ],
      },
      {
        heading: "What I learned",
        text: "How banking software is really operated: data integrity, full-stack delivery, and making complex payment flows readable for the people who run them.",
      },
    ],
  },
  "ai-agent": {
    kicker: "HackerRank Orchestrate · Sep 2026",
    title: "AI Financial Agent",
    tags: ["Python", "Gemini", "Agents"],
    sections: [
      {
        heading: "Overview",
        text: "A 24-hour hackathon agent that decides if a purchase is affordable — pay in full, split, wait, or don’t — against a 90-day cash forecast. No hardcoded answers. Finished in the top 14%.",
      },
      {
        heading: "What it does",
        items: [
          "Reads a short-term cash picture and recommends a money decision, not a slogan.",
          "Chooses among pay, split, wait, or skip using the agent stack rather than if/else rules.",
          "Was built to reason, not to recite a scripted reply.",
        ],
      },
      {
        heading: "What I learned",
        text: "How to brief an agent, keep tool use honest, and ship a complete decision under hackathon time pressure.",
      },
    ],
  },
  splitsmart: {
    kicker: "Final Year Project · MMU 2025",
    title: "SplitSmart — Shared Expense Tracker",
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
          "Simplifies who owes whom so the group settles in fewer payments.",
          "Keeps balances live with Firebase, including friends, personal totals, and profile settings.",
        ],
      },
      {
        heading: "What I learned",
        text: "Flutter + Firestore for real-time apps, NoSQL schema for groups and transactions, and a simple UI people of any age can use. Inspired by Splitwise — built as a cleaner, local-friendly alternative.",
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
        text: "A Java desktop system with separate doors for students, lecturers, and admins.",
      },
      {
        heading: "What it does",
        items: [
          "Students view subjects, plan semesters, and register for courses.",
          "Admins add students, manage subjects, and assign lecturers.",
          "Lecturers see who is enrolled in their subjects.",
        ],
      },
      {
        heading: "What I learned",
        text: "Deeper Java, GUI work in Scene Builder, and storing the data in XAMPP. University group assignment, 2024.",
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
        text: "A Java Swing enrollment product covering profiles, registration, and billing — designed first in Figma.",
      },
      {
        heading: "What it does",
        items: [
          "Students create and update profiles.",
          "Course selection and registration in one flow.",
          "Automated fees, discounts, and invoices.",
        ],
      },
      {
        heading: "What I learned",
        text: "Turning analysis into working software, especially the messy parts: fee rules and discounts. University group assignment, 2024.",
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
        text: "A food-ordering system that connects customer, kitchen, and admin flows through web APIs — built to practise enterprise application integration.",
      },
      {
        heading: "What it does",
        items: [
          "Backend logic and data processing in ASP.NET Core Web API, documented and tested with Swagger.",
          "Frontend in HTML, CSS, and JavaScript talking to those APIs.",
          "Hosted the API on Render and the site on GitHub Pages.",
        ],
      },
      {
        heading: "What I learned",
        text: "Connecting frontend and backend over REST, building scalable ASP.NET APIs, and applying EAI ideas to a real restaurant-style workflow.",
      },
    ],
  },
  booksy: {
    kicker: "STAI · Inter-school · 2021",
    title: "Ebook App",
    tags: ["WordPress", "Android"],
    videos: [{ src: "assets/projects/ebook-1.mov", label: "Ebook app walkthrough" }],
    sections: [
      {
        heading: "Overview",
        text: "A digital library: reading, audiobooks, and requests to publish or add titles. WordPress (Astra) plus Android Studio.",
      },
      {
        heading: "What it does",
        items: [
          "Users read books and listen to audiobooks.",
          "Authors can send a book to admin for publishing.",
          "Readers can request titles that are not in the library yet.",
        ],
      },
      {
        heading: "What I learned",
        text: "Responsive themes, plugins, content, and the unglamorous stack: GoDaddy, files, databases, SSL. Built for an inter-school Science, Technology, and Innovation event in 2021.",
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
        text: "A website wireframe and WordPress build for restaurant IT services — POS, digital menus, surveillance — for Enbaar in Oman.",
      },
      {
        heading: "What it does",
        items: [
          "Maps the services a restaurant actually buys, not a generic IT brochure.",
          "Moves from Figma into a live WordPress page that presents the offer clearly.",
        ],
      },
      {
        heading: "What I learned",
        text: "Research first, then design. Company project with Enbaar.",
      },
    ],
  },
};
