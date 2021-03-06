import * as React from 'react';
import { SxProps } from '@material-ui/system';
import { TypographyProps } from '../Typography';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { Theme } from '..';

export interface CardHeaderTypeMap<
  Props = {},
  DefaultComponent extends React.ElementType = 'div',
  TitleTypographyComponent extends React.ElementType = 'span',
  SubheaderTypographyComponent extends React.ElementType = 'span'
> {
  props: Props & {
    /**
     * The action to display in the card header.
     */
    action?: React.ReactNode;
    /**
     * The Avatar element to display.
     */
    avatar?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
      /** Styles applied to the avatar element. */
      avatar?: string;
      /** Styles applied to the action element. */
      action?: string;
      /** Styles applied to the content wrapper element. */
      content?: string;
      /** Styles applied to the title Typography element. */
      title?: string;
      /** Styles applied to the subheader Typography element. */
      subheader?: string;
    };
    /**
     * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
     * This can be useful to render an alternative Typography variant by wrapping
     * the `title` text, and optional `subheader` text
     * with the Typography component.
     * @default false
     */
    disableTypography?: boolean;
    /**
     * The content of the component.
     */
    subheader?: React.ReactNode;
    /**
     * These props will be forwarded to the subheader
     * (as long as disableTypography is not `true`).
     */
    subheaderTypographyProps?: TypographyProps<
      SubheaderTypographyComponent,
      { component?: SubheaderTypographyComponent }
    >;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The content of the component.
     */
    title?: React.ReactNode;
    /**
     * These props will be forwarded to the title
     * (as long as disableTypography is not `true`).
     */
    titleTypographyProps?: TypographyProps<
      TitleTypographyComponent,
      { component?: TitleTypographyComponent }
    >;
  };
  defaultComponent: DefaultComponent;
}
/**
 *
 * Demos:
 *
 * - [Cards](https://material-ui.com/components/cards/)
 *
 * API:
 *
 * - [CardHeader API](https://material-ui.com/api/card-header/)
 */
declare const CardHeader: OverridableCardHeader;

export interface OverridableCardHeader extends OverridableComponent<CardHeaderTypeMap> {
  <
    DefaultComponent extends React.ElementType = CardHeaderTypeMap['defaultComponent'],
    Props = {},
    TitleTypographyComponent extends React.ElementType = 'span',
    SubheaderTypographyComponent extends React.ElementType = 'span'
  >(
    props: CardHeaderPropsWithComponent<
      DefaultComponent,
      Props,
      TitleTypographyComponent,
      SubheaderTypographyComponent
    >
  ): JSX.Element;
}

export type CardHeaderClassKey = keyof NonNullable<CardHeaderTypeMap['props']['classes']>;

export type CardHeaderProps<
  DefaultComponent extends React.ElementType = CardHeaderTypeMap['defaultComponent'],
  Props = {},
  TitleTypographyComponent extends React.ElementType = 'span',
  SubheaderTypographyComponent extends React.ElementType = 'span'
> = OverrideProps<
  CardHeaderTypeMap<
    Props,
    DefaultComponent,
    TitleTypographyComponent,
    SubheaderTypographyComponent
  >,
  DefaultComponent
>;

export type CardHeaderPropsWithComponent<
  DefaultComponent extends React.ElementType = CardHeaderTypeMap['defaultComponent'],
  Props = {},
  TitleTypographyComponent extends React.ElementType = 'span',
  SubheaderTypographyComponent extends React.ElementType = 'span'
> = {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: DefaultComponent;
} & CardHeaderProps<
  DefaultComponent,
  Props,
  TitleTypographyComponent,
  SubheaderTypographyComponent
>;

export default CardHeader;
