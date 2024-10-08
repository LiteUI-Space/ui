import type { Rule } from 'unocss'

export const rules: Rule<object>[] = [
  [/^left-calc-(.+)$/, ([,val]) => {
    const numberWithUnitRE = /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i
    function round(n: number) {
      return +n.toFixed(10)
    }

    const handledVal = val.split('-').map(str => {
      const match = str.match(numberWithUnitRE)
      if (!match)
        return null
      const [, n, unit] = match
      const num = Number.parseFloat(n)
      return unit ? `${round(num)}${unit}` : `${round(num / 4)}rem`
    })
    return {
      left: `calc(100% - ${handledVal.filter(Boolean).join(' - ')})`
    }
  }]
]
