// ==============================================================================
// JSON containing information for site including:
// Education, Work experience, skills, certifications, site settings
// Not technically a JSON file but a JS file with a JSON datastructure to allow
// for commenting.
// ==============================================================================

export let data = {

  // =============
  // Profile
  // =============
  bio: "I am an Senior ASIC Digital Design Engineer at Synopsys working on SerDes IP verification. \
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
      name:         "education",
      icon:         ["fas", "graduation-cap"],
      timeline:     true,
      display_grid: false,

      elements: [
        {
          name:        "McMaster University",
          dates:       "2019 - 2024",
          description: "Computer Engineering, (Co-Op)",
          image:       "mcmaster.jpg",
          points: [
            {
              title: "Course Highlights",
              content: [
                {
                  title: "Digital Systems Design",
                  emoji: "🖼️",
                  bullets: [
                    "Implemented colour space conversion, interpolation, and inverse-signal transformation on virtual FPGA hardware in SystemVerilog.",
                    "Designed modules to efficiently compute matrix operations and manage data in embedded and external memory.",
                    "Completed unit tests by verifying the operation of individual modules in ModelSim."
                  ]
                },
                {
                  title: "Microprocessor Systems Project",
                  emoji: "📐",
                  bullets: [
                    "Developed embedded software for an ARM Cortex platform in C and assembly; wrote visualization software in Python.",
                    "Utilized the I2C and UART protocols to transfer data between the time-of-flight sensor, microcontroller, and data visualization software."
                  ]
                }
                // {
                //   title: "Logic Design",
                //   bullets: [
                //     "Analysed the operation of logic gates in combinational and sequential circuits.",
                //     "Designed and tested logic using Verilog HDL."
                //   ]
                // },
                // {
                //   title: "Principles of Programming",
                //   bullets: [
                //     "Implemented and debugged programs in both C and Java",
                //     "Studied the efficiency and use cases of common algorithms."
                //   ]
                // }
              ]
            },
            {
              title: "Clubs",
              content: [
                {
                  title: "McMaster Formula Electric",
                  emoji: "🏎️",
                  bullets: [ 
                    "Tasked with building a customizable dashboard as a member of the software and controls team.",
                    'Worked with previous team leads to design the structure of the software to meet hardware and competition constraints.',
                    "Organized remote development of the dashboard by preparing and delegating sub-projects.",
                    "Worked on integrating real-time metrics using data pulled from components on the CAN bus."
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
        name:         "work experience",
        icon:         ["fas", "briefcase"],
        timeline:     true,
        display_grid: false,

        elements: [
          {
            name:        "Synopsys",
            dates:       "2024 - Present",
            location:    "Mississauga, ON",
            description: "ASIC Digital Design, Senior Engineer",
            points: [
              {
                content: [
                  {
                    title: "Experience",
                    emoji: "💡",
                    bullets: [
                      "Verification of PAM4 SerDes PHY IP",
                      "Fast and comprehensive root cause analysis of RTL simulation failures",
                      "Testplan design and implementation"
                    ]
                  },
                  {
                    title: "Responsibilities",
                    emoji: "📋",
                    bullets: [
                      "Feature and label verification ownership",
                      "Supporting team debug and bring-up activities"
                    ]
                  }
                ]
              },
            ],
            image:    "silicon.jpg",
            accent:   "rgba(20, 10, 95, .2)"
          },
          {
            name:        "Synopsys",
            dates:       "2022 - 2023",
            location:    "Mississauga, ON",
            description: "Digital Verification Engineering Intern",
            points: [
              {
                content: [
                  {
                    title: "Experience",
                    emoji: "💡",
                    bullets: [
                      "Interned in a mixed-signal verification team on SerDes PHY IP verification.",
                      "Taped-out two projects which implemented different protocols.",
                    ]
                  },
                  {
                    title: "Responsibilities",
                    emoji: "📋",
                    bullets: [
                      "Implemented and maintained constrained-random SystemVerilog UVM testbenches.",
                      "Debugged and documented mixed-signal simulation failures from daily regressions.",
                      "Wrote and implemented verification test plans."
                    ]
                  }
                ]
              },
            ],
            image:    "circuit.jpg",
            accent:   "rgba(20, 10, 95, .7)"
          },
          {
            name:        "McMaster University",
            dates:       "2020 - 2022",
            location:    "Hamilton, ON",
            description: "Web and Desktop Applications Assistant | Multiple Departments",
            points: [
              {
                title:    "Office of the Registrar",
                subtitle: "Web and Desktop Applications Assistant",
                content: [
                  {
                    title: "Experience",
                    emoji: "🧑‍💻",
                    bullets: [
                      "Developed multiple full stack software solutions in Python for internal tasks resulting in improved efficiency of recurring process.",
                      "Maintained technical and end-user documentation for support tickets and internally developed software.",
                      "Provided remote and in-person desktop and application support for users in a variety of production environments."
                    ]
                  }
                ]
              },
              {
                title:    "Housing & Conference Services",
                subtitle: "IT Assistant",
                content: [
                  {
                    title: "Experience",
                    emoji: "🖥️",
                    bullets: [
                      "Provided individual and group support for users in a variety of production environments.",
                      "Troubleshooted computer systems using a priority ticketing system.",
                      "Performed maintenance on customer systems including disk imaging, virus removal, and hardware upgrades."
                    ]
                  }
                ]
              }
            ],
            image:    "mcmaster3.png",
            accent:   "rgba(202 , 111, 0, .2)"
          },
          {
            name:        "Camp Kawartha",
            dates:       "2018 - 2020",
            description: "Counsellor, Head of Ropes & Lifeguard",
            location:    "Douro-Dummer, ON",
            image:       "ck.jpg",
            points: [
              {
                title: "Cabin Counsellor",
                content: [
                  {
                    title: "Responsibilities",
                    emoji: "🏕️",
                    bullets: [ 
                      "Monitored for and supported campers through personal and social challenges.",
                      "Documented and escalated information to ensure a safe environment for all campers.",
                      "Planned, communicated, and led group activities for a variety of age groups."
                    ]
                  }
                ]
              },
              {
                title: "Head of Ropes",
                content: [
                  {
                    title: "Responsibilities",
                    emoji: "🪢",
                    bullets: [ 
                      "Took on additional responsibilities in the high and low-rope areas while working as a counsellor and lifeguard.",
                      "Worked with the land activity director to set up and maintain the ropes courses.",
                      "Set up, supervised and led team activities in the ropes areas."
                    ]
                  }
                ]
              },
              {
                title: "Lifeguard",
                content: [
                  {
                    title: "Responsibilities",
                    emoji: "🛟",
                    bullets: [ 
                      "Balanced lifeguard shifts with existing responsibilities as a counsellor and head of ropes.",
                      "Actively monitored swim and boating areas for safety issues.",
                      "Coordinated with the lifeguard team on responses to active situations."
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
      name:         "certifications",
      icon:         ["fas", "award"],
      timeline:     false,
      display_grid: true,

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
      name:         "skills",
      icon:         ["fas", "pencil-alt"],
      timeline:     false,
      display_grid: true,

      elements: [
        {
          name:   "SystemVerilog",
          image:  "pcb.jpg",
          accent: "rgba(5 , 15, 135, .2)"
        },
        {
          name:   "Python",
          image:  "python.jpg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Creative Problem Solving",
          image:  "rubiks_cube.jpg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "HTML",
          image:  "html5.jpg",
          accent: "rgba(21 , 73, 91, .2)"
        },
        {
          name:   "CSS",
          image:  "css3.jpeg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "JavaScript",
          image:  "javascript.jpeg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Java",
          image:  "java.jpg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Microsoft Office",
          image:  "office.jpeg",
          accent: "rgba(0,0,0,0)"
        },
        {
          name:   "Google GSuite",
          image:  "gsuite.jpeg",
          accent: "rgba(0,0,0,0)"
        }
      ]
    }
  }
}