
import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from 'vee-validate';
import { required, min, max, alpha_spaces as alphaSpaces, email, min_value as minValue, max_value as maxValue, confirmed, not_one_of as exclude} from '@vee-validate/rules';
export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage);


        defineRule('required', required);
        defineRule('tos', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('email', email);
        defineRule('min_value', minValue);
        defineRule('max_value', maxValue);
        defineRule('password_mismatch', confirmed);
        defineRule('exclude', exclude);
        defineRule('country_exclude', exclude);
        defineRule('alpha_spaces', alphaSpaces);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required.`,
                    min: `The field ${ctx.field} is to short.`,
                    max: `The field ${ctx.field} is too long.`,
                    email: `The field ${ctx.field} must be a valid email.`,
                    min_value: `The field ${ctx.field} is too low.`,
                    max_value: `The field ${ctx.field} is too high.`,
                    password_mismatch: "The passwords do not match",
                    exclude: `You are not allowed to use this value for the field ${ctx.field}.`,
                    country_exclude: 'Due to restrictions we do not allow users from this country',
                    alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and space.`,
                    tos: 'You must accept Terms of Service.'
                }
            
                const message = messages[ctx.rule.name]
                    ? messages[ctx.rule.name]
                    : `The field ${ctx.field} is invalid see your life`;
                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });
    },
}