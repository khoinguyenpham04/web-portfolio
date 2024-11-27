import { InlineCode } from "@/once-ui/components";


const person = {
    firstName: 'Noah',
    lastName:  'Pham',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Enter your email to request {person.firstName}'s Technical Resume</>,
    description: <></>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/khoinguyenpham04',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/phamtrankhoinguyen-noah/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ptknguyen04@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>From Code to Impact: Crafting User-Centric Solutions</>,
    subline: <>I'm Noah, a computer science at <InlineCode>The University of Manchester</InlineCode>, where I learn and build intuitive and impactful applications.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/noah-pham/15min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Noah is a Manchester-based software engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'HyperLoop Manchester',
                timeframe: 'September 2023 - Present',
                role: 'Electronics and Software Engineer',
                achievements: [
                    <>Programmed and designed a multi-panel GUI using C++ and Qt Widgets to display real-time camera feeds, motor variables, GPS location data, 3D pod heat maps, and system logs.</>,
                    <>Established real-time communication between the micro-controllers and GUI to ensure seamless sensor updates.</>,
                    <>Leveraged HTML, CSS and JavaScript to enhance the front-end user experience and modernised the design architectureof HyperLoop’s main website through front-end development.</>,
                    <>Summarised and presented send weekly reports and documentation of contributions to team members using LATEX and Microsoft Office tools.</>
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-06.jpeg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'The University of Manchester',
                timeframe: 'September 2023 - Present',
                role: 'Student Representative for the Department of Computer Science',
                achievements: [
                    <>Elected to represent over 400 students, facilitated peer communication and utilized surveys for feedback.</>,
                    <>Successfully conveyed student feedback and concerns during regular Student Liaison Committee meetings constructively.</>,
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
            name: 'University of Manchester - BSc Computer Science',
            description: [<>
                • Relevant Coursework: Data Science, Operating System, Computer Engineering & Architecture, Discrete Mathematics.
                • Activities: Society, GreatUniHack 23’, Hackchester - Cyber Security, Manchester Trading Society and MUDSS.

            </>,],
            },
        ]
        },
        technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-2.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-3.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-6.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-8.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.JPG', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-10.JPG', 
            alt: 'image',
            orientation: 'horizontal'
        },
        // { 
        //     src: '/images/gallery/img-11.jpeg', 
        //     alt: 'image',
        //     orientation: 'vertical'
        // },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        // { 
        //     src: '/images/gallery/img-15.jpg', 
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        { 
            src: '/images/gallery/img-16.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };