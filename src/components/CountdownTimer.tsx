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
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ]
    : [];

  return (
    <section id="countdown" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary/80 mb-3 block">
            Mark Your Calendar
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text mb-3">
            The Countdown Begins
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            April 18, 2026 • 10:00 AM IST
          </p>
        </div>

        {timeLeft ? (
          <div className="flex justify-center gap-3 sm:gap-5 md:gap-8 flex-wrap">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="card-premium rounded-xl p-4 sm:p-6 md:p-8 min-w-[80px] sm:min-w-[110px] md:min-w-[140px] text-center"
              >
                <span className="font-display text-3xl sm:text-5xl md:text-6xl font-bold gradient-text leading-none">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="block mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {unit.label}
                </span>
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
