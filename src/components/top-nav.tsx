import { Bell, Calendar, FileText, Home, Settings } from 'lucide-react'
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function TopNav() {
  return (
    <header className="h-16 border-b px-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-8">
        <Image
          src="/image/tech-care-logo.jpg"
          alt=""
          width={120}
          height={32}
        />
        <nav className="flex items-center gap-2">
          <a href="#" className="nav-link">
            <Home className="w-4 h-4" />
            Overview
          </a>
          <a href="#" className="nav-link bg-yellow-400">
            <FileText className="w-4 h-4" />
            Patients
          </a>
          <a href="#" className="nav-link">
            <Calendar className="w-4 h-4" />
            Schedule
          </a>
          <a href="#" className="nav-link">
            <Bell className="w-4 h-4" />
            Messages
          </a>
          <a href="#" className="nav-link">
            <Settings className="w-4 h-4" />
            Transactions
          </a>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/dr-jane-simpson.jpg" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

