import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Pet Adoption API',
    description:
      'A REST API for managing pets, adopters, shelters, and adoption applications.',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Swagger',
      'Jest',
      'Supertest',
    ],
    link: 'https://github.com/hvelarderiquelme/CSE341-pet-adoption',
  },
  {
    title: 'WDD 430 Portfolio',
    description:
      'A personal portfolio built with Next.js to showcase my web development projects and skills.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/NephiImo/wdd430-portfolio',
  },
];

export default function Home() {
  return (
    <div>
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I&apos;m Nephi Imo
        </h1>

        <p className="text-lg text-gray-700">
          I&apos;m a software development student interested in building
          useful web applications and learning modern web technologies.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>

        <ProjectList projects={projects} />
      </section>
    </div>
  );
}