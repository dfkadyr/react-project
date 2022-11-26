import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { BugButton } from 'app/providers/error-boundary'
import { Text } from 'shared/ui/text'
import { Page } from 'widgets/page'

export const MainPage = memo((): JSX.Element => {
  const { t } = useTranslation('main')

  return (
    <Page>
      <BugButton />
      <Text titleTag='h1' title={t('Main page')} />
    </Page>
  )
})
