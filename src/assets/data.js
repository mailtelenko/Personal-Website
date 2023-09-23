// JSON containing information for site including:
// Education, Work experience, skills, certifications, site settings

export let data = {

  // =============
  // Profile
  // =============
  bio: "I am a fourth-year Computer Engineering student studying at McMaster University. \
        I am passionate about computer hardware, with a particular interest in mixed-signal verification.",
    
  // =================
  // Site settings
  // =================
  dark_mode:     false,
  show_contact:  false,
  show_dropdown: false,


  resume_section: "",
  resume_elements: {
    education: {
      name: "education",
      icon: ["fas", "graduation-cap"],
      display_props: {
        expand:   true,
        timeline: true
      },

      elements: [
        {
          name:        "McMaster University",
          dates:       "2019 - Present",
          description: "Computer Engineering, (Co-Op)",
          image:       "mcmaster.jpg",
          points: [
            {
              title: "Course Highlights 2020",
              content: [
                {
                  title: "Principles of Programming",
                  bullets: [
                    "Learned C and Java by designing and implementing programs.",
                    "Studied the structure and uses of low and high level languages."
                  ]
                },
                {
                  title: "Logic Design",
                  bullets: [
                    "Analysed the operation of logic gates and combinational, and sequential circuits.",
                    "Designed and tested logic using Verilog HDL."
                  ]
                }
              ]
            },
            {
              title: "Clubs",
              content: [
                {
                  title: "McMaster Formula Electric",
                  bullets: [ 
                    "A student run team working on designing and fabricating an electric 1/4 scale formula style racecar. \
                     I was a member of the software and controls team which works on implementing the various digital systems across \
                     the vehicle using technologies such as CAN.",
                    "Developing a customizable dashboard interface using interpreted CAN bus information."
                  ]
                }
              ]
            },
            {
              title: "Course Highlights 2019",
              content: [
                {
                  title: "Engineering Computation",
                  bullets: [ 
                    "Analysed and implemented algorithms in Python",
                    "Studied best practices and methods of development"
                  ]
                }, 
                {
                  title: "Engineering Profession & Practice",
                  bullets: [
                    "Developed strong interpersonal and team building skills.",
                    "Studied the ethics and expectations of working in a professional setting."
                  ]
                }
              ]
            }
          ],
          location: "Hamilton, ON",
          accent:   "rgba(202 , 111, 0, .2)"
        },
        {
          name:        "William Lyon Mackenzie",
          dates:       "2015 - 2019",
          location:    "Toronto, ON",
          description: "OSSD, MaCS (Math and Computer Science)",
          points: [
            {
              title: "Course Highlights",
              content: [
                {
                  emoji: "🖥️",
                  title: "Computer Engineering Technology",
                  bullets: [
                    "Studied and applied CISCO IT training in small scale simulations.",
                    "Developed low level programs for 8085 microprocessors."
                  ]
                },
                {
                  emoji: "💽",
                  title: "Introduction to Computer Science",
                  bullets: [
                    "Worked in teams to develop full stack software in Java.",
                    "Studied computer science theory at the AP level."
                  ]
                }
              ]
            }
          ],
          image:  "wlmac.jpg",
          accent: "rgba(0,0,0,0)"
        }
      ]
    },

    "work experience": {
        name: "work experience",
        icon: ["fas", "briefcase"],
        display_props: {
          timeline: true,
          expand:   true
        },

        elements: [
          {
            name:        "McMaster University",
            dates:       "2020 - 2022",
            location:    "Hamilton, ON",
            description: "Web and Desktop Applications Assistant | Office of the Registrar",
            points: [
              {
                title:   "Responsibilities",
                content: [
                  {
                    bullets: [
                      "Provide remote support for users in a variety of hardware and software environments.",
                      "Work with members of the department to solve and thoroughly document issues as they arise.",
                      "Perform maintenance on user and backend systems."
                    ]
                  }
                ]
              }
            ],
            image:    "mcmaster2.jpg",
            accent:   "rgba(202 , 111, 0, .2)"
          },
          {
            name:        "McMaster University",
            dates:       "2020",
            location:    "Hamilton, ON",
            description: "Information Technology Assistant | Housing and Conference Services",
            points: [
              {
                title: "Responsibilities",
                content: [
                  {
                    bullets: [
                      "Provided individual and group support for users in a variety of production environments.",
                      "Troubleshooted computer systems using a priority ticketing system.",
                      "Performed maintenance on customer systems including disk imaging, virus removal, and hardware upgrades."
                    ]
                  }
                ]
              }
            ],
            image:    "mcmaster.jpg",
            accent:   "rgba(202 , 111, 0, .2)"
          },
          {
            name:        "Camp Kawartha",
            dates:       "2018 - 2020",
            description: "Head of Ropes & Lifeguard",
            location:    "Douro-Dummer, ON",
            image:       "ck.JPG",
            points: [
              {
                title: "Responsibilities",
                content: [
                  {
                    bullets: [ 
                      "Planned, communicated, and led group activities.",
                      "Worked in a team to ensure the safe operation of the waterfront and ropes areas."
                    ]
                  }
                ]
              }
            ],
            accent: "rgba(0,0,0,0)"
          }
        ]
    },

    certifications: {
      name: "certifications",
      icon: ["fas", "award"],
      size: "half",
      display_props: {
        timeline: false,
        size:     "half",
        expand:   false
      },
      elements: [
        {
          name:   "CISCO IT Essentials",
          dates:  "2020",
          image:  "keyboard.jpg",
          accent: "rgba(21 , 73, 91, .2)"
        },
        {
          name:   "FIT Network Systems and Operations with Industry Certificate",
          dates:  "2019",
          image:  "network.jpg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "FIT Software Design and Development",
          dates:  "2019",
          image:  "programming.jpeg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Standard First Aid and CPR/AED Level C",
          dates:  "2018",
          image:  "aed.jpeg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "WHMIS",
          dates:  "2018",
          image:  "whmis.jpg",
          accent: "rgba(0,0,0,0)"
        }
      ]
    },
    skills: {
      name: "skills",
      icon: ["fas", "pencil-alt"],
      display_props: {
        timeline: false,
        size:     "slim",
        expand:   false
      },
      elements: [
        {
          name:   "HTML",
          dates:  "★ ★ ★ ★ ★",
          image:  "html5.jpg",
          accent: "rgba(21 , 73, 91, .2)"
        },
        {
          name:   "CSS",
          dates:  "★ ★ ★ ★ ☆",
          image:  "css3.jpeg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "JavaScript",
          dates:  "★ ★ ★ ★ ☆",
          image:  "javascript.jpeg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Python",
          dates:  "★ ★ ★ ☆ ☆",
          image:  "python.jpg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Java",
          image:  "java.jpg",
          dates:  "★ ★ ★ ★ ☆",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Microsoft Office",
          image:  "office.jpeg",
          dates:  "★ ★ ★ ★ ★",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Google GSuite",
          image:  "gsuite.jpeg",
          dates:  "★ ★ ★ ★ ★",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Autodesk Inventor",
          image:  "inventor.jpg",
          dates:  "★ ★ ★ ☆ ☆",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Vue JS",
          image:  "vue.jpg",
          dates:  "★ ★ ☆ ☆ ☆",
          accent: "rgba(0,0,0,0)"
        }
      ]
    }
  }
}