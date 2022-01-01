import * as React from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from '../core/button'

export function PayForm() {
  const stripe = useStripe()

  const elements = useElements()

  const [message, setMessage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/thanks/success',
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message)
    } else {
      setMessage('An unexpected error occured.')
    }

    setIsLoading(false)
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <PaymentElement />
      <Button
        className="bg-primary mt-6"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span>{isLoading ? 'Loading...' : 'Pay now'}</span>
      </Button>
      {message && <p>{message}</p>}
    </form>
  )
}