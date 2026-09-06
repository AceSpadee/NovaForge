function validateContact({ name, company, email, message, turnstileToken }) {
    if (typeof name !== 'string') {
        return {
            error: 'name must be string'
        }
    } else if (company !== undefined && typeof company !== 'string') {
        return {
            error: 'company must be string'
        }
    } else if (typeof email !== 'string') {
        return {
            error: 'email must be string'
        }
    } else if (typeof message !== 'string') {
        return {
            error: 'message must be string'
        }
    }

    name = (name || '').trim();
    company = (company || '').trim();
    email = (email || '').trim();
    message = (message || '').trim();

    if (typeof turnstileToken !== 'string') {
        return {
            error: 'turnstileToken must be string'
        }
    }
    turnstileToken = turnstileToken.trim();

    if (!name) {
        return {
            error: 'name cannot be blank'
        }
    } else if (name.length > 100) {
        return {
            error: 'name field too long'
        }
    } else if (company.length > 150) {
        return {
            error: 'company field too long'
        }
    } else if (!email) {
        return {
            error: 'email cannot be blank'
        }
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
            error: 'invalid email'
        }
    } else if (email.length > 254) {
        return {
            error: 'email field too long'
        }
    } else if (!message) {
        return {
            error: 'message cannot be blank'
        }
    } else if (message.length > 3000) {
        return {
            error: 'message field too long'
        }
    } else if (!turnstileToken) {
        return {
            error: 'missing token'
        }
    } else if (turnstileToken.length > 2048) {
        return {
            error: 'token too long'
        }
    }

    return { name, company, email, message, turnstileToken }
};

export default validateContact;