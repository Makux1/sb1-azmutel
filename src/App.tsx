import React, { useState } from 'react'
import { Heart, X } from 'lucide-react'
import ProfileCard from './components/ProfileCard'
import Header from './components/Header'

const profiles = [
  { id: 1, name: 'Sophie', age: 28, bio: 'Adventure seeker and coffee lover', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'Thomas', age: 32, bio: 'Passionate about music and travel', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Emma', age: 25, bio: 'Bookworm and nature enthusiast', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
]

function App() {
  const [currentProfile, setCurrentProfile] = useState(0)

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentProfile < profiles.length - 1) {
      setCurrentProfile(currentProfile + 1)
    } else {
      setCurrentProfile(0)
    }
    console.log(`Swiped ${direction} on ${profiles[currentProfile].name}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <ProfileCard profile={profiles[currentProfile]} />
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={() => handleSwipe('left')}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="text-red-500" size={24} />
            </button>
            <button
              onClick={() => handleSwipe('right')}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <Heart className="text-green-500" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App