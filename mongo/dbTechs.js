// drop collection if already exists
db.technologies.drop();
// insert new documents into collection
db.technologies.insert([
    {
        "name": "PHP",
        "description": "Hypertext Preprocessor (or simply PHP) is a server-side scripting language designed for web development but also used as a general-purpose programming language.",
        "difficulty": 3,
        "courses": [
            {"code": "WEBD3000", "name": "Web Application Programming II"},
            {"code": "WEBD3027", "name": "Web Design Fundamentals"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"},
            {"code": "ISEC2055", "name": "Web App Security"}
        ]
    },
    {
        "name": "ASP.NET",
        "description": "ASP.NET is a free and open-source web framework, and the next generation of ASP.NET, developed by Microsoft and the community. It is a modular framework that runs on both the full .NET Framework, on Windows, and the cross-platform .NET.",
        "difficulty": 4,
        "courses": [
            {"code": "INET2005", "name": "Web Application Programming I"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"},
            {"code": "ISEC2055", "name": "Web App Security"}
        ]
    },
    {
        "name": "Javascript (ES21)",
        "description": "JavaScript often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.",
        "difficulty": 3,
        "courses": [
            {"code": "PROG2700", "name": "Client Side Programming"},
            {"code": "INET2005", "name": "Web Application Programming I"},
            {"code": "WEBD3000", "name": "Web Application Programming II"},
            {"code": "PROG3017", "name": "Full Stack Programming"},
            {"code": "WEBD3027", "name": "Web Design Fundamentals"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"},
            {"code": "ISEC2055", "name": "Web App Security"}
        ]
    },
    {
        "name": "Flexbox",
        "description": "CSS flex-box layout is a CSS3 web layout model. It is in the W3C's candidate recommendation (CR) stage. The flex layout allows responsive elements within a container to be automatically arranged depending upon screen size (or device).",
        "difficulty": 2,
        "courses": [
            {"code": "PROG2700", "name": "Client Side Programming"},
            {"code": "INET2005", "name": "Web Application Programming I"},
            {"code": "WEBD3000", "name": "Web Application Programming II"},
            {"code": "PROG3017", "name": "Full Stack Programming"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"}
        ]
    },
    {
        "name": "HTML",
        "description": "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
        "difficulty": 1,
        "courses": [
            {"code": "WEBD1000", "name": "Website Development"},
            {"code": "PROG2700", "name": "Client Side Programming"},
            {"code": "INET2005", "name": "Web Application Programming I"},
            {"code": "WEBD3000", "name": "Web Application Programming II"},
            {"code": "PROG3017", "name": "Full Stack Programming"},
            {"code": "WEBD3027", "name": "Web Design Fundamentals"},
            {"code": "WEBD3100", "name": "Web Design Fundamentals"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"}
        ]
    },
    {
        "name": "Java",
        "description": "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.",
        "difficulty": 3,
        "courses": [
            {"code": "PROG1400", "name": "Intro to Object Oriented Programming"}
        ]
    },
    {
        "name": "CSS",
        "description": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.",
        "difficulty": 1,
        "courses": [
            {"code": "WEBD1000", "name": "Website Development"},
            {"code": "PROG2700", "name": "Client Side Programming"},
            {"code": "INET2005", "name": "Web Application Programming I"},
            {"code": "WEBD3000", "name": "Web Application Programming II"},
            {"code": "PROG3017", "name": "Full Stack Programming"},
            {"code": "WEBD3027", "name": "Web Design Fundamentals"},
            {"code": "WEBD3100", "name": "Web Design Fundamentals"}
        ]
    },
    {
        "name": "Tailwind CSS",
        "description": "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of 'utility' CSS classes that can be used to style each element by mixing and matching.",
        "difficulty": 1,
        "courses": [
            {"code": "PROG3017", "name": "Full Stack Programming"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"}
        ]
    },
    {
        "name": "Webpack",
        "description": "Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.",
        "difficulty": 2,
        "courses": [
            {"code": "PROG2700", "name": "Client Side Programming"},
            {"code": "PROG3017", "name": "Full Stack Programming"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"}
        ]
    },
    {
        "name": "Sass",
        "description": "Sass (Syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
        "difficulty": 1,
        "courses": [
            {"code": "PROG2700", "name": "Client Side Programming"},
            {"code": "PROG3017", "name": "Full Stack Programming"}
        ]
    },
    {
        "name": "Python",
        "description": "Python is an interpreted high-level programming language for general-purpose programming. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace.",
        "difficulty": 2,
        "courses": [
            {"code": "PROG1700", "name": "Logic and Programming"}
        ]
    },
    {
        "name": "GitHub",
        "description": "GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.",
        "difficulty": 2,
        "courses": [
            {"code": "WEBD3030", "name": "Collaborative Tools for Application Development"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"}
        ]
    },
    {
        "name": "React",
        "description": "React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
        "difficulty": 4,
        "courses": [
            {"code": "PROG3017", "name": "Full Stack Programming"},
            {"code": "WEBD3031", "name": "Integrated Project - Web Programming"}
        ]
    }
]);