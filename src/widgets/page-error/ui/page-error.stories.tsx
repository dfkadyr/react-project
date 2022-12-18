import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { PageError } from './page-error'

export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
