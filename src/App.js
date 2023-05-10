import "./App.css";
import { ContactForm } from "./components/ContactForm.1";
import { LoginForm } from "./components/LoginForm";
import { ReviewOrder } from "./components/ReviewOrder";
import { PhotoGallery } from "./components/PhotoGallery";

function PricingTable() {
  return (
    <div className="container">
      <div className="card">
        <div className="price-details">
          <p>1 month free</p>
          <h2>Basic Plan</h2>
          <p>$9.99/mo</p>
        </div>

        <hr />
        <div className="lower-body">
          <ul>
            <li>Ad free music listening</li>
            <li>Download 10k songs/device</li>
            <li>Login from 3 devices</li>
          </ul>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="card">
        <div className="price-details">
          <p>1 month free</p>
          <h2>Pro Plan</h2>
          <p>$19.99/mo</p>
        </div>

        <hr />
        <div className="lower-body">
          <ul>
            <li>Ad free music listening</li>
            <li>Download 10k songs/device</li>
            <li>Login from 5 devices</li>
          </ul>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="card">
        <div className="price-details">
          <p>1 month free</p>
          <h2>Enterprise Plan</h2>
          <p>$59.99/mo</p>
        </div>

        <hr />
        <div className="lower-body">
          <ul>
            <li>Ad free music listening</li>
            <li>Download 10k songs/device</li>
            <li>Login from unlimited devices</li>
          </ul>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ContactForm />
      <LoginForm />
      <ReviewOrder />
      <PhotoGallery />
      <PricingTable />
    </div>
  );
}

export default App;
