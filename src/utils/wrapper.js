import React from 'react';

export const wrapper = (Component, props) => (rest) => <Component {...props} {...rest} />;
