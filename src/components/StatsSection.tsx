const stats = [
  {
    value: '100%',
    label: 'd\'obtention Qualiopi',
    context: 'certification dès la première année'
  },
  {
    value: '+150',
    label: 'organismes accompagnés',
    context: 'depuis notre création'
  },
  {
    value: '98%',
    label: 'clients satisfaits',
    context: 'selon nos derniers sondages'
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nos résultats</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des chiffres qui parlent : notre engagement auprès de vos succès
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-white rounded-xl p-8 border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-violet-300 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="relative">
                {/* Value */}
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                    {stat.value}
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
    </section>
  );
}
