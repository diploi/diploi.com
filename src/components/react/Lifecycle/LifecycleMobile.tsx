import type { LifecyclePoint } from './data'
import styles from './Lifecycle.module.scss'

import * as Icon from '@phosphor-icons/react'

type TLifecycleMobileProps = {
  lifecyclePoints: LifecyclePoint[]
}

export const LifecycleMobile = ({
  lifecyclePoints,
  ...props
}: TLifecycleMobileProps) => {
  return (
    <div {...props} className={styles.lifecycleMobile}>
      {lifecyclePoints.map((point) => {
        const PointIcon = Icon[point.icon]
        return (
          <article
            key={`lifecycle-point-mobile-${point.id}`}
            className={`${styles.lifecyleMobileCard}`}
          >
            {/* @ts-expect-error */}
            <PointIcon size={24} className={styles.icon} weight="light" />
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </article>
        )
      })}
    </div>
  )
}
