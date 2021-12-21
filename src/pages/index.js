import Image from 'next/image';
import { Button } from '../ui/core/button';
import { Divider } from '../ui/core/divider';
//import mercadopago from 'mercadopago'
import { Elements } from '@stripe/react-stripe-js'
import { useStripeClientSecret, useStripePromise } from '../lib/stripe'
import {PayForm} from "../ui/components/payForm"

const IndexPage = ({ mercadoPagoUrl }) => {
    const hi = () => alert("hello world");
    const stripeClientSecret = useStripeClientSecret()
    const stripePromise = useStripePromise()
    return (
        <div className="flex">
            <div className="flex space-x-20 mx-auto py-32">
                <div className="flex flex-col w-[592px]">               {/* RIGHT */}
                    <h2 className="mb-6 text-2xl font-bold">Confirm and pay</h2>
                    <Button handleClic={hi} className="bg-[#01B1EA] flex justify-center items-center">
                        Pay with{' '}
                        <span className="ml-1">
                            <Image
                                height={40}
                                width={98}
                                src="/img/mercadopago.png"
                                alt="Mercado Pago"
                            />
                        </span>
                    </Button>
                    <div className="my-6 relative flex justify-center items-center">
                        <span className="text-center bg-white px-4">Or pay with card</span>
                        <Divider className="z-[-1] absolute top-[13px]"/>
                    </div>   
                    {stripeClientSecret && (
                        <Elements
                        stripe={stripePromise}
                        options={{
                            clientSecret: stripeClientSecret,
                            appearance: {
                            theme: 'stripe',
                            },
                        }}
                        >
                        <PayForm />
                        </Elements>
                    )}
                </div>    
                <div className="flex flex-col w-[491px]">                                {/* left */}
                    <Image
                        height={320}
                        width={491}
                        src="/img/product.png"
                        alt="Mercado Pago"
                    />
                    <p className="flex justify-between items-center py-4 text-black">
                        <span>Modern Studio with One Queen Bed</span>
                        <span className="text-xs">Miami Beach, Florida</span>
                    </p>
                    <Divider/>
                    <table>
                        <thead>
                            <tr>
                                <th className="py-4 mb-6 text-left">Price Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-sm">
                                <td>$42.00 x 2 nights</td>
                                <td className="text-right">$84.00</td>
                            </tr>
                            <tr className="text-sm">
                                <td>Cleaning fee</td>
                                <td className="text-right">$20.00</td>
                            </tr>
                            <tr className="text-sm">
                                <td>Service fee</td>
                                <td className="text-right">$14.68</td>
                            </tr>
                            <tr className="text-sm">
                                <td>Occupancy taxes and fees</td>
                                <td className="text-right">$13.52</td>
                            </tr>
                            <tr className="text-sm font-bold">
                                <td>Total (USD)</td>
                                <td className="text-right">$132.20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default IndexPage;
/* export async function getServerSideProps() {
    const isProd = process.env.NODE_ENV === 'production'
  
    mercadopago.configure({
      access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    })
  
    const { response } = await mercadopago.preferences.create({
      items: [
        {
          id: '00000001',
          currency_id: 'PEN',
          title: 'Modern Studio with One Queen Bed',
          quantity: 1,
          unit_price: 132.2,
        },
      ],
      external_reference: '00000001',
      back_urls: {
        failure: 'http://localhost:3000/thanks/failure',
        success: 'http://localhost:3000/thanks/success',
      },
      binary_mode: true,
    })
  
    return {
      props: {
        mercadoPagoUrl: isProd
          ? response.init_point
          : response.sandbox_init_point,
      },
    }
  } */