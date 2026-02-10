import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
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
  icon: string;
}

interface EventCardProps {
  event: EventDetails;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="animate-fade-in-up opacity-0"
      style={{ animationDelay: `${0.08 * index}s` }}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          card-premium rounded-2xl cursor-pointer overflow-hidden
          ${isExpanded ? 'border-primary/40 box-glow-primary' : ''}
        `}
      >
        {/* Card Header */}
        <div className="p-6 md:p-7">
          <div className="flex items-center gap-4 mb-3">
            <div className={`
              w-12 h-12 rounded-xl flex items-center justify-center text-2xl
              ${isExpanded ? 'gradient-primary box-glow-primary' : 'bg-muted/60'}
              transition-all duration-400
            `}>
              {event.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`
                font-display text-base md:text-lg font-bold transition-colors duration-300 truncate
                ${isExpanded ? 'text-primary' : 'text-foreground'}
              `}>
                {event.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">{event.date}</p>
            </div>
          </div>
          
          {!isExpanded && (
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {event.description}
            </p>
          )}
        </div>

        {/* Expanded Details */}
        <div className={`
          grid transition-all duration-500 ease-out
          ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}>
          <div className="overflow-hidden">
            <div className="px-6 md:px-7 pb-6 md:pb-7 space-y-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Date</p>
                    <p className="text-xs font-medium text-foreground truncate">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30">
                  <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Time</p>
                    <p className="text-xs font-medium text-foreground truncate">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Venue</p>
                    <p className="text-xs font-medium text-foreground truncate">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30">
                  <Users className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Team</p>
                    <p className="text-xs font-medium text-foreground truncate">{event.teamSize}</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full gradient-primary text-primary-foreground font-semibold rounded-xl h-11 box-glow-primary hover:scale-[1.02] transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
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
    </div>
  );
};

export default EventCard;
