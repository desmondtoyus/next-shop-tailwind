import React from 'react';

export default function NextImageMock(props) {
  const { src, alt, layout, objectFit } = props;
  let newProps = props;
  if (layout === 'fill' && objectFit === 'cover') {
    newProps = {
      src,
      alt,
      style: { width: '100%', height: '100%', objectFit: 'cover' },
    };
  }
  if (layout !== 'fill' && objectFit === 'cover') {
    newProps = {
      src,
      alt,
      style: {
        minWidth: '100%',
        maxWidth: '100%',
        minHeight: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
      },
    };
  }
  if (layout === 'responsive') {
    newProps = {
      src,
      alt,
      style: { width: '100%', objectFit: 'cover' },
    };
  }
  return <img {...newProps} />;
}
