import flowRight from 'lodash/flowRight';

import withUom from './withUom';
import withBatchPrice from './withBatchPrice';
import withBarcodeUom from './withBarcodeUom';
import withCustomerWiseItemPrice from './withCustomerWiseItemPrice';
import withStockValidator from './withStockValidator';
import withPaymentValidator from './withPaymentValidator';
import withMorePaymentActions from './withMorePaymentActions';
import withBatchField from './withBatchField';
import withIdx from './withIdx';
import withStockQty from './withStockQty';
import withGetChildItemByIdx from './withGetChildItemByIdx';
import withExtendedBatchSelector from './withExtendedBatchSelector';
import withAsyncAddToCart from './withAsyncAddToCart';
import withCustomItemCart from './withCustomItemCart';
import withKeyboardShortcuts from './withKeyboardShortcuts';
import withDiscountValidator from './withDiscountValidator';
import withSalesEmployee from './withSalesEmployee';
import withMultiCurrency from './withMultiCurrency';
import withModifiedPaymentDialogFields from './withModifiedPaymentDialogFields';

// the order of the hocs is important. `withIdx` > `withUom` should always run before
// all other hocs
export const extend_pos = flowRight([
  withModifiedPaymentDialogFields,
  withMultiCurrency,
  withSalesEmployee,
  withKeyboardShortcuts,
  withMorePaymentActions,
  withGetChildItemByIdx,
  withBatchPrice,
  withBarcodeUom,
  withCustomerWiseItemPrice,
  withPaymentValidator,
  withDiscountValidator,
  withStockValidator,
  withStockQty,
  withBatchField,
  withAsyncAddToCart,
  withExtendedBatchSelector,
  withUom,
  withIdx,
  withCustomItemCart,
]);
