import React from 'react';

declare module 'react-input-mask' {
  export interface Props {
    maskChar?: string;
    formatChars: {
      [key: string]: string;
    };
  }
}
