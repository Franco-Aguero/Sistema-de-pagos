import clsx from 'clsx'

export function Button({ className, handleClic, ...props}) {
  return (
    <button
      className={clsx(
        'rounded-md px-6 text-lg font-bold text-white h-12 xl:h-14',
        className
      )}
      {...props}
      
    />
  )
}