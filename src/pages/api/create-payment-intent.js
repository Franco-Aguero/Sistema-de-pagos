import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY)

export default async function createPaymentIntent(req, res) {
  // const { items } = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 132,//monto del total de los productos
    currency: 'USD',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}