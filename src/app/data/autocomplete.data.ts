import { MaterialComponent } from '../model/material-component.model';

export const AutocompleteData: MaterialComponent[] = [
  {
    directive: {
      name: 'MatAutocomplete',
      selector: 'mat-autocomplete',
      exported: 'matAutocomplete'
    },
    properties: [
      {
        name: '@Input() autoActiveFirstOption: boolean',
        detail:
          'Whether the first option should be highlighted when the autocomplete panel is opened. Can be configured globally through the MAT_AUTOCOMPLETE_DEFAULT_OPTIONS token.'
      },
      {
        name: "@Input('class') classList: string",
        detail:
          'Takes classes set on the host mat-autocomplete element and applies them to the panel inside the overlay container to allow for easy styling.'
      },
      {
        name: '@Input() disableRipple: boolean',
        detail: 'Whether ripples are disabled.'
      },
      {
        name: '@Input() displayWith: ((value: any) => string) | null',
        detail: "Function that maps an option's control value to its display value in the trigger."
      },
      {
        name: '@Input() panelWidth: string | number',
        detail:
          'Specify the width of the autocomplete panel. Can be any CSS sizing value, otherwise it will match the width of its host.'
      },
      {
        name: '@Output() closed: EventEmitter<void>',
        detail: 'Event that is emitted when the autocomplete panel is closed.'
      },
      {
        name: '@Output() opened: EventEmitter<void>',
        detail: 'Event that is emitted when the autocomplete panel is opened.'
      },
      {
        name: '@Output() optionSelected: EventEmitter<MatAutocompleteSelectedEvent>',
        detail: 'Event that is emitted whenever an option from the list is selected.'
      },
      {
        name: 'id: string',
        detail: 'Unique ID to be used by autocomplete trigger\'s "aria-owns" property.'
      },
      {
        name: 'isOpen: boolean',
        detail: 'Whether the autocomplete panel is open.'
      },
      {
        name: 'panel: ElementRef',
        detail: 'Element for the panel containing the autocomplete options.'
      },
      {
        name: 'showPanel: boolean',
        detail: 'Whether the autocomplete panel should be visible, depending on option length.'
      }
    ]
  },
  {
    directive: {
      name: 'MatAutocompleteTrigger',
      selector: 'input[matAutocomplete] textarea[matAutocomplete]',
      exported: 'matAutocompleteTrigger'
    },
    properties: [
      {
        name: "@Input('matAutocomplete') autocomplete: MatAutocomplete",
        detail: 'The autocomplete panel to be attached to this trigger.'
      },
      {
        name: "@Input('matAutocompleteDisabled') autocompleteDisabled: boolean",
        detail:
          "Whether the autocomplete is disabled. When disabled, the element will act as a regular input and the user won't be able to open the panel."
      },
      {
        name: "@Input('matAutocompleteConnectedTo') connectedTo: MatAutocompleteOrigin",
        detail:
          'Reference relative to which to position the autocomplete panel. Defaults to the autocomplete trigger element.'
      },
      {
        name: 'activeOption: MatOption | null',
        detail: 'The currently active option, coerced to MatOption type.'
      },
      {
        name: 'optionSelections: Observable<MatOptionSelectionChange>',
        detail: 'Stream of autocomplete option selections.'
      },
      {
        name: 'panelClosingActions: Observable<MatOptionSelectionChange | null>',
        detail:
          'A stream of actions that should close the autocomplete panel, including when an option is selected, on blur, and when TAB is pressed.'
      },
      {
        name: 'panelOpen: boolean',
        detail: 'Whether or not the autocomplete panel is open.'
      }
    ],
    methods: [
      {
        name: 'closePanel',
        detail: 'Closes the autocomplete suggestion panel.'
      },
      {
        name: 'openPanel',
        detail: 'Opens the autocomplete suggestion panel.'
      }
    ]
  },
  {
    class: {
      name: 'MatAutocompleteSelectedEvent',
      detail: 'Event object that is emitted when an autocomplete option is selected.',
      properties: [
        {
          name: 'option: MatOption',
          detail: 'Option that was selected'
        },
        {
          name: 'source: MatAutocomplete',
          detail: 'Reference to the autocomplete panel that emitted the event.'
        }
      ]
    }
  },
  {
    interface: {
      name: 'MatAutocompleteDefaultOptions',
      detail: 'Default mat-autocomplete options that can be overridden.',
      properties: [
        {
          name: 'autoActiveFirstOption: boolean',
          detail: 'Whether the first option should be highlighted when an autocomplete panel is opened.'
        }
      ]
    }
  }
];
