import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  SunIcon,
  MoonIcon,
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  ClipboardIcon,
  WalletIcon,
  BookUser,
  PackageSearch,
  UserIcon,
  LogOutIcon,
} from 'lucide-react'

interface NavigationItem {
  route: string
  title: string
  icon: JSX.Element
}

interface ProfileMenuItem {
  label: string
  icon: JSX.Element
  action: () => void
}

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedMode = localStorage.getItem('darkMode')
    if (storedMode !== null) {
      return storedMode === 'true'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false)
  const profileMenuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Aplicar el modo oscuro y guardarlo en localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', String(isDarkMode))
  }, [isDarkMode])

  // Cerrar el menú de perfil al hacer clic fuera
  const closeProfileMenu = (event: MouseEvent) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target as Node)
    ) {
      setIsProfileMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeProfileMenu)
    return () => document.removeEventListener('click', closeProfileMenu)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  const handleLogout = () => {
    setIsProfileMenuOpen(false)
    localStorage.removeItem('authToken')
    navigate('/login')
  }

  const navigationItems: NavigationItem[] = [
    { route: '/home', title: 'Inicio', icon: <HomeIcon className="w-6 h-6" /> },
    {
      route: '/invoices',
      title: 'Facturas',
      icon: <FileTextIcon className="w-6 h-6" />,
    },
    {
      route: '/orders',
      title: 'Presupuestos',
      icon: <ClipboardIcon className="w-6 h-6" />,
    },
    {
      route: '/purchases',
      title: 'Gastos',
      icon: <WalletIcon className="w-6 h-6" />,
    },
    {
      route: '/clients',
      title: 'Clientes',
      icon: <UsersIcon className="w-6 h-6" />,
    },
    {
      route: '/suppliers',
      title: 'Proveedores',
      icon: <BookUser className="w-6 h-6" />,
    },
    {
      route: '/products',
      title: 'Productos',
      icon: <PackageSearch className="w-6 h-6" />,
    },
  ]

  const profileMenuItems: ProfileMenuItem[] = [
    {
      label: 'Mi Perfil',
      icon: <UserIcon className="w-4 h-4" />,
      action: () => setIsProfileMenuOpen(false),
    },
    {
      label: 'Cerrar Sesión',
      icon: <LogOutIcon className="w-4 h-4" />,
      action: handleLogout,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      <aside className="fixed left-0 h-full w-20 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-3">
          <img
            className="w-14 h-14 m-auto rounded-xl shadow-md"
            src="/Gava.jpg"
            alt="Icon"
          />
        </div>
        <hr className="border-gray-200 dark:border-gray-700 mx-3" />
        <nav className="py-4">
          <ul className="space-y-4 flex flex-col items-center">
            {navigationItems.map((item) => (
              <li key={item.route}>
                <NavLink to={item.route}>
                  <div className="p-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                    {item.icon}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full pb-4">
          <hr className="border-gray-200 dark:border-gray-700 mx-3 mb-4" />
            <div className="flex justify-center mb-4">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <SunIcon className="w-6 h-6 text-gray-300" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-gray-600" />
                )}
              </button>
          </div>
          <hr className="border-gray-200 dark:border-gray-700 mx-3 mb-4" />
          <div className="relative px-3">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="w-14 h-14 rounded-full ring-2 ring-primary-500 p-0.5 transition-transform hover:scale-105"
            >
              <img
                className="w-full h-full rounded-full object-cover"
                src="/profile.jpeg"
                alt="User avatar"
              />
            </button>
            {isProfileMenuOpen && (
              <div
                ref={profileMenuRef}
                className="absolute left-full bottom-0 mb-0 ml-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg py-1 transform transition-all duration-200 z-50"
              >
                {profileMenuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-150"
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
      <main className="ml-20 p-6 w-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar
