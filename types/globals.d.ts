declare module '*.md' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: SVGSVGElement
  export default content
}

declare global {
  type TProductIntent = 'bill-pay' | 'working-capital' | 'purchasing'

  type Maybe<T> = T | null | undefined

  type HTMLHeadingElementTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  type ClassName = HTMLProps<HTMLElement>['className']

  type Nullable<T> = { [K in keyof T]: T[K] | null }

  /**
   * https://legacydocs.hubspot.com/docs/methods/forms/advanced_form_options
   */
  interface IHubSpotFormConfiguration {
    /** The form's ID.*/
    formId: string
    /* The portal ID of the HubSpot account where you created the form.*/
    portalId: number | string
    /** The region of the portal where the form was created. */
    region?: 'na1' | 'eu1'
    /** A CSS selector string specifying an existing element where the form will be embedded. */
    target?: string
    /** URL to redirect to upon successful form completion. */
    redirectUrl?: string
    /** Inline message to display upon successful form completion.*/
    inlineMessage?: string
    /** ID of the CMS page where the form is embedded. */
    pageId?: number | string
    /** CSS string for validation error messages and form styling. */
    cssRequired?: string
    /** CSS class to apply to the form. */
    cssClass?: string
    /** CSS string to override the built-in CSS theme. */
    css?: string
    /** Text to override the submit button text. */
    submitText?: string
    /** CSS class to apply to the submit button. */
    submitButtonClass?: string
    /** CSS class to apply to inputs with validation errors. */
    errorClass?: string
    /** CSS class to apply to error messages. */
    errorMessageClass?: string
    /** Locale for customizing language for form errors, date picker, labels, and links. */
    locale?: string
    /** Object containing additional translation languages or field label overrides. */
    translations?: object
    /** Array of domains to block in email input fields. */
    manuallyBlockedEmailDomain?: string[]
    /** ID required when embedding the same form multiple times on the same page. */
    formInstanceId?: string
    /** Salesforce campaign key to associate form submissions with. */
    sfdcCampaignId?: string
    /** GoToWebinar campaign key to enroll form submissions in a webinar. */
    goToWebinarWebinarKey?: string
    /** Callback that executes before form initialization. */
    onBeforeFormInit?: (ctx: unknown) => void
    /** Callback that executes just before form rendering. */
    onFormReady?: ($form: HTMLFormElement) => void
    /** Callback that executes after form validation, before submission. */
    onFormSubmit?: ($form: HTMLFormElement) => void
    /** Callback that executes after form validation, before submission (preferred over onFormSubmit). */
    onBeforeFormSubmit?: ($form: HTMLFormElement, submissionValues: unknown[]) => void
    /** Callback that executes after form submission. */
    onFormSubmitted?: (
      $form: HTMLFormElement,
      data: { redirectUrl?: string; submissionValues: Record<string, unknown> },
    ) => void
  }

  interface Window {
    hbspt?: {
      forms: {
        create(config: IHubSpotFormConfiguration): Maybe<{ id: string; instanceId: string }>
      }
    }
    Calendly?: {
      initHubspotForm(config: {
        id: string
        url: string
        options?: {
          primary_color?: string // without the `#` symbol
          text_color?: string // without the `#` symbol
          hide_gdpr_banner?: boolean
        }
      }): void
    }
  }
}

export {}
