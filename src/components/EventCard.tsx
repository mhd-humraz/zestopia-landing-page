import { ChevronDown, Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EventDetails {
  name: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  teamSize: string;
  registrationLink: string;
}

interface EventCardProps {
  event: EventDetails;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group animate-fade-in-up opacity-0"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className={`
          relative overflow-hidden rounded-xl border transition-all duration-500
          ${isExpanded 
            ? 'border-primary/50 bg-card box-glow-primary' 
            : 'border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card'
          }
        `}>
          <div className="p-5 md:p-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-lg transition-all duration-300
                ${isExpanded 
                  ? 'gradient-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                }
              `}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className={`
                font-display text-lg md:text-xl font-semibold transition-colors duration-300
                ${isExpanded ? 'text-primary' : 'text-foreground group-hover:text-primary'}
              `}>
                {event.name}
              </h3>
            </div>
            <ChevronDown className={`
              w-5 h-5 text-muted-foreground transition-transform duration-300
              ${isExpanded ? 'rotate-180 text-primary' : 'group-hover:text-primary'}
            `} />
          </div>
          
          {/* Expanded content */}
          <div className={`
            grid transition-all duration-500 ease-out
            ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
          `}>
            <div className="overflow-hidden">
              <div className="px-5 md:px-6 pb-6 pt-2 border-t border-border/30">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Date</p>
                      <p className="text-foreground font-medium">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Time</p>
                      <p className="text-foreground font-medium">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Venue</p>
                      <p className="text-foreground font-medium">{event.venue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Team Size / Eligibility</p>
                      <p className="text-foreground font-medium">{event.teamSize}</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full sm:w-auto gradient-primary text-primary-foreground font-semibold box-glow-primary hover:scale-[1.02] transition-transform duration-300"
                >
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default EventCard;
