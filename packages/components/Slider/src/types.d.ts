interface LtSliderProps {
  min: number
  max: number
  step: number
}

export type SliderProps = Partial<LtSliderProps>
export type SliderInstance = InstanceType<typeof import('./Slider.vue')['default']>
