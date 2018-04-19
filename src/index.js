// Code Goes Here
<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

=======
>>>>>>> 3a2592047a81cf0e0c2904acc6e5e20edd45f13e
class Order extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}
<<<<<<< HEAD

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.array(propTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  }).isRequired
};

Order.defaultProps = {
  cone: true,
  size: 'regular'
};
=======
>>>>>>> 3a2592047a81cf0e0c2904acc6e5e20edd45f13e
