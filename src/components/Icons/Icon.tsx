import MDIcon from '@mdi/react'

export type TIcon = {
  path:string
  size?:number
  title?:string
  color?:string
  spin?:boolean
  rotate?:number
  inline?:boolean
  vertical?:boolean
  description?:string
  horizontal?:boolean
}

export type TMIcon = Omit<TIcon, `path`> & {
  path?:string
}


export const Icon = ({ inline, ...props}:TIcon) => {
  return inline
    ? (<span className='icon-inline' ><MDIcon {...props} /></span>)
    : (<MDIcon {...props} />)
}
