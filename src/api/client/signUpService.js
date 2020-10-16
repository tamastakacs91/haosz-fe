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
        workPlace,
        mobile,
        billingName,
        billingAddress,
        billingTaxNumber,
        billingContact,
        billingMobile,
        billingEmail,
        registrationCost,
        userId,
        notes,
    }) {
        return this.http.post('/doctor', {
            name,
            sealNumber,
            workPlace,
            mobile,
            billingName,
            billingAddress,
            billingTaxNumber,
            billingContact,
            billingMobile,
            billingEmail,
            registrationCost,
            userId,
            notes,
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
        notes,
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
            notes,
        });
    }

    signIn({ email, password }) {
        return this.http.post('/auth/signin', { email, password });
    }

    getUserProfile() {
        return this.http.get('/user/profile');
    }

    resetPassword({ email, password }) {
        return this.http.post('/user/password-reset', { email, password });
    }

    getDoctors() {
        return this.http.get('/doctor');
    }

    getSponsors() {
        return this.http.get('/sponsore');
    }
}
