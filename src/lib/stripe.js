import * as React from 'react'
import { loadStripe } from '@stripe/stripe-js'

export function useStripeClientSecret() {
  const [clientSecret, setClientSecret] = React.useState(null)

  React.useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  return clientSecret
}

export function useStripePromise() {
  return React.useMemo(
    () => loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY),
    []
  )
}