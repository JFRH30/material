import { AutocompleteData } from './autocomplete.data';
import { CheckboxData } from './checkbox.data';
import { DatepickerData } from './datepicker.data';
import { FormFieldData } from './form-field.data';
import { InputData } from './input.data';
import { RadioButtonData } from './radio-button.data';
import { SelectData } from './select.data';
import { SliderData } from './slider.data';
import { SildeToggleData } from './slide-toggle.data';
import { MenuData } from './menu.data';
import { SidenavData } from './sidenav.data';
import { ToolbarData } from './toolbar.data';
import { CardData } from './card.data';
import { DividerData } from './divider.data';
import { ExpansionData } from './expansion.data';
import { GridListData } from './grid-list.data';
import { ListData } from './list.data';
import { StepperData } from './stepper.data';
import { TabsData } from './tabs.data';
import { TreeData } from './tree.data';
import { ButtonData } from './button.data';
import { ButtonToggleData } from './button-toggle.data';
import { BadgeData } from './badge.data';
import { ChipsData } from './chips.data';
import { IconData } from './icon.data';
import { ProgressBarData } from './progress-bar.data';
import { ProgressSpinnerData } from './progress-spinner.data';
import { BottomSheetData } from './bottom-sheet.data';
import { DialogData } from './dialog.data';
import { SnackbarData } from './snackbar.data';
import { TooltipData } from './tooltip.data';
import { PaginatorData } from './paginator.data';
import { SortHeaderData } from './sort-header.data';
import { TableData } from './table.data';
import { MaterialRoutes } from '../model/material-routes.model';

export const routes = [
  {
    path: 'forms',
    name: 'Forms',
    subRoutes: [
      { path: 'autocomplete', data: AutocompleteData, name: 'Autocomplete' },
      { path: 'checkbox', data: CheckboxData, name: 'Checkbox' },
      { path: 'datepicker', data: DatepickerData, name: 'Datepicker' },
      { path: 'form-field', data: FormFieldData, name: 'Form Field' },
      { path: 'input', data: InputData, name: 'Input' },
      { path: 'radio-button', data: RadioButtonData, name: 'Radio Button' },
      { path: 'select', data: SelectData, name: 'Select' },
      { path: 'slider', data: SliderData, name: 'Slider' },
      { path: 'slide-toggle', data: SildeToggleData, name: 'Slide Toggle' }
    ]
  },
  {
    path: 'navigation',
    name: 'Navigation',
    subRoutes: [
      { path: 'menu', data: MenuData, name: 'Menu' },
      { path: 'sidenav', data: SidenavData, name: 'Sidenav' },
      { path: 'toolbar', data: ToolbarData, name: 'Toolbar' }
    ]
  },
  {
    path: 'layout',
    name: 'Layout',
    subRoutes: [
      { path: 'card', data: CardData, name: 'Card' },
      { path: 'divider', data: DividerData, name: 'Divider' },
      { path: 'expansion', data: ExpansionData, name: 'Expansion' },
      { path: 'grid-list', data: GridListData, name: 'Grid List' },
      { path: 'list', data: ListData, name: 'List' },
      { path: 'stepper', data: StepperData, name: 'Stepper' },
      { path: 'tabs', data: TabsData, name: 'Tabs' },
      { path: 'tree', data: TreeData, name: 'Tree' }
    ]
  },
  {
    path: 'buttons',
    name: 'Buttons',
    subRoutes: [
      { path: 'button', data: ButtonData, name: 'Button' },
      { path: 'button-toggle', data: ButtonToggleData, name: 'Button Toggle' }
    ]
  },
  {
    path: 'indicator',
    name: 'Indicator',
    subRoutes: [
      { path: 'badge', data: BadgeData, name: 'Badge' },
      { path: 'chips', data: ChipsData, name: 'Chips' },
      { path: 'icon', data: IconData, name: 'Icon' },
      { path: 'progress-bar', data: ProgressBarData, name: 'Progress Bar' },
      { path: 'progress-spinner', data: ProgressSpinnerData, name: 'Progress Spinner' }
    ]
  },
  {
    path: 'popups',
    name: 'Popups',
    subRoutes: [
      { path: 'bottom-sheet', data: BottomSheetData, name: 'Bottom Sheet' },
      { path: 'dialog', data: DialogData, name: 'Dialog' },
      { path: 'snackbar', data: SnackbarData, name: 'Snackbar' },
      { path: 'tooltip', data: TooltipData, name: 'Tooltip' }
    ]
  },
  {
    path: 'data-table',
    name: 'Data Table',
    subRoutes: [
      { path: 'paginator', data: PaginatorData, name: 'Paginator' },
      { path: 'sort-header', data: SortHeaderData, name: 'Sort Header' },
      { path: 'table', data: TableData, name: 'Table' }
    ]
  }
];
