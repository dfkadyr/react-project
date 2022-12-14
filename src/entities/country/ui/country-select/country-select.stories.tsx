import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { CountrySelect } from './country-select'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
Primary.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
