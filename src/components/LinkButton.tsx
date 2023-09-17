import React from 'react'

interface LinkButtonProps {
    href: string
    className: string
    title: string
    ariaLabel: string
    disabled: boolean
    children: React.ReactNode
}

function LinkButton ({ ariaLabel, className, disabled, href, title, children }: LinkButtonProps) {
  return (
    <a
      href={disabled ? '#' : href}
      tabIndex={disabled ? -1 : 0}
      className={`group inline-block ${className}`}
      aria-label={ariaLabel}
      title={title}
      aria-disabled={disabled}
      target='_blank'
      rel='noopener noreferrer nofollow'
    >
      {children}
    </a>
  )
}

export default LinkButton
