import Container from "../../Shared/Container";

export default function ContactSection() {
  return (
    <Container>
      <div className="w-full mx-auto md:p-6 flex flex-col md:flex-row justify-between items-center md:items-start my-20 text-brookies-primary">
        <h2 className="text-3xl font-bold  mb-6">Contact</h2>

        <div className="space-y-6 w-1/2">
          <div>
            <h3 className="font-semibold ">Got a question?</h3>
            <p className="">
              Please visit our{" "}
              <a
                href="#"
                className=" underline cursor-pointer hover:text-brookies-secondary"
              >
                FAQ page
              </a>{" "}
              for immediate answers to your most commonly asked questions.
            </p>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h3 className="font-semibold ">Order queries:</h3>
            <p className="">
              Our customer service hours are <strong>Monday-Friday</strong> from{" "}
              <strong>7am-3pm AEST</strong>. Please allow 1-3 business days for
              our team to respond to your email. If your query relates to an
              existing order, please be sure to include your order number.
            </p>
            <a
              href="#"
              className=" underline cursor-pointer hover:text-brookies-secondary"
            >
              Email us regarding an order
            </a>
          </div>

          <div>
            <h3 className="font-semibold ">Collaborations:</h3>
            <p className="">
              We love working with brands to collaborate on limited edition
              flavours, large catering for events, or partnering with Brooki on
              social media! For collaborations, we welcome you to pitch us your
              idea.
            </p>
            <a
              href="#"
              className=" underline cursor-pointer hover:text-brookies-secondary"
            >
              Email us with a pitch idea
            </a>
          </div>

          <div>
            <h3 className="font-semibold ">Visit us in store:</h3>
            <p className=" underline cursor-pointer hover:text-brookies-secondary">
              15 Marshall Street, Fortitude Valley
            </p>
            <p className="">
              <strong>Closed Mondays</strong> <br />
              Tuesday: 8 AM - 2 PM <br />
              Wednesday - Friday: 8 AM - 5 PM <br />
              Saturday - Sunday: 8 AM - 2 PM
            </p>
            <p className=" underline cursor-pointer hover:text-brookies-secondary">
              Brisbane Airport (Domestic, Gate 25)
            </p>
            <p className="">Open 7 days, 6:00am - 5:00pm</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
