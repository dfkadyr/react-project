import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { NotificationList } from '@/entities/notification'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { classNames } from '@/shared/lib/class-names'
import { Button, ButtonTheme } from '@/shared/ui/button'
import { Drawer } from '@/shared/ui/drawer'
import { Icon } from '@/shared/ui/icon'
import { Popover } from '@/shared/ui/popups'

import cls from './notification-button.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props
  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  )

  return (
    <>
      <BrowserView>
        <Popover className={classNames('', {}, [className])} direction={'bottom left'} trigger={trigger}>
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  )
})
