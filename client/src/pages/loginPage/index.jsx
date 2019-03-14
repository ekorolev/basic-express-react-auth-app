import React from 'react'
import styles from './styles.scss'
import BrandIcon from '../../components/brandIcon.jsx'
import SingleComponentLayout from '../../layouts/singleComponentLayout.jsx'

class LoginPage 
extends React.Component {
  render() {
    return (
      <SingleComponentLayout>
        <div className={styles.wrapper}>
          <div className={styles.centerBox}>
            Login with
            &nbsp;<BrandIcon brand="google" />
            &nbsp;<BrandIcon brand="github" />
            &nbsp;<BrandIcon brand="twitter" />
          </div>
        </div>
      </SingleComponentLayout>
    )
  }
}

export default LoginPage