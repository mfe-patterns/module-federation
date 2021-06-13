import React, { useRef, useEffect } from 'react';

import { mount } from 'cart/CartApp';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
