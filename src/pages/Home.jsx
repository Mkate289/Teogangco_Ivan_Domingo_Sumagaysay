
function Home({ groups }) {
  const allTasks = groups.flatMap((group) => group.tasks)

  const totalTasks = allTasks.length
  const completedTasks = allTasks.filter(
    (task) => task.completed
  ).length

  const pendingTasks = totalTasks - completedTasks

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome to TaskFlow!
        </h1>

        <p className="mt-2 text-slate-500">
          Organize your tasks and keep track of your progress.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Tasks</p>
          <h2 className="mt-2 text-3xl font-bold">
            {totalTasks}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-green-600">Completed Tasks</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {completedTasks}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-orange-600">Pending Tasks</p>
          <h2 className="mt-2 text-3xl font-bold text-orange-600">
            {pendingTasks}
          </h2>
        </div>
      </div>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Getting Started</h2>

        <p className="mt-3 leading-7 text-slate-600">
          Create task groups for your school activities, personal
          tasks, projects, and daily responsibilities. Open a group
          to add tasks and update their status.
        </p>

        <p className="mt-3 text-sm text-slate-500">
          You currently have {groups.length} task group(s).
        </p>
      </section>
    </div>
  )
}

export default Home
