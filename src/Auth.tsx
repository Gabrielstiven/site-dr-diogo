import { useState } from 'react'

interface AuthProps {
  children: React.ReactNode
}

const SENHA_CORRETA = 'seu-cliente-2026'

export default function Auth({ children }: AuthProps) {
  const [autenticado, setAutenticado] = useState(false)
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (senha === SENHA_CORRETA) {
      setAutenticado(true)
      setErro('')
      localStorage.setItem('autenticado', 'true')
    } else {
      setErro('Senha incorreta!')
    }
  }

  if (!autenticado && !localStorage.getItem('autenticado')) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">Acesso ao Site</h1>
          <p className="text-gray-600 text-center mb-6">Digite a senha para continuar</p>
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a senha"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              autoFocus
            />
            
            {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}
            
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <>{children}</>