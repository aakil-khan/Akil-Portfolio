const Stats = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-6xl text-blue-500 font-light">
              5+
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Projects Completed
            </p>
          </div>

          <div>
            <h2 className="text-6xl text-blue-500 font-light">
              Fresher
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              No Experience
            </p>
          </div>

          <div>
            <h2 className="text-6xl text-blue-500 font-light">
              10+
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Technologies
            </p>
          </div>

          <div>
            <h2 className="text-6xl text-blue-500 font-light">
              100%
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Enthusiastic
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;