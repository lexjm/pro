import { createPage } from '@app/nextjs'

import { InboxListPage } from '@app/features/contacts'

const { Page, metadata } = createPage({
  title: 'Inbox',
  renderComponent: InboxListPage,
})

export { metadata }
export default Page
