// 用于标签、图表等场景的色盘，100个颜色
exports.tagColors = {
    // 靛蓝 Blue
    '--color-indigo-1': '#f2f8ff',
    '--color-indigo-2': '#d4e9ff',
    '--color-indigo-3': '#a4d3ff',
    '--color-indigo-4': '#74beff',
    '--color-indigo-5': '#42a7fb',
    '--color-indigo-6': '#108cee',
    '--color-indigo-7': '#0576c7',
    '--color-indigo-8': '#0060a1',
    '--color-indigo-9': '#004b7b',
    '--color-indigo-10': '#003554',
    // 绛紫 Purple
    '--color-purple-1': '#f2f2ff',
    '--color-purple-2': '#e1e2fa',
    '--color-purple-3': '#b9bced',
    '--color-purple-4': '#9499e0',
    '--color-purple-5': '#727bd4',
    '--color-purple-6': '#545fc8',
    '--color-purple-7': '#3c47a1',
    '--color-purple-8': '#27327a',
    '--color-purple-9': '#172054',
    '--color-purple-10': '#0a102e',
    // 赤橙 Orange
    '--color-orange-1': '#fffaf2',
    '--color-orange-2': '#ffedcd',
    '--color-orange-3': '#ffd899',
    '--color-orange-4': '#ffc266',
    '--color-orange-5': '#ffaa33',
    '--color-orange-6': '#f38900',
    '--color-orange-7': '#cc7000',
    '--color-orange-8': '#a65901',
    '--color-orange-9': '#804200',
    '--color-orange-10': '#592d00',
    // 枫叶 Red
    '--color-maple-1': '#fff4f3',
    '--color-maple-2': '#ffd9d6',
    '--color-maple-3': '#ffb1ad',
    '--color-maple-4': '#ff8985',
    '--color-maple-5': '#f75d59',
    '--color-maple-6': '#ea2e2e',
    '--color-maple-7': '#c41e1f',
    '--color-maple-8': '#9e0f15',
    '--color-maple-9': '#78060b',
    '--color-maple-10': '#520005',
    // Light purple
    '--color-light-purple-1': '#f7effc',
    '--color-light-purple-2': '#e7daf1',
    '--color-light-purple-3': '#cfb6e3',
    '--color-light-purple-4': '#b895d6',
    '--color-light-purple-5': '#a075c9',
    '--color-light-purple-6': '#8a58bc',
    '--color-light-purple-7': '#693f96',
    '--color-light-purple-8': '#4b2a70',
    '--color-light-purple-9': '#2e184b',
    '--color-light-purple-10': '#150a24',
    // 天青 Light green
    '--color-cyan-1': '#f3feff',
    '--color-cyan-2': '#c9f3f5',
    '--color-cyan-3': '#90e7e8',
    '--color-cyan-4': '#5cdbdb',
    '--color-cyan-5': '#2ecfcc',
    '--color-cyan-6': '#04c1ba',
    '--color-cyan-7': '#009c95',
    '--color-cyan-8': '#00756d',
    '--color-cyan-9': '#004f49',
    '--color-cyan-10': '#002925',
    // 郁金 gold
    '--color-gold-1': '#fffdf2',
    '--color-gold-2': '#fff7d1',
    '--color-gold-3': '#ffec9f',
    '--color-gold-4': '#ffdf6c',
    '--color-gold-5': '#ffd139',
    '--color-gold-6': '#fbbe04',
    '--color-gold-7': '#d49c00',
    '--color-gold-8': '#ad7c00',
    '--color-gold-9': '#875f00',
    '--color-gold-10': '#614200',
    // 苔绿 green
    '--color-moss-1': '#e9f2e6',
    '--color-moss-2': '#cbe6c1',
    '--color-moss-3': '#abd998',
    '--color-moss-4': '#8fcd72',
    '--color-moss-5': '#75bf51',
    '--color-moss-6': '#5fb333',
    '--color-moss-7': '#488c20',
    '--color-moss-8': '#336612',
    '--color-moss-9': '#1e4008',
    '--color-moss-10': '#0c1a02',
};

