import React from 'react';
import logo from './cwsf.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <div className="main">
        <h2 className="main-header">
          LOVE WON’T PAY THE BILLS
        </h2>
        <p>
          We are a solidarity network of childcare workers who have set up this fund to support each other through the crisis. We are viewed as key worker ‘heroes’ who will sacrifice their lives and livelihoods for others out of love. Many childcare workers have been asked by agencies to offer their services for free during lockdown. But rather than be deemed ‘heroes’, we need recognition as workers who need an income to survive.
        </p>


        <p>
          Last month, when Manuela’s employers started showing symptoms of coronavirus, she was faced with an impossible decision. A 22-year-old live-in nanny from Brazil, she doesn’t have right-to-work documentation and therefore relies on cash-in-hand income from the families she works for. If she doesn’t go to work, where she is exposed to the virus, she won’t get any cash. Without that cash she can’t pay for food and basic necessities.
        </p>


        <p>
          As one of the 2 million workers in the UK’s informal economy, many of whom are migrant women, she is not able to receive any support from the government’s coronavirus Job Retention Scheme or Self-employed income support scheme. The No Recourse to Public Funds policy also denies many workers with insecure immigration status from accessing any benefits including universal credit.
        </p>


        <p>
          The money donated to the childcare workers solidarity fund will provide immediate financial support for the most vulnerable childcare workers, and enable them to stay home and healthy - protecting themselves, their families and their communities while slowing the spread of coronavirus.
        </p>


        <p>
          We know that times are tough for everyone right now, and we welcome donations of all sizes.
        </p>


        <p>
          Here are some suggested amounts:
        </p>

        <p>
          Those with a little to spare: £5
        </p>

        <p>
          Those who earn less than 30k a year: £10-20
        </p>

        <p>
          Those who earn £30-80k a year: £20-100
        </p>

        <p>
          Those who earn more than £80k a year: We ask that you consider making a substantial donation of £200+ and above
        </p>

        <div className="App-donation-form">
          <iframe title="donorbox" allowpaymentrequest="" frameBorder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/childcare-workers-solidarity-fund" style={{maxWidth: 500, minWidth: 250, maxHeight: 'none!important', width: "100%"}}/>
        </div>
        <p className="App-moreinfo">
          Any questions? Please email us at: <a href="mailto:info@nannysolidaritynetwork.com">info@nannysolidaritynetwork.com</a>
        </p>
      </div>
    </div>
  );
}

export default App;
