import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard,faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import './payment.css'
import gateway from '../../../images/gateway.png'
import imgpay from '../../../images/gpay.png'
import impaytm from '../../../images/paytm.png'

export default function payment() {
  return (
    <>
    <div className="BOX">
        <div className="pcontainer">
            <div className="pleft">
                <div className="head1">Finalize Payment</div>
                <div2 className="head2">Pay Using Credit or Debit Card</div2>
                <div className="dbtcard">
                    <label className='plabels' htmlFor="card-number">Card Number</label>
                    <div className="yashfmt">
                        <FontAwesomeIcon className="ic" icon={faCreditCard} />
                    <input type="text" id="card-number" placeholder="Enter Card Number" />
                    </div>
                </div>
                <div className="grp">
                    <div className="expside">
                        <label className='plabels1' htmlFor="expiry-date">Expiry Date</label>
                        <div className="bothgrp">
                            <FontAwesomeIcon className="ic" icon={faCalendarAlt} />
                            <input type="text" id="date" placeholder="DD/MM/YYYY" />
                        </div>
                    </div>
                    <div className="expside">
                    <label className='plabels1' htmlFor="write-cvv">CVV</label>
                        <div className="bothgrp">
                            <FontAwesomeIcon className="ic" icon={faLock} />
                            <input type="text" id="date" placeholder="CVV" />
                        </div>
                    </div>
                </div>
                <div className="paybtnsec">
                    <button className="paybtn">PAY</button>
                </div>
                <div className="online">
                    <div className="head3">Pay Using Online Wallet</div>
                    <div className="onlinesec">
                        <button className="paytm"><img src={imgpay} alt="" /></button>
                        <button className="paytm"><img src={impaytm} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="pright"><img src={gateway} alt="" /></div>
        </div>
    </div>
    </>
  )
}