// 10个循环色，在需要标签、图表连续用不同颜色的时候，从这边循环取用
exports.rotatingColors = {
    '--color-rotating-1': '#108cee',
    '--color-rotating-2': '#545fc8',
    '--color-rotating-3': '#f38900',
    '--color-rotating-4': '#ea2e2e',
    '--color-rotating-5': '#8a58bc',
    '--color-rotating-6': '#04c1ba',
    '--color-rotating-7': '#fbbe04',
    '--color-rotating-8': '#5fb333',
    '--color-rotating-9': '#0a7eb4',
    '--color-rotating-10': '#304069',
};

// ui标准色盘，50个颜色
exports.uiColors = {
    // 品牌色
    '--color-brand-1': '#eaf6fe',
    '--color-brand-2': '#d3e9ff',
    '--color-brand-3': '#a3d3ff',
    '--color-brand-4': '#73beff',
    '--color-brand-5': '#41a7fa',
    '--color-brand-6': '#108cee',
    '--color-brand-7': '#0476c7',
    '--color-brand-8': '#0061a1',
    '--color-brand-9': '#004b7a',
    '--color-brand-10': '#013454',
    // 中性色
    '--color-gray-1': '#ffffff',
    '--color-gray-2': '#fafafa',
    '--color-gray-3': '#f5f5f5',
    '--color-gray-4': '#eeeeee',
    '--color-gray-5': '#e0e0e0',
    '--color-gray-6': '#cccccc',
    '--color-gray-7': '#999999',
    '--color-gray-8': '#666666',
    '--color-gray-9': '#333333',
    '--color-gray-10': '#000000',
    // 警告色
    '--color-warning-1': '#fcf7f1',
    '--color-warning-2': '#ffedcd',
    '--color-warning-3': '#ffd899',
    '--color-warning-4': '#ffc266',
    '--color-warning-5': '#ffaa33',
    '--color-warning-6': '#f38900',
    '--color-warning-7': '#cc7000',
    '--color-warning-8': '#a65901',
    '--color-warning-9': '#804200',
    '--color-warning-10': '#592d00',
    // 成功色
    '--color-success-1': '#f1fdeb',
    '--color-success-2': '#cbe6c1',
    '--color-success-3': '#abd998',
    '--color-success-4': '#8fcd72',
    '--color-success-5': '#75bf51',
    '--color-success-6': '#5fb333',
    '--color-success-7': '#488c20',
    '--color-success-8': '#336612',
    '--color-success-9': '#1e4008',
    '--color-success-10': '#0c1a02',
    // 错误色
    '--color-error-1': '#fff5f5',
    '--color-error-2': '#ffcfd1',
    '--color-error-3': '#f7989d',
    '--color-error-4': '#ec606c',
    '--color-error-5': '#de2f40',
    '--color-error-6': '#d0021b',
    '--color-error-7': '#ab0016',
    '--color-error-8': '#850014',
    '--color-error-9': '#5e0010',
    '--color-error-10': '#38000a',
    // 提示色
    '--color-info-1': 'var(--color-brand-1)',
    '--color-info-2': 'var(--color-brand-2)',
    '--color-info-3': 'var(--color-brand-3)',
    '--color-info-4': 'var(--color-brand-4)',
    '--color-info-5': 'var(--color-brand-5)',
    '--color-info-6': 'var(--color-brand-6)',
    '--color-info-7': 'var(--color-brand-7)',
    '--color-info-8': 'var(--color-brand-8)',
    '--color-info-9': 'var(--color-brand-9)',
    '--color-info-10': 'var(--color-brand-10)',
};

