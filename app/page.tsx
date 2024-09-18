export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col container p-4 sm:p-8 md:p-16 lg:p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            Own Your Stack,<br className="hidden sm:inline" />Own Your Costs.
          </h1>
          <p className="mb-6 text-base sm:text-lg md:text-xl font-normal text-gray-500">
            From Localhost to Live - Self Hosting Made Stupidly Simple.
          </p>
        </div>
        <div className="relative flex mt-8 sm:mt-12 md:mt-16">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md font-mono text-sm">
            <pre className="whitespace-pre-wrap">
              <code>
$ deployfast init root@yourserver<br />
$ deployfast publish
              </code>
            </pre>
          </div>
        </div>
        <section className="mt-16 sm:mt-24">
          <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-gray-900">
            What is DeployFast?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Opinionated Server Configuration
              </h3>
              <p className="text-gray-600">
                DeployFast provides a carefully curated server setup, optimized for hosting web applications. Say goodbye to complex configurations and hello to a streamlined deployment process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Powerful CLI Tool
              </h3>
              <p className="text-gray-600">
                Our intuitive command-line interface puts the power of deployment at your fingertips. With simple commands, you can initialize, configure, and publish your applications effortlessly.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
