(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_design-system_mdx"],{36062:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return t},title:function(){return d},toc:function(){return a},default:function(){return o}});var r=s("9880"),i=s("23169"),t={sidebar_label:"designSystem"},d="source.designSystem",a=[{text:"结构",depth:3,id:"结构"},{text:"Screens",depth:4,id:"screens"},{text:"Colors",depth:4,id:"colors"},{text:"Spacing",depth:4,id:"spacing"},{text:"Core plugins",depth:4,id:"core-plugins"},{text:"自定义默认配置",depth:3,id:"自定义默认配置"},{text:"覆盖默认配置",depth:4,id:"覆盖默认配置"},{text:"扩展默认配置",depth:4,id:"扩展默认配置"},{text:"引用其他值",depth:4,id:"引用其他值"},{text:"禁用整个核心插件",depth:4,id:"禁用整个核心插件"},{text:"添加自己的 key",depth:4,id:"添加自己的-key"},{text:"配置引用",depth:3,id:"配置引用"},{text:"额外的配置",depth:3,id:"额外的配置"},{text:"source.designSystem.supportStyledComponents",depth:4,id:"sourcedesignsystemsupportstyledcomponents"}];function c(n){var e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",details:"details",summary:"summary",pre:"pre",h3:"h3",h4:"h4",h5:"h5"},(0,i.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"sourcedesignsystem",children:["source.designSystem",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedesignsystem",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"Object"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"默认值："})," 见下方配置详情。"]}),"\n"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive caution",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"注意"}),(0,r.jsxs)(e.div,{className:"modern-directive-content",children:[(0,r.jsxs)(e.p,{children:["需要先通过 ",(0,r.jsx)(e.code,{children:"pnpm run new"})," 启用 Tailwind CSS 功能。"]}),"\n"]})]}),"\n",(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"designSystem 配置详情"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  screens: {\n    sm: '640px',\n    md: '768px',\n    lg: '1024px',\n    xl: '1280px',\n  },\n  colors: {\n    transparent: 'transparent',\n    current: 'currentColor',\n\n    black: '#000',\n    white: '#fff',\n\n    gray: {\n      100: '#f7fafc',\n      200: '#edf2f7',\n      300: '#e2e8f0',\n      400: '#cbd5e0',\n      500: '#a0aec0',\n      600: '#718096',\n      700: '#4a5568',\n      800: '#2d3748',\n      900: '#1a202c',\n    },\n    red: {\n      100: '#fff5f5',\n      200: '#fed7d7',\n      300: '#feb2b2',\n      400: '#fc8181',\n      500: '#f56565',\n      600: '#e53e3e',\n      700: '#c53030',\n      800: '#9b2c2c',\n      900: '#742a2a',\n    },\n    orange: {\n      100: '#fffaf0',\n      200: '#feebc8',\n      300: '#fbd38d',\n      400: '#f6ad55',\n      500: '#ed8936',\n      600: '#dd6b20',\n      700: '#c05621',\n      800: '#9c4221',\n      900: '#7b341e',\n    },\n    yellow: {\n      100: '#fffff0',\n      200: '#fefcbf',\n      300: '#faf089',\n      400: '#f6e05e',\n      500: '#ecc94b',\n      600: '#d69e2e',\n      700: '#b7791f',\n      800: '#975a16',\n      900: '#744210',\n    },\n    green: {\n      100: '#f0fff4',\n      200: '#c6f6d5',\n      300: '#9ae6b4',\n      400: '#68d391',\n      500: '#48bb78',\n      600: '#38a169',\n      700: '#2f855a',\n      800: '#276749',\n      900: '#22543d',\n    },\n    teal: {\n      100: '#e6fffa',\n      200: '#b2f5ea',\n      300: '#81e6d9',\n      400: '#4fd1c5',\n      500: '#38b2ac',\n      600: '#319795',\n      700: '#2c7a7b',\n      800: '#285e61',\n      900: '#234e52',\n    },\n    blue: {\n      100: '#ebf8ff',\n      200: '#bee3f8',\n      300: '#90cdf4',\n      400: '#63b3ed',\n      500: '#4299e1',\n      600: '#3182ce',\n      700: '#2b6cb0',\n      800: '#2c5282',\n      900: '#2a4365',\n    },\n    indigo: {\n      100: '#ebf4ff',\n      200: '#c3dafe',\n      300: '#a3bffa',\n      400: '#7f9cf5',\n      500: '#667eea',\n      600: '#5a67d8',\n      700: '#4c51bf',\n      800: '#434190',\n      900: '#3c366b',\n    },\n    purple: {\n      100: '#faf5ff',\n      200: '#e9d8fd',\n      300: '#d6bcfa',\n      400: '#b794f4',\n      500: '#9f7aea',\n      600: '#805ad5',\n      700: '#6b46c1',\n      800: '#553c9a',\n      900: '#44337a',\n    },\n    pink: {\n      100: '#fff5f7',\n      200: '#fed7e2',\n      300: '#fbb6ce',\n      400: '#f687b3',\n      500: '#ed64a6',\n      600: '#d53f8c',\n      700: '#b83280',\n      800: '#97266d',\n      900: '#702459',\n    },\n  },\n  spacing: {\n    px: '1px',\n    0: '0',\n    1: '0.25rem',\n    2: '0.5rem',\n    3: '0.75rem',\n    4: '1rem',\n    5: '1.25rem',\n    6: '1.5rem',\n    8: '2rem',\n    10: '2.5rem',\n    12: '3rem',\n    16: '4rem',\n    20: '5rem',\n    24: '6rem',\n    32: '8rem',\n    40: '10rem',\n    48: '12rem',\n    56: '14rem',\n    64: '16rem',\n  },\n  backgroundColor: theme => theme('colors'),\n  backgroundOpacity: theme => theme('opacity'),\n  backgroundPosition: {\n    bottom: 'bottom',\n    center: 'center',\n    left: 'left',\n    'left-bottom': 'left bottom',\n    'left-top': 'left top',\n    right: 'right',\n    'right-bottom': 'right bottom',\n    'right-top': 'right top',\n    top: 'top',\n  },\n  backgroundSize: {\n    auto: 'auto',\n    cover: 'cover',\n    contain: 'contain',\n  },\n  borderColor: theme => ({\n    ...theme('colors'),\n    default: theme('colors.gray.300', 'currentColor'),\n  }),\n  borderOpacity: theme => theme('opacity'),\n  borderRadius: {\n    none: '0',\n    sm: '0.125rem',\n    default: '0.25rem',\n    md: '0.375rem',\n    lg: '0.5rem',\n    full: '9999px',\n  },\n  borderWidth: {\n    default: '1px',\n    0: '0',\n    2: '2px',\n    4: '4px',\n    8: '8px',\n  },\n  boxShadow: {\n    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',\n    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',\n    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',\n    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',\n    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',\n    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',\n    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',\n    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',\n    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',\n    none: 'none',\n  },\n  container: {},\n  cursor: {\n    auto: 'auto',\n    default: 'default',\n    pointer: 'pointer',\n    wait: 'wait',\n    text: 'text',\n    move: 'move',\n    'not-allowed': 'not-allowed',\n  },\n  divideColor: theme => theme('borderColor'),\n  divideOpacity: theme => theme('borderOpacity'),\n  divideWidth: theme => theme('borderWidth'),\n  fill: {\n    current: 'currentColor',\n  },\n  flex: {\n    1: '1 1 0%',\n    auto: '1 1 auto',\n    initial: '0 1 auto',\n    none: 'none',\n  },\n  flexGrow: {\n    0: '0',\n    default: '1',\n  },\n  flexShrink: {\n    0: '0',\n    default: '1',\n  },\n  fontFamily: {\n    sans: [\n      'system-ui',\n      '-apple-system',\n      'BlinkMacSystemFont',\n      '\"Segoe UI\"',\n      'Roboto',\n      '\"Helvetica Neue\"',\n      'Arial',\n      '\"Noto Sans\"',\n      'sans-serif',\n      '\"Apple Color Emoji\"',\n      '\"Segoe UI Emoji\"',\n      '\"Segoe UI Symbol\"',\n      '\"Noto Color Emoji\"',\n    ],\n    serif: ['Georgia', 'Cambria', '\"Times New Roman\"', 'Times', 'serif'],\n    mono: [\n      'Menlo',\n      'Monaco',\n      'Consolas',\n      '\"Liberation Mono\"',\n      '\"Courier New\"',\n      'monospace',\n    ],\n  },\n  fontSize: {\n    xs: '0.75rem',\n    sm: '0.875rem',\n    base: '1rem',\n    lg: '1.125rem',\n    xl: '1.25rem',\n    '2xl': '1.5rem',\n    '3xl': '1.875rem',\n    '4xl': '2.25rem',\n    '5xl': '3rem',\n    '6xl': '4rem',\n  },\n  fontWeight: {\n    hairline: '100',\n    thin: '200',\n    light: '300',\n    normal: '400',\n    medium: '500',\n    semibold: '600',\n    bold: '700',\n    extrabold: '800',\n    black: '900',\n  },\n  height: theme => ({\n    auto: 'auto',\n    ...theme('spacing'),\n    full: '100%',\n    screen: '100vh',\n  }),\n  inset: {\n    0: '0',\n    auto: 'auto',\n  },\n  letterSpacing: {\n    tighter: '-0.05em',\n    tight: '-0.025em',\n    normal: '0',\n    wide: '0.025em',\n    wider: '0.05em',\n    widest: '0.1em',\n  },\n  lineHeight: {\n    none: '1',\n    tight: '1.25',\n    snug: '1.375',\n    normal: '1.5',\n    relaxed: '1.625',\n    loose: '2',\n    3: '.75rem',\n    4: '1rem',\n    5: '1.25rem',\n    6: '1.5rem',\n    7: '1.75rem',\n    8: '2rem',\n    9: '2.25rem',\n    10: '2.5rem',\n  },\n  listStyleType: {\n    none: 'none',\n    disc: 'disc',\n    decimal: 'decimal',\n  },\n  margin: (theme, { negative }) => ({\n    auto: 'auto',\n    ...theme('spacing'),\n    ...negative(theme('spacing')),\n  }),\n  maxHeight: {\n    full: '100%',\n    screen: '100vh',\n  },\n  maxWidth: (theme, { breakpoints }) => ({\n    none: 'none',\n    xs: '20rem',\n    sm: '24rem',\n    md: '28rem',\n    lg: '32rem',\n    xl: '36rem',\n    '2xl': '42rem',\n    '3xl': '48rem',\n    '4xl': '56rem',\n    '5xl': '64rem',\n    '6xl': '72rem',\n    full: '100%',\n    ...breakpoints(theme('screens')),\n  }),\n  minHeight: {\n    0: '0',\n    full: '100%',\n    screen: '100vh',\n  },\n  minWidth: {\n    0: '0',\n    full: '100%',\n  },\n  objectPosition: {\n    bottom: 'bottom',\n    center: 'center',\n    left: 'left',\n    'left-bottom': 'left bottom',\n    'left-top': 'left top',\n    right: 'right',\n    'right-bottom': 'right bottom',\n    'right-top': 'right top',\n    top: 'top',\n  },\n  opacity: {\n    0: '0',\n    25: '0.25',\n    50: '0.5',\n    75: '0.75',\n    100: '1',\n  },\n  order: {\n    first: '-9999',\n    last: '9999',\n    none: '0',\n    1: '1',\n    2: '2',\n    3: '3',\n    4: '4',\n    5: '5',\n    6: '6',\n    7: '7',\n    8: '8',\n    9: '9',\n    10: '10',\n    11: '11',\n    12: '12',\n  },\n  padding: theme => theme('spacing'),\n  placeholderColor: theme => theme('colors'),\n  placeholderOpacity: theme => theme('opacity'),\n  space: (theme, { negative }) => ({\n    ...theme('spacing'),\n    ...negative(theme('spacing')),\n  }),\n  stroke: {\n    current: 'currentColor',\n  },\n  strokeWidth: {\n    0: '0',\n    1: '1',\n    2: '2',\n  },\n  textColor: theme => theme('colors'),\n  textOpacity: theme => theme('opacity'),\n  width: theme => ({\n    auto: 'auto',\n    ...theme('spacing'),\n    '1/2': '50%',\n    '1/3': '33.333333%',\n    '2/3': '66.666667%',\n    '1/4': '25%',\n    '2/4': '50%',\n    '3/4': '75%',\n    '1/5': '20%',\n    '2/5': '40%',\n    '3/5': '60%',\n    '4/5': '80%',\n    '1/6': '16.666667%',\n    '2/6': '33.333333%',\n    '3/6': '50%',\n    '4/6': '66.666667%',\n    '5/6': '83.333333%',\n    '1/12': '8.333333%',\n    '2/12': '16.666667%',\n    '3/12': '25%',\n    '4/12': '33.333333%',\n    '5/12': '41.666667%',\n    '6/12': '50%',\n    '7/12': '58.333333%',\n    '8/12': '66.666667%',\n    '9/12': '75%',\n    '10/12': '83.333333%',\n    '11/12': '91.666667%',\n    full: '100%',\n    screen: '100vw',\n  }),\n  zIndex: {\n    auto: 'auto',\n    0: '0',\n    10: '10',\n    20: '20',\n    30: '30',\n    40: '40',\n    50: '50',\n  },\n  gap: theme => theme('spacing'),\n  gridTemplateColumns: {\n    none: 'none',\n    1: 'repeat(1, minmax(0, 1fr))',\n    2: 'repeat(2, minmax(0, 1fr))',\n    3: 'repeat(3, minmax(0, 1fr))',\n    4: 'repeat(4, minmax(0, 1fr))',\n    5: 'repeat(5, minmax(0, 1fr))',\n    6: 'repeat(6, minmax(0, 1fr))',\n    7: 'repeat(7, minmax(0, 1fr))',\n    8: 'repeat(8, minmax(0, 1fr))',\n    9: 'repeat(9, minmax(0, 1fr))',\n    10: 'repeat(10, minmax(0, 1fr))',\n    11: 'repeat(11, minmax(0, 1fr))',\n    12: 'repeat(12, minmax(0, 1fr))',\n  },\n  gridColumn: {\n    auto: 'auto',\n    'span-1': 'span 1 / span 1',\n    'span-2': 'span 2 / span 2',\n    'span-3': 'span 3 / span 3',\n    'span-4': 'span 4 / span 4',\n    'span-5': 'span 5 / span 5',\n    'span-6': 'span 6 / span 6',\n    'span-7': 'span 7 / span 7',\n    'span-8': 'span 8 / span 8',\n    'span-9': 'span 9 / span 9',\n    'span-10': 'span 10 / span 10',\n    'span-11': 'span 11 / span 11',\n    'span-12': 'span 12 / span 12',\n  },\n  gridColumnStart: {\n    auto: 'auto',\n    1: '1',\n    2: '2',\n    3: '3',\n    4: '4',\n    5: '5',\n    6: '6',\n    7: '7',\n    8: '8',\n    9: '9',\n    10: '10',\n    11: '11',\n    12: '12',\n    13: '13',\n  },\n  gridColumnEnd: {\n    auto: 'auto',\n    1: '1',\n    2: '2',\n    3: '3',\n    4: '4',\n    5: '5',\n    6: '6',\n    7: '7',\n    8: '8',\n    9: '9',\n    10: '10',\n    11: '11',\n    12: '12',\n    13: '13',\n  },\n  gridTemplateRows: {\n    none: 'none',\n    1: 'repeat(1, minmax(0, 1fr))',\n    2: 'repeat(2, minmax(0, 1fr))',\n    3: 'repeat(3, minmax(0, 1fr))',\n    4: 'repeat(4, minmax(0, 1fr))',\n    5: 'repeat(5, minmax(0, 1fr))',\n    6: 'repeat(6, minmax(0, 1fr))',\n  },\n  gridRow: {\n    auto: 'auto',\n    'span-1': 'span 1 / span 1',\n    'span-2': 'span 2 / span 2',\n    'span-3': 'span 3 / span 3',\n    'span-4': 'span 4 / span 4',\n    'span-5': 'span 5 / span 5',\n    'span-6': 'span 6 / span 6',\n  },\n  gridRowStart: {\n    auto: 'auto',\n    1: '1',\n    2: '2',\n    3: '3',\n    4: '4',\n    5: '5',\n    6: '6',\n    7: '7',\n  },\n  gridRowEnd: {\n    auto: 'auto',\n    1: '1',\n    2: '2',\n    3: '3',\n    4: '4',\n    5: '5',\n    6: '6',\n    7: '7',\n  },\n  transformOrigin: {\n    center: 'center',\n    top: 'top',\n    'top-right': 'top right',\n    right: 'right',\n    'bottom-right': 'bottom right',\n    bottom: 'bottom',\n    'bottom-left': 'bottom left',\n    left: 'left',\n    'top-left': 'top left',\n  },\n  scale: {\n    0: '0',\n    50: '.5',\n    75: '.75',\n    90: '.9',\n    95: '.95',\n    100: '1',\n    105: '1.05',\n    110: '1.1',\n    125: '1.25',\n    150: '1.5',\n  },\n  rotate: {\n    '-180': '-180deg',\n    '-90': '-90deg',\n    '-45': '-45deg',\n    0: '0',\n    45: '45deg',\n    90: '90deg',\n    180: '180deg',\n  },\n  translate: (theme, { negative }) => ({\n    ...theme('spacing'),\n    ...negative(theme('spacing')),\n    '-full': '-100%',\n    '-1/2': '-50%',\n    '1/2': '50%',\n    full: '100%',\n  }),\n  skew: {\n    '-12': '-12deg',\n    '-6': '-6deg',\n    '-3': '-3deg',\n    0: '0',\n    3: '3deg',\n    6: '6deg',\n    12: '12deg',\n  },\n  transitionProperty: {\n    none: 'none',\n    all: 'all',\n    default:\n      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',\n    colors: 'background-color, border-color, color, fill, stroke',\n    opacity: 'opacity',\n    shadow: 'box-shadow',\n    transform: 'transform',\n  },\n  transitionTimingFunction: {\n    linear: 'linear',\n    in: 'cubic-bezier(0.4, 0, 1, 1)',\n    out: 'cubic-bezier(0, 0, 0.2, 1)',\n    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',\n  },\n  transitionDuration: {\n    75: '75ms',\n    100: '100ms',\n    150: '150ms',\n    200: '200ms',\n    300: '300ms',\n    500: '500ms',\n    700: '700ms',\n    1000: '1000ms',\n  },\n  transitionDelay: {\n    75: '75ms',\n    100: '100ms',\n    150: '150ms',\n    200: '200ms',\n    300: '300ms',\n    500: '500ms',\n    700: '700ms',\n    1000: '1000ms',\n  },\n};\n"})}),(0,r.jsxs)(e.p,{children:[":::tip 提示\n更多关于：",(0,r.jsx)("a",{href:"https://tailwindcss.com/docs/configuration#theme",target:"_blank",children:"TailwindCSS 配置"}),"。"]}),(0,r.jsx)(e.p,{children:":::"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"designSystem"})," 用于定义项目的调色板、排版比例（Typographic Scales 或者 Type Scale）、字体列表、断点、边框圆角值等等。因为 Modern.js 借用了 Tailwind Theme 的设计方式，并且内部也集成了 Tailwind CSS，所以 ",(0,r.jsx)(e.code,{children:"designSystem"})," 使用方式与 Tailwind CSS Theme 相同。"]}),"\n",(0,r.jsxs)(e.h3,{id:"结构",children:["结构",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#结构",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"designSystem"})," 对象包含 ",(0,r.jsx)(e.code,{children:"screens"}),"、",(0,r.jsx)(e.code,{children:"colors"})," 和 ",(0,r.jsx)(e.code,{children:"spacing"})," 的属性，以及每个可自定义核心插件。"]}),"\n",(0,r.jsxs)(e.h4,{id:"screens",children:["Screens",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#screens",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["使用 ",(0,r.jsx)(e.code,{children:"screens"})," 可以自定义项目中的响应断点："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  screens: {\n    sm: '640px',\n    md: '768px',\n    lg: '1024px',\n    xl: '1280px',\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["其中 ",(0,r.jsx)(e.code,{children:"screens"})," 对象里的属性名是屏幕名称（用作 ",(0,r.jsx)(e.code,{children:"Tailwind CSS"})," 生成的自适应实用程序变体的前缀，例如 ",(0,r.jsx)(e.code,{children:"md:text-center"}),"），值是该断点应在其开始的 ",(0,r.jsx)(e.code,{children:"min-width"}),"。"]}),"\n",(0,r.jsx)(e.p,{children:"默认断点受常见设备分辨率的启发："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  screens: {\n    sm: '640px',\n    // => @media (min-width: 640px) { ... }\n\n    md: '768px',\n    // => @media (min-width: 768px) { ... }\n\n    lg: '1024px',\n    // => @media (min-width: 1024px) { ... }\n\n    xl: '1280px',\n    // => @media (min-width: 1280px) { ... }\n  },\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"你可以在你的项目中使用任意你喜欢的名称作为断点的属性："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  screens: {\n    tablet: '640px',\n    // => @media (min-width: 640px) { ... }\n\n    laptop: '1024px',\n    // => @media (min-width: 1024px) { ... }\n\n    desktop: '1280px',\n    // => @media (min-width: 1280px) { ... }\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["这些屏幕名称反映在 ",(0,r.jsx)(e.code,{children:"utilities"})," 中，因此 ",(0,r.jsx)(e.code,{children:"text-center"})," 现在是这样的："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-css",children:".text-center {\n  text-align: center;\n}\n\n@media (min-width: 640px) {\n  .tablet\\:text-center {\n    text-align: center;\n  }\n}\n\n@media (min-width: 1024px) {\n  .laptop\\:text-center {\n    text-align: center;\n  }\n}\n\n@media (min-width: 1280px) {\n  .desktop\\:text-center {\n    text-align: center;\n  }\n}\n"})}),"\n",(0,r.jsxs)(e.h5,{id:"max-width-断点",children:["Max-width 断点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#max-width-断点",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["如果要使用 ",(0,r.jsx)(e.code,{children:"max-width"})," 断点而不是 ",(0,r.jsx)(e.code,{children:"min-width"}),"，可以将屏幕指定为具有 ",(0,r.jsx)(e.code,{children:"max"})," 属性的对象："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  screens: {\n    xl: { max: '1279px' },\n    // => @media (max-width: 1279px) { ... }\n\n    lg: { max: '1023px' },\n    // => @media (max-width: 1023px) { ... }\n\n    md: { max: '767px' },\n    // => @media (max-width: 767px) { ... }\n\n    sm: { max: '639px' },\n    // => @media (max-width: 639px) { ... }\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["如有必要，以创建带有 ",(0,r.jsx)(e.code,{children:"min-width"})," 和 ",(0,r.jsx)(e.code,{children:"max-width"})," 定义的断点，例如："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  screens: {\n    sm: { min: '640px', max: '767px' },\n    md: { min: '768px', max: '1023px' },\n    lg: { min: '1024px', max: '1279px' },\n    xl: { min: '1280px' },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h5,{id:"多个范围的断点",children:["多个范围的断点",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#多个范围的断点",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"有时，将单个断点定义应用于多个范围会很有用。"}),"\n",(0,r.jsxs)(e.p,{children:["例如，假设您有一个 ",(0,r.jsx)(e.code,{children:"sidebar"}),"，并且希望断点基于内容区域宽度而不是整个视口。您可以模拟这种情况，当 ",(0,r.jsx)(e.code,{children:"sidebar"})," 可见并缩小内容区域时，断点的样式使用较小的断点样式："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  screens: {\n    sm: '500px',\n    md: [\n      // Sidebar appears at 768px, so revert to `sm:` styles between 768px\n      // and 868px, after which the main content area is wide enough again to\n      // apply the `md:` styles.\n      { min: '668px', max: '767px' },\n      { min: '868px' },\n    ],\n    lg: '1100px',\n    xl: '1400px',\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h5,{id:"自定义媒体查询",children:["自定义媒体查询",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义媒体查询",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["如果需要为断点提供完全自定义的媒体查询，则可以使用带有 ",(0,r.jsx)(e.code,{children:"raw"})," 属性的对象："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  extend: {\n    screens: {\n      portrait: { raw: '(orientation: portrait)' },\n      // => @media (orientation: portrait) { ... }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h5,{id:"print-样式",children:["Print 样式",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#print-样式",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["如果需要为打印应用不同的样式，则 ",(0,r.jsx)(e.code,{children:"raw"})," 选项可能特别有用。"]}),"\n",(0,r.jsxs)(e.p,{children:["需要做的就是在 ",(0,r.jsx)(e.code,{children:"designSystem.extend.screens"})," 下添加一个 ",(0,r.jsx)(e.code,{children:"print"}),"："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  extend: {\n    screens: {\n      print: { raw: 'print' },\n      // => @media print { ... }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["然后，可以使用诸如 ",(0,r.jsx)(e.code,{children:"print:text-black"})," 之类的类来指定仅当某人尝试打印页面时才应用的样式："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<div class="text-gray-700 print:text-black">\n  {/* ...  */}\n</div>\n'})}),"\n",(0,r.jsxs)(e.h5,{id:"dark-mode",children:["Dark Mode",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#dark-mode",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"raw"})," 选项可以用于实现 “暗模式” 屏幕："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  extend: {\n    screens: {\n      dark: { raw: '(prefers-color-scheme: dark)' },\n      // => @media (prefers-color-scheme: dark) { ... }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["然后，您可以使用 ",(0,r.jsx)(e.code,{children:"dark:"})," 前缀在暗模式下为元素设置不同的样式："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<div class="text-gray-700 dark:text-gray-200">\n  {/* ...  */}\n</div>\n'})}),"\n",(0,r.jsxs)(e.p,{children:["请注意，由于这些 ",(0,r.jsx)(e.code,{children:"screen variants"})," 是在 ",(0,r.jsx)(e.code,{children:"Tailwind CSS"})," 中实现的，因此",(0,r.jsx)(e.strong,{children:"无法使用这种方法将断点与暗模式结合使用"})," ，例如 ",(0,r.jsx)(e.code,{children:"md:dark:text-gray-300"})," 将不起作用。"]}),"\n",(0,r.jsxs)(e.h4,{id:"colors",children:["Colors",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#colors",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"colors"})," 属性可让您自定义项目的全局调色板。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  colors: {\n    transparent: 'transparent',\n    black: '#000',\n    white: '#fff',\n    gray: {\n      100: '#f7fafc',\n      // ...\n      900: '#1a202c',\n    },\n\n    // ...\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["默认情况下，这些颜色由 ",(0,r.jsx)(e.code,{children:"backgroundColor"}),"，",(0,r.jsx)(e.code,{children:"textColor"})," 和 ",(0,r.jsx)(e.code,{children:"borderColor"})," 核心插件继承。"]}),"\n",(0,r.jsxs)(e.p,{children:["想了解更多，可以查看：",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/customizing-colors",target:"_blank",rel:"noopener noreferrer",children:"Customizing Colors"}),"。"]}),"\n",(0,r.jsxs)(e.h4,{id:"spacing",children:["Spacing",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#spacing",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["使用 ",(0,r.jsx)(e.code,{children:"space"})," 属性，可以自定义项目的全局间距和缩放比例："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  spacing: {\n    px: '1px',\n    0: '0',\n    1: '0.25rem',\n    2: '0.5rem',\n    3: '0.75rem',\n    4: '1rem',\n    5: '1.25rem',\n    6: '1.5rem',\n    8: '2rem',\n    10: '2.5rem',\n    12: '3rem',\n    16: '4rem',\n    20: '5rem',\n    24: '6rem',\n    32: '8rem',\n    40: '10rem',\n    48: '12rem',\n    56: '14rem',\n    64: '16rem',\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["默认情况下，这些值由 ",(0,r.jsx)(e.code,{children:"padding"}),"，",(0,r.jsx)(e.code,{children:"margin"}),"，",(0,r.jsx)(e.code,{children:"negativeMargin"}),"，",(0,r.jsx)(e.code,{children:"width"})," 和 ",(0,r.jsx)(e.code,{children:"height"})," 核心插件继承。"]}),"\n",(0,r.jsxs)(e.p,{children:["想要了解更多，看 ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/customizing-spacing",target:"_blank",rel:"noopener noreferrer",children:"Customizing Spacing"}),"。"]}),"\n",(0,r.jsxs)(e.h4,{id:"core-plugins",children:["Core plugins",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#core-plugins",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"主题部分的其余部分用于配置每个核心插件可用的值。"}),"\n",(0,r.jsxs)(e.p,{children:["例如，",(0,r.jsx)(e.code,{children:"borderRadius"})," 属性可让您自定义将生成的圆角的 ",(0,r.jsx)(e.code,{children:"utilities"}),"："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  borderRadius: {\n    none: '0',\n    sm: '.125rem',\n    default: '.25rem',\n    lg: '.5rem',\n    full: '9999px',\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["**属性名确定所生成类的后缀，值确定实际 CSS 声明的值。**上面的示例 ",(0,r.jsx)(e.code,{children:"borderRadius"})," 配置将生成以下 CSS 类："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-css",children:".rounded-none {\n  border-radius: 0;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["会注意到，在主题配置中使用 ",(0,r.jsx)(e.code,{children:"default"})," 属性创建了不带后缀的 ",(0,r.jsx)(e.code,{children:"rounded"})," 类。这是许多（尽管不是全部）核心插件支持的 Tailwind CSS 中的通用约定。"]}),"\n",(0,r.jsx)(e.p,{children:"要了解有关自定义特定核心插件的更多信息，请访问该插件的文档。"}),"\n",(0,r.jsxs)(e.h3,{id:"自定义默认配置",children:["自定义默认配置",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义默认配置",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"开箱即用，您的项目将自动从默认主题配置继承值。如果想自定义默认主题，则根据目标有几种不同的选择。"}),"\n",(0,r.jsxs)(e.h4,{id:"覆盖默认配置",children:["覆盖默认配置",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#覆盖默认配置",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["要覆盖默认配置中的选项，请在 ",(0,r.jsx)(e.code,{children:"designSystem"})," 中添加要覆盖的属性："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const designSystem = {\n  // Replaces all of the default `opacity` values\n  opacity: {\n    0: '0',\n    20: '0.2',\n    40: '0.4',\n    60: '0.6',\n    80: '0.8',\n    100: '1',\n  },\n};\n\nexport default defineConfig({\n  source: {\n    designSystem,\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.p,{children:["这将完全替换默认属性配置，因此在上面的示例中，不会生成默认的 ",(0,r.jsx)(e.code,{children:"opacity utilities"}),"。"]}),"\n",(0,r.jsx)(e.p,{children:"您未提供的任何属性都将从默认主题继承，因此在上面的示例中，将保留颜色，间距，边框圆角，背景位置等内容的默认主题配置。"}),"\n",(0,r.jsxs)(e.h4,{id:"扩展默认配置",children:["扩展默认配置",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展默认配置",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["如果您想保留主题选项的默认值，但又要添加新值，请在 ",(0,r.jsx)(e.code,{children:"designSystem.extend"})," 属性下添加扩展的内容。"]}),"\n",(0,r.jsxs)(e.p,{children:["例如，如果您想添加一个额外的断点但保留现有的断点，则可以扩展 ",(0,r.jsx)(e.code,{children:"screens"})," 属性："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const designSystem = {\n  extend: {\n    // Adds a new breakpoint in addition to the default breakpoints\n    screens: {\n      '2xl': '1440px',\n    },\n  },\n};\n\nexport default defineConfig({\n  source: {\n    designSystem,\n  },\n});\n"})}),"\n",(0,r.jsx)(e.p,{children:"您当然可以覆盖默认主题的某些部分，并在同一配置中扩展默认主题的其他部分："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const designSystem = {\n  opacity: {\n    0: '0',\n    20: '0.2',\n    40: '0.4',\n    60: '0.6',\n    80: '0.8',\n    100: '1',\n  },\n  extend: {\n    screens: {\n      '2xl': '1440px',\n    },\n  },\n};\n\nexport default defineConfig({\n  source: {\n    designSystem,\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h4,{id:"引用其他值",children:["引用其他值",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#引用其他值",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["如果需要在配置中引用另一个值，可以通过提供闭包函数而不是静态值来实现。函数将收到 ",(0,r.jsx)(e.code,{children:"theme()"})," 函数作为参数，您可以使用该函数使用点表示法在配置中查找其他值。"]}),"\n",(0,r.jsxs)(e.p,{children:["例如，您可以在 ",(0,r.jsx)(e.code,{children:"fill"})," 配置上通过引用 ",(0,r.jsx)(e.code,{children:"theme('colors')"})," 为调色板中的每种颜色生成 ",(0,r.jsx)(e.code,{children:"fill"})," utilities。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const designSystem = {\n  colors: {\n    // ...\n  },\n  fill: theme => theme('colors'),\n};\n\nexport default defineConfig({\n  source: {\n    designSystem,\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"theme()"}),"函数尝试从已经完全合并的配置对象中找到您要查找的值，因此它可以引用您自己的自定义设置以及默认主题值。它也可以递归工作，因此只要链末尾有一个静态值，它就可以解析您要查找的值。"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"引用默认配置"})}),"\n",(0,r.jsxs)(e.p,{children:["如果出于任何原因想要引用默认配置中的值，则可以从 ",(0,r.jsx)(e.code,{children:"tailwindcss/defaultTheme"})," 导入它。一个有用的示例是，如果要将添加默认配置提供的字体中某一个字体："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const defaultTheme = require('tailwindcss/defaultTheme');\n\nconst designSystem = {\n  extend: {\n    fontFamily: {\n      sans: ['Lato', ...defaultTheme.fontFamily.sans],\n    },\n  },\n};\n\nexport default defineConfig({\n  source: {\n    designSystem,\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h4,{id:"禁用整个核心插件",children:["禁用整个核心插件",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用整个核心插件",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["如果您不想为某个核心插件生成任何类，则最好在 ",(0,r.jsx)(e.code,{children:"corePlugins"})," 配置中将该插件设置为 ",(0,r.jsx)(e.code,{children:"false"}),"，而不是在配置中为该属性提供一个空对象："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"// Don't assign an empty object in your theme configuration\n\nconst designSystem = {\n  opacity: {},\n};\n\n// Do disable the plugin in your corePlugins configuration\nconst designSyttem = {\n  corePlugins: {\n    opacity: false,\n  },\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"最终结果是相同的，但是由于许多核心插件未公开任何配置，因此无论如何只能使用 corePlugins 禁用它们，最好保持一致。"}),"\n",(0,r.jsxs)(e.h4,{id:"添加自己的-key",children:["添加自己的 key",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#添加自己的-key",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"在很多情况下，将自己的属性添加到配置对象可能会很有用。"}),"\n",(0,r.jsxs)(e.p,{children:["其中一个示例是添加新属性为多个核心插件之间复用。例如，您可以提取一个 ",(0,r.jsx)(e.code,{children:"positions"}),"对象，",(0,r.jsx)(e.code,{children:"backgroundPosition"})," 和 ",(0,r.jsx)(e.code,{children:"objectPosition"})," 插件都可以引用该对象："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const designSystem = {\n  positions: {\n    bottom: 'bottom',\n    center: 'center',\n    left: 'left',\n    'left-bottom': 'left bottom',\n    'left-top': 'left top',\n    right: 'right',\n    'right-bottom': 'right bottom',\n    'right-top': 'right top',\n    top: 'top',\n  },\n  backgroundPosition: theme => theme('positions'),\n  objectPosition: theme => theme('positions'),\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"另一个示例是在自定义插件中添加新的属性以进行引用。例如，如果您为项目编写了渐变插件，则可以向该插件引用的主题对象添加渐变属性："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const designSystem = {\n  gradients: theme => ({\n    'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],\n    'purple-blue': [theme('colors.purple.500'), theme('colors.blue.500')],\n    // ...\n  }),\n};\n\nexport default defineConfig({\n  source: {\n    designSystem,\n  },\n  tools: {\n    tailwind: {\n      plugins: [require('./plugins/gradients')],\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"配置引用",children:["配置引用",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置引用",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["除了 ",(0,r.jsx)(e.code,{children:"screens"}),"，",(0,r.jsx)(e.code,{children:"colors"})," 和 ",(0,r.jsx)(e.code,{children:"spacing"})," 外，配置对象中的所有属性都映射到 ",(0,r.jsx)(e.code,{children:"Tailwind CSS"})," 的核心插件上。由于许多插件负责仅接受静态值集（例如，例如",(0,r.jsx)(e.code,{children:"float"}),"）的 CSS 属性，因此请注意，并非每个插件在主题对象中都有对应的属性。"]}),"\n",(0,r.jsxs)(e.p,{children:["所有这些属性也可以在 ",(0,r.jsx)(e.code,{children:"designSystem.extend"})," 属性下使用，以扩展默认主题。"]}),"\n",(0,r.jsxs)(e.p,{children:["关于所有属性的作用，可以查看此 ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/theme#configuration-reference",target:"_blank",rel:"noopener noreferrer",children:"链接"}),"。"]}),"\n",(0,r.jsxs)(e.h3,{id:"额外的配置",children:["额外的配置",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#额外的配置",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"除了与 Tailwind CSS Theme 相同的配置以外，还有 Modern.js 提供的额外的配置。"}),"\n",(0,r.jsxs)(e.h4,{id:"sourcedesignsystemsupportstyledcomponents",children:["source.designSystem.supportStyledComponents",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedesignsystemsupportstyledcomponents",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["该配置类型为 ",(0,r.jsx)(e.code,{children:"boolean"}),"，默认为 ",(0,r.jsx)(e.code,{children:"false"}),"。"]}),"\n",(0,r.jsxs)(e.p,{children:["当该配置值为 ",(0,r.jsx)(e.code,{children:"true"})," 时，运行时在应用外层提供 ",(0,r.jsx)(e.code,{children:"styled-components"})," ",(0,r.jsx)(e.code,{children:"ThemeProvider"})," 组件，并且将通过 ",(0,r.jsx)(e.code,{children:"designSystem"})," 生成的 ",(0,r.jsx)(e.code,{children:"Theme Token"})," 对象注入。"]})]})}var o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(c,n)})):c(n)}}}]);