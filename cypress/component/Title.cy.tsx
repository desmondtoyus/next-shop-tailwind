import React from 'react';
import { Title } from '@/components/common/Title';

describe('Title', () => {
  it('mounts', () => {
    cy.mount(
      <Title>
        <p>hello</p>
      </Title>,
    );
    cy.get('[data-testid="title"]').within(() => {
      cy.get('p').contains('hello');
    });
    // cy.get('[data-cy=counter]').should('have.text', '0')
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
