export interface ITestimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export const testimonials: ITestimonial[] = [
  {
    name: "Rahul Kumar",
    role: "RRB ntpc aspirant",
    rating: 5,
    text: "The AI Weakness Analyzer saved me! I didn't realize I was consistently failing in logical reasoning until the AI pointed it out. Improved my score by 20 marks.",
    avatar: "👨",
  },
  {
    name: "Priya Sharma",
    role: "Group D - aspirant",
    rating: 5,
    text: "RailSmart AI is smarter than any coaching center I've tried. The adaptive tests felt like real exams. Highly recommended for serious students.",
    avatar: "👩",
  },
  {
    name: "Amit Singh",
    role: "Group D Aspirant",
    rating: 4,
    text: "The PET Tracker helped me balance my physical training with studies. Great for all-around preparation and serious focus.",
    avatar: "👨",
  },
];
