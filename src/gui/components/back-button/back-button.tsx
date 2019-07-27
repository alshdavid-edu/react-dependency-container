import React from 'react';
import { useInstanceOf } from '~/gui/state';
import { Router } from 'crayon';

export const BackButton = () => {
  const router = useInstanceOf(Router)

  return (
    <div 
      className='back-button-component'
      onClick={() => router.back()}>
      Go Back
    </div>
  )}
