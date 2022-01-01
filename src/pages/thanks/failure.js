import Image from 'next/image';
import { Message } from '../../ui/components/message';
import { Button } from '../../ui/core/button';
import { getLayout } from '../../layouts/main';

export default function ThanksFailurePage() {
  return (
    <Message
      title="Oh no"
      content="Your payment hasn't been received"
      action={<Button className="bg-primary">Return to home</Button>}
      image={<Image src="/img/thanks.png" alt="" width={160} height={160} />}
    />
  )
}
ThanksFailurePage.getLayout = getLayout;