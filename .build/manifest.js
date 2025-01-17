
import App from '../src/views/App';

export * from '@stripe/ui-extension-sdk/version';
export const BUILD_TIME = '2024-07-01 12:19:58.13031 +0530 IST m=+4.279911084';

export { 
  App	
 };

export default {
  "id": "com.example.first-stripe-app2",
  "version": "0.0.2",
  "name": "First Stripe App",
  "icon": "",
  "permissions": [
    {
      "permission": "connected_account_read",
      "purpose": "Grants access to read Accounts"
    },
    {
      "permission": "connected_account_write",
      "purpose": "Grants access to read Accounts"
    },
    {
      "permission": "account_link_write",
      "purpose": "Grants access to Account Links"
    },
    {
      "permission": "apple_pay_domain_read",
      "purpose": "Grants access to Apple Pay Domain resources. To use Apple Pay, you need to register your web domains with Apple."
    },
    {
      "permission": "apple_pay_domain_write",
      "purpose": "Grants access to Apple Pay Domain resources. To use Apple Pay, you need to register your web domains with Apple."
    },
    {
      "permission": "application_fee_read",
      "purpose": "Grants access to Application Fees"
    },
    {
      "permission": "application_fee_write",
      "purpose": "Grants access to Application Fees"
    },
    {
      "permission": "balance_read",
      "purpose": "Grants access to Balance"
    },
    {
      "permission": "balance_transaction_source_read",
      "purpose": "Grants access to expand the source attribute when retrieving Balance Transactions. This permission also implies the following permissions: application_fee_read, balance_read, transfer_read"
    },
    {
      "permission": "billing_clock_read",
      "purpose": "Grants access to Test clocks"
    },
    {
      "permission": "billing_clock_write",
      "purpose": "Grants access to Test clocks"
    },
    {
      "permission": "charge_read",
      "purpose": "Grants access to Charges"
    },
    {
      "permission": "charge_write",
      "purpose": "Grants access to Charges"
    },
    {
      "permission": "checkout_session_read",
      "purpose": "Grants access to Sessions. This permission also implies the following permissions: mandate_read, payment_intent_read, payment_links_read, product_read, setup_intent_read, sku_read"
    },
    {
      "permission": "checkout_session_write",
      "purpose": "Grants access to Sessions. This permission also implies the following permissions: mandate_read, payment_intent_read, payment_links_read, product_read, setup_intent_read, sku_read"
    },
    {
      "permission": "terminal_configuration_read",
      "purpose": "Grants access to Configurations"
    },
    {
      "permission": "terminal_configuration_write",
      "purpose": "Grants access to Configurations"
    },
    {
      "permission": "terminal_connection_token_write",
      "purpose": "Grants access to Connection Tokens"
    },
    {
      "permission": "coupon_read",
      "purpose": "Grants access to Coupons"
    },
    {
      "permission": "coupon_write",
      "purpose": "Grants access to Coupons"
    },
    {
      "permission": "credit_note_read",
      "purpose": "Grants access to Credit Notes. This permission also implies the following permissions: invoice_read"
    },
    {
      "permission": "credit_note_write",
      "purpose": "Grants access to Credit Notes. This permission also implies the following permissions: invoice_read"
    },
    {
      "permission": "customer_portal_read",
      "purpose": "Grants access to the customer portal. If you’re using the customer portal to manage subscriptions or payment methods, you must also request elements_write."
    },
    {
      "permission": "customer_portal_write",
      "purpose": "Grants access to the customer portal. If you’re using the customer portal to manage subscriptions or payment methods, you must also request elements_write."
    },
    {
      "permission": "customer_read",
      "purpose": "Grants access to Customers. This permission also implies the following permission: billing_clock_read."
    },
    {
      "permission": "customer_write",
      "purpose": "Grants access to Customers. This permission also implies the following permission: billing_clock_read."
    },
    {
      "permission": "dispute_read",
      "purpose": "Grants access to Disputes"
    },
    {
      "permission": "dispute_write",
      "purpose": "Grants access to Disputes"
    },
    {
      "permission": "edit_link_write",
      "purpose": "Grants access to Login Links"
    },
    {
      "permission": "elements_write",
      "purpose": "Grants access to Stripe.js Elements"
    },
    {
      "permission": "event_read",
      "purpose": "Grants access to Events"
    },
    {
      "permission": "file_read",
      "purpose": "Grants access to Files"
    },
    {
      "permission": "file_write",
      "purpose": "Grants access to Files"
    },
    {
      "permission": "invoice_read",
      "purpose": "Grants access to Invoices. This permission also implies the following permission: credit_note_read. If you’re using the hosted invoice page to manage invoices or payment methods, you must also request elements_write."
    },
    {
      "permission": "invoice_write",
      "purpose": "Grants access to Invoices. This permission also implies the following permission: credit_note_read. If you’re using the hosted invoice page to manage invoices or payment methods, you must also request elements_write."
    },
    {
      "permission": "issuing_authorization_read",
      "purpose": "Grants access to Authorizations"
    },
    {
      "permission": "issuing_authorization_write",
      "purpose": "Grants access to Authorizations"
    },
    {
      "permission": "issuing_card_read",
      "purpose": "Grants access to Cards"
    },
    {
      "permission": "issuing_card_write",
      "purpose": "Grants access to Cards"
    },
    {
      "permission": "issuing_cardholder_read",
      "purpose": "Grants access to Cardholders"
    },
    {
      "permission": "issuing_cardholder_write",
      "purpose": "Grants access to Cardholders"
    },
    {
      "permission": "issuing_dispute_read",
      "purpose": "Grants access to Issuing Disputes"
    },
    {
      "permission": "issuing_dispute_write",
      "purpose": "Grants access to Issuing Disputes"
    },
    {
      "permission": "issuing_transaction_read",
      "purpose": "Grants access to Transactions"
    },
    {
      "permission": "issuing_transaction_write",
      "purpose": "Grants access to Transactions"
    },
    {
      "permission": "terminal_location_read",
      "purpose": "Grants access to Locations"
    },
    {
      "permission": "terminal_location_write",
      "purpose": "Grants access to Locations"
    },
    {
      "permission": "mandate_read",
      "purpose": "Grants access to Mandates"
    },
    {
      "permission": "mandate_write",
      "purpose": "Grants access to Mandates"
    },
    {
      "permission": "order_read",
      "purpose": "Grants access to Orders"
    },
    {
      "permission": "order_write",
      "purpose": "Grants access to Orders"
    },
    {
      "permission": "payment_intent_read",
      "purpose": "Grants access to PaymentIntents. If you’re managing PaymentIntents with Stripe.js Elements, you must also request elements_write. This permission also implies the following permissions: product_read, sku_read"
    },
    {
      "permission": "payment_intent_write",
      "purpose": "Grants access to PaymentIntents. If you’re managing PaymentIntents with Stripe.js Elements, you must also request elements_write. This permission also implies the following permissions: product_read, sku_read"
    },
    {
      "permission": "payment_links_read",
      "purpose": "Grants access to Payment Links. This permission also implies the following permissions: mandate_read, product_read, sku_read"
    },
    {
      "permission": "payment_links_write",
      "purpose": "Grants access to Payment Links. This permission also implies the following permissions: mandate_read, product_read, sku_read"
    },
    {
      "permission": "payment_method_read",
      "purpose": "Grants access to PaymentMethods. This permission also implies the following permission: source_read"
    },
    {
      "permission": "payment_method_write",
      "purpose": "Grants access to PaymentMethods. This permission also implies the following permission: source_read"
    },
    {
      "permission": "payout_read",
      "purpose": "Grants access to Payouts"
    },
    {
      "permission": "payout_write",
      "purpose": "Grants access to Payouts"
    },
    {
      "permission": "plan_read",
      "purpose": "Grants access to Plans and Prices"
    },
    {
      "permission": "plan_write",
      "purpose": "Grants access to Plans and Prices"
    },
    {
      "permission": "product_read",
      "purpose": "Grants access to Products"
    },
    {
      "permission": "product_write",
      "purpose": "Grants access to Products"
    },
    {
      "permission": "promotion_code_read",
      "purpose": "Grants access to Promotion Codes"
    },
    {
      "permission": "promotion_code_write",
      "purpose": "Grants access to Promotion Codes"
    },
    {
      "permission": "quote_read",
      "purpose": "Grants access to Quotes. This permission also implies the following permissions: sku_read, product_read"
    },
    {
      "permission": "quote_write",
      "purpose": "Grants access to Quotes. This permission also implies the following permissions: sku_read, product_read"
    },
    {
      "permission": "terminal_reader_read",
      "purpose": "Grants access to Readers"
    },
    {
      "permission": "terminal_reader_write",
      "purpose": "Grants access to Readers"
    },
    {
      "permission": "report_runs_and_report_types_read",
      "purpose": "Grants read access to Report Types and allows creation of Report Runs"
    },
    {
      "permission": "review_read",
      "purpose": "Grants access to Reviews"
    },
    {
      "permission": "review_write",
      "purpose": "Grants access to Reviews"
    },
    {
      "permission": "secret_write",
      "purpose": "Grants access to Secrets"
    },
    {
      "permission": "setup_intent_read",
      "purpose": "Grants access to SetupIntents. If you’re managing SetupIntents with Stripe.js Elements, you must also request elements_write. This permission also implies the following permission: mandate_read"
    },
    {
      "permission": "setup_intent_write",
      "purpose": "Grants access to SetupIntents. If you’re managing SetupIntents with Stripe.js Elements, you must also request elements_write. This permission also implies the following permission: mandate_read"
    },
    {
      "permission": "shipping_rate_read",
      "purpose": "Grants access to Shipping Rates"
    },
    {
      "permission": "shipping_rate_write",
      "purpose": "Grants access to Shipping Rates"
    },
    {
      "permission": "sku_read",
      "purpose": "Grants access to SKUs"
    },
    {
      "permission": "sku_write",
      "purpose": "Grants access to SKUs"
    },
    {
      "permission": "source_read",
      "purpose": "Grants access to Sources"
    },
    {
      "permission": "source_write",
      "purpose": "Grants access to Sources"
    },
    {
      "permission": "subscription_read",
      "purpose": "Grants access to Subscriptions"
    },
    {
      "permission": "subscription_write",
      "purpose": "Grants access to Subscriptions"
    },
    {
      "permission": "tax_rate_read",
      "purpose": "Grants access to Tax Rates"
    },
    {
      "permission": "tax_rate_write",
      "purpose": "Grants access to Tax Rates"
    },
    {
      "permission": "tax_settings_read",
      "purpose": "Grants access to Tax Settings"
    },
    {
      "permission": "tax_settings_write",
      "purpose": "Grants access to Tax Settings"
    },
    {
      "permission": "tax_calculations_and_transactions_read",
      "purpose": "Grants access to Tax Calculations and Transactions"
    },
    {
      "permission": "tax_calculations_and_transactions_write",
      "purpose": "Grants access to Tax Calculations and Transactions"
    },
    {
      "permission": "token_read",
      "purpose": "Grants access to Tokens"
    },
    {
      "permission": "token_write",
      "purpose": "Grants access to Tokens"
    },
    {
      "permission": "top_up_read",
      "purpose": "Grants access to Top-ups"
    },
    {
      "permission": "top_up_write",
      "purpose": "Grants access to Top-ups"
    },
    {
      "permission": "transfer_read",
      "purpose": "Grants access to Transfers. This permission also implies the following permission: payout_read"
    },
    {
      "permission": "transfer_write",
      "purpose": "Grants access to Transfers. This permission also implies the following permission: payout_read"
    },
    {
      "permission": "usage_record_read",
      "purpose": "Grants access to Usage Records"
    },
    {
      "permission": "usage_record_write",
      "purpose": "Grants access to Usage Records"
    },
    {
      "permission": "user_email_read",
      "purpose": "Grants access to user emails"
    },
    {
      "permission": "webhook_read",
      "purpose": "Grants access to Webhook Endpoints"
    },
    {
      "permission": "webhook_write",
      "purpose": "Grants access to Webhook Endpoints. To use webhook_write in your Stripe App, contact stripe-apps@stripe.com."
    }
  ],
  "ui_extension": {
    "views": [
      {
        "viewport": "stripe.dashboard.drawer.default",
        "component": "App"
      }
    ],
    "content_security_policy": {
      "connect-src": null,
      "image-src": null,
      "purpose": ""
    }
  },
  "allowed_redirect_uris": [
    "https://webhook.site/b93a909e-c429-404f-a4c5-78e0427bbd27"
  ],
  "stripe_api_access_type": "oauth",
  "distribution_type": "public"
};
