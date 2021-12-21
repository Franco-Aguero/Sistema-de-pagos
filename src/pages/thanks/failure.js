import Image from 'next/image'
import { Message } from '../../ui/components/message'
import { Button } from '../../ui/core/button'

export default function ThanksFailurePage() {
  return (
    <Message
      title="Oh no"
      content="Your payment hasn't been received"
      action={<Button className="bg-[#D71567]">Return to home</Button>}
      image={<Image src="/img/thanks.png" alt="" width={160} height={160} />}
    />
  )
}