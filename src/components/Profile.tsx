import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://cdn.discordapp.com/avatars/292741609429401602/c20bbc8dad5edb067b32c54abb2825a9.png" alt="Filipe Soares"/>
      <div>
        <strong>Filipe Soares</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}