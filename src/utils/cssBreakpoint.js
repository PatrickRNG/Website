import { css } from 'styled-components'

const BreakpointEnum = {
  Mobile: '320px',
  Tablet: '768px',
  Computer: '992px',
  LargeMonitor: '1200px',
  WidescreenMonitor: '1920px'
}

const getCSSBreakpoint = (min, max) => attributes => {
  const minWidth = min ? ` and (min-width: ${min})` : ''
  const maxWidth = max ? ` and (max-width: ${max})` : ''

  return css`
    @media only screen ${minWidth} ${maxWidth} {
      ${css(attributes)}
    }
  `
}

const breakpoints = {
  mobileUp: getCSSBreakpoint(BreakpointEnum.Mobile),
  tabletUp: getCSSBreakpoint(BreakpointEnum.Tablet),
  computerUp: getCSSBreakpoint(BreakpointEnum.Computer),
  largeMonitorUp: getCSSBreakpoint(BreakpointEnum.LargeMonitor),
  widescreenMonitorUp: getCSSBreakpoint(BreakpointEnum.WidescreenMonitor),

  mobileOnly: getCSSBreakpoint(BreakpointEnum.Mobile, BreakpointEnum.Tablet),
  tabletOnly: getCSSBreakpoint(BreakpointEnum.Tablet, BreakpointEnum.Computer),
  computerOnly: getCSSBreakpoint(BreakpointEnum.Computer, BreakpointEnum.LargeMonitor),
  largeMonitorOnly: getCSSBreakpoint(BreakpointEnum.LargeMonitor, BreakpointEnum.WidescreenMonitor),
  widescreenMonitorOnly: getCSSBreakpoint(BreakpointEnum.WidescreenMonitor)
}

export default breakpoints