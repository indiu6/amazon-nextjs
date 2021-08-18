import Currency from 'react-currency-formatter';
import moment from 'moment';

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>
        </div>

        <div>
          <p className="text-xs fond-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="CAD" /> - Next Day Delivery{' '}
            <Currency quantity={amountShipping} currency="CAD" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
