const App = () => {
  const handleSendSMS = () => {
    const phoneNumber = "recipient_phone_number";
    const message = "Hello, this is a test SMS!";

    if ("contacts" in navigator && "SMSManager" in window) {
      navigator.contacts
        .select(["tel"], { multiple: true })
        .then((contacts) => {
          const contact = contacts.find((c) => c.tel);
          if (contact) {
            const options = {
              receivers: [contact.tel[0].value],
              body: message,
            };

            const sms = new window.SMSManager();
            sms
              .send(options)
              .then(() => {
                console.log("SMS sent successfully");
              })
              .catch((error) => {
                console.error("Error sending SMS:", error.message);
              });
          } else {
            console.error("No contact with phone number found");
          }
        })
        .catch((error) => {
          console.error("Error fetching contacts:", error.message);
        });
    } else {
      console.error("SMS API not supported in this browser");
    }
  };

  return (
    <div>
      <button onClick={handleSendSMS}>Send SMS</button>
    </div>
  );
};

export default App;
