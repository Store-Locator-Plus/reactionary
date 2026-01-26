export {}; // Ensures this is treated as a module.

declare global {
    interface REST_Endpoints {
        invoices: string;
        settings_history: string;
        /** Customer profile history endpoint (optional) */
        history?: string;
    }

    interface REST {
        endpoint: REST_Endpoints
    }

    interface mySLP {
        api_key: string;
        div_id: string;
        embed_script: string;
        /** Blog ID used for scoping certain requests (optional) */
        blog_id?: number;
        location_count: bigint;
        location_limit: bigint;
        map_views: bigint;
        map_views_charge: number;
        map_views_charge_message: string;
        map_views_limit: bigint;
        map_views_message: string;
        map_views_overage: bigint;
        map_views_over_limit: boolean;
        map_views_over_message: string;
        presentation: string;
        REST: REST;
        rest_path: string;
        site_url: string;
        sites: string[];
        version: string;
        subscription: Subscription;
    }

    interface Plan {
        name: string;
        price: string;
        period: string;
        max_locations: number;
        max_views: number;
        is_selected: boolean;
        up_or_down: string;
        status_label: string;
        renew_text: string;
    }

    interface StripeData {
        public_key?: string;
        form_label?: string;
        button_label?: string;
    }

    /*
        AMT - amount as an int 55 = $55.00
        PROFILEID - the subscription id
     */
    interface SubscriptionMeta {
        AMT: bigint;
        DESC: string;
        IS_GOOD: boolean;
        LASTPAYMENTAMT: bigint;
        LASTPAYMENTDATE: string;
        NEXTBILLINGDATE: string;
        PERIOD: string;
        PLAN: string;
        PROCESSOR: string;
        PROFILEID: string;
        PROFILESTARTDATE: string;
        STATUS: string;
        subscription_details: any;
    }

    interface SubscriptionNonces {
        recurring_payments: string;
        recurring_payments_cancel: string;
        switch_to_stripe: string;
    }

    interface Subscription {
        account_is_valid: boolean;
        might_have_subscription: boolean;
        current_subscription: SubscriptionMeta;
        using_stripe?: boolean;
        payment_processor?: string;
        days_left?: number;
        days_left_label?: string;
        status?: string;
        plan_description?: string;
        expiration_date?: string;
        is_cancelled?: boolean;
        amt?: string | number;
        currency?: string;
        canceled_at?: number | string;
        canceled_at_formatted?: string;
        coupon?: string;
        card_info?: string;
        coupon_code?: string;
        coupon_details?: string;
        stripe_data?: StripeData;
        user_id?: number;
        payment_profile_id?: string;
        user_email?: string;
        plans?: Plan[];
        nonces?: SubscriptionNonces;
    }

    interface SLP {
        apikey: string;
        style_id: string;
    }

    interface url {
        main_site: string;
        rest: string;
        slp_documentation: string;
    }

    interface SLPReact {
        nonce: string;
        pageName: string;
        SLP: SLP;
        mySLP: mySLP;
        scriptHandle: string;
        url: url;
    }

    interface Window {
        slpReact: SLPReact;
    }

    const slpReact: SLPReact; // Declare global variable
}