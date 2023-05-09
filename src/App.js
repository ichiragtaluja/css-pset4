import "./App.css";
import { ContactForm } from "./components/ContactForm.1";
import { LoginForm } from "./components/LoginForm";
import { ReviewOrder } from "./components/ReviewOrder";
import { PhotoGallery } from "./components/PhotoGallery";

function PricingTable() {
  return (
    <div className="container">
      <div>
        <p>One month free</p><h2>Basic Plan</h2>
      </div>
      <div>
        <p>One month free</p><h2>Pro Plan</h2>
      </div>
      <div>
        <p>One month free</p><h2>Enterprise Plan</h2>
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
