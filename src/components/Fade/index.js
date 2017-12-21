import React from 'react'
import { Transition } from 'react-transition-group'
import cx from 'classnames'
import styles from './styles.scss'

export default ({ children, ...props }) =>
  <Transition timeout={300} {...props}>
    {state =>
      <div className={cx(styles.fade, styles[state])}>
        {children}
      </div>}
  </Transition>
