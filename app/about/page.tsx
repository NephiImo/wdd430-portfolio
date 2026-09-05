import SkillCard from '@/components/SkillCard';

const skills = [
  {
    name: 'Frontend Development',
    description: 'Building interfaces with JavaScript, TypeScript, Next.js, and Tailwind CSS.',
  },
  {
    name: 'Backend Development',
    description: 'Creating APIs and working with Node.js, Express, and MongoDB.',
  },
  {
    name: 'Problem Solving',
    description: 'Breaking down technical problems and building practical solutions.',
  },
];

export default function About() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <div className="space-y-4 text-gray-700 mb-10">
        <p>
          My name is Nephi Imo. I am a software development student with an
          interest in web development, APIs, and building useful digital
          products.
        </p>

        <p>
          I enjoy learning how modern applications are structured and using
          technologies such as JavaScript, TypeScript, Next.js, Node.js, and
          MongoDB.
        </p>

        <p>
          My goal is to continue improving my development skills by building
          real projects and solving practical problems.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
}