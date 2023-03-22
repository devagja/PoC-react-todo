import { atom } from 'jotai'

import iconKeys from './icons/_iconKeys'

export const alertAtom = atom({
  label: '',
  className: 'alert-success text-success-content',
  icon: iconKeys.SUCCESS,
  forceRender: 0
})

export const alertEmail = (): any => ({
  label: 'Check your email 👋',
  className: 'alert-info text-info-content',
  icon: iconKeys.INFO,
  forceRender: Date.now()
})

export const alertWelcome = (): any => ({
  label: 'Welcome 👋',
  className: 'alert-success text-success-content',
  icon: iconKeys.SUCCESS,
  forceRender: Date.now()
})

export const alertTaskAdded = (): any => ({
  label: 'Task added ✍️',
  className: 'alert-success text-success-content',
  icon: iconKeys.INFO,
  forceRender: Date.now()
})

export const alertBackSoon = (): any => ({
  label: 'Back soon! 😸',
  className: 'alert-info text-info-content',
  icon: iconKeys.INFO,
  forceRender: Date.now()
})

export const alertDeleteTask = (): any => ({
  label: 'Deleted! ❌',
  className: 'alert-success text-success-content',
  icon: iconKeys.SUCCESS,
  forceRender: Date.now()
})

export const alertDoneTask = (): any => ({
  label: 'Good job! 👏',
  className: 'alert-success text-success-content',
  icon: iconKeys.SUCCESS,
  forceRender: Date.now()
})

export const alertUndoneTask = (): any => ({
  label: "Ups! What's happened? 🤷‍♂️",
  className: 'alert-warning text-warning-content',
  icon: iconKeys.WARNING,
  forceRender: Date.now()
})

export const alertServiceErr = (): any => ({
  label: 'Something wrong has happened, please try again or later',
  className: 'alert-error text-error-content',
  icon: iconKeys.ERROR,
  forceRender: Date.now()
})
