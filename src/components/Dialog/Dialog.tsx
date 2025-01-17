import { clsx } from 'clsx'
import { Dialog as HeadlessDialog, DialogPanel, DialogTitle, Description, Transition } from '@headlessui/react'
import { CloseButton } from '../CloseButton/CloseButton'

export interface IDialogProps extends React.PropsWithChildren {
  open: boolean
  onClose: () => void
  slots: {
    title: string
    description?: string
  }
  slotsProps?: {
    title?: React.ComponentProps<typeof HeadlessDialog.Title>
    description?: React.ComponentProps<typeof HeadlessDialog.Description>
  }
}

export const Dialog: React.FC<IDialogProps> = ({ open, onClose, slots, slotsProps, children }) => (
  <Transition
    as={HeadlessDialog}
    show={open}
    onClose={onClose}
    className="fixed inset-0 z-50 flex max-h-full max-w-full items-center justify-center p-4"
    enter="transition duration-100 ease-in"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    {/* The backdrop, rendered as a fixed sibling to the panel container */}
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    <div className="relative flex max-h-full max-w-xl items-start justify-center overflow-auto rounded-4xl bg-white">
      <DialogPanel className="relative flex flex-col items-center overflow-auto px-S py-M md:p-10">
        <CloseButton onClick={onClose} className="absolute right-S top-M -translate-y-1/3 translate-x-1/3 md:right-M" />
        <DialogTitle
          as="h3"
          {...slotsProps?.title}
          className={clsx('text-center', slots.description ? 'mb-XS' : 'mb-S', slotsProps?.title?.className)}
        >
          {slots.title}
        </DialogTitle>
        {slots.description && (
          <Description
            {...slotsProps?.description}
            className={clsx('mb-S text-center', slotsProps?.description?.className)}
          >
            {slots.description}
          </Description>
        )}
        {children}
      </DialogPanel>
    </div>
  </Transition>
)
