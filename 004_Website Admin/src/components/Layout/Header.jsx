import React from 'react'
import { useAuth } from '../../hooks/useAuth'

const Header = ({ user, onMenuClick }) => {
  const { logout } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h2 className="ml-4 md:ml-0 text-lg font-semibold text-gray-900">
            Welcome back, {user?.name || 'Admin'} 👋
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-700">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">
                {user?.name?.charAt(0) || 'A'}
              </span>
            </div>
            <span>{user?.name || 'Admin User'}</span>
          </div>
          
          <button
            onClick={logout}
            className="hidden md:flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header