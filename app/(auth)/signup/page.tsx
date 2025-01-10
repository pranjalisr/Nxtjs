import { ReactNode } from "react"

export default function({children}: {
  children: ReactNode

}) {
  return <div>
    <div>header</div>
    {children}
    <input type="text"></input>
    <input type="text"></input>
    <button> Sign up</button>
    <div>footer</div>
    
  </div>
}