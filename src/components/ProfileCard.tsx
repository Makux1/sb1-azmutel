import React from 'react'

interface Profile {
  name: string
  age: number
  bio: string
  image: string
}

interface ProfileCardProps {
  profile: Profile
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={profile.image} alt={profile.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{profile.name}, {profile.age}</h2>
        <p className="text-gray-600 mt-2">{profile.bio}</p>
      </div>
    </div>
  )
}

export default ProfileCard