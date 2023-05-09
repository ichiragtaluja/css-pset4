export const ContactForm = () => {
  return (
    <>
      Question 1
      <div className="layout-contact">
        <div>
          <label>Name: </label>
          <input />
        </div>
        <div>
          <label>Email: </label>
          <input />
        </div>
        <div className="message">
          <label>Message: </label>
          <textarea />
        </div>

        <button>Submit</button>
      </div>
    </>
  );
};
