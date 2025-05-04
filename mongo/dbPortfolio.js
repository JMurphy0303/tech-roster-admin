// drop collection if already exists
db.samplesCollection.drop();
// insert new documents into collection
db.samplesCollection.insert([
    {
    "name":'Flexbox Page Layout Examples',
    "description":'The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").',
    "url":'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    "technologies":["Flexbox","HTML","CSS"],
    "images":[{"filename":"image5.png"},{"filename":"image6.png"},{"filename":"image7.png"},{"filename":"image8.png"}]
    },
    {
    "name":'ASP.NET Core Web App',
    "description":'An example of my first web app developed using ASP.NET Core. ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications.',
    "url":'https://docs.microsoft.com/en-us/aspnet/core/',
    "technologies":["ASP.NET Core","C#","MVC","MS Azure"],
    "images":[{"filename":"image1.png"},{"filename":"image2.png"},{"filename":"image3.png"},{"filename":"image4.png"}]
    },
    {
    "name":'HTML5 Games with CreateJS',
    "description":'A suite of modular libraries and tools which work together or independently to enable rich interactive content on open web technologies via HTML5.',
    "url":'https://createjs.com/',
    "technologies":["Typescript","HTML","CSS","CreateJS"],
    "images":[{"filename":"image13.png"},{"filename":"image14.png"},{"filename":"image15.png"},{"filename":"image16.png"}]
    },
    {
    "name":'CSS Styling with Sass Examples',
    "description":'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    "url":'http://sass-lang.com/',
    "technologies":["Sass","HTML","CSS"],
    "images":[{"filename":"image9.png"},{"filename":"image10.png"},{"filename":"image11.png"},{"filename":"image12.png"}]
    },
    {
    "name":'NextJS',
    "description":'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.',
    "url":'https://nextjs.org',
    "technologies":["NextJS","HTML","Typescript","TailwindCSS","JSX"],
    "images":[{"filename":"image2.png"},{"filename":"image4.png"},{"filename":"image8.png"},{"filename":"image16.png"}]
    },
]);