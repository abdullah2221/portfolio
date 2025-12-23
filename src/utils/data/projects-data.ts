
interface Project {
    id: number;
    name: string;
    description: string;
    tools: string[];
    code: string;
    demo: string;
    image: string;
    role: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "H&H Fashion Website",
        description: "A boutique website built with Next.js, Firebase, and Cloudinary. Includes product catalog, cart, checkout, and admin panel.",
        tools: ['Next.js', 'Firebase', 'Cloudinary', 'Tailwind CSS'],
        code: "https://github.com/abdullah/hhfashion",
        demo: "https://hhfashion.com",
        image: "assets/images/projects/hhfashion.png",
        role: "Full Stack Developer",
    },
    {
        id: 2,
        name: "Smart LMS (Frontend)",
        description: "An Angular-based learning management system using localStorage for data storage, role-based access, course management, and student course viewing.",
        tools: ['Angular', 'TypeScript', 'localStorage', 'Tailwind CSS'],
        code: "https://github.com/abdullah/smart-lms",
        demo: "",
        image: "assets/images/projects/smart-lms.png",
        role: "Frontend Developer",
    },
    {
        id: 3,
        name: "Personal Portfolio",
        description: "This portfolio website itself, built with Angular 19 and Tailwind CSS, showcasing projects and contact info.",
        tools: ['Angular 19', 'Tailwind CSS', 'EmailJS'],
        code: "https://github.com/abdullah/ng-dev-folio",
        demo: "",
        image: "assets/images/projects/portfolio.png",
        role: "Frontend Developer",
    }
];