import { useState, useEffect, useRef } from 'react';

const stats = [
  {
    value: '100',
    suffix: '%',
    label: 'd\'obtention Qualiopi',
    context: 'certification dès la première année'
  },
  {
    value: '150',
    prefix: '+',
    label: 'organismes accompagnés',
    context: 'depuis notre création'
  },
  {
    value: '98',
    suffix: '%',
    label: 'clients satisfaits',
    context: 'selon nos derniers sondages'
  }
];

export default function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate counters
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const targetValues = [100, 150, 98];

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const newValues = [
        Math.floor(targetValues[0] * easeProgress),
        Math.floor(targetValues[1] * easeProgress),
        Math.floor(targetValues[2] * easeProgress)
      ];

      setAnimatedValues(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in">Nos résultats</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Des chiffres qui parlent : notre engagement auprès de vos succès
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`group relative bg-white rounded-xl p-8 border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-violet-300 transition-all duration-300 overflow-hidden ${
                isVisible ? `animate-scale-in` : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${(idx as number) * 150}ms` : '0ms'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="relative">
                {/* Value with animation */}
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                    {stat.prefix}{animatedValues[idx] ?? 0}{stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Context */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
}