const buttonColors = {
    // antd
    '--btn-disable-bg': 'var(--theme-disabled-bg)',
    '--btn-disable-border': 'var(--theme-disabled-bg)',
    '--btn-disable-color': 'var(--theme-disabled-color)',
    // type default
    '--btn-default-bg': 'var(--theme-component-bg)',
    '--btn-default-border-color': 'var(--theme-border-color-base)',
    '--btn-default-color': 'var(--theme-text-color)',
    '--btn-default-active-bg': 'var(--color-brand-1)',
    '--btn-default-active-border-color': 'var(--theme-primary-color)',
    '--btn-default-active-color': 'var(--theme-primary-color)',
    '--btn-default-disable-bg': 'var(--btn-disable-bg)',
    '--btn-default-disable-border-color': 'var(--btn-disable-border)',
    '--btn-default-disable-color': 'var(--btn-disable-color)',
    '--btn-default-focus-bg': 'var(--theme-component-bg)',
    '--btn-default-focus-border-color': 'var(--theme-primary-color)',
    '--btn-default-focus-color': 'var(--theme-primary-color)',
    '--btn-default-hover-bg': 'var(--theme-component-bg)',
    '--btn-default-hover-border-color': 'var(--theme-primary-color-hover)',
    '--btn-default-hover-color': 'var(--theme-primary-color-hover)',
    '--btn-default-loading-bg': 'var(--theme-component-bg)',
    '--btn-default-loading-border-color': 'var(--theme-primary-color)',
    '--btn-default-loading-color': 'var(--theme-primary-color)',
    // type primary
    '--btn-primary-bg': 'var(--theme-primary-color)',
    '--btn-primary-border-color': 'var(--theme-primary-color)',
    '--btn-primary-color': 'var(--color-gray-1)',
    '--btn-primary-active-bg': 'var(--color-brand-7)',
    '--btn-primary-active-border-color': 'var(--color-brand-7)',
    '--btn-primary-active-color': 'var(--color-gray-1)',
    '--btn-primary-disable-bg': 'var(--btn-disable-bg)',
    '--btn-primary-disable-border-color': 'var(--btn-disable-border)',
    '--btn-primary-disable-color': 'var(--btn-disable-color)',
    '--btn-primary-focus-bg': 'var(--theme-primary-color)',
    '--btn-primary-focus-border-color': 'var(--theme-primary-color)',
    '--btn-primary-focus-color': 'var(--color-gray-1)',
    '--btn-primary-hover-bg': 'var(--theme-primary-color-hover)',
    '--btn-primary-hover-border-color': 'var(--theme-primary-color-hover)',
    '--btn-primary-hover-color': 'var(--color-gray-1)',
    '--btn-primary-loading-bg': 'var(--theme-primary-color)',
    '--btn-primary-loading-border-color': 'var(--theme-primary-color)',
    '--btn-primary-loading-color': 'var(--color-gray-1)',
    // type link
    '--btn-link-bg': 'transparent',
    '--btn-link-border-color': 'transparent',
    '--btn-link-color': 'var(--theme-text-color)',
    '--btn-link-active-bg': 'transparent',
    '--btn-link-active-border-color': 'transparent',
    '--btn-link-active-color': 'var(--theme-primary-color)',
    '--btn-link-disable-bg': 'transparent',
    '--btn-link-disable-border-color': 'transparent',
    '--btn-link-disable-color': 'var(--btn-disable-color)',
    '--btn-link-focus-bg': 'transparent',
    '--btn-link-focus-border-color': 'transparent',
    '--btn-link-focus-color': 'var(--theme-primary-color)',
    '--btn-link-hover-bg': 'transparent',
    '--btn-link-hover-border-color': 'transparent',
    '--btn-link-hover-color': 'var(--theme-primary-color)',
    '--btn-link-loading-bg': 'transparent',
    '--btn-link-loading-border-color': 'transparent',
    '--btn-link-loading-color': 'var(--btn-link-focus-color)',
    // type only-icon
    '--btn-only-icon-bg': 'transparent',
    '--btn-only-icon-border-color': 'transparent',
    '--btn-only-icon-color': 'var(--theme-text-color)',
    '--btn-only-icon-active-bg': 'transparent',
    '--btn-only-icon-active-border-color': 'transparent',
    '--btn-only-icon-active-color': 'var(--theme-primary-color)',
    '--btn-only-icon-disable-bg': 'var(--btn-disable-bg)',
    '--btn-only-icon-disable-border-color': 'var(--btn-disable-border)',
    '--btn-only-icon-disable-color': 'var(--btn-disable-color)',
    '--btn-only-icon-focus-bg': 'transparent',
    '--btn-only-icon-focus-border-color': 'transparent',
    '--btn-only-icon-focus-color': 'var(--theme-primary-color)',
    '--btn-only-icon-hover-bg': 'transparent',
    '--btn-only-icon-hover-border-color': 'transparent',
    '--btn-only-icon-hover-color': 'var(--theme-primary-color-hover)',
    '--btn-only-icon-loading-bg': 'var(--btn-only-icon-focus-bg)',
    '--btn-only-icon-loading-border-color': 'var(--btn-only-icon-focus-border-color)',
    '--btn-only-icon-loading-color': 'var(--btn-only-icon-focus-color)',
    // type strong
    '--btn-strong-bg': 'var(--theme-component-bg)',
    '--btn-strong-border-color': 'var(--theme-primary-color)',
    '--btn-strong-color': 'var(--theme-primary-color)',
    '--btn-strong-active-bg': 'var(--btn-default-active-bg)',
    '--btn-strong-active-border-color': 'var(--btn-default-active-border-color)',
    '--btn-strong-active-color': 'var(--btn-default-active-border-color)',
    '--btn-strong-disable-bg': 'var(--btn-disable-bg)',
    '--btn-strong-disable-border-color': 'var(--btn-disable-border)',
    '--btn-strong-disable-color': 'var(--btn-disable-color)',
    '--btn-strong-focus-bg': 'var(--btn-default-focus-bg)',
    '--btn-strong-focus-border-color': 'var(--btn-default-focus-border-color)',
    '--btn-strong-focus-color': 'var(--btn-default-focus-color)',
    '--btn-strong-hover-bg': 'var(--btn-default-hover-bg)',
    '--btn-strong-hover-border-color': 'var(--btn-default-hover-border-color)',
    '--btn-strong-hover-color': 'var(--btn-default-hover-color)',
    '--btn-strong-loading-bg': 'var(--btn-default-loading-bg)',
    '--btn-strong-loading-border-color': 'var(--btn-default-loading-border-color)',
    '--btn-strong-loading-color': 'var(--btn-default-loading-color)',
};

