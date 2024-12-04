"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js
  var require_ui = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TailorDateField = exports.List = exports.ListItem = exports.Tooltip = exports.TextField = exports.TextArea = exports.TabPanels = exports.TabList = exports.Tabs = exports.TabPanel = exports.Tab = exports.Switch = exports.Spinner = exports.Select = exports.Radio = exports.Notice = exports.Menu = exports.MenuGroup = exports.MenuItem = exports.Link = exports.Icon = exports.FormFieldGroup = exports.Divider = exports.ChipList = exports.Chip = exports.Checkbox = exports.ButtonGroup = exports.Button = exports.BasicTableHeaderCell = exports.BasicTableCell = exports.BasicTableFooter = exports.BasicTableRow = exports.BasicTableBody = exports.BasicTableHeader = exports.BasicTable = exports.Banner = exports.Badge = exports.AccordionItem = exports.Accordion = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Accordion = (0, react_1.createRemoteReactComponent)("Accordion");
      exports.AccordionItem = (0, react_1.createRemoteReactComponent)("AccordionItem", {
        fragmentProps: ["title", "subtitle", "media", "actions"]
      });
      exports.Badge = (0, react_1.createRemoteReactComponent)("Badge");
      exports.Banner = (0, react_1.createRemoteReactComponent)("Banner", {
        fragmentProps: ["description", "title", "actions"]
      });
      exports.BasicTable = (0, react_1.createRemoteReactComponent)("BasicTable");
      exports.BasicTableHeader = (0, react_1.createRemoteReactComponent)("BasicTableHeader");
      exports.BasicTableBody = (0, react_1.createRemoteReactComponent)("BasicTableBody");
      exports.BasicTableRow = (0, react_1.createRemoteReactComponent)("BasicTableRow");
      exports.BasicTableFooter = (0, react_1.createRemoteReactComponent)("BasicTableFooter");
      exports.BasicTableCell = (0, react_1.createRemoteReactComponent)("BasicTableCell");
      exports.BasicTableHeaderCell = (0, react_1.createRemoteReactComponent)("BasicTableHeaderCell");
      exports.Button = (0, react_1.createRemoteReactComponent)("Button");
      exports.ButtonGroup = (0, react_1.createRemoteReactComponent)("ButtonGroup", {
        fragmentProps: ["menuTrigger"]
      });
      exports.Checkbox = (0, react_1.createRemoteReactComponent)("Checkbox", {
        fragmentProps: ["label"]
      });
      exports.Chip = (0, react_1.createRemoteReactComponent)("Chip");
      exports.ChipList = (0, react_1.createRemoteReactComponent)("ChipList");
      exports.Divider = (0, react_1.createRemoteReactComponent)("Divider");
      exports.FormFieldGroup = (0, react_1.createRemoteReactComponent)("FormFieldGroup");
      exports.Icon = (0, react_1.createRemoteReactComponent)("Icon");
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.MenuItem = (0, react_1.createRemoteReactComponent)("MenuItem");
      exports.MenuGroup = (0, react_1.createRemoteReactComponent)("MenuGroup", {
        fragmentProps: ["title"]
      });
      exports.Menu = (0, react_1.createRemoteReactComponent)("Menu", {
        fragmentProps: ["trigger"]
      });
      exports.Notice = (0, react_1.createRemoteReactComponent)("Notice", {
        fragmentProps: ["description", "title", "actions"]
      });
      exports.Radio = (0, react_1.createRemoteReactComponent)("Radio", {
        fragmentProps: ["label"]
      });
      exports.Select = (0, react_1.createRemoteReactComponent)("Select", {
        fragmentProps: ["label"]
      });
      exports.Spinner = (0, react_1.createRemoteReactComponent)("Spinner");
      exports.Switch = (0, react_1.createRemoteReactComponent)("Switch", {
        fragmentProps: ["label"]
      });
      exports.Tab = (0, react_1.createRemoteReactComponent)("Tab");
      exports.TabPanel = (0, react_1.createRemoteReactComponent)("TabPanel");
      exports.Tabs = (0, react_1.createRemoteReactComponent)("Tabs");
      exports.TabList = (0, react_1.createRemoteReactComponent)("TabList");
      exports.TabPanels = (0, react_1.createRemoteReactComponent)("TabPanels");
      exports.TextArea = (0, react_1.createRemoteReactComponent)("TextArea", {
        fragmentProps: ["label"]
      });
      exports.TextField = (0, react_1.createRemoteReactComponent)("TextField", {
        fragmentProps: ["label"]
      });
      exports.Tooltip = (0, react_1.createRemoteReactComponent)("Tooltip", {
        fragmentProps: ["trigger"]
      });
      exports.ListItem = (0, react_1.createRemoteReactComponent)("ListItem", {
        fragmentProps: ["value", "title", "secondaryTitle", "icon", "image"]
      });
      exports.List = (0, react_1.createRemoteReactComponent)("List");
      exports.TailorDateField = (0, react_1.createRemoteReactComponent)("TailorDateField", {
        fragmentProps: ["label"]
      });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js
  var require_tailor_dashboard_components = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TabPanel = exports.Tab = exports.SignInView = exports.StripeFileUploader = exports.SettingsView = exports.Link = exports.Img = exports.FocusView = exports.ContextView = exports.Sparkline = exports.LineChart = exports.BarChart = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.BarChart = (0, react_1.createRemoteReactComponent)("BarChart");
      exports.LineChart = (0, react_1.createRemoteReactComponent)("LineChart");
      exports.Sparkline = (0, react_1.createRemoteReactComponent)("Sparkline");
      exports.ContextView = (0, react_1.createRemoteReactComponent)("ContextView", {
        fragmentProps: [
          "actions",
          "banner",
          "primaryAction",
          "secondaryAction",
          "footerContent"
        ]
      });
      exports.FocusView = (0, react_1.createRemoteReactComponent)("FocusView", {
        fragmentProps: ["primaryAction", "secondaryAction", "footerContent"]
      });
      exports.Img = (0, react_1.createRemoteReactComponent)("Img");
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.SettingsView = (0, react_1.createRemoteReactComponent)("SettingsView");
      exports.StripeFileUploader = (0, react_1.createRemoteReactComponent)("StripeFileUploader");
      exports.SignInView = (0, react_1.createRemoteReactComponent)("SignInView", {
        fragmentProps: ["descriptionActionContents", "footerContent"]
      });
      exports.Tab = (0, react_1.createRemoteReactComponent)("Tab");
      exports.TabPanel = (0, react_1.createRemoteReactComponent)("TabPanel");
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/manual_components.js
  var require_manual_components = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/manual_components.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TableHeaderCell = exports.TableCell = exports.TableFooter = exports.TableHead = exports.TableRow = exports.TableBody = exports.Table = exports.DateField = exports.Icon = exports.Button = exports.Link = exports.Checkbox = exports.Switch = exports.Radio = exports.Select = exports.TextArea = exports.TextField = exports.Inline = exports.Box = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Box = (0, react_1.createRemoteReactComponent)("Box");
      exports.Inline = (0, react_1.createRemoteReactComponent)("Inline");
      exports.TextField = (0, react_1.createRemoteReactComponent)("TextField", {
        fragmentProps: ["label"]
      });
      exports.TextArea = (0, react_1.createRemoteReactComponent)("TextArea", {
        fragmentProps: ["label"]
      });
      exports.Select = (0, react_1.createRemoteReactComponent)("Select", {
        fragmentProps: ["label"]
      });
      exports.Radio = (0, react_1.createRemoteReactComponent)("Radio", {
        fragmentProps: ["label"]
      });
      exports.Switch = (0, react_1.createRemoteReactComponent)("Switch", {
        fragmentProps: ["label"]
      });
      exports.Checkbox = (0, react_1.createRemoteReactComponent)("Checkbox", {
        fragmentProps: ["label"]
      });
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.Button = (0, react_1.createRemoteReactComponent)("Button");
      exports.Icon = (0, react_1.createRemoteReactComponent)("Icon");
      exports.DateField = (0, react_1.createRemoteReactComponent)("DateField", {
        fragmentProps: ["label"]
      });
      exports.Table = (0, react_1.createRemoteReactComponent)("Table");
      exports.TableBody = (0, react_1.createRemoteReactComponent)("TableBody");
      exports.TableRow = (0, react_1.createRemoteReactComponent)("TableRow");
      exports.TableHead = (0, react_1.createRemoteReactComponent)("TableHead");
      exports.TableFooter = (0, react_1.createRemoteReactComponent)("TableFooter");
      exports.TableCell = (0, react_1.createRemoteReactComponent)("TableCell");
      exports.TableHeaderCell = (0, react_1.createRemoteReactComponent)("TableHeaderCell");
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var require_ui2 = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TableRow = exports.TableHeaderCell = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableBody = exports.Table = exports.TextField = exports.TextArea = exports.Switch = exports.Select = exports.Radio = exports.Link = exports.Inline = exports.Icon = exports.DateField = exports.Checkbox = exports.Button = exports.Box = exports.Tooltip = exports.Tabs = exports.TabPanels = exports.TabList = exports.Spinner = exports.MenuItem = exports.MenuGroup = exports.Menu = exports.ListItem = exports.List = exports.FormFieldGroup = exports.Divider = exports.ChipList = exports.Chip = exports.ButtonGroup = exports.Banner = exports.Badge = exports.AccordionItem = exports.Accordion = void 0;
      var ui_1 = require_ui();
      Object.defineProperty(exports, "Accordion", { enumerable: true, get: function() {
        return ui_1.Accordion;
      } });
      Object.defineProperty(exports, "AccordionItem", { enumerable: true, get: function() {
        return ui_1.AccordionItem;
      } });
      Object.defineProperty(exports, "Badge", { enumerable: true, get: function() {
        return ui_1.Badge;
      } });
      Object.defineProperty(exports, "Banner", { enumerable: true, get: function() {
        return ui_1.Banner;
      } });
      Object.defineProperty(exports, "ButtonGroup", { enumerable: true, get: function() {
        return ui_1.ButtonGroup;
      } });
      Object.defineProperty(exports, "Chip", { enumerable: true, get: function() {
        return ui_1.Chip;
      } });
      Object.defineProperty(exports, "ChipList", { enumerable: true, get: function() {
        return ui_1.ChipList;
      } });
      Object.defineProperty(exports, "Divider", { enumerable: true, get: function() {
        return ui_1.Divider;
      } });
      Object.defineProperty(exports, "FormFieldGroup", { enumerable: true, get: function() {
        return ui_1.FormFieldGroup;
      } });
      Object.defineProperty(exports, "List", { enumerable: true, get: function() {
        return ui_1.List;
      } });
      Object.defineProperty(exports, "ListItem", { enumerable: true, get: function() {
        return ui_1.ListItem;
      } });
      Object.defineProperty(exports, "Menu", { enumerable: true, get: function() {
        return ui_1.Menu;
      } });
      Object.defineProperty(exports, "MenuGroup", { enumerable: true, get: function() {
        return ui_1.MenuGroup;
      } });
      Object.defineProperty(exports, "MenuItem", { enumerable: true, get: function() {
        return ui_1.MenuItem;
      } });
      Object.defineProperty(exports, "Spinner", { enumerable: true, get: function() {
        return ui_1.Spinner;
      } });
      Object.defineProperty(exports, "TabList", { enumerable: true, get: function() {
        return ui_1.TabList;
      } });
      Object.defineProperty(exports, "TabPanels", { enumerable: true, get: function() {
        return ui_1.TabPanels;
      } });
      Object.defineProperty(exports, "Tabs", { enumerable: true, get: function() {
        return ui_1.Tabs;
      } });
      Object.defineProperty(exports, "Tooltip", { enumerable: true, get: function() {
        return ui_1.Tooltip;
      } });
      __exportStar(require_tailor_dashboard_components(), exports);
      var manual_components_1 = require_manual_components();
      Object.defineProperty(exports, "Box", { enumerable: true, get: function() {
        return manual_components_1.Box;
      } });
      Object.defineProperty(exports, "Button", { enumerable: true, get: function() {
        return manual_components_1.Button;
      } });
      Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function() {
        return manual_components_1.Checkbox;
      } });
      Object.defineProperty(exports, "DateField", { enumerable: true, get: function() {
        return manual_components_1.DateField;
      } });
      Object.defineProperty(exports, "Icon", { enumerable: true, get: function() {
        return manual_components_1.Icon;
      } });
      Object.defineProperty(exports, "Inline", { enumerable: true, get: function() {
        return manual_components_1.Inline;
      } });
      Object.defineProperty(exports, "Link", { enumerable: true, get: function() {
        return manual_components_1.Link;
      } });
      Object.defineProperty(exports, "Radio", { enumerable: true, get: function() {
        return manual_components_1.Radio;
      } });
      Object.defineProperty(exports, "Select", { enumerable: true, get: function() {
        return manual_components_1.Select;
      } });
      Object.defineProperty(exports, "Switch", { enumerable: true, get: function() {
        return manual_components_1.Switch;
      } });
      Object.defineProperty(exports, "TextArea", { enumerable: true, get: function() {
        return manual_components_1.TextArea;
      } });
      Object.defineProperty(exports, "TextField", { enumerable: true, get: function() {
        return manual_components_1.TextField;
      } });
      Object.defineProperty(exports, "Table", { enumerable: true, get: function() {
        return manual_components_1.Table;
      } });
      Object.defineProperty(exports, "TableBody", { enumerable: true, get: function() {
        return manual_components_1.TableBody;
      } });
      Object.defineProperty(exports, "TableCell", { enumerable: true, get: function() {
        return manual_components_1.TableCell;
      } });
      Object.defineProperty(exports, "TableFooter", { enumerable: true, get: function() {
        return manual_components_1.TableFooter;
      } });
      Object.defineProperty(exports, "TableHead", { enumerable: true, get: function() {
        return manual_components_1.TableHead;
      } });
      Object.defineProperty(exports, "TableHeaderCell", { enumerable: true, get: function() {
        return manual_components_1.TableHeaderCell;
      } });
      Object.defineProperty(exports, "TableRow", { enumerable: true, get: function() {
        return manual_components_1.TableRow;
      } });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/version.js
  var require_version = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UI_VERSION = exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "8.8.1";
      exports.UI_VERSION = "^32.7.0";
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    App: () => App_default,
    BUILD_TIME: () => BUILD_TIME,
    default: () => manifest_default
  });

  // src/views/App.tsx
  var import_ui = __toESM(require_ui2());
  var import_react = __require("react");
  var import_jsx_runtime = __require("react/jsx-runtime");
  var CustomerDetailView = ({ userContext, environment }) => {
    const [timesClicked, setTimesClicked] = (0, import_react.useState)(0);
    const incrementClick = () => {
      setTimesClicked(timesClicked + 1);
    };
    const clear = () => {
      setTimesClicked(0);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.ContextView, {
      title: "Your Temp2 App",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: {
            layout: "row",
            gap: "small",
            alignX: "center"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Button, {
              type: "primary",
              onPress: () => incrementClick(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Icon, {
                  name: "add"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Inline, {
                  css: { marginLeft: "small" },
                  children: "Click me!"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Button, {
              onPress: () => clear(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Icon, {
                  name: "trash"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Inline, {
                  css: { marginLeft: "small" },
                  children: "Clear"
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
          css: {
            padding: "large",
            alignX: "center",
            layout: "row"
          },
          children: `I've been clicked ${timesClicked} times!`
        })
      ]
    });
  };
  var App_default = CustomerDetailView;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2024-07-01 12:19:58.13031 +0530 IST m=+4.279911084";
  var manifest_default = {
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
        "purpose": "Grants access to the customer portal. If you\u2019re using the customer portal to manage subscriptions or payment methods, you must also request elements_write."
      },
      {
        "permission": "customer_portal_write",
        "purpose": "Grants access to the customer portal. If you\u2019re using the customer portal to manage subscriptions or payment methods, you must also request elements_write."
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
        "purpose": "Grants access to Invoices. This permission also implies the following permission: credit_note_read. If you\u2019re using the hosted invoice page to manage invoices or payment methods, you must also request elements_write."
      },
      {
        "permission": "invoice_write",
        "purpose": "Grants access to Invoices. This permission also implies the following permission: credit_note_read. If you\u2019re using the hosted invoice page to manage invoices or payment methods, you must also request elements_write."
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
        "purpose": "Grants access to PaymentIntents. If you\u2019re managing PaymentIntents with Stripe.js Elements, you must also request elements_write. This permission also implies the following permissions: product_read, sku_read"
      },
      {
        "permission": "payment_intent_write",
        "purpose": "Grants access to PaymentIntents. If you\u2019re managing PaymentIntents with Stripe.js Elements, you must also request elements_write. This permission also implies the following permissions: product_read, sku_read"
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
        "purpose": "Grants access to SetupIntents. If you\u2019re managing SetupIntents with Stripe.js Elements, you must also request elements_write. This permission also implies the following permission: mandate_read"
      },
      {
        "permission": "setup_intent_write",
        "purpose": "Grants access to SetupIntents. If you\u2019re managing SetupIntents with Stripe.js Elements, you must also request elements_write. This permission also implies the following permission: mandate_read"
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
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjQtMDctMDEgMTI6MTk6NTguMTMwMzEgKzA1MzAgSVNUIG09KzQuMjc5OTExMDg0JztcblxuZXhwb3J0IHsgXG4gIEFwcFx0XG4gfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImlkXCI6IFwiY29tLmV4YW1wbGUuZmlyc3Qtc3RyaXBlLWFwcDJcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgXCJuYW1lXCI6IFwiRmlyc3QgU3RyaXBlIEFwcFwiLFxuICBcImljb25cIjogXCJcIixcbiAgXCJwZXJtaXNzaW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiY29ubmVjdGVkX2FjY291bnRfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byByZWFkIEFjY291bnRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImNvbm5lY3RlZF9hY2NvdW50X3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIHJlYWQgQWNjb3VudHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiYWNjb3VudF9saW5rX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIEFjY291bnQgTGlua3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiYXBwbGVfcGF5X2RvbWFpbl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIEFwcGxlIFBheSBEb21haW4gcmVzb3VyY2VzLiBUbyB1c2UgQXBwbGUgUGF5LCB5b3UgbmVlZCB0byByZWdpc3RlciB5b3VyIHdlYiBkb21haW5zIHdpdGggQXBwbGUuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImFwcGxlX3BheV9kb21haW5fd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQXBwbGUgUGF5IERvbWFpbiByZXNvdXJjZXMuIFRvIHVzZSBBcHBsZSBQYXksIHlvdSBuZWVkIHRvIHJlZ2lzdGVyIHlvdXIgd2ViIGRvbWFpbnMgd2l0aCBBcHBsZS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiYXBwbGljYXRpb25fZmVlX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQXBwbGljYXRpb24gRmVlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJhcHBsaWNhdGlvbl9mZWVfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQXBwbGljYXRpb24gRmVlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJiYWxhbmNlX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQmFsYW5jZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJiYWxhbmNlX3RyYW5zYWN0aW9uX3NvdXJjZV9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIGV4cGFuZCB0aGUgc291cmNlIGF0dHJpYnV0ZSB3aGVuIHJldHJpZXZpbmcgQmFsYW5jZSBUcmFuc2FjdGlvbnMuIFRoaXMgcGVybWlzc2lvbiBhbHNvIGltcGxpZXMgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uczogYXBwbGljYXRpb25fZmVlX3JlYWQsIGJhbGFuY2VfcmVhZCwgdHJhbnNmZXJfcmVhZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJiaWxsaW5nX2Nsb2NrX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVGVzdCBjbG9ja3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiYmlsbGluZ19jbG9ja193cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBUZXN0IGNsb2Nrc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjaGFyZ2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBDaGFyZ2VzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImNoYXJnZV93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBDaGFyZ2VzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImNoZWNrb3V0X3Nlc3Npb25fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBTZXNzaW9ucy4gVGhpcyBwZXJtaXNzaW9uIGFsc28gaW1wbGllcyB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb25zOiBtYW5kYXRlX3JlYWQsIHBheW1lbnRfaW50ZW50X3JlYWQsIHBheW1lbnRfbGlua3NfcmVhZCwgcHJvZHVjdF9yZWFkLCBzZXR1cF9pbnRlbnRfcmVhZCwgc2t1X3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiY2hlY2tvdXRfc2Vzc2lvbl93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBTZXNzaW9ucy4gVGhpcyBwZXJtaXNzaW9uIGFsc28gaW1wbGllcyB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb25zOiBtYW5kYXRlX3JlYWQsIHBheW1lbnRfaW50ZW50X3JlYWQsIHBheW1lbnRfbGlua3NfcmVhZCwgcHJvZHVjdF9yZWFkLCBzZXR1cF9pbnRlbnRfcmVhZCwgc2t1X3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwidGVybWluYWxfY29uZmlndXJhdGlvbl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIENvbmZpZ3VyYXRpb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRlcm1pbmFsX2NvbmZpZ3VyYXRpb25fd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQ29uZmlndXJhdGlvbnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwidGVybWluYWxfY29ubmVjdGlvbl90b2tlbl93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBDb25uZWN0aW9uIFRva2Vuc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjb3Vwb25fcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBDb3Vwb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImNvdXBvbl93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBDb3Vwb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImNyZWRpdF9ub3RlX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQ3JlZGl0IE5vdGVzLiBUaGlzIHBlcm1pc3Npb24gYWxzbyBpbXBsaWVzIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbnM6IGludm9pY2VfcmVhZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjcmVkaXRfbm90ZV93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBDcmVkaXQgTm90ZXMuIFRoaXMgcGVybWlzc2lvbiBhbHNvIGltcGxpZXMgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uczogaW52b2ljZV9yZWFkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImN1c3RvbWVyX3BvcnRhbF9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIHRoZSBjdXN0b21lciBwb3J0YWwuIElmIHlvdVx1MjAxOXJlIHVzaW5nIHRoZSBjdXN0b21lciBwb3J0YWwgdG8gbWFuYWdlIHN1YnNjcmlwdGlvbnMgb3IgcGF5bWVudCBtZXRob2RzLCB5b3UgbXVzdCBhbHNvIHJlcXVlc3QgZWxlbWVudHNfd3JpdGUuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImN1c3RvbWVyX3BvcnRhbF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byB0aGUgY3VzdG9tZXIgcG9ydGFsLiBJZiB5b3VcdTIwMTlyZSB1c2luZyB0aGUgY3VzdG9tZXIgcG9ydGFsIHRvIG1hbmFnZSBzdWJzY3JpcHRpb25zIG9yIHBheW1lbnQgbWV0aG9kcywgeW91IG11c3QgYWxzbyByZXF1ZXN0IGVsZW1lbnRzX3dyaXRlLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIEN1c3RvbWVycy4gVGhpcyBwZXJtaXNzaW9uIGFsc28gaW1wbGllcyB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb246IGJpbGxpbmdfY2xvY2tfcmVhZC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiY3VzdG9tZXJfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQ3VzdG9tZXJzLiBUaGlzIHBlcm1pc3Npb24gYWxzbyBpbXBsaWVzIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbjogYmlsbGluZ19jbG9ja19yZWFkLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJkaXNwdXRlX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gRGlzcHV0ZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiZGlzcHV0ZV93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBEaXNwdXRlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJlZGl0X2xpbmtfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gTG9naW4gTGlua3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiZWxlbWVudHNfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gU3RyaXBlLmpzIEVsZW1lbnRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImV2ZW50X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gRXZlbnRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImZpbGVfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBGaWxlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJmaWxlX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIEZpbGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImludm9pY2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBJbnZvaWNlcy4gVGhpcyBwZXJtaXNzaW9uIGFsc28gaW1wbGllcyB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb246IGNyZWRpdF9ub3RlX3JlYWQuIElmIHlvdVx1MjAxOXJlIHVzaW5nIHRoZSBob3N0ZWQgaW52b2ljZSBwYWdlIHRvIG1hbmFnZSBpbnZvaWNlcyBvciBwYXltZW50IG1ldGhvZHMsIHlvdSBtdXN0IGFsc28gcmVxdWVzdCBlbGVtZW50c193cml0ZS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiaW52b2ljZV93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBJbnZvaWNlcy4gVGhpcyBwZXJtaXNzaW9uIGFsc28gaW1wbGllcyB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb246IGNyZWRpdF9ub3RlX3JlYWQuIElmIHlvdVx1MjAxOXJlIHVzaW5nIHRoZSBob3N0ZWQgaW52b2ljZSBwYWdlIHRvIG1hbmFnZSBpbnZvaWNlcyBvciBwYXltZW50IG1ldGhvZHMsIHlvdSBtdXN0IGFsc28gcmVxdWVzdCBlbGVtZW50c193cml0ZS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiaXNzdWluZ19hdXRob3JpemF0aW9uX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQXV0aG9yaXphdGlvbnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiaXNzdWluZ19hdXRob3JpemF0aW9uX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIEF1dGhvcml6YXRpb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImlzc3VpbmdfY2FyZF9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIENhcmRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImlzc3VpbmdfY2FyZF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBDYXJkc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJpc3N1aW5nX2NhcmRob2xkZXJfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBDYXJkaG9sZGVyc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJpc3N1aW5nX2NhcmRob2xkZXJfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gQ2FyZGhvbGRlcnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiaXNzdWluZ19kaXNwdXRlX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gSXNzdWluZyBEaXNwdXRlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJpc3N1aW5nX2Rpc3B1dGVfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gSXNzdWluZyBEaXNwdXRlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJpc3N1aW5nX3RyYW5zYWN0aW9uX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVHJhbnNhY3Rpb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcImlzc3VpbmdfdHJhbnNhY3Rpb25fd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVHJhbnNhY3Rpb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRlcm1pbmFsX2xvY2F0aW9uX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gTG9jYXRpb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRlcm1pbmFsX2xvY2F0aW9uX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIExvY2F0aW9uc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJtYW5kYXRlX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gTWFuZGF0ZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwibWFuZGF0ZV93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBNYW5kYXRlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJvcmRlcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIE9yZGVyc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJvcmRlcl93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBPcmRlcnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9pbnRlbnRfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBQYXltZW50SW50ZW50cy4gSWYgeW91XHUyMDE5cmUgbWFuYWdpbmcgUGF5bWVudEludGVudHMgd2l0aCBTdHJpcGUuanMgRWxlbWVudHMsIHlvdSBtdXN0IGFsc28gcmVxdWVzdCBlbGVtZW50c193cml0ZS4gVGhpcyBwZXJtaXNzaW9uIGFsc28gaW1wbGllcyB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb25zOiBwcm9kdWN0X3JlYWQsIHNrdV9yZWFkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInBheW1lbnRfaW50ZW50X3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFBheW1lbnRJbnRlbnRzLiBJZiB5b3VcdTIwMTlyZSBtYW5hZ2luZyBQYXltZW50SW50ZW50cyB3aXRoIFN0cmlwZS5qcyBFbGVtZW50cywgeW91IG11c3QgYWxzbyByZXF1ZXN0IGVsZW1lbnRzX3dyaXRlLiBUaGlzIHBlcm1pc3Npb24gYWxzbyBpbXBsaWVzIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbnM6IHByb2R1Y3RfcmVhZCwgc2t1X3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9saW5rc19yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFBheW1lbnQgTGlua3MuIFRoaXMgcGVybWlzc2lvbiBhbHNvIGltcGxpZXMgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uczogbWFuZGF0ZV9yZWFkLCBwcm9kdWN0X3JlYWQsIHNrdV9yZWFkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInBheW1lbnRfbGlua3Nfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUGF5bWVudCBMaW5rcy4gVGhpcyBwZXJtaXNzaW9uIGFsc28gaW1wbGllcyB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb25zOiBtYW5kYXRlX3JlYWQsIHByb2R1Y3RfcmVhZCwgc2t1X3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9tZXRob2RfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBQYXltZW50TWV0aG9kcy4gVGhpcyBwZXJtaXNzaW9uIGFsc28gaW1wbGllcyB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb246IHNvdXJjZV9yZWFkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInBheW1lbnRfbWV0aG9kX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFBheW1lbnRNZXRob2RzLiBUaGlzIHBlcm1pc3Npb24gYWxzbyBpbXBsaWVzIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbjogc291cmNlX3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5b3V0X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUGF5b3V0c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwYXlvdXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUGF5b3V0c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwbGFuX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUGxhbnMgYW5kIFByaWNlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwbGFuX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFBsYW5zIGFuZCBQcmljZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicHJvZHVjdF9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFByb2R1Y3RzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInByb2R1Y3Rfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUHJvZHVjdHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicHJvbW90aW9uX2NvZGVfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBQcm9tb3Rpb24gQ29kZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicHJvbW90aW9uX2NvZGVfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUHJvbW90aW9uIENvZGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInF1b3RlX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUXVvdGVzLiBUaGlzIHBlcm1pc3Npb24gYWxzbyBpbXBsaWVzIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbnM6IHNrdV9yZWFkLCBwcm9kdWN0X3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicXVvdGVfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUXVvdGVzLiBUaGlzIHBlcm1pc3Npb24gYWxzbyBpbXBsaWVzIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbnM6IHNrdV9yZWFkLCBwcm9kdWN0X3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwidGVybWluYWxfcmVhZGVyX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUmVhZGVyc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJ0ZXJtaW5hbF9yZWFkZXJfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gUmVhZGVyc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJyZXBvcnRfcnVuc19hbmRfcmVwb3J0X3R5cGVzX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyByZWFkIGFjY2VzcyB0byBSZXBvcnQgVHlwZXMgYW5kIGFsbG93cyBjcmVhdGlvbiBvZiBSZXBvcnQgUnVuc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJyZXZpZXdfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBSZXZpZXdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInJldmlld193cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBSZXZpZXdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInNlY3JldF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBTZWNyZXRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInNldHVwX2ludGVudF9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFNldHVwSW50ZW50cy4gSWYgeW91XHUyMDE5cmUgbWFuYWdpbmcgU2V0dXBJbnRlbnRzIHdpdGggU3RyaXBlLmpzIEVsZW1lbnRzLCB5b3UgbXVzdCBhbHNvIHJlcXVlc3QgZWxlbWVudHNfd3JpdGUuIFRoaXMgcGVybWlzc2lvbiBhbHNvIGltcGxpZXMgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uOiBtYW5kYXRlX3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwic2V0dXBfaW50ZW50X3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFNldHVwSW50ZW50cy4gSWYgeW91XHUyMDE5cmUgbWFuYWdpbmcgU2V0dXBJbnRlbnRzIHdpdGggU3RyaXBlLmpzIEVsZW1lbnRzLCB5b3UgbXVzdCBhbHNvIHJlcXVlc3QgZWxlbWVudHNfd3JpdGUuIFRoaXMgcGVybWlzc2lvbiBhbHNvIGltcGxpZXMgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uOiBtYW5kYXRlX3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwic2hpcHBpbmdfcmF0ZV9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFNoaXBwaW5nIFJhdGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInNoaXBwaW5nX3JhdGVfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gU2hpcHBpbmcgUmF0ZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwic2t1X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gU0tVc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJza3Vfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gU0tVc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzb3VyY2VfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBTb3VyY2VzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInNvdXJjZV93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBTb3VyY2VzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInN1YnNjcmlwdGlvbl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFN1YnNjcmlwdGlvbnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwic3Vic2NyaXB0aW9uX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFN1YnNjcmlwdGlvbnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwidGF4X3JhdGVfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBUYXggUmF0ZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwidGF4X3JhdGVfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVGF4IFJhdGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRheF9zZXR0aW5nc19yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFRheCBTZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJ0YXhfc2V0dGluZ3Nfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVGF4IFNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRheF9jYWxjdWxhdGlvbnNfYW5kX3RyYW5zYWN0aW9uc19yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFRheCBDYWxjdWxhdGlvbnMgYW5kIFRyYW5zYWN0aW9uc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJ0YXhfY2FsY3VsYXRpb25zX2FuZF90cmFuc2FjdGlvbnNfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVGF4IENhbGN1bGF0aW9ucyBhbmQgVHJhbnNhY3Rpb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRva2VuX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVG9rZW5zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRva2VuX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFRva2Vuc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJ0b3BfdXBfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBUb3AtdXBzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRvcF91cF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiR3JhbnRzIGFjY2VzcyB0byBUb3AtdXBzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInRyYW5zZmVyX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVHJhbnNmZXJzLiBUaGlzIHBlcm1pc3Npb24gYWxzbyBpbXBsaWVzIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbjogcGF5b3V0X3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwidHJhbnNmZXJfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVHJhbnNmZXJzLiBUaGlzIHBlcm1pc3Npb24gYWxzbyBpbXBsaWVzIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbjogcGF5b3V0X3JlYWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwidXNhZ2VfcmVjb3JkX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVXNhZ2UgUmVjb3Jkc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJ1c2FnZV9yZWNvcmRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gVXNhZ2UgUmVjb3Jkc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJ1c2VyX2VtYWlsX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gdXNlciBlbWFpbHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwid2ViaG9va19yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJHcmFudHMgYWNjZXNzIHRvIFdlYmhvb2sgRW5kcG9pbnRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcIndlYmhvb2tfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkdyYW50cyBhY2Nlc3MgdG8gV2ViaG9vayBFbmRwb2ludHMuIFRvIHVzZSB3ZWJob29rX3dyaXRlIGluIHlvdXIgU3RyaXBlIEFwcCwgY29udGFjdCBzdHJpcGUtYXBwc0BzdHJpcGUuY29tLlwiXG4gICAgfVxuICBdLFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmRyYXdlci5kZWZhdWx0XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQXBwXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBudWxsLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcImFsbG93ZWRfcmVkaXJlY3RfdXJpc1wiOiBbXG4gICAgXCJodHRwczovL3dlYmhvb2suc2l0ZS9iOTNhOTA5ZS1jNDI5LTQwNGYtYTRjNS03OGUwNDI3YmJkMjdcIlxuICBdLFxuICBcInN0cmlwZV9hcGlfYWNjZXNzX3R5cGVcIjogXCJvYXV0aFwiLFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHVibGljXCJcbn07XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRleHRWaWV3LFxuICBJY29uLFxuICBJbmxpbmUsXG59IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcblxuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogVGhpcyBpcyBhIHZpZXcgdGhhdCBpcyByZW5kZXJlZCBpbiB0aGUgU3RyaXBlIGRhc2hib2FyZCdzIGN1c3RvbWVyIGRldGFpbCBwYWdlLlxuICogSW4gc3RyaXBlLWFwcC5qc29uLCB0aGlzIHZpZXcgaXMgY29uZmlndXJlZCB3aXRoIHN0cmlwZS5kYXNoYm9hcmQuY3VzdG9tZXIuZGV0YWlsIHZpZXdwb3J0LlxuICogWW91IGNhbiBhZGQgYSBuZXcgdmlldyBieSBydW5uaW5nIFwic3RyaXBlIGFwcHMgYWRkIHZpZXdcIiBmcm9tIHRoZSBDTEkuXG4gKi9cbmNvbnN0IEN1c3RvbWVyRGV0YWlsVmlldyA9ICh7IHVzZXJDb250ZXh0LCBlbnZpcm9ubWVudCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcblxuICBjb25zdCBbdGltZXNDbGlja2VkLCBzZXRUaW1lc0NsaWNrZWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBpbmNyZW1lbnRDbGljayA9ICgpID0+IHtcbiAgICBzZXRUaW1lc0NsaWNrZWQodGltZXNDbGlja2VkICsgMSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgc2V0VGltZXNDbGlja2VkKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3IHRpdGxlPVwiWW91ciBUZW1wMiBBcHBcIj5cbiAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgIGxheW91dDogJ3JvdycsXG4gICAgICAgIGdhcDogJ3NtYWxsJyxcbiAgICAgICAgYWxpZ25YOiAnY2VudGVyJyxcbiAgICAgIH19PlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17KCkgPT4gaW5jcmVtZW50Q2xpY2soKX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cImFkZFwiLz5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBtYXJnaW5MZWZ0OiAnc21hbGwnIH19PkNsaWNrIG1lITwvSW5saW5lPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvblByZXNzPXsoKSA9PiBjbGVhcigpfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwidHJhc2hcIiAvPlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IG1hcmdpbkxlZnQ6ICdzbWFsbCcgfX0+Q2xlYXI8L0lubGluZT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgIHBhZGRpbmc6ICdsYXJnZScsXG4gICAgICAgIGFsaWduWDogJ2NlbnRlcicsXG4gICAgICAgIGxheW91dDogJ3JvdydcbiAgICAgIH19PlxuICAgICAgICB7YEkndmUgYmVlbiBjbGlja2VkICR7dGltZXNDbGlja2VkfSB0aW1lcyFgfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250ZXh0Vmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyRGV0YWlsVmlldzsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBQSxVQUFBLFVBQUE7QUFFYSxjQUFBLGFBQVksR0FBQSxRQUFBLDRCQUd2QixXQUFXO0FBR0EsY0FBQSxpQkFBZ0IsR0FBQSxRQUFBLDRCQUczQixpQkFBaUI7UUFDakIsZUFBZSxDQUFDLFNBQVMsWUFBWSxTQUFTLFNBQVM7T0FDeEQ7QUFHWSxjQUFBLFNBQVEsR0FBQSxRQUFBLDRCQUFnRCxPQUFPO0FBRy9ELGNBQUEsVUFBUyxHQUFBLFFBQUEsNEJBQ3BCLFVBQ0E7UUFDRSxlQUFlLENBQUMsZUFBZSxTQUFTLFNBQVM7T0FDbEQ7QUFJVSxjQUFBLGNBQWEsR0FBQSxRQUFBLDRCQUd4QixZQUFZO0FBR0QsY0FBQSxvQkFBbUIsR0FBQSxRQUFBLDRCQUc5QixrQkFBa0I7QUFHUCxjQUFBLGtCQUFpQixHQUFBLFFBQUEsNEJBRzVCLGdCQUFnQjtBQUdMLGNBQUEsaUJBQWdCLEdBQUEsUUFBQSw0QkFHM0IsZUFBZTtBQUdKLGNBQUEsb0JBQW1CLEdBQUEsUUFBQSw0QkFHOUIsa0JBQWtCO0FBR1AsY0FBQSxrQkFBaUIsR0FBQSxRQUFBLDRCQUc1QixnQkFBZ0I7QUFHTCxjQUFBLHdCQUF1QixHQUFBLFFBQUEsNEJBR2xDLHNCQUFzQjtBQUdYLGNBQUEsVUFBUyxHQUFBLFFBQUEsNEJBQ3BCLFFBQVE7QUFJRyxjQUFBLGVBQWMsR0FBQSxRQUFBLDRCQUd6QixlQUFlO1FBQ2YsZUFBZSxDQUFDLGFBQWE7T0FDOUI7QUFHWSxjQUFBLFlBQVcsR0FBQSxRQUFBLDRCQUN0QixZQUNBO1FBQ0UsZUFBZSxDQUFDLE9BQU87T0FDeEI7QUFJVSxjQUFBLFFBQU8sR0FB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QUEsQ0FBQTtBQUNKLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBS1IsYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBTyxFQUFBLENBQUE7QUFHUCxhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFPLEVBQUEsQ0FBQTtBQUVQLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBUVQsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFJSixhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFPLEVBQUEsQ0FBQTtBQUVULG1CQUFBLHVDQUFBLE9BQUE7QUFDQSxVQUFBLHNCQUFBO0FBQ0UsYUFBQSxlQUFBLFNBQUEsT0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUcsRUFBQSxDQUFBO0FBQ0gsYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsU0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUssRUFBQSxDQUFBO0FBQ0wsYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsU0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9C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Q0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLE1BQ0EsMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFFBQ2YsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSx5QkFBeUI7QUFBQSxNQUN2QjtBQUFBLElBQ0Y7QUFBQSxJQUNBLDBCQUEwQjtBQUFBLElBQzFCLHFCQUFxQjtBQUFBLEVBQ3ZCOyIsCiAgIm5hbWVzIjogW10KfQo=
