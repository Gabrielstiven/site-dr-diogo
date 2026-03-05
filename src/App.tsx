import Auth from './Auth'

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold p-8">Bem-vindo!</h1>
      <p className="text-xl p-8">Seu site está funcionando 🎉</p>
    </div>
  )
}

export default function App() {
  return (
    <Auth>
      <AppContent />
    </Auth>
  )
}