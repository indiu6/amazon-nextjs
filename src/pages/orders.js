import { getSession, useSession } from 'next-auth/client';
import db from '../../firebase';
import Header from '../components/Header';

function Orders({ orders }) {
  const [session] = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>

        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  // get the users logged in credentials
  const session = getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // firebase db
  const stripeOrders = await db
    .collection('users')
    .doc((await session).user.email)
    .collection('orders')
    .orderBy('timeStamp', 'desc')
    .get();

  // stripe orders
  // const orders = await
}
