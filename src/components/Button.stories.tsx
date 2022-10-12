import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// Configuraçãoes Globais
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {
    }
} as Meta<ButtonProps>

// Configurações específicas 
export const Default: StoryObj<ButtonProps> = {}