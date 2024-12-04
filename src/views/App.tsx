import {
  Box,
  Button,
  ContextView,
  Icon,
  Inline,
} from "@stripe/ui-extension-sdk/ui";

import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import { useState } from "react";

/**
 * This is a view that is rendered in the Stripe dashboard's customer detail page.
 * In stripe-app.json, this view is configured with stripe.dashboard.customer.detail viewport.
 * You can add a new view by running "stripe apps add view" from the CLI.
 */
const CustomerDetailView = ({ userContext, environment }: ExtensionContextValue) => {

  const [timesClicked, setTimesClicked] = useState<number>(0);

  const incrementClick = () => {
    setTimesClicked(timesClicked + 1);
  };

  const clear = () => {
    setTimesClicked(0);
  };

  return (
    <ContextView title="Your Temp2 App">
      <Box css={{
        layout: 'row',
        gap: 'small',
        alignX: 'center',
      }}>
        <Button type="primary" onPress={() => incrementClick()}>
          <Icon name="add"/>
          <Inline css={{ marginLeft: 'small' }}>Click me!</Inline>
        </Button>
        <Button onPress={() => clear()}>
          <Icon name="trash" />
          <Inline css={{ marginLeft: 'small' }}>Clear</Inline>
        </Button>
      </Box>
      <Box css={{
        padding: 'large',
        alignX: 'center',
        layout: 'row'
      }}>
        {`I've been clicked ${timesClicked} times!`}
      </Box>
    </ContextView>
  );
};

export default CustomerDetailView;