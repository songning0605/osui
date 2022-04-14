/* eslint-disable max-len */
import * as React from 'react';

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 1024 1024"
        className="lsqm-icon-svg icon-question-mark"
        fill="var(--theme-primary-color)"
        width="14px"
        {...props}
    >
        <path d="M927 926.29H97V96.15h830v830.14zM156.29 867h711.42V155.45H156.29V867z" />
        <path d="M627.79 293.38c26.28 24.2 39.83 57.62 39.83 100.29 0 31.96-9.26 59.7-27.04 83.21-7.12 8.51-26.28 26.98-57.61 54.72-15.63 13.55-26.28 26.35-33.41 39.14-9.23 15.63-13.49 32.72-13.49 51.88v16.39H479.2v-16.39c0-23.45 4.26-44.07 12.79-61.84 9.96-21.37 33.41-48.35 71.82-82.52 11.41-11.35 19.86-19.92 24.14-25.59 14.24-17.78 21.36-36.25 21.36-56.17 0-28.43-8.51-50.49-24.14-66.13-16.38-17.08-39.86-24.9-69.74-24.9-35.55 0-61.86 11.35-78.91 34.86-15.63 19.92-23.48 46.9-23.48 81.76H356.9c0-49.8 13.52-89.58 41.95-119.46 28.46-31.33 68.26-46.96 119.47-46.96 45.5.01 81.74 12.12 109.47 37.71zm-88.87 407.49c7.82 7.82 12.1 17.78 12.1 29.88 0 12.8-4.28 22.76-12.82 30.57-8.51 7.82-18.47 12.1-30.57 12.1-12.07 0-22.03-4.29-30.57-12.1-8.54-8.51-12.07-18.47-12.07-30.57 0-12.1 3.53-22.06 12.07-29.88 8.54-8.51 18.5-12.04 30.57-12.04 12.1-.01 22.75 3.52 31.29 12.04z" />
    </svg>
);

export default SvgComponent;