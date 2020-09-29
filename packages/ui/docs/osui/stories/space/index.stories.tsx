import React from 'react';
import Button from '@osui/button';
import Space from '@osui/space';

export default {
    title: 'Space',
};

export const Demo = () => {
    return (
        <Space>
            <Button type="primary">primary</Button>
            <Button>secondary</Button>
        </Space>
    );
};
