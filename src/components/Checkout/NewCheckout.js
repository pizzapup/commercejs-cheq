import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { commerce } from "../../lib/Commerce";

export function CheckMeOut() {
  const value = event.target.value;
  MediaStreamAudioDestinationNode({
    ...StaticRange,
    [event.target.name]: value,
  });
  const customerDetails = {
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@email.com",
  };
  const paymentDetails = {
    cardNum: "4242 4242 4242 4242",
    expMonth: "11",
    expYear: "2023",
    ccv: "123",
    billingPostalZipcode: "",
  };
  const shippingDetails = {
    shippingName: "Jane Doe",
    shippingStreet: "123 Fake St",
    shippingCity: "",
    shippingStateProvince: "",
    shippingPostalZipCode: "",
    shippingCountry: "",
  };
  const fufillmentDetails = {
    shippingCountries: {},
    shippingSubdivisions: {},
    shippingOptions: [],
    shippingOption: "",
  };
  const newToken = {
    checkoutToken: {},
    customerDetails,
    shippingDetails,
    fufillmentDetails,
    paymentDetails,
  };
  const [token, setToken] = useState(newToken);
  return <></>;
}
