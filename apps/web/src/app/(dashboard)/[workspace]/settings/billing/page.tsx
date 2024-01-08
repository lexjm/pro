import { createPage } from '@app/nextjs'
import { BillingPage } from '@app/features/settings'

const { Page, metadata } = createPage({
  title: 'Billing',
  renderComponent: BillingPage,
})

export { metadata }
export default Page
