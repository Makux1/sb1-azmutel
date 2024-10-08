import React from 'react'
import { Heart } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <Heart className="text-pink-500 mr-2" size={24} />
        <h1 className="text-2xl font-bold text-gray-800">Decouvre-moi</h1>
      </div>
    </header>
  )
}

export default Header