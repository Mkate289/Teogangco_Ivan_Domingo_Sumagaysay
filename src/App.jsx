
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Groups from './pages/Groups'
import GroupTasks from './pages/GroupTasks'
import Guide from './pages/Guide'
import Developers from './pages/Developers'

function AppContent() {
  const [groups, setGroups] = useState([
    { id: 'school', name: 'School Activities', tasks: [] },
    { id: 'personal', name: 'Personal Tasks', tasks: [] },
    { id: 'projects', name: 'Projects', tasks: [] },
    { id: 'daily', name: 'Daily Tasks', tasks: [] },
  ])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />

          <Route
            path="/home"
            element={<Home groups={groups} />}
          />

          <Route
            path="/groups"
            element={
              <Groups groups={groups} setGroups={setGroups} />
            }
          />

          <Route
            path="/groups/:groupId"
            element={
              <GroupTasks groups={groups} setGroups={setGroups} />
            }
          />

          <Route path="/guide" element={<Guide />} />

          <Route path="/developers" element={<Developers />} />

          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
        </Routes>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-500">
        TaskFlow | DCIT 26 | Laboratory 3
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