exports.presetColors = {
    '--theme-bg-color-base': 'var(--color-gray-4)',
    '--theme-bg-color-light': 'var(--color-brand-1)',
    '--theme-body-bg': 'var(--color-gray-1)',
    '--theme-border-color-base': 'var(--color-gray-5)',
    '--theme-border-color-inverse': '#fff',
    '--theme-border-color-split': 'var(--color-gray-4)',
    '--theme-component-bg': 'var(--color-gray-1)',
    '--theme-component-focus-box-shadow': 'none',
    '--theme-disabled-bg': 'var(--color-gray-5)',
    '--theme-disabled-color': 'var(--color-gray-6)',
    '--theme-error-color-active': 'var(--color-error-7)',
    '--theme-error-color-hover': 'var(--color-error-5)',
    '--theme-error-color': 'var(--color-error-6)',
    '--theme-heading-color': 'var(--color-gray-9)',
    '--theme-info-color-active': 'var(--color-info-7)',
    '--theme-info-color-hover': 'var(--color-info-5)',
    '--theme-info-color': 'var(--color-info-6)',
    '--theme-primary-color-active': 'var(--color-brand-7)',
    '--theme-primary-color-hover': 'var(--color-brand-5)',
    '--theme-primary-color': 'var(--color-brand-6)',
    '--theme-placeholder-color': 'var(--color-gray-7)',
    '--theme-secondary-color-active': 'var(--color-brand-3)',
    '--theme-secondary-color-hover': 'var(--color-brand-1)',
    '--theme-secondary-color': 'var(--color-brand-2)',
    '--theme-success-color-active': 'var(--color-success-7)',
    '--theme-success-color-hover': 'var(--color-success-5)',
    '--theme-success-color': 'var(--color-success-6)',
    '--theme-text-color-secondary': 'var(--color-gray-8)',
    '--theme-text-color': 'var(--color-gray-9)',
    '--theme-warning-color-active': 'var(--color-warning-7)',
    '--theme-warning-color-hover': 'var(--color-warning-5)',
    '--theme-warning-color': 'var(--color-warning-6)',
    '--theme-color-border-base': 'var(--color-gray-5)',
    '--theme-color-text': 'var(--color-gray-8)',
    '--theme-highlight-color': 'var(--color-error-5)',
    '--theme-outline-color': 'var(--color-brand-4)',
    '--theme-processing-color': 'var(--color-brand-6)',
    '--theme-border-focus-color': 'var(--color-brand-6)',
    // 组件属性
    '--alert-error-bg-color': 'var(--color-error-1)',
    '--alert-error-border-color': 'var(--color-error-1)',
    '--alert-error-icon-color': 'var(--theme-error-color)',
    '--alert-info-bg-color': 'var(--color-gray-3)',
    '--alert-info-border-color': 'var(--color-gray-3)',
    '--alert-info-icon-color': 'var(--color-brand-6)',
    '--alert-success-bg-color': 'var(--color-success-1)',
    '--alert-success-border-color': 'var(--color-success-1)',
    '--alert-success-icon-color': 'var(--theme-success-color)',
    '--alert-warning-bg-color': 'var(--color-warning-1)',
    '--alert-warning-border-color': 'var(--color-warning-1)',
    '--alert-warning-icon-color': 'var(--theme-warning-color)',
    '--alert-with-description-icon-top': '24px',
    '--alert-with-description-padding': '8px 15px 8px 37px',
    '--alert-padding': '8px 10px 8px 40px',
    '--alert-no-icon-padding': '8px 20px',
    '--alert-icon-padding-right': '10px',
    '--message-alert-success-bg-color': 'var(--alert-success-bg-color)',
    '--message-alert-warning-bg-color': 'var(--alert-warning-bg-color)',
    '--message-alert-error-bg-color': 'var(--alert-error-bg-color)',
    '--message-alert-info-bg-color': 'var(--alert-info-bg-color)',
    '--message-alert-success-border-color': 'var(--alert-success-border-color)',
    '--message-alert-warning-border-color': 'var(--alert-warning-border-color)',
    '--message-alert-error-border-color': 'var(--alert-error-border-color)',
    '--message-alert-info-border-color': 'var(--alert-info-border-color)',
    '--btn-border-radius-base': '0px',
    '--btn-link-margin': '0',
    '--btn-link-padding': '4px 15px',
    '--btn-loading-text-display': 'inline',
    '--btn-link-text-decoration': 'none',
    '--collapse-content-bg': 'var(--color-gray-3)',
    '--collapse-expand-icon-bg': 'transparent',
    '--collapse-header-bg': 'var(--theme-component-bg)',
    '--collapse-header-font-weight': '400',
    '--collapse-header-height': '40px',
    '--collapse-content-box-padding-top': '10px',
    '--collapse-content-box-padding-bottom': '10px',
    '--collapse-arrow-top': '12px',
    '--input-error-focus-background-color': 'var(--color-error-1)',
    '--input-focus-background-color': 'var(--color-brand-1)',
    '--input-warning-focus-background-color': 'var(--color-warning-1)',
    '--link-active-color': 'var(--color-brand-7)',
    '--link-color': 'var(--color-brand-7)',
    '--link-hover-color': 'var(--color-brand-7)',
    '--menu-bg': 'none',
    '--menu-highlight-color': 'var(--theme-primary-color)',
    '--menu-item-active-bg': 'var(--theme-secondary-color-hover)',
    '--menu-item-color': 'var(--color-gray-9)',
    '--menu-item-group-title-color': 'var(--theme-text-color-secondary)',
    '--menu-popup-bg': 'var(--theme-component-bg)',
    '--progress-text-color': 'var(--color-gray-9)',
    '--progress-radius': 0,
    '--select-arrow-open-transform-rotate': 'rotate(180deg)',
    '--select-arrow-transition': 'transform .3s, -webkit-transform .3s',
    '--select-item-active-bg': 'var(--theme-secondary-color-hover)',
    '--select-item-selected-bg': 'var(--theme-secondary-color-hover)',
    '--space-large': '30px',
    '--space-middle': '20px',
    '--space-small': '10px',
    '--table-header-bg': 'var(--color-gray-3)',
    '--table-header-color': 'var(--color-gray-8)',
    '--table-row-hover-bg': 'var(--color-brand-1)',
    '--table-header-cell-border-right': '1px solid var(--color-gray-1)',
    '--table-header-border-bottom-color': 'var(--color-gray-4)',
    '--tabs-highlight-color': 'var(--color-gray-9)',
    '--tabs-hover-color': 'var(--color-gray-9)',
    '--tabs-ink-bar-color': 'var(--color-gray-9)',
    '--tabs-top-before': '2px solid var(--color-gray-4)',
    '--tabs-border-bottom': '1px solid var(--color-gray-5)',
    '--tabs-tab-color': 'var(--color-gray-8)',
    '--tabs-card-bg': 'var(--color-gray-3)',
    '--tabs-card-nav-list-padding': '4px 0 0 10px',
    '--tag-check-border': 'var(--color-brand-4)',
    '--tag-default-bg': 'var(--color-gray-3)',
    '--tag-font-color': 'var(--color-gray-9)',
    '--tag-blue-color': 'var(--color-brand-1)',
    '--tag-green-color': 'var(--color-success-1)',
    '--tag-purple-color': 'var(--color-purple-1)',
    '--tag-red-color': 'var(--color-error-1)',
    '--tag-yellow-color': 'var(--color-warning-1)',
    '--tag-blue-bg-color': 'var(--color-brand-1)',
    '--tag-blue-solid-bg-color': 'var(--color-brand-6)',
    '--tag-blue-font-color': 'var(--color-brand-6)',
    '--tag-green-bg-color': 'var(--color-success-1)',
    '--tag-green-solid-bg-color': 'var(--color-success-6)',
    '--tag-green-font-color': 'var(--color-success-6)',
    '--tag-red-bg-color': 'var(--color-error-1)',
    '--tag-red-solid-bg-color': 'var(--color-error-6)',
    '--tag-red-font-color': 'var(--color-error-6)',
    '--tag-yellow-bg-color': 'var(--color-warning-1)',
    '--tag-yellow-font-color': 'var(--color-warning-6)',
    '--tag-yellow-solid-bg-color': 'var(--color-warning-6)',
    '--tag-padding': '0 4px',
    '--tooltip-bg': 'var(--color-gray-9)',
    '--tooltip-color': 'var(--color-gray-1)',
    '--pagination-item-border-color': 'var(--theme-component-bg)',
    '--pagination-item-hover-bg': 'var(--theme-component-bg)',
    '--pagination-item-hover-color': 'var(--theme-primary-color-hover)',
    '--pagination-item-hover-border-color': 'var(--theme-primary-color-hover)',
    '--pagination-item-active-border-color': 'var(--theme-primary-color)',
    '--pagination-item-active-bg': 'var(--theme-component-bg)',
    '--pagination-item-active-color': 'var(--theme-primary-color)',
    '--pagination-item-disabled-border-color': 'transparent',
    '--checkbox-hover-border-color': 'var(--theme-primary-color-hover)',
    '--checkbox-hover-bg': 'var(--theme-component-bg)',
    '--checkbox-focus-bg': 'var(--theme-component-bg)',
    '--checkbox-checked-focus-border-color': 'var(--theme-primary-color)',
    '--checkbox-checked-focus-box-shadow': 'var(--theme-component-focus-box-shadow)',
    '--checkbox-checked-focus-bg': 'var(--theme-primary-color)',
    '--checkbox-disabled-bg': 'var(--theme-disabled-bg)',
    '--checkbox-checked-border-color': 'var(--theme-border-color-base)',
    '--radio-hover-border-color': 'var(--theme-primary-color)',
    '--radio-hover-bg': 'var(--theme-component-bg)',
    '--radio-checked-color': 'var(--theme-primary-color)',
    '--radio-disabled-border-color': 'var(--theme-disabled-bg)',
    '--radio-disabled-bg': 'var(--color-gray-4)',
    '--radio-button-disabled-color': 'var(--color-gray-6)',
    '--radio-button-disabled-border-color': 'var(--color-gray-3)',
    '--radio-button-disabled-bg': 'var(--color-gray-4)',
    '--radio-button-hover-color': 'var(--theme-primary-color-hover)',
    '--radio-hover-border-zindex': 2,
    '--switch-min-width': '50px',
    '--switch-disable-bg': 'var(--color-gray-3)',
    '--switch-handle-disable-bg': 'var(--color-gray-6)',
    '--modal-header-bg': 'var(--color-gray-3)',
    '--modal-no-border-padding': '14px 20px',
    '--modal-no-border-body-padding-top': '0px',
    '--modal-padding': '9px 20px',
    '--modal-header-close-size': '40px',
    '--modal-close-icon-height': '16px',
    '--modal-close-icon-line-height': '40px',
    '--form-item-explain-icon-display': 'none',
    '--modal-body-border-bottom': '1px solid var(--theme-border-color-split)',
    '--modal-footer-border-top': 'none',
    '--modal-body-padding': '20px 20px',
    '--popover-font-size': '12px',
    '--popover-line-height': '20px',
    '--popover-inner-content-padding': '10px',
    '--popover-title-padding': '10px 10px 0 10px',
    '--dropdown-menu-min-width': '137px',
    '--back-top-bg': 'var(--btn-primary-bg)',
    '--back-top-hover-bg': 'var(--btn-primary-hover-bg)',
    '--back-top-active-bg': 'var(--btn-primary-active-bg)',
    ...buttonColors,
};
