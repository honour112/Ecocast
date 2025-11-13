// FIX: Import React to resolve 'React' namespace error for React.ReactNode type.
import React from 'react';

export interface Service {
  image: string;
  title: string;
  description: string;
  details: string;
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface SocialLinkItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}