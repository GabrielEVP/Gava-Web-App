import React, { useState, useEffect, useRef } from 'react';
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
} from 'lucide-react'; // Import from lucide-react

import { NavLink } from 'react-router-dom'; // For routing

interface NavigationItem {
  route: string;
  title: string;
  icon: React.FC; // Type for icon components
}

interface ProfileMenuItem {
  label: string;
  icon: React.FC; // Type for icon components
  action: () => void;
}

const Sidebar: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { route: "/home", title: "Inicio", icon: HomeIcon },
    { route: "/invoices", title: "Facturas", icon: FileTextIcon },
    { route: "/orders", title: "Presupuestos", icon: ClipboardIcon },
    { route: "/purchases", title: "Gastos", icon: WalletIcon },
    { route: "/clients", title: "Clientes", icon: UsersIcon },
    { route: "/suppliers", title: "Proveedores", icon: BookUser },
    { route: "/products", title: "Productos", icon: PackageSearch },
  ];

  const profileMenuItems: ProfileMenuItem[] = [
    {
      label: "Mi Perfil",
      icon: UserIcon,
      action: () => {
        setIsProfileMenuOpen(false);
        // Implement profile navigation/action here
      },
    },
    {
      label: "Cerrar Sesión",
      icon: LogOutIcon,
      action: () => {
        setIsProfileMenuOpen(false);
        // Implement logout logic here
      },
    },
  ];

  const profileMenuRef = useRef<HTMLDivElement>(null);

  const closeProfileMenu = (event: MouseEvent) => {
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
      setIsProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      setIsDarkMode(true);
    } else if (storedMode === "false") {
      setIsDarkMode(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
    updateDarkMode();

    document.addEventListener('click', closeProfileMenu); // Add click listener

    return () => {
        document.removeEventListener('click', closeProfileMenu); // Clean up
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    updateDarkMode();
  };

  const updateDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <aside className="fixed left-0 h-full w-20 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out">
        {/* ... (rest of your sidebar JSX) */}
        <nav className="py-4">
          <ul className="space-y-4 flex flex-col items-center">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <div className="relative group">
                  <NavLink
                    to={item.route}
                    className={({ isActive }) =>
                      `p-3 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? 'bg-primary-100 dark:bg-primary-900'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    <item.icon
                      className={`w-6 h-6 ${
                        ({ isActive }) =>
                          isActive
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-black dark:text-gray-300 group-hover:text-primary-500 dark:group-hover:text-primary-400'
                      }`}
                    />
                  </NavLink>
                  {/* ... (tooltip div) */}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        {/* ... (bottom section) */}
        <div className="relative px-3">
          <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="w-14 h-14 rounded-full ring-2 ring-primary-500 p-0.5 transition-transform hover:scale-105">
            {/* ... */}
          </button>
          {isProfileMenuOpen && (
            <div
              ref={profileMenuRef}
              className="absolute left-full bottom-0 mb-0 ml-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg py-1 transform transition-all duration-200 z-50"
            >
              {profileMenuItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={item.action}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-150"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
      <main className="ml-20 p-6">
        {children} {/* Use children prop for main content */}
      </main>
    </div>
  );
};

export default Sidebar;