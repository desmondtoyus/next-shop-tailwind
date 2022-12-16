import React from 'react';
import { Loader } from '@/components/common/Loader';

describe('Loader', () => {
  it('mounts', () => {
    cy.mount(<Loader loading />);
    cy.get('[data-testid="loading"]').within(() => {
      cy.get('img').should('have.attr', 'alt', 'Loading');
      cy.get('p').contains('Loading');
    });
    // cy.get('[data-cy=counter]').should('have.text', '0')
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
