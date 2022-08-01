import React from "react";
import GooglePayButton from "@google-pay/button-react";


const Payment = () => {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 centre">
                <main className="pa4 black-80">
                  <div className="measure">
                  <fieldset
                      id="Payment"
                      className="ba b--transparent ph0 mh0"
                    >
                    
     <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: '100.00',
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
              }}
             
              onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
              }}
            />
             </fieldset>
                  
                              </div>
                            </main>
                          </article>
                        </div>
                        <div className="col-md-3"></div>
                      </div>
                    </div>
    );
    }

    export default Payment;
