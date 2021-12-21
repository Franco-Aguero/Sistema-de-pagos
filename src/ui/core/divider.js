import clsx from 'clsx'

export function Divider({ className, ...props }) {
  return (
    <div className={clsx('w-full h-[1px] bg-gray-300', className)} {...props} />
  )
}