export function ReviewOrder() {
  return (
    <>
      Question 5
      <div className="review-layout">
        <h1>Review Order</h1>
        <div className="order-items">
          <div className="item">
            <span>Item</span>
            <img
              width="50px"
              src="https://dummyimage.com/500x500/000/fff&text=Dummy"
            />
            <p>Limited addition cactus print bag 1 litre, green</p>
          </div>

          <div className="quantity">
            <span>Qty</span>
            <p>1</p>
          </div>
          <div>
            <span>Total</span>
            <p>INR 999</p>
          </div>
        </div>
        <div className="grand-total">
          <div className="subtotal">
            <span>Subtotal</span>
            <p>INR 999</p>
          </div>
          <div className="gst">
            <span>GST</span>
            <p>INR 179</p>
          </div>
          <div className="grandtotal">
            <span>Grand Total</span>
            <p>INR 1178</p>
          </div>
        </div>
        <button>Place Order</button>
        <p>Cart Secured By RazorPay</p>
      </div>
    </>
  );
}
