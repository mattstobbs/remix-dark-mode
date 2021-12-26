export default function IndexRoute() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center flex-wrap gap-4 py-8">
        <button className="text-gray-50 bg-gray-900 py-4 px-28 rounded-xl text-3xl border-4 border-gray-50">
          Dark
        </button>
        <button className="text-gray-900 bg-white py-4 px-28 rounded-xl text-3xl border-4 border-gray-900">
          Light
        </button>
      </div>
    </div>
  );
}
