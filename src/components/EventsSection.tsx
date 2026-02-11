import EventCard from "./EventCard";

const events = [
{
  name: "Football 5s",
  description: "An electrifying 5-a-side football tournament where speed, teamwork, and strategy decide the champions. Bring your squad and dominate the turf!",
  date: "April 18, 2026",
  time: "9:00 AM - 4:00 PM",
  venue: "College Ground",
  teamSize: "Team of 5 (+2 Substitutes)",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "⚽"
},

{
  name: "Basketball",
  description: "Fast breaks, slam dunks, and intense competition. Show your court skills and lead your team to victory in this high-energy basketball showdown.",
  date: "April 18, 2026",
  time: "10:00 AM - 3:00 PM",
  venue: "College Basketball Court",
  teamSize: "Team of 5",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "🏀"
},

{
  name: "Clikathon (Photography)",
  description: "Capture the moment and tell a story through your lens. Compete to click the most creative and stunning photographs during the fest.",
  date: "April 18, 2026",
  time: "10:00 AM - 2:00 PM",
  venue: "Campus Wide",
  teamSize: "Individual",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "📸"
},

{
  name: "PUBG",
  description: "Battle it out in an intense survival showdown. Strategy, teamwork, and sharp reflexes will determine who gets the chicken dinner!",
  date: "April 18, 2026",
  time: "11:00 AM - 3:00 PM",
  venue: "Computer Lab",
  teamSize: "Squad (4 Players)",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "🎮"
},

{
  name: "Free Fire",
  description: "Enter the arena and prove your dominance in this fast-paced battle royale tournament. Only one squad survives!",
  date: "April 18, 2026",
  time: "10:00 AM - 2:00 PM",
  venue: "Computer Lab",
  teamSize: "Squad (4 Players)",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "🔥"
},

{
  name: "e-Football",
  description: "Virtual football at its finest! Compete in intense digital matches and showcase your tactical brilliance on the console.",
  date: "April 18, 2026",
  time: "12:00 PM - 4:00 PM",
  venue: "Gaming Zone",
  teamSize: "Individual",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "🎮"
},

{
  name: "Softball Cricket",
  description: "A power-packed cricket tournament with thrilling matches and big hits. Gather your team and chase glory!",
  date: "April 18, 2026",
  time: "9:00 AM - 4:00 PM",
  venue: "College Ground",
  teamSize: "Team of 7",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "🏏"
},

{
  name: "Badminton",
  description: "Smash, drop, and rally your way to victory in this exciting badminton competition.",
  date: "April 18, 2026",
  time: "9:00 AM - 1:00 PM",
  venue: "Indoor Stadium",
  teamSize: "Singles / Doubles",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "🏸"
},

{
  name: "Shortflix (Reel Competition)",
  description: "Unleash your creativity and produce an engaging short film or reel. Impress the judges with storytelling, editing, and originality.",
  date: "April 18, 2026",
  time: "Submission Based",
  venue: "Online Submission",
  teamSize: "Individual / Team",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "🎬"
},

{
  name: "Treasure Hunt",
  description: "Solve clues, crack codes, and race against time in this thrilling campus-wide treasure hunt adventure.",
  date: "April 18, 2026",
  time: "2:00 PM - 4:00 PM",
  venue: "Campus Wide",
  teamSize: "Team of 3",
  registrationLink: "https://zestopiaevent.vercel.app/",
  icon: "🗺️"
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
