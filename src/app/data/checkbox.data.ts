import { MaterialComponent } from '../model/material-component.model';

export const CheckboxData: MaterialComponent[] = [
  {
    directive: {
      name: 'MatCheckbox',
      selector: 'mat-checkbox',
      exported: 'matCheckbox'
    },
    properties: [
      {
        name: "@Input('aria-label') ariaLabel: string",
        detail:
          'Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will take precedence so this may be omitted.'
      },
      {
        name: "@Input('aria-labelledby') ariaLabelledby: string | null",
        detail: 'Users can specify the aria-labelledby attribute which will be forwarded to the input element'
      },
      {
        name: '@Input() checked: boolean',
        detail: 'Whether the checkbox is checked.'
      },
      {
        name: '@Input() color: ThemePalette',
        detail: 'Theme color palette for the component.'
      },
      {
        name: '@Input() disableRipple: boolean',
        detail: 'Whether ripples are disabled.'
      },
      {
        name: '@Input() disabled: any',
        detail:
          'Whether the checkbox is disabled. This fully overrides the implementation provided by mixinDisabled, but the mixin is still required because mixinTabIndex requires it.'
      },
      {
        name: '@Input() id: string',
        detail: 'A unique id for the checkbox input. If none is supplied, it will be auto-generated.'
      },
      {
        name: '@Input() indeterminate: boolean',
        detail:
          "Whether the checkbox is indeterminate. This is also known as 'mixed' mode and can be used to represent a checkbox with three states, e.g. a checkbox that represents a nested list of checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately set to false."
      },
      {
        name: "@Input() labelPosition: 'before' | 'after'",
        detail: "Whether the label should appear after or before the checkbox. Defaults to 'after'"
      },
      {
        name: '@Input() name: string | null',
        detail: 'Name value will be applied to the input element if present'
      },
      {
        name: '@Input() required: boolean',
        detail: 'Whether the checkbox is required.'
      },
      {
        name: '@Input() value: string',
        detail: 'The value attribute of the native input element'
      },
      {
        name: '@Output() change: EventEmitter<MatCheckboxChange>',
        detail: "Event emitted when the checkbox's checked value changes."
      },
      {
        name: '@Output() indeterminateChange: EventEmitter<boolean>',
        detail: "Event emitted when the checkbox's indeterminate value changes."
      },
      {
        name: 'inputId: string',
        detail: 'Returns the unique id for the visual hidden input.'
      },
      {
        name: 'ripple: MatRipple',
        detail: 'Reference to the ripple instance of the checkbox.'
      }
    ],
    methods: [
      {
        name: 'focus',
        detail: 'Focuses the checkbox.'
      },
      {
        name: 'toggle',
        detail: 'Toggles the checked state of the checkbox.'
      }
    ]
  }
];
