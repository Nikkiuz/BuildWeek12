import { useEffect, useState } from 'react'
import ProfileService from '/src/services/Profile'

const ProfileComponent = ({ userId }) => {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    ProfileService.fetchMEProfile()
      .then((data) => {
        console.log(data)
        setProfile(data)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
      })
  }, [userId])

  if (error) return <p>Error: {error}</p>
  if (!profile) return <p>Loading...</p>

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.email}</p>
    </div>
  )
}

export default ProfileComponent
