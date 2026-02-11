import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-04-18T10:00:00+05:30").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = TARGET_DATE - now;
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = timeLeft
    ? [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds },
      ]
    : [];

  return (
    <section id="countdown" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/80 mb-2 block">
            Mark Your Calendar
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
            The Countdown Begins
          </h2>
          <p className="text-muted-foreground text-sm">
            April 18, 2026 • 10:00 AM IST
          </p>
        </div>

        {timeLeft ? (
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
            {units.map((unit, i) => (
              <div key={unit.label} className="relative group">
                {/* Glow behind card */}
                <div className="absolute -inset-1 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5 sm:p-7 md:p-8 min-w-[72px] sm:min-w-[100px] md:min-w-[120px] text-center overflow-hidden">
                  {/* Subtle top accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] gradient-primary rounded-full" />
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gradient-text leading-none block">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="block mt-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
                    {unit.label}
                  </span>
                </div>
                {/* Separator dots between cards */}
                {i < units.length - 1 && (
                  <div className="absolute -right-2 sm:-right-3 md:-right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h3 className="font-display text-4xl md:text-6xl font-bold gradient-text animate-pulse-glow">
              ZESTOPIA IS LIVE 🚀
            </h3>
            <a
              href="#register"
              className="inline-block gradient-primary text-primary-foreground font-display font-semibold text-lg px-10 py-4 rounded-xl box-glow-primary hover:scale-105 transition-transform duration-300"
            >
              Register Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountdownTimer;
