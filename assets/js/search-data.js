// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Applied mathematics and machine learning for industrial systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-repositories",
              title: "Repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-outreach",
              title: "Outreach",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/outreach/";
              },
            },{id: "dropdown-seminars",
              title: "Seminars",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/seminars/";
              },
            },{id: "dropdown-talks",
              title: "Talks",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/talks/";
              },
            },{id: "dropdown-hackathons",
              title: "Hackathons",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/hackathons/";
              },
            },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-cerno",
          title: 'Cerno',
          description: "An AI interviewer that replaces resume screening with adaptive voice interviews, structured scoring, and actionable candidate feedback.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_cerno/";
            },},{id: "projects-webi",
          title: 'WEBI',
          description: "An AI copilot for structured bond products, built at the Paris Fintech Hackathon.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_paris_fintech/";
            },},{id: "projects-wiring-the-fly-brain-into-a-world-model",
          title: 'Wiring the Fly Brain into a World Model',
          description: "A JEPA world model built on a complete fly-brain connectome. 2nd place with team Piaget at Hack the World(s).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_hack_the_worlds/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6F%75%69%73.%62%65%72%74%68%69%65%72@%70%6F%6C%79%74%65%63%68%6E%69%71%75%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/louis-tier", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LouisTier", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cFVpOmcAAAAJ", "_blank");
        },
      },{
        id: 'social-arxiv',
        title: 'Arxiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/search/stat?searchtype=author&query=Berthier,+L", "_blank");
        },
      },{
        id: 'social-leetcode',
        title: 'LeetCode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u/Louis_Brthr/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
