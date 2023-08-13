import * as React from 'react'
import { FC } from 'react'

import { IconBaseProps } from './types'

export const LightTheme: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M15.9918 20.6668C17.286 20.6668 18.3886 20.2139 19.2997 19.308C20.2108 18.4021 20.6663 17.3021 20.6663 16.008C20.6663 14.7139 20.2134 13.6113 19.3075 12.7002C18.4016 11.7891 17.3016 11.3335 16.0075 11.3335C14.7134 11.3335 13.6108 11.7864 12.6997 12.6923C11.7886 13.5982 11.333 14.6982 11.333 15.9923C11.333 17.2864 11.786 18.3891 12.6918 19.3002C13.5977 20.2113 14.6977 20.6668 15.9918 20.6668ZM15.9997 22.6668C14.1552 22.6668 12.583 22.0168 11.283 20.7168C9.98301 19.4168 9.33301 17.8446 9.33301 16.0002C9.33301 14.1557 9.98301 12.5835 11.283 11.2835C12.583 9.9835 14.1552 9.3335 15.9997 9.3335C17.8441 9.3335 19.4163 9.9835 20.7163 11.2835C22.0163 12.5835 22.6663 14.1557 22.6663 16.0002C22.6663 17.8446 22.0163 19.4168 20.7163 20.7168C19.4163 22.0168 17.8441 22.6668 15.9997 22.6668ZM2.33301 17.0002C2.04967 17.0002 1.81217 16.9038 1.62051 16.711C1.42884 16.5182 1.33301 16.2793 1.33301 15.9943C1.33301 15.7093 1.42884 15.4724 1.62051 15.2835C1.81217 15.0946 2.04967 15.0002 2.33301 15.0002H5.66634C5.94967 15.0002 6.18717 15.0966 6.37884 15.2893C6.57051 15.4821 6.66634 15.721 6.66634 16.006C6.66634 16.291 6.57051 16.5279 6.37884 16.7168C6.18717 16.9057 5.94967 17.0002 5.66634 17.0002H2.33301ZM26.333 17.0002C26.0497 17.0002 25.8122 16.9038 25.6205 16.711C25.4288 16.5182 25.333 16.2793 25.333 15.9943C25.333 15.7093 25.4288 15.4724 25.6205 15.2835C25.8122 15.0946 26.0497 15.0002 26.333 15.0002H29.6663C29.9497 15.0002 30.1872 15.0966 30.3788 15.2893C30.5705 15.4821 30.6663 15.721 30.6663 16.006C30.6663 16.291 30.5705 16.5279 30.3788 16.7168C30.1872 16.9057 29.9497 17.0002 29.6663 17.0002H26.333ZM15.9938 6.66683C15.7088 6.66683 15.4719 6.571 15.283 6.37933C15.0941 6.18766 14.9997 5.95016 14.9997 5.66683V2.3335C14.9997 2.05016 15.0961 1.81266 15.2888 1.621C15.4816 1.42933 15.7205 1.3335 16.0055 1.3335C16.2905 1.3335 16.5275 1.42933 16.7163 1.621C16.9052 1.81266 16.9997 2.05016 16.9997 2.3335V5.66683C16.9997 5.95016 16.9033 6.18766 16.7105 6.37933C16.5177 6.571 16.2788 6.66683 15.9938 6.66683ZM15.9938 30.6668C15.7088 30.6668 15.4719 30.571 15.283 30.3793C15.0941 30.1877 14.9997 29.9502 14.9997 29.6668V26.3335C14.9997 26.0502 15.0961 25.8127 15.2888 25.621C15.4816 25.4293 15.7205 25.3335 16.0055 25.3335C16.2905 25.3335 16.5275 25.4293 16.7163 25.621C16.9052 25.8127 16.9997 26.0502 16.9997 26.3335V29.6668C16.9997 29.9502 16.9033 30.1877 16.7105 30.3793C16.5177 30.571 16.2788 30.6668 15.9938 30.6668ZM7.99967 9.40016L6.09967 7.5335C5.89967 7.3335 5.8038 7.09346 5.81204 6.8134C5.82026 6.53331 5.915 6.29442 6.09624 6.09673C6.29393 5.89902 6.53282 5.80016 6.81291 5.80016C7.09297 5.80016 7.33301 5.90016 7.53301 6.10016L9.39968 8.00016C9.57745 8.20016 9.66634 8.4335 9.66634 8.70016C9.66634 8.96683 9.57745 9.19461 9.39968 9.3835C9.2219 9.57239 8.99412 9.66683 8.71634 9.66683C8.43856 9.66683 8.19967 9.57794 7.99967 9.40016ZM24.4663 25.9002L22.5997 24.0002C22.4219 23.8002 22.333 23.5627 22.333 23.2877C22.333 23.0127 22.4275 22.7835 22.6163 22.6002C22.8052 22.4002 23.033 22.3002 23.2997 22.3002C23.5663 22.3002 23.7997 22.4002 23.9997 22.6002L25.8997 24.4668C26.0997 24.6668 26.1956 24.9069 26.1873 25.1869C26.1791 25.467 26.0844 25.7059 25.9031 25.9036C25.7054 26.1013 25.4665 26.2002 25.1864 26.2002C24.9064 26.2002 24.6663 26.1002 24.4663 25.9002ZM22.5997 9.40016C22.3997 9.20016 22.2997 8.96683 22.2997 8.70016C22.2997 8.4335 22.3997 8.20016 22.5997 8.00016L24.4663 6.10016C24.6663 5.90016 24.9064 5.80428 25.1864 5.81253C25.4665 5.82075 25.7054 5.91548 25.9031 6.09673C26.1008 6.29442 26.1997 6.53331 26.1997 6.8134C26.1997 7.09346 26.0997 7.3335 25.8997 7.5335L23.9997 9.40016C23.8219 9.57794 23.5956 9.66683 23.3209 9.66683C23.0461 9.66683 22.8057 9.57794 22.5997 9.40016ZM6.09624 25.9036C5.89853 25.7059 5.79967 25.467 5.79967 25.1869C5.79967 24.9069 5.89967 24.6668 6.09967 24.4668L7.99967 22.6002C8.19523 22.4002 8.42745 22.3002 8.69634 22.3002C8.96523 22.3002 9.19533 22.4002 9.38664 22.6002C9.59533 22.8002 9.69967 23.0335 9.69967 23.3002C9.69967 23.5668 9.59968 23.8002 9.39968 24.0002L7.53301 25.9002C7.33301 26.1002 7.09297 26.196 6.81291 26.1878C6.53282 26.1796 6.29393 26.0848 6.09624 25.9036Z"
      fill={disabled ? 'var(--color-grey-secondary)' : color}
    />
  </svg>
)

