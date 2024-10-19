// src/globals.d.ts
declare global {
    interface CSSStyleDeclaration {
      // Declare your custom properties
      '--x'?: string;
      '--y'?: string;
    }
  }
  
  export {};
  