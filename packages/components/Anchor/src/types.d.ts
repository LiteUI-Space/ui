interface LtAnchorProps {
}

interface LtAnchorLinkProps {
  href: string
  title: string
}

export type AnchorProps = Partial<LtAnchorProps>
export type AnchorInstance = InstanceType<typeof import('./Anchor.vue')['default']>

export type AnchorLinkProps = Partial<LtAnchorLinkProps>
export type AnchorLinkInstance = InstanceType<typeof import('./AnchorLink.vue')['default']>
