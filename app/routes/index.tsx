import { Theme, useTheme } from '~/utils/theme-provider';

export default function IndexRoute() {
  const [, setTheme] = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="flex justify-center flex-wrap gap-4 py-8">
        <button
          className="text-gray-50 bg-gray-900 py-4 px-28 rounded-xl text-3xl border-4 border-gray-50"
          onClick={() => setTheme(Theme.DARK)}
        >
          Dark
        </button>
        <button
          className="text-gray-900 bg-white py-4 px-28 rounded-xl text-3xl border-4 border-gray-900"
          onClick={() => setTheme(Theme.LIGHT)}
        >
          Light
        </button>
      </div>
      <div className="mt-16 max-w-xl mx-4 sm:mx-auto text-gray-900 dark:text-gray-50">
        <h1 className="text-4xl font-bold">Hey there 👋</h1>
        <p className="mt-4 text-lg">
          This is a demo for adding a dark mode to a{' '}
          <a
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline hover:underline-offset-1"
            href="https://remix.run/"
          >
            Remix
          </a>{' '}
          app. You can find the code on my{' '}
          <a
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline hover:underline-offset-1"
            href="https://github.com/mattstobbs/remix-dark-mode"
          >
            GitHub
          </a>
          .
        </p>
        <p className="text-lg my-1">
          You can also find a{' '}
          <a
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline hover:underline-offset-1"
            href="https://www.mattstobbs.com/remix-dark-mode/"
          >
            complete guide to Remix dark mode
          </a>{' '}
          on my blog.
        </p>
        <p className="text-lg">
          If you have any questions, feel free to message me on{' '}
          <a
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline hover:underline-offset-1"
            href="https://twitter.com/matt_stobbs"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </div>
  );
}
