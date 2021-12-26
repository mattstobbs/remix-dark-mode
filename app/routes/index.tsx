import { Theme, useTheme } from '~/utils/theme-provider';

export default function IndexRoute() {
  const [, setTheme] = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
    </div>
  );
}
