export type THistory = {
  title?: string;
  logoSrc: string;
  name: string;
  startDate: string;
  endDate: string;
  details: string[];
};

export const education: THistory[] = [
  {
    name: "Hills Road Cambridge 6th Form College",
    logoSrc: "/images/logos/hillsroad.svg",
    startDate: "Sep 2004",
    endDate: "Jul 2006",
    details: [
      "A-level Computer Science, Media Studies, Psychology, General Studies",
      "AS-level English Literature",
    ],
  },
  {
    name: "Bassingbourn Village College",
    logoSrc: "/images/logos/bassingbournvillagecollege.svg",
    startDate: "Sep 1999",
    endDate: "Jul 2004",
    details: [
      "A-C grades in English, Maths, Science, Design, Art, Computer Science, French, Geography and RE",
    ],
  },
];

export const experiences: THistory[] = [
  {
    name: "Rest Less",
    logoSrc: "/images/logos/restless.svg",
    startDate: "Sep 2021",
    endDate: "Present",
    details: [
      "Full stack development using TypeScript, React, Redux, Next.js, Node and AWS Lambda to build customer facing products and services, such as the pensions platform",
      "Built the Rest Less mobile app using React native, TypeScript, Redux and Native Base",
      "Ensured a high level of automated testing using Jest, React Testing Library and Cypress",
      "Introduced new frameworks and tools such as styled system, Chakra UI and Native Base",
      "Defined and implemented a front-end technical strategy to iteratively migrate away from a legacy front-end tech stack",
    ],
  },
  {
    name: "Fresha",
    logoSrc: "/images/logos/fresha.svg",
    startDate: "Apr 2021",
    endDate: "Aug 2021",
    details: [
      "Built internal operational dev tools with Elixir, ExUnit, Ruby, RSpec, Typescript and Jest",
      "Worked on defining a refactoring approach to help improve development velocity on the payments platform",
      "Lead the UK engineering recruitment, including writing technical take-home exercises in Elixir, Ruby and Typescript",
    ],
  },
  {
    name: "Palace Skateboards",
    logoSrc: "/images/logos/palaceskateboards.svg",
    startDate: "Oct 2020",
    endDate: "Apr 2021",
    details: [
      "Built an internal product management system to allow products to go from a concept sketch through to a product ready to go live in a product drop on the Shopify website",
      "Full stack development on the product management system built with Typescript, React, Next.js, Emotion, Jest, RTL and Cypress on the front-end, and Elixir, Phoenix, ExUnit, Absinthe/GraphQL, PostGreSQL on the backend",
      "Worked on integrating external services and APIs to help scale internal operations",
      "Maintenance on existing systems built with Ruby, Sinatra, RSpec, PostGreSQL, React and PostCSS",
      "Mapped out current system architecture and created technical roadmap as handover to new CTO",
    ],
  },
  {
    name: "Simply Business",
    logoSrc: "/images/logos/simplybusiness.svg",
    startDate: "Nov 2018",
    endDate: "Oct 2020",
    details: [
      "Migrated the legacy customer facing website (multi region, 3000+ pages) originally built with Ruby, Sinatra, RSpec, CoffeeScript and HAML to a tech stack aligned with the technical strategy of the company (TypeScript, React, Gatsby.js, Emotion, GraphQL, AWS Lambda and Ruby)",
      "Built multiple new APIs to support front-end using Ruby on Rails, RSpec, Kafka and Mongodb",
      "Successfully migrated using a strangler fig pattern to achieve zero downtime during the migration",
      "Rapidly built and deployed to production a COVID insurance cover checker system that used a dynamic cover matrix to allow customers to quickly and easily understand how they were covered in the pandemic",
      "Worked on adjusting machine learning systems in Python, enabling highly targeted content to customers",
      "Lead the technical strategy and delivery of 2 cross functional product teams, as well as working on the team responsible for defining the front-end technical strategy for the entire department",
    ],
  },
  {
    name: "StorIQ",
    logoSrc: "/images/logos/storiq.svg",
    startDate: "Feb 2018",
    endDate: "Nov 2018",
    details: [
      "Full stack development on the SaaS backend system using Ruby on Rails, Rspec and MySQL on the backend, with TypeScript, React, Redux on the front-end",
      "Significantly improved test coverage on critical services using RSpec, Capybara and Jest",
      "Mobile development work on mobile applications built in Swift, Java and Xamarin, including spiking into React Native",
      "Maintenance work on existing front-end built with CoffeeScript, jQuery, HAML and SASS",
      "Optimization and improvement work on continuous integration workflows to enable more streamlined development",
    ],
  },
  {
    name: "Buyapowa",
    logoSrc: "/images/logos/buyapowa.svg",
    startDate: "Jul 2015",
    endDate: "Feb 2018",
    details: [
      "Full stack development creating the refer-a-friend platform from the ground up after the business pivoted from being a co-buying platform",
      "Developed a highly scalable embeddable Javascript library to go on client websites using vanilla JavaScript, SASS and HTML",
      "Built and maintained client-side APIs to power the platform using Ruby on Rails, PostGreSQL, Elixir and Phoenix",
      "High level of automated testing written in RSpec, ExUnit, Jest, Jasmine and Capybara",
      "Built back office and client facing business intelligence analytical reporting systems using React, Redux, SASS on the front-end and Elixir, Phoenix, PostGreSQL and Elasticsearch on the backend",
    ],
  },
  {
    name: "Factory3",
    logoSrc: "/images/logos/factory3.svg",
    startDate: "Jun 2013",
    endDate: "Jul 2015",
    details: [
      "Full stack development for the agencies various clients, using Ruby on Rails, Node, MongoDB, MySQL, RSpec and Capybara on the backend, with JavaScript, CoffeeScript, jQuery, Angular, HTML, SASS and Jasmine on the front-end",
      "Building internal tools and products to enable us to better service agency clients and projects, including a system to allow automatically optimising AWS resource usage",
      "Development work on iOS and Android applications using RubyMotion and Ionic",
    ],
  },
  {
    name: "Kelkoo Ventures",
    logoSrc: "/images/logos/kelkoo.svg",
    startDate: "May 2012",
    endDate: "Jun 2013",
    details: [
      "Full stack development in a start-up incubator, testing ideas, ultimately building the Spanish price comparison website Kelisto.es, using Ruby on Rails, PostGreSQL, Redis, MongoDB for the backend and CoffeeScript, jQuery, Jade, HAML, SASS and Jasmine on the front-end",
      "Building internal monitoring systems and dashboards to help measure success metrics, which integrated into external API feeds using Ruby on Rails on the backend, and Javascript, Backbone.js, SASS on the front-end",
      "Implementing an A/B testing system, and taking ownership of business intelligence/analytics data to help make data driven product decisions",
    ],
  },
  {
    name: "Leo Burnett",
    logoSrc: "/images/logos/leoburnett.svg",
    startDate: "Jan 2012",
    endDate: "May 2012",
    details: [
      "Full stack development on a project for Renault which involved building a backend CMS using PHP, MySQL and XSLT, with Javascript, jQuery, HTML and SASS on the front-end",
      "Front-end had a highly interactive UI that was fully responsive and compatible on all major devices/browsers at the time (Including IE6)",
    ],
  },
  {
    name: "Livedrive",
    logoSrc: "/images/logos/livedrive.svg",
    startDate: "Mar 2010",
    endDate: "Dec 2011",
    details: [
      "Full stack development on the customer facing data management system that allowed users to backup their data to the Livedrive datacentres, built with .NET and MySQL on the backend and Javascript, jQuery, HTML and CSS on the front-end",
      "Built a consumer support portal that integrated with existing backend systems using a combination of REST/SOAP. Portal was built using PHP and MySQL on the backend, and Javascript, jQuery, HTML and CSS on the front-end",
      "Development work on iOS apps written in Objective C, as well as Windows and MacOS desktop software written in C# and C++",
    ],
  },
  {
    name: "Google Compare",
    logoSrc: "/images/logos/google.svg",
    startDate: "Mar 2009",
    endDate: "Mar 2010",
    details: [
      "Full stack development on whitelabel client websites using PHP and MySQL for the backend, and Javascript, jQuery, HTML and CSS for the front-end",
      "Development work on backend systems to power the quoting services and external financial API integrations built with Ruby on Rails",
      "Producing flash marketing material to promote brand and client brands",
    ],
  },
  {
    name: "Thru Digital",
    logoSrc: "/images/logos/thru.svg",
    startDate: "Oct 2007",
    endDate: "Mar 2009",
    details: [
      "Full stack development on various agency client projects using PHP, MySQL, JavaScript, jQuery, HTML and CSS",
      "Built a number of social media related web apps that integrated into social API feeds",
      "Developed facebook apps and other embeddable social media apps using Javascript, jQuery, HTML and CSS",
    ],
  },
  {
    name: "Catalink",
    logoSrc: "/images/logos/catalink.svg",
    startDate: "Sep 2006",
    endDate: "Sep 2007",
    details: [
      "Full stack development on the customer facing Catalink platform that allows users to order from a library of catalogues to be posted to their address. It was built with PHP and MySQL on the backend, and Javascript, HTML and CSS on the front-end",
      "Maintenance work on back-end cataloguing systems and databases, as well as integrating with external data feeds to build out the data using PHP and MySQL",
      "Built various micro sites used on parked domains for PPC ad revenue using Javascript, HTML and CSS",
    ],
  },
];
