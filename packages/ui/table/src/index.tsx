/* eslint-disable complexity */
import React, {useContext, useMemo} from 'react';
import {Table as AntdTable} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {ConfigContext} from 'antd/lib/config-provider';
import {
    TableProps as AntdTableProps,
    TablePaginationConfig as AntdTablePaginationConfig,
} from 'antd/lib/table';
import { ExpandableConfig, TableRowSelection } from 'antd/lib/table/interface';
import classNames from 'classnames';
import {customPaginationProps, PaginationProps} from '@osui/pagination';
import {useBrandContext} from '@osui/brand-provider';
import {IconDownOutlined, IconRightOutlined} from '@osui/icons';
import '@osui/pagination/lib/index.less';
import './index.less';

const clsPrefix = 'osui-table';

interface TableProps<T> extends AntdTableProps<T> {
    noRowBorder?: boolean;
    noBorder?: boolean;
}

const paginationPostion = (position: AntdTablePaginationConfig['position']) => {
    if (position !== null && Array.isArray(position)) {
        const topPos = position.find(p => p.includes('top'));
        const bottomPos = position.find(p => p.includes('bottom'));
        // 已知bug：当top和bottom一起出现的时候，top会覆盖bottom，因为antd是单独渲染的，现在渲染的是同一个
        if (topPos) {
            return topPos.toLowerCase().replace('top', '');
        }
        if (bottomPos) {
            return bottomPos.toLowerCase().replace('bottom', '');
        }
    }
    return 'right';
};
// Record的用法是因为用object报错提示

// 用于控制expandable
const expandableConfig = (
    expandable: ExpandableConfig<any>,
    rowSelection?: TableRowSelection<any>
): ExpandableConfig<any> => (
    {
        ...expandable,
        // 如果有rowSelect，expand放在rowSelection后面
        expandIconColumnIndex: expandable.expandIconColumnIndex ?? (rowSelection && 1),
        columnWidth: '12px',
        expandIcon: (
            expandable.expandIcon ?? (
                ({expanded, onExpand, record }) => (
                    expanded
                        ? (
                            <IconDownOutlined
                                className={`${clsPrefix}-icloud-expandableIcon`}
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={(e: any) => onExpand(record, e)}
                            />
                        )
                        : (
                            <IconRightOutlined
                                className={`${clsPrefix}-icloud-expandableIcon`}
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={(e: any) => onExpand(record, e)}
                            />
                        )
                ))
        ),
    }
);

function Table<RecordType extends Record<string, any>>(
    {
        className,
        bordered,
        // 表格row是否没有border
        noRowBorder = false,
        // 表格是否没有border
        noBorder = false,
        pagination,
        expandable,
        ...props
    }: TableProps<RecordType>
) {
    const {brand} = useBrandContext();
    const {getPrefixCls} = useContext(ConfigContext);
    const antPrefix = getPrefixCls('table');
    // antd的bordered只控制column的border，当noBorder=true时，所有border都没有，包括头部
    // 当noRowBorder时，保留头部border，没有row的border
    const internalBordered = noBorder === true ? false : bordered;
    const internalClassNames = classNames(
        clsPrefix,
        className,
        { [`${clsPrefix}-no-row-border`]: noRowBorder },
        { [`${clsPrefix}-no-border`]: noBorder },
        // icloud-patch
        { [`${clsPrefix}-icloud`]: brand === 'icloud'}
    );

    // ==================== pagination ====================
    // 允许传入null
    const innerPagination: PaginationProps = useMemo(
        () => {
            if (!(pagination === false || pagination === null)) {
                return {
                    ...pagination,
                    className: classNames(
                        `${antPrefix}-pagination`,
                        /* eslint-disable-next-line max-len */
                        `${antPrefix}-pagination-${paginationPostion(pagination && pagination.position || ['bottomRight'])}`,
                        'osui-pagination',
                        pagination && pagination.className
                    ),
                    itemRender: customPaginationProps(brand).itemRender,
                    locale: customPaginationProps(brand).locale,
                };
            }
            return pagination as PaginationProps;
        },
        [pagination, antPrefix, brand]
    );

    // ==================== expandable ====================
    const innerExpandable = useMemo(
        () => {
            if (brand === 'icloud') {
                return expandable && expandableConfig(expandable, props.rowSelection);
            }
            return expandable;
        },
        [expandable, brand, props.rowSelection]
    );

    return (
        <AntdTable<RecordType>
            {...props}
            className={internalClassNames}
            bordered={internalBordered}
            pagination={innerPagination}
            expandable={innerExpandable}
        />
    );
}

hoistNonReactStatics(Table, AntdTable);

export default Table as unknown as typeof AntdTable & typeof Table;
