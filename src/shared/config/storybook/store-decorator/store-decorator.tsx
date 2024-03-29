import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from '@/app/providers/store-provider'
import { articleDetailsReducer } from '@/entities/article/testing'
import { addCommentFormReducer } from '@/features/add-comment-form/testing'
import { loginReducer } from '@/features/auth-by-username/testing'
import { profileReducer } from '@/features/editable-profile-card/testing'
import { articleDetailsPageReducer } from '@/pages/article-details-page/testing'
import { ReducersList } from '@/shared/lib/components/dynamic-module-loader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    )
