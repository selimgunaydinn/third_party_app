import { ApiProperty } from '@nestjs/swagger';

export enum EventName {
  PAGE_VIEW = 'page_view',
  IDENTIFY = 'identify',
  ELEMENT_CLICK = 'element_click',
  ADD_TO_CART = 'add_to_cart',
  CHECKOUT_STARTED = 'checkout_started',
  REMOVE_FROM_CART = 'remove_from_cart',
  PRODUCT_VIEWED = 'product_viewed',
  FORM_SUBMISSION = 'form_submission',
}

// Page View Event Data
export class PageViewEventData {
  @ApiProperty()
  title: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  path: string;

  @ApiProperty()
  referrer: string;
}

// Element Click Event Data
export class ElementClickEventData {
  @ApiProperty()
  element: string;

  @ApiProperty()
  id?: string;

  @ApiProperty()
  class?: string;

  @ApiProperty()
  text?: string;

  @ApiProperty()
  href?: string;

  @ApiProperty()
  path: string;
}

// Product Event Data
export class ProductEventData {
  @ApiProperty()
  productId: string;

  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  price?: number;

  @ApiProperty({ required: false })
  quantity?: number;

  @ApiProperty({ required: false })
  category?: string;

  @ApiProperty({ required: false })
  variant?: string;
}

// Checkout Event Data
export class CheckoutEventData {
  @ApiProperty()
  checkoutId: string;

  @ApiProperty({ required: false })
  total?: number;

  @ApiProperty({ required: false })
  currency?: string;

  @ApiProperty({ type: [ProductEventData], required: false })
  products?: ProductEventData[];
}

// Form Submission Event Data
export class FormSubmissionEventData {
  @ApiProperty()
  formId: string;

  @ApiProperty()
  formName: string;

  @ApiProperty()
  formAction: string;

  @ApiProperty()
  formMethod: string;

  @ApiProperty({ type: Object })
  data: Record<string, any>;
}

// Event Data Type Union
export type EventData =
  | PageViewEventData
  | Record<string, any> // identify event data (traits)
  | ElementClickEventData
  | ProductEventData
  | CheckoutEventData
  | FormSubmissionEventData; 