import Image from 'next/image'
import { Message } from '../../ui/components/message'
import { Button } from '../../ui/core/button'
import { getLayout } from '../../layouts/main'

export default function ThanksSuccessPage() {
  return (
    <Message
      title="Thank you"
      content="Your payment has been received successfully"
      action={<Button className="bg-primary">Return to home</Button>}
      image={<Image src="/img/thanks.png" alt="" width={160} height={160} />}
    />
  )
}

ThanksSuccessPage.getLayout = getLayout;