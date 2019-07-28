import './toolbar.scss'
import React from 'react';
import { useBehaviorSubject } from 'use-subscribable'
import { ThemeEngine } from '~/platform/theme';
import { useInstanceOf, useGlobalSelector } from 'global-context';
import { State } from '~/gui/state';

interface ToolbarProps {
  children?: React.ReactNode
}

export const Toolbar = ({ children }: ToolbarProps) => { 
  const themeEngine = useInstanceOf(ThemeEngine)
  const themes = useBehaviorSubject(themeEngine.theme)

  return (
    <div 
      className='toolbar-component'
      style={{
        color: themes.color,
        backgroundColor: themes.backgroundColor
      }}>
      { children }
    </div>
  )}
