export type Professional = {
  id: string;
  name: string;
  specialization: string;
  experience: number; // in years
  bio: string;
  avatar: string;
  data_ai_hint: string;
};

export const professionals: Professional[] = [
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    specialization: 'Hardware & Diagnostics',
    experience: 8,
    bio: "With nearly a decade of experience, Jane is an expert at diagnosing and resolving complex hardware issues. She's passionate about building and optimizing high-performance systems.",
    avatar: 'https://placehold.co/200x200.png',
    data_ai_hint: 'woman portrait',
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    specialization: 'Software & OS Support',
    experience: 6,
    bio: 'John is a software guru who can tackle any operating system challenge, from driver conflicts to performance tuning. He ensures your system runs smoothly and efficiently.',
    avatar: 'https://placehold.co/200x200.png',
    data_ai_hint: 'man portrait',
  },
  {
    id: 'emily-white',
    name: 'Emily White',
    specialization: 'Gaming & Performance',
    experience: 5,
    bio: "An avid gamer herself, Emily specializes in squeezing every last drop of performance out of gaming rigs. She helps clients achieve the highest frame rates and lowest latencies.",
    avatar: 'https://placehold.co/200x200.png',
    data_ai_hint: 'woman smiling',
  },
  {
    id: 'michael-brown',
    name: 'Michael Brown',
    specialization: 'Network & Connectivity',
    experience: 10,
    bio: 'Michael is a networking veteran who can solve any connectivity issue, ensuring your devices are online and communicating at top speed. He secures and stabilizes networks for homes and businesses.',
    avatar: 'https://placehold.co/200x200.png',
    data_ai_hint: 'man glasses',
  },
];
