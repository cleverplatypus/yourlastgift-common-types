import { Signal } from '@cleverplatypus/signals.ts'
import { MaybeGetter } from './util-types.ts'

export type BlockingOperationInfo = {
  scope?: string
  description: string
  progress: number
  uuid: string
  end: () => void
}

export enum NotificationStatus {
  'to-be-shown',
  'visible',
  'to-be-dismissed',
  'dismissed'
}

export type NotificationConfig = {
  id?: string
  title: MaybeGetter<string>
  body: MaybeGetter<string>
  isSticky: boolean
  type: string
  count: number
  status: NotificationStatus
  dismissOn?: Signal<any, any>
}

export type ReactiveBlockElementConfig = {
  order: number
  show: boolean
  span: boolean
}

export type ElementConfig = {
  xs: ReactiveBlockElementConfig
  sm: ReactiveBlockElementConfig
  md: ReactiveBlockElementConfig
  lg: ReactiveBlockElementConfig
  xl: ReactiveBlockElementConfig
  component: string
  data: Record<string, unknown>
}

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ScreenModel = {
  screenSize: ScreenSize
}

export type WizardStep = {
  title: MaybeGetter<string>
  enabled?: boolean
  completed: boolean
  component: string
  dataState?: 'unchanged' | 'unset' | 'changed'
  props?: Record<string, unknown>
}
export type WizardModel = RawWizardModel & {
    currentEnabledStepIndex: number
    enabledSteps: Array<WizardStep>
    currentStep : WizardStep
}

export type RawWizardModel = {
    currentStepIndex: number
    steps: Array<WizardStep>
}

export type WizardCurrentStep = {
  currentStep: WizardStep
}

export type ModalDialogAction = {
  name: string
  data?: any
}

export type ModalDialogConfig = {
  title: MaybeGetter<string>
  content: MaybeGetter<string>
  size?:
    | 'sm'
    | 'xl'
    | 'lg'
    | 'fullscreen-sm-down'
    | 'fullscreen-md-down'
    | 'fullscreen-lg-down'
    | 'fullscreen-xl-down'
    | 'fullscreen-xxl-down'
    | 'fullscreen'

  actions: Array<ModalDialogAction>
}
  
export type UIInfoModel = {
    screenSize : ScreenSize;
}

export enum AttentionLevel  {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info'
  }
  
  export type AttentionAttractor<T> = {
    level: AttentionLevel
    target: T
  }