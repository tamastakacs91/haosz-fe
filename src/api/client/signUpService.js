import Service from '../abstract/service.js';

export default class SignUpService extends Service {
  constructor() {
    super(process.env.VUE_APP_SIGNUP_SERVICE_URL);
  }

  initialSignup({ email, password, role }) {
    return this.http.post('/auth/signup', { email, password, role });
  }

  signupDoctor({
    name,
    sealNumber,
    workplace,
    mobile,
    billingName,
    billingAddress,
    billingTaxNumber,
    billingContact,
    billingMobile,
    billingEmail,
    registrationCost,
    userId,
  }) {
    return this.http.post('/doctor', {
      name,
      sealNumber,
      workplace,
      mobile,
      billingName,
      billingAddress,
      billingTaxNumber,
      billingContact,
      billingMobile,
      billingEmail,
      registrationCost,
      userId,
    });
  }

  signupSponsore({
    companyName,
    companyAddress,
    companyTaxNumber,
    companyContact,
    companyMobile,
    companyEmail,
    isMainSponsore,
    isThirtyMin,
    isFiveMin,
    isExhibitionPlace,
    ticketCounts,
    totalPrice,
    userId,
  }) {
    return this.http.post('/sponsore', {
      companyName,
      companyAddress,
      companyTaxNumber,
      companyContact,
      companyMobile,
      companyEmail,
      isMainSponsore,
      isThirtyMin,
      isFiveMin,
      isExhibitionPlace,
      ticketCounts,
      totalPrice,
      userId,
    });
  }
}
