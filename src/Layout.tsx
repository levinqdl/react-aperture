import React, { CSSProperties } from 'react'
import SlotContext, { ISlotContext } from './SlotContext'

interface Props {
  className?: string
  style?: CSSProperties
}

class Layout extends React.Component<Props, ISlotContext> {
  counter: number = 0
  addSlot = (element: HTMLDivElement) => {
    const key = `s${this.counter++}`
    this.setState(({ slots }) => ({
      slots: {
        ...slots,
        [key]: element
      }
    }))
    return key
  }
  state: ISlotContext = {
    slots: {},
    addSlot: this.addSlot,
  }
  render() {
    const { children, className, style } = this.props
    return (
      <SlotContext.Provider value={this.state}>
        <div
          style={style}
          className={className}
        >{children}</div>
      </SlotContext.Provider>
    )
  }
}
export default Layout