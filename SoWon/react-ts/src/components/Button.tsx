import React, { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
    isValid: boolean
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ isValid, onClick, children }) => {
    return (
        <button
            type={isValid ? 'submit' : 'button'}
            className={isValid ? 'btn-base btn-valid w-full' : 'btn-base btn-invalid w-full'}
            onClick={onClick}
            disabled={!isValid}
        >
            {children}
        </button>
    )
}
