import EventCard from "./EventCard";

const events = [
  {
    name: "Code Quest",
    description: "A thrilling competitive programming challenge where participants solve algorithmic problems under time pressure. Test your coding skills, problem-solving abilities, and compete for the top spot on the leaderboard.",
    date: "March 15, 2025",
    time: "10:00 AM - 1:00 PM",
    venue: "Computer Lab 1 & 2",
    teamSize: "Individual / Team of 2",
    registrationLink: "https://forms.google.com/code-quest",
    icon: "💻"
  },
  {
    name: "Tech Talks",
    description: "Present your innovative ideas and research to a panel of industry experts. Topics can range from AI and machine learning to sustainable technology and emerging tech trends.",
    date: "March 15, 2025",
    time: "2:00 PM - 5:00 PM",
    venue: "Seminar Hall",
    teamSize: "Individual",
    registrationLink: "https://forms.google.com/tech-talks",
    icon: "🎤"
  },
  {
    name: "Design Duel",
    description: "Showcase your UI/UX design prowess in this creative competition. Design stunning interfaces, solve real-world design challenges, and impress the judges with your aesthetic vision.",
    date: "March 16, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Design Studio",
    teamSize: "Individual / Team of 2",
    registrationLink: "https://forms.google.com/design-duel",
    icon: "🎨"
  },
  {
    name: "Hackathon 24",
    description: "A 24-hour coding marathon where teams build innovative solutions to real-world problems. From ideation to implementation, showcase your ability to create functional prototypes under pressure.",
    date: "March 16-17, 2025",
    time: "12:00 PM onwards",
    venue: "Main Auditorium",
    teamSize: "Team of 3-5",
    registrationLink: "https://forms.google.com/hackathon",
    icon: "🚀"
  },
  {
    name: "Gaming Arena",
    description: "Compete in popular esports titles and prove your gaming supremacy. Categories include strategy games, FPS, and multiplayer battles. May the best gamer win!",
    date: "March 17, 2025",
    time: "9:00 AM - 6:00 PM",
    venue: "Recreation Hall",
    teamSize: "Individual / Team (varies)",
    registrationLink: "https://forms.google.com/gaming",
    icon: "🎮"
  },
  {
    name: "Quiz Mania",
    description: "Test your knowledge across technology, science, current affairs, and general knowledge in this exciting quiz competition. Fast fingers and sharp minds will prevail!",
    date: "March 17, 2025",
    time: "2:00 PM - 4:00 PM",
    venue: "Conference Room A",
    teamSize: "Team of 3",
    registrationLink: "https://forms.google.com/quiz",
    icon: "🧠"
  },
  {
    name: "Robotics Challenge",
    description: "Build, program, and battle robots in this hands-on engineering competition. Navigate obstacle courses, complete tasks, and demonstrate your robotics expertise.",
    date: "March 18, 2025",
    time: "10:00 AM - 5:00 PM",
    venue: "Engineering Lab",
    teamSize: "Team of 2-4",
    registrationLink: "https://forms.google.com/robotics",
    icon: "🤖"
  },
  {
    name: "Photography Walk",
    description: "Capture the essence of creativity through your lens. Participants will explore the campus and surroundings, telling stories through compelling photographs.",
    date: "March 18, 2025",
    time: "7:00 AM - 12:00 PM",
    venue: "Campus Grounds",
    teamSize: "Individual",
    registrationLink: "https://forms.google.com/photography",
    icon: "📸"
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80 mb-3 font-medium">
            Explore
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 gradient-text">
            Our Events
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Tap any event to see details and register. Challenge yourself, 
            showcase your talents, and win exciting prizes!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={event.name} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
